---
title: PR10 Gestión de cambios de requisitos
sidebar_position: 10
---

# Proceso de gestión de cambios de requisitos

---

### Objetivo

- Definir el proceso para añadir, eliminar o modificar requisitos.

---

### Entradas

1. Descripción del caso de uso/historia de usuario a modificar, eliminar o añadir.
2. Versión de la historia de usuario.
3. Fecha de la solicitud.
4. Motivo del cambio
5. Nueva descripción del requisito (Si aplica).

---

### Proceso

| Fase                                | Descripción                                                                                                                                                                                                                                          | Responsables                                   | Meta y práctica específica del CMMI                                                                                                                                                                                                                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Creación de la base de datos**    | Hacer una copia de la siguiente [plantilla](https://docs.google.com/spreadsheets/d/16xSeK0lslz1K5vRlzIaYuich8jrIOV8Ae__o9B-33ME/edit?usp=sharing) en la carpeta del proyecto correspondiente.                                                         | Colaborador                                    | **REQM SP 1.1** (Entender los requisitos)                                                                                                                                                                                                                                                                                                          |
| **Llenado de la base de datos**     | Colocar versión, requisitos, fecha y estado actual de los requisitos.                                                                                                                                                                                | Colaborador                                    | **REQM SP 1.1** (Entender los requisitos)                                                                                                                                     |
| **Evaluación del requisito** | Evaluar el cambio/adición del requisito respondiendo las siguientes preguntas: <br/> -¿Contamos con el tiempo necesario para implementarlo? <br/> -¿Contamos con las capacidades técnicas para desarrollarlo? <br/> -¿Agrega valor al proyecto? <br/> -¿Se alinea con la necesidad del socio? <br/> -¿Es viable desarrollarlo?  | Colaborador | **REQM SP 1.1** (Comprender los requisitos) **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto)|          
| **Registrar solicitudes de cambio** | Completar la sección de *Creación de solicitud* de la hoja "Solicitudes de cambio" llenando los siguientes campos: <br/> **- Número de solicitud**: número consecutivo único para cada solicitud de cambio (*ej. 001, 002, 003…*). <br/> **- Descripción del requisito**: redactar el requisito a modificar (versión previa registrada en el proyecto). <br/> **- Fecha de solicitud**: fecha en la que se recibe la solicitud de cambio (formato *DD/MM/AAAA*). <br/> **- Solicitante**: nombre de la persona que solicita el cambio. <br/> **- Tipo de cambio**: seleccionar el tipo de cambio (adición, modificación, eliminación). <br/> **- Motivo**: descripción breve de la razón del cambio. <br/> **- Nueva descripción del requisito**: redactar el requisito nuevo/actualizado siguiendo el estilo de redacción de los requisitos del proyecto.  | Colaborador                                    | **REQM SP 1.3** (Administrar cambios a los requisitos), **CM SP 1.1** (Identificar elementos de configuración)                                                                      
| **Evaluación del impacto**          | Identificar la gravedad del impacto, las dependencias del requisito, y evaluar el resto de áreas afectadas. Asignar las horas estimadas para su implementación con base a la gravedad. [*Criterios de gravedad*](/docs/procesos/PR10-cambios-requisitos#criterios-de-gravedad) y [*Afectación al cronograma*](/docs/procesos/PR10-cambios-requisitos#afectación-al-cronograma)                                                                                                                                       | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos), **DAR SP 1.1** (Establecer criterios de decisión), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos). **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto).                                                                                                                                                       |
| **Notificar**                       | Notificar a Product Owner, Team Leader y Architecture Owner sobre la solicitud de cambio.                                                                                                                                                            | Colaborador                                    | **PMC SP 1.3** (Proporcionar visibilidad sobre el progreso), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos)                                                                                                                                                                                                                         |
| **Aprobación / negación**           | Product Owner, Team Leader y Architecture Owner deberán hacer la revisión de la solicitud de cambio y entregar su decisión final junto con la justificación de la misma, a más tardar un día después de cuando se realizó la solicitud. [*Criterios de aprobación*](/docs/procesos/PR10-cambios-requisitos#criterios-de-aceptación)              | Product Owner, Team Leader, Architecture Owner | **REQM SP 1.3** (Administrar cambios a los requisitos), **PP SP 2.7** (Establecer y mantener los elementos del plan), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                                                                               |
| **Actualización**                   | En caso de ser necesario, actualizar dependendencias, entregables y/o funciones clave, cronograma y/o presupuesto, plan de riesgos y/o estándares. Actualizar el requisito en el *SRS*. Insertar el cambio en el *Plan de valor ganado* correspondiente del equipo y priorizarlo.                                                                                                   | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos), **CM SP 1.2** (Controlar cambios en la línea base), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM SP 1.5** (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos), **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto). |
| | Seguir el proceso de [trazabilidad de requisitos](/docs/procesos/PR11-trazabilidad-requisitos) para generar la matriz de trazabilidad de los nuevos requisitos. | Colaborador | **REQM SP1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
|                                     | Añadir fecha de cambio en el apartado de *Resolución* en la hoja de "Solicitud de cambio".                                                                                                                                                            | Colaborador                                    | **CM SP 1.3** (Establecer línea base), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos).                                                                                                                                                                                                                                            |
|                                     | Actualizar base de datos de requisitos, añadiendo la tabla de la nueva versión con los requisitos actualizados.                                                                                                                                      | Colaborador                                    | **CM SP 1.4** (Registrar y reportar estado de la configuración), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM SP 1.5** (Asegurar el alineamiento entre el trabajo del proyecto y los requisitos).                                                                                                                |
|                                     | Registrar la firma de todos los colaboradores del proyecto en la plantilla. Esta se registra en la hoja *Compromiso*, donde cada integrante debe confirmar su compromiso con los cambios realizados. | Colaborador                                    | **SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                                                                                                                                                                                                           |
---

### Criterios de gravedad

| Impacto | Descripción | Ejemplos | Esfuerzo estimado |
| ------- | ----------- | - | - |
|   **Bajo**  | Cambios estéticos o de bajo riesgo que no afectan la operación si no se implementan. | - Cambios en la interfaz de usuario sin impacto funcional  <br/>- Corrección de errores tipográficos <br/>- Actualización menor en documentación interna | Menos de 4 horas 
|  **Medio**  | Afecta funcionalidades importantes pero no críticas, puede afectar la experiencia del usuario pero no detiene la operación completa. | - El cambio mejora un módulo secundario <br/> - El cambio corrige errores que tienen soluciones alternativas (workarounds) disponibles <br/> - El cambio optimiza procesos internos | Entre 4 y 16 horas
|  **Alto**   | Afecta funcionalidades principales (core) del sistema, es necesario para cumplir requisitos regulatorios/legales, la ausencia del cambio puede interrumpir o detener la operación de usuarios finales. | - El cambio corrige violaciones regulatorias <br/> - El cambio repara fallos que bloquean procesos críticos <br/> - El cambio evita pérdida de datos importantes | Más de 16 horas



### Criterios de aceptación

Los líderes del equipo deberán evaluar cada solicitud de cambio considerando los siguientes criterios, cada uno con un peso asignado. Para que un cambio sea aprobado, deberá cumplir con al menos el **75% del puntaje total posible** (es decir, 3.75 de un total de 5 puntos).

#### Tabla de criterios con peso

| Criterio                   | Descripción                                                                                                                                      | Peso (%) |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| **Factibilidad Técnica**   | El equipo tiene la capacidad técnica de implementar el cambio sin comprometer la estabilidad del sistema.                                        | 30%      |
| **Disponibilidad de tiempo** | La implementación del cambio es viable dentro del cronograma sin afectar entregas críticas.                                                       | 25%      |
| **Valor agregado**         | El cambio mejora la experiencia del usuario, la funcionalidad del sistema o la alineación con los objetivos del cliente.                         | 30%      |
| **Compatibilidad**         | No genera conflictos graves con otros requisitos u otros módulos del sistema.                                                                   | 15%      |

#### Forma de evaluación

Cada criterio se evalúa en una escala del 1 al 5:
- **1 = Muy bajo**
- **2 = Bajo**
- **3 = Medio**
- **4 = Alto**
- **5 = Muy alto**

Se multiplica el puntaje asignado por el peso del criterio. Por ejemplo, si “Factibilidad técnica” se evalúa como 4, se obtiene 4 × 30% = **1.2 puntos**.

#### Aprobación del cambio

- La solicitud será **aprobada** si el **puntaje total es mayor o igual a 3.75** (de un máximo de 5).
- La solicitud será **rechazada** si no alcanza ese umbral.
- Las solicitudes con puntajes entre **3.5 y 3.75** pueden entrar en una **segunda revisión**, con propuestas de mitigación o ajustes antes de tomar la decisión final. 
- Las solicitudes deben cumplir con al menos uno de los siguientes principios, además de superar el porcentaje mínimo en la evaluación:
  - **Corrección de defectos críticos:** soluciona errores/deficiencias graves detectadas durante el uso del sistema. 
  - **Mejora de valor para el usuario:** representa una mejora importante en la funcionalidad, usabilidad o satisfacción del cliente. 
  - **Cumplimiento de requisitos legales o normativos:** es necesario para cumplir nuevas regulaciones o estándares del departamento/empresa. 
  - **Solicitud formal del cliente:** proviene de una petición formal del cliente y es esencial para satisfacer sus expectativas. 
  - **Optimización del sistema:** optimiza el rendimiento, la eficiencia o el mantenimiento del sistema sin impactar negativamente en el alcance o el cronograma. 


### Afectación al cronograma
- Comparar el esfuerzo estimado con la capacidad del equipo para determinar si hay margen para absorber el cambio.
- Identificar si el cambio afecta módulos críticos o entregas prioritarias.
- Evaluar si es necesario reprogramar tareas existentes o reasignar recursos.

---

### Salidas

1. Control de cambios de requisitos
2. Historial de cambios de requisitos


## Historial de Cambios

| **Tipo de Versión** | **Descripción**                                                                                                                | **Fecha** | **Colaborador**                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **1.0**             | Creación de proceso de gestión de cambios en los requisitos.                                                                    |  | Daniel Contreras, Miguel Uribe, Paola Garrido, Galo del Río |
| **2.0**             | Definición de cómo decidimos qué requisitos aceptar.                                                                            |  | Angélica Ríos                      |
| **3.0**             | Criterios de aceptación, gravedad y cronograma.                                                                 |  | Daniel Contreras                             |
| **3.1**             | Adición de prácticas específicas PMC.                                                               | 1/4/2025 | Juan Pablo Chávez, Daniel Contreras                             |
| **3.2**             | Refactorización.                                                                   | 18/4/2025 | Diego Fuentes                             |
| **4.0**             | Correcciones de criterios de gravedad y criterios de aceptación, guía para llenar el registro de cambios.    |      22/04/2025        |  Max Toscano
| **4.1**             |  Implementar acciones correctivas |      24/04/2025        |  Max Toscano 