---
title: Comprensión y trazabilidad de requisitos
sidebar_position: 9
---
# Comprensión y trazabilidad de requisitos

**Última actualización:** 9 de marzo de 2025
**Versión:** 2.1

---

### Autores
| Nombre                            | Rol       |
| --------------------------------- | --------- |
| Angélica Ríos Cuentas             | Autor     |
---

### Objetivo

* Establecer el proceso para  mantener una trazabilidad bidireccional en los requisitos.
---

### Entradas

1. Requisitos definidos para un MVP
2. Requisitos definidos para un MBI
---

## Proceso de Comprensión y Trazabilidad de Requisitos


| **Fase**            | **Descripción**   | **Responsables**         | **Meta y práctica específica del CMMI**                       |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|--------------------------------------------------------------|
| **Definición de requisitos**                  | Generar un documento dentro del proyecto que incluya los requisitos funcionales del MVP, los requisitos funcionales del MBI y los requisitos no funcionales del proyecto.           | Equipo de producto       | REQM SP1.4: Mantener la trazabilidad bidireccional de los requisitos. |
| **Documentación de requisitos funcionales**   | Crear un documento para cada requisito funcional, que incluya: nombre y número del requisito, historia de usuario, criterios de aceptación, diagrama de secuencia (si aplica) y mockup/wireframe (si aplica).  **Nota:** Los diagramas de secuencia y mockups/wireframes se desarrollarán en la siguiente fase del proyecto. | Equipo de producto       | REQM SP1.4: Mantener la trazabilidad bidireccional de los requisitos. |
| **Vinculación de documentos**                 | Incluir en el documento general de requisitos enlaces a cada uno de los documentos individuales.                                                                                    | Equipo de producto       | REQM SP1.4: Mantener la trazabilidad bidireccional de los requisitos. |
| **Referencia en el código**                   | Durante el desarrollo, cada implementación debe incluir un comentario indicando el requisito al que corresponde. El comentario debe seguir el formato: `RF[num] Nombre del Requisito - [Link]`, donde el enlace dirigirá al diagrama de secuencia o mockup según corresponda (front, back). | Equipo de desarrollo     | REQM SP1.4: Mantener la trazabilidad bidireccional de los requisitos. |

---

### Salidas  

1. Un documento general que consolida los requisitos de cada proyecto, organizados en:  
   - **Requisitos funcionales**, clasificados en **MVP** (Producto Mínimo Viable) y **MBI** (Incremento Mínimo de Negocio).  
   - **Requisitos no funcionales**, que establecen condiciones de calidad y restricciones del sistema.  
2. Un documento individual para cada requisito funcional, detallando su historia de usuario, criterios de aceptación, diagramas e interfaces.  

