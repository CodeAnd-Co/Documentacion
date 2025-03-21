---
title: Estrategia técnica TracTech
---

**Versión 1.0**

**Última modificación**: 6 de marzo de 2025 por Daniel Contreras Chávez

---

# Plantilla Estrategia tecnica

## Objetivo

Establecer lineamientos claros para el desarrollo, asegurando calidad y consistencia.

---

## Repositorios

Utilizaremos 3 repositorios separados que manejarán:

- **Backend local**: El backend que estará acoplado a electron en cada uno de los equipos del cliente y donde se hará el procesamiento de los datos de los reportes, así como la creación de y modificación de los mismos. Se empaquetará en la app de electron mediante una estrategia de empaquetado de submódulo.
- **Backend desplegado**: Este será el alojado en la instancia del EC2, donde se manejará el guardado de los datos como el control de acceso basado en roles y las plantillas creadas.
- **Frontend**: El frontend estará hosteado localmente en la aplicación de Electron.

De esta manera nuestro sistema puede ser modular y las responsabilidades se dividen eficientemente.

## Estrategia de Ramas

![alt text](/img/manejo-de-ramas.png)

Utilizaremos 3 ramas principales:

- **Master**: Contiene el código que será desplegado en producción y sobre el que se maneja el versionamiento de la aplicación.
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

La especificación de historias de usuario se llevarán a cabo teniendo en cuenta la definición de [**Done**](/docs/intro/definicion-de-done/) y [**Ready**](/docs/intro/definicion-de-ready/) que se encuentran en este archivo:

---

## Gestión de Calidad y Pruebas

### Objetivo

Garantizar un software confiable a través de buenas prácticas de aseguramiento de calidad.

---

### Estrategia de Pruebas

La estrategia que se seguirá para las pruebas será la siguiente:

- **STP**: [Llenar la plantilla con el plan de pruebas de su proyecto]

---

## Documentación del código

### Objetivo

Documentar claramente las funcionalidades y código del sistema para lectura en caso de confusiones.

- Se agregaron espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- El detalle del estándar de codificación se podrá ver en el siguiente documento: [**Estandar de codificación**](../../../guias/standards/general.md).

---

## Patrones de diseño y diagrama de paquetes

### Backend desacoplado

![alt text](/img/plantilla-diagrama-de-paquetes.png)

Este diagrama de paquetes representa la organización del backend alojado en la instancia del EC2. Se divide en varias secciones principales:

### 1. Módulos

Cada módulo contiene:

- **Data**: Gestión de la base de datos, incluyendo modelos y repositorios.
- **Controllers**: Manejo de solicitudes HTTP, estructurado en:
  - `RoutesIndexes`: Punto de entrada de las rutas.
  - `Routes`: Definición de rutas.
  - `Controllers`: Implementación de la lógica de negocio.

### 2. Util

- **Middlewares**: Funciones intermedias para procesar solicitudes.
- **Services**: Lógica reutilizable independiente de los controladores.

### 3. Views

Como el backend alojado en la instancia del EC2 no tendrá vistas, no incluímos esa sección.

### 4. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 5. Archivos Principales

- app.js: Punto de entrada del servidor.
- node_modules: Dependencias del proyecto.

### Aplicación local de electron

![alt text](./diagrama%20de%20paquetes%20Electron.drawio.png)

Este diagrama de paquetes representa la organización de la app local de electron. Se divide en varias secciones principales:

### 1. Backend

Esta carpeta sigue una arquitectura basada en CLEAN con MVC.

- **Core**: Encapsula la lógica de negocio. Cada módulo del proyecto tendrá su propia carpeta dentro de `Core`, que contendrá:

  - **Entities**: Representan los objetos de negocio con lógica encapsulada dentro del objeto.
  - **Repositories**: Contratos para el almacenamiento de los datos.
  - **Archivos principales**:
    - **useCase1.js**: Cada caso de uso tendrá su archivo ".js". No deben saber nada sobre HTTP, Express, bases de datos, ni ningún framework.

- **Infra**: Maneja conexiones con el backend remoto y almacenamiento local.

  - **Module**: Cada módulo tendrá su carpeta propia que contendrá:
    - **Database**: Implementa los repositorios definidos en `Core/module/repositories`.
  - **Api**: Comunicación con el backend alojado en el EC2.
  - **Services**: Lógica reutilizable alrededor del proyecto.

- **Presentation**: Define las rutas y controladores para interactuar con el frontend local. Cada módulo del proyecto tendrá su propia carpeta dentro de `Presentation`, que contendrá:

  - **RoutesIndexes**: Punto de entrada de las rutas.
  - **Routes**: Definición de las rutas de la API.
  - **Controllers**: Implementación de la lógica que interactúa con los casos de uso.

- **Archivo principal**:

  - **app.js**: Punto de entrada principal del backend. Su función es inicializar y configurar el servidor local de la aplicación.

## 2. Frontend

Esta carpeta usa MVVM para el manejo de las vistas

- **Views**: Son las interfaces que el usuario ve.
- **ViewModels**: Contienen la lógica para manejar la UI y la comunicación con el backend local.
- **Models**: Representación de la base de datos.
- **Utils**: .Funciones de ayuda.
- **Archivo principal**:
  - **index.js**: Punto de entrada de Electron.

### 3. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 4. Archivos Principales

- **main.js**: (Inicia Electron y conecta frontend con backend local)
- **node_modules**: Dependencias del proyecto.
