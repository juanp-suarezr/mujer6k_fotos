<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Evento;
use App\Services\GoogleClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class PublicFotoController extends Controller
{
    public function index(Request $request)
    {
        $eventos = Evento::select('id', 'nombre')->get();

        $fotos = collect([]);
        $filters = [
            'dorsal' => $request->query('dorsal', ''),
            'evento_id' => $request->query('evento_id', ''),
        ];

        if ($request->filled('dorsal')) {
            $query = Foto::with(['evento', 'corredor'])
                ->where('estado', 'disponible')
                ->where('dorsal', $request->dorsal);

            if ($request->filled('evento_id')) {
                $query->where('evento_id', $request->evento_id);
            }

            $fotos = $query->get();
        }

        return Inertia::render('Public/Fotos/Index', [
            'eventos' => $eventos,
            'fotos' => $fotos,
            'filters' => $filters,
        ]);
    }

    public function search(Request $request)
    {
        return $this->index($request);
    }

    public function download(Foto $foto, Request $request)
    {
        Log::info('Descarga de foto', ['foto' => $foto]);
        if ($foto->estado !== 'disponible') {
            Log::error('Foto no disponible');
            abort(404);
        }

        if (!$foto->google_drive_file_id) {
            Log::error('Foto sin google drive file id');
            abort(404);
        }

        $tempDir = storage_path('app/temp');
        if (!file_exists($tempDir)) {
            mkdir($tempDir, 0755, true);
        }

        $filename = $foto->nombre_archivo ?: ($foto->id . '.jpg');
        $tempPath = $tempDir . '/foto_' . $foto->id . '_' . time() . '.tmp';
        $url = 'https://drive.usercontent.google.com/u/0/uc?id=' . $foto->google_drive_file_id . '&export=download';

        logger()->info('Iniciando descarga temporal de foto', [
            'foto_id' => $foto->id,
            'file_id' => $foto->google_drive_file_id,
            'url' => $url,
            'temp_path' => $tempPath,
            'user_agent' => $request->header('User-Agent'),
        ]);

        try {
            $response = Http::timeout(60)
                ->withHeaders([
                    'User-Agent' => $request->header('User-Agent') ?: 'Mozilla/5.0',
                ])
                ->followRedirects(true, 20)
                ->sink($tempPath)
                ->get($url);

            $httpCode = $response->status();
            $contentType = $response->headers('Content-Type');
            $fileSize = file_exists($tempPath) ? filesize($tempPath) : 0;

            logger()->info('Respuesta recibida de Google Drive', [
                'foto_id' => $foto->id,
                'http_code' => $httpCode,
                'content_type' => $contentType,
                'file_size' => $fileSize,
                'temp_path' => $tempPath,
            ]);

            if (!$response->successful() || $fileSize === 0) {
                @unlink($tempPath);
                logger()->warning('Descarga fallida: respuesta no exitosa o archivo vacío', [
                    'foto_id' => $foto->id,
                    'http_code' => $httpCode,
                    'file_size' => $fileSize,
                ]);
                return redirect()->away('https://drive.google.com/file/d/' . $foto->google_drive_file_id . '/preview');
            }

            if (str_contains($contentType ?? '', 'text/html')) {
                @unlink($tempPath);
                logger()->warning('Descarga fallida: contenido HTML recibido en lugar de imagen', [
                    'foto_id' => $foto->id,
                    'content_type' => $contentType,
                    'url' => $url,
                ]);
                return redirect()->away('https://drive.google.com/file/d/' . $foto->google_drive_file_id . '/preview');
            }

            register_shutdown_function(function () use ($tempPath) {
                if (file_exists($tempPath)) {
                    @unlink($tempPath);
                    logger()->info('Archivo temporal eliminado', ['temp_path' => $tempPath]);
                }
            });

            logger()->info('Enviando archivo al navegador', [
                'foto_id' => $foto->id,
                'filename' => basename($filename),
                'content_type' => $contentType,
                'file_size' => $fileSize,
            ]);

            return response()->download($tempPath, basename($filename), [
                'Content-Type' => $contentType ?: 'application/octet-stream',
            ])->deleteFileAfterSend(true);
        } catch (\Exception $e) {
            if (file_exists($tempPath)) {
                @unlink($tempPath);
            }

            logger()->error('Excepción al descargar foto desde Google Drive', [
                'foto_id' => $foto->id,
                'file_id' => $foto->google_drive_file_id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return redirect()->away('https://drive.google.com/file/d/' . $foto->google_drive_file_id . '/preview');
        }
    }

    public function sinDorsal(Request $request)
    {
        $eventos = Evento::select('id', 'nombre')->get();

        $fotos = Foto::with(['evento'])
            ->where('estado', 'disponible')
            ->where(function ($query) {
                $query->whereNull('dorsal')
                    ->orWhere('dorsal', '');
            })
            ->paginate(10);

        return Inertia::render('Public/Fotos/SinDorsal', [
            'eventos' => $eventos,
            'fotos' => $fotos,
        ]);
    }
}