<?php

namespace App\Http\Controllers;

use App\Enums\ImportacionEstado;
use App\Jobs\ImportarEventoDriveJob;
use App\Models\Evento;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriveBrowserController extends Controller
{
    protected GoogleDriveService $driveService;

    public function __construct()
    {
        $this->driveService = new GoogleDriveService();
    }

    public function index()
    {
        $folderId = config('services.google.drive.folder_id');
        $eventosFolder = $this->driveService->getFolder($folderId);

        return Inertia::render('DriveBrowser/Index', [
            'folderId' => $folderId,
            'folder' => $eventosFolder,
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
        ]);
    }

    public function import(Request $request, Evento $evento)
    {
        $importacion = Importacion::create([
            'evento_id' => $evento->id,
            'origen' => 'drive',
            'carpeta_drive_id' => $request->folder_id,
            'estado' => ImportacionEstado::Pendiente->value,
        ]);

        ImportarEventoDriveJob::dispatch($evento->id, $request->folder_id, $importacion->id);

        return redirect()->route('importaciones.edit', $importacion->id);
    }
}