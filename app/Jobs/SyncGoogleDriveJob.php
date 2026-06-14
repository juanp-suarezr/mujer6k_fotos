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
use RuntimeException;

class SyncGoogleDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 1;

    public int $maxExceptions = 1;

    public int $timeout = 120;

    public function __construct(
        public int $importacionId
    ) {}

    public function handle(GoogleDriveService $driveService, SyncService $syncService): void
    {
        $importacion = Importacion::findOrFail($this->importacionId);

        if (!$importacion->carpeta_drive_id) {
            $syncService->fail($importacion, new RuntimeException('La importación no tiene carpeta de Google Drive configurada.'));
            return;
        }

        $syncService->markStarted($importacion);

        $folder = $driveService->getFolder($importacion->carpeta_drive_id);

        if (!$folder || $folder->getMimeType() !== 'application/vnd.google-apps.folder') {
            $syncService->fail($importacion, new RuntimeException('La carpeta raíz de Google Drive no es válida. ID: ' . $importacion->carpeta_drive_id));
            return;
        }

        $totalFolders = $this->dispatchDorsalJobs($driveService, $importacion);
        $totalFiles = $driveService->countFiles($importacion->carpeta_drive_id);

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
}
