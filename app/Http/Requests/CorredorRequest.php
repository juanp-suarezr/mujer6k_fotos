<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CorredorRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'evento_id' => ['required', 'integer', 'exists:eventos,id'],
            'dorsal' => ['required', 'integer', 'min:1'],
            'nombre_completo' => ['nullable', 'string', 'max:255'],
            'documento' => ['nullable', 'string', 'max:50'],
        ];
    }
}
