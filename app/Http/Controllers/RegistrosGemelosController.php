<?php

namespace App\Http\Controllers;

use App\Exports\RegisterExports;
use App\Exports\RegisterUnicosExports;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Info_usuario;
use App\Models\Puntos;
use App\Models\Registro;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;



class RegistrosGemelosController extends Controller
{
    public function index()
    {

        if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
            $registro =  Info_usuario::query()
                ->when(RequestFacade::input('search'), function ($query, $search) {
                    $query->where('nombres', 'like', '%' . $search . '%')
                        ->OrWhere('apellidos', 'like', '%' . $search . '%')
                        ->OrWhere('identificacion', 'like', '%' . $search . '%');
                })->when(RequestFacade::input('fecha_init') || RequestFacade::input('fecha_end'), function ($query) {
                    $fecha_init = RequestFacade::input('fecha_init');
                    $fecha_end = RequestFacade::input('fecha_end');

                    if ($fecha_end == null) {
                        $fecha_end = date('Y-m-d');
                    }

                    $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
                })
                ->latest('created_at') // Ordena los resultados por la columna 'created_at' de forma descendente
                ->paginate(5)
                ->withQueryString();

        }

        return Inertia::render(

            'RegistradosGemelos/Index',

            [
                'registro' => $registro,
                'filters' => RequestFacade::only(['search', 'fecha_init', 'fecha_end']),
            ]
        );
    }



    public function edit(Request $request)
    {


        return Inertia::render(

            'registradosUnicos/Edit',


            [
                'usuario' => Info_usuario::findOrFail($request->id),
            ]
        );
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'edad' => 'required',
            'identificacion' => 'required|max:20',
            'comuna' => 'required|string|max:100',
            'sector' => 'required',
            'telefono' => 'required|max:15',
            'email' => 'required|string|lowercase|email|max:100',
            'genero' => 'required',
            'condicion' => 'required',
            'etnia' => 'required',
            'nivel_estudio' => 'required',
            'dignatario' => 'nullable|boolean',
        ]);

        // Actualizar el modelo de usuario en la tabla info_usuario
        $existingUser = Info_usuario::where('identificacion', $request->identificacion)->first();
        if ($existingUser) {
            $existingUser->fill($data)->save();
        }

        // Actualizar todos los registros en la tabla registros con la misma identificación
        Registro::where('identificacion', $request->identificacion)->update([
            'nombres' => $data['nombres'],
            'apellidos' => $data['apellidos'],
            'edad' => $data['edad'],
            'comuna' => $data['comuna'],
            'sector' => $data['sector'],
            'telefono' => $data['telefono'],
            'email' => $data['email'],
            'genero' => $data['genero'],
            'condicion' => $data['condicion'],
            'etnia' => $data['etnia'],
            'nivel_estudio' => $data['nivel_estudio'],
        ]);

        return redirect()->route('registradosUnicos.index')->with('success', 'Información actualizada correctamente.');
    }

    // public function excel()
    // {
    //     ob_end_clean();
    //     ob_start();

    //     $startDate = RequestFacade::input('fecha_init');
    //     $endDate = RequestFacade::input('fecha_end');

    //     return Excel::download(new RegisterUnicosExports($startDate, $endDate), 'registrosUnicos.xls', \Maatwebsite\Excel\Excel::XLS);
    // }
}
