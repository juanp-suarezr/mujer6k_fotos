<?php

namespace App\Models;

use App\Enums\ImportacionEstado;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Importacion extends Model
{
    use HasFactory;

    protected $table = 'importaciones';
    protected $fillable = [
        'evento_id',
        'google_connection_id',
        'origen',
        'carpeta_drive_id',
        'estado',
        'total_archivos',
        'procesados',
        'errores',
        'total_folders',
        'procesados_folders',
        'fecha_inicio',
        'fecha_fin',
        'last_error',
        'metadata',
    ];

    protected $casts = [
        'estado' => ImportacionEstado::class,
        'fecha_inicio' => 'datetime',
        'fecha_fin' => 'datetime',
        'metadata' => 'array',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'evento_id');
    }

    public function googleConnection()
    {
        return $this->belongsTo(GoogleConnection::class, 'google_connection_id');
    }

    public function logs()
    {
        return $this->hasMany(LogImportacion::class, 'importacion_id');
    }

    public function fotos()
    {
        return $this->hasMany(Foto::class, 'importacion_id');
    }
}
