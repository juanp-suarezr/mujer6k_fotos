<?php

namespace App\Models;

use App\Enums\GoogleConnectionStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoogleConnection extends Model
{
    use HasFactory;

    protected $fillable = [
        'email_google',
        'access_token',
        'refresh_token',
        'expires_at',
        'status',
        'last_validated_at',
        'last_error',
        'metadata',
    ];

    protected $casts = [
        'access_token' => 'encrypted',
        'refresh_token' => 'encrypted',
        'expires_at' => 'datetime',
        'last_validated_at' => 'datetime',
        'metadata' => 'array',
        'status' => GoogleConnectionStatus::class,
    ];

    public function isActive(): bool
    {
        return $this->status === GoogleConnectionStatus::Conectado
            && $this->access_token
            && (!$this->expires_at || $this->expires_at->isFuture());
    }

    public function disconnect(): void
    {
        $this->update([
            'access_token' => null,
            'refresh_token' => null,
            'expires_at' => null,
            'status' => GoogleConnectionStatus::Desconectado,
            'last_error' => null,
        ]);
    }
}
