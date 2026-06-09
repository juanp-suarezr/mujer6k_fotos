<?php

use App\Http\Controllers\api\EventoController as ApiEventoController;
use App\Http\Controllers\api\CorredorController as ApiCorredorController;
use App\Http\Controllers\api\FotoController as ApiFotoController;
use App\Http\Controllers\api\UserAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('userinfo', function () {
    return response()->json([
        'status' => true,
        'message' => 'API REST - Gestión Fotográfica Deportiva',
        'product' => 'Fotos Deportivas',
    ], 200);
});

Route::post('login', [UserAuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserAuthController::class, 'logout']);
    Route::apiResource('eventos', ApiEventoController::class);
    Route::apiResource('corredores', ApiCorredorController::class);
    Route::apiResource('fotos', ApiFotoController::class);
});
