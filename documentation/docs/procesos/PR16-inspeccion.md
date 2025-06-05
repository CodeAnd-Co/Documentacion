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

| **Fase**         | **Descripción**                                                                                                                                                                                       | **Responsable** | **Meta y práctica específica del CMMI**                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Preparación** | El responsable prepara el componente a inspeccionar.                                                                                                                                                         | Miembros del equipo   | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación).                                     |
|                        | Informar y seleccionar a los inspectores.                                                                                                                                                                    | Miembros del equipo   | **VER SP 2.1** (Preparar las revisiones entre pares)                                                             |
| **Inspección**  | En caso de que el ítem a inspeccionar sea código, leer la [Guía para inspección de código](/docs/next/guias/guia-inspeccion-codigo).                                                                        | Miembros del equipo   | **VER SP 2.1** (Preparar las revisiones entre pares)                                                             |
|                        | En caso de que el ítem a inspeccionar sea un proceso, leer la [Guía de inspección de procesos](/docs/next/guias/guia-inspeccion-procesos).                                                                    | Miembros del equipo   | **OPF SP 1.2** (Evaluar los procesos de la organización), **OPF SP 3.3** (Monitorizar la implementación) |
| **Validación**  | Analizar los resultados de la inspección o validación frente a los criterios definidos, clasificando causas de fallos y documentando hallazgos.                                                            | Autor de la mejora    | **VAL SP 2.2** (Analizar los resultados de la validación)                                                       |
|                        | Seguir el [Proceso de acciones correctivas](/docs/next/procesos/PR13-acciones-correctivas) y registrar los hallazgos del paso anterior.                                                                         | Autor de la mejora    | **PMC SP 2.1** (Analizar las cuestiones)                                                                         |
|                        | En caso de encontrar una deficiencia, verificar si existe una métrica asociada dentro del [Repositorio de métricas](https://docs.google.com/spreadsheets/d/1XDG_ke056cm2wpmGG72bZ9amSe92V6GOusNDnodMi0U/edit). | Autor de la mejora    | **OPF SP 1.1** (Establecer las necesidades de proceso de la organización)                                       |

## 📤 Salidas

1. Defect Log actualizado.
2. Matriz para monitorear procesos.

## 📎 Recursos relacionados

- [Checklist de código](../recursos/checklists.md)
- Defect Log

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
| **2.0.0** |  Refactorización del proceso   | 26/05/2025  | Sofia Osorio Suárez, Mariana Juárez Ramírez    |
| **2.0.1** |  Trazabilidad de VAL y OPF   | 28/05/2025  | Angel Mauricio Ramírez Herrera    |
| **2.0.2**   | Mapeo de PMC 2.1 en el proceso.                                           | 30/05/2025    | Paola María Garrido, Angel Mauricio Ramírez Herrera |

</details>
