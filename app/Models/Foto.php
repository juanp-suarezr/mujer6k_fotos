<?php

namespace App\Models;

use App\Enums\FotoEstado;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    use HasFactory;

    protected $fillable = [
        'evento_id',
        'importacion_id',
        'corredor_id',
        'dorsal',
        'nombre_archivo',
        'google_drive_file_id',
        'google_drive_parent_id',
        'mime_type',
        'tamano_archivo',
        'size',
        'ruta_logica',
        'url_visualizacion',
        'url_descarga',
        'fecha_modificacion',
        'estado',
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'array',
        'estado' => FotoEstado::class,
        'tamano_archivo' => 'integer',
        'size' => 'integer',
        'fecha_modificacion' => 'datetime',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'evento_id');
    }

    public function corredor()
    {
        return $this->belongsTo(Corredor::class, 'corredor_id');
    }

    public function importacion()
    {
        return $this->belongsTo(Importacion::class, 'importacion_id');
    }
}
