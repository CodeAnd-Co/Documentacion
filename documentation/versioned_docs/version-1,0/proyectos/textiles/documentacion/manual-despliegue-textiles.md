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

- Cuenta en AWS con acceso a EC2, API Gateway, S3 y Amplify.
- Llaves SSH configuradas para acceso al EC2.
- Node.js y PM2 instalados en la instancia.
- Git configurado en el EC2.
- Permisos de IAM para despliegue en Amplify.

---

## Estructura del Proyecto

### Repositorios

- **Frontend**: [Frontend-Text-Lines] — desplegado en AWS Amplify.
- **Backend**: [Backend-textiles] — desplegado en una instancia EC2 usando PM2.

---

## Entornos de Despliegue

Una vez configurada el API gateway y Amplify, se podran obtener los URL's de cada ambiente

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
cd staging # o production
git checkout staging # o production
git pull # solo necesario la primera vez
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
pm2 start ecosystem-staging.config.js # o ecosystem-production.config.js
# o si ya está corriendo
pm2 reload ecosystem.config.js # o ecosystem-production.config.js
```

Para no tener que hacer estos pasos manualmente, usaremos un script de github actions que se puede encontrar en el apartado CI / CD de la [estrategia tecnica](./estrategia-tecnica-textiles.md)

---

## Variables de Entorno

### Backend (`.env`)

#### Estructura de los .env

```env

AWS_REGION =...
AWS_BUCKET_NAME = ...

AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...

LOCAL_URL =...
LOCAL_URL_BACKEND =...
DEPLOYED_URL = ...
API_GATEWAY_URL =...

NODE_ENV=staging
JWT_SECRET=...
API_KEY = ...
PORT = 4000

DB_HOST=...
DB_PORT=...
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
```

### Frontend (Amplify)

Estas se configuran desde la consola de Amplify:

```env
VITE_API_URL=...
VITE_API_KEY=...
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

### Amplify

- Ver estado de builds y logs desde la consola de Amplify.
- Re-desplegar manualmente si es necesario.

---

## Anexos

- Documentación de endpoints: ver Swagger accediendo al URL del backend + `/api-docs`.

---

Historial
| **Tipo de Versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------| ---------- | --------------- |
| **1.0** | Crear manual de despliegue | 13/05/2025 | Diego Alfaro |
| **2.0** | Actualizacion de estrategia de despliegue | 14/05/2025 | Diego Alfaro |