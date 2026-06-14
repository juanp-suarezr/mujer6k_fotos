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

        if ($foto->url_descarga) {
            return redirect()->away($foto->url_descarga);
        }

        abort(404);
    }

    public function sinDorsal()
    {
        $eventos = Evento::select('id', 'nombre')->get();

        $fotos = Foto::with(['evento'])
            ->where('estado', 'disponible')
            ->whereNull('dorsal')
            ->orWhere('dorsal', '')
            ->limit(50)
            ->get();

        return Inertia::render('Public/Fotos/SinDorsal', [
            'eventos' => $eventos,
            'fotos' => $fotos,
        ]);
    }
}