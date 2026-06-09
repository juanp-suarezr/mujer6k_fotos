<?php

namespace Database\Factories;

use App\Models\Evento;
use App\Models\Corredor;
use Illuminate\Database\Eloquent\Factories\Factory;

class CorredorFactory extends Factory
{
    protected $model = \App\Models\Corredor::class;

    public function definition(): array
    {
        return [
            'evento_id' => Evento::factory(),
            'dorsal' => fake()->unique()->numberBetween(1, 5000),
            'nombre_completo' => fake()->name(),
            'documento' => fake()->optional()->regexify('[0-9]{8,12}'),
        ];
    }
}
