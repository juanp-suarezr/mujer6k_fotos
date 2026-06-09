<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    use HasFactory;

    protected $fillable = [
        'evento_id',
        'corredor_id',
        'nombre_archivo',
        'ruta_storage',
        'url_publica',
        'estado',
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'array',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'evento_id');
    }

    public function corredor()
    {
        return $this->belongsTo(Corredor::class, 'corredor_id');
    }
}
