<?php

namespace App\Services;

use App\Contracts\StorageDrive;
use Google\Service\Drive as DriveService;
use Illuminate\Support\Collection;
use InvalidArgumentException;
use RuntimeException;

class GoogleDriveService implements StorageDrive
{
    public function __construct(protected GoogleClient $googleClient)
    {
    }

    public function listFiles(string $folderId, array $options = []): Collection
    {
        $files = [];

        $this->paginateFiles($folderId, $options, function ($file) use (&$files): void {
            $files[] = $file;
        });

        return collect($files);
    }

    public function paginateFiles(string $folderId, array $options, callable $callback): int
    {
        $folderId = $this->assertDriveId($folderId);

        $defaults = [
            'q' => "'{$folderId}' in parents and trashed = false and mimeType contains 'image/'",
            'fields' => 'nextPageToken,files(id,name,mimeType,size,modifiedTime,parents,webViewLink)',
            'pageSize' => 500,
        ];

        return $this->paginate($defaults, $options, $callback);
    }

    public function countFiles(string $folderId, array $options = []): int
    {
        return $this->paginateFiles($folderId, $options, fn ($file): int => 0);
    }

    public function getFile(string $fileId, array $options = []): object
    {
        $fileId = $this->assertDriveId($fileId);

        $defaults = [
            'fields' => 'id,name,mimeType,size,modifiedTime,parents,webViewLink',
        ];

        return $this->googleClient->getDrive()->files->get($fileId, array_merge($defaults, $options));
    }

    public function listFolders(string $parentFolderId, array $options = []): Collection
    {
        $folders = [];

        $this->paginateFolders($parentFolderId, $options, function ($folder) use (&$folders): void {
            $folders[] = $folder;
        });

        return collect($folders);
    }

    public function paginateFolders(string $parentFolderId, array $options, callable $callback): int
    {
        $parentFolderId = $this->assertDriveId($parentFolderId);

        $defaults = [
            'q' => "'{$parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
            'fields' => 'nextPageToken,files(id,name,mimeType)',
            'pageSize' => 200,
        ];

        return $this->paginate($defaults, $options, $callback);
    }

    public function getFolder(string $folderId): ?object
    {
        $folderId = $this->assertDriveId($folderId);

        try {
            return $this->googleClient->getDrive()->files->get($folderId, [
                'fields' => 'id,name,mimeType',
            ]);
        } catch (\Google\Service\Exception $e) {
            if (in_array($e->getCode(), [403, 404], true)) {
                return null;
            }

            throw $e;
        }
    }

    public function getFolderByName(string $parentFolderId, string $folderName): ?object
    {
        $folder = $this->listFolders($parentFolderId, [
            'q' => "'{$this->assertDriveId($parentFolderId)}' in parents and name = '{$this->escapeQueryValue($folderName)}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
            'pageSize' => 1,
        ])->first();

        return $folder ? $this->getFile($folder->getId()) : null;
    }

    public function generateViewUrl(string $fileId): string
    {
        return "https://drive.google.com/file/d/{$this->assertDriveId($fileId)}/view";
    }

    public function getDownloadUrl(string $fileId): ?string
    {
        return null;
    }

    public function getDrive(): DriveService
    {
        return $this->googleClient->getDrive();
    }

    protected function paginate(array $defaults, array $options, callable $callback): int
    {
        $options = array_merge($defaults, $options);

        if (isset($options['pageSize'])) {
            $options['pageSize'] = max(1, min(1000, (int) $options['pageSize']));
        }

        if (isset($options['fields']) && !str_contains((string) $options['fields'], 'nextPageToken')) {
            $options['fields'] = rtrim((string) $options['fields'], ',') . ',nextPageToken';
        }

        $count = 0;
        $pageToken = null;
        $iteration = 0;

        do {
            $iteration++;
            if ($pageToken) {
                $options['pageToken'] = $pageToken;
            }

            try {
                $response = $this->googleClient->getDrive()->files->listFiles($options);
                $items = $response->getFiles() ?? [];

                foreach ($items as $item) {
                    $callback($item);
                    $count++;
                }

                $pageToken = $response->getNextPageToken();
            } catch (\Google\Service\Exception $e) {
                throw new RuntimeException("Error en Google Drive API (paginate iteración {$iteration}): " . $e->getMessage(), $e->getCode(), $e);
            }

        } while ($pageToken);

        return $count;
    }

    protected function assertDriveId(string $folderId): string
    {
        if (!preg_match('/^[A-Za-z0-9_-]+$/', $folderId)) {
            throw new InvalidArgumentException('ID de Google Drive inválido.');
        }

        return $folderId;
    }

    protected function escapeQueryValue(string $value): string
    {
        return str_replace("'", "\\'", $value);
    }
}
