<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('fotos', function (Blueprint $table) {
            $table->string('dorsal')->nullable();
            $table->string('ruta_logica')->nullable();
            $table->dateTime('fecha_modificacion')->nullable();
            $table->unsignedBigInteger('size')->default(0);

            $table->index('dorsal');
            $table->index('ruta_logica');
            $table->index('google_drive_parent_id');
            $table->index('fecha_modificacion');
            $table->index(['evento_id', 'dorsal']);
        });
    }

    public function down(): void
    {
        Schema::table('fotos', function (Blueprint $table) {
            $table->dropIndex(['evento_id', 'dorsal']);
            $table->dropIndex(['fecha_modificacion']);
            $table->dropIndex(['google_drive_parent_id']);
            $table->dropIndex(['ruta_logica']);
            $table->dropIndex(['dorsal']);
            $table->dropColumn(['dorsal', 'ruta_logica', 'fecha_modificacion', 'size']);
        });
    }
};
