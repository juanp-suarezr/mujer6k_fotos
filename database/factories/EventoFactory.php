<?php

namespace Database\Factories;

use App\Models\Evento;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventoFactory extends Factory
{
    protected $model = \App\Models\Evento::class;

    public function definition(): array
    {
        return [
            'nombre' => fake()->sentence(3),
            'descripcion' => fake()->paragraph(),
            'fecha_evento' => fake()->date(),
            'estado' => fake()->randomElement(['activo', 'finalizado', 'cancelado']),
        ];
    }
}
