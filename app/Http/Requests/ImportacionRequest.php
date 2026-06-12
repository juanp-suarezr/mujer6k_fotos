<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'google_connection_id' => 'nullable|exists:google_connections,id',
            'origen' => 'required|string|max:255',
            'carpeta_drive_id' => 'nullable|string|max:255',
            'estado' => ['nullable', 'string', 'max:20', Rule::in(['pendiente', 'procesando', 'completada', 'fallida'])],
            'total_archivos' => 'nullable|integer|min:0',
            'procesados' => 'nullable|integer|min:0',
            'errores' => 'nullable|integer|min:0',
            'total_folders' => 'nullable|integer|min:0',
            'procesados_folders' => 'nullable|integer|min:0',
            'fecha_inicio' => 'nullable|date',
            'fecha_fin' => 'nullable|date',
            'last_error' => 'nullable|string',
            'metadata' => 'nullable|array',
        ];
    }
}
