<?php

namespace App\Jobs;

use App\Enums\FotoEstado;
use App\Models\Corredor;
use App\Models\Foto;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use App\Services\SyncService;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcesarDorsalDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 1;

    public int $maxExceptions = 1;

    public function __construct(
        public int $importacionId,
        public string $folderId,
        public string $dorsal
    ) {}

    public function handle(GoogleDriveService $driveService, SyncService $syncService): void
    {
        $importacion = Importacion::findOrFail($this->importacionId);
        $corredor = Corredor::where('evento_id', $importacion->evento_id)
            ->where('dorsal', $this->dorsal)
            ->first();

        $processed = 0;

$driveService->paginateFiles($this->folderId, [], function ($file) use ($driveService, $importacion, $corredor, &$processed): void {
            $parents = $file->getParents() ?? [];
            $parentId = null;
            if (is_array($parents) && count($parents) > 0) {
                $parentId = $parents[0];
            } elseif ($parents instanceof \Google\Client\ArrayObject && $parents->count() > 0) {
                $parentId = $parents->getIterator()->current();
            }

            $modifiedTime = $file->getModifiedTime();
            $fechaModificacion = Carbon::parse($modifiedTime)->format('Y-m-d H:i:s');

            $rows = [
                'evento_id' => $importacion->evento_id,
                'importacion_id' => $importacion->id,
                'corredor_id' => $corredor?->id,
                'dorsal' => $this->dorsal,
                'nombre_archivo' => $file->getName(),
                'google_drive_file_id' => $file->getId(),
                'google_drive_parent_id' => $parentId,
                'mime_type' => $file->getMimeType(),
                'tamano_archivo' => $file->getSize() ?? 0,
                'size' => $file->getSize() ?? 0,
                'ruta_logica' => "{$importacion->evento_id}/{$this->dorsal}/{$file->getName()}",
                'url_visualizacion' => $file->getWebViewLink() ?: $driveService->generateViewUrl($file->getId()),
                'url_descarga' => null,
                'estado' => FotoEstado::Disponible->value,
                'fecha_modificacion' => $fechaModificacion,
                'metadata' => json_encode([
                    'parents' => is_array($parents) ? $parents : iterator_to_array($parents->getIterator()),
                    'folder_id' => $this->folderId,
                    'synced_at' => now()->toIso8601String(),
                ]),
            ];

            Foto::query()->upsert(
                [$rows],
                ['google_drive_file_id'],
                [
                    'evento_id',
                    'importacion_id',
                    'corredor_id',
                    'dorsal',
                    'nombre_archivo',
                    'google_drive_parent_id',
                    'mime_type',
                    'tamano_archivo',
                    'size',
                    'ruta_logica',
                    'url_visualizacion',
                    'url_descarga',
                    'estado',
                    'fecha_modificacion',
                    'metadata',
                ]
            );

            $processed++;
        });

        $importacion->increment('procesados', $processed);
        $importacion->increment('procesados_folders');

        $syncService->completeIfFinished($importacion);
    }

    public function failed(\Throwable $exception): void
    {
        $importacion = Importacion::find($this->importacionId);

        if (!$importacion) {
            return;
        }

        $importacion->increment('errores');

        app(SyncService::class)->fail($importacion, $exception);
    }
}