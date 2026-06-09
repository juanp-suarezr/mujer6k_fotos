<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\Corredor;
use App\Http\Requests\CorredorRequest;
use Inertia\Inertia;

class CorredorController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:corredores-listar|corredores-crear|corredores-editar|corredores-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:corredores-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:corredores-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:corredores-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        return Inertia::render('Corredores/Index', [
            'corredores' => Corredor::with('evento')->paginate(10)->withQueryString(),
        ]);
    }

    function create()
    {
        return Inertia::render('Corredores/Add', [
            'eventos' => Evento::all(),
        ]);
    }

    function store(CorredorRequest $request)
    {
        Corredor::create($request->validated());

        return to_route('corredores.index');
    }

    function edit(Corredor $corredor)
    {
        return Inertia::render('Corredores/Edit', [
            'corredor' => $corredor->load('evento'),
            'eventos' => Evento::all(),
        ]);
    }

    function update(CorredorRequest $request, Corredor $corredor)
    {
        $corredor->update($request->validated());

        return redirect()->route('corredores.edit', $corredor->id)
            ->with('success', 'Corredor actualizado correctamente');
    }

    function destroy(Corredor $corredor)
    {
        $corredor->delete();

        return redirect()->route('corredores.index')
            ->with('success', 'Corredor eliminado exitosamente');
    }
}
