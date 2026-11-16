<?php

namespace App\Http\Controllers;

use App\Services\WelcomeConfigService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeConfigController extends Controller
{
    public function __construct(protected WelcomeConfigService $configService)
    {
    }

    public function edit()
    {
        return Inertia::render('WelcomeConfig/Edit', [
            'config' => $this->configService->getAll(),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'hero_badge' => ['nullable', 'string', 'max:150'],
            'hero_titulo' => ['nullable', 'string', 'max:150'],
            'hero_subtitulo' => ['nullable', 'string', 'max:150'],
            'hero_descripcion' => ['nullable', 'string', 'max:1000'],
            'hero_lema' => ['nullable', 'string', 'max:250'],
            'hero_imagen' => ['nullable', 'string', 'max:500'],
            'hero_imagen_file' => ['nullable', 'image', 'max:10240'], // hasta 10MB

            'seccion2_mostrar' => ['nullable', 'boolean'],
            'seccion2_imagen' => ['nullable', 'string', 'max:500'],
            'seccion2_imagen_file' => ['nullable', 'image', 'max:10240'],
            'seccion2_badge' => ['nullable', 'string', 'max:150'],
            'seccion2_titulo' => ['nullable', 'string', 'max:150'],
            'seccion2_titulo_resaltado' => ['nullable', 'string', 'max:150'],
            'seccion2_descripcion' => ['nullable', 'string', 'max:2000'],
            'seccion2_boton1_texto' => ['nullable', 'string', 'max:100'],
            'seccion2_boton1_url' => ['nullable', 'string', 'max:500'],
            'seccion2_boton2_texto' => ['nullable', 'string', 'max:100'],
            'seccion2_boton2_url' => ['nullable', 'string', 'max:500'],
        ]);

        $this->configService->update($validated, $request);

        return redirect()->route('welcome-config.edit')
            ->with('success', 'Configuración de la página de inicio guardada correctamente.');
    }

    public function reset()
    {
        $this->configService->reset();

        return redirect()->route('welcome-config.edit')
            ->with('success', 'La página de inicio ha sido restablecida a sus valores por defecto.');
    }
}

