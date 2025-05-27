---
title: 🐥 | PR15 Inspección
sidebar_position: 15
---
# 🐥 Inspección

Proceso para identificar defectos en los componentes mediante inspecciones estructuradas, asegurando su conformidad con los requisitos especificados y contribuyendo a la mejora continua de los estándares de calidad.

## 🎯 Objetivo

- Identificar defectos en los componentes mediante inspecciones estructuradas.
- Asegurar la conformidad con los requisitos especificados.
- Contribuir a la mejora continua de los estándares de calidad.

## 📥 Entradas

1. Componente listo para su inspección.
2. Plantilla de revisión (Checklist).

## ⚙️ Proceso


| **Fase**         | **Descripción**                                                                                                                                   | **Responsable**     | **Meta y práctica específica del CMMI**                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------- |
| **Preparación** | En caso de que el ítem a inspeccionar sea código, leer la [guía para inspección de código](/docs/guias/inspeccion-codigo)                      | Miembros del equipo | **VER SP 2.1**(Preparar las revisiones entre pares)                        |
|                  | Identificar el componente a inspeccionar.                                                                                                          | Miembros del equipo | **VER SP 1.1**(Seleccionar los productos de trabajo para la verificación) |
|                  | Informar y seleccionar a los inspectores (idealmente de 4 a 6 personas).                                                                           | QA/Facilitador      | **VER SP 2.1**(Preparar las revisiones entre pares)                        |
| **Inspección**  | Se define el tiempo de inspección y se inicia un cronómetro.                                                                                     | QA/Facilitador      |                                                                            |
|                  | El responsable del componente presenta y explica la funcionalidad del mismo.                                                                       | Autor del código   |                                                                            |
|                  | Si el ítem a inspeccionar es código, entonces se realiza la revisión de código utilizando la [checklist de código](../recursos/checklists.md). | Inspectores         | **VER SP 3.1**(Realizar la verificación)                                  |
|                  | Los inspectores registran los defectos en su defect log personal.                                                                                  | Inspectores         | **VER SP 2.2** (Realizar las revisiones entre pares)                      |
|                  | Los defectos detectados por todos los inspectores se consolidan en el defect log del proyecto. Se asigna un responsable y la solución al defecto.                                                    | Inspectores         |                                                                            |
|                  | Se detiene el cronómetro cuando todos los inspectores terminan de evaluar el componente.                                                          | Inspectores         |                                                                            |
| **Análisis**    | Se evalúan los datos obtenidos y se toman decisiones para implementar estrategias de mejora. Los análisis de los defectos y la calidad se hacen en el defect log. log                                                      | Inspectores. | **VER SP 2.3**(Analizar los datos de las revisiones entre pares) **VER SP 3.2** (Analizar los resultados de la verificación).           |

## 📤 Salidas

1. Defect Log actualizado.

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Versión** | **Descripción**                                         | **Fecha**   | **Colaborador**            |
|-------------|---------------------------------------------------------|-------------|----------------------------|
| **1.0.0**   | Versión inicial del PR16                                | 10/04/2025  | Ian Julián Estrada Castro  |
| **1.1.0**   | Refactorización del proceso                             | 18/04/2025  | Diego Fuentes              |
| **1.2.0**   | Simplificación y mejora en la concisión del proceso    | 15/05/2025  | Ángel Mauricio Ramírez Herrera |
| **1.3.0**   | Cambio de nombre de archivo, actualización de título y aclaraciones | 15/05/2025  | Daniel Contreras Chávez    |
| **1.4.0**   | Agregar especificación de responsable y solución en el defect log en el paso del proceso | 26/05/2025 | Ian Julián Estrada Castro |
| **1.4.1**   | Mapear VER 3.2 | 27/05/2025  | Ian Julián Estrada Castro       |
</details>
