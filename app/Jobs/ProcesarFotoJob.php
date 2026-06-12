<?php

namespace App\Jobs;

use App\Enums\FotoEstado;
use App\Enums\LogTipo;
use App\Models\Foto;
use App\Services\GoogleDriveService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ProcesarFotoJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public Foto $foto,
        public GoogleDriveService $googleDriveService
    ) {}

    public function handle(): void
    {
        try {
            $file = $this->googleDriveService->getFile($this->foto->google_drive_file_id);

            $this->foto->update([
                'url_visualizacion' => $file->getWebViewLink(),
                'url_descarga' => $this->googleDriveService->getFileDownloadUrl($file->getId()),
                'estado' => FotoEstado::Disponible->value,
            ]);

            if ($this->foto->importacion) {
                $this->foto->importacion->increment('procesados');
            }

            $this->foto->importacion?->logs()->create([
                'tipo' => LogTipo::Info->value,
                'mensaje' => "Foto procesada: {$this->foto->nombre_archivo}",
            ]);
        } catch (\Exception $e) {
            $this->foto->update([
                'estado' => FotoEstado::Error->value,
            ]);

            if ($this->foto->importacion) {
                $this->foto->importacion->increment('errores');
            }

            Log::error("Error procesando foto {$this->foto->id}: " . $e->getMessage());

            $this->foto->importacion?->logs()->create([
                'tipo' => LogTipo::Error->value,
                'mensaje' => "Error procesando foto {$this->foto->nombre_archivo}",
                'metadata' => ['error' => $e->getMessage()],
            ]);
        }
    }
}