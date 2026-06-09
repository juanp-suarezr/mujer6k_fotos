<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscripciones extends Model
{
    use HasFactory;

    protected $connection = 'mysql_second';

    protected $table = 'inscripciones';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_oferta',
        'id_info_user',
        'identificacion',
        'comentario',
        'estadoProceso',
    ];

    public function oferta()
    {
        return $this->hasOne(Ofertas::class, 'id', 'id_oferta');
    }

    public function info_user()
    {
        return $this->hasOne(Info_usuario::class, 'id', 'id_info_user');
    }

}
