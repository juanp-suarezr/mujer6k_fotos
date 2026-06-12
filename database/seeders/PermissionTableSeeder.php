<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            'rol-listar', 'rol-crear', 'rol-editar', 'rol-eliminar',
            'usuarios-listar', 'usuarios-crear', 'usuarios-editar', 'usuarios-eliminar',
            'eventos-listar', 'eventos-crear', 'eventos-editar', 'eventos-eliminar',
            'corredores-listar', 'corredores-crear', 'corredores-editar', 'corredores-eliminar',
            'fotos-listar', 'fotos-crear', 'fotos-editar', 'fotos-eliminar',
            'importaciones-listar', 'importaciones-crear', 'importaciones-editar', 'importaciones-eliminar',
            'google-drive-conectar', 'google-drive-validar', 'google-drive-desconectar',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }
    }
}
