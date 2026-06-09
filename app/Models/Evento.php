<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;

    protected $table = 'eventos';
    protected $fillable = [
        'nombre',
        'descripcion',
        'fecha_evento',
        'estado',
    ];

    public function corredores()
    {
        return $this->hasMany(Corredor::class, 'evento_id');
    }

    public function fotos()
    {
        return $this->hasMany(Foto::class, 'evento_id');
    }
}
