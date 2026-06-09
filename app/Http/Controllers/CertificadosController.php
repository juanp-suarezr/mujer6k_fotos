<?php

// app/Http/Controllers/CertificadosController.php
namespace App\Http\Controllers;

use App\Models\Caninos;
use App\Models\InformacionUsuario;
use App\Models\PageView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as RequestFacade;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use TCPDF;

use App\Models\Certificados;
use Illuminate\Support\Facades\Log;

class CertificadosController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
        // $this->middleware('permission:certificados-listar|certificados-crear|certificados-editar|certificados-eliminar', ['only' => ['index', 'store']]);
        // $this->middleware('permission:certificados-crear', ['only' => ['create', 'store']]);
        // $this->middleware('permission:certificados-editar', ['only' => ['edit', 'update']]);
        // $this->middleware('permission:certificados-eliminar', ['only' => ['destroy']]);
    }
    public function index()
    {
        $user = Auth::user();

        $caninos = Caninos::query()
            ->whereHas('user.informacionUsuario', function ($query) use ($user) {
                if ($user->roles->pluck('name')->toArray() == ['Administrador']) {
                    // Filtros opcionales para el administrador
                    $identificacion = RequestFacade::input('identificacion');
                    $nombre = RequestFacade::input('nombre');

                    if ($identificacion) {
                        $query->where('numero_documento', $identificacion);
                    }

                    if ($nombre) {
                        $query->where('nombre_completo', 'like', '%' . $nombre . '%');
                    }
                } else {
                    // Filtro obligatorio para usuarios no administradores
                    $identificacion = InformacionUsuario::where('user_id', $user->id)->pluck('numero_documento')->first();
                    $query->where('numero_documento', $identificacion);
                }
            })
            ->where('estado', 1)
            ->with([
                'user.informacionUsuario:nombre_completo,tipo_documento,numero_documento,direccion,celular,comuna,zona,user_id',
                'certificado' // Solo trae los campos necesarios de informacionUsuario
            ])
            ->paginate(5)
            ->withQueryString();

        return Inertia::render(
            'Certificados/Index',
            [
                'caninos' => $caninos,
                'filters' => RequestFacade::only(['identificacion', 'nombre']),
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'pdf' => 'required|file|mimes:pdf|max:2048',
            'id' => 'required|exists:caninos,id',
        ]);



        $folder = 'certificados';

        $fileName = time() . '_certificado_' . $request->pdf->getClientOriginalName();
        $path = $request->file('pdf')->storeAs('uploads/' . $folder, $fileName, 'public');

        Certificados::create([
            'canino_id' => $request->id,
            'fecha_emision' => now(),
            'fecha_vencimiento' => now()->addYear(),
            'estado' => 1,
            'url_certificado_pdf' => $path,
        ]);

        return back()->with('message', 'Certificado guardado con éxito.');
    }
}
