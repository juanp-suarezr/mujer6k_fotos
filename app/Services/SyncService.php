<?php

namespace App\Services;

use App\Enums\ImportacionEstado;
use App\Enums\LogTipo;
use App\Jobs\SyncGoogleDriveJob;
use App\Models\Evento;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use Illuminate\Support\Str;
use RuntimeException;

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

        $this->log($importacion, LogTipo::Info, 'Iniciando sincronización', [
            'origen' => $importacion->origen,
            'carpeta_drive_id' => $importacion->carpeta_drive_id,
            'evento_id' => $importacion->evento_id,
            'importacion_id' => $importacion->id,
        ]);

        if ($importacion->origen === 'drive' && $importacion->carpeta_drive_id) {
            try {
                $this->log($importacion, LogTipo::Info, 'Paso 1: Obteniendo servicio de Google Drive', [
                    'folder_id' => $importacion->carpeta_drive_id,
                ]);

                $driveService = app(GoogleDriveService::class);

                $this->log($importacion, LogTipo::Info, 'Paso 2: Consultando carpeta en Drive API', [
                    'folder_id' => $importacion->carpeta_drive_id,
                ]);

                $folder = $driveService->getFolder($importacion->carpeta_drive_id);

                $this->log($importacion, LogTipo::Info, 'Paso 3: Respuesta recibida', [
                    'folder_found' => (bool) $folder,
                    'mime_type' => $folder ? $folder->getMimeType() : null,
                    'folder_name' => $folder ? $folder->getName() : null,
                ]);

                if (!$folder) {
                    $errorMsg = "La carpeta de Google Drive (ID: {$importacion->carpeta_drive_id}) no fue encontrada. Verifica que el ID sea correcto y que la cuenta tenga acceso.";
                    $this->log($importacion, LogTipo::Error, 'Validación fallida: carpeta no encontrada', [
                        'error' => $errorMsg,
                        'folder_id' => $importacion->carpeta_drive_id,
                        'reason' => 'folder_not_found_or_inaccessible',
                        'http_code' => '404/403',
                    ]);
                    throw new RuntimeException($errorMsg);
                }

                if ($folder->getMimeType() !== 'application/vnd.google-apps.folder') {
                    $errorMsg = "El ID especificado (ID: {$importacion->carpeta_drive_id}) no corresponde a una carpeta. Tipo recibido: {$folder->getMimeType()}";
                    $this->log($importacion, LogTipo::Error, 'Validación fallida: no es carpeta', [
                        'error' => $errorMsg,
                        'folder_id' => $importacion->carpeta_drive_id,
                        'mime_type' => $folder->getMimeType(),
                        'reason' => 'not_a_folder',
                    ]);
                    throw new RuntimeException($errorMsg);
                }

                $this->log($importacion, LogTipo::Info, 'Validación exitosa: carpeta confirmada', [
                    'folder_id' => $folder->getId(),
                    'folder_name' => $folder->getName(),
                    'mime_type' => $folder->getMimeType(),
                ]);
            } catch (\RuntimeException $e) {
                $this->log($importacion, LogTipo::Error, 'Excepción RuntimeException', [
                    'error' => $e->getMessage(),
                    'folder_id' => $importacion->carpeta_drive_id,
                    'trace' => $e->getTraceAsString(),
                ]);

                $importacion->update([
                    'estado' => ImportacionEstado::Fallida->value,
                    'fecha_fin' => now(),
                    'last_error' => $e->getMessage(),
                ]);

                throw $e;
            } catch (\Google\Service\Exception $e) {
                $errorMessage = 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage();

                $this->log($importacion, LogTipo::Error, 'Excepción de Google Drive API', [
                    'error' => $errorMessage,
                    'code' => $e->getCode(),
                    'folder_id' => $importacion->carpeta_drive_id,
                    'errors' => method_exists($e, 'getErrors') ? $e->getErrors() : [],
                ]);

                $importacion->update([
                    'estado' => ImportacionEstado::Fallida->value,
                    'fecha_fin' => now(),
                    'last_error' => $errorMessage,
                ]);

                throw new RuntimeException($errorMessage, $e->getCode(), $e);
            }
        }

        $this->log($importacion, LogTipo::Info, 'Despachando job SyncGoogleDriveJob', [
            'job_class' => SyncGoogleDriveJob::class,
            'importacion_id' => $importacion->id,
            'queue_connection' => config('queue.default'),
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
