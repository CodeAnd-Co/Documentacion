---
title: PR3 Proceso de Definición de SRS
sidebar_position: 3
---

# Proceso de Definición de SRS

**Versión:** 4.3

## Objetivo

Definir, documentar y validar los requisitos del software, asegurando su alineación con las necesidades del cliente y la viabilidad técnica del desarrollo.

## Entradas

1. [**Lista de criterios para proveedores apropiados de requisitos.**](../recursos/lista-de-criterios.md)
2. Entrevistas con stakeholders
3. Benchmarking de soluciones similares

## Proceso

### Fases del proceso

| **Fase**                                        | **Descripción**                                                                                                                                                                                       | **Responsables**   | **Meta y práctica específica del CMMI**                                                                             |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Identificación de proveedores de requisitos** | Recolección de información de los proveedores apropiados de requisitos                                                                                                                                | Equipo de producto | **REQM SP 1.1** (Comprender los requisitos)                                                                         |
|                                                 | Generar una tabla con la información del proveedor, su rol, la autoridad que tiene, el tipo de requisitos que provee, y el método de comunicación que se tiene con él.                                | Product Owner      | **REQM SP 1.1** (Comprender los requisitos), **PP, SP 2.6** (Planificar la involucración de las partes interesadas) |
|                                                 | Generar un documento que establezca y unifique los compromisos y responsabilidades asumidas por el cliente y por los miembros del proyecto respectivo.                                                | Product Owner      | **PP, SP 3.3** (Identificar el soporte necesario y negociar los compromisos con las partes interesadas relevantes)  |
|                                                 | Durante las primeras 4 semanas realizar juntas con los provedores de requisitos usando el método de comunicación correspondiente para recopilar la información necesaria para definir requisitos.     | Product Owner      | **REQM SP 1.1** (Comprender los requisitos), **PP, SP 2.6** (Planificar la involucración de las partes interesadas) |
| **Recopilación y Priorización**                 | En base a la información recopilada definir requisitos del proyecto consulta la sección [_¿Cómo se decide qué requisitos aceptar?_](/docs/procesos/proceso-srs#cómo-se-decide-qué-requisitos-aceptar) | Equipo de producto | **REQM SP 1.1** (Comprender los requisitos)                                                                         |
|                                                 | Revisar y organizar las historias de usuario según su relevancia y viabilidad.                                                                                                                        | Equipo de Producto | **RD, SP 1.1** (Conocer las necesidades de las partes interesadas)                                                  |
|                                                 | Aplicar la técnica MoSCoW para priorizar.                                                                                                                                                             | Equipo de Producto |                                                                                                                     |
| **Identificación de Funcionalidades Clave**     | Desglosar las historias de usuario en funcionalidades específicas.                                                                                                                                    | Equipo de Producto | **RD, SP 3.2** (Establecer y mantener una definición de la funcionalidad requerida)                                 |
|                                                 | Evaluar si las funcionalidades son viables, tomando en cuenta su valor al negocio y alcanzabilidad.                                                                                                   | Equipo de Producto | **TS, SP 1.1** (Desarrollar soluciones alternativas), **PP, SP 1.1** (Comprender los requisitos)                    |
| **Definición del Alcance del MVP y MBI**        | Establecer qué funcionalidades serán parte del MVP y MBI.                                                                                                                                             | Equipo de Producto | **REQM, SP 1.2** (Obtener compromiso con los requisitos)                                                            |
|                                                 | Definir los criterios de éxito del MVP y MBI.                                                                                                                                                         | Equipo de Producto | **RD, SP 3.3** (Analizar requisitos)                                                                                |
|                                                 | Planificar las fases de desarrollo y lanzamiento.                                                                                                                                                     | Equipo de Producto | **PP, SP 2.1** (Establecer el presupuesto y el cronograma)                                                          |
| **Validación con Stakeholders**                 | Presentar la propuesta del SRS a clientes y equipo técnico.                                                                                                                                           | Equipo de Producto | **VAL, SP 2.1** (Realizar la validación de productos o componentes de productos seleccionados)                      |
|                                                 | Presentar la Especificación de Requerimientos de Software a clientes y asegurar la firma de validación del socio.                                                                                     | Equipo de Producto | **REQM, SP 1.2** (Obtener compromiso con los requisitos)                                                            |
|                                                 | Ajustar según retroalimentación sin perder el enfoque de viabilidad.                                                                                                                                  | Equipo de Producto |                                                                                                                     |

---

#### ¿Cómo se decide qué requisitos aceptar?

Para garantizar que los requisitos definidos sean viables y valiosos para el proyecto, se aplican los siguientes **criterios de aceptación**:

##### Criterios de Evaluación

| Criterio                   | Descripción                                                 | Prioridad              |
| -------------------------- | ----------------------------------------------------------- | ---------------------- |
| **Viabilidad técnica**     | ¿Contamos con las capacidades técnicas para desarrollarlo?  | **Alta (Obligatoria)** |
| **Viabilidad temporal**    | ¿Contamos con el tiempo necesario para implementarlo?       | **Alta (Obligatoria)** |
| **Valor al negocio**       | ¿El requisito aporta valor al proyecto?                     | **Alta (Obligatoria)** |
| **Alineación estratégica** | ¿Se alinea con la necesidad del socio?                      | Media (Recomendable)   |
| **Esfuerzo requerido**     | ¿Requiere un esfuerzo proporcional al beneficio que aporta? | Media (Recomendable)   |

##### Reglas para la Aceptación

- Un requisito será **aceptado** si cumple **los tres criterios obligatorios**:  
  `Viabilidad técnica`, `Viabilidad temporal` y `Valor al negocio`.
- Se recomienda que además cumpla **al menos uno** de los dos criterios restantes (`Alineación estratégica` o `Esfuerzo requerido`), para priorizarlo dentro del desarrollo.

---

## Salida

1. SRS validado por el socio.

## Historial de cambios

| **Tipo de Versión** | **Descripción**                                              | **Fecha** | **Colaborador**                                |
| ------------------- | ------------------------------------------------------------ | --------- | ---------------------------------------------- |
| **3.3**             | Corrige un paso del proceso del SRS                          | 28/2/2025 | Emiliano Gómez González                        |
| **4.0**             | Ahora abarca la obtención del SRS                            | 08/3/2025 | Valeria Zuñiga Mendoza, Angel Mauricio Ramirez |
| **4.1**             | Eliminación de práctica 3.3                                  | 23/3/2025 | Juan Pablo Chávez Leal                         |
| **4.2**             | Se mapeó la práctica PP SP 3.3                               | 01/4/2025 | Mariana Juárez Ramírez                         |
| **4.3**             | Definición de cuándo y cómo decidimos qué requisitos aceptar | 07/4/2025 | Angélica Ríos Cuentas                          |
