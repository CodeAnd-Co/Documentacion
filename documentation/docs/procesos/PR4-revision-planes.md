---
title: PR4 Revisión de Planes de Proyecto
sidebar_position: 4
---

# Proceso de Revisión de Planes de Proyecto

---

### Objetivo

- Asegurar que los planes del proyecto se mantengan actualizados y alineados con la realidad del desarrollo, la priorización del cliente y los recursos disponibles.

---

### Entradas

1. Work Breakdown Structure (WBS).
2. Historias de usuario o lista de entregables.
3. Plan de valor ganado en Excel.
4. Registros de reuniones por equipo.
5. Plan de comunicación.
6. Matriz de riesgos.
7. Matriz de retroalimentación.
8. Repositorio de acciones correctivas.
9. Plan de recursos.
10. Plan de datos.

---

### Proceso

| Fase                                       | Descripción                                                                                                                                                                     | Responsables           | Meta y práctica específica del CMMI                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reunión de verificación de planes**      | Evaluar si el plan de valor ganado actual sigue en línea con la realidad del proyecto (que no supere el 30% de desviación).                                                                                                    | Todo el equipo         | **PP, SP 2.6** (Planificar el involucramiento de las partes interesadas) **PP, SP 3.1** (Revisar los planes que afectan al proyecto).                                                                                                 |
| **Evaluación de la WBS**                   | Identificar tareas a agregar, modificar o eliminar.                                                                                                                | Todo el equipo         | **PP, SP 1.2** (Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas). **PMC SP 1.1** (Monitorear parámetros del proyecto)                                                                |
| **Revisión de prioridades**                | Confirmar cambios de instrucciones o prioridades del cliente.                                                                                                                   | Todo el equipo         | **REQM, SP 1.3** (Gestionar cambios en los requisitos).                                                                                                                    |
| **Revisión de planes**                | Revisar el Plan de Comunicación para mantenerlo actualizado y consistente con la realidad.  | Todo el equipo         | **PP, SP 2.7** (Planificar la Gestión de los Involucrados) **PMC, SP 1.1**  (Monitorear los Parámetros del Proyecto contra el Plan)  |
| | Revisar el plan de recursos para que siga alineado a la realidad. Aplicar el [proceso para identificar recursos](/docs/procesos/PR17-identificar-recursos) para mantenerlo actualizado. | Todo el equipo | **PMC, SP 1.1**  (Monitorear los Parámetros del Proyecto contra el Plan) |
| | Revisar la matriz de gestión de riesgos para que siga alineado a la realidad. Aplicar el [proceso de gestión de riesgos](/docs/procesos/PR8-gestion-riesgos) para mantenerlo actualizado. | Todo el equipo | **RSKM, SP 3.2**, **PMC, SP 1.1**  (Monitorear los Parámetros del Proyecto contra el Plan) |
| | Revisar el plan de datos siguiendo la [política de gestión de datos](/docs/politicas/gestion-de-datos). Revisar y actualizar el listado de datos sensibles del proyecto en el plan de gestión de datos | Team Leader | **PPMC, SP 1.4** (Monitorear la gestion de los datos) |
| **Revisión de tareas** | Revisar la [matriz de retroalimentación](https://docs.google.com/spreadsheets/d/1AFSCQ3wmXUBa8Cf7gu5VQHqexOzJk0g0RWMgwnUmhLk/edit?gid=2048283740#gid=2048283740) para asegurar que todas las entradas tengan una tarea correctiva asignada en el plan. | Todo el equipo | **PP, SP 3.1** (Revisar los planes que afectan al proyecto). <br/> **PMC SP 1.1** (Monitorear parámetros del proyecto). |
| | **Acción adicional**: Después de cada **reporte de estado semanal**, revisar las métricas clave del proyecto y las desviaciones identificadas. Asegurarse de que las **acciones correctivas** estén reflejadas adecuadamente en el plan de acción. | Todo el equipo | |
| | **Frecuencia**: Esta revisión debe realizarse **después de cada reporte de estado** (semanal) y antes de la planificación de la siguiente semana para que cualquier desviación pueda ser abordada a tiempo. | Todo el equipo | |
| | Revisar el [repositorio de acciones correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0) para asegurar que todas las entradas tengan una tarea correctiva asignada en el plan.   | Todo el equipo             |  |
| | Revisar la matriz de riesgo para asegurar que todos los planes de mitigación o contingencia que apliquen tengan su tarea asignada en el plan.                                      | Todo el equipo             |  |
| | Revisar el SRS para asegurar que todos los requisitos vigentes tengan su tarea asignada en el plan.                                                                                 | Todo el equipo             |  |
| **Ajuste de estimaciones**                 | Validar si los tiempos y asignaciones reflejan la realidad en base al plan de recursos. Actualizar las estimaciones de costo y fecha para que sean congruentes con el plan de recursos. | Todo el equipo         | **PP, SP 1.2** (Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas) **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos). **PMC SP 1.1** |
| **Identificación de imprevistos**          | Actualizar el cronograma si se detectan desviaciones significativas respecto al plan original o si surgen nuevos riesgos/tareas no previstas.   | Todo el equipo         | **RSKM, SP 2.2** (Ajustar los planes de mitigación de riesgos), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos). **PMC SP 1.1** (Monitorear parámetros del proyecto)                                           |
| **Creación del Reporte de Inconsistencia** | Si no se ha hecho, crear una copia de la [plantilla de reporte de inconsistencia](https://docs.google.com/document/d/1oFEtJ4wL4jAugo7VBqZViLJWfcgjDt24BJohPeyZFPA/edit?tab=t.0). | Todo el equipo         | **REQM, SP 1.5** (Asegurar la alineación entre el trabajo del proyecto y los requisitos).                                                                                   |
|                                            | Agregar una entrada al reporte de inconsistencias detallando los problemas encontrados.                                                                                         | Todo el equipo         | **REQM, SP 1.5** (Asegurar la alineación entre el trabajo del proyecto y los requisitos).                                                                                  |
| **Implementación de cambios**              | Modificar la WBS, actualizar historias de usuario y plan de trabajo.                                                                                                            | Responsables asignados | **CM, SP 1.2** (Controlar la configuración), **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos), **REQM, SP 1.5** (Asegurar la alineación entre el trabajo del proyecto y los requisitos).                                                              |
| **Comunicación de cambios**                | Enviar avisos en *Discord* y documentar en el *log* del equipo.                                                                                                                   | Todo el equipo         | **REQM, SP 1.4** (Mantener la trazabilidad bidireccional de los requisitos).                                                                                               |
| **Seguimiento**                            | Monitorear el impacto de los ajustes en las siguientes revisiones.                                                                                                              | Todo el equipo         | **MA, SP 2.3** (Registrar datos y resultados de medición). **PMC SP 1.1** (Monitorear parámetros del proyecto)                                                                                                                 |

---

### Salidas

1. Planes actualizados y alineados con las necesidades del proyecto:
- Plan de comunicación
- Plan de recursos
- Plan de valor ganado
- Matriz de gestión de riesgos
- Matriz de retroalimentación
- Repositorio de acciones correctivas
- Matriz de riesgos
- SRS
- Work Breakdown Structure (WBS)
- Estimaciones de costo y fecha
- Cronograma
- Log del equipo
---

### Métricas

1. **Número de cambios registrados** en la WBS y plan de trabajo.
2. **Variación en estimaciones de tiempo** antes y después de ajustes.
3. **Impacto de los cambios** medido en efectividad y cumplimiento del cronograma.

---

## Registro de cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.1**             | Correcciones de ortografía y redacción   |   | Carlos Iván Fonseca Mondragón |
| **1.2**             | Añadir SP 1.1 de PMC | | Daniel C y Juan Pablo C |
| **1.3**             | Añadir SP 3.1 de PP | 8/04/2025  | Mariana Juárez Ramírez  |
| **1.4**             | Refactorización | 18/04/2025  | Diego Fuentes  |
| **1.5** | Correcciones PMC 1.1 | 22/04/2025 | Juan Pablo Chávez Leal |
| **1.6**             | Se especificó mejor el primer paso del proceso y añadió la parte del plan de comunicación    | 22/04/2025  | Mariana Juárez Ramírez |
| **2.0**             | Añadir entradas de plan de comunicación, matriz de riesgos, repositorio de acciones correctivas, plan de recursos, matriz de retroalimentación. Agregadas fases y actividades de revisión de planes y de revisión de tareas. Cambio en la actividad de ajuste de estimaciones.    | 22/04/2025  | Diego Fuentes Juvera |
| **2.1**             | Implementar acciones correctivas | 25/04/2025  | Max Toscano |
| **2.2**             | Plan de datos  | 28/04/2025  | Pablo Hurtado |
| **2.3**             | Corrección SP 3.1 Revisar los planes que afectan al proyecto. | 13/05/2025 | Arturo Sánchez |
