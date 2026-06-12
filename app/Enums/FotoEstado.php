<?php

namespace App\Enums;

enum FotoEstado: string
{
    case Pendiente = 'pendiente';
    case Disponible = 'disponible';
    case Error = 'error';
}