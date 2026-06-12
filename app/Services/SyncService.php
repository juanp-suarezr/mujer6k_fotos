<?php

namespace App\Services;

use App\Enums\ImportacionEstado;
use App\Enums\LogTipo;
use App\Jobs\SyncGoogleDriveJob;
use App\Models\Evento;
use App\Models\Importacion;
use Illuminate\Support\Str;

class SyncService
{
    public function createForEvento(Evento $evento, string $driveFolderId): Importacion
    {
        return Importacion::create([
            'evento_id' => $evento->id,
            'origen' => 'drive',
            'carpeta_drive_id' => $driveFolderId,
            'estado' => ImportacionEstado::Pendiente->value,
            'total_archivos' => 0,
            'procesados' => 0,
            'errores' => 0,
            'total_folders' => 0,
            'procesados_folders' => 0,
        ]);
    }

    public function start(Importacion $importacion): Importacion
    {
        $importacion->update([
            'estado' => ImportacionEstado::Pendiente->value,
            'total_archivos' => 0,
            'procesados' => 0,
            'errores' => 0,
            'total_folders' => 0,
            'procesados_folders' => 0,
            'fecha_inicio' => null,
            'fecha_fin' => null,
            'last_error' => null,
        ]);

        SyncGoogleDriveJob::dispatch($importacion->id);

        return $importacion->fresh();
    }

    public function markStarted(Importacion $importacion): void
    {
        $importacion->update([
            'estado' => ImportacionEstado::Procesando->value,
            'fecha_inicio' => now(),
            'fecha_fin' => null,
            'last_error' => null,
        ]);

        $this->log($importacion, LogTipo::Info, 'Sincronización iniciada', [
            'evento_id' => $importacion->evento_id,
            'drive_folder_id' => $importacion->carpeta_drive_id,
        ]);
    }

    public function complete(Importacion $importacion, array $metadata = []): void
    {
        if ($importacion->estado === ImportacionEstado::Fallida->value) {
            return;
        }

        $importacion->update([
            'estado' => ImportacionEstado::Completada->value,
            'fecha_fin' => now(),
            'metadata' => array_merge($importacion->metadata ?? [], $metadata),
        ]);

        $this->log($importacion, LogTipo::Info, 'Sincronización completada', $metadata);
    }

    public function completeIfFinished(Importacion $importacion): void
    {
        $importacion->refresh();

        if ($importacion->total_folders > 0 && $importacion->procesados_folders >= $importacion->total_folders) {
            $this->complete($importacion, [
                'folders_processed' => $importacion->procesados_folders,
                'files_processed' => $importacion->procesados,
            ]);
        }
    }

    public function fail(Importacion $importacion, \Throwable $exception): void
    {
        $importacion->update([
            'estado' => ImportacionEstado::Fallida->value,
            'fecha_fin' => now(),
            'last_error' => Str::limit($exception->getMessage(), 1000),
        ]);

        $this->log($importacion, LogTipo::Error, 'Sincronización fallida', [
            'error' => $exception->getMessage(),
            'exception' => $exception::class,
        ]);
    }

    public function progress(Importacion $importacion): array
    {
        $total = max((int) $importacion->total_archivos, 0);
        $processed = max((int) $importacion->procesados, 0);
        $foldersTotal = max((int) $importacion->total_folders, 0);
        $foldersProcessed = max((int) $importacion->procesados_folders, 0);

        return [
            'importacion_id' => $importacion->id,
            'estado' => $importacion->estado?->value ?? $importacion->estado,
            'procesados' => $processed,
            'total_archivos' => $total,
            'porcentaje' => $total > 0 ? round(($processed / $total) * 100, 2) : 0,
            'folders_procesados' => $foldersProcessed,
            'total_folders' => $foldersTotal,
            'errores' => (int) $importacion->errores,
            'fecha_inicio' => $importacion->fecha_inicio?->toIso8601String(),
            'fecha_fin' => $importacion->fecha_fin?->toIso8601String(),
        ];
    }

    public function log(Importacion $importacion, LogTipo $tipo, string $mensaje, array $metadata = []): void
    {
        $importacion->logs()->create([
            'tipo' => $tipo->value,
            'mensaje' => $mensaje,
            'metadata' => $metadata,
        ]);
    }
}
