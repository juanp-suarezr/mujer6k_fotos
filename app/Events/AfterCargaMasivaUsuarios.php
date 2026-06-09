<?php

namespace App\Events;

use Maatwebsite\Excel\Events\AfterImport;

class AfterCargaMasivaUsuarios
{
    public $numRegistrosInsertados;
    public $numRegistrosActualizados;

    public function __construct($numRegistrosInsertados, $numRegistrosActualizados)
    {
        $this->numRegistrosInsertados = $numRegistrosInsertados;
        $this->numRegistrosActualizados = $numRegistrosActualizados;
    }
}
