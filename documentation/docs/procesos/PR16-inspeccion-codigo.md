---
title: PR16 Inspección de código
sidebar_position: 16
---

# Proceso de inspección de Código

:::warning Importante
Una inspección de código es una revisión manual del código fuente para verificar que cumple con las reglas de programación y diseño. Es costosa por lo que no es efectivo hacer una inspección en componentes pequeños. Lo mejor es hacer inspecciones en componentes **críticos** del proyecto. Un componente crítico es aquel que si tiene defectos, afecta los objetivos del proyecto.
:::

---

## Objetivo

- Verificar que el componente sigue los estándares calidad.

---

## Entradas

1. Componente listo para su inspección.

---

## Proceso

| **Fase**       | **Descripción**                                                                                           | **Responsable**     | **Meta y práctica específica del CMMI (VER)**                             |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------- |
| Preparación    | En caso de no haber realizado una inspección antes, leer la [guía para inspección de código](docs/guias/) | Miembros del equipo | **VER SP 2.1**(Preparar las revisiones entre pares)                       |
|                | Identificar el componente a inspeccionar.                                                                 | Miembros del equipo | **VER SP 1.1**(Seleccionar los productos de trabajo para la verificación) |
|                | Informar y seleccionar a los inspectores (idealmente de 4 a 6 personas).                                  | QA/Facilitador      | **VER SP 2.1**(Preparar las revisiones entre pares)                       |
| **Inspección** | Se define el tiempo de inspección y se inicia un cronómetro.                                              | QA/Facilitador      |                                                                           |
|                | El responsable del componente presenta y explica la funcionalidad del mismo.                              | Autor del código    |                                                                           |
|                | Se realiza la revisión de código utilizando la [checklist de código](../recursos/checklists.md).          | Inspectores         | **VER SP 3.1**(Realizar la verificación)                                  |
|                | Los inspectores registran los defectos en su defect log personal.                                         | Inspectores         | **VER SP 2.2** (Realizar las revisiones entre pares)                      |
|                | Los defectos detectados por todos los inspectores se consolidan en el defect log del proyecto.            | Inspectores         |                                                                           |
|                | Se detiene el cronómetro cuando todos los inspectores terminan de evaluar el componente.                  | Inspectores         |                                                                           |
| **Análisis**   | Se evalúan los datos obtenidos y se toman decisiones para implementar estrategias de mejora.              | Miembros del equipo | **VER SP 2.3**(Analizar los datos de las revisiones entre pares)          |

---

## Salidas

1. Defectos registrados

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**          | **Fecha**  | **Colaborador**           |
| ------------------- | ------------------------ | ---------- | ------------------------- |
| **1.0**             | Primera versión del PR26 | 10/04/2025 | Ian Julián Estrada Castro |
| **1.2**             | Refactorización          | 18/4/2025  | Diego Fuentes             |
