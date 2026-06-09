<?php 

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Http\Requests\EventoRequest;
use Inertia\Inertia;

class EventoController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:eventos-listar|eventos-crear|eventos-editar|eventos-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:eventos-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:eventos-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:eventos-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        return Inertia::render('Eventos/Index', [
            'eventos' => Evento::query()->paginate(10)->withQueryString(),
        ]);
    }

    function create()
    {
        return Inertia::render('Eventos/Add');
    }

    function store(EventoRequest $request)
    {
        Evento::create($request->validated());

        return to_route('eventos.index');
    }

    function edit(Evento $evento)
    {
        return Inertia::render('Eventos/Edit', [
            'evento' => $evento,
        ]);
    }

    function update(EventoRequest $request, Evento $evento)
    {
        $evento->update($request->validated());

        return redirect()->route('eventos.edit', $evento->id)
            ->with('success', 'Evento actualizado correctamente');
    }

    function destroy(Evento $evento)
    {
        $evento->delete();

        return redirect()->route('eventos.index')
            ->with('success', 'Evento eliminado exitosamente');
    }
}
