---
title: PR9 Gestión de cambios de requisitos
sidebar_position: 9
---

# Gestión de cambios de requisitos

**Última actualización** 05 de marzo de 2025 por Paola Garrido y Daniel Contreras

---

### Autores

| Nombre                  | Rol   |
| ----------------------- | ----- |
| Daniel Contreras Chávez | Autor |
| Paola Garrido Montes    | Autor |

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

| Fase                                | Descripción                                                                                                                                                                                                                             | Responsables                                   | Meta y práctica específica del CMMI                                                                                                                                                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Creación de la base de datos**    | Hacer una copia de la siguiente [plantilla](https://docs.google.com/spreadsheets/d/16xSeK0lslz1K5vRlzIaYuich8jrIOV8Ae__o9B-33ME/edit?usp=sharing) en la carpeta del proyecto correspondiente.                                           | Colaborador                                    | REQM SP 1.1 (Entender los requisitos)                                                                                                                                                                                                                                                                                          |
| **Llenado de la base de datos**     | Colocar versión, requisitos, fecha y estado actual de los requisitos.                                                                                                                                                                   | Colaborador                                    | REQM SP 1.1 (Entender los requisitos)                                                                                                                                                                                                                                                                                          |
| **Registrar solicitudes de cambio** | Completar la sección de _Creación de solicitud_ de la hoja "Solicitudes de cambio".                                                                                                                                                     | Colaborador                                    | REQM SP 1.3 (Administrar cambios a los requisitos), CM SP 1.1 (Identificar elementos de configuración)                                                                                                                                                                                                                         |
| **Evaluación del impacto**          | Identificar la gravedad del impacto, las dependencias del requisito, y evaluar el resto de áreas afectadas.                                                                                                                             | Colaborador                                    | REQM SP 1.4 (Mantener la trazabilidad de los requisitos), DAR SP 1.1 (Establecer criterios de decisión), REQM, SP 1.2 (Obtener el compromiso sobre los requisitos)                                                                                                                                                             |
| **Notificar**                       | Notificar a Product Owner, Team Leader y Architecture Owner sobre la solicitud de cambio.                                                                                                                                               | Colaborador                                    | PMC SP 1.3 (Proporcionar visibilidad sobre el progreso), REQM, SP 1.2 (Obtener el compromiso sobre los requisitos)                                                                                                                                                                                                             |
| **Aprobación / negación**           | Product Owner, Team Leader y Architecture Owner deberán hacer la revisión de la solicitud de cambio y entregar su decisión final junto con la justificación de la misma, a más tardar un día después de cuando se realizó la solicitud. | Product Owner, Team Leader, Architecture Owner | REQM SP 1.3 (Administrar cambios a los requisitos), PP SP 2.7 (Establecer y mantener los elementos del plan), REQM, SP 1.2 (Obtener el compromiso sobre los requisitos).                                                                                                                                                       |
| **Actualización**                   | En caso de ser necesario, actualizar dependendencias, entregables y/o funciones clave, cronograma y/o presupuesto, plan de riesgos y/o estándares.                                                                                      | Colaborador                                    | REQM SP 1.4 (Mantener la trazabilidad de los requisitos), CM SP 1.2 (Controlar cambios en la línea base), PP, SP 3.2 (Conciliar los niveles de trabajo y de recursos), REQM SP 1.5 (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos), REQM, SP 1.2 (Obtener el compromiso sobre los requisitos) |
|                                     | Añadir fecha de cambio en el apartado de _Resolución_ en la hoja de "Solicitud de cambio".                                                                                                                                              | Colaborador                                    | CM SP 1.3 (Establecer línea base), PP, SP 3.2 (Conciliar los niveles de trabajo y de recursos)                                                                                                                                                                                                                                 |
|                                     | Actualizar base de datos de requisitos, añadiendo la tabla de la nueva versión con los requisitos actualizados.                                                                                                                         | Colaborador                                    | CM SP 1.4 (Registrar y reportar estado de la configuración), PP, SP 3.2 (Conciliar los niveles de trabajo y de recursos), REQM SP 1.5 (SP 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos).                                                                                                        |

---

### Salidas

1. Control de cambios de requisitos
2. Historial de cambios de requisitos
