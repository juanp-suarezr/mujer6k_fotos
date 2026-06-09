<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Eventos;
use App\Models\Evidencias;
use App\Models\Imagenes;
use App\Models\InformacionUsuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EvidenciasController extends Controller


{
    function __construct()
    {
        $this->middleware('permission:evidencias-listar|evidencias-crear|evidencias-editar|evidencias-eliminar', ['only' => ['index', 'store']]);
        $this->middleware('permission:evidencias-crear', ['only' => ['create', 'store']]);
        $this->middleware('permission:evidencias-editar', ['only' => ['edit', 'update']]);
        $this->middleware('permission:evidencias-eliminar', ['only' => ['destroy']]);
    }

    function index()
    {
        return Inertia::render('Evidencias/Index', [
            'evidencias' => Evidencias::query()
                ->when(RequestFacade::input('search'), function ($query, $search) {
                    $query->where('nombre', 'like', '%' . $search . '%');
                })
                ->with(['imagenes'])
                ->paginate(5)
                ->withQueryString(),
            'filters' => RequestFacade::only(['search'])
        ]);
    }

    function create()
    {
        return Inertia::render('Evidencias/Add', []);
    }

    function store(Request $request)
    {

        // Implementar validación de formulario
        $request->validate([
            // 'empresa_id' => 'required|exists:empresas,id', // Validar existencia de empresa
            'nombre' => 'required|string|max:100',

        ]);

        $evidencia = Evidencias::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'estado' => 'Activa',
        ]);

        if ($request->hasFile('imagenes')) {
            foreach ($request->file('imagenes') as $imagen) {

                $folder = 'evidencias';
                $extension = $imagen->getClientOriginalExtension();
                $fileName = time() . '_' . uniqid() . '_evidencias.' . $extension;
                $filePath = $imagen->storeAs('uploads/' . $folder, $fileName, 'public');

                $evidencia->imagenes()->create([
                    'link' => $fileName,
                ]);
            }
        }


        return to_route('evidencias.index');
    }

    function edit(Request $request, $evidencias)
    {
        $evidencias = Evidencias::with('imagenes')->findOrFail($evidencias);
        return Inertia::render('Evidencias/Edit', [
            'evidencia' => $evidencias,
        ]);
    }

    function update(Request $request)
    {


        // Implementar validación de formulario

        $request->validate([
            'nombre' => 'required|string|max:100',
            'descripcion' => 'required|string|max:300',
            'estado' => 'required',
            // 'imagenes.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Opcional: valida cada imagen
        ]);

        $evidencias = Evidencias::findOrFail($request->id);

        // Actualizar campos básicos
        $evidencias->nombre = $request->nombre;
        $evidencias->descripcion = $request->descripcion;
        $evidencias->estado = $request->estado;

        // Si hay imágenes nuevas, las agregamos (no borramos las anteriores)
        if ($request->hasFile('imagenes')) {
            foreach ($request->file('imagenes') as $imagen) {
                $folder = 'evidencias';
                $extension = $imagen->getClientOriginalExtension();
                $fileName = time() . '_' . uniqid() . '_evidencias.' . $extension;
                $filePath = $imagen->storeAs('uploads/' . $folder, $fileName, 'public');

                $evidencias->imagenes()->create([
                    'link' => $fileName,
                ]);
            }
        }

        $evidencias->save();

        return Redirect::route('evidencias.edit', $evidencias->id)
            ->with('success', 'Evidencia actualizada correctamente');
    }

    function destroy(Request $request, $id)
    {
        $evidencias = Evidencias::findOrFail($id);

        // Eliminar las imágenes asociadas a la evidencia
        foreach ($evidencias->imagenes as $imagen) {
            Storage::delete('uploads/evidencias/' . $imagen->link);
            $imagen->delete();
        }

        // Eliminar la evidencia
        $evidencias->delete();

        return redirect()->route('evidencias.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }


}
