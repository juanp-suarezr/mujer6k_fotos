# Trazabilidad Google Drive Sync

## Alcance aplicado

Se conservó la implementación existente de importaciones, fotos, logs y DriveBrowser. No se eliminaron los jobs antiguos `ImportarEventoDriveJob` ni `ProcesarDorsalDriveJob`.

## Cambios principales realizados

- OAuth 2.0 para cuenta Google dedicada:
  - Nueva tabla `google_connections`.
  - Tokens cifrados con Laravel encryption.
  - Estado de conexión, expiración, última validación y último error.
  - Renovación automática con refresh token.
  - Endpoints para conectar, callback, validar, consultar estado y desconectar.

- Servicio Google Drive:
  - `GoogleClient` refactorizado para usar conexión DB, fallback service account y fallback env.
  - `GoogleDriveService` refactorizado para paginación, metadata, carpetas, archivos y URLs de visualización.
  - Se eliminó la creación de permisos públicos para descarga.

- Sincronización por Queue:
  - `SyncService` centraliza progreso, logs y estados.
  - `SyncGoogleDriveJob` analiza carpeta principal y lanza jobs por dorsal.
  - `SyncDorsalJob` procesa archivos con paginación y evita duplicados por `google_drive_file_id`.
  - `ImportarEventoDriveJob` y `ProcesarDorsalDriveJob` refactorizados para usar la arquitectura centralizada.
  - Progreso disponible en `procesados / total_archivos` y carpetas procesadas.

- Base de datos:
  - Nuevas migraciones para `google_connections`.
  - Campos adicionales en `importaciones`: `google_connection_id`, `total_folders`, `procesados_folders`, `last_error`, `metadata`.
  - Campos adicionales en `fotos`: `dorsal`, `ruta_logica`, `fecha_modificacion`, `size`.
  - Índices adicionales para trazabilidad y búsquedas.

- Controladores y rutas:
  - `GoogleDriveConnectionController`.
  - `ImportacionController::progress`.
  - Rutas para conectar, callback, validar, estado, desconectar y progreso.

- Frontend existente:
  - `Importaciones/Edit.vue` deja de cargar todas las fotos para evitar problemas con eventos de 50.000 imágenes. Ahora recibe solo las primeras 100 y el total.
  - Polling de progreso agregado para sincronizaciones en tiempo real.

## Archivos creados

- `app/Enums/GoogleConnectionStatus.php`
- `app/Models/GoogleConnection.php`
- `app/Services/SyncService.php`
- `app/Jobs/SyncGoogleDriveJob.php`
- `app/Jobs/SyncDorsalJob.php`
- `app/Http/Controllers/GoogleDriveConnectionController.php`
- `database/migrations/2026_06_11_000001_create_google_connections_table.php`
- `database/migrations/2026_06_11_000002_add_google_sync_fields_to_importaciones_table.php`
- `database/migrations/2026_06_11_000003_add_google_drive_photo_index_fields_to_fotos_table.php`

## Archivos modificados

- `app/Services/GoogleClient.php` - Corregido parámetro fetchAccessTokenWithAuthCode, agregado manejo de estado invalid en refresh
- `app/Services/GoogleDriveService.php`
- `app/Contracts/StorageDrive.php`
- `app/Providers/GoogleDriveServiceProvider.php`
- `app/Http/Controllers/ImportacionController.php`
- `app/Http/Controllers/DriveBrowserController.php`
- `app/Models/Importacion.php`
- `app/Models/Foto.php`
- `app/Models/GoogleConnection.php` - Fixed disconnect() para usar enum
- `app/Http/Requests/ImportacionRequest.php`
- `config/services.php`
- `.env.example` - Agregadas variables faltantes
- `database/seeders/PermissionTableSeeder.php`
- `routes/web.php`
- `resources/js/Pages/Importaciones/Edit.vue` - Agregado polling de progreso
- `app/Jobs/ImportarEventoDriveJob.php` - Refactorizado para usar SyncService y SyncDorsalJob
- `app/Jobs/ProcesarDorsalDriveJob.php` - Refactorizado para usar SyncService

## Flujo completo implementado

1. Usuario conecta cuenta Google desde ruta protegida.
2. Laravel guarda email, access token cifrado, refresh token cifrado y expiración.
3. Usuario crea o selecciona importación con carpeta raíz de Google Drive.
4. `ImportacionController::sync` crea registro y despacha `SyncGoogleDriveJob`.
5. `SyncGoogleDriveJob` valida carpeta raíz, lista carpetas de dorsales con paginación y despacha `SyncDorsalJob` por dorsal.
6. Cada `SyncDorsalJob` lista archivos de imagen con paginación y registra índice con `upsert` usando `google_drive_file_id`.
7. La importación actualiza progreso, logs, carpetas procesadas y estado final.
8. Frontend puede consultar progreso por importación con polling automático.

## Decisiones técnicas

- Google Drive es fuente primaria; Laravel no descarga ni almacena imágenes.
- Se usa `webViewLink` para visualización, no URLs de descarga públicas.
- Los tokens se guardan cifrados en DB con cast `encrypted`.
- Se mantiene compatibilidad con implementación anterior y jobs existentes.
- Se evita cargar todas las fotos en la vista de edición.
- Se evita procesar grandes volúmenes en memoria usando paginación de Google Drive API.
- Se evita duplicación con índice único en `google_drive_file_id`.
- Los jobs usan backoff exponencial y reintentos configurados.
- Se agregó manejo de `ArrayObject` para `getParents()` de Google API.

## Próximos pasos para integración frontend

- Ejecutar migraciones:
  - `php artisan migrate`
- Sembrar permisos nuevos:
  - `php artisan db:seed --class=PermissionTableSeeder`
- Configurar variables de entorno:
  - `GOOGLE_DRIVE_CLIENT_ID`
  - `GOOGLE_DRIVE_CLIENT_SECRET`
  - `GOOGLE_DRIVE_REDIRECT_URI`
  - `GOOGLE_DRIVE_FOLDER_ID`
  - `GOOGLE_DRIVE_IMPERSONATE_EMAIL`
  - `GOOGLE_APPLICATION_CREDENTIALS`
- Registrar URI de redirección en Google Cloud Console:
  - `http://localhost:8000/google-drive/callback` o la URL real de producción.
- Ejecutar queue worker:
  - `php artisan queue:work`
- Probar conexión OAuth, renovación de token y sincronización con carpeta real.
- Validar vista de progreso con eventos de 5.000, 10.000 y 50.000 fotos.