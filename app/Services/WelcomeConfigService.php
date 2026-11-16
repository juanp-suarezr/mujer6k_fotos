<?php

namespace App\Services;

use App\Models\WelcomeConfig;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Throwable;

class WelcomeConfigService
{
    public const DEFAULTS = [
        // Sección Hero
        'hero_badge' => 'Plataforma Oficial',
        'hero_titulo' => 'CONSULTA TUS FOTOS',
        'hero_subtitulo' => 'POR DORSAL',
        'hero_descripcion' => 'Encuentra, descarga y comparte tus fotografías oficiales del evento.',
        'hero_lema' => 'Pereira, una ciudad que avanza',
        'hero_imagen' => '/assets/img/fondo.webp',

        // Sección 2 (Destacada / Evento)
        'seccion2_mostrar' => true,
        'seccion2_imagen' => '/assets/img/mujerValiente.webp',
        'seccion2_badge' => '#MujerValiente6K',
        'seccion2_titulo' => '¿Participaste en la',
        'seccion2_titulo_resaltado' => 'Mujer Valiente 6K',
        'seccion2_descripcion' => 'Todos los participantes pueden encontrar, descargar y compartir sus fotos oficiales de la carrera. ¡Tu momento de gloria está a solo un dorsal de distancia!',
        'seccion2_boton1_texto' => 'BUSCAR MIS FOTOS',
        'seccion2_boton1_url' => '#inicio',
        'seccion2_boton2_texto' => 'MÁS INFORMACIÓN',
        'seccion2_boton2_url' => 'https://www.pereira.gov.co',
    ];

    protected string $jsonPath;

    public function __construct()
    {
        $this->jsonPath = storage_path('app/welcome_config.json');
    }

    /**
     * Obtiene la configuración completa combinando base de datos, archivo JSON y defaults.
     */
    public function getAll(): array
    {
        $config = self::DEFAULTS;

        // 1. Intentar cargar desde archivo JSON
        if (File::exists($this->jsonPath)) {
            try {
                $savedJson = json_decode(File::get($this->jsonPath), true);
                if (is_array($savedJson)) {
                    $config = array_merge($config, $savedJson);
                }
            } catch (Throwable $e) {
                Log::warning('No se pudo leer welcome_config.json: ' . $e->getMessage());
            }
        }

        // 2. Intentar cargar desde la base de datos si la tabla existe
        try {
            $dbConfigs = WelcomeConfig::pluck('value', 'key')->toArray();
            if (!empty($dbConfigs)) {
                foreach ($dbConfigs as $k => $v) {
                    if (array_key_exists($k, self::DEFAULTS)) {
                        // Decodificar booleanos si aplica
                        if ($k === 'seccion2_mostrar') {
                            $config[$k] = filter_var($v, FILTER_VALIDATE_BOOLEAN);
                        } else {
                            $config[$k] = $v;
                        }
                    }
                }
            }
        } catch (Throwable $e) {
            // Si la base de datos no está disponible o la tabla no ha sido migrada, se ignora
        }

        return $config;
    }

    /**
     * Actualiza la configuración con los datos enviados y archivos subidos.
     */
    public function update(array $data, Request $request): array
    {
        $current = $this->getAll();

        // Procesar subida de imagen de la Sección 2
        if ($request->hasFile('seccion2_imagen_file')) {
            $file = $request->file('seccion2_imagen_file');
            $filename = 'seccion2_' . time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('welcome', $filename, 'public');
            $data['seccion2_imagen'] = '/storage/' . $path;
        } elseif (empty($data['seccion2_imagen'])) {
            $data['seccion2_imagen'] = $current['seccion2_imagen'];
        }

        // Procesar subida de imagen de fondo del Hero
        if ($request->hasFile('hero_imagen_file')) {
            $file = $request->file('hero_imagen_file');
            $filename = 'hero_' . time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('welcome', $filename, 'public');
            $data['hero_imagen'] = '/storage/' . $path;
        } elseif (empty($data['hero_imagen'])) {
            $data['hero_imagen'] = $current['hero_imagen'];
        }

        // Normalizar booleano de seccion2_mostrar
        $data['seccion2_mostrar'] = isset($data['seccion2_mostrar']) ? (bool) $data['seccion2_mostrar'] : true;

        // Combinar datos
        $merged = array_merge($current, $data);

        // Guardar en archivo JSON local
        try {
            if (!File::isDirectory(storage_path('app'))) {
                File::makeDirectory(storage_path('app'), 0755, true);
            }
            File::put($this->jsonPath, json_encode($merged, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        } catch (Throwable $e) {
            Log::error('Error guardando welcome_config.json: ' . $e->getMessage());
        }

        // Guardar en Base de Datos si está accesible
        try {
            foreach ($merged as $key => $value) {
                WelcomeConfig::updateOrCreate(
                    ['key' => $key],
                    ['value' => is_bool($value) ? ($value ? '1' : '0') : (string) $value]
                );
            }
        } catch (Throwable $e) {
            Log::warning('No se pudo guardar WelcomeConfig en DB: ' . $e->getMessage());
        }

        return $merged;
    }

    /**
     * Restablece la configuración a los valores por defecto iniciales.
     */
    public function reset(): array
    {
        $defaults = self::DEFAULTS;

        try {
            if (!File::isDirectory(storage_path('app'))) {
                File::makeDirectory(storage_path('app'), 0755, true);
            }
            File::put($this->jsonPath, json_encode($defaults, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        } catch (Throwable $e) {
            Log::error('Error reseteando welcome_config.json: ' . $e->getMessage());
        }

        try {
            foreach ($defaults as $key => $value) {
                WelcomeConfig::updateOrCreate(
                    ['key' => $key],
                    ['value' => is_bool($value) ? ($value ? '1' : '0') : (string) $value]
                );
            }
        } catch (Throwable $e) {
            // Ignorar si la DB no está disponible
        }

        return $defaults;
    }
}

