DROP DATABASE IF EXISTS db_kitchen;
CREATE SCHEMA IF NOT EXISTS db_kitchen;

USE db_kitchen;

-- Tabla de sectores
CREATE TABLE sectors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla de empresas
CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    ubi VARCHAR(150),
    NIF VARCHAR(15),
    tel VARCHAR(20),
    email VARCHAR(255),
    date DATE,
    img VARCHAR(255),
    sector_id INT,
    FOREIGN KEY (sector_id) REFERENCES sectors(id)
);

-- Tabla de cocinas
CREATE TABLE kitchens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    ubi VARCHAR(150),
    company_id INT,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    tel VARCHAR(20),
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('operario', 'comercial', 'admin') NOT NULL,
    img VARCHAR(255),
    company_id INT NOT NULL,
    kitchen_id INT,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
    FOREIGN KEY (kitchen_id) REFERENCES kitchens(id) ON DELETE SET NULL
);

-- Tipos de comida
CREATE TABLE food_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    default_cost_per_kg DECIMAL(10,2) DEFAULT 0.00
);

-- Costes personalizados por cocina
CREATE TABLE custom_food_costs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kitchen_id INT,
    food_type_id INT,
    custom_cost_per_kg DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (kitchen_id) REFERENCES kitchens(id) ON DELETE CASCADE,
    FOREIGN KEY (food_type_id) REFERENCES food_types(id) ON DELETE CASCADE,
    UNIQUE (kitchen_id, food_type_id)
);

-- Registros de desperdicio
CREATE TABLE waste_entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    kitchen_id INT,
    company_id INT,
    food_type_id INT,
    quantity_kg DECIMAL(6,2) NOT NULL,
    reason TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (kitchen_id) REFERENCES kitchens(id),
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
    FOREIGN KEY (food_type_id) REFERENCES food_types(id)
);

-- Alertas
CREATE TABLE alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kitchen_id INT,
    user_role ENUM('operario', 'comercial', 'admin'),
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    seen BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (kitchen_id) REFERENCES kitchens(id) ON DELETE CASCADE
);


-- 1. Insertar sector (si no existe ya)
INSERT INTO sectors (name) VALUES ('Restauración');

-- 2. Insertar empresa
INSERT INTO companies (name, ubi, NIF, tel, email, date, img, sector_id)
VALUES (
  'Effinity Corp',
  'Calle Innovación 123, Barcelona',
  'B12345678',
  '+34911222333',
  'corp@effinity.com',
  CURDATE(),
  NULL,
  (SELECT id FROM sectors WHERE name = 'Restauración')
);

-- 3. Insertar cocina
INSERT INTO kitchens (name, ubi, company_id)
VALUES (
  'Cocina Central',
  'Planta 1 - Nave 3',
  (SELECT id FROM companies WHERE name = 'Effinity Corp')
);

-- 4. Insertar usuario admin
INSERT INTO users (name, surname, email, password_hash, role, company_id, kitchen_id)
VALUES (
  'Admin',
  'Principal',
  'admin@gmail.com',
  '$2a$10$vdG6XW4bHcWlwJgXsEmkc.asznlsWHBkz.V1PFURWswcTqQYXg2EK', -- Cambia esto por un hash real con BCrypt
  'admin',
  (SELECT id FROM companies WHERE name = 'Effinity Corp'),
  (SELECT id FROM kitchens WHERE name = 'Cocina Central')
);

SELECT * FROM users