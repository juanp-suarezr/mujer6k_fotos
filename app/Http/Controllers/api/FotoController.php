<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FotoRequest;
use App\Models\Foto;

class FotoController extends Controller
{
    public function index()
    {
        return response()->json(Foto::with(['evento', 'corredor'])->get(), 200);
    }

    public function store(FotoRequest $request)
    {
        $foto = Foto::create($request->validated());
        return response()->json($foto, 201);
    }

    public function show(Foto $foto)
    {
        return response()->json($foto->load(['evento', 'corredor']), 200);
    }

    public function update(FotoRequest $request, Foto $foto)
    {
        $foto->update($request->validated());
        return response()->json($foto, 200);
    }

    public function destroy(Foto $foto)
    {
        $foto->delete();
        return response()->json(null, 204);
    }
}
