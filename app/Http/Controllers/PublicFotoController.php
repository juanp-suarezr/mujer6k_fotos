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

    public function download(Foto $foto, GoogleClient $googleClient)
    {
        if ($foto->estado !== 'disponible') {
            abort(404);
        }


        if (!$foto->google_drive_file_id) {
            abort(404);
        }

        $tempDir = storage_path('app/temp');
        if (!file_exists($tempDir)) {
            mkdir($tempDir, 0755, true);
        }

        $filename = $foto->nombre_archivo ?: ($foto->id . '.jpg');
        $tempPath = $tempDir . '/foto_' . $foto->id . '_' . time() . '.tmp';

        try {
            $drive = $googleClient->getDrive();
            $response = $drive->files->get($foto->google_drive_file_id, [
                'alt' => 'media',
            ]);

            if ($response->getStatusCode() === 200) {
                $body = $response->getBody();
                file_put_contents($tempPath, $body->getContents());
                $contentType = $response->getHeaderLine('Content-Type') ?: ($foto->mime_type ?: 'image/jpeg');

                if (file_exists($tempPath) && filesize($tempPath) > 0) {
                    return response()->download($tempPath, basename($filename), [
                        'Content-Type' => $contentType,
                    ])->deleteFileAfterSend(true);
                }
            }
        } catch (\Exception $e) {
            logger()->warning('Fallo descarga con SDK de Google Drive.', [
                'foto_id' => $foto->id,
                'file_id' => $foto->google_drive_file_id,
                'error' => $e->getMessage(),
            ]);
        }

        if (file_exists($tempPath)) {
            @unlink($tempPath);
        }

        return redirect()->away('https://drive.google.com/file/d/' . $foto->google_drive_file_id . '/preview');
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