<?php

namespace App\Enums;

enum EventoEstado: string
{
    case Activo = 'activo';
    case Finalizado = 'finalizado';
    case Cancelado = 'cancelado';
}