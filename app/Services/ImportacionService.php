<?php

namespace App\Services;

use App\Enums\FotoEstado;
use App\Enums\LogTipo;
use App\Jobs\ProcesarFotoJob;
use App\Models\Foto;
use App\Models\Corredor;
use App\Models\Importacion;
use Google\Service\Drive\Google_Service_Drive_File;
use Illuminate\Support\Collection;

class ImportacionService
{
    public function __construct(
        protected GoogleDriveService $googleDriveService
    ) {}

    public function sincronizar(Importacion $importacion): void
    {
        $importacion->update([
            'estado' => 'procesando',
            'fecha_inicio' => now(),
        ]);

        $this->crearLog($importacion, LogTipo::Info, 'Iniciando sincronización de carpetas');

        $totalArchivos = 0;

        $subfolders = $this->googleDriveService->listFolders($importacion->carpeta_drive_id);

        foreach ($subfolders as $subfolder) {
            $files = $this->googleDriveService->listFiles($subfolder->getId());

            foreach ($files as $file) {
                $totalArchivos++;

                $corredor = $this->buscarCorredor($importacion->evento_id, $subfolder->getName());

                $foto = Foto::create([
                    'evento_id' => $importacion->evento_id,
                    'importacion_id' => $importacion->id,
                    'corredor_id' => $corredor?->id,
                    'nombre_archivo' => $file->getName(),
                    'google_drive_file_id' => $file->getId(),
                    'google_drive_parent_id' => $file->getParents() ? $file->getParents()->first() : null,
                    'mime_type' => $file->getMimeType(),
                    'tamano_archivo' => $file->getSize() ?? 0,
                    'url_visualizacion' => $file->getWebViewLink(),
                    'estado' => FotoEstado::Pendiente->value,
                ]);

                ProcesarFotoJob::dispatch($foto, $this->googleDriveService);
            }
        }

        $importacion->update([
            'total_archivos' => $totalArchivos,
            'procesados' => 0,
        ]);

        $this->crearLog($importacion, LogTipo::Info, "Sincronización iniciada con {$totalArchivos} fotos");
    }

    protected function buscarCorredor(int $eventoId, string $dorsal): ?Corredor
    {
        return Corredor::where('evento_id', $eventoId)
            ->where('dorsal', $dorsal)
            ->first();
    }

    protected function crearLog(Importacion $importacion, LogTipo $tipo, string $mensaje, array $metadata = []): void
    {
        $importacion->logs()->create([
            'tipo' => $tipo->value,
            'mensaje' => $mensaje,
            'metadata' => $metadata,
        ]);
    }

    public function finalizar(Importacion $importacion): void
    {
        $importacion->update([
            'estado' => 'completada',
            'fecha_fin' => now(),
        ]);

        $this->crearLog($importacion, LogTipo::Info, 'Importación completada');
    }
}