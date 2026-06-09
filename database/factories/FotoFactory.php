<?php

namespace Database\Factories;

use App\Models\Evento;
use App\Models\Corredor;
use Illuminate\Database\Eloquent\Factories\Factory;

class FotoFactory extends Factory
{
    protected $model = \App\Models\Foto::class;

    public function definition(): array
    {
        $evento = Evento::factory();
        $corredor = Corredor::factory();

        return [
            'evento_id' => $evento,
            'corredor_id' => $corredor,
            'nombre_archivo' => fake()->bothify('IMG-####.jpg'),
            'ruta_storage' => fake()->bothify('eventos/####/###/IMG-####.jpg'),
            'url_publica' => fake()->optional()->url(),
            'estado' => fake()->randomElement(['pendiente', 'procesada', 'rechazada']),
            'metadata' => fake()->optional()->json(),
        ];
    }
}
