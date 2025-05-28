---
title: PR28 Cambio y migración de arquitectura
sidebar_position: 28
---

# Proceso de cambio y migración de arquitectura

---

### Objetivo

- Garantizar el cambio en la arquitectura de un proyecto de manera estructurada.
- Minimizar los riesgos de la migración del sistema.
- Asegurar que la calidad del software siga igual aun con el imprevisto.

---

### Entradas

1. Manual de Arquitectura anterior.
2. Motivo del cambio.
3. Nombre(s) de la nueva arquitectura y/o tecnología a utilizar.

### Proceso

| Fase                                                  | Descripción                                                                                                                                                                                                    | Responsables                                                 | Meta y práctica específica del CMMI                                                                                                    |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Análisis y evaluación**                             | Analizar los motivos por el cual ocurrió el cambio de arquitectura en el proyecto y evaluar la probabilidad de un posible cambio futuro.                                                     | Architecture Owner, Team members                             | **CM 2.1** (Rastreo de peticiones de cambio a los productos de trabajo), **RSKM 3.1** (Planes de contingencia y mitigación de riesgos) |
| **Investigación**  | Investigar la nueva arquitectura y se recopila la documentación necesaria para la capacitación y despliegue.  | Architecture Owner | **PP 2.5** (Planificar el conocimiento y las habilidades necesarias para desarrollar el proyecto)   |
| **Actualización de documentación** | Generar un documento en base a la [plantilla de registro de decisiones arquitectónicas](/plantillas/plantilla-registro-arquitectura.md) para cada decisión nueva tomada sobre la arquitectura en la carpeta correspondiente del proyecto. | Team leader, Architecture Owner, Product Owner, Team Members. | **TS 1.1** (Elaborar soluciones alternativas en detalle junto con los criterios para su selección.) |
| **Planificación**                                     | Planificar la migración, estableciendo plazos temporales, recursos y medidas de contingencia para el cambio.                                                                                                 | Architecture Owner, Team leader, Product Owner               | **RD 3.4** (Análisis de requerimientos para balancear necesidades y restricciones)                                                     |
| **Preparación del entorno de migración**              | Hacer el despliegue del nuevo sistema, esto consistiendo en crear y configurar el entorno de la nueva arquitectura, haciendo uso de las guías obtenidas con anterioridad.                                      | Architecture Owner                                           | **TS 1.1** (Desarrollo de soluciones alternativas y criterios de selección) **CM 2.2** (Control de cambios a la configuración)         |
| **Migración de los datos (en caso de ser necesario)** | Recopilar todos los datos que todavía se encuentran en la arquitectura anterior y hacer la inserción de los mismos en la nueva arquitectura. Esto involucra bases de datos, ficheros, imágenes, archivos, etc. | Team members, Architecture Owner                             | **CM 2.2** (Control de cambios a la configuración)                                                                                     |
| **Implementación y pruebas**                          | Realizar pruebas de integración, rendimiento y seguridad en el entorno de migración. Documentar resultados, incidencias y efectuar las correcciones necesarias para asegurar la integridad del sistema.        | Team members, Architecture Owner                             | **REQM SP 1.3** (Administrar cambios a los requisitos), **PP SP 2.7** (Establecer y mantener los elementos del plan).                  |
| **Despliegue y actualización**                        | Llevar la nueva arquitectura a producción de forma controlada, actualizando el Manual de Arquitectura para reflejar los cambios aprobados y la nueva configuración del sistema.                              | Architecture Owner                                           | **CM 2.2** (Control de cambios a la configuración e incorporación de cambios aprobados)                                                |
| **Seguimiento y retroalimentación**                   | Monitorear el desempeño post-implementación, se recopila retroalimentación de los usuarios y se evalúa la efectividad del cambio.                                                                            | Team leader, Architecture Owner, Product Owner, Team Members | **CM 2.2**( Control de cambios a la configuración e incorporación de cambios aprobados)                                                |

---

### Salidas

1. Manual de Arquitectura actualizado.
2. Sistema Migrado.

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación del proceso   |  | Miguel Uribe, Emiliano Valdivia    |
| **1.1**             | Definición de cómo decidimos qué requisitos aceptar   | | Angélica Ríos Cuentas    |
| **1.2**             | Añadir SP 1.1 de PMC   | 1/4/2025 | Juan Pablo C y Daniel C |
| **1.3**             | Refactorización | 18/4/2025  | Diego Fuentes |
| **2.0**             | Agregar práctica 1.1 de TS y corregir redacción. | 26/05/2025  | Diego Fuentes |

