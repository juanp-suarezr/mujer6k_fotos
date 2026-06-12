<?php

namespace Database\Factories;

use App\Enums\ImportacionEstado;
use App\Models\Evento;
use App\Models\Importacion;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImportacionFactory extends Factory
{
    protected $model = Importacion::class;

    public function definition(): array
    {
        return [
            'evento_id' => Evento::factory(),
            'origen' => fake()->randomElement(['drive', 'carpeta']),
            'carpeta_drive_id' => fake()->optional()->regexify('[a-zA-Z0-9_-]{33}'),
            'estado' => fake()->randomElement(ImportacionEstado::cases()),
            'total_archivos' => fake()->numberBetween(0, 1000),
            'procesados' => fake()->numberBetween(0, 1000),
            'errores' => fake()->numberBetween(0, 50),
            'fecha_inicio' => fake()->optional()->dateTime(),
            'fecha_fin' => fake()->optional()->dateTime(),
        ];
    }
}