<?php

namespace App\Services;

use Google\Client;
use Google\Service\Drive;

class GoogleClient
{
    protected Client $client;
    protected Drive $drive;

    public function __construct()
    {
        $this->client = new Client();
        $this->configureServiceAccount();
        $this->configureOAuth();
        $this->drive = new Drive($this->client);
    }

    protected function configureServiceAccount(): void
    {
        $credentialsPath = config('services.google.drive.credentials_path');
        if (file_exists($credentialsPath)) {
            $this->client->setAuthConfig($credentialsPath);
            $this->client->setScopes(Drive::DRIVE_READONLY);
            $this->client->setAccessType('offline');
            $this->client->setSubject(env('GOOGLE_DRIVE_IMPERSONATE_EMAIL'));
        }
    }

    protected function configureOAuth(): void
    {
        $clientId = config('services.google.drive.client_id');
        $clientSecret = config('services.google.drive.client_secret');
        $refreshToken = config('services.google.drive.refresh_token');

        if ($clientId && $clientSecret && $refreshToken) {
            $this->client->setClientId($clientId);
            $this->client->setClientSecret($clientSecret);
            $this->client->setAccessType('offline');
            $this->client->setScopes(Drive::DRIVE_READONLY);
            $this->client->fetchAccessTokenWithRefreshToken($refreshToken);
        }
    }

    public function getDrive(): Drive
    {
        return $this->drive;
    }

    public function getClient(): Client
    {
        return $this->client;
    }
}