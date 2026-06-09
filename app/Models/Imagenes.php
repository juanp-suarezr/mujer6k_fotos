<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagenes extends Model
{
    use HasFactory;

    protected $table = 'imagenes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'evidencia_id',
        'link',
        'created_at',
        'updated_at',

    ];

    public function evidencia()
    {
        return $this->belongsTo(Evidencias::class, 'evidencia_id');
    }


}
