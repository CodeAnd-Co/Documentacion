---
title: Estándar para la Definición de Checklists
sidebar_position: 5
---

---
# Guía para Liberar a Producción
---

Esta guía describe los pasos y consideraciones necesarios para liberar una línea base en producción mediante un pull request a la rama *main*. Se debe seguir cada uno de los pasos y cumplir con la checklist de revisión antes de solicitar la aprobación final.

## 1. Preparación del Código y el Entorno

### 1.1. Actualización Local
- Actualiza tu rama de trabajo con la última versión de *main* o la rama base estable para evitar conflictos.
- Resuelve cualquier conflicto local y verifica que el código funcione correctamente en tu entorno de desarrollo.

### 1.2. Ejecución de Pruebas
- Ejecuta pruebas de integración para confirmar que la nueva versión no introduce fallos.

### 1.3. Documentación y Checklist
- Completa la **Checklist de Revisión de Ítems de Trabajo** para confirmar que todos los ítems a liberar cumplen los criterios establecidos.

## 2. Realización del Pull Request

### 2.1. Creación del Pull Request (PR)
- Desde la rama de desarrollo, crea el PR hacia la rama *main*.
- Asegúrate de que el título y la descripción sean claros y detallados.
  - Sigue las guia de github.

## 3. Proceso de Revisión y Aprobación

### 3.1. Revisión por el Equipo
- El PR debe ser revisado por los miembros designados (QA)
- Verifica que se hayan cumplido los siguientes puntos:
  - **Trazabilidad:** El código y la documentación están correctamente registrados en la matriz de configuración.
  - **Cumplimiento:** Se ha seguido la guia de github. 

### 3.2. Aprobación del Pull Request
- Una vez que se revisara de manera consiente, hayan aprobado el PR y se hayan resuelto los posibles conflictos, se procede a la aprobación final.

## 4. Integración y Despliegue en Producción

### 4.1. Merge a la Rama *Main*
- Tras la aprobación, realiza el merge del PR a la rama *main* (según la política de versionado) para mantener un historial claro.

### 4.2. Creación de Línea Base
- Registra la línea base en la matriz de identificación de elementos de configuración, actualizando la versión y fecha de liberación.

## 5. Validación Post Despliegue

### 5.1. Revisión en Producción
- Realiza una verificación inicial en producción para confirmar que la nueva línea base se haya desplegado correctamente.
- Monitorea logs, métricas y alertas para identificar posibles incidencias.

### 5.2. Notificación y Documentación
- Comunica formalmente al equipo  sobre la nueva versión desplegada, junto con un resumen de los cambios.

---

Esta guía forma parte de la documentación oficial del departamento.


---

## Registro de cambios

| Autor                          | Descripción del cambio                 | Versión |
| ------------------------------ | -------------------------------------- | ------- |
| Armando Méndez Castro       | Primera versión guía           | 1.0     |