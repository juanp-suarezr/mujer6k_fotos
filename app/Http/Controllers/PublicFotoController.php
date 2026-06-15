<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Evento;
use App\Services\GoogleDriveService;
use Illuminate\Http\Request;
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

    public function download(Foto $foto, Request $request, GoogleDriveService $driveService)
    {
        Log::info('Redireccionando descarga pública de foto', [
            'foto_id' => $foto->id,
            'file_id' => $foto->google_drive_file_id,
            'user_agent' => $request->header('User-Agent'),
        ]);

        if (!$foto->google_drive_file_id) {
            Log::error('Foto sin google drive file id');
            abort(404);
        }

        $url = $driveService->getDownloadUrl($foto->google_drive_file_id);

        Log::info('URL de descarga pública generada', [
            'foto_id' => $foto->id,
            'file_id' => $foto->google_drive_file_id,
            'url' => $url,
        ]);

        return redirect()->away($url);
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