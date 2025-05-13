---
title: Guía para liberar a producción
---

---

Esta guía describe los pasos y consideraciones necesarios para liberar una línea base en producción mediante un pull request a la rama _main_. Se debe seguir cada uno de los pasos y cumplir con la checklist de revisión antes de solicitar la aprobación final.

## 1. Preparación del código y el entorno

### 1.1. Actualización local

- Actualiza tu rama de trabajo con la última versión de _main_ o la rama base estable para evitar conflictos.
- Resuelve cualquier conflicto local y verifica que el código funcione correctamente en tu entorno de desarrollo.

### 1.2. Ejecución de pruebas

- Ejecuta pruebas de integración para confirmar que la nueva versión no introduce fallos.

### 1.3. Documentación y checklist

- Completa la **Checklist de revisión de ítems de trabajo** para confirmar que todos los ítems a liberar cumplen los criterios establecidos.

## 2. Realización del pull request

### 2.1. Creación del pull request (PR)

- Desde la rama de desarrollo, crea el PR hacia la rama _main_.
- Asegúrate de que el título y la descripción sean claros y detallados.
  - Sigue las guia de github.

## 3. Proceso de revisión y aprobación

### 3.1. Revisión por el equipo

- El PR debe ser revisado por los miembros designados (QA)
- Verifica que se hayan cumplido los siguientes puntos:
  - **Trazabilidad:** El código y la documentación están correctamente registrados en la matriz de configuración.
  - **Cumplimiento:** Se ha seguido la guia de github.

### 3.2. Aprobación del pull request

- Una vez que se revisara de manera consiente, hayan aprobado el PR y se hayan resuelto los posibles conflictos, se procede a la aprobación final.

## 4. Integración y despliegue en producción

### 4.1. Merge a la Rama _Main_

- Tras la aprobación, realiza el merge del PR a la rama _main_ (según la política de versionado) para mantener un historial claro.

### 4.2. Creación de línea base

- Registra la línea base en la matriz de identificación de elementos de configuración, actualizando la versión y fecha de liberación.

## 5. Validación post despliegue

### 5.1. Revisión en producción

- Realiza una verificación inicial en producción para confirmar que la nueva línea base se haya desplegado correctamente.
- Monitorea logs, métricas y alertas para identificar posibles incidencias.

### 5.2. Notificación y documentación

- Comunica formalmente al equipo sobre la nueva versión desplegada, junto con un resumen de los cambios.

---

Esta guía forma parte de la documentación oficial del departamento.

---

## Historial de cambios

<<<<<<<< HEAD:documentation/docs/guias/guia-liberar-produccion.md
| **Tipo de Versión** | **Descripción**             | **Fecha**  | **Colaborador**                        |
| ------------------- | --------------------------- | ---------- | -------------------------------------- |
| **1.0**             | Primera versión de la guía. | 07/04/2025 | Armando Méndez Castro                  |
| **1.1**             | Gestión de configuración.   | 24/04/2025 | Diego Fuentes                          |
| **1.2**             | Mover el archivo a gías.    | 08/05/2025 | Rodrigo Antonio Benítez De La Portilla |
========
| **Tipo de versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0**             | Primera versión de la guía. | 07/04/2025 | Armando Méndez Castro  |
| **1.1**             |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |
>>>>>>>> 8dbbc47d89446ec276eef38c9731ff416f8c0dd6:documentation/docs/guias/liberar-produccion.md
