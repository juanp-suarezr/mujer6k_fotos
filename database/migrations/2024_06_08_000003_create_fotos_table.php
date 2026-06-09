<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fotos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('evento_id')->constrained()->cascadeOnDelete();
            $table->foreignId('corredor_id')->constrained()->cascadeOnDelete();
            $table->string('nombre_archivo');
            $table->string('ruta_storage');
            $table->string('url_publica')->nullable();
            $table->string('estado', 20)->default('pendiente');
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('evento_id');
            $table->index('corredor_id');
            $table->index('estado');
            $table->unique(['corredor_id', 'nombre_archivo']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fotos');
    }
};
