# Plataforma de Gestión de Fotografías Deportivas

Aplicación Laravel 10 con Inertia.js + Vue 3 para gestionar eventos deportivos, corredores y fotografías organizadas por dorsal.

## Requisitos

- PHP >= 8.1
- Composer
- Node.js >= 16
- MySQL / MariaDB
- XAMPP (recomendado para entorno local)

## Instalación

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd mujer6k_fotos

# 2. Instalar dependencias PHP
composer install

# 3. Instalar dependencias JS
npm install

# 4. Configurar variables de entorno
cp .env.example .env
php artisan key:generate
```

## Base de Datos

### Opción A: Crear BD vacía y ejecutar migraciones

```bash
# 1. Crear base de datos en MySQL
mysql -u root -e "CREATE DATABASE IF NOT EXISTS fotos_deportivas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 2. Configurar .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fotos_deportivas
DB_USERNAME=root
DB_PASSWORD=

# 3. Ejecutar migraciones + seeders
php artisan migrate --force
php artisan db:seed --force
```

### Opción B: Importar script SQL completo

```bash
# 1. Crear BD vacía
mysql -u root -e "CREATE DATABASE IF NOT EXISTS fotos_deportivas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 2. Importar script estructural (tablas + seeders iniciales)
mysql -u root fotos_deportivas < database/sql/estructura_inicial.sql
```

> **Nota**: el archivo `estructura_inicial.sql` se incluye en `database/sql/` y crea todas las tablas necesarias para levantar el sistema sin ejecutar migraciones.

## Ejecución

```bash
# Compilar assets
npm run build

# Levantar servidor Laravel
php artisan serve

# Visitar
http://localhost:8000
```

## Credenciales por defecto

| Campo | Valor |
|-------|-------|
| Email | admin@admin.com |
| Password | 123456 |

## Funcionalidades

### Público
- Página de bienvenida (Welcome)

### Autenticación
- Login / Logout
- Registro de usuarios
- Recuperación de contraseña
- Gestión de perfil (editar / eliminar cuenta)

### Panel Administrativo (requiere permisos)
- **Usuarios**: CRUD completo + asignación de roles
- **Roles**: CRUD completo + asignación de permisos
- **Eventos**: CRUD de eventos deportivos
- **Corredores**: CRUD de participantes por dorsal y evento
- **Fotos**: CRUD de fotografías asociadas a corredores y eventos

### API REST (Sanctum)
- `GET /api/user` - Usuario autenticado
- `POST /api/login` - Login API
- `POST /api/logout` - Logout API
- `GET/POST/PUT/DELETE /api/eventos` - Eventos
- `GET/POST/PUT/DELETE /api/corredores` - Corredores
- `GET/POST/PUT/DELETE /api/fotos` - Fotos

## Estructura del Proyecto

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── api/           # Controladores API REST
│   │   └── Auth/          # Controladores de autenticación
│   └── Requests/          # Formularios de validación
├── Models/                # Modelos Eloquent
└── Providers/             # Service Providers

database/
├── factories/             # Factories para testing
├── migrations/            # Migraciones
├── seeders/               # Seeders iniciales
└── sql/                   # Scripts SQL alternativos

resources/js/
├── Components/            # Componentes Vue reutilizables
├── Layouts/               # Layouts (auth, guest, app)
└── Pages/                 # Vistas por recurso
    ├── Auth/
    ├── Dashboard.vue
    ├── Eventos/
    ├── Corredores/
    ├── Fotos/
    └── Users/
```

## Modelos y Relaciones

```
Evento
├── hasMany Corredores
└── hasMany Fotos

Corredor
├── belongsTo Evento
└── hasMany Fotos

Foto
├── belongsTo Evento
└── belongsTo Corredor

User
└── belongsToMany Roles (Spatie Permission)
```

## Próximas Fases

- [ ] Fase 2: Importación masiva desde Google Drive
- [ ] Fase 3: Almacenamiento en MinIO / S3
- [ ] Fase 4: Procesamiento de imágenes (resize, watermark)
- [ ] Fase 5: Búsqueda pública de fotos por dorsal
- [ ] Fase 6: Galerías y compartición de álbumes

## Stack Tecnológico

- **Backend**: Laravel 10, PHP 8.1+
- **Frontend**: Vue 3, Inertia.js, Tailwind CSS
- **Auth**: Laravel Breeze + Sanctum
- **Permisos**: Spatie Laravel Permission
- **Base de datos**: MySQL / MariaDB
- **Testing**: PHPUnit + Laravel Sail (opcional)

## Licencia

MIT
