<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Evento;
use App\Services\GoogleClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

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

    public function download(Foto $foto, GoogleClient $googleClient, Request $request)
    {
        if ($foto->estado !== 'disponible') {
            abort(404);
        }

        if ($foto->url_descarga) {
            return redirect()->away($foto->url_descarga);
        }

        if ($foto->google_drive_file_id) {
            // 1. Intentar descargar usando el SDK autenticado
            try {
                $drive = $googleClient->getDrive();
                $response = $drive->files->get($foto->google_drive_file_id, [
                    'alt' => 'media',
                ]);

                if ($response->getStatusCode() === 200) {
                    $stream = $response->getBody();
                    $contentType = $response->getHeaderLine('Content-Type') ?: ($foto->mime_type ?: 'image/jpeg');
                    $contentLength = $response->getHeaderLine('Content-Length');
                    $filename = $foto->nombre_archivo ?: ($foto->id . '.jpg');

                    $headers = [
                        'Content-Type' => $contentType,
                        'Content-Disposition' => 'attachment; filename="' . basename($filename) . '"',
                    ];

                    if ($contentLength) {
                        $headers['Content-Length'] = $contentLength;
                    }

                    return response()->stream(function () use ($stream) {
                        while (!$stream->eof()) {
                            echo $stream->read(1024 * 8);
                        }
                    }, 200, $headers);
                } else {
                    throw new \RuntimeException('Respuesta no exitosa del SDK de Google Drive con código: ' . $response->getStatusCode());
                }
            } catch (\Exception $e) {
                logger()->warning('Fallo descarga con SDK de Google Drive. Intentando método alternativo público.', [
                    'foto_id' => $foto->id,
                    'file_id' => $foto->google_drive_file_id,
                    'error' => $e->getMessage()
                ]);
            }

            // 2. Método alternativo: Descarga pública con confirm=t (para evitar advertencia de virus)
            try {
                $url = 'https://drive.google.com/uc?export=download&id=' . $foto->google_drive_file_id . '&confirm=t';

                $response = Http::timeout(45)
                    ->followRedirects(true)
                    ->get($url);

                if ($response->successful()) {
                    $contentType = $response->header('Content-Type');
                    $body = $response->body();

                    $startsWithHtml = str_starts_with(ltrim($body), '<');
                    $isHtml = str_contains($contentType ?? '', 'text/html');

                    if (!$isHtml && !$startsWithHtml) {
                        $filename = $foto->nombre_archivo ?: ($foto->id . '.jpg');
                        return response($body, 200, [
                            'Content-Type' => $contentType ?: 'image/jpeg',
                            'Content-Disposition' => 'attachment; filename="' . basename($filename) . '"',
                        ]);
                    } else {
                        logger()->warning('El método alternativo retornó HTML en lugar de imagen para la foto ' . $foto->id);
                    }
                }
            } catch (\Exception $e) {
                logger()->error('Error en método alternativo de descarga de Google Drive: ' . $e->getMessage(), [
                    'foto_id' => $foto->id
                ]);
            }

            // 3. Fallback final: Redirigir a la URL de descarga directa de Google Drive
            return redirect()->away('https://drive.google.com/uc?export=download&id=' . $foto->google_drive_file_id);
        }

        abort(404);
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