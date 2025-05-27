---
title: 👨‍🍼 | PR4 Validación de entregables
sidebar_position: 4
---
# 👨‍🍼 Validación de entregables

Proceso encargado de asegurar que los productos o componentes desarrollados cumplan con los requisitos esperados y sean validados en un entorno controlado junto con los stakeholders, asegurando su aceptación formal.

## 🎯 Objetivo

- Preparar de manera efectiva todos los elementos necesarios para llevar a cabo la validación de productos o componentes, asegurando que se realicen bajo condiciones controladas, realistas y alineadas con los requisitos de los stakeholders.

## 📥 Entradas

1. Componentes terminados y verificados.
2. Requisitos funcionales y no funcionales definidos.
3. Matriz de validación base.

## ⚙️ Proceso

| Fase                                               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                | Responsable                    | Meta y práctica específica del CMMI                                                                                                                                                                                                               |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Preparación para la validación**         | Crear una copia del archivo [**Matriz de validación**](https://docs.google.com/spreadsheets/d/1mfGt57wGsCg6vTAcVsmOsTOH45h4zuD0IkMTe4XybO0/edit?usp=sharing), edítala conforme se siga el proceso y actualiza el estado de la validación. <br/><br/> ****NOTA**: Consulta la guía de la plantilla ubicada en la primera hoja de la matriz para comprender mejor los campos.                                                                     | Product Owner                  | **VAL, SP 1.3** (Establecer criterios).                                                                                                                                                                                                       |
| **Identificación de elementos a validar**   | Determinar qué productos o componentes del proyecto deben validarse e incluye el enlace de referencia correspondiente.                                                                                                                                                                                                                                                                                                                                     | Product Owner                  | **VAL, SP 1.1** (Seleccionar productos a validar).                                                                                                                                                                                            |
| **Métodos de validación**                  | Definir la fase en la que se realizará la validación, así como el método que se utilizará para explicar cómo se llevará a cabo.                                                                                                                                                                                                                                                                                                                      | Product Owner                  | **VAL, SP 1.1** , **RD, SP 3.5** (Validar los requisitos.), **VAL, SP 1.2** (Seleccionar el entorno),                                                                                                                            |
| **Criterios de aceptación y restricciones** | Establecer los criterios de aceptación y cualquier restricción que pueda limitar el proceso de validación.                                                                                                                                                                                                                                                                                                                                               | Product Owner                  | **VAL, SP 1.3**, **RD, SP 3.5** (Validar los requisitos.)                                                                                                                                                                               |
| **Necesidad del usuario final**              | Identificar, con base en las definiciones de operación, mantenimiento, formación y soporte, las necesidades del usuario final que deben validarse en relación con el producto o componente.                                                                                                                                                                                                                                                              | Todo el equipo                 | **VAL, SP 1.1**                                                                                                                                                                                                                               |
| **Definición del entorno de validación**   | Acordar con el stakeholder el entorno, herramientas y configuraciones necesarias para validar.                                                                                                                                                                                                                                                                                                                                                              | Product Owner                  | **VAL, SP 1.2**                                                                                                                                                                                                                               |
| **Validación**                              | Agendar cita con el stakeholder y realizar la validación según lo establecido previamente.                                                                                                                                                                                                                                                                                                                                                                | Product Owner / Todo el equipo | **VAL, SP 2.1** (Ejecutar validación)                                                                                                                                                                                                        |
|                                                    | Utilizar el proceso de [**Juntas efectivas**](../procesos/PR5-juntas-efectivas.md) para documentar en la minuta el feedback así como las desviaciones y observaciones de los resultados obtenidos.  <br/><br/>****Nota:** En el caso de los requisitos documentar si se identificó un nuevo requisito o se detectó un cambio. Para esto seguir el proceso de  [**Gestión de cambios de requisitos**](../procesos/PR10-cambios-requisitos.md). | Product Owner / Todo el equipo | **VAL, SP 2.1** (Ejecutar validación), <br/>**RD, SP 3.5** (Validar los requisitos.), <br/>**REQM, SP 1.3** (Administrar cambios a los requisitos), <br/>**PMC, SP 1.5** (Monitorear la participación de los interesados) |
|                                                    | Obtener la firma del stakeholder donde aprueba o rechaza los ítems de validación.                                                                                                                                                                                                                                                                                                                                                                         | Product Owner / Todo el equipo | **VAL, SP 2.1** (Ejecutar validación), **RD, SP 3.5** (Validar los requisitos.)                                                                                                                                                        |
| **Documentación de resultados**             | Registrar los hallazgos clave de las observaciones y desviaciones identificadas durante la validación.                                                                                                                                                                                                                                                                                                                                                     | Todo el equipo                 | **VAL, SP 2.1**                                                                                                                                                                                                                               |
|                                                    | Todo cambio, desviación, error o rechazo detectado durante la validación**debe registrarse obligatoriamente** en el **Defect Log**.                                                                                                                                                                                                                                                                                                           | Todo el equipo                 | **VAL, SP 2.2** (Analizar los resultados de la validación), **PPQA, SP 2.1** (Comunicar y resolver las no conformidades.)                                                                                                              |
| **Análisis de resultados**                  | Identificar patrones entre los resultados obtenidos y los esperados, para definir las [**acciones correctivas**](../procesos/PR13-acciones-correctivas.md) correspondientes.                                                                                                                                                                                                                                                                              | Todo el equipo                 | **VAL, SP 2.2** (Analizar resultados)                                                                                                                                                                                                         |

## ⛓️ Listado de ítems de trabajo a validar con el socio formador

1. Requisitos funcionales clave del sistema.
2. Prototipo de interfaz (mockups).
3. Manual de usuario.

## 📤 Salidas

1. Matriz de validación actualizada.
2. Lista de observaciones documentadas.
3. Registro de acciones correctivas en el Defect Log (si aplica).

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Tipo de versión** | **Descripción**                                   | **Fecha**  | **Colaborador**         |
| ------------------- | ------------------------------------------------- | ---------- | ----------------------- |
| **1.0.0**           | Creación del proceso de validación de entregables | 15/05/2025 | Arturo Sánchez          |
| **1.1.0**           | Identificación de fases y actualización           | 15/05/2025 | Rodrigo Antonio Benítez |
| **1.2.0**           | Inclusión de definición del entorno y validación  | 15/05/2025 | Mariana Juárez Ramírez  |
| **1.2.1**           | Agregado apartado de documentación de resultados  | 15/05/2025 | Juan Pablo Chávez Leal  |
| **1.2.2**           | Se agrego lista de ítems a validar con el socio   | 19/05/2025 | Juan Eduardo Rosas      |
| **1.2.3**           | Se especificó como definir los métodos de validación   | 20/05/2025 | Mariana Juárez, Sofía Osorio      |
| **1.2.4**           | Se especificó la validación de requisitos  | 25/05/2025 | Paola Garrido      |
| **1.2.5**           | Se especificó el uso del Defect Log  | 25/05/2025 | Arturo Sánchez, Paola Garrido, Rodrigo Antonio      |
</details>
