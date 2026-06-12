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
            $table->foreignId('evento_id')->constrained('eventos')->cascadeOnDelete();
            $table->foreignId('importacion_id')->nullable()->constrained('importaciones')->nullOnDelete();
            $table->foreignId('corredor_id')->nullable()->constrained('corredores')->nullOnDelete();
            $table->string('nombre_archivo');
            $table->string('google_drive_file_id')->comment('ID del archivo en Google Drive');
            $table->string('google_drive_parent_id')->nullable()->comment('ID de la carpeta padre en Google Drive');
            $table->string('mime_type', 100)->default('image/jpeg');
            $table->bigInteger('tamano_archivo')->default(0);
            $table->string('url_visualizacion')->nullable()->comment('URL para visualizar la foto');
            $table->string('url_descarga')->nullable()->comment('URL para descargar la foto');
            $table->string('estado', 20)->default('pendiente');
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('evento_id');
            $table->index('importacion_id');
            $table->index('corredor_id');
            $table->index('google_drive_file_id');
            $table->index('estado');
            $table->unique('google_drive_file_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fotos');
    }
};
