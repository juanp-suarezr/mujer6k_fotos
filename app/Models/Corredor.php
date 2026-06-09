<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Corredor extends Model
{
    use HasFactory;

    protected $fillable = [
        'evento_id',
        'dorsal',
        'nombre_completo',
        'documento',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class, 'evento_id');
    }

    public function fotos()
    {
        return $this->hasMany(Foto::class, 'corredor_id');
    }
}
