<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('importaciones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('evento_id')->constrained('eventos')->cascadeOnDelete();
            $table->string('origen')->comment('Tipo de origen: drive, carpeta, etc.');
            $table->string('carpeta_drive_id')->nullable()->comment('ID de la carpeta en Google Drive');
            $table->string('estado', 20)->default('pendiente');
            $table->integer('total_archivos')->default(0);
            $table->integer('procesados')->default(0);
            $table->integer('errores')->default(0);
            $table->timestamp('fecha_inicio')->nullable();
            $table->timestamp('fecha_fin')->nullable();
            $table->timestamps();

            $table->index('evento_id');
            $table->index('estado');
            $table->index('carpeta_drive_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('importaciones');
    }
};