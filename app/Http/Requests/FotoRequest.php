<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'corredor_id' => ['required', 'integer', 'exists:corredores,id'],
            'nombre_archivo' => ['required', 'string', 'max:255'],
            'ruta_storage' => ['required', 'string', 'max:500'],
            'url_publica' => ['nullable', 'url', 'max:2048'],
            'estado' => ['required', 'string', 'max:20', 'in:pendiente,procesada,rechazada'],
            'metadata' => ['nullable', 'array'],
        ];
    }
}
