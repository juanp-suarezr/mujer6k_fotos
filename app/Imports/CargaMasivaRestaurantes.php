<?php

namespace App\Imports;

use App\Models\Restaurantes;
use App\Models\Roles;
use App\Models\User;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use PhpOffice\PhpSpreadsheet\Style\Supervisor;


class CargaMasivaRestaurantes implements ToModel, WithHeadingRow
{

    private $numRegistrosInsertados = 0;
    private $numRegistrosActualizados = 0;
    /**
     * @param array $row*
     * @return \Illuminate\Database\Eloquent\Model|null
     * */

    public function model(array $row)
    {
        // Asegurarse de que la fila no esté vacía
        if (empty(array_filter($row))) {
            return null; // O puedes hacer algo diferente si lo deseas
        }


        $validarNombre = Restaurantes::where('razon_social', $row['razon_social'])->first();
        if (!$validarNombre && $row['area'] != '' && $row['concepto_sanitario'] != '') {
            $restaurantes = Restaurantes::create([
                'programa' => $row['programa'],
                'acta' => $row['acta'],
                'municipio' => $row['municipio'],
                'no_inscripcion' => $row['no_inscripcion'],
                'direccion' => $row['direccion'],
                'area' => $row['area'],
                'razon_social' => $row['razon_social'],
                'tipo_establecimiento' => $row['tipo_establecimiento'],
                'motivo_visita' => $row['motivo_visita'],
                'fecha_visita' => $row['fecha_visita'],
                'cumplimiento' => $row['cumplimiento'],
                'concepto_sanitario' => $row['concepto_sanitario'],
            ]);


            

            // Asocia la información del usuario
            $restaurantes->save();
            

            // Incrementar el contador de registros insertados correctamente
            $this->numRegistrosInsertados++;


            return $restaurantes;

        } else if ($row['area'] != '' && $row['concepto_sanitario'] != '') {
            
            $restaurantes = ([
                'programa' => $row['programa'],
                'acta' => $row['acta'],
                'municipio' => $row['municipio'],
                'no_inscripcion' => $row['no_inscripcion'],
                'direccion' => $row['direccion'],
                'area' => $row['area'],
                'razon_social' => $row['razon_social'],
                'tipo_establecimiento' => $row['tipo_establecimiento'],
                'motivo_visita' => $row['motivo_visita'],
                'fecha_visita' => $row['fecha_visita'],
                'cumplimiento' => $row['cumplimiento'],
                'concepto_sanitario' => $row['concepto_sanitario'],
            ]);

            $validarNombre->save($restaurantes);

            // Incrementar el contador de registros insertados correctamente
            $this->numRegistrosActualizados++;



        }
    }

    public function getNumRegistrosInsertados()
    {
        return $this->numRegistrosInsertados;
    }

    public function getNumRegistrosActualizados()
    {
        return $this->numRegistrosActualizados;
    }

}
