<?php

namespace App\Http\Requests;

use App\Enums\EventoEstado;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'estado' => ['required', 'string', 'max:20', Rule::in(array_column(EventoEstado::cases(), 'value'))],
        ];
    }
}
