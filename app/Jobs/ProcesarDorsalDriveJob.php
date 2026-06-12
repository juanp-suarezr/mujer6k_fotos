<?php

namespace App\Jobs;

use App\Enums\FotoEstado;
use App\Enums\LogTipo;
use App\Models\Foto;
use App\Models\Corredor;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcesarDorsalDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 5;
    public int $backoff = 10;

    public function __construct(
        public int $importacionId,
        public string $folderId,
        public string $dorsal,
        public ?GoogleDriveService $driveService = null
    ) {}

    public function handle(GoogleDriveService $driveService): void
    {
        $importacion = Importacion::findOrFail($this->importacionId);
        $corredor = Corredor::where('evento_id', $importacion->evento_id)
            ->where('dorsal', $this->dorsal)
            ->first();

        $archivosProcesados = $this->procesarConPaginacion($driveService, $importacion, $corredor);

        $importacion->increment('procesados', $archivosProcesados);

        $this->registrarLog($importacion, LogTipo::Info, "Dorsal {$this->dorsal}: {$archivosProcesados} fotos indexadas");
    }

    protected function procesarConPaginacion(GoogleDriveService $driveService, Importacion $importacion, ?Corredor $corredor): int
    {
        $archivosProcesados = 0;
        $pageToken = null;

        do {
            try {
                $options = [
                    'q' => "'{$this->folderId}' in parents and trashed = false and mimeType contains 'image/'",
                    'pageSize' => 500,
                    'fields' => 'nextPageToken,files(id,name,mimeType,size,modifiedTime,parents,webViewLink)',
                ];

                if ($pageToken) {
                    $options['pageToken'] = $pageToken;
                }

                $response = $driveService->getDrive()->files->listFiles($options);
                $files = collect($response->getFiles());
                $pageToken = $response->getNextPageToken();

                foreach ($files as $file) {
                    $existe = Foto::where('google_drive_file_id', $file->getId())->exists();

                    if (!$existe) {
                        Foto::create([
                            'evento_id' => $importacion->evento_id,
                            'importacion_id' => $importacion->id,
                            'corredor_id' => $corredor?->id,
                            'nombre_archivo' => $file->getName(),
                            'google_drive_file_id' => $file->getId(),
                            'google_drive_parent_id' => $file->getParents() ? $file->getParents()->first() : null,
                            'mime_type' => $file->getMimeType(),
                            'tamano_archivo' => $file->getSize() ?? 0,
                            'url_visualizacion' => $file->getWebViewLink(),
                            'estado' => FotoEstado::Disponible->value,
                        ]);
                    }

                    $archivosProcesados++;
                }
            } catch (\Google\Service\Exception $e) {
                $this->registrarError($importacion, $e);
                throw $e;
            } catch (\Exception $e) {
                $this->registrarError($importacion, $e);
                throw $e;
            }
        } while ($pageToken);

        return $archivosProcesados;
    }

    protected function registrarError(Importacion $importacion, \Exception $e): void
    {
        $importacion->increment('errores');

        $importacion->logs()->create([
            'tipo' => LogTipo::Error->value,
            'mensaje' => "Error en dorsal {$this->dorsal}: {$e->getMessage()}",
            'metadata' => ['folder_id' => $this->folderId],
        ]);
    }

    protected function registrarLog(Importacion $importacion, LogTipo $tipo, string $mensaje): void
    {
        $importacion->logs()->create([
            'tipo' => $tipo->value,
            'mensaje' => $mensaje,
        ]);
    }
}