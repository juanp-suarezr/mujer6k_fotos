<?php

namespace App\Contracts;

interface StorageDrive
{
    public function listFiles(string $folderId, array $options = []): array;
    public function getFile(string $fileId, array $options = []): object;
    public function listFolders(string $parentFolderId, array $options = []): array;
    public function getFolder(string $folderId): ?object;
    public function getDownloadUrl(string $fileId): ?string;
    public function getDrive(): object;
}