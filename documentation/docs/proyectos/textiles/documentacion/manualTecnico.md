# Manual Técnico ALTERTEX

## Índice

1. [Introducción](#1-introducción)
2. [Requisitos Previos](#2-requisitos-previos)
3. [Preparación del Proyecto](#3-preparación-del-proyecto)
4. [Estructura de Carpetas](#4-estructura-de-carpetas)
5. [Configuración del Entorno](#5-configuración-del-entorno)
6. [Ejecución del Proyecto](#6-ejecución-del-proyecto)
7. [Pruebas del Sistema](#7-pruebas-del-sistema)
8. [CI/CD y Despliegue](#8-cicd-y-despliegue)
9. [Documentación Visual](#9-documentación-visual)
10. [Referencias Cruzadas](#10-referencias-cruzadas)
11. [Historial de Cambios](#11-historial-de-cambios)

---

## 1. Introducción

Este manual técnico describe paso a paso cómo preparar, ejecutar, probar y mantener el sistema ALTERTEX. Está diseñado para que cualquier desarrollador pueda replicar la instalación y el despliegue del sistema desde cero, sin requerir conocimientos previos del proyecto.

---

## 2. Requisitos Previos

Antes de iniciar, asegúrate de tener instalado y configurado lo siguiente:

### 2.1 Herramientas necesarias

* **Node.js (v18 o superior):** Descárgalo desde [nodejs.org](https://nodejs.org/)
* **Git:** [git-scm.com](https://git-scm.com/)
* **MySQL Workbench:** [dev.mysql.com](https://dev.mysql.com/downloads/workbench/)
* **VS Code o editor similar:** [code.visualstudio.com](https://code.visualstudio.com/)
* **Postman:** Para pruebas de APIs REST

### 2.2 Cuenta en AWS

Debes tener una cuenta en AWS con acceso habilitado a:

* EC2 (para el backend)
* RDS (base de datos MySQL)
* S3 (para imágenes)
* Amplify (para el frontend)

### 2.3 Instalaciones globales necesarias

Instala PM2 globalmente:

```bash
npm install -g pm2
```

---

## 3. Preparación del Proyecto

### 3.1 Clonar los repositorios

Ejecuta los siguientes comandos en tu terminal:

```bash
git clone https://github.com/CodeAnd-Co/Backend-textiles.git
cd Backend-textiles
npm install
cp .env.example .env
```

```bash
git clone https://github.com/CodeAnd-Co/Frontend-Text-Lines.git
cd Frontend-Text-Lines
npm install
cp .env.example .env
```

### 3.2 Crear base de datos ALTERTEX

1. Abre MySQL Workbench o consola.
2. Crea la base de datos:

```sql
CREATE DATABASE altertex;
```

3. Importa el archivo `ALTERTEX.sql` que contiene toda la estructura del sistema.

   En Workbench:

   * Archivo > Importar > Selecciona `ALTERTEX.sql`
   * Ejecuta el script sobre la base de datos `altertex`

* [SQL ALTERTEX](https://drive.google.com/file/d/1cXzJ6DeLVpEa-q0A35umEcIBAPvdGVIP/view?usp=drive_link)

---

## 4. Estructura de Carpetas

### 4.1 Backend

```bash
/backend
├── Datos/
│   ├── Modelos/
│   ├── Repositorios/
├── Autenticacion/
│   ├── controllers/
│   ├── routes/
├── Roles/
│   ├── controllers/
│   ├── routes/
│   ├── repositorios/
├── Utilidades/
│   ├── middlewares/
│   ├── servicios/
│   ├── mensajes/
│   ├── helpers/
│   ├── validaciones/
├── Configuracion/
│   └── baseDeDatos.js
├── pruebasUnitarias/
├── ecosystem-staging.config.js
├── ecosystem-production.config.js
├── app.js
├── .eslintrc.js
├── .env.example
```

### 4.2 Frontend

```bash
/src
├── @Hooks/
├── @Rutas/
├── @SRC/
│   ├── constantes/
├── @Dominio/
│   ├── modelos/
│   ├── servicios/
│   ├── repositorios/
├── vistas/
│   ├── componentes/
│   │   ├── atomos/
│   │   ├── moleculas/
│   │   ├── organismos/
│   ├── paginas/
├── estilos/
├── vite.config.js
├── .eslintrc.js
├── .env.example
```

---

## 5. Configuración del Entorno

### 5.1 Variables del Backend (`.env`)

Modifica el archivo `.env` en la raíz del backend:

```env
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=altertex
JWT_SECRET=secreto123
API_KEY=clave-api-secreta
AWS_REGION=us-east-1
AWS_BUCKET_NAME=nombre-bucket
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

### 5.2 Variables del Frontend (`.env`)

Modifica el archivo `.env` del frontend:

```env
VITE_API_URL=http://localhost:4000
VITE_API_KEY=clave-api-secreta
```

---

## 6. Ejecución del Proyecto

### 6.1 Backend local

```bash
npm run dev
```

Verifica que se imprima en consola:

```bash
Servidor corriendo en puerto: 4000
```

### 6.2 Frontend local

```bash
npm run dev
```

Abre tu navegador y entra a:

```
http://localhost:5173
```

---

## 7. Pruebas del Sistema

### 7.1 Pruebas Manuales Funcionales

Se utilizaron los siguientes usuarios de prueba:

**SuperAdmin**

* Correo: `maria.gonzalez@example.com`
* Contraseña: `hola`

**Empleado**

* Correo: `gabriela.mendoza@example.com`
* Contraseña: `hola`

Se validaron manualmente:

* Login exitoso
* Acceso a rutas protegidas
* Creación, edición y eliminación de roles
* Consulta de sets de cuotas

---

## 8. CI/CD y Despliegue

### 8.1 Backend en EC2 (Staging o Producción)

1. Conéctate por SSH a tu instancia EC2
2. Accede al proyecto y asegúrate de estar en la rama correcta (`staging` o `main`)

```bash
cd Backend-textiles
git pull
pm install
pm run build
pm2 start ecosystem-staging.config.js
pm2 logs
```

### 8.2 Frontend en Amplify

1. Entra a AWS Amplify
2. Conecta el repositorio de GitHub y selecciona la rama (`main`, `staging`, etc.)
3. Amplify generará automáticamente los builds y desplegará el frontend

### 8.3 GitHub Actions

Los workflows se activan automáticamente al hacer push a las ramas `main` o `staging`. Incluyen:

* Instalación de dependencias
* Despliegue por SSH a EC2
* Restart automático con PM2

---

## 9. Documentación Visual

### Storybook (Frontend)

```bash
npm run storybook
```

Esto abrirá Storybook en `http://localhost:6006` donde se visualizan todos los componentes visuales.

### Swagger (Backend)

Accede a la documentación de la API REST:

```
http://localhost:4000/api-docs
```

---

## 10. Referencias Cruzadas

* [Manual de Despliegue](manual-despliegue-textiles.md)
* [Estrategia Técnica ](estrategia-tecnica-textiles.md)
* [Manual de Prueba de Arquitectura](prueba-de-arquitectura.md)
* [Plan de Pruebas de Software](plan-stp.md)
* [Diagrama MER y Diccionario](diagrama-mer.md)
* [Endpoints del Sistema](endpoints-prueba-arquitectura.md)

---

## 11. Historial de Cambios

| Versión | Descripción                            | Fecha      | Colaborador    |
| ------- | -------------------------------------- | ---------- | -------------- |
| 1.0     | Implementacion de Manual Técnico | 15/05/2025 | Arturo Sánchez |
