---
title: ☢️ | PR11 Comprensión y trazabilidad de requisitos
sidebar_position: 11
---

# ☢️ Proceso de comprensión y trazabilidad de requisitos

Este proceso asegura la correcta comprensión y la trazabilidad bidireccional de los requisitos, desde su definición hasta su implementación, facilitando el control y la calidad del desarrollo dentro de la organización.

## 🎯 Objetivo

- Establecer el proceso para mantener una trazabilidad bidireccional en los requisitos.

## 📥 Entradas

1. Requisitos definidos para un MVP (Producto Mínimo Viable).
2. Requisitos definidos para un MBI (Incremento Mínimo de Negocio).

## ⚙️ Proceso

| **Fase**                                    | **Actividades**                                                                                                                                                                                                                                                                                                                                                                                                                               | **Responsables**     | **Meta y práctica específica del CMMI**                                                                                                                                                                                                                                  |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Definición de requisitos**                | Crea un índice en la Wiki para tu proyecto dentro de la carpeta "_documentación/requisitos/_" que incluya los requisitos funcionales del MVP, de los MBIs y los atributos de calidad.                                                                                                                                                                                                                                                         | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). **RD SP2.1** (Establecer requisitos del producto y de los componentes del producto), **RD, SP 3.2** ( Establecer una definición de la funcionalidad y de los atributos de calidad requeridos) |
| **Documentación de requisitos funcionales** | Crea un documento para cada requisito funcional dentro de la carpeta "_documentación/requisitos/_", asegúrate de incluir: - Número y nombre del requisito - Descripción de la historia de usuario - Criterios de aceptación - Diagrama de secuencia (si aplica) - Mockup/wireframe (si aplica) - Pruebas - Código - Cualquier otra documentación relevante basándose en la definición de READY y DONE de cada proyecto - Historial de cambios | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). **RD SP2.1** (Establecer requisitos del producto y de los componentes del producto), **RD, SP 3.2** ( Establecer una definición de la funcionalidad y de los atributos de calidad requeridos) |
|                                             | Crea una copia de la plantilla: [Plantilla de Mapa de Dependencias](https://docs.google.com/spreadsheets/d/1hz5GIibzKkaJ8YaTeMbx-nxblXaC9XCyG-1BDpHJ4Sg/edit) y utilízala para tener un registro de las interdependencias entre requisitos, y las dependencias entre los requisitos funcionales y los atributos de calidad.                                                                                                                   | Equipo de producto   | **RD SP2.2** (Asignar los requisitos a los componentes del producto). **RD SP2.1** (Establecer requisitos del producto y de los componentes del producto)                                                                                                                |
|                                             | En el índice de requisitos de tu proyecto, añade una sección de Dependencias y coloca el link a tu Mapa de Dependencias.                                                                                                                                                                                                                                                                                                                      | Equipo de producto   | **RD SP2.2** (Asignar los requisitos a los componentes del producto).                                                                                                                                                                                                    |
| **Vinculación de documentos**               | Incluye en el índice de requisitos enlaces a cada uno de los documentos individuales de los requisitos.                                                                                                                                                                                                                                                                                                                                       | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos).                                                                                                                                                                                               |
| **Etiquetado de requisitos funcionales**    | Al terminar de diseñar el requisito incluye la etiqueta `Ready` junto a la historia en el índice.                                                                                                                                                                                                                                                                                                                                             | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos).                                                                                                                                                                                               |
| **Referencia en el código**                 | Durante el desarrollo, cada implementación debe incluir un comentario dentro del código indicando el requisito al que corresponde. Para el comentario, sigue el formato:`RF[num] Nombre del Requisito - [Link]`, donde el enlace dirigirá al documento del requisito.                                                                                                                                                                         | Equipo de desarrollo | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos).                                                                                                                                                                                               |
| **Cambio de estado del requisito**          | Tras terminar de codificar un requisito, reemplaza la etiqueta `Ready` por `Done` en el índice de requisitos.                                                                                                                                                                                                                                                                                                                                 | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos).                                                                                                                                                                                               |
| **Vincular Pull Request (front y back)**    | Cuando se acepten los Pull Requests, añade los enlaces en la sección de "Código" en la documentación del requisito, asegurándote de tener el formato: `Pull request front-end: (enlace del PR)`. `Pull request back-end: (enlace del PR)`.                                                                                                                                                                                                    | Equipo de desarrollo | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos).                                                                                                                                                                                               |

## 📤 Salidas

1. Documento consolidado con todos los requisitos funcionales y no funcionales, organizados por MVP y MBI.
2. Documentos detallados para cada requisito funcional, incluyendo historia, criterios, diagramas y pruebas.
3. Mapa de Dependencias actualizado.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
  | **Versión** | **Descripción**                                                        | **Fecha**  | **Colaborador**                      |
  | ------------------- | -------------------------------------------------------------------- | ---------- | ---------------------------------- |
  | **1.0.0**           | Creación inicial del proceso.                                         | 09/03/2025 | Angélica Ríos Cuentas               |
  | **2.0.0**           | Refactorización para especificar ubicación de documentos y simplificar. | 18/04/2025 | Diego Fuentes                      |
  | **2.1.0**           | Agregado de trazabilidad en código y vinculación de Pull Requests.    | 13/05/2025 | Rodrigo A. Benítez, Valeria Zúñiga, Paola Garrido |
  | **2.2.0**           | Agregado sobre el Mapa de Dependencias y relación con SP 2.2 de RD.    | 25/05/2025 | Rommel Toledo C. |
  | **2.3.0**           | Reescritura para tener un lenguaje más adecuado.    | 25/05/2025 | Rommel Toledo C. |
  | **2.4.0**             | Agregar RD2.1 al proceso                                     | 26/05/2025 | Nicolas Hood Figueroa  
  | **2.4.1**     | Mapear RD 3.2  | 28/05/2025 | Hiram Israel Mendoza López |
  | **2.4.2**       | Correcciones ortográficas y de enlaces                       | 29/05/2025 | Valeria Zúñiga, Nicolas Hood                 |

</details>
