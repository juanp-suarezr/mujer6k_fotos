<?php

namespace Database\Factories;

use App\Enums\FotoEstado;
use App\Models\Evento;
use App\Models\Corredor;
use App\Models\Importacion;
use App\Models\Foto;
use Illuminate\Database\Eloquent\Factories\Factory;

class FotoFactory extends Factory
{
    protected $model = Foto::class;

    public function definition(): array
    {
        return [
            'evento_id' => Evento::factory(),
            'importacion_id' => Importacion::factory(),
            'corredor_id' => Corredor::factory(),
            'nombre_archivo' => fake()->bothify('IMG-####.jpg'),
            'google_drive_file_id' => fake()->unique()->regexify('[a-zA-Z0-9_-]{33}'),
            'google_drive_parent_id' => fake()->optional()->regexify('[a-zA-Z0-9_-]{33}'),
            'mime_type' => 'image/jpeg',
            'tamano_archivo' => fake()->optional()->numberBetween(100000, 5000000),
            'url_visualizacion' => fake()->optional()->url(),
            'url_descarga' => fake()->optional()->url(),
            'estado' => fake()->randomElement(FotoEstado::cases()),
            'metadata' => fake()->optional()->json(),
        ];
    }
}