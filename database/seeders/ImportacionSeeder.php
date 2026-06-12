<?php

namespace Database\Seeders;

use App\Models\Importacion;
use App\Models\LogImportacion;
use Illuminate\Database\Seeder;

class ImportacionSeeder extends Seeder
{
    public function run(): void
    {
        Importacion::factory()
            ->count(3)
            ->has(LogImportacion::factory()->count(5), 'logs')
            ->create();
    }
}