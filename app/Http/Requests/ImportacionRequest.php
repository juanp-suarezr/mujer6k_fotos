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

    protected function prepareForValidation(): void
    {
        if ($this->has('carpeta_drive_id') && is_string($this->carpeta_drive_id)) {
            $value = trim($this->carpeta_drive_id);
            if (preg_match('#/folders/([a-zA-Z0-9_-]+)#', $value, $matches)) {
                $this->merge(['carpeta_drive_id' => $matches[1]]);
            } elseif (preg_match('#[?&]id=([a-zA-Z0-9_-]+)#', $value, $matches)) {
                $this->merge(['carpeta_drive_id' => $matches[1]]);
            }
        }
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
            'modo_sync' => ['nullable', 'string', 'max:32', Rule::in(['incremental', 'fill', 'overwrite'])],
        ];
    }
}
