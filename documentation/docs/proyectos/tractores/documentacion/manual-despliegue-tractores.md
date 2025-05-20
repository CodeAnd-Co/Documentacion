---
title: Manual de despliegue de TracTech
sidebar_position: 0
---

# Manual de Despliegue

## Índice

1. [Requisitos Previos](#requisitos-previos)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Entornos de Despliegue](#entornos-de-despliegue)
4. [Despliegue del Backend (EC2 + PM2)](#despliegue-del-backend-ec2--pm2)
5. [Variables de Entorno](#variables-de-entorno)
6. [Mantenimiento y Monitoreo](#mantenimiento-y-monitoreo)
7. [Anexos](#anexos)

---

## Requisitos Previos

- Cuenta en AWS con acceso a EC2.
- Llaves SSH configuradas para acceso al EC2.
- Node.js y PM2 instalados en la instancia.
- Git configurado en el EC2.

---

## Estructura del Proyecto

### Repositorios

- **App local**: Aplicación de escritorio hecha en Electron.
- **Backend desacoplado**: Desplegado en una instancia EC2 usando PM2.

---

## Entornos de Despliegue

Una vez configurado NGINX y PM2, se podrá enrutar el tráfico a diferentes entornos.

| Entorno    | Ruta Backend                   |  Rama GitHub | Puerto en EC2 |
| ---------- | ------------------------------ | ------------ | ------------- |
| Staging    | `https://IP/staging/`  | `staging`    | `3001`        |
| Producción | `https://IP/`          | `main`       | `3000`        |

---

## Despliegue del Backend (EC2 + PM2)

### 1. Clonar o actualizar el repositorio

Para poder tener dos entornos reales de produccion y staging debemos clonar el repositorio 2 veces con el nombre `staging` y `main`

Una vez clonados debemos pasarnos a las ramas respectivas para cada directorio

```bash
cd Staging-Backend-Desacoplado-Tractech # o Main-Backend-Desacoplado-Tractech
git checkout staging # o main
git pull # solo necesario la primera vez
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Definir variables de entorno

Crea un archivo `.env.` y  en el root del proyecto (ver sección [Variables de Entorno](#variables-de-entorno)).

## 4. Crear archivo de ecosistema para staging y produccion

### Archivo de ecosistema para produccion y staging

```js
// Creamos este documento para tener dos entornos de despliegue
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "main",
      script: "app.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    },
    {
      name: "staging",
      script: "app.js",
      env: {
        NODE_ENV: "staging",
        PORT: 3001
      }
    }
  ]
};
```

## 5. Ejecutar o reiniciar procesos con PM2

```bash
pm2 start ecosystem.config.js
# o si ya está corriendo
pm2 reload ecosystem.config.js
```
---

## Variables de Entorno

### Backend desacoplado (`.env`)

#### Estructura de los .env

```env
PUERTO =
ANFITRION_BD=
USUARIO_BD=
CONTRASENA_BD=
NOMBRE_BD=
SECRETO_JWT=
DURACION_JWT=
SU='SUPER ADMIN'
```

---

## Mantenimiento y Monitoreo

### PM2

**Ver todos los procesos:**

```bash
pm2 ls
```

**Ver logs en vivo:**

Esto sirve para saber si la aplicacion se desplego correctamente.

```bash
pm2 logs
```

Este es un mensaje de ejemplo cuando esta corriendo correctamente.

```bash
/home/ubuntu/.pm2/logs/staging-out.log last 15 lines:
0|staging  | Servidor escuchando en el puerto 3001
0|staging  | Conexión exitosa a la base de datos MySQL
```

**Reiniciar procesos:**

```bash
pm2 restart all
```

**Detener proceso:**

```bash
pm2 stop all
```

---

## Anexos

- Documentación de endpoints: ver Swagger accediendo al URL del backend + `/api-docs`.

---

Historial
| **Tipo de Versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------| ---------- | --------------- |
| **1.0** | Crear manual de despliegue | 19/05/2025 | Daniel Queijeiro |