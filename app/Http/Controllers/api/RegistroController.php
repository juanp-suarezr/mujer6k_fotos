<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Registro;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegistroController extends Controller
{
    public function index()
    {
        $search = RequestFacade::input('search');
        $punto = RequestFacade::input('punto');

        $registro = Registro::query();

        if ($search) {
            $registro = $registro->where(function ($query) use ($search) {
                $query->where('nombres', 'like', '%' . $search . '%')
                    ->orWhere('apellidos', 'like', '%' . $search . '%')
                    ->orWhere('identificacion', 'like', '%' . $search . '%');
            });
        }

        if ($punto) {
            $registro = $registro->whereHas('puntos_vive', function ($query) use ($punto) {
                $query->where('code', $punto);
            });
        }

        $registro = $registro->latest('created_at')->get();

        $response = [
            'estado' => 'success',
            'mensaje' => $registro->count() . ' Registros obtenidos',
            'data' => $registro,
        ];

        return response()->json($response, 200);
    }
}
