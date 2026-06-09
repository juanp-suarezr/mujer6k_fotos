<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evidencias extends Model
{
    use HasFactory;

    protected $table = 'evidencias';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'descripcion',
        'estado',
        'created_at',
        'updated_at',

    ];

    public function imagenes()
    {
        return $this->hasMany(Imagenes::class, 'evidencia_id');
    }

}
