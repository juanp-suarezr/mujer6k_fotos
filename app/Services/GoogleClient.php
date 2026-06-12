<?php

namespace App\Services;

use App\Enums\GoogleConnectionStatus;
use App\Models\GoogleConnection;
use Google\Client;
use Google\Service\Drive;
use RuntimeException;

class GoogleClient
{
    protected ?Client $client = null;

    protected ?Drive $drive = null;

    public function __construct()
    {
        $this->client = new Client();
        $this->configureBaseOAuth();
    }

    public function forConnection(?GoogleConnection $connection = null): self
    {
        $this->client = new Client();
        $this->drive = null;
        $this->configureBaseOAuth();

        if ($connection) {
            $this->applyConnection($connection);
        } elseif ($this->hasServiceAccountCredentials()) {
            $this->applyServiceAccount();
        } elseif ($this->hasEnvRefreshToken()) {
            $this->applyEnvRefreshToken();
        }

        $this->drive = new Drive($this->client);

        return $this;
    }

    public function authorizationUrl(string $state): string
    {
        $this->client->setPrompt('consent');
        $this->client->setState($state);

        return $this->client->createAuthUrl();
    }

    public function exchangeCodeForTokens(string $code): array
    {
        $token = $this->client->fetchAccessTokenWithAuthCode($code);

        if (isset($token['error'])) {
            throw new RuntimeException($token['error']);
        }

        $this->client->setAccessToken($token);

        return $token;
    }

    public function persistTokens(GoogleConnection $connection): void
    {
        $token = $this->client->getAccessToken();
        $decoded = $this->decodeToken($token);

        $connection->access_token = is_array($token) ? json_encode($token) : $token;

        if (isset($decoded['refresh_token'])) {
            $connection->refresh_token = $decoded['refresh_token'];
        }

        if (isset($decoded['expires_in'])) {
            $connection->expires_at = now()->addSeconds((int) $decoded['expires_in']);
        }

        $connection->status = GoogleConnectionStatus::Conectado->value;
        $connection->last_error = null;
        $connection->save();
    }

    public function getDrive(): Drive
    {
        if (!$this->drive) {
            $this->forConnection();
        }

        return $this->drive;
    }

    public function getClient(): Client
    {
        if (!$this->client) {
            $this->client = new Client();
            $this->configureBaseOAuth();
        }

        return $this->client;
    }

    protected function configureBaseOAuth(): void
    {
        $clientId = config('services.google.drive.client_id');
        $clientSecret = config('services.google.drive.client_secret');
        $redirectUri = config('services.google.drive.redirect_uri') ?: url('/google-drive/callback');

        if ($clientId && $clientSecret) {
            $this->client->setClientId($clientId);
            $this->client->setClientSecret($clientSecret);
            $this->client->setRedirectUri($redirectUri);
            $this->client->setScopes([Drive::DRIVE_READONLY]);
            $this->client->setAccessType('offline');
            $this->client->setIncludeGrantedScopes(true);
        }
    }

    protected function applyConnection(GoogleConnection $connection): void
    {
        if ($connection->access_token) {
            $this->client->setAccessToken($connection->access_token);
        }

        if (!$this->client->isAccessTokenExpired()) {
            return;
        }

        if (!$connection->refresh_token) {
            $connection->status = GoogleConnectionStatus::Invalido->value;
            $connection->last_error = 'La cuenta Google no tiene refresh token.';
            $connection->save();
            throw new RuntimeException('La cuenta Google no tiene refresh token.');
        }

        $token = $this->client->fetchAccessTokenWithRefreshToken($connection->refresh_token);

        if (isset($token['error'])) {
            $connection->status = GoogleConnectionStatus::Invalido->value;
            $connection->last_error = $token['error'];
            $connection->save();

            throw new RuntimeException($token['error']);
        }

        $decoded = $this->decodeToken($token);

        $connection->access_token = json_encode($token);

        if (isset($decoded['expires_in'])) {
            $connection->expires_at = now()->addSeconds((int) $decoded['expires_in']);
        }

        $connection->status = GoogleConnectionStatus::Conectado->value;
        $connection->last_error = null;
        $connection->save();
    }

    protected function applyServiceAccount(): void
    {
        $credentialsPath = config('services.google.drive.credentials_path');

        if (!$credentialsPath || !file_exists($credentialsPath)) {
            return;
        }

        $this->client->setAuthConfig($credentialsPath);
        $this->client->setScopes([Drive::DRIVE_READONLY]);

        $subject = config('services.google.drive.impersonate_email');
        if ($subject) {
            $this->client->setSubject($subject);
        }
    }

    protected function applyEnvRefreshToken(): void
    {
        $token = $this->client->fetchAccessTokenWithRefreshToken(config('services.google.drive.refresh_token'));

        if (isset($token['error'])) {
            throw new RuntimeException($token['error']);
        }

        $this->client->setAccessToken($token);
    }

    protected function hasServiceAccountCredentials(): bool
    {
        $credentialsPath = config('services.google.drive.credentials_path');

        return $credentialsPath && file_exists($credentialsPath);
    }

    protected function hasEnvRefreshToken(): bool
    {
        return (bool) config('services.google.drive.refresh_token');
    }

    protected function decodeToken(string|array $token): array
    {
        if (is_array($token)) {
            return $token;
        }

        $decoded = json_decode($token, true);

        return is_array($decoded) ? $decoded : [];
    }
}
