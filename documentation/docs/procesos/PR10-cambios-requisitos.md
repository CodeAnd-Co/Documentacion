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
| **Evaluación del requisito** | Evaluar el cambio del requisito o la adición de un requisito contestando las siguientes a las siguientes preguntas: ¿Contamos con el tiempo necesario para implementarlo? ¿Contamos con las capacidades técnicas para desarrollarlo? ¿Agrega valor al proyecto? ¿Se alinea con la necesidad del socio? ¿Es viable desarrollarlo?  | Colaborador | **REQM SP 1.1** (Comprender los requisitos) **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto)|          
| **Registrar solicitudes de cambio** | Completar la sección de *Creación de solicitud* de la hoja "Solicitudes de cambio".                                                                                                                                                                   | Colaborador                                    | **REQM SP 1.3** (Administrar cambios a los requisitos), **CM SP 1.1** (Identificar elementos de configuración)                                                                      
| **Evaluación del impacto**          | Identificar la gravedad del impacto, las dependencias del requisito, y evaluar el resto de áreas afectadas. Asignar las horas estimadas para su implementación con base a la gravedad. [*Criterios de gravedad*](/docs/procesos/cambio-de-requisitos#criterios-de-gravedad) y [*Afectación al cronograma*](/docs/procesos/cambio-de-requisitos#afectación-al-cronograma)                                                                                                                                       | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos), **DAR SP 1.1** (Establecer criterios de decisión), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos). **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto).                                                                                                                                                       |
| **Notificar**                       | Notificar a Product Owner, Team Leader y Architecture Owner sobre la solicitud de cambio.                                                                                                                                                            | Colaborador                                    | **PMC SP 1.3** (Proporcionar visibilidad sobre el progreso), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos)                                                                                                                                                                                                                         |
| **Aprobación / negación**           | Product Owner, Team Leader y Architecture Owner deberán hacer la revisión de la solicitud de cambio y entregar su decisión final junto con la justificación de la misma, a más tardar un día después de cuando se realizó la solicitud. [*Criterios de aprobación*](/docs/procesos/cambio-de-requisitos#criterios-de-aceptación)              | Product Owner, Team Leader, Architecture Owner | **REQM SP 1.3** (Administrar cambios a los requisitos), **PP SP 2.7** (Establecer y mantener los elementos del plan), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                                                                               |
| **Actualización**                   | En caso de ser necesario, actualizar dependendencias, entregables y/o funciones clave, cronograma y/o presupuesto, plan de riesgos y/o estándares. Insertar el cambio en el *Plan de valor ganado* correspondiente del equipo y priorizarlo.                                                                                                   | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos), **CM SP 1.2** (Controlar cambios en la línea base), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM SP 1.5** (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos), **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto). |
|                                     | Añadir fecha de cambio en el apartado de *Resolución* en la hoja de "Solicitud de cambio".                                                                                                                                                            | Colaborador                                    | **CM SP 1.3** (Establecer línea base), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos).                                                                                                                                                                                                                                            |
|                                     | Actualizar base de datos de requisitos, añadiendo la tabla de la nueva versión con los requisitos actualizados.                                                                                                                                      | Colaborador                                    | **CM SP 1.4** (Registrar y reportar estado de la configuración), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM SP 1.5** (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos).                                                                                                                |
|                                     | Registrar en la plantilla, la firma de todos los colaboradores de proyectos. Esta se registra en la hoja de 'compromiso', donde cada integrante colocará su nombre junto al campo de si esta enterado o no del cambio inicial o el resto de cambios. | Colaborador                                    | **SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                                                                                                                                                                                                           |
---

### Criterios de gravedad
- **Baja:** Menos de 4 horas
- **Media:** Entre 4 y 16 horas
- **Alta:** Más de 16 horas

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
| **1.0**             | Creacion de proceso de gestión de cambios en los requisitos.                                                                    |  | Daniel Contreras, Miguel Uribe, Paola Garrido, Galo del Rio |
| **1.1**             | Definición de cómo decidimos qué requisitos aceptar.                                                                            |  | Angélica Ríos                      |
| **1.2**             | Criterios de aceptación, gravedad y cronograma                                                                 |  | Daniel contreras                             |
| **1.3**             | Adición de prácticas específicas PMC                                                               | 1/4/2025 | Juan Pablo Chávez, Daniel contreras                             |
| **1.3**             | Refactorización                                                                   | 18/4/2025 | Diego Fuentes                             |
