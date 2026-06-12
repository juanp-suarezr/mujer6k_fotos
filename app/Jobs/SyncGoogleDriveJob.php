<?php

namespace App\Jobs;

use App\Enums\ImportacionEstado;
use App\Enums\LogTipo;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use App\Services\SyncService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use RuntimeException;

class SyncGoogleDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 3;

    public array $backoff = [5, 15, 60];

    public int $maxExceptions = 3;

    public function __construct(
        public int $importacionId
    ) {}

    public function handle(GoogleDriveService $driveService, SyncService $syncService): void
    {
        $importacion = Importacion::findOrFail($this->importacionId);

        if (!$importacion->carpeta_drive_id) {
            throw new RuntimeException('La importación no tiene carpeta de Google Drive configurada.');
        }

        $syncService->markStarted($importacion);

        $folder = $driveService->getFolder($importacion->carpeta_drive_id);

        if (!$folder || $folder->getMimeType() !== 'application/vnd.google-apps.folder') {
            throw new RuntimeException('La carpeta raíz de Google Drive no es válida.');
        }

        $totalFolders = $this->dispatchDorsalJobs($driveService, $importacion);
        $totalFiles = $driveService->countFiles($importacion->carpeta_drive_id);

        $importacion->update([
            'total_folders' => $totalFolders,
            'procesados_folders' => 0,
            'total_archivos' => $totalFiles,
        ]);

        $syncService->log($importacion, LogTipo::Info, 'Carpeta principal analizada', [
            'folders' => $totalFolders,
            'files' => $totalFiles,
        ]);

        if ($totalFolders === 0) {
            $syncService->complete($importacion, [
                'folders_processed' => 0,
                'files_processed' => 0,
            ]);
        }
    }

    public function failed(\Throwable $exception): void
    {
        $importacion = Importacion::find($this->importacionId);

        if ($importacion) {
            app(SyncService::class)->fail($importacion, $exception);
        }
    }

    protected function dispatchDorsalJobs(GoogleDriveService $driveService, Importacion $importacion): int
    {
        $totalFolders = 0;

        $driveService->paginateFolders($importacion->carpeta_drive_id, [], function ($folder) use (&$totalFolders, $importacion): void {
            $dorsal = trim((string) $folder->getName());

            if (!preg_match('/^\d+$/', $dorsal)) {
                app(SyncService::class)->log($importacion, LogTipo::Warning, 'Carpeta omitida: no representa un dorsal', [
                    'folder_id' => $folder->getId(),
                    'folder_name' => $folder->getName(),
                ]);

                return;
            }

            $totalFolders++;

            SyncDorsalJob::dispatch($importacion->id, $folder->getId(), $dorsal);
        });

        return $totalFolders;
    }
}
