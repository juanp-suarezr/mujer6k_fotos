<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ofertas extends Model
{
    use HasFactory;

    protected $connection = 'mysql_second';
    
    protected $table = 'ofertas';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'id_puntos',
        'horario',
        'descripcion',
        'estado',
        'lugar',
        'banner',

    ];

    public function puntos_vive()
    {
        return $this->hasOne(Puntos::class, 'id', 'id_puntos');
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripciones::class, 'id_oferta', 'id');
    }
}
