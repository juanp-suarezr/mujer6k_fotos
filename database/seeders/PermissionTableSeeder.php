<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'rol-listar',
            'rol-crear',
            'rol-editar',
            'rol-eliminar',
            'usuarios-listar',
            'usuarios-crear',
            'usuarios-editar',
            'usuarios-eliminar'
        ];

        $permissions4 = [
            'restaurante-listar',
            'restaurante-editar',
            'restaurante-eliminar',
            'restaurante-crear',
            
        ];

        

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
