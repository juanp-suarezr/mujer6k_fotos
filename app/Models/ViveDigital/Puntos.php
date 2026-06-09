<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Puntos extends Model
{
    use HasFactory;

    protected $connection = 'mysql_second';

    protected $table = 'puntos_vivedigital';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'direccion',
        'sector',
        'code',
    ];

    
    // Definir la relación inversa con Ofertas
    public function ofertas()
    {
        return $this->hasMany(Ofertas::class, 'id_puntos', 'id');
    }
}
