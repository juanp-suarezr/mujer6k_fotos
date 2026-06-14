<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Evento;
use Illuminate\Http\Request;
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
                ->where('dorsal', (int) $request->dorsal);

            

            if ($request->filled('evento_id')) {
                $query->where('evento_id', (int) $request->evento_id);
            }

            $fotos = $query->get()->map(function ($foto) {
                $foto->url_visualizacion_directa = $this->getGoogleDriveDirectUrl($foto->google_drive_file_id);
                return $foto;
            });
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
        if ($foto->estado !== 'procesada') {
            abort(404);
        }

        if ($foto->url_descarga) {
            return redirect()->away($foto->url_descarga);
        }

        abort(404);
    }

    private function getGoogleDriveDirectUrl($fileId)
    {
        if (!$fileId) {
            return null;
        }

        // URL para visualización directa de imágenes en Google Drive
        return "https://lh3.googleusercontent.com/d/{$fileId}";
    }

}