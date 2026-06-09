<?php

namespace App\Http\Controllers;

use App\Models\Caninos;
use App\Models\InformacionUsuario;
use Illuminate\Support\Facades\Request as RequestFacade;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use DB;
use Illuminate\Support\Facades\Auth;

class ConsultasController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct() {}

    public function showConsultasRegistros()
    {
        return Inertia::render(
            'ConsultarRegistro',
            [
                'registro' => Caninos::query()
                    ->whereHas('user.informacionUsuario', function ($query) {
                        $identificacion = RequestFacade::input('identificacion');
                        if ($identificacion) {
                            $query->where('numero_documento', $identificacion);
                        } else {
                            $query->where('numero_documento', 0);
                        }
                    })
                    ->with([
                        'user.informacionUsuario:nombre_completo,user_id', // Solo trae el campo 'nombres' de informacionUsuario
                    ])
                    ->select('id','nombre','raza','edad_canino','sexo','foto_url','es_peligroso', 'user_id') // Solo selecciona el ID del usuario
                    ->paginate(4)
                    ->withQueryString(),
                'filters' => RequestFacade::only(['identificacion']),
            ]
        );
    }


    public function index()
    {
        $user = Auth::user();

        $caninos = Caninos::query()
            ->whereHas('user.informacionUsuario', function ($query) use ($user) {
                if ($user->roles->pluck('name')->toArray() == ['Administrador']) {
                    // Filtros opcionales para el administrador
                    $identificacion = RequestFacade::input('identificacion');
                    $nombre = RequestFacade::input('nombre');

                    if ($identificacion) {
                        $query->where('numero_documento', $identificacion);
                    }

                    if ($nombre) {
                        $query->where('nombre_completo', 'like', '%' . $nombre . '%');
                    }
                } else {
                    // Filtro obligatorio para usuarios no administradores
                    $identificacion = InformacionUsuario::where('user_id', $user->id)->pluck('numero_documento')->first();
                    $query->where('numero_documento', $identificacion);
                }
            })
            ->with([
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,telefono,celular,comuna,edad,zona,user_id', // Solo trae los campos necesarios de informacionUsuario
            ])
            ->paginate(5)
            ->withQueryString();

        return Inertia::render(
            'Caninos/Index',
            [
                'caninos' => $caninos,
                'filters' => RequestFacade::only(['identificacion', 'nombre']),
            ]
        );
    }

    public function create()
    {
        $roles = Role::pluck('name', 'name')->all();
        return Inertia::render('Restaurantes/Add', compact('roles'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'roles_user' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->syncRoles($request->input('roles_user'));

        return to_route('users.index');
    }

    public function edit(Request $request, $id_user)
    {
        $usuario = User::findOrFail($id_user);
        $roles = Role::pluck('name', 'name')->all();
        $userRole = $usuario->roles->pluck('name', 'name')->all();
        return Inertia::render('Users/Edit', compact('usuario', 'roles', 'userRole'));
    }

    public function update(Request $request, User $user)
    {
        // Validar los datos de entrada
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'string', 'max:255', Rule::unique('users')->ignore($user)],
            'estado' => ['required'],
            'roles_user' => 'required'
        ]);
        // Actualizar el modelo de usuario con los datos validados
        $user->fill($data)->save();
        $user->syncRoles($request->input('roles_user'));
        return Redirect::route('users.edit', $user->id);
    }

    public function destroy(Request $request, $id)
    {

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        DB::table("users")->where('id', $id)->delete();
        return redirect()->route('users.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }
}
