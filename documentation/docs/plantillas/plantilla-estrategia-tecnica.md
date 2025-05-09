---
title: Plantilla estrategia tecnica
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

**Ejemplo:**

- Se agregaron espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- El detalle del estándar de codificación se podrá ver en el siguiente documento: [**Estandar de codificación**](/docs/standards/general).

---

## Patrones de diseño y diagrama de paquetes

### Backend

![alt text](/img/plantilla-diagrama-de-paquetes.png)

Este diagrama de paquetes representa la organización de un backend. Se divide en varias secciones principales:

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

Sección opcional para manejar vistas en caso de ser necesario.

### 4. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 5. Archivos Principales

- app.js: Punto de entrada del servidor.
- node_modules: Dependencias del proyecto.

---

### Historial de cambios

| **Tipo de Versión** | **Descripción**                                                                            | **Fecha**  | **Colaborador**                |
| ------------------- | ------------------------------------------------------------------------------------------ | ---------- | ------------------------------ |
| **1.0**             | Creación del plantilla                                                                     | 06/03/2025 | Diego Ricardo Alfaro Pinto     |
| **1.1**             | Refactorización. Cambio en las entradas. Cambio en el proceso. Cambio en las salidas.      | 06/03/2025 | Emiliano Valdivia Lara         |
| **1.2**             | Actualizar localidad de imagenes y links a esas imagenes para evitar errores en docusaurus | 07/03/2025 | Diego Ricardo Alfaro Pinto     |
| **1.3**             | Arreglar links rotos                                                                       | 10/03/2025 | Ángel Mauricio Ramírez Herrera |
| **1.4**             | Fix de links                                                                               | 16/03/2025 | Diego Fuentes                  |
