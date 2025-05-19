---
title: ☢️ | PR11 Comprensión y trazabilidad de requisitos
sidebar_position: 11
---

# ☢️  Proceso de comprensión y trazabilidad de requisitos

Este proceso asegura la correcta comprensión y la trazabilidad bidireccional de los requisitos, desde su definición hasta su implementación, facilitando el control y la calidad del desarrollo dentro de la organización.

## 🎯 Objetivo

- Establecer el proceso para mantener una trazabilidad bidireccional en los requisitos.

## 📥 Entradas

1. Requisitos definidos para un MVP (Producto Mínimo Viable).  
2. Requisitos definidos para un MBI (Incremento Mínimo de Negocio).

## ⚙️ Proceso

| **Fase**                                    | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                  | **Responsables**     | **Meta y práctica específica del CMMI**                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------------------------------- |
| **Definición de requisitos**                | Crear un índice en la Wiki del proyecto dentro de las carpetas _documentación/requisitos/_ que incluya los requisitos funcionales del MVP, del MBI y los no funcionales del proyecto.                                                                                                                                  | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Documentación de requisitos funcionales** | Crear un documento para cada requisito funcional dentro de las carpetas _documentación/requisitos/_ de la wiki de cada proyecto que incluya: <br/> - Número y nombre del requisito <br/> - Descripción de la historia de usuario <br/> - Criterios de aceptación <br/> - Diagrama de secuencia (si aplica) <br/> - Mockup/wireframe (si aplica) <br/> - Pruebas <br/> - Código <br/> - Cualquier otra documentación relevante basándose en la definición de READY y DONE de cada proyecto <br/> - Historial de cambios | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Vinculación de documentos**               | Incluir en índice de requisitos de la Wiki enlaces a cada uno de los documentos individuales de los requisitos del proyecto.                                                                                                                                                                                                                                                       | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Documentación de requisitos funcionales** | Al terminar de diseñar el requisito incluir la etiqueta `Ready` junto a la historia en el índice.                                                                                                                                                                                                                                                                                                                | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Referencia en el código**                 | Durante el desarrollo, cada implementación debe incluir un comentario dentro del código indicando el requisito al que corresponde. El comentario debe seguir el formato:`RF[num] Nombre del Requisito - [Link]`, donde el enlace dirigirá al diagrama de secuencia o mockup según corresponda (front, back).                                                                                     | Equipo de desarrollo | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
|                                             | Al terminar de codificar el requisito reemplazar la etiqueta `Ready` por `Done`.                                                                                                                                                                                                                                                                                                | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Vincular Pull Request (front y back)**    | Cuando se acepten los Pull requests se debe añadir los enlaces en la sección de "Código" de la documentación con el formato: <br/>`_<u>Pull request front-end: (enlace del PR)</u>_`. <br/>`_<u>Pull request back-end: (enlace del PR)</u>_`.                                                                                                                         | Equipo de desarrollo | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |

## 📤 Salidas

1. Documento consolidado con todos los requisitos funcionales y no funcionales, organizados por MVP y MBI.  
2. Documentos detallados para cada requisito funcional, incluyendo historia, criterios, diagramas y pruebas.  

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)  
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)  
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)  

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
  
  | **Tipo de versión** | **Descripción**                                                        | **Fecha**  | **Colaborador**                      |
  | ------------------- | -------------------------------------------------------------------- | ---------- | ---------------------------------- |
  | **1.0.0**           | Creación inicial del proceso.                                         | 09/03/2025 | Angélica Ríos Cuentas               |
  | **2.0.0**           | Refactorización para especificar ubicación de documentos y simplificar. | 18/04/2025 | Diego Fuentes                      |
  | **2.1.0**           | Agregado de trazabilidad en código y vinculación de Pull Requests.    | 13/05/2025 | Rodrigo A. Benítez, Valeria Zúñiga, Paola Garrido |
</details>
