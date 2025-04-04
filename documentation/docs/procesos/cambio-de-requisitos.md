---
title: PR9 Gestión de cambios de requisitos
sidebar_position: 9
---

# Gestión de cambios de requisitos

**Última actualización** 1 de Abril de 2025

---

### Autores

| Nombre                          | Rol      |
| ------------------------------- | -------- |
| Daniel Contreras Chávez         | Autor    |
| Paola Garrido Montes            | Autor    |
| Miguel Angel Uribe Esquivel     | Co-autor |
| Galo Alejandro del Rio Viggiano | Co-autor |
| Angélica Ríos Cuentas           | Modificador |

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
| **Actualización**                   | En caso de ser necesario, actualizar dependendencias, entregables y/o funciones clave, cronograma y/o presupuesto, plan de riesgos y/o estándares.                                                                                                   | Colaborador                                    | **REQM SP 1.4** (Mantener la trazabilidad de los requisitos), **CM SP 1.2** (Controlar cambios en la línea base), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM SP 1.5** (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos), **REQM, SP 1.2** (Obtener el compromiso sobre los requisitos), **PMC, SP 1.1**(Monitorizar los parámetros de planificación del proyecto). |
|                                     | Añadir fecha de cambio en el apartado de *Resolución* en la hoja de "Solicitud de cambio".                                                                                                                                                            | Colaborador                                    | **CM SP 1.3** (Establecer línea base), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos).                                                                                                                                                                                                                                            |
|                                     | Actualizar base de datos de requisitos, añadiendo la tabla de la nueva versión con los requisitos actualizados.                                                                                                                                      | Colaborador                                    | **CM SP 1.4** (Registrar y reportar estado de la configuración), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM SP 1.5** (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos).                                                                                                                |
|                                     | Registrar en la plantilla, la firma de todos los colaboradores de proyectos. Esta se registra en la hoja de 'compromiso', donde cada integrante colocará su nombre junto al campo de si esta enterado o no del cambio inicial o el resto de cambios. | Colaborador                                    | **SP 1.2** (Obtener el compromiso sobre los requisitos).                                                                                                                                                                                                                                                                                           |

### Criterios de gravedad
- **Baja:** Menos de 4 horas
- **Media:** Entre 4 y 16 horas
- **Alta:** Más de 16 horas

### Criterios de aceptación
Los líderes del equipo deberán basarse en los siguientes criterios para la aprobación del cambio:
- **Factibilidad Técnica:** El equipo tiene la capacidad técnica de implementar el cambio sin comprometer la estabilidad del sistema.
- **Disponibilidad de tiempo**: La implementación del cambio es viable dentro del cronograma sin afectar entregas críticas
- **Valor agregado:** El cambio mejora la experiencia del usuario, la funcionalidad del sistema o la alineación con los objetivos del cliente.
- **Compatibilidad:** No genera conflictos graves con otros requisitos u otros módulos del sistema.

### Afectación al cronograma
- Comparar el esfuerzo estimado con la capacidad del equipo para determinar si hay margen para absorber el cambio.
- Identificar si el cambio afecta módulos críticos o entregas prioritarias.
- Evaluar si es necesario reprogramar tareas existentes o reasignar recursos.
---

### Salidas

1. Control de cambios de requisitos
2. Historial de cambios de requisitos


## Historial de Cambios

| Autor                   | Descripción del cambio              | Versión |
| ----------------------- | ----------------------------------- | ------- |
| Angélica Ríos Cuentas   | Definición de cómo decidimos qué requisitos aceptar| 1.1     |
| Daniel Contreras Chávez | Criterios de aceptación, gravedad y cronograma | 1.2 |
| Juan Pablo Chávez Leal  | Adición de prácticas específicas PMC | 1.3 |
| Daniel Contreras Chávez | Adición de prácticas específicas PMC | 1.3 |