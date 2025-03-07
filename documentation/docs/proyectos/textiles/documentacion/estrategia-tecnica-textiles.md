---
title: Plantilla estrategia tecnica
---

### Autores

| Nombre           | Rol   |
| ---------------- | ----- |
| Diego Alfaro     | Autor |
| Daniel Contreras | Autor |
| Emiliano Gomez   | Autor |

**Última actualización por:** Diego Alfaro, 7 de marzo de 2025

---

# Plantilla Estrategia tecnica

## Objetivo

Establecer lineamientos claros para el desarrollo, asegurando calidad y consistencia.

---

## Repositorios

Utilizaremos 2 repositorios separados, tanto para el backend como para el frontend de la aplicación, de esta manera nuestro sistema puede ser modular.

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

[Insertar documento con la priorización de sus requerimientos]

La especificación de historias de usuario se llevarán a cabo teniendo en cuenta la definición de [**Done**](/docs/definicion-de-done.md) y [**Ready**](/docs/definicion-de-ready.md) que se encuentran en este archivo:

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

- Se agregaran espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- Para ver mas informacion de el estandar de codificacion ver el documento: [**Estandar de codificación**](/docs/guias/standards/general.md).

---

## Patrones de diseño y diagrama de paquetes

### Backend

![alt text](/img/plantilla-diagrama-de-paquetes.png)

Este diagrama de paquetes representa la organización de un backend. Se divide en varias secciones principales:

### 1. Módulos

Cada módulo contiene:

- **Data**:
  - `Repositorios` Gestión de la base de datos.
  - `Modelos` Creacion de los modelos de datos.
- **Controladores**: Manejo de solicitudes HTTP, estructurado en:
  - `IndiceRutas`: Punto de entrada de las rutas.
  - `Rutas`: Definición de rutas.
  - `Controladores`: Implementación de la lógica de negocio.

### 2. Util

- **Middlewares**: Funciones intermedias para procesar solicitudes.
- **Servicios**: Lógica reutilizable independiente de los controladores.

### 3. Views

Sección opcional para manejar vistas en caso de ser necesario.

### 4. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 5. Archivos Principales

- app.js: Punto de entrada del servidor.
- node_modules: Dependencias del proyecto.
