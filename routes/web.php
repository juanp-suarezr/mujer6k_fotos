<?php

use App\Http\Controllers\RegistroController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CargueMasivoController;
use App\Http\Controllers\CertificadosController;
use App\Http\Controllers\ConsultasController;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\EvidenciasController;
use App\Http\Controllers\OfertasController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PuntosController;
use App\Http\Controllers\RegistrosGemelosController;
use App\Http\Controllers\RestaurantesController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\CorredorController;
use App\Http\Controllers\FotoController;
use App\Models\Caninos;
use App\Models\PageView;
use App\Models\Perfil;
use App\Models\Registro;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//inicio pagina web
Route::get('/Welcome', function () {

    return Inertia::render('Welcome', [

        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,



    ]);
})->name('welcome');


Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        return Inertia::render('Welcome', [

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,



        ]);
    }
});

Route::get('/home', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        redirect()->route('welcome');
    }
});
Route::get('register', [RegisteredUserController::class, 'create']);
Route::post('registro', [RegistroController::class, 'create'])->name('registro');

Route::get('/searchRegistrado', [RegistroController::class, 'searchRegistrado'])->name('searchRegistrado');


Route::get('/dashboard', function () {
    $user = Auth::user();



    $registros = Registro::count();
    // Obtén los totales por género
    $generos = Registro::selectRaw('genero, count(*) as total')
        ->groupBy('genero')
        ->get()
        ->pluck('total', 'genero');



    // Normaliza los géneros
    $registro_genero = [
        'Masculino' => $generos['Masculino'] ?? 0,
        'Femenino' => $generos['Femenino'] ?? 0,
        'Otros' => collect($generos)
            ->except(['Masculino', 'Femenino'])
            ->sum(),
    ];

    // Obtén los totales por rango de edad
    // ['0-5', '6-11', '12-18', '19-26', '27-35', '36-55', '56-59', '60+']
    $registro_rango_Edad = Registro::selectRaw('CASE
            WHEN edad BETWEEN 0 AND 5 THEN "0-5"
            WHEN edad BETWEEN 6 AND 11 THEN "6-11"
            WHEN edad BETWEEN 12 AND 18 THEN "12-18"
            WHEN edad BETWEEN 19 AND 26 THEN "19-26"
            WHEN edad BETWEEN 27 AND 35 THEN "27-35"
            WHEN edad BETWEEN 36 AND 55 THEN "36-55"
            WHEN edad BETWEEN 56 AND 59 THEN "56-59"
            WHEN edad >= 60 THEN "60+"
            ELSE "Desconocido"
        END AS rango_edad, count(*) as total')
        ->groupBy('rango_edad')
        ->get()
        ->pluck('total', 'rango_edad');

        


    return Inertia::render('Dashboard', [
        'views' => PageView::all(),
        'registros' => $registros,
        'registroXgenero' => $registro_genero,
        'registroXedad' => $registro_rango_Edad,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn() => Inertia::render('About'))->name('about');
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //update evidencias
    Route::post('/updateEvidencias', [EvidenciasController::class, 'update'])->name('updateEvidencias');


    //PLANTILLA EXCEL para cargue masivo
    //usuario
    Route::get('plantillaRes', [CargueMasivoController::class, 'plantillaRes'])->name('plantillaRes.excel');

    //import excel carga masiva
    //usuarios
    Route::post('/cargueRestaurantes', [CargueMasivoController::class, 'cargueRestaurantes'])->name('cargueRestaurantes');
});

Route::group(['middleware' => ['auth']], function () {

    Route::resource('users', UserController::class)->middleware('auth');
    Route::resource('roles', RoleController::class);
    Route::resource('registradosUnicos', RegistrosGemelosController::class);
    Route::resource('registros', RegistroController::class);
    Route::resource('evidencias', EvidenciasController::class);
    Route::resource('eventos', EventoController::class);
    Route::resource('corredores', CorredorController::class);
    Route::resource('fotos', FotoController::class);
});



require __DIR__ . '/auth.php';
