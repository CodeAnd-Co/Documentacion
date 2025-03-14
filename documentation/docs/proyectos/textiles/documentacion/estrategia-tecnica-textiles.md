---
title: Estrategia tecnica
---

### Autores

| Nombre           | Rol   |
| ---------------- | ----- |
| Diego Alfaro     | Autor |
| Daniel Contreras | Autor |
| Emiliano Gomez   | Autor |

**Última actualización por:** Diego Alfaro, 11 de marzo de 2025

---

# Plantilla Estrategia tecnica

## Objetivo

Establecer lineamientos claros para el desarrollo, asegurando calidad y consistencia.

---

## Repositorios

Utilizaremos 2 repositorios separados, tanto para el backend como para el frontend de la aplicación, de esta manera nuestro sistema puede ser modular.

## Estrategia de Ramas

![alt text](/img/manejo-de-ramas-textiles.png)

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

[_Priorizacion de requisitos_](https://docs.google.com/spreadsheets/d/1ToxcYLMjoZ0dPXlb2eTesLf_YXg8q86tE7bredXapYk/edit?gid=1686427669#gid=1686427669)

La especificación de historias de usuario se llevarán a cabo teniendo en cuenta la definición de [_Done_](/docs/intro/definicion-de-done/) y [_Ready_](/docs/intro/definicion-de-ready/) que se encuentran en este archivo:

---

## Gestión de Calidad y Pruebas

### Objetivo

Garantizar un software confiable a través de buenas prácticas de aseguramiento de calidad.

---

### Estrategia de Pruebas

Seguiremos una estrategia de pruebas detallada en el documento llamado [*STP*](Agregar link al stp de textiles)

---

## Documentación del código

### Objetivo

Documentar claramente las funcionalidades y código del sistema para lectura en caso de confusiones.

- Se agregaran espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- Para ver mas informacion de el estandar de codificacion ver el documento: [_Estandar de codificación_](/docs/guias/standards/general.md).
- Para la documentacion de los endpoints, usaremos SwaggerUI. Se puede encontrar un manual de su uso [*aqui*](Agregar el link al manual de swagger).

---

## Patrones de diseño y diagrama de paquetes

### Backend

![alt text](/img/diagrama-paquetes-textiles.png)

Este diagrama de paquetes representa la organización de un backend. Se divide en varias secciones principales:

### 1. Módulos

Cada módulo contiene:

- **Data**: Manejo de los datos estructurados en:
  - `Repositorios` Gestión de la base de datos.
  - `Modelos` Creacion de los modelos de datos.
- **Controladores**: Manejo de solicitudes HTTP, estructurado en:
  - `IndexControladores`: Archivo que contiene todos los controladores del modulo
  - `Controladores`: Implementación de la lógica de negocio de una sola funcionalidad.
- **Rutas**: Manejo de las rutas estructuradas en:
  - `IndiceRutas`: Punto de entrada de las rutas de todo el modulo.
  - `Rutas`: Definición de rutas de cada funcionalidad.

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

## Plantilla Pull Requests equipo textiles

```

## Descripción
<!-- Explica brevemente qué cambios se han realizado y el propósito del PR. -->

## ¿Qué se ha cambiado?
<!-- Lista los cambios más importantes en este PR. -->
- [ ] Cambio 1
- [ ] Cambio 2
- [ ] Cambio 3

## Capturas de pantalla (si aplica)
<!-- Agrega capturas de pantalla o GIFs si los cambios incluyen UI/UX. -->

## Issue relacionado
<!-- Enlaza el issue relacionado si aplica. Usa "Closes #XX" para cerrar el issue automáticamente. -->
Closes #XX

## Checklist
<!-- Asegúrate de completar esta lista antes de solicitar revisión. -->
- [ ] Mi código sigue las normas del proyecto
- [ ] He ejecutado pruebas y funcionan correctamente
- [ ] La documentación ha sido actualizada si es necesario

## ¿Cómo probarlo?
<!-- Instrucciones detalladas para que el revisor pueda probar los cambios. -->
1. Ir a...
2. Ejecutar...
3. Verificar...

```

## CI / CD

### CD

Para el despliegue continuo del backend utilizaremos un script de [_github actions_](/docs/guias/github/github-actions.md) paa hacer pull automaticamente y desplegar las ramas de produccion (main) y pruebas (staging), por lo que no tendremos que manejar estas acciones manualmente.

El uso y descripcion de este se encontrara en el [*manual de uso de github actions*](agregar el link al manual de github actions)
