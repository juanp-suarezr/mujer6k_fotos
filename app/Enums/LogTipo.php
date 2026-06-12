<?php

namespace App\Enums;

enum LogTipo: string
{
    case Info = 'info';
    case Warning = 'warning';
    case Error = 'error';
}