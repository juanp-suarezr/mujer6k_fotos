<?php

namespace App\Http\Controllers;

use App\Enums\ImportacionEstado;
use App\Enums\LogTipo;
use App\Models\Evento;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use App\Services\SyncService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriveBrowserController extends Controller
{
    public function __construct(
        protected GoogleDriveService $driveService,
        protected SyncService $syncService
    ) {}

    public function index()
    {
        $folderId = config('services.google.drive.folder_id');

        if (!$folderId) {
            return Inertia::render('DriveBrowser/Index', [
                'folderId' => null,
                'folder' => null,
                'folders' => [],
                'files' => [],
                'error' => 'No se ha configurado el ID de la carpeta de Google Drive en las variables de entorno.',
            ]);
        }

        try {
            $eventosFolder = $this->driveService->getFolder($folderId);
            $folders = $this->driveService->listFolders($folderId);
            $files = $this->driveService->listFiles($folderId);

            return Inertia::render('DriveBrowser/Index', [
                'folderId' => $folderId,
                'folder' => $eventosFolder,
                'folders' => $folders,
                'files' => $files,
            ]);
        } catch (\RuntimeException $e) {
            return Inertia::render('DriveBrowser/Index', [
                'folderId' => $folderId,
                'folder' => null,
                'folders' => [],
                'files' => [],
                'error' => 'Error al conectar con Google Drive: ' . $e->getMessage(),
            ]);
        } catch (\Google\Service\Exception $e) {
            return Inertia::render('DriveBrowser/Index', [
                'folderId' => $folderId,
                'folder' => null,
                'folders' => [],
                'files' => [],
                'error' => 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage(),
            ]);
        }
    }

    public function show(string $folderId)
    {
        try {
            $folder = $this->driveService->getFolder($folderId);

            if (!$folder || $folder->getMimeType() !== 'application/vnd.google-apps.folder') {
                return Inertia::render('DriveBrowser/Show', [
                    'folderId' => $folderId,
                    'folders' => [],
                    'files' => [],
                    'eventos' => Evento::all(),
                    'error' => 'La carpeta especificada no es válida o no es accesible.',
                ]);
            }

            $folders = $this->driveService->listFolders($folderId);
            $files = $this->driveService->listFiles($folderId);

            return Inertia::render('DriveBrowser/Show', [
                'folderId' => $folderId,
                'folders' => $folders,
                'files' => $files,
                'eventos' => Evento::all(),
            ]);
        } catch (\RuntimeException $e) {
            return Inertia::render('DriveBrowser/Show', [
                'folderId' => $folderId,
                'folders' => [],
                'files' => [],
                'eventos' => Evento::all(),
                'error' => 'Error al conectar con Google Drive: ' . $e->getMessage(),
            ]);
        } catch (\Google\Service\Exception $e) {
            return Inertia::render('DriveBrowser/Show', [
                'folderId' => $folderId,
                'folders' => [],
                'files' => [],
                'eventos' => Evento::all(),
                'error' => 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage(),
            ]);
        }
    }

    public function import(Request $request, Evento $evento)
    {
        $folderId = $request->input('folder_id');

        if (!$folderId) {
            return back()->with('error', 'No se especificó la carpeta de Google Drive.');
        }

        try {
            $importacion = $this->syncService->createForEvento($evento, $folderId);
            $importacion->estado = ImportacionEstado::Pendiente->value;
            $importacion->save();

            $this->syncService->log($importacion, LogTipo::Info, 'DriveBrowserController::import iniciado', [
                'folder_id' => $folderId,
                'evento_id' => $evento->id,
            ]);

            $this->syncService->start($importacion);

            return redirect()->route('importaciones.edit', $importacion->id)
                ->with('success', 'Importación creada y sincronización iniciada');
        } catch (\RuntimeException $e) {
            return back()->with('error', $e->getMessage());
        } catch (\Google\Service\Exception $e) {
            $errorMsg = 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage();
            return back()->with('error', $errorMsg);
        }
    }
}
