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
        'origen',
        'carpeta_drive_id',
        'estado',
        'total_archivos',
        'procesados',
        'errores',
        'fecha_inicio',
        'fecha_fin',
    ];

    protected $casts = [
        'estado' => ImportacionEstado::class,
        'fecha_inicio' => 'datetime',
        'fecha_fin' => 'datetime',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'evento_id');
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