<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombre' => ['required', 'string', 'max:255'],
            'descripcion' => ['nullable', 'string'],
            'fecha_evento' => ['nullable', 'date'],
            'estado' => ['required', 'string', 'max:20', 'in:activo,finalizado,cancelado'],
        ];
    }
}
