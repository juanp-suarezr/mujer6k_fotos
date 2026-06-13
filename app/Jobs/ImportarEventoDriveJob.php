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

class ImportarEventoDriveJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 3;

    public array $backoff = [5, 15, 60];

    public int $maxExceptions = 3;

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

        $syncService->log($importacion, LogTipo::Info, 'ImportarEventoDriveJob iniciado', [
            'evento_id' => $this->eventoId,
            'carpeta_drive_id' => $this->carpetaDriveId,
            'importacion_id' => $this->existingImportacionId,
        ]);

        $syncService->markStarted($importacion);

        $totalFolders = $this->dispatchDorsalJobs($driveService, $importacion);
        $totalFiles = $driveService->countFiles($this->carpetaDriveId);

        $importacion->update([
            'total_folders' => $totalFolders,
            'procesados_folders' => 0,
            'total_archivos' => $totalFiles,
        ]);

        $syncService->log($importacion, LogTipo::Info, 'Importación iniciada', [
            'folders' => $totalFolders,
            'files' => $totalFiles,
        ]);

        if ($totalFolders === 0) {
            $syncService->log($importacion, LogTipo::Warning, 'Sin subcarpetas detectadas en ImportarEventoDriveJob', [
                'total_folders' => 0,
                'total_files' => $totalFiles,
            ]);
            $syncService->complete($importacion, [
                'folders_processed' => 0,
                'files_processed' => 0,
            ]);
        }
    }

    protected function dispatchDorsalJobs(GoogleDriveService $driveService, Importacion $importacion): int
    {
        $totalFolders = 0;
        $skippedFolders = 0;
        $validFolders = [];

        $driveService->paginateFolders($this->carpetaDriveId, [], function ($folder) use (&$totalFolders, &$skippedFolders, &$validFolders, $importacion): void {
            $dorsal = trim((string) $folder->getName());

            if (!preg_match('/^\d+$/', $dorsal)) {
                app(SyncService::class)->log($importacion, LogTipo::Warning, 'Carpeta omitida: no representa un dorsal', [
                    'folder_id' => $folder->getId(),
                    'folder_name' => $folder->getName(),
                    'reason' => 'name_is_not_numeric',
                ]);
                $skippedFolders++;
                return;
            }

            $totalFolders++;
            $validFolders[] = ['id' => $folder->getId(), 'name' => $dorsal];

            SyncDorsalJob::dispatch($importacion->id, $folder->getId(), $dorsal);
        });

        app(SyncService::class)->log($importacion, LogTipo::Info, 'Escaneo de subcarpetas completado', [
            'total_folders_found' => $totalFolders + $skippedFolders,
            'valid_dorsal_folders' => $totalFolders,
            'skipped_folders' => $skippedFolders,
            'valid_folders' => $validFolders,
        ]);

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