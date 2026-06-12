<?php

namespace App\Services;

use App\Contracts\StorageDrive;
use Google\Service\Drive as DriveService;
use Illuminate\Support\Collection;

class GoogleDriveService implements StorageDrive
{
    protected DriveService $drive;

    public function __construct(?GoogleClient $googleClient = null)
    {
        $this->drive = $googleClient ? $googleClient->getDrive() : (new GoogleClient())->getDrive();
    }

    public function listFiles(string $folderId, array $options = []): Collection
    {
        $defaults = [
            'q' => "'{$folderId}' in parents and trashed = false and mimeType contains 'image/'",
            'fields' => 'files(id,name,mimeType,size,modifiedTime,parents,webViewLink)',
            'pageSize' => 1000,
        ];

        $opt = array_merge($defaults, $options);

        $response = $this->drive->files->listFiles($opt);

        return collect($response->getFiles());
    }

    public function getFile(string $fileId, array $options = []): DriveService\Google_Service_Drive_File
    {
        $defaults = [
            'fields' => 'id,name,mimeType,size,modifiedTime,parents,webViewLink',
        ];

        $opt = array_merge($defaults, $options);

        return $this->drive->files->get($fileId, $opt);
    }

    public function listFolders(string $parentFolderId, array $options = []): Collection
    {
        $defaults = [
            'q' => "'{$parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
            'fields' => 'files(id,name)',
            'pageSize' => 1000,
        ];

        $opt = array_merge($defaults, $options);

        $response = $this->drive->files->listFiles($opt);

        return collect($response->getFiles());
    }

    public function getFolder(string $folderId): ?DriveService\Google_Service_Drive_File
    {
        try {
            return $this->drive->files->get($folderId, [
                'fields' => 'id,name,mimeType',
            ]);
        } catch (\Exception $e) {
            return null;
        }
    }

    public function getFolderByName(string $parentFolderId, string $folderName): ?DriveService\Google_Service_Drive_File
    {
        $response = $this->drive->files->listFiles([
            'q' => "'{$parentFolderId}' in parents and name = '{$folderName}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
            'fields' => 'files(id,name)',
            'pageSize' => 1,
        ]);

        $files = collect($response->getFiles());

        return $files->first() ? $this->getFile($files->first()->getId()) : null;
    }

    public function getFileDownloadUrl(string $fileId): ?string
    {
        try {
            $this->drive->permissions->create($fileId, new DriveService\Permission([
                'type' => 'anyone',
                'role' => 'reader',
            ]));

            return "https://drive.google.com/uc?id={$fileId}&export=download";
        } catch (\Exception $e) {
            return null;
        }
    }

    public function getDownloadUrl(string $fileId): ?string
    {
        return $this->getFileDownloadUrl($fileId);
    }

    public function getDrive(): DriveService
    {
        return $this->drive;
    }
}