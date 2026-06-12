<?php

namespace Database\Factories;

use App\Models\Importacion;
use App\Models\LogImportacion;
use Illuminate\Database\Eloquent\Factories\Factory;

class LogImportacionFactory extends Factory
{
    protected $model = LogImportacion::class;

    public function definition(): array
    {
        return [
            'importacion_id' => Importacion::factory(),
            'tipo' => fake()->randomElement(['info', 'error', 'warning']),
            'mensaje' => fake()->sentence(),
            'metadata' => fake()->optional()->json(),
        ];
    }
}