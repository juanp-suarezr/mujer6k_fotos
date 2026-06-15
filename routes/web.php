<?php

use App\Http\Controllers\EventoController;
use App\Http\Controllers\CorredorController;
use App\Http\Controllers\FotoController;
use App\Http\Controllers\ImportacionController;
use App\Http\Controllers\DriveBrowserController;
use App\Http\Controllers\GoogleDriveConnectionController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
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
| contains the "web" middleware group.
|
*/

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])->name('password.request');
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])->name('password.email');
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])->name('password.reset');
    Route::post('reset-password', [NewPasswordController::class, 'store'])->name('password.update');
});

// Rutas públicas para búsqueda de fotos
Route::get('/buscar-fotos', [\App\Http\Controllers\PublicFotoController::class, 'index'])->name('fotos.public.index');
Route::get('/fotos/buscar', [\App\Http\Controllers\PublicFotoController::class, 'search'])->name('fotos.public.search');
Route::get('/fotos/{foto}/descargar', [\App\Http\Controllers\PublicFotoController::class, 'download'])->name('fotos.public.download');
Route::get('/fotos-sin-dorsal', [\App\Http\Controllers\PublicFotoController::class, 'sinDorsal'])->name('fotos.public.sin-dorsal');

Route::middleware(['auth'])->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('users', UserController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('eventos', EventoController::class);
    Route::resource('corredores', CorredorController::class);
    Route::resource('fotos', FotoController::class);
    Route::resource('importaciones', ImportacionController::class);

    Route::get('importaciones/{importacion}/progress', [ImportacionController::class, 'progress'])->name('importaciones.progress');

    Route::prefix('google-drive')->name('google-drive.')->group(function () {
        Route::get('/', function () {
            $connection = \App\Models\GoogleConnection::latest('id')->first();
            $eventos = \App\Models\Evento::all();
            return Inertia::render('GoogleDrive/Index', compact('connection', 'eventos'));
        })->name('index');
        Route::get('connect', [GoogleDriveConnectionController::class, 'connect'])->name('connect');
        Route::get('callback', [GoogleDriveConnectionController::class, 'callback'])->name('callback');
        Route::get('status', [GoogleDriveConnectionController::class, 'status'])->name('status');
        Route::post('validate', [GoogleDriveConnectionController::class, 'validateConnection'])->name('validate');
        Route::post('disconnect', [GoogleDriveConnectionController::class, 'disconnect'])->name('disconnect');
    });

    Route::post('importaciones/{importacion}/sync', [ImportacionController::class, 'sync'])->name('importaciones.sync');
    Route::post('importaciones/{importacion}/sync-incremental', [ImportacionController::class, 'syncIncremental'])->name('importaciones.sync.incremental');
    Route::post('importaciones/{importacion}/sync-fill', [ImportacionController::class, 'syncFill'])->name('importaciones.sync.fill');
    Route::post('importaciones/{importacion}/sync-overwrite', [ImportacionController::class, 'syncOverwrite'])->name('importaciones.sync.overwrite');

    Route::get('drive-browser', [DriveBrowserController::class, 'index'])->name('drive-browser.index');
    Route::get('drive-browser/{folderId}', [DriveBrowserController::class, 'show'])->name('drive-browser.show');
    Route::post('drive-browser/import/{evento}', [DriveBrowserController::class, 'import'])->name('drive-browser.import');
});

require __DIR__ . '/auth.php';
