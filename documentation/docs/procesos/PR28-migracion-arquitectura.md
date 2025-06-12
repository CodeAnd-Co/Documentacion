---
title: 🏗️ | PR22 Cambio y migración de arquitectura
sidebar_position: 22
---

# 🏗️ Cambio y migración de arquitectura

Este proceso garantiza que cualquier cambio en la arquitectura de un proyecto se lleve a cabo de forma estructurada, minimizando riesgos y asegurando la continuidad de la calidad del software. Es fundamental para adaptarse a nuevas tecnologías o resolver problemas críticos sin afectar negativamente el sistema.

## 🎯 Objetivo

- Garantizar el cambio en la arquitectura de un proyecto de manera estructurada.
- Minimizar los riesgos de la migración del sistema.
- Asegurar que la calidad del software se mantenga ante cualquier imprevisto.

## 📥 Entradas

1. Manual de Arquitectura anterior.
2. Motivo del cambio.
3. Nombre(s) de la nueva arquitectura y/o tecnología a utilizar.

## ⚙️ Proceso

| Fase | Descripción | Responsable | Meta y práctica específica del CMMI |
| ---- | ----------- | ----------- | ----------------------------------- |
| **Análisis y evaluación** | Analizar los motivos del cambio de arquitectura y evaluar la probabilidad de futuros cambios. | Architecture Owner, Team members | **CM, SP 2.1** (Rastreo de peticiones de cambio), **RSKM, SP 3.1** (Planes de contingencia y mitigación de riesgos) |
| **Investigación** | Investigar la nueva arquitectura y recopilar documentación para capacitación y despliegue. | Architecture Owner | **PP, SP 2.5** (Planificar el conocimiento y habilidades necesarias) |
| **Actualización de documentación** | Generar documentos con base en la [plantilla de registro de decisiones arquitectónicas](/docs/next/plantillas/plantilla-registro-arquitectura). | Team Leader, Architecture Owner, Product Owner, Team Members | **TS, SP 1.1** (Elaborar soluciones alternativas y criterios de selección) |
| **Planificación** | Planificar la migración definiendo tiempos, recursos y medidas de contingencia. | Architecture Owner, Team Leader, Product Owner | **RD, SP 3.4** (Análisis de requerimientos para balancear necesidades y restricciones) |
| **Preparación del entorno de migración** | Configurar el entorno de la nueva arquitectura usando las guías documentadas. | Architecture Owner | **TS, SP 1.1**, **CM, SP 2.2** (Control de cambios a la configuración) |
| **Migración de los datos** | Recopilar e insertar datos de la arquitectura anterior (bases de datos, archivos, etc.). | Team Members, Architecture Owner | **CM, SP 2.2** (Control de cambios a la configuración) |
| **Implementación y pruebas** | Ejecutar pruebas de integración, rendimiento y seguridad; documentar y corregir incidencias. | Team Members, Architecture Owner | **REQM, SP 1.3** (Administrar cambios a los requisitos), **PP, SP 2.7** (Mantener elementos del plan) |
| **Despliegue y actualización** | Llevar a producción la nueva arquitectura y actualizar el Manual de Arquitectura. | Architecture Owner | **CM, SP 2.2** (Control e incorporación de cambios aprobados) |
| **Seguimiento y retroalimentación** | Monitorear el desempeño post-cambio y recopilar retroalimentación de usuarios. | Team Leader, Architecture Owner, Product Owner, Team Members | **CM, SP 2.2** (Control e incorporación de cambios aprobados) |

## 📤 Salidas

1. Manual de Arquitectura actualizado.
2. Sistema migrado.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------- | --------- | --------------- |
| **1.0.0** | Creación del proceso | — | Miguel Uribe, Emiliano Valdivia |
| **1.1.0** | Definición de cómo decidimos qué requisitos aceptar | — | Angélica Ríos Cuentas |
| **1.2.0** | Añadir SP 1.1 de PMC | 01/04/2025 | Juan Pablo C, Daniel C |
| **1.3.0** | Refactorización | 18/04/2025 | Diego Fuentes |
| **2.0.0** | Agregar práctica 1.1 de TS y corregir redacción | 26/05/2025 | Diego Fuentes |
| **2.1.0** | Corrección de historial de versión | 29/05/2025 | Valeria Zúñiga |
| **2.2.0** | Correcciones ortográficas y de enlaces | 29/05/2025 | Valeria Zúñiga, Nicolas Hood |
| **2.2.1** | Cambio de estilo del proceso | 29/05/2025 | Angel Mauricio Ramírez Herrera |

</details>
