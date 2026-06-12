<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('google_connections', function (Blueprint $table) {
            $table->id();
            $table->string('email_google')->nullable()->unique();
            $table->longText('access_token')->nullable();
            $table->longText('refresh_token')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->string('status', 30)->default('connected');
            $table->timestamp('last_validated_at')->nullable();
            $table->text('last_error')->nullable();
            $table->json('metadata')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('expires_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('google_connections');
    }
};
