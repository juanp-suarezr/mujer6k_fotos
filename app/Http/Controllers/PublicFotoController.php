<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Evento;
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

    public function download(Foto $foto)
    {
        if ($foto->estado !== 'disponible') {
            abort(404);
        }

        // if ($foto->url_descarga) {
        //     return redirect()->away($foto->url_descarga);
        // }

        if ($foto->google_drive_file_id) {
            try {
                $url = 'https://drive.usercontent.google.com/u/0/uc?id=' . $foto->google_drive_file_id . '&export=download';

                $response = Http::timeout(60)
                    ->withHeaders([
                        'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    ])
                    ->get($url);

                if ($response->successful()) {
                    $filename = $foto->nombre_archivo ?: 'download.jpg';
                    $mimeType = $response->headers('Content-Type') ?: 'application/octet-stream';

                    return response($response->body(), 200, [
                        'Content-Type' => $mimeType,
                        'Content-Disposition' => 'attachment; filename="' . basename($filename) . '"',
                    ]);
                }
            } catch (\Exception $e) {
                // fallback to direct preview if proxy fails
            }

            return redirect()->away('https://drive.google.com/file/d/' . $foto->google_drive_file_id . '/preview');
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