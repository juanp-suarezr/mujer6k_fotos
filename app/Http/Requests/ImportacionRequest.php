<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImportacionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'evento_id' => 'required|exists:eventos,id',
            'origen' => 'required|string|max:255',
            'carpeta_drive_id' => 'nullable|string|max:255',
            'estado' => 'required|string|max:20',
            'total_archivos' => 'nullable|integer|min:0',
            'procesados' => 'nullable|integer|min:0',
            'errores' => 'nullable|integer|min:0',
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date',
        ];
    }
}