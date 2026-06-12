<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('fotos', function (Blueprint $table) {
            $table->foreignId('importacion_id')->nullable()->constrained('importaciones')->nullOnDelete();
        });

        Schema::table('fotos', function (Blueprint $table) {
            $table->index('importacion_id');
        });
    }

    public function down(): void
    {
        Schema::table('fotos', function (Blueprint $table) {
            $table->dropIndex(['importacion_id']);
            $table->dropForeign(['importacion_id']);
            $table->dropColumn('importacion_id');
        });
    }
};