<?php

namespace App\Http\Controllers;

use App\Imports\CargaMasivaMaterias;
use App\Imports\CargaMasivaRestaurantes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\Permission\Models\Role;

class CargueMasivoController extends Controller
{

    //PLANTILLA EXCEL RESTAURANTES
    public function plantillaRes()
    {
        $filePath = 'excel/Restaurantes.xlsx'; // Ruta del archivo Excel almacenado

        return Storage::download($filePath); // Devuelve el archivo para descarga
    }

    //FUNCION CARGUE MASIVO RESTAURANTES
    public function cargueRestaurantes(Request $request)
    {
        if ($request->file('restaurantes')) {
            $file = $request->file('restaurantes');



            // Realizar la importación
            $import = new CargaMasivaRestaurantes();
            Excel::import($import, $file);

            // Obtener el número de registros insertados correctamente
            $numRegistrosInsertados = $import->getNumRegistrosInsertados();
            $numRegistrosActualizados = $import->getNumRegistrosActualizados();

            return Inertia::render('Restaurantes/Add', [
                'numRegistrosInsertados' => $numRegistrosInsertados,
                'numRegistrosActualizados' => $numRegistrosActualizados,

            ]);
        } else {
            return back();
        }
    }

}
