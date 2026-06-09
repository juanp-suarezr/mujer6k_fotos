<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\EventoRequest;
use App\Models\Evento;

class EventoController extends Controller
{
    public function index()
    {
        return response()->json(Evento::all(), 200);
    }

    public function store(EventoRequest $request)
    {
        $evento = Evento::create($request->validated());
        return response()->json($evento, 201);
    }

    public function show(Evento $evento)
    {
        return response()->json($evento->load('corredores', 'fotos'), 200);
    }

    public function update(EventoRequest $request, Evento $evento)
    {
        $evento->update($request->validated());
        return response()->json($evento, 200);
    }

    public function destroy(Evento $evento)
    {
        $evento->delete();
        return response()->json(null, 204);
    }
}
