<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info_usuario extends Model
{
    use HasFactory;

    protected $table = 'info_usuario';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
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
        'dignatario',

    ];


}
