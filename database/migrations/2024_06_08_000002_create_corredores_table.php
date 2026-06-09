<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('corredores');
        Schema::create('corredores', function (Blueprint $table) {
            $table->id();
            $table->foreignId('evento_id')->constrained('eventos')->cascadeOnDelete();
            $table->integer('dorsal');
            $table->string('nombre_completo')->nullable();
            $table->string('documento')->nullable();
            $table->timestamps();

            $table->index('evento_id');
            $table->index('dorsal');
            $table->unique(['evento_id', 'dorsal']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('corredores');
    }
};
