---
title: Estrategia técnica TracTech
---

# Plantilla Estrategia técnica

## Objetivo

Establecer lineamientos claros para el desarrollo, asegurando calidad y consistencia.

---

## Repositorios

Utilizaremos 2 repositorios separados que manejarán:

- **App local**: La aplicación que estará empaquetada en electron para cada uno de los equipos del cliente y donde se hará el procesamiento de los datos de los reportes, así como la creación y modificación de los mismos.
- **Backend desplegado**: Este será el alojado en la instancia del EC2, donde se manejará el guardado de los datos como el control de acceso basado en roles, así como las plantillas creadas.

De esta manera nuestro sistema puede ser modular y las responsabilidades se dividen eficientemente.

## Estrategia de Ramas

![alt text](/img/manejo-de-ramas.png)

Utilizaremos 3 ramas principales:

- **Main**: Contiene el código que será desplegado en producción y sobre el que se maneja el versionamiento de la aplicación.
  - El código no debe tener problemas de integración o ejecución.
  - El código debe haber sido probado.
- **Staging**: Rama pre-productiva usada para preparar el release de las versiones y realizar pruebas de aceptación.
- **Develop**: Rama de desarrollo donde se mantiene la integración de todos los desarrollos del equipo.
- **Feature**: Ramas temporales destinadas para el código de uno o varios developers que trabajan en una característica.

---

## Gestión de Requerimientos

### Objetivo

Alinear las decisiones técnicas con los objetivos de negocio.

### Priorización basada en valor y riesgos

La priorización de requerimientos se puede encontrar aquí:

[Priorización de requerimientos](https://docs.google.com/spreadsheets/d/14zEYm84Y-QQ2gP_btGMyOinaKZQsw_wrYQQwqiqdSLY/edit?gid=1792238005#gid=1792238005)

La especificación de historias de usuario se llevarán a cabo teniendo en cuenta la definición de [**Done**](../definicion-done-tractores.md) y [**Ready**](../definicion-ready-tractores.md).

---

## Gestión de Calidad y Pruebas

### Objetivo

Garantizar un software confiable a través de buenas prácticas de aseguramiento de calidad.

---

### Estrategia de Pruebas

La estrategia que se seguirá para las pruebas será la siguiente:

- **STP**: [Software Test Plan TracTech](/docs/proyectos/tractores/documentacion/stp)

---

## Documentación del código

### Objetivo

Documentar claramente las funcionalidades y código del sistema para lectura en caso de confusiones.

- Se agregaron espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- El detalle del estándar de codificación se podrá ver en el siguiente documento: [**Estándar de codificación**](../../../standards/estandar-codificacion.md).

---

## Patrones de diseño y diagrama de paquetes

### Backend desacoplado

![alt text](./diagrama-de-paquetes-backend-desacoplado.png)

Este diagrama de paquetes representa la organización del backend alojado en la instancia del EC2. Se divide en varias secciones principales:

### 1. Módulos

Cada módulo contiene:

- **Data**: Gestión de la base de datos, incluyendo modelos y repositorios.
  - **Repositorios**: Abstracción de acceso de datos para separar la implementación de la lógica de negocio.
  - **Modelos**: Definen las estructuras de datos de la aplicación (esquemas, clases).
- **Rutas**: Definición de rutas.
- **Controladores**: Implementación de la lógica de negocio.

### 2. Util

- **Middlewares**: Funciones intermedias para procesar solicitudes.
- **Servicios**: Lógica reutilizable independiente de los controladores.

### 4. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 5. Archivos Principales

- app.js: Punto de entrada del servidor.
- node_modules: Dependencias del proyecto.

### Aplicación local de electron

<iframe
  frameborder="0"
  style={{ borderRadius: "1em" }}
  width="100%"
  height="800em"
  src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%23%257B%2522pageId%2522%253A%2522l-jaUNbbZnOwnRJqBNt3%2522%257D&layers=1&nav=1&title=diagrama%20de%20paquetes%20Electron.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%26export%3Ddownload"
></iframe>

Este diagrama de paquetes representa la organización de la app local de electron. Se divide en varias secciones principales:

### 1. Backend

Esta carpeta sigue una arquitectura basada en CLEAN.

- **Data**: Se encarga de la persistencia y recuperación de los datos. Cada módulo del proyecto tendrá su propia carpeta dentro de `Data`, que contendrá:

  - **Modelos**: Definen las estructuras de datos de la aplicación (esquemas, clases).

- **Domain**: Contiene la lógica de negocio pura de la aplicación.

  - **ModuloAPI**: Que encapsula el consumo de las APIs

- **CasosUso**: Que encapsulará la lógica y procesamiento de los diversos casos de uso. Dentro de la carpeta, cada módulo del proyecto tendrá su propia carpeta, que contendrá:

  - **CasoUso.js**: Que manejará la lógica de un caso de uso relacionado a su módulo.

- **Servicios**: Que contendrán scripts y clases reutilizables a lo largo del proyecto


### 2. Framework

Esta carpeta se encarga de la interfaz de usuario y la interacción con el usuario.

- **Vistas**: Son las interfaces que el usuario ve y con las que interactúa.
- **Utils**: Funciones auxiliares para el comportamiento de las vistas.

### 3. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 4. Electron

Se encarga de la integración de la aplicación con ElectronJS

- **main.js**: Archivo principal de Electron que crea la ventana, gestiona los eventos del sistema, inicia Electron y conecta el frontend con el backend local.

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                    | **Fecha** | **Colaborador**        |
|---------------------|------------------------------------| --------- | ---------------------- |
| **1.0**             | Primera versión de la estrategia técnica        | 06/03/2025 | Daniel Contreras Chávez      |
| **2.0**             | Se hizo el cambio del diagrama de paquetes de la aplicación local en electron | 25/03/2025   | Ian Julián Estrada Castro |
| **2.1**             | Se quitó ViewModels del diagrama de paquetes. Se actualizó diagrama de backend desacoplado. Se cambió a español | 27/03/2025 | Ian Julián Estrada Castro |
| **2.2** | Se actualizó el diagrama de paquetes de electron y su explicación | 25/04/2025 | Daniel Contreras |
| **2.3** | Se actualizó el diagrama de paquetes de electron y componentes | 13/05/2025 | Daniel Queijeiro |
| **2.3** | Se actualizó la definición de repositorios | 23/05/2025 | Daniel Queijeiro |