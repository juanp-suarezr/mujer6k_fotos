<?php

namespace App\Enums;

enum GoogleConnectionStatus: string
{
    case Conectado = 'connected';
    case Desconectado = 'disconnected';
    case Invalido = 'invalid';

    public function isActive(): bool
    {
        return $this === self::Conectado;
    }
}
