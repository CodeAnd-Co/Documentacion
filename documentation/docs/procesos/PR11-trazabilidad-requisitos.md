---
title: PR11 Comprensión y trazabilidad de requisitos
sidebar_position: 11
---

# Proceso de comprensión y trazabilidad de requisitos

---

### Objetivo

- Establecer el proceso para mantener una trazabilidad bidireccional en los requisitos.

---

### Entradas

1. Requisitos definidos para un MVP
2. Requisitos definidos para un MBI

---

## Proceso de Comprensión y Trazabilidad de Requisitos

| **Fase**                                    | **Descripción**                                                                                                                                                                                                                                                                                                            | **Responsables**     | **Meta y práctica específica del CMMI**                                    |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------- |
| **Definición de requisitos**                | Crear un documento en la Wiki del proyecto dentro de las carpetas *documentación/requisitos/* que incluya los requisitos funcionales del MVP, los requisitos funcionales de los MBI y los requisitos no funcionales del proyecto para que funcione como índice. | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Documentación de requisitos funcionales** | Crear un documento para cada requisito funcional dentro de las carpetas *documentación/requisitos/* de la wiki de cada proyecto que incluya: nombre y número del requisito, historia de usuario, criterios de aceptación, diagrama de secuencia (si aplica), mockup/wireframe (si aplica), y cualquier otra documentación relevante basándose en la definición de READY y DONE de cada proyecto. | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Vinculación de documentos**               | Incluir en el documento general de requisitos de la Wiki enlaces a cada uno de los documentos individuales de los requisitos del proyecto.     | Equipo de producto   | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Documentación de requisitos funcionales** | Al terminar de diseñar el requisito incluir la etiqueta `Ready` abajo del título.  | Equipo de producto | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Referencia en el código**                 | Durante el desarrollo, cada implementación debe incluir un comentario dentro del código indicando el requisito al que corresponde. El comentario debe seguir el formato:`RF[num] Nombre del Requisito - [Link]`, donde el enlace dirigirá al diagrama de secuencia o mockup según corresponda (front, back).  | Equipo de desarrollo | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
|   | Al terminar de codificar el requisito reemplazar la etiqueta `Ready` por `Done` abajo del título.  | Equipo de producto | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |



---

### Salidas

1. Un documento general que consolida los requisitos de cada proyecto, organizados en:
   - **Requisitos funcionales**, clasificados en **MVP** (Producto Mínimo Viable) y **MBI** (Incremento Mínimo de Negocio).
   - **Requisitos no funcionales**, que establecen condiciones de calidad y restricciones del sistema.
2. Un documento individual para cada requisito funcional, detallando su historia de usuario, criterios de aceptación, diagramas e interfaces.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                                                                                                                | **Fecha** | **Colaborador**                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **1.0**             | Creacion de proceso de gestión de riesgos                                                                                      | 9/3/2025 | Angélica Ríos Cuentas |
| **2.0**             | Refactorización y cambio para especificar dónde se crean los documentos.                                                       | 18/4/2025 | Diego Fuentes                             |
| **2.1**             | Pasos para actualizar estado del requisito en la RTM | 28/4/2025 | Diego Fuentes y Max Toscano |