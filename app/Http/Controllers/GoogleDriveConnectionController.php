<?php

namespace App\Http\Controllers;

use App\Models\GoogleConnection;
use App\Services\GoogleClient;
use App\Services\SyncService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use RuntimeException;

class GoogleDriveConnectionController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'role_or_permission:admin|google-drive-conectar'])->only([
            'connect',
            'disconnect',
            'validate',
            'status',
        ]);
    }

    public function connect(GoogleClient $client)
    {
        if (!config('services.google.drive.client_id') || !config('services.google.drive.client_secret')) {
            throw new RuntimeException('Faltan credenciales OAuth de Google Drive.');
        }

        $state = Str::random(32);
        session(['google_drive_oauth_state' => $state]);

        return redirect($client->authorizationUrl($state));
    }

    public function callback(Request $request, GoogleClient $client)
    {
        if ($request->has('error')) {
            return redirect()->route('importaciones.index')
                ->with('error', "Google Drive: {$request->get('error')}");
        }

        if (!$request->has('code') || !hash_equals(session('google_drive_oauth_state', ''), (string) $request->get('state'))) {
            abort(419, 'Estado OAuth inválido.');
        }

        $client->forConnection();
        $client->exchangeCodeForTokens($request->get('code'));

        $drive = $client->getDrive();
        $about = $drive->about->get(['fields' => 'user']);
        $email = $about->getUser()->getEmailAddress();

        if (!$email) {
            throw new RuntimeException('No fue posible obtener el email de la cuenta Google.');
        }

        $connection = GoogleConnection::firstOrCreate(['email_google' => $email]);
        $client->persistTokens($connection);
        $connection->last_validated_at = now();
        $connection->save();

        session()->forget('google_drive_oauth_state');

        return redirect()->route('importaciones.index')
            ->with('success', 'Cuenta Google Drive conectada correctamente.');
    }

    public function status()
    {
        $connection = GoogleConnection::latest('id')->first();

        return response()->json([
            'connected' => $connection?->isActive() ?? false,
            'email_google' => $connection?->email_google,
            'status' => $connection?->status?->value ?? $connection?->status,
            'expires_at' => $connection?->expires_at?->toIso8601String(),
            'last_validated_at' => $connection?->last_validated_at?->toIso8601String(),
        ]);
    }

    public function validate(GoogleClient $client)
    {
        $connection = GoogleConnection::latest('id')->first();

        if (!$connection) {
            return response()->json(['connected' => false, 'valid' => false], 404);
        }

        try {
            $client->forConnection($connection);
            $client->getDrive()->about->get(['fields' => 'user']);

            $connection->status = 'connected';
            $connection->last_validated_at = now();
            $connection->last_error = null;
            $connection->save();

            return response()->json([
                'connected' => true,
                'valid' => true,
                'email_google' => $connection->email_google,
            ]);
        } catch (\Throwable $exception) {
            $connection->status = 'invalid';
            $connection->last_error = $exception->getMessage();
            $connection->save();

            return response()->json([
                'connected' => false,
                'valid' => false,
                'error' => $exception->getMessage(),
            ], 422);
        }
    }

    public function disconnect()
    {
        $connection = GoogleConnection::latest('id')->first();

        if ($connection) {
            $connection->disconnect();
        }

        return response()->json([
            'connected' => false,
            'status' => 'disconnected',
        ]);
    }
}
