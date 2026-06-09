<?php

namespace App\Http\Controllers;

use App\Exports\RegisterExports;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Evidencias;
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
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;



class RegistroController extends Controller
{
    public function index()
    {



        if (auth()->check()) {

            $registro = [];


            if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
                $registro =  Registro::query()
                    ->with('evidencia')
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

                'Registrados/Index',

                [
                    'registro' => $registro,
                    'filters' => RequestFacade::only(['search', 'fecha_init', 'fecha_end', 'punto']),

                ]
            );
        } else {
            return redirect()->route('login');
        }
    }

    public function searchRegistrado()
    {

        return [
            'registrados' => Info_usuario::query()
                ->when(RequestFacade::input('identificacion'), function ($query, $search) {
                    $query->where('identificacion', $search);
                })->get()->first(),
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // Validación de los datos del request
        $request->validate([
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'edad' => 'required',
            'identificacion' => 'nullable|max:20',
            'comuna' => 'required',
            'sector' => 'required',
            'telefono' => 'required|max:15',
            'email' => 'nullable|string|email|max:100',
            'genero' => 'required',
            'condicion' => 'required',
            'etnia' => 'required',
            'nivel_estudio' => 'required',
            'tipo_servicio' => '',
            'id_evidencia' => 'nullable|exists:evidencias,id',
            'dignatario' => 'required',
            'recaptcha_token' => 'required|string',
        ]);


        DB::transaction(function () use ($request) {
            // Crear el registro en la tabla 'registro'

            // Verifica el token de reCAPTCHA
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => env('RECAPTCHA_SECRET_KEY'), // Llave secreta de reCAPTCHA
                'response' => $request->recaptcha_token,
            ]);

            $recaptchaData = $response->json();

            Log::info('reCAPTCHA response:', $recaptchaData);

            if (!$recaptchaData['success'] || $recaptchaData['score'] < 0.4) {
                return back()->withErrors(['recaptcha' => 'La validación de reCAPTCHA falló. Inténtelo nuevamente.']);
            }

            $user = Registro::create([
                'nombres' => $request->nombres,
                'apellidos' => $request->apellidos,
                'edad' => $request->edad,
                'identificacion' => $request->identificacion,
                'comuna' => $request->input('comuna.label'),
                'sector' => $request->sector,
                'telefono' => $request->telefono,
                'email' => $request->email,
                'genero' => $request->genero,
                'condicion' => $request->condicion,
                'etnia' => $request->etnia,
                'nivel_estudio' => $request->nivel_estudio,
                'tipo_servicio' => $request->tipo_servicio,
                'id_evidencia' => $request->id_evidencia,
                'dignatario' => $request->dignatario,
            ]);

            // Verificar si ya existe un registro con la misma identificación en la tabla 'info_usuario'
            $existingUser = Info_usuario::where('identificacion', $request->identificacion)->first();

            if (!$existingUser) {
                // Crear el registro en la tabla 'info_usuario' solo si no existe
                Info_usuario::create([
                    'nombres' => $user->nombres,
                    'apellidos' => $user->apellidos,
                    'edad' => $user->edad,
                    'identificacion' => $user->identificacion,
                    'comuna' => $request->input('comuna.label'),
                    'sector' => $user->sector,
                    'telefono' => $user->telefono,
                    'email' => $user->email,
                    'genero' => $user->genero,
                    'condicion' => $user->condicion,
                    'etnia' => $user->etnia,
                    'nivel_estudio' => $user->nivel_estudio,
                    'dignatario' => $user->dignatario,
                ]);
            } else {
                // Actualizar el registro existente con la nueva información
                $existingUser->update([
                    'nombres' => $user->nombres,
                    'apellidos' => $user->apellidos,
                    'edad' => $user->edad,
                    'comuna' => $request->input('comuna.label'),
                    'sector' => $user->sector,
                    'telefono' => $user->telefono,
                    'email' => $user->email,
                    'genero' => $user->genero,
                    'condicion' => $user->condicion,
                    'etnia' => $user->etnia,
                    'nivel_estudio' => $user->nivel_estudio,
                    'dignatario' => $user->dignatario,
                ]);
            }

            // event(new Registered($user));
        });

        return redirect()->route('register');
    }



    public function edit(Request $request, $registros)
    {


        return Inertia::render(

            'Registrados/Edit',

            [
                'usuario' => Registro::findOrFail($registros),
                'evidencias' => Evidencias::select('id', 'nombre')->where('estado', 'Activa')->get(),
            ]
        );
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'edad' => 'required',
            'tipo_documento' => 'required',
            'identificacion' => 'nullable|max:20',
            'direccion' => 'required|string|max:100',
            'sector' => 'required',
            'telefono' => 'required|max:15',
            'email' => 'nullable|string|lowercase|email|max:100',
            'genero' => 'required',
            'condicion' => 'required',
            'etnia' => 'required',
            'nivel_estudio' => 'required',
            'tipo_servicio' => '',
            'id_evidencia' => 'nullable|exists:evidencias,id',
            'dignatario' => 'required',
        ]);

        // Actualizar el modelo de usuario con los datos validados

        // Verificar si ya existe un registro con la misma identificación en la tabla 'info_usuario'
        $existingUser = Info_usuario::where('identificacion', $request->identificacion)->first();
        if ($existingUser) {
            // Actualizar el registro existente con la nueva información
            $existingUser->fill($data)->save();
        }

        $user = Registro::findOrFail($request->id);
        $user->fill($data)->save();
        return redirect()->route('registrados.index');
    }

    public function excel()
    {
        ob_end_clean();
        ob_start();

        $startDate = RequestFacade::input('fecha_init');
        $endDate = RequestFacade::input('fecha_end');

        return Excel::download(new RegisterExports($startDate, $endDate), 'register.xls', \Maatwebsite\Excel\Excel::XLS);
    }


}
