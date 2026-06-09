<?php

use App\Http\Controllers\api\RegistroController;
use App\Http\Controllers\api\EventoController as ApiEventoController;
use App\Http\Controllers\api\CorredorController as ApiCorredorController;
use App\Http\Controllers\api\FotoController as ApiFotoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('userinfo',function () {
    return response()->json([
        'status' => true,
        'message' => "Consume API Rest 2.1",
        'product' => 'VIVE DIGITAL'
    ], 200);
});

// Protected routes
Route::middleware('auth:sanctum')->group( function () {
    Route::post('/logout', [UserAuthController::class, 'logout']);
    Route::apiResource('eventos', ApiEventoController::class);
    Route::apiResource('corredores', ApiCorredorController::class);
    Route::apiResource('fotos', ApiFotoController::class);
});

Route::get('/registrados-api', [RegistroController::class, 'index']);

Route::post('login',[UserAuthController::class,'login']);
