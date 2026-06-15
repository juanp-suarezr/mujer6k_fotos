<?php

namespace App\Http\Controllers;

use App\Enums\ImportacionEstado;
use App\Enums\LogTipo;
use App\Http\Requests\ImportacionRequest;
use App\Models\Evento;
use App\Models\GoogleConnection;
use App\Models\Importacion;
use App\Services\GoogleDriveService;
use App\Services\SyncService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ImportacionController extends Controller
{
    public function __construct(protected SyncService $syncService)
    {
        $this->middleware('permission:importaciones-listar|importaciones-crear|importaciones-editar|importaciones-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:importaciones-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:importaciones-editar', ['only' => ['edit', 'update', 'sync', 'progress']]);
        $this->middleware('permission:importaciones-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        return Inertia::render('Importaciones/Index', [
            'importaciones' => Importacion::with('evento')->paginate(10)->withQueryString(),
        ]);
    }

    function create()
    {
        return Inertia::render('Importaciones/Add', [
            'eventos' => Evento::all(),
            'googleConnections' => GoogleConnection::all(),
        ]);
    }

    function store(ImportacionRequest $request)
    {
        $data = $request->validated();
        $data['estado'] = $data['estado'] ?? ImportacionEstado::Pendiente->value;

        if ($data['origen'] === 'drive' && !empty($data['carpeta_drive_id'])) {
            try {
                $folder = app(GoogleDriveService::class)->getFolder($data['carpeta_drive_id']);

                if (!$folder || $folder->getMimeType() !== 'application/vnd.google-apps.folder') {
                    return back()->withInput()->with('error', 'La carpeta de Google Drive especificada no es válida. Verifica que el ID corresponda a una carpeta accesible.');
                }
            } catch (\RuntimeException $e) {
                return back()->withInput()->with('error', 'Error al conectar con Google Drive: ' . $e->getMessage());
            } catch (\Google\Service\Exception $e) {
                return back()->withInput()->with('error', 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage());
            }
        }

        $importacion = Importacion::create($data);

        return redirect()->route('importaciones.edit', $importacion->id)
            ->with('success', 'Importación creada correctamente');
    }

    function edit(Request $request, $importacion_id)
    {
        $importacion = Importacion::findOrFail($importacion_id);
        return Inertia::render('Importaciones/Edit', [
            'importacion' => $importacion,
            'eventos' => Evento::all(),
            'googleConnections' => GoogleConnection::all(),
            'progress' => $this->syncService->progress($importacion),
            'fotos' => $importacion->fotos()->orderByDesc('id')->limit(100)->get(),
            'fotos_count' => $importacion->fotos()->count(),
        ]);
    }

    function update(ImportacionRequest $request, Importacion $importacion)
    {
        $data = $request->validated();

        if ($data['origen'] === 'drive' && !empty($data['carpeta_drive_id']) && $data['carpeta_drive_id'] !== $importacion->carpeta_drive_id) {
            try {
                $folder = app(GoogleDriveService::class)->getFolder($data['carpeta_drive_id']);

                if (!$folder || $folder->getMimeType() !== 'application/vnd.google-apps.folder') {
                    return back()->withInput()->with('error', 'La carpeta de Google Drive especificada no es válida. Verifica que el ID corresponda a una carpeta accesible.');
                }
            } catch (\RuntimeException $e) {
                return back()->withInput()->with('error', 'Error al conectar con Google Drive: ' . $e->getMessage());
            } catch (\Google\Service\Exception $e) {
                return back()->withInput()->with('error', 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage());
            }
        }

        $importacion->update($data);

        return Inertia::render('Importaciones/Edit', [
            'importacion' => $importacion->load(['evento', 'logs', 'googleConnection']),
            'eventos' => Evento::all(),
            'googleConnections' => GoogleConnection::all(),
            'progress' => $this->syncService->progress($importacion),
            'fotos' => $importacion->fotos()->orderByDesc('id')->limit(100)->get(),
            'fotos_count' => $importacion->fotos()->count(),
        ])->with('success', 'Importación actualizada correctamente');
    }

    function sync(Importacion $importacion)
    {
        try {
            $this->syncService->start($importacion);

            return redirect()->route('importaciones.index')
                ->with('success', 'Sincronización iniciada');
        } catch (\RuntimeException $e) {
            return redirect()->route('importaciones.index')
                ->with('error', $e->getMessage());
        } catch (\Google\Service\Exception $e) {
            $errorMsg = 'Error de Google Drive (HTTP ' . $e->getCode() . '): ' . $e->getMessage();
            return redirect()->route('importaciones.index')
                ->with('error', $errorMsg);
        }
    }

    function progress(Importacion $importacion)
    {
        return response()->json($this->syncService->progress($importacion));
    }

    function destroy(Importacion $importacion)
    {
        $importacion->delete();

        return redirect()->route('importaciones.index')
            ->with('success', 'Importación eliminada exitosamente');
    }
}
