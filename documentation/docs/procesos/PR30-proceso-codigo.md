---
title: PR30 Proceso de desarrollo de código
sidebar_position: 30
---

# Proceso de desarrollo de código

---

## Objetivo

- Establecer un flujo para el desarrollo de código de alta calidad.
- Identificar y corregir defectos en etapas tempranas del desarrollo.
- Asegurar la verificación efectiva de código.

---

## Entradas

1. Requerimientos o historias de usuario asignadas.
2. Estándares de codificación del proyecto.
3. Checklist de verificación de código.

---

## Proceso

| Fase     |Descripción                                                    | Responsable             | Meta y práctica específica del CMMI                                        |
| -------- | -------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------- |
| **Desarrollo** | Crear la rama de trabajo para el requisito o historia asignado siguiendo la estrategia de ramas del equipo. | Desarollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Verificar si el requisito o historia tiene diagrama de flujo. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
|  | Si tiene diagrama, usarlo para desarrollar el requisito o historia. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
|  | Si no tiene diagrama, verificar la prioridad del requisito para saber si amerita uno. En caso de que sí, diseñarlo. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
|  | Desarrollar el requisito o historia siguiendo los estándares del equipo. | Desarollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Con ayuda de la [checklist de desarrollo](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa), verificar que el código cumple con lo estipulado. | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
| **Pruebas** | Desarrollar y ejecutar pruebas previamente diseñadas para validar la funcionalidad implementada. Asegurar una cobertura adecuada. | Según la estrategia del equipo (Desarrollador o tester). | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
|  | Ejecutar linting y otras verificaciones automáticas.  | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
| **Correcciones** | Corregir los problemas identificados. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
| **Integración** | Crear el pull request que se apegue a la guía de PR del equipo. En caso de que sea algo relacionado al departamento, seguir la [guía del departamento.](https://codeandco-wiki.netlify.app/docs/guias/github/git-pull) | Desarollador. |**CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Aprobar formalmente el pull request y autorizar su integración a la rama principal. | QA. | **CM, SP 2.2** (Controlar los elementos de configuración). (Nombre de la práctica específica). |
|  | Verificar que la integración fue exitosa y que no se introdujeron problemas nuevos. | Desarrollador, QA. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |




---

## Salidas

1. Código verificado y validado que cumple con los estándares de calidad.
2. Checklist de código completada con evidencia del cumplimiento.
3. Registro de la revisión con hallazgos y resoluciones.
4. Código integrado exitosamente en la rama de desarrollo.

---

## Historial de Cambios

| **Tipo de Versión**     | **Descripción**                                                                                | **Fecha**                           | **Colaborador**                                |
| ----------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------- |
    | **Versión 1.o** | Creación del proceso | 25/04/2025 | Daniel Queijeiro, Daniel Contreras |
