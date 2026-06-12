<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogImportacion extends Model
{
    use HasFactory;

    protected $table = 'logs_importacion';
    protected $fillable = [
        'importacion_id',
        'tipo',
        'mensaje',
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'array',
    ];

    public function importacion()
    {
        return $this->belongsTo(Importacion::class, 'importacion_id');
    }
}