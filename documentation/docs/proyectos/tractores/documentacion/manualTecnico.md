---
title: Manual técnico de Harvester
---

# Manual Técnico Harvester

## Índice

1. [Introducción](#1-introducción)
2. [Requisitos Previos](#2-requisitos-previos)
3. [Preparación del Proyecto](#3-preparación-del-proyecto)
4. [Estructura de Carpetas](#4-estructura-de-carpetas)
5. [Configuración del Entorno](#5-configuración-del-entorno)
6. [Ejecución del Proyecto](#6-ejecución-del-proyecto)
7. [Pruebas del Sistema](#7-pruebas-del-sistema)
8. [Despliegue](#8-despliegue)
9. [Documentación](#9-documentación)
10. [Referencias](#10-referencias)
11. [Historial de Cambios](#11-historial-de-cambios)

---

## 1. Introducción

Este manual técnico describe paso a paso cómo preparar, ejecutar, probar y mantener el sistema Harvester. Está diseñado para que cualquier desarrollador o auditor técnico pueda replicar la instalación desde cero, sin requerir conocimientos previos del proyecto.

### 1.1 ¿Qué es Harvester?

Harvester es una aplicación de escritorio para el analísis de datos recabados por tractores de CNH, donde sus empleados podrán crear reportes de manera más eficiente. Su arquitectura está compuesta por:

* Una **aplicación de escritorio** desarrollada en HTML, CSS y JS, usando la libreria de ElectronJS.
* Un **backend desacoplado** basado en Node.js alojado en una instancia EC2.
* Una **base de datos MySQL**.

---
## 2. Backend desacoplado

### 2.1 Requisitos Previos

#### 2.1.1 Herramientas necesarias

Instala las siguientes herramientas para probar el backend en tu equipo local:

1. **Node.js:** Ejecuta el backend del sistema Harvester. [Descargar](https://nodejs.org/)
2. **Git:** Permite clonar el código fuente desde GitHub. [Descargar](https://git-scm.com/)
3. **MySQL Workbench:** Interfaz visual para administrar la base de datos. [Descargar](https://dev.mysql.com/downloads/workbench/)
4. **Postman:** Herramienta para probar las APIs del backend. [Descargar](https://www.postman.com/)

> **NOTA:** Para conectarte en MySQL Workbench:
>
> 1. Abre Workbench.
> 2. Da clic en el símbolo "+" para crear una nueva conexión.
> 3. En "Hostname" coloca el endpoint de RDS.
> 4. En "Username" coloca `root`.
> 5. Da clic en "Store in Vault" para guardar tu contraseña.
> 6. Prueba la conexión y guarda.

### 2.2 Crear y Configurar una Cuenta en AWS

#### Paso a paso para crear la cuenta:

1. Ve a [https://aws.amazon.com](https://aws.amazon.com) y haz clic en **"Crear una cuenta gratuita"**.
2. Ingresa un correo electrónico válido y una contraseña segura.
3. Completa los datos de contacto y método de pago.
4. Verifica tu identidad vía SMS o llamada.
5. Elige el plan **"Basic"**.

#### Activación de servicios requeridos

* **EC2:** Ejecuta el backend.

### 2.3 Configuración de Servicios en AWS

#### EC2 (backend)

1. Ir a AWS > EC2 > Launch Instance

2. Configuración:

   * Nombre: `Harvester`

   * Imagen: Ubuntu Noble 24.04 LTS

   * Tipo: t4g.medium

   * Par de claves: crear par de claves RSA (descargar `.pem`)

     * Guarda la clave en una carpeta accesible (ej. `~/Documentos/keys/Harvester.pem`)
     * Para conectarse, **la consola debe estar posicionada en el mismo directorio de la clave** o se debe usar la ruta completa

   * Grupo de seguridad:

     * Añadir reglas:

       * Puerto 22 (SSH)
       * Puerto 80 (HTTP)
       * Puerto 443 (HTTPS)
       * Puerto 3000 (para pruebas)
       * Puerto 3306 (MySQL)

3. Conectarse por SSH (en la consola de comandos):

```bash
cd ~/Documentos/keys
chmod 400 Harvester.pem
ssh -i "Harvester.pem" ubuntu@<ip-publica-ec2>
```

4. Preparar Ubuntu (en la consola de comandos de EC2):
```bash
sudo apt upgrade -y
sudo apt install curl -y
```

5. Instalar herramientas de trabajo (en la consola de comandos de EC2):

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
sudo apt install mysql-server -y
sudo apt install git -y
```
---

### 2.3 Preparación del backend desacoplado
Después de configurar los servicios en AWS, clonaremos los repositorios y prepararemos el entorno de desarrollo local.

#### 2.3.1 Clonar los Repositorios (en la consola de VSCode):

```bash
# Backend
cd ~
# Para tener dos entornos de despliegue (Main y Staging) clonamos dos veces el repositorio
git clone https://github.com/CodeAnd-Co/Backend-Desacoplado-TracTech.git Main-Backend-Desacoplado-TracTech
git clone https://github.com/CodeAnd-Co/Backend-Desacoplado-TracTech.git Staging-Backend-Desacoplado-TracTech
cd Main-Backend-Desacoplado-TracTech # o Staging-Backend-Desacoplado-TracTech
npm install
cp .env.example .env
```

#### 2.3.2 Crear base de datos Harvester

**MySQL Workbench:**

1. Abrir Workbench
2. Crear nueva conexión con el host, puerto, usuario y contraseña
3. Crear base:

```sql
CREATE DATABASE harvester;
```

4. Cargar y ejecutar el script `HARVESTER.sql`


#### Links de referencia

1. [HARVESTER.SQL](https://drive.google.com/file/d/1-jHoUr-9iyutlgRoevjk-BiEbZiOBhkS/view?usp=sharing)
---

### 2.4 Estructura de Carpetas

Una vez clonado el código fuente, es importante conocer su estructura para facilitar navegación, desarrollo y pruebas.


![Backend](./diagrama-de-paquetes-backend-desacoplado.png)

---

### 2.5 Configuración del Entorno

#### 2.5.1 Crear archivo .env en el servidor

En la consola de comandos de la instancia EC2:

```bash
nano .env
```

1. Escribe las variables necesarias
2. Presiona `Ctrl + O` para guardar
3. Presiona `Enter`
4. Presiona `Ctrl + X` para salir

#### 2.5.2 Variables del Backend

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

### 2.6 Ejecución del backend

Para inicializar el servidor de manera local:
```bash
cd Staging-Backend-Desacoplado-TracTech
npm start
```

Para inicializar el servidor en la instancia de EC2:
```bash
# Inicializar el server de producción
cd Staging-Backend-Desacoplado-TracTech
pm2 pm2 start ecosystem.config.js --only main

# Inicializar el server de staging
cd Staging-Backend-Desacoplado-TracTech
pm2 pm2 start ecosystem.config.js --only staging
```
#### 2.6.3 Backend en EC2

Consulta el [Manual de Despliegue](./manual-despliegue-tractores.md)

---

## 3. App local

### 3.1 Requisitos previos

#### 3.1.1 Herramientas necesarias
Instala las siguientes herramientas para probar la aplicación local en tu equipo local:

1. **Node.js:** Ejecuta el backend del sistema Harvester. [Descargar](https://nodejs.org/)
2. **Git:** Permite clonar el código fuente desde GitHub. [Descargar](https://git-scm.com/)
3. **Visual Studio Code** Editor de código.               [Descargar](https://code.visualstudio.com/)

### 3.2 Preparar ambiente de programación

#### 3.2.1 Clonar repositorio de Github

```bash
cd # Carpeta donde quieras almacenar la aplicación local
git clone https://github.com/CodeAnd-Co/App-Local-TracTech.git
cd App-Local-TracTech 
cd harvester-app
npm install
```

#### 3.2.2 Iniciar aplicación
```bash
# Estando en la carpeta de harvester-app
npm start
```

#### 3.3 Crear instalador de la aplicación
Existen varias formas de crear un instalador de una aplicación en Electron. Para la aplicación de harvester decidimos usar Electron-builder.
```bash
cd App-Local-TracTech
cd harvester-app
npm install --save-dev electron-builder
``` 
Dentro de nuestro package.json debemos incluir lo siguiente:
```json
"build": {
    "appId": "com.tractech.harvester",
    "win": {
      "target": [
        "nsis"
      ],
      "icon": "src/framework/utils/imagenes/HarvesterAppIcon.ico"
    },
    "nsis": {
      "oneClick": true,
      "installerIcon": "src/framework/utils/imagenes/HarvesterAppIcon.ico",
      "uninstallerIcon": "src/framework/utils/imagenes/HarvesterAppIcon.ico",
      "uninstallDisplayName": "Desinstalador Harvester App",
      "license": "LICENSE",
      "allowToChangeInstallationDirectory": false
    }
  },
```
Debemos asegurarnos que tengamos un icono en formato .ico para la aplicación, al igual que una licencia. Harvester esta bajo la licencia de MIT.

## 4. Pruebas del Sistema

### 4.1 Pruebas Manuales

* **SuperAdmin:** superadmin@cnhmx.com / Pruebas
* **Administrador:** juanpablo@cnhmx.com / Pruebas
* **Empleado:** galo@cnhmx.com / Pruebas

---

## 5. Despliegue

Ver [Manual de Despliegue](./manual-despliegue-tractores.md)

---

## 6. Documentación

### Swagger

```
IMPLEMENTACIÓN PENDIENTE
http://localhost:4000/api-docs
```

---

## 7. Referencias

* [Manual de Despliegue](./manual-despliegue-tractores.md)
* [Estrategia Técnica](./estrategia.md)
* [Manual de Prueba de Arquitectura](./manualDePruebaArquitectura.md)

---

## 8. Historial de Cambios

| Versión | Descripción                                        | Fecha      | Colaborador      |
| ------- | -------------------------------------------------- | ---------- | --------------   |
| 1.0     | Implementación inicial del Manual Técnico          | 19/05/2025 | Daniel Queijeiro |
| 1.1     | Añadir información de la aplicación local          | 21/05/2025 | Daniel Queijeiro |
