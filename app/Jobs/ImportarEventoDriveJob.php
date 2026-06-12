<?php

namespace App\Jobs;

use App\Enums\ImportacionEstado;
use App\Enums\LogTipo;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportarEventoDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 3;
    public int $backoff = 5;
    public int $maxExceptions = 5;

    public function __construct(
        public int $eventoId,
        public string $carpetaDriveId,
        public ?int $existingImportacionId = null
    ) {}

    public function handle(GoogleDriveService $driveService): void
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
            ]);

        $importacion->update(['estado' => ImportacionEstado::Procesando->value, 'fecha_inicio' => now()]);
        $this->registrarLog($importacion, LogTipo::Info, "Iniciando importación del evento {$this->eventoId}");

        $pageToken = null;
        $totalDorsales = 0;

        do {
            try {
                $options = ['pageSize' => 200, 'fields' => 'nextPageToken,files(id,name)'];

                if ($pageToken) {
                    $options['pageToken'] = $pageToken;
                }

                $response = $driveService->getDrive()->files->listFiles($options);
                $subfolders = collect($response->getFiles());
                $pageToken = $response->getNextPageToken();

                foreach ($subfolders as $subfolder) {
                    ProcesarDorsalDriveJob::dispatch(
                        $importacion->id,
                        $subfolder->getId(),
                        $subfolder->getName(),
                        $driveService
                    )->delay(now()->addSeconds(2));

                    $totalDorsales++;
                }
            } catch (\Google\Service\Exception $e) {
                if (!$this->handleGoogleApiException($e)) {
                    throw $e;
                }
            }
        } while ($pageToken);

        $importacion->update(['total_archivos' => $totalDorsales * 100]);
        $this->registrarLog($importacion, LogTipo::Info, "Importación iniciada: {$totalDorsales} dorsales por procesar");
    }

    protected function handleGoogleApiException(\Google\Service\Exception $e): bool
    {
        $code = $e->getCode();

        if ($code === 429) {
            $this->backoff = min($this->backoff * 2, 300);

            return true;
        }

        return false;
    }

    protected function registrarLog(Importacion $importacion, LogTipo $tipo, string $mensaje, array $metadata = []): void
    {
        $importacion->logs()->create([
            'tipo' => $tipo->value,
            'mensaje' => $mensaje,
            'metadata' => $metadata,
        ]);
    }
}