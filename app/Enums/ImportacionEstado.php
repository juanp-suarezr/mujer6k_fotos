<?php

namespace App\Enums;

enum ImportacionEstado: string
{
    case Pendiente = 'pendiente';
    case Procesando = 'procesando';
    case Completada = 'completada';
    case Fallida = 'fallida';
}