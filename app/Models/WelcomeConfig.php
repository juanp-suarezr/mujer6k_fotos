<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WelcomeConfig extends Model
{
    use HasFactory;

    protected $table = 'welcome_configs';

    protected $fillable = [
        'key',
        'value',
    ];
}

