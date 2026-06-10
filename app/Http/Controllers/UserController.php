<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:usuarios-listar|usuarios-crear|usuarios-editar|usuarios-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:usuarios-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:usuarios-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:usuarios-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        $users = User::when(request('search'), function ($query, $search) {
            $query->where('name', 'like', '%' . $search . '%');
        })->paginate(10)->withQueryString();

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    function create()
    {
        return Inertia::render('Users/Add', [
            'roles' => Role::pluck('name', 'id'),
        ]);
    }

    function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', 'string', 'exists:roles,name'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'estado' => 'Activo',
        ]);

        $user->syncRoles([$request->role]);

        return to_route('users.index')->with('success', 'Usuario creado correctamente');
    }

    function edit(User $user)
    {
        $roles = Role::pluck('name', 'id');
        $userRoles = $user->getRoleNames()->toArray();

        return Inertia::render('Users/Edit', [
            'user' => $user,
            'roles' => $roles,
            'userRoles' => $userRoles,
        ]);
    }

    function update(Request $request, User $user)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'password' => ['nullable', 'confirmed', Password::defaults()],
            'estado' => ['required', 'string'],
            'roles_user' => ['nullable', 'array'],
        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->estado = $request->estado;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        if ($request->filled('roles_user')) {
            $user->syncRoles($request->roles_user);
        }

        return redirect()->route('users.edit', $user->id)
            ->with('success', 'Usuario actualizado correctamente');
    }

    function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')
            ->with('success', 'Usuario eliminado exitosamente');
    }
}
