-- ============================================================
-- Plataforma de Gestión de Fotografías Deportivas
-- Script SQL inicial - BD: fotos_deportivas
-- Compatible con Laravel 10, PHP 8.1+, MySQL 5.7+
-- ============================================================

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS `fotos_deportivas`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `fotos_deportivas`;

-- Tabla: users
CREATE TABLE `users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
  `estado` ENUM('Activo','Bloqueado') NOT NULL DEFAULT 'Activo',
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: password_reset_tokens
CREATE TABLE `password_reset_tokens` (
  `email` VARCHAR(191) NOT NULL PRIMARY KEY,
  `token` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: failed_jobs
CREATE TABLE `failed_jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uuid` VARCHAR(191) NOT NULL,
  `connection` TEXT NOT NULL,
  `queue` TEXT NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `exception` LONGTEXT NOT NULL,
  `failed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: personal_access_tokens
CREATE TABLE `personal_access_tokens` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `tokenable_type` VARCHAR(255) NOT NULL,
  `tokenable_id` BIGINT UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `token` VARCHAR(64) NOT NULL,
  `abilities` TEXT NULL DEFAULT NULL,
  `last_used_at` TIMESTAMP NULL DEFAULT NULL,
  `expires_at` TIMESTAMP NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Spatie Laravel Permission (roles y permisos)
-- ============================================================

CREATE TABLE `permissions` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(125) NOT NULL,
  `guard_name` VARCHAR(125) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `roles` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(125) NOT NULL,
  `guard_name` VARCHAR(125) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `model_has_permissions` (
  `permission_id` BIGINT UNSIGNED NOT NULL,
  `model_type` VARCHAR(255) NOT NULL,
  `model_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `model_has_roles` (
  `role_id` BIGINT UNSIGNED NOT NULL,
  `model_type` VARCHAR(255) NOT NULL,
  `model_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `role_has_permissions` (
  `permission_id` BIGINT UNSIGNED NOT NULL,
  `role_id` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Dominio: eventos, corredores, fotos
-- ============================================================

CREATE TABLE `eventos` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` TEXT NULL DEFAULT NULL,
  `fecha_evento` DATE NULL DEFAULT NULL,
  `estado` VARCHAR(20) NOT NULL DEFAULT 'activo',
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  KEY `eventos_estado_index` (`estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `corredores` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `evento_id` BIGINT UNSIGNED NOT NULL,
  `dorsal` INT NOT NULL,
  `nombre_completo` VARCHAR(255) NULL DEFAULT NULL,
  `documento` VARCHAR(50) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  KEY `corredores_evento_id_index` (`evento_id`),
  KEY `corredores_dorsal_index` (`dorsal`),
  UNIQUE KEY `corredores_evento_id_dorsal_unique` (`evento_id`,`dorsal`),
  CONSTRAINT `corredores_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `fotos` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `evento_id` BIGINT UNSIGNED NOT NULL,
  `corredor_id` BIGINT UNSIGNED NOT NULL,
  `nombre_archivo` VARCHAR(255) NOT NULL,
  `ruta_storage` VARCHAR(255) NOT NULL,
  `url_publica` VARCHAR(255) NULL DEFAULT NULL,
  `estado` VARCHAR(20) NOT NULL DEFAULT 'pendiente',
  `metadata` JSON NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  KEY `fotos_evento_id_index` (`evento_id`),
  KEY `fotos_corredor_id_index` (`corredor_id`),
  KEY `fotos_estado_index` (`estado`),
  UNIQUE KEY `fotos_corredor_id_nombre_archivo_unique` (`corredor_id`,`nombre_archivo`),
  CONSTRAINT `fotos_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fotos_corredor_id_foreign` FOREIGN KEY (`corredor_id`) REFERENCES `corredores` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Seeders: Permisos iniciales
-- ============================================================

INSERT INTO `permissions` (`name`, `guard_name`, `created_at`, `updated_at`) VALUES
('rol-listar',       'web', NOW(), NOW()),
('rol-crear',        'web', NOW(), NOW()),
('rol-editar',       'web', NOW(), NOW()),
('rol-eliminar',     'web', NOW(), NOW()),
('usuarios-listar',  'web', NOW(), NOW()),
('usuarios-crear',   'web', NOW(), NOW()),
('usuarios-editar',  'web', NOW(), NOW()),
('usuarios-eliminar','web', NOW(), NOW()),
('eventos-listar',   'web', NOW(), NOW()),
('eventos-crear',    'web', NOW(), NOW()),
('eventos-editar',   'web', NOW(), NOW()),
('eventos-eliminar', 'web', NOW(), NOW()),
('corredores-listar','web', NOW(), NOW()),
('corredores-crear', 'web', NOW(), NOW()),
('corredores-editar','web', NOW(), NOW()),
('corredores-eliminar','web', NOW(), NOW()),
('fotos-listar',     'web', NOW(), NOW()),
('fotos-crear',      'web', NOW(), NOW()),
('fotos-editar',     'web', NOW(), NOW()),
('fotos-eliminar',   'web', NOW(), NOW());

-- ============================================================
-- Seeders: Usuario administrador inicial
-- Contraseña: 123456 (hasheada con bcrypt)
-- ============================================================

-- Obtener rol "Administrador" (se crea automáticamente por CreateAdminUserSeeder)
-- Si se ejecuta solo este script, correr primero los seeders de Laravel:
--   php artisan db:seed --class=PermissionTableSeeder
--   php artisan db:seed --class=CreateAdminUserSeeder
