---
title: PR3 Proceso de Definición de SRS
sidebar_position: 3
---

# Proceso de Definición de SRS

**Última actualización:** 30 de marzo de 2025
**Versión:** 4.3

## Autores

| Nombre                  | Rol         |
| ----------------------- | ----------- |
| Emiliano Gómez González | Autor       |
| Juan Pablo Chávez Leal  | Modificador |
| Angélica Ríos Cuentas   | Modificador |
| Valeria Zuñiga Mendoza  | Modificador |
| Angel Mauricio Ramirez  | Modificador |
| Mariana Juárez Ramírez  | Modificador |

## Objetivo

Definir, documentar y validar los requisitos del software, asegurando su alineación con las necesidades del cliente y la viabilidad técnica del desarrollo.

## Entradas

1. [**Lista de criterios para proveedores apropiados de requisitos.**](../recursos/lista-de-criterios.md)
2. Entrevistas con stakeholders
3. Benchmarking de soluciones similares

## Proceso

### Fases del proceso

| **Fase**                                        | **Descripción**                                                                                                                                                        | **Responsables**   | **Meta y práctica específica del CMMI**                                                                             |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Identificación de proveedores de requisitos** | Recolección de información de los proveedores apropiados de requisitos                                                                                                 | Equipo de producto | **REQM SP 1.1** (Comprender los requisitos)                                                                         |
|                                                 | Generar una tabla con la información del proveedor, su rol, la autoridad que tiene, el tipo de requisitos que provee, y el método de comunicación que se tiene con él. | Product Owner      | **REQM SP 1.1** (Comprender los requisitos), **PP, SP 2.6** (Planificar la involucración de las partes interesadas) |
|                                                 | Generar un documento que establezca y unifique los compromisos y responsabilidades asumidas por el cliente y por los miembros del proyecto respectivo. | Product Owner      | **PP, SP 3.3** (Identificar el soporte necesario y negociar los compromisos con las partes interesadas relevantes) |
|                                                 | Durante las primeras 4 semanas realizar juntas con los provedores de requisitos usando el método de comunicación correspondiente para recopilar la información necesaria para definir requisitos.                           |       Product Owner      | **REQM SP 1.1** (Comprender los requisitos), **PP, SP 2.6** (Planificar la involucración de las partes interesadas) |
| **Recopilación y Priorización**                 | En base a la información recopilada definir requisitos del proyecto respondiendo a las siguientes preguntas: ¿Contamos con el tiempo necesario para implementarlo? ¿Contamos con las capacidades técnicas para desarrollarlo? ¿Agrega valor al proyecto? ¿Se alinea con la necesidad del socio? ¿Es viable desarrollarlo? | Equipo de producto | **REQM SP 1.1** (Comprender los requisitos)                                                                         |
|               | Revisar y organizar las historias de usuario según su relevancia y viabilidad.                                                                                         | Equipo de Producto | **RD, SP 1.1** (Conocer las necesidades de las partes interesadas)                                                  |
|                                                 | Aplicar la técnica MoSCoW para priorizar.                                                                                                                              | Equipo de Producto |                                                                                                                     |
| **Identificación de Funcionalidades Clave**     | Desglosar las historias de usuario en funcionalidades específicas.                                                                                                     | Equipo de Producto | **RD, SP 3.2** (Establecer y mantener una definición de la funcionalidad requerida)                                 |
|                                                 | Evaluar si las funcionalidades son viables, tomando en cuenta su valor al negocio y alcanzabilidad.                                                                    | Equipo de Producto | **TS, SP 1.1** (Desarrollar soluciones alternativas), **PP, SP 1.1** (Comprender los requisitos)                    |
| **Definición del Alcance del MVP y MBI**        | Establecer qué funcionalidades serán parte del MVP y MBI.                                                                                                              | Equipo de Producto | **REQM, SP 1.2** (Obtener compromiso con los requisitos)                                                            |
|                                                 | Definir los criterios de éxito del MVP y MBI.                                                                                                                          | Equipo de Producto | **RD, SP 3.3** (Analizar requisitos)                                                                                |
|                                                 | Planificar las fases de desarrollo y lanzamiento.                                                                                                                      | Equipo de Producto | **PP, SP 2.1** (Establecer el presupuesto y el cronograma)                                                          |
| **Validación con Stakeholders**                 | Presentar la propuesta del SRS a clientes y equipo técnico.                                                                                                            | Equipo de Producto | **VAL, SP 2.1** (Realizar la validación de productos o componentes de productos seleccionados)                      |
|                                                 | Presentar la Especificación de Requerimientos de Software a clientes y asegurar la firma de validación del socio.                                                      | Equipo de Producto | **REQM, SP 1.2** (Obtener compromiso con los requisitos)                                                            |
|                                                 | Ajustar según retroalimentación sin perder el enfoque de viabilidad.                                                                                                   | Equipo de Producto |                                                                                                                     |

## Salida

1. SRS validado por el socio.

## Historial de Cambios

| Autor                   | Descripción del cambio              | Versión |
| ----------------------- | ----------------------------------- | ------- |
| Emiliano Gómez González | Corrige un paso del proceso del SRS | 3.3     |
| Valeria Zuñiga Mendoza  | Ahora abarca la obtención del SRS   | 4.0     |
| Angel Mauricio Ramirez  | Ahora abarca la obtención del SRS   | 4.0     |
| Juan Pablo Chávez Leal  | Eliminación de práctica 3.3         | 4.1     |
| Angélica Ríos Cuentas   | Definición de cuándo sacamos los requisitos y cómo decidimos qué requisitos aceptar | 4.2  |
| Mariana Juárez Ramírez  | Se mapeó la práctica PP SP 3.3      | 4.3     |
