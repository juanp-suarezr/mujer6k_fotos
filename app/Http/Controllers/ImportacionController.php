<?php

namespace App\Http\Controllers;

use App\Jobs\ImportarEventoDriveJob;
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
        $this->middleware('permission:importaciones-editar', ['only' => ['edit', 'update', 'sync']]);
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
        $importacion = Importacion::create($request->validated());

        return redirect()->route('importaciones.edit', $importacion->id);
    }

    function edit(Importacion $importacion)
    {
        return Inertia::render('Importaciones/Edit', [
            'importacion' => $importacion->load(['evento', 'logs', 'fotos']),
            'eventos' => Evento::all(),
        ]);
    }

    function update(ImportacionRequest $request, Importacion $importacion)
    {
        $importacion->update($request->validated());

        return redirect()->route('importaciones.edit', $importacion->id)
            ->with('success', 'Importación actualizada correctamente');
    }

    function sync(Importacion $importacion)
    {
        ImportarEventoDriveJob::dispatch($importacion->evento_id, $importacion->carpeta_drive_id, $importacion->id);

        return redirect()->route('importaciones.edit', $importacion->id)
            ->with('success', 'Sincronización iniciada');
    }

    function destroy(Importacion $importacion)
    {
        $importacion->delete();

        return redirect()->route('importaciones.index')
            ->with('success', 'Importación eliminada exitosamente');
    }
}