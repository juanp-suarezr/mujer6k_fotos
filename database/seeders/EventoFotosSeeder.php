<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Evento;
use App\Models\Corredor;
use App\Models\Foto;

class EventoFotosSeeder extends Seeder
{
    public function run(): void
    {
        Evento::factory()
            ->has(Corredor::factory()->count(10)->has(Foto::factory()->count(rand(1, 5)), 'fotos'), 'corredores')
            ->create();
    }
}
