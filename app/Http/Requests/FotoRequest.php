<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FotoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'evento_id' => ['required', 'integer', 'exists:eventos,id'],
            'importacion_id' => ['nullable', 'integer', 'exists:importaciones,id'],
            'corredor_id' => ['nullable', 'integer', 'exists:corredores,id'],
            'nombre_archivo' => ['required', 'string', 'max:255'],
            'google_drive_file_id' => [
                'required',
                'string',
                'max:255',
                Rule::unique('fotos', 'google_drive_file_id')->ignore($this->foto),
            ],
            'google_drive_parent_id' => ['nullable', 'string', 'max:255'],
            'mime_type' => ['required', 'string', 'max:100'],
            'tamano_archivo' => ['nullable', 'integer', 'min:0'],
            'url_visualizacion' => ['nullable', 'url', 'max:2048'],
            'url_descarga' => ['nullable', 'url', 'max:2048'],
            'estado' => ['required', 'string', 'max:20', 'in:pendiente,disponible,error'],
            'metadata' => ['nullable', 'array'],
        ];
    }
}