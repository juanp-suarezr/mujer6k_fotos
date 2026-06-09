<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Caninos;
use App\Models\Evidencias;
use App\Models\InformacionUsuario;
use App\Models\Puntos;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {


        return Inertia::render(
            'Auth/Register',
            [
                'evidencias' => Evidencias::select('id', 'nombre')->where('estado', 'Activa')->get(),
            ]
        );
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'edad' => 'required|integer|min:0|max:120',
            'tipo_documento' => 'required|string', // Ajusta los valores según tu lógica
            'identificacion' => 'required|integer|digits_between:6,15|unique:informacion_usuario,numero_documento',
            'direccion' => 'required|string|max:255',
            'zona' => 'required|string|in:Urbana,Rural',
            'sector' => 'required|string|max:255',
            'telefono' => 'nullable|string|max:15',
            'celular' => 'required',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'nombre' => 'required|string|max:255',
            'sexo' => 'required|string|in:Macho,Hembra',
            'fecha_nacimiento' => 'required|date|before_or_equal:today',
            'edad_canino' => 'nullable|string|max:10',
            'raza' => 'required|string|max:255',
            'caracteristicas' => 'nullable|string|max:500',
            'es_peligroso' => 'required|string',
            'tiene_agresiones' => 'required|string',
            'entrenado_ataque' => 'required|string',
            'entrenado_proteccion' => 'required|string',
            'esterilizado' => 'required|string',
            'observaciones' => 'nullable|string|max:500',
            'foto_url' => 'nullable|image|mimes:pg,png,jpeg,jpg,gif,bmp,tiff,svg,web,webp|max:2048',
            'checked' => 'required|boolean',
            'recaptcha_token' => 'required|string',
        ]);

        DB::beginTransaction();

        try {

            // Verifica el token de reCAPTCHA
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => env('RECAPTCHA_SECRET_KEY'), // Llave secreta de reCAPTCHA
                'response' => $request->recaptcha_token,
            ]);

            $recaptchaData = $response->json();

            Log::info('reCAPTCHA response:', $recaptchaData);

            if (!$recaptchaData['success'] || $recaptchaData['score'] < 0.5) {
                return back()->withErrors(['recaptcha' => 'La validación de reCAPTCHA falló. Inténtelo nuevamente.']);
            }

            // Crear el usuario
            $user = User::create([
                'name' => $request->nombres . ' ' . $request->apellidos,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Sincronizar el rol de usuario
            $user->assignRole('Usuario'); // Asegúrate de que el rol "usuario" exista en tu sistema

            // Crear la información del usuario
            InformacionUsuario::create([
                'nombre_completo' => $request->nombres . ' ' . $request->apellidos,
                'edad' => $request->edad,
                'tipo_documento' => $request->tipo_documento,
                'numero_documento' => $request->identificacion,
                'direccion' => $request->direccion,
                'zona' => $request->zona,
                'comuna' => $request->sector,
                'telefono' => $request->telefono,
                'celular' => $request->celular,
                'user_id' => $user->id,
            ]);

            $fileName = 'NA';

        if ($request->foto_url) {

            $folder = 'caninos';
            $extension = $request->file('foto_url')->getClientOriginalExtension();

            $fileName = time() . '_canino_' . $request->nombre .'_'.$user->id. '.' . $extension;
            $filePath = $request->file('foto_url')->storeAs('uploads/' . $folder, $fileName, 'public');
        }

            // Crear la información del canino
            Caninos::create([
                'nombre' => $request->nombre,
                'sexo' => $request->sexo,
                'fecha_nacimiento' => $request->fecha_nacimiento,
                'edad_canino' => $request->edad_canino,
                'raza' => $request->raza,
                'caracteristicas' => $request->caracteristicas,
                'es_peligroso' => $request->es_peligroso,
                'tiene_agresiones' => $request->tiene_agresiones,
                'entrenado_ataque' => $request->entrenado_ataque,
                'entrenado_proteccion' => $request->entrenado_proteccion,
                'esterilizado' => $request->esterilizado,
                'observaciones' => $request->observaciones,
                'foto_url' => $fileName,
                'user_id' => $user->id,
            ]);

            // Disparar el evento de registro
            event(new Registered($user));

            DB::commit();

            return back()->with('success', 'Registro completado exitosamente.');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['error' => 'Ocurrió un error durante el registro. Inténtelo nuevamente.']);
        }
    }
}
