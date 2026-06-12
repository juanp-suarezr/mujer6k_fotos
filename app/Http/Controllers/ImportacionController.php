<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportacionRequest;
use App\Models\Evento;
use App\Models\Importacion;
use App\Services\SyncService;
use Inertia\Inertia;

class ImportacionController extends Controller
{
    public function __construct(protected SyncService $syncService)
    {
        $this->middleware('permission:importaciones-listar|importaciones-crear|importaciones-editar|importaciones-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:importaciones-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:importaciones-editar', ['only' => ['edit', 'update', 'sync', 'progress']]);
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
            'importacion' => $importacion->load(['evento', 'logs']),
            'eventos' => Evento::all(),
            'progress' => $this->syncService->progress($importacion),
            'fotos' => $importacion->fotos()->orderByDesc('id')->limit(100)->get(),
            'fotos_count' => $importacion->fotos()->count(),
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
        $this->syncService->start($importacion);

        return redirect()->route('importaciones.edit', $importacion->id)
            ->with('success', 'Sincronización iniciada');
    }

    function progress(Importacion $importacion)
    {
        return response()->json($this->syncService->progress($importacion));
    }

    function destroy(Importacion $importacion)
    {
        $importacion->delete();

        return redirect()->route('importaciones.index')
            ->with('success', 'Importación eliminada exitosamente');
    }
}
