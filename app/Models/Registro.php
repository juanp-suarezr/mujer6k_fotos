<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    use HasFactory;

    protected $table = 'registro';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombres',
        'apellidos',
        'edad',
        'identificacion',
        'comuna',
        'sector',
        'telefono',
        'email',
        'genero',
        'condicion',
        'etnia',
        'nivel_estudio',
        'tipo_servicio',
        'dignatario',
        'id_evidencia'
    ];

    function evidencia()
    {
        return $this->belongsTo(Evidencias::class, 'id_evidencia');
    }

}
