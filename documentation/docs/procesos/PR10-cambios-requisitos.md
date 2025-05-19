---
title: ⛏️ | PR10 Gestión de cambios de requisitos
sidebar_position: 10
---
# ⛏️ Gestión de cambios de requisitos

Proceso para administrar adecuadamente los cambios en los requisitos del proyecto, asegurando trazabilidad, aprobación y actualización formal para mantener el alineamiento con los objetivos.

## 🎯 Objetivo

- Definir el proceso para añadir, eliminar o modificar requisitos de manera controlada y documentada.

## 📥 Entradas

1. Historia de usuario a modificar, eliminar o añadir de la iteración correspondiente (acordada con stakeholders).

## ⚙️ Proceso


| Fase                                | Descripción                                                                                                                                                                                                                                                                                                                                                | Responsables                                   | Meta y práctica específica del CMMI                                                                                                                                                                                  |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Creación de la base de datos**   | Hacer una copia de la siguiente[plantilla](https://docs.google.com/spreadsheets/d/16xSeK0lslz1K5vRlzIaYuich8jrIOV8Ae__o9B-33ME/edit?usp=sharing) en la carpeta del proyecto correspondiente.                                                                                                                                                                | Colaborador                                    | **REQM SP 1.1** (Entender los requisitos)                                                                                                                                                                              |
| **Llenado de la base de datos**     | Registrar en la hoja de*Base de datos* la versión, los requisitos, la fecha y el estado actual de cada requisito.                                                                                                                                                                                                                                          | Colaborador                                    | **REQM SP 1.1** (Entender los requisitos)                                                                                                                                                                              |
| **Registrar solicitudes de cambio** | Completar la sección de*Creación de solicitud* de la hoja "Solicitudes de cambio" llenando los siguientes campos: <br/> **- Número de solicitud** <br/> **- Descripción del requisito**  <br/> **- Fecha de solicitud** <br/> **- Solicitante** <br/> **- Tipo de cambio**  <br/> **- Motivo del cambio** <br/> **- Nueva descripción del requisito**  | Colaborador                                    | **REQM SP 1.3** (Administrar cambios a los requisitos)                                                                                                                                                                 |
| **Evaluación del impacto**         | Completar en la sección de*Impacto* la fecha de entrega establecida para el requisito y sus dependencias.                                                                                                                                                                                                                                                  | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos)                                                                                                                                                           |
|                                     | Posteriormente, indicar si se requieren modificaciones a los entregables, si existe impacto en el cronograma ([más información en la *Política de cambio de requisitos*](../politicas/cambio-requisitos.md))., si se introducen nuevos riesgos o si se ven afectados los estándares establecidos.                                                       | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos)                                                                                                                                                           |
|                                     | Identificar la gravedad del impacto del cambio, utilizando la sección de*Criterios de gravedad* en la [*Política de cambio de requisitos*](../politicas/cambio-requisitos.md).                                                                                                                                                                            | Colaborador                                    | **REQM SP 1.3** (Administrar cambios a los requisitos)                                                                                                                                                                 |
| **Notificar**                       | Notificar a Product Owner (**PO**), Team Leader (**TL**) y Architecture Owner (**AO**) sobre la solicitud de cambio.                                                                                                                                                                                                                                        | Colaborador                                    | **REQM SP 1.3** (Administrar cambios a los requisitos)                                                                                                                                                                 |
| **Aprobación / negación**         | El**PO**, **TL** y **AO** deberán hacer la revisión de la solicitud de cambio y entregar su decisión final justificada, a más tardar un día después de haber recibido la solicitud. <br/><br/> Para esto, deberan usar la sección de *Criterios de aceptación* en la [*Política de cambio de requisitos*](../politicas/cambio-requisitos.md).      | Product Owner, Team Leader, Architecture Owner | **REQM SP 1.3** (Administrar cambios a los requisitos), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                 |
| **Actualización**                  | Asignar a una persona responsable de implementar el cambio y actualizar, según sea necesario, cualquiera de los siguientes elementos:<br/> **-Dependendencias <br/> -Entregables <br/> -Funciones clave <br/> -Cronograma y/o presupuesto <br/> -Plan de riesgos  <br/> -SRS (Requerimientos de especificación de software)  <br/>-Plan de valor ganado** | Encargado de cambios                           | **REQM SP 1.3** (Administrar cambios a los requisitos), **REQM SP 1.4** (Mantener la trazabilidad de los requisitos), **REQM SP 1.5** (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos) |
|                                     | Añadir fecha de cambio en el apartado de*Resolución* en la hoja de "Solicitud de cambio".                                                                                                                                                                                                                                                                 | Encargado de cambios                           | **REQM SP 1.3** (Administrar cambios a los requisitos)                                                                                                                                                                 |
|                                     | Actualizar la base de datos de requisitos, añadiendo la tabla de la nueva versión con los requisitos actualizados.                                                                                                                                                                                                                                        | Encargado de cambios                           | **REQM SP 1.5** (Asegurar el alineamiento entre el trabajo del proyecto y los requisitos).                                                                                                                             |
|                                     | Registrar la firma de todos los colaboradores en la hoja de*Compromiso*, donde cada integrante confirma su conocimiento y compromiso con los cambios realizados.                                                                                                                                                                                            | Colaborador                                    | **REQM SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                                                                          |

## 📤 Salidas

1. Historial de cambios de requisitos actualizado y validado.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>


| **Tipo de versión** | **Descripción**                                           | **Fecha**  | **Colaborador**                                              |
| -------------------- | ---------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| **1.0**              | Creación de proceso de gestión de cambios en requisitos. |            | Daniel Contreras, Miguel Uribe, Paola Garrido, Galo del Río |
| **1.1**              | Refactorización.                                          | 18/04/2025 | Diego Fuentes                                                |
| **1.2**              | Implementar acciones correctivas.                          | 24/04/2025 | Max Toscano                                                  |
| **2.0**              | Simplificación del proceso.                               | 14/05/2025 | Paola María Garrido                                         |

</details>
