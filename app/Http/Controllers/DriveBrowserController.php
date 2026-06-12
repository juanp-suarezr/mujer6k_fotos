<?php

namespace App\Http\Controllers;

use App\Enums\ImportacionEstado;
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
        $eventosFolder = $this->driveService->getFolder($folderId);
        $folders = $this->driveService->listFolders($folderId);
        $files = $this->driveService->listFiles($folderId);

        return Inertia::render('DriveBrowser/Index', [
            'folderId' => $folderId,
            'folder' => $eventosFolder,
            'folders' => $folders,
            'files' => $files,
        ]);
    }

    public function show(string $folderId)
    {
        $folders = $this->driveService->listFolders($folderId);
        $files = $this->driveService->listFiles($folderId);

        return Inertia::render('DriveBrowser/Show', [
            'folderId' => $folderId,
            'folders' => $folders,
            'files' => $files,
            'eventos' => Evento::all(),
        ]);
    }

    public function import(Request $request, Evento $evento)
    {
        $importacion = $this->syncService->createForEvento($evento, $request->input('folder_id'));

        $importacion->estado = ImportacionEstado::Pendiente->value;
        $importacion->save();

        $this->syncService->start($importacion);

        return redirect()->route('importaciones.edit', $importacion->id);
    }
}
