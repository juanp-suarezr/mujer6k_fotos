<?php

namespace App\Enums;

class ModoSync
{
    const INCREMENTAL = 'incremental';
    const FILL = 'fill';
    const OVERWRITE = 'overwrite';

    public static function all(): array
    {
        return [
            self::INCREMENTAL,
            self::FILL,
            self::OVERWRITE,
        ];
    }
}
