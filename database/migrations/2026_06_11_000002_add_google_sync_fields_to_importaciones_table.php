<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('importaciones', function (Blueprint $table) {
            $table->foreignId('google_connection_id')->nullable()->constrained('google_connections')->nullOnDelete();
            $table->unsignedInteger('total_folders')->default(0);
            $table->unsignedInteger('procesados_folders')->default(0);
            $table->text('last_error')->nullable();
            $table->json('metadata')->nullable();

            $table->index('google_connection_id');
            $table->index('total_folders');
            $table->index('procesados_folders');
        });
    }

    public function down(): void
    {
        Schema::table('importaciones', function (Blueprint $table) {
            $table->dropIndex(['procesados_folders']);
            $table->dropIndex(['total_folders']);
            $table->dropIndex(['google_connection_id']);
            $table->dropForeign(['google_connection_id']);
            $table->dropColumn(['google_connection_id', 'total_folders', 'procesados_folders', 'last_error', 'metadata']);
        });
    }
};
