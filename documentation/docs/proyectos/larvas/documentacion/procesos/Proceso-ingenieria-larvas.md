---
title: 🌻 | PRL1 Ingeniería de software de TechNebrios
sidebar_position: 21
---

# 🌻 Proceso de ingenieria de software de TechNebrios

Proceso para establecer un flujo estructurado que garantice la construcción de alta calidad, la detección temprana de defectos y la verificación efectiva para cada historia de usuario.

## 🎯 Objetivo

- Establecer un flujo para el desarrollo de historias de usuario correctas.
- Identificar y corregir defectos en etapas tempranas del desarrollo.

## 📥 Entradas

1. Requerimientos o historias de usuario.
2. Estándares de codificación del proyecto.
3. Checklist de verificación de código del proyecto.
4. Checklist de análisis del proyecto.
5. Checklist de diseño del proyecto.

## ⚙️ Proceso

| Fase     |Descripción                                                    | Responsable             | Meta y práctica específica del CMMI                                        |
| -------- | -------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------- |
| **Análisis** | Realizar las tareas definidas para el proyecto en la fase de análisis del WBS  | Desarrollador. |  |
| | Definir un encargado de revisar el análisis que llene la [checklist de análisis](https://docs.google.com/document/d/1jJxhJx1XB6c_uC0Xv454qV2YoEVuMPm_U2Kq9hSIfAM/edit?usp=sharing) y la guarde una copia en la carpeta correspondiente. | Verificador | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación), **VER SP 3.1** (Realizar la verificación). |
|**Diseño** | Realizar las tareas definidas para el proyecto en la fase de diseño del WBS  | Desarrollador |  |
| | Definir un encargado de revisar el diseño llenando una copia de la [checklist de diseño](https://docs.google.com/document/d/1Ohhx9sQJd8ATYIdWR9o8iSQAHvQ2X4IANYub0c1DShA/edit?tab=t.0#heading=h.fhau7kjl46pa) y guardándola en la carpeta correspondiente, una vez completado estos pasos se puede actualizar la documentación para catalogar la US como READY. | Verificador | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación), **VER SP 3.1** (Realizar la verificación), **TS 2.3** (Diseñar las interfaces usando criterios). **RD 3.3** (Analizar los requerimentos para comprobar que sean necesarios y suficientes). |  |
| **Desarrollo** | Entrar a la rama de desarrollo del repositorio según la [estrategia de ramas del departamento](../../../../guias/github/git-branches). | Desarrollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
| | Ejecutar git pull origin para asegurar que se tiene la versión más actualizada. | Desarrollador. | **CM, SP 2.2** (Controlar los elementos de configuración). | 
| | Crear la rama de trabajo para el requisito o historia asignado siguiendo la estrategia de ramas del equipo. | Desarollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Verificar el código de los archivos en los que se va a trabajar, refactorizar en caso de ser necesario y listar defectos encontrados en el defect log del equipo. Se asigna un responsable y la solución al defecto. | Desarrollador. | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.2** (Establecer el entorno de verificación). |
|  | Los análisis de los defectos y la calidad se hacen en el defect log | Desarrollador. | **VER SP 3.2** (Analizar los resultados de la verificación). |
|  | Desarrollar el requisito siguiendo el diseño aprobado, y de acuerdo con los estándares definidos. | Desarollador. | **CM, SP 2.1** (Seguimiento de solicitudes de cambio). |
|  | Desarrollar el requisito o historia siguiendo los estándares del equipo y las tareas listadas en el WBS. | Desarollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Realizar las pruebas unitarias con Jest y cobertura de por lo menos 80%. | Desarollador. |  |
|  | Copiar la [checklist de desarrollo](https://docs.google.com/document/d/10-68gzaPPm3UeCcwQwWcxGkOm3dGCxgqGhlSB2qF8c8/edit?usp=sharing) en la carpeta correspondiente y verificar que el código cumple con lo estipulado. | Verificador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación) **VER SP 3.1** (Realizar la verificación). |
| **Pruebas** | Ejecutar las pruebas funcionales necesarias para validar la lógica del componente de forma aislada. Documentar los defectos en el defect log y corregirlos.| Tester. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos), **VER SP 1.2** (Establecer el entorno de verificación), **VER SP 3.1** (Realizar la verificación). **TS SP 3.1** |
|  | Ejecutar linting y corregir cualquier defecto encontrado.  | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
|  | Ejecutar pruebas de integración para garantizar que el componente funciona dentro de la totalidad del sistema. Documentar los defectos en el defect log y corregirlos.  | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
|  | Ejecutar pruebas de regresión en caso de que se haya modificado código existente. Documentar los defectos en el defect log y corregirlos.  | Desarollador. | **PPQA, SP 1.2** (Evaluar productos objetivamente y documentar hallazgos). |
| **Integración** | Crear el pull request que se apegue a la guía de PR del equipo. | Desarollador. |**CM, SP 2.2** (Controlar los elementos de configuración). |
|  | Aprobar formalmente el pull request una vez que estén completas las verificaciones y autorizar su integración a la rama principal. | QA. | **CM, SP 2.2** (Controlar los elementos de configuración), **VER SP 1.3** (Establecer los procedimientos y criterios de verificación), **VER SP 2.1** (Preparar la revisión entre pares), **VER SP 2.2** (Realizar la revisión entre pares), **VER SP 3.1** (Realizar la verificación). |
| **Trazabilidad** | Asegurar que el requisito cumple con la definición de DONE. Actualizar la matriz de trazabildiad del requisito para indicar que esta en DONE siguiendo el [proceso de trazabilidad](../../../../procesos/PR11-trazabilidad-requisitos.md). | Desarrollador. | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos), **VER SP 3.1** (Realizar la verificación). **RD 3.3** (Analizar los requerimentos para comprobar que sean necesarios y suficientes). |

## 📤 Salidas

1. Código verificado y validado que cumple con los estándares de calidad.
2. Checklist de código completada con evidencia del cumplimiento.
3. Checklist de análisis completada con evidencia del cumplimiento.
4. Checklist de diseño completada con evidencia del cumplimiento.
5. Checklist de Pull Request completada con evidencia del cumplimiento.
6. Registro de revisión con hallazgos y resoluciones.
7. Código integrado exitosamente en la rama de desarrollo.

## 📎 Recursos relacionados

- [Estrategia de ramas del departamento](../../../../guias/github/git-branches)
- [Guía de Pull Request](../../../../guias/github/git-pull.md)
- [Proceso de trazabilidad de requisitos](../../../../procesos/PR11-trazabilidad-requisitos.md)
- [Estándar de codificación del equipo](../../documentacion/estandar-codificacion.md)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
  | **Versión** | **Descripción**                                         | **Fecha**   | **Colaborador**                           |
  |-------------|---------------------------------------------------------|-------------|------------------------------------------|
  | **1.0.0**   | Adaptación del proceso                                    | 30/05/2025  |Emiliano Valdivia Lara, Sofia Osorio Suárez       |
  | **1.0.1**   | Mapear TS 2.3 | 02/06/2025  | Emiliano Valdivia Lara, Hiram Israel Mendoza López       |
    | **1.0.2**   | Mapear RD 3.3 | 06/06/2025  | Hiram Israel Mendoza López       |

  
</details>
