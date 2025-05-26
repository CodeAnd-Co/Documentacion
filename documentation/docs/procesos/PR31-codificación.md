---
title: 🌻 | PR21 Codificación
sidebar_position: 21
---

# 🌻 Proceso de codificación

Proceso para establecer un flujo estructurado que garantice la creación de código de alta calidad, la detección temprana de defectos y la verificación efectiva en el desarrollo de software.

## 🎯 Objetivo

- Establecer un flujo para el desarrollo de código de alta calidad.
- Identificar y corregir defectos en etapas tempranas del desarrollo.
- Asegurar la verificación efectiva de código.

## 📥 Entradas

1. Requerimientos o historias de usuario asignadas en READY.
2. Estándares de codificación del proyecto.
3. Checklist de verificación de código.
4. Checklist de análisis.
5. Checklist de diseño.

## ⚙️ Proceso

| Fase     |Descripción                                                    | Responsable             | Meta y práctica específica del CMMI                                        |
| -------- | -------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------- |
| **Verificación** | Verificar que el análisis del componente esté completo, no sea ambiguo y siga la [checklist de análisis](https://docs.google.com/document/d/1dFEBxS_WGWtgCAAW1Sp57Vlgj06-X-od6HbNy2XnZKk/edit?tab=t.0#heading=h.fhau7kjl46pa). | Desarrollador. | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación), **VER SP 3.1** (Realizar la verificación). |
| | Verificar si el requisito o historia tiene diagrama de flujo. <br/> - Si tiene diagrama, verificar el diseño usando la [checklist de diseño](https://docs.google.com/document/d/17iPu9h6KR80SHw6kBhKG3mf926_mbkIipx1Aq1sfD2A/edit?tab=t.0#heading=h.fhau7kjl46pa) <br/> - Si no tiene diagrama, verificar la prioridad del requisito para saber si amerita uno. En caso de que sí, diseñarlo usando la misma checklist.  |
| **Desarrollo** | Entrar a la rama de desarrollo del repositorio según la [estrategia de ramas del departamento](../guias/github/git-branches). | Desarrollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
| | Ejecutar git pull origin para asegurar que se tiene la versión más actualizada. | Desarrollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
| | Crear la rama de trabajo para el requisito o historia asignado siguiendo la estrategia de ramas del equipo. | Desarollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Verificar el código de los archivos en los que se va a trabajar, refactorizar en caso de ser necesario y listar defectos encontrados en el defect log del equipo. Se asigna un responsable y la solución al defecto. | Desarrollador. | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.2** (Establecer el entorno de verificación). |
|  | Desarrollar el requisito siguiendo el diseño. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
|  | Desarrollar el requisito o historia siguiendo los estándares del equipo. | Desarollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Con ayuda de la [checklist de desarrollo](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa), verificar que el código cumple con lo estipulado. | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación) **VER SP 3.1** (Realizar la verificación). |
| **Pruebas** | Desarrollar y ejecutar pruebas previamente diseñadas para validar la funcionalidad implementada. Asegurar una cobertura adecuada. | Según la estrategia del equipo (Desarrollador o tester). | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos), **VER SP 1.2** (Establecer el entorno de verificación), **VER SP 3.1** (Realizar la verificación). |
|  | Ejecutar linting y otras verificaciones automáticas.  | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
| **Correcciones** | Corregir los problemas identificados. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
| **Integración** | Crear el pull request que se apegue a la guía de PR del equipo. En caso de que sea algo relacionado al departamento, seguir la [guía del departamento.](../guias/github/git-pull.md) | Desarollador. |**CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Aprobar formalmente el pull request siguiendo la [Checklist de Pull Request](../guias/github/git-pull) y autorizar su integración a la rama principal. | QA. | **CM, SP 2.2** (Controlar los elementos de configuración). (Nombre de la práctica específica), **VER SP 1.3** (Establecer los procedimientos y criterios de verificación), **VER SP 3.1** (Realizar la verificación). |
|  | Verificar que la integración fue exitosa con base a las pruebas de integración definidas en el STP de cada equipo y que no se introdujeron problemas nuevos. | Desarrollador, QA. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio), **VER SP 3.1** (Realizar la verificación). |
| **Trazabilidad** | Asegurar que el requisito cumple con la definición de DONE. Actualizar la matriz de trazabildiad del requisito para indicar que esta en DONE siguiendo el [proceso de trazabilidad](../procesos/PR11-trazabilidad-requisitos.md). | Desarrollador. | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos), **VER SP 3.1** (Realizar la verificación). |

## 📤 Salidas

1. Código verificado y validado que cumple con los estándares de calidad.
2. Checklist de código completada con evidencia del cumplimiento.
3. Checklist de análisis completada con evidencia del cumplimiento.
4. Checklist de diseño completada con evidencia del cumplimiento.
5. Checklist de Pull Request completada con evidencia del cumplimiento.
6. Registro de revisión con hallazgos y resoluciones.
7. Código integrado exitosamente en la rama de desarrollo.

## 📎 Recursos relacionados

- [Estrategia de ramas del departamento](../guias/github/git-branches)
- [Guía de Pull Request](../guias/github/git-pull.md)
- [Proceso de trazabilidad de requisitos](../procesos/PR11-trazabilidad-requisitos.md)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción**                                       | **Fecha**  | **Colaborador**                   |
    | ------------------- | ----------------------------------------------------- | ---------- | -------------------------------- |
    | **1.0**             | Creación del proceso                                  | 25/04/2025 | Daniel Queijeiro, Daniel Contreras|
    | **1.1**             | Cambios a pasos de integración y trazabilidad        | 26/04/2025 | Daniel Queijeiro, Diego Fuentes   |
    | **2.0**             | Agregar verificación, checklist de diseño, análisis y PR | 15/05/2025 | Emiliano Valdivia, Daniel Contreras |
    | **2.1**             | Agregar especificación de responsable y solución en el defect log en el paso del proceso | 26/05/2025 | Ian Julián Estrada Castro |
</details>
