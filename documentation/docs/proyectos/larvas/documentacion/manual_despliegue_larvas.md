---
title: Manual de despliegue
sidebar_position: 9
---

# Manual de Despliegue

## Índice

#TODO
1. [Requisitos Previos](#requisitos-previos)
2. [Estructura del Proyecto](#estructura-del-proyecto)

---

## Requisitos Previos

#TODO

---

## Estructura del Proyecto

### Repositorios

- **Frontend**: [TECH-NEBRIOS FLUTTER](https://github.com/CodeAnd-Co/TECH-NEBRIOS-FLUTTER) #TODO
- **Backend**: [TECH-NEBRIOS BACKEND](https://github.com/CodeAnd-Co/TECH-NEBRIOS-BACKEND) #TODO

---

## Entornos de Despliegue

#TODO

| Entorno    | URL Backend                                               | URL Frontend                                     | Rama GitHub | Puerto en EC2 |
| ---------- | --------------------------------------------------------- | ------------------------------------------------ | ----------- | ------------- |
| Staging    | `https://hh92xpz0ph.execute-api.us-east-1.amazonaws.com/` | `https://staging.d22le927zllwnv.amplifyapp.com/` | `staging`   | `4000`        |
| Producción | `https://aydrmntif4.execute-api.us-east-1.amazonaws.com/` | `https://main.d22le927zllwnv.amplifyapp.com/`    | `main`      | `3000`        |

---

## Despliegue del Backend (EC2 + PM2)

### 1. Clonar o actualizar el repositorio

Para poder tener dos entornos reales de produccion y staging debemos clonar el repositorio 2 veces con el nombre `staging` y `production`

Una vez clonados debemos pasarnos a las ramas respectivas para cada directorio

```bash
cd staging
git checkout staging
git pull
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Definir variables de entorno

Crea un archivo `.env.staging` y `.env.production` en el root del proyecto (ver sección [Variables de Entorno](#variables-de-entorno)).

## 4. Crear archivos de ecosistema para staging y produccion

### Archivo de ecosistema para produccion y staging

```js
// ecosystem-production.config.js
module.exports = {
  apps: [
    {
      name: "app-production",
      script: "./app.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
```

```js
// ecosystem-staging.config.js
module.exports = {
  apps: [
    {
      name: "app-staging",
      script: "./app.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "staging",
        PORT: 4000,
      },
    },
  ],
};
```

## 5. Ejecutar o reiniciar procesos con PM2

```bash
pm2 start ecosystem-staging.config.js
pm2 reload ecosystem.config.js
```

---

## Variables de Entorno

### Backend (`.env`)

#### Estructura de el .env

```env
APP_URL=...
DATABASE_URL=...

DB_HOST=...
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
DB_PORT=...

JWT_SECRET=...
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
/home/ubuntu/.pm2/logs/app-production-out-0.log last 15 lines:
0|app-prod | Server running on port 3000 3000 in production mode.
0|app-prod | Server running on port 3000 3000 in production mode.
0|app-prod | Server running on port 3000 3000 in production mode.
0|app-prod | Server running on port 3000 3000 in production mode.
0|app-prod | Server running on port 3000 3000 in production mode.
0|app-prod | Server corriendo en puerto: 3000 3000 en ambiente de production.
0|app-prod | Server corriendo en puerto: 3000 3000 en ambiente de production.

/home/ubuntu/.pm2/logs/app-staging-out-1.log last 15 lines:
1|app-stag | Server running on port 4000 4000 in staging mode.
1|app-stag | Server running on port 4000 4000 in staging mode.
1|app-stag | Server running on port 4000 4000 in staging mode.
1|app-stag | Server running on port 4000 4000 in staging mode.
1|app-stag | Server running on port 4000 4000 in staging mode.
1|app-stag | Server corriendo en puerto: 4000 4000 en ambiente de staging.
1|app-stag | Server corriendo en puerto: 4000 4000 en ambiente de staging.
1|app-stag | Server corriendo en puerto: 4000 4000 en ambiente de staging.
```

**Reiniciar proceso:**

```bash
pm2 restart <id|nombre>
```

**Detener proceso:**

```bash
pm2 stop <id|nombre>
```

---

Historial
| **Tipo de Versión** | **Descripción**            | **Fecha**  | **Colaborador**          |
| ------------------- | -------------------------- | ---------- | ------------------------ |
| **1.0**             | Crear manual de despliegue | 05/06/2025 | Juan Eduardo Rosas Cerón |
