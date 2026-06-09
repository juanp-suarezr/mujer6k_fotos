<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CorredorRequest;
use App\Models\Corredor;

class CorredorController extends Controller
{
    public function index()
    {
        return response()->json(Corredor::with('evento')->get(), 200);
    }

    public function store(CorredorRequest $request)
    {
        $corredor = Corredor::create($request->validated());
        return response()->json($corredor, 201);
    }

    public function show(Corredor $corredor)
    {
        return response()->json($corredor->load('evento', 'fotos'), 200);
    }

    public function update(CorredorRequest $request, Corredor $corredor)
    {
        $corredor->update($request->validated());
        return response()->json($corredor, 200);
    }

    public function destroy(Corredor $corredor)
    {
        $corredor->delete();
        return response()->json(null, 204);
    }
}
