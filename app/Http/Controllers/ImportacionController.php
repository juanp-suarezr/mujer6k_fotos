<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\Importacion;
use App\Http\Requests\ImportacionRequest;
use Inertia\Inertia;

class ImportacionController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:importaciones-listar|importaciones-crear|importaciones-editar|importaciones-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:importaciones-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:importaciones-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:importaciones-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        return Inertia::render('Importaciones/Index', [
            'importaciones' => Importacion::with('evento')->paginate(10)->withQueryString(),
        ]);
    }

    function create()
    {
        return Inertia::render('Importaciones/Add', [
            'eventos' => Evento::all(),
        ]);
    }

    function store(ImportacionRequest $request)
    {
        Importacion::create($request->validated());

        return to_route('importaciones.index');
    }

    function edit(Importacion $importacion)
    {
        return Inertia::render('Importaciones/Edit', [
            'importacion' => $importacion->load('evento'),
            'eventos' => Evento::all(),
        ]);
    }

    function update(ImportacionRequest $request, Importacion $importacion)
    {
        $importacion->update($request->validated());

        return redirect()->route('importaciones.edit', $importacion->id)
            ->with('success', 'Importación actualizada correctamente');
    }

    function destroy(Importacion $importacion)
    {
        $importacion->delete();

        return redirect()->route('importaciones.index')
            ->with('success', 'Importación eliminada exitosamente');
    }
}