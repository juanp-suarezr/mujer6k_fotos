# Google Drive Sync - Guía de Funcionamiento

## Arquitectura

```
Fotógrafo
    ↓
Cuenta Google Drive dedicada (fotos.eventos@gmail.com)
    ↓
OAuth 2.0 (access_token + refresh_token cifrados en DB)
    ↓
Laravel Queue Workers
    ├── SyncGoogleDriveJob (analiza carpeta raíz)
    └── SyncDorsalJob (procesa cada dorsal X)
    ↓
Base de datos (índice fotográfico)
    ├── google_connections (tokens OAuth)
    ├── importaciones (estado de sync)
    └── fotos (metadata de cada imagen)
```

## Componentes

### Models

**GoogleConnection** (`google_connections`)
- Almacena tokens OAuth cifrados
- Estado: `connected`, `disconnected`, `invalid`
- Auto-renovación con refresh_token

**Importacion** (`importaciones`)
- Vincula evento con carpeta de Drive
- Estado: `pendiente`, `procesando`, `completada`, `fallida`
- Tracking: `procesados/total_archivos`, `procesados_folders/total_folders`

**Foto** (`fotos`)
- Índice con `google_drive_file_id` (único)
- Campos: dorsal, ruta_logica, url_visualizacion, fecha_modificacion

### Services

**GoogleClient**
- Maneja autenticación OAuth 2.0
- Fallback: conexión DB → service account → env refresh_token
- Renovación automática de tokens expirados

**GoogleDriveService**
- Paginación de archivos y carpetas
- Filtrado por mimeType image/*
- Genera URLs de visualización (webViewLink)

**SyncService**
- Orquesta sincronización
- Logging centralizado
- Control de progreso

### Jobs

**SyncGoogleDriveJob** (raíz)
- Valida carpeta raíz existe
- Lista carpetas (dorsales) con paginación
- Despacha SyncDorsalJob por cada dorsal válido

**SyncDorsalJob**
- Lista archivos de imagen con paginación
- Upsert en tabla fotos (evita duplicados)
- Actualiza contadores de progreso

**ImportarEventoDriveJob** (legacy, refactorizado)
- Compatibilidad retro
- Usa misma arquitectura que SyncGoogleDriveJob

**ProcesarDorsalDriveJob** (legacy, refactorizado)
- Compatibilidad retro
- Usa misma arquitectura que SyncDorsalJob

## Paso a Paso - Configuración Inicial

### 1. Variables de Entorno

```bash
# .env
GOOGLE_DRIVE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_DRIVE_CLIENT_SECRET=GOCSPX-xxx
GOOGLE_DRIVE_REDIRECT_URI=http://localhost:8000/google-drive/callback
GOOGLE_DRIVE_FOLDER_ID=1a2b3c4d5e6f  # Carpeta raíz en Drive
GOOGLE_DRIVE_IMPERSONATE_EMAIL=fotos.eventos@gmail.com
GOOGLE_APPLICATION_CREDENTIALS=storage/app/google-drive-service-account.json
```

### 2. Migraciones

```bash
php artisan migrate
```

### 3. Permisos

```bash
php artisan db:seed --class=PermissionTableSeeder
```

Asignar rol admin o permiso `google-drive-conectar` al usuario.

### 4. Queue Worker

```bash
php artisan queue:work
# o con supervisor para producción
```

## Paso a Paso - Uso

### 1. Conectar Cuenta Google

```
GET /google-drive/connect
    ↓
OAuth consent screen
    ↓
/callback guarda tokens en DB
```

Verificar conexión:
```
GET /google-drive/validate
GET /google-drive/status
```

### 2. Crear Importación

```
POST /importaciones
{
    "evento_id": 1,
    "carpeta_drive_id": "1a2b3c4d5e6f"
}
```

### 3. Iniciar Sincronización

```
POST /importaciones/{id}/sync
    ↓
SyncGoogleDriveJob::dispatch()
```

### 4. Monitorear Progreso

```
GET /importaciones/{id}/progress
{
    "procesados": 5000,
    "total_archivos": 10000,
    "porcentaje": 50.00,
    "folders_procesados": 250,
    "total_folders": 500
}
```

Frontend: polling automático cada 3 segundos cuando estado = `procesando`.

### 5. Estructura de Carpetas Esperada

```
Carrera_Pereira_2026/
├── 502/
│   ├── 001.jpg
│   ├── 002.jpg
│   └── 003.jpg
├── 815/
│   ├── 001.jpg
│   └── 002.jpg
└── 1024/
    └── 001.jpg
```

- Carpetas nombradas solo con número = dorsal
- Archivos dentro de cada carpeta = fotografías

## Decisiones Técnicas

| Tema | Decisión |
|------|----------|
| Almacenamiento | Drive es fuente únicamente; no se descargan fotos |
| URLs | `webViewLink` para visualización (requiere cuenta Google) |
| Tokens | Cifrados con `encrypted` cast de Laravel |
| Paginación | 500 archivos por página, 200 carpetas |
| Backoff | [10, 30, 120, 300] segundos exponencial |
| Reintentos | 3-5 intentos según job |
| Duplicados | Índice único en `google_drive_file_id` |

## Escalabilidad

- Soporta 5,000 / 10,000 / 50,000 fotos
- Procesamiento por lotes via queue
- No se cargan todas las fotos en memoria
- Base de datos solo guarda metadata (máximo ~5MB por 50k registros)