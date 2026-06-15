<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('importaciones', function (Blueprint $table) {
            $table->string('modo_sync', 32)->default('incremental');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('importaciones', function (Blueprint $table) {
            $table->dropColumn('modo_sync');
        });
    }
};
