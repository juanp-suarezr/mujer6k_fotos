<?php

namespace Database\Seeders;

use App\Models\Evento;
use App\Models\Corredor;
use App\Models\Foto;
use Illuminate\Database\Seeder;

class EventoSeeder extends Seeder
{
    public function run(): void
    {
        Evento::factory()
            ->count(5)
            ->has(
                Corredor::factory()
                    ->count(3)
                    ->has(Foto::factory()->count(2), 'fotos')
            )
            ->create();
    }
}