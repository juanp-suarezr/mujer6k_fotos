# Google Drive Integration - Setup Guide

## 1. Service Account Setup

1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Create a new project or select existing one
3. Enable Google Drive API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"

4. Create Service Account:
   - Go to "IAM & Admin" > "Service Accounts"
   - Click "Create Service Account"
   - Assign role "Service Account User"

5. Generate Service Account Key:
   - Click on the service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select JSON format
   - Download and save to: `storage/app/google-drive-service-account.json`

## 2. Share Google Drive Folder

1. In Google Drive, share the parent folder with the Service Account email
2. The email format is: `your-service-account@your-project.iam.gserviceaccount.com`
3. Give "Viewer" or "Editor" access

## 3. Environment Variables

Add to your `.env`:

```env
GOOGLE_DRIVE_CLIENT_ID=your-oauth-client-id
GOOGLE_DRIVE_CLIENT_SECRET=your-oauth-client-secret
GOOGLE_DRIVE_REFRESH_TOKEN=your-refresh-token
GOOGLE_DRIVE_FOLDER_ID=1ABCdEfGhIjKlMnOpQrStUvWxYz1234567
GOOGLE_APPLICATION_CREDENTIALS=storage/app/google-drive-service-account.json
```

## 4. Configuration

The configuration is in `config/services.php` under `google.drive`.

## 5. Usage

### List folders in a parent folder:
```php
$service = app(GoogleDriveService::class);
$folders = $service->listFolders($folderId);
```

### List files in a folder:
```php
$files = $service->listFiles($folderId);
```

### Get file details:
```php
$file = $service->getFile($fileId);
```

### Get folder by name:
```php
$folder = $service->getFolderByName($parentFolderId, '502');
```