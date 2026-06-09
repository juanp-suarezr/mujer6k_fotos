<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\Corredor;
use App\Models\Foto;
use App\Http\Requests\FotoRequest;
use Inertia\Inertia;

class FotoController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:fotos-listar|fotos-crear|fotos-editar|fotos-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:fotos-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:fotos-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:fotos-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        return Inertia::render('Fotos/Index', [
            'fotos' => Foto::with(['evento', 'corredor'])->paginate(10)->withQueryString(),
        ]);
    }

    function create()
    {
        return Inertia::render('Fotos/Add', [
            'eventos' => Evento::all(),
            'corredores' => Corredor::all(),
        ]);
    }

    function store(FotoRequest $request)
    {
        Foto::create($request->validated());

        return to_route('fotos.index');
    }

    function edit(Foto $foto)
    {
        return Inertia::render('Fotos/Edit', [
            'foto' => $foto->load(['evento', 'corredor']),
            'eventos' => Evento::all(),
            'corredores' => Corredor::all(),
        ]);
    }

    function update(FotoRequest $request, Foto $foto)
    {
        $foto->update($request->validated());

        return redirect()->route('fotos.edit', $foto->id)
            ->with('success', 'Foto actualizada correctamente');
    }

    function destroy(Foto $foto)
    {
        $foto->delete();

        return redirect()->route('fotos.index')
            ->with('success', 'Foto eliminada exitosamente');
    }
}
