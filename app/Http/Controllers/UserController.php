<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

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
        return Inertia::render('Users/Add');
    }

    function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'estado' => 'Activo',
        ]);

        return to_route('users.index')->with('success', 'Usuario creado correctamente');
    }

    function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user,
        ]);
    }

    function update(Request $request, User $user)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'password' => ['nullable', 'confirmed', Password::defaults()],
        ]);

        $user->name = $request->name;
        $user->email = $request->email;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

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
