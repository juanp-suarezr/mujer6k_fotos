<?php

namespace App\Jobs;

use App\Enums\ImportacionEstado;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use App\Services\SyncService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportarEventoDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 1;

    public int $maxExceptions = 1;

    public int $timeout = 120;

    public function __construct(
        public int $eventoId,
        public string $carpetaDriveId,
        public ?int $existingImportacionId = null
    ) {}

    public function handle(GoogleDriveService $driveService, SyncService $syncService): void
    {
        $importacion = $this->existingImportacionId
            ? Importacion::findOrFail($this->existingImportacionId)
            : Importacion::create([
                'evento_id' => $this->eventoId,
                'origen' => 'drive',
                'carpeta_drive_id' => $this->carpetaDriveId,
                'estado' => ImportacionEstado::Pendiente->value,
                'total_archivos' => 0,
                'procesados' => 0,
                'errores' => 0,
                'total_folders' => 0,
                'procesados_folders' => 0,
            ]);

        $syncService->markStarted($importacion);

        $totalFolders = $this->dispatchDorsalJobs($driveService, $importacion);
        $totalFiles = $driveService->countFiles($this->carpetaDriveId);

        $importacion->update([
            'total_folders' => $totalFolders,
            'procesados_folders' => 0,
            'total_archivos' => $totalFiles,
        ]);

        if ($totalFolders === 0) {
            $syncService->complete($importacion, [
                'folders_processed' => 0,
                'files_processed' => 0,
            ]);
        }
    }

    protected function dispatchDorsalJobs(GoogleDriveService $driveService, Importacion $importacion): int
    {
        $totalFolders = 0;

        $driveService->paginateFolders($this->carpetaDriveId, [], function ($folder) use (&$totalFolders, $importacion): void {
            $name = trim((string) $folder->getName());
            $normalized = strtolower(str_replace(' ', '', $name));

            if (preg_match('/^sindorsal$/', $normalized)) {
                $totalFolders++;
                SyncDorsalJob::dispatch($importacion->id, $folder->getId(), null);
                return;
            }

            if (!preg_match('/^\d+$/', $name)) {
                return;
            }

            $totalFolders++;
            SyncDorsalJob::dispatch($importacion->id, $folder->getId(), $name);
        });

        return $totalFolders;
    }

    public function failed(\Throwable $exception): void
    {
        $importacion = Importacion::find($this->existingImportacionId ?? Importacion::where('evento_id', $this->eventoId)
            ->where('carpeta_drive_id', $this->carpetaDriveId)
            ->latest()->first()?->id);

        if ($importacion) {
            app(SyncService::class)->fail($importacion, $exception);
        }
    }
}