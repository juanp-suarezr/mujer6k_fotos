<?php

use App\Http\Controllers\api\RegistroController;
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

/*     Route::controller(ProductController::class)->group(function() {
        Route::post('/products', 'store');
        Route::post('/products/{id}', 'update');
        Route::delete('/products/{id}', 'destroy');
    }); */
});

Route::get('/registrados-api', [RegistroController::class, 'index']);

Route::post('login',[UserAuthController::class,'login']);
