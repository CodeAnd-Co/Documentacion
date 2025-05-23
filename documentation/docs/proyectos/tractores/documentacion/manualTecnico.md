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

## 2. Requisitos previos

### 2.1 Herramientas necesarias

Instala las siguientes herramientas en tu equipo local:

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

## 3. Preparación del Proyecto

Después de instalar las herramientas para trabahar, clonaremos los repositorios y prepararemos el entorno de desarrollo local.

### 3.1 Clonar los Repositorios:

#### 3.1.1 Backend desacoplado:

```bash
cd ~
git clone https://github.com/CodeAnd-Co/Backend-Desacoplado-TracTech.git
cd Backend-Desacoplado-TracTech
npm install
```

#### 3.1.2 App local:

```bash
cd ~
git clone https://github.com/CodeAnd-Co/App-Local-TracTech.git
cd App-Local-TracTech
cd harvester-app
npm install
```

### 3.2 Crear base de datos Harvester

**MySQL Workbench:**

1. Abrir Workbench
2. Crear nueva conexión con el host, puerto, usuario y contraseña
3. Crear base:

```sql
CREATE DATABASE harvester;
```

4. Cargar y ejecutar el script `HARVESTER.sql`


#### Links de referencia

1. [HARVESTER.sql](https://drive.google.com/file/d/1mxIJnK36602K5GNVSg8o2zXxXfqooOmD/view?usp=sharing)
---

## 4. Estructura de Carpetas

Una vez clonado el código fuente, es importante conocer su estructura para facilitar navegación, desarrollo y pruebas.

**FrontEnd:**
<iframe
  frameborder="0"
  style={{ borderRadius: "1em" }}
  width="100%"
  height="800em"
  src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%23%257B%2522pageId%2522%253A%2522l-jaUNbbZnOwnRJqBNt3%2522%257D&layers=1&nav=1&title=diagrama%20de%20paquetes%20Electron.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%26export%3Ddownload"
></iframe>

**BackEnd:**
![Backend](./diagrama-de-paquetes-backend-desacoplado.png)



---

## 5. Configuración del Entorno

### 5.1 Crear archivo .env en el backend desacoplado

1. Crear el archivo .env a nivel de ./Backend-Desacoplado-TracTech

#### 5.1.1 Variables del Backend

```bash
PUERTO =
ANFITRION_BD=
USUARIO_BD=
CONTRASENA_BD=
NOMBRE_BD=
SECRETO_JWT=
DURACION_JWT=
SU=
```

### 5.1 Crear archivo constantes.js en la App local

1. Crear el archivo constantes.js a nivel de ./App-Local-TracTech/harvester-app/src/framework/utils/scripts

#### 5.1.1 Constantes de la app

```JS
// RUTA A SERVIDOR - ENTORNO MAIN
// const URL_BASE=

// RUTA A SERVIDOR - ENTORNO STAGING
// const URL_BASE=

// RUTA A SERVIDOR - ENTORNO LOCAL
// const URL_BASE = 

const LONGITUD_MAXIMA_NOMBRE_FORMULA=
const LONGITUD_MAXIMA_FORMULA=

module.exports = {
	URL_BASE,
	LONGITUD_MAXIMA_NOMBRE_FORMULA,
	LONGITUD_MAXIMA_FORMULA
}
```

---

#### Links de referencia

1. [.env](https://docs.google.com/document/d/1kf0ulFP1xDJwSHOHcgjOH16juCH7AgIilGYx5rKG6hg/edit?usp=sharing)
2. [constantes.js](https://docs.google.com/document/d/1PWI6vHMdoUOGs7xJ6BK7fUdmTrFR_gfuNQpypb7HtCw/edit?usp=sharing)
---

## 6. Ejecución del Proyecto

### 6.1 Ejecutar Backend Local

```bash
cd Backend-Desacoplado-TracTech
npm start
```

### 6.2 Ejecutar Aplicación

```bash
cd App-Local-TracTech
cd harvester-app
npm start
```

### 6.3 Backend en EC2

Consulta el [Manual de Despliegue](./manual-despliegue-tractores.md)

---

## 7. Pruebas del Sistema

### 7.1 Pruebas Manuales

* **SuperAdmin:** superadmin@cnhmx.com / Pruebas
* **Administrador:** juanpablo@cnhmx.com / Pruebas
* **Empleado:** galo@cnhmx.com / Pruebas

---

## 8. Despliegue

Ver [Manual de Despliegue](./manual-despliegue-tractores.md)

---

## 9. Documentación

### Swagger

```
IMPLEMENTACIÓN PENDIENTE
http://localhost:4000/api-docs
```

---

## 10. Referencias

* [Manual de Despliegue](./manual-despliegue-tractores.md)
* [Estrategia Técnica](./estrategia.md)
* [Manual de Prueba de Arquitectura](./manualDePruebaArquitectura.md)

---

## 11. Historial de Cambios

| Versión | Descripción                                        | Fecha      | Colaborador      |
| ------- | -------------------------------------------------- | ---------- | --------------   |
| 1.0     | Implementación inicial del Manual Técnico          | 19/05/2025 | Daniel Queijeiro |
| 2.0     | Actualizar diagrama de paquetes                    | 22/05/2025 | Diego Fuentes, Daniel Queijeiro |
| 2.1     | Mejorar el manual                                  | 23/05/2025 | Daniel Queijeiro |

