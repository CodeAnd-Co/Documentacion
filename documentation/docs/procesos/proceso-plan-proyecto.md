---
title: PR4 Proceso para hacer un plan de proyecto
sidebar_position: 4
---

# Proceso para hacer un plan de proyecto

**Última actualización:** 8 de abril de 2025.

---

### Autores

| Nombre                        | Rol         |
| ----------------------------- | ----------- |
| Valeria Zúñiga Mendoza        | Autor       |
| Max Toscano Díaz              | Colaborador |
| Carlos Iván Fonseca Mondragón | Colaborador |
| Mariana Juárez Ramírez        | Colaborador |
| Sofía Osorio Suárez           | Colaborador |
| Diego Alfaro Pinto            | Colaborador |
| Arturo Sánchez Rodríguez      | Colaborador |
| Juan Eduardo Rosas Cerón      | Colaborador |
| Pablo Hazael Hurtado Mireles  | Colaborador |
| Juan Carlos Calderon García   | Colaborador |
| Juan Pablo Chávez Leal        | Modificador |
| Rommel Toledo Crespo          | Modificador |
| Miguel Angel Uribe Esquivel   | Modificador |
| Daniel Contreras Chávez       | Modificador |
| Juan Pablo Chávez Leal        | Modificador |
---

### Objetivo

- Elaborar un plan de proyecto efectivo alineado con varias prácticas del **CMMI-DEV V1.3**.
- Asegurar la planificación, estimación de esfuerzo, asignación de recursos, designación del líder responsable del éxito de cada actividad y monitoreo de avances para optimizar la ejecución y el cumplimiento de los objetivos estratégicos.

---

### Entradas

1. Lista de requisitos del proyecto.
2. Work Items List.
3. Datos de recursos.

### Proceso

| **Fase**                                          | **Descripción**                                                                                                                                                                                                                                                                                                                                                                | **Responsable**                              | **Meta y práctica específica del CMMI**                                                                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Plan de proyecto**                              | Seguir la <u>_[plantilla de "Plan de Proyecto".](https://docs.google.com/spreadsheets/d/1ASpVrD2yAUDSG3F0yN3xRMQW_yR_ykhLwBdV2hSwv5Y/edit?usp=sharing)_</u>                                                                                                                                                                                                                    | Team Lead                                    | **PP, SP 2.7** (Establecer el plan de proyecto), **PMC SP 1.1**                                                                                                           |
| **Definición de tareas**                          | Definir las tareas del Work Items List: requerimientos y tareas. Incluir también las tareas del proceso <u>_[planes de capacitación](https://codeandco-wiki.netlify.app/docs/procesos/planear-capacitacion)_</u>.                                                                                                                                                              | Team Lead, Product Owner, Architecture Owner | **PP, SP 2.7** (Establecer el plan de proyecto), **PP, SP 2.5** (Planificar el conocimiento y las habilidades necesarias).                                 |
| **Asignación de líder responsable**               | Asignar a cada líder la tarea correspondiente a su área de especialidad, asegurando que sean responsables del éxito de la actividad.                                                                                                                                                                                                                                           | Team Leader                                  | **PP, SP 2.7** (Consideraciones de infraestructura)                                                                                                        |
| **Estimación de esfuerzo y costo**                | Establecer puntos departamentales a cada tarea en equipo considerando: número de interfaces y su complejidad, volumen de datos, velocidad y complejidad del equipo y elementos de la arquitectura. Si hay desacuerdos, seguir la siguiente fórmula`= (Estimación más optimista + estimación más pesimista + estimación más probable*4 ) / 6`                                    | Todos los miembros del equipo                | **PP, SP 1.2** (Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas), **PMC SP 1.1**                                                  |
| **Conversión de puntos a horas**                  | La conversión de puntos departamentales a horas se establece según la hoja “Estimación y reestimación de costos”. Donde se indica la conversión actual y la reestimación según el tamaño y el costo real del historial.                                                                                                                                                        | No aplica                                    | **PP, SP 1.2** (Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas), **PP, SP 1.4** (Estimar el esfuerzo y el coste), **PMC SP 1.1** |
| **Presupuesto del proyecto**                      | El Team Lead establece el presupuesto según la fórmula anterior, revisando periódicamente la página de “estimación y reestimación de costos” y cambia la fórmula de “costo estimado” según sea necesario.                                                                                                                                                                      | Team Lead                                    | **PP, SP 1.4** (Estimar el esfuerzo y el coste), **PP, SP 2.1** (Establecer el presupuesto y el calendario)                                                |
| **Identificación de dependencias y fechas fijas** | Identificar cuando las tareas tienen fecha fija o cuando hay dependencias, es decir, cuando otras tareas deban ser completadas antes para que esta pueda ser ejecutada, añadir en la primera columna “D” (Dependencia) o “F” (Fecha fija).                                                                                                                                     | Team Lead, Product Owner, Architecture Owner | **PP, SP 2.1** (Establecer el presupuesto y el calendario)                                                                                                 |
| **Priorización de tareas**                        | Ordenar las tareas por prioridad considerando fechas fijas, dependencias y para requisitos basarse en la prioridad del MVP.                                                                                                                                                                                                                                                    | Team Lead, Product Owner                     | **PP, SP 2.1** (Establecer el presupuesto y el calendario)                                                                                                 |
| **Asignación de fechas**                          | Establecer la fecha de las tareas según la prioridad y la disponibilidad de los miembros del equipo. Para ello, se debe revisar la hoja de **[Disponibilidad de Recursos](https://docs.google.com/spreadsheets/d/1s2sbsnxEtDKamKHRqQY08sVHEri6Mdv6VrKuplxs70I/edit?usp=sharing)** y asegurarse de que cada tarea sea asignada a un miembro que esté disponible en ese periodo. | Team Lead, Product Owner                     | **PP, SP 2.1** (Establecer el presupuesto y el calendario)                                                                                                 |
| **Plan de Entregas**                              | Seguir el apartado de Planificación que se encuentra en el Docusaurus de su respectivo proyecto. Llenar la fecha de finalización y estado.                                                                                                                                                                                                                                     | Team Leader                                  | **PP, SP 2.1** (Establecer el presupuesto y el calendario)                                                                                                 |
| **Ciclo de vida**                                 | Añade también en el apartado de Planificación el ciclo de vida del proyecto elegido por el departamento según el <u>_[documento de ciclo de vida](https://codeandco-wiki.netlify.app/docs/recursos/Ciclo-de-vida)_.</u>                                                                                                                                                        | Team Leader                                  | **PP SP 1.3** (Definir las fases del ciclo de vida del proyecto)                                                                                           |
| **Seguimiento del valor acumulado**               | Gestionar la gráfica de valor acumulado esperado vs ganado a lo largo del tiempo.                                                                                                                                                                                                                                                                                              | Team Lead                                    | **PMC, SP 1.1** (Monitorizar los parámetros de planificación del proyecto)                                                                                 |
| **Seguimiento del costo acumulado**               | Gestionar la gráfica de costo acumulado esperado vs ganado a lo largo del tiempo.                                                                                                                                                                                                                                                                                              | Team Lead                                    | **PMC, SP 1.1** (Monitorizar los parámetros de planificación del proyecto)                                                                                 |
| **Las partes interesadas**                        | Crear un plan de con la siguiente plantilla de <u>_[involucramiento de los stakeholders](https://docs.google.com/spreadsheets/d/1aURFnilKIHpuje5Ks9QqGiC_vBVYi_M4H5WAYBjOX_w/edit?usp=sharing)_.</u>                                                                                                                                                                           | Product Owner, Team Lead                     | **PP, SP 2.6** (Planificar la involucración de las partes interesadas)                                                                                     
| **Plan de comunicación** | Una vez identificados las partes involucradas, se crea el plan de comunicacion donde se definen los medios y la frecuencia en los cuales el equipo mantendrá la comunicación con ellos; llenando la siguiente <u>_[plantilla](https://docs.google.com/document/d/1JbUho_DX2sDtQhQzvrE6CzbAfc7q4fGjCy0MpObt8W0/edit?usp=sharing)_.</u>  | Team Lead | **PP, SP 2.6** (Planificar la involucración de las partes interesadas) 
| **Gestión de riesgos**                            | Gestionar los riesgos del proyecto según el <u>_[proceso de gestión de riesgos](/procesos/manejo-de-riesgos.md)_</u>.                                                                                                                                                                                                                                                          | Team Lead                                    | **PP, SP 2.2** (Identificar los riesgos del proyecto), **PP, SP 1.3** (Monitorizar los riesgos del proyecto), **PP, SP 3.1** (Revisar los planes que afectan al proyecto)                                           |
| **Comprobacion de gestion datos**                 | Una vez identificadas las partes interesadas, confirmar que la gestion de los datos se adhieren a las <u>_[politicas de gestion de datos](/politicas/gestion-de-datos.md)_.</u>                                                                                                                                                                                          | Product Owner                                | **PP, SP 2.3** (Planificar la gestión de los datos).                                                                                                       |
| **Compromiso con el plan**                        | Ya que los miembros del equipo estén de acuerdo con el plan y se hayan hecho los ajustes necesarios, validar las milestones y fechas de entrega con el cliente mediante el formato <u>_[compromiso con el plan](https://docs.google.com/document/d/119q5ZKeP8v-ymSohetKmaGKy_QUTAEWhlEDfpBnkRC8/edit?usp=sharing)_.</u>                                                        | Product Owner                                | **PP, SP 3.3** (Obtener el compromiso con el plan).                                                                                                        |
| **Monitoreo diario**                              | En las dailys establecer responsables en el plan de proyectos, actualizar el estado de las tareas, según el proyecto x de Daily meetings.                                                                                                                                                                                                                                      | Team Lead, Miembros del equipo               | **PMC SP 1.1** (Monitorizar los parámetros de planificación del proyecto), **PMC, SP 1.2** (Monitorizar los compromisos)                                                                                                              |
| **Replanificación**                               | Para identificar si vamos atrasados, se calcula el valor de SPI con la fórmula: `SPI = valor real acumulado / valor planeado`Después se calcula la desviación con la fórmula:` (1 - SPI) * 100`. Interpretación de la desviación:- **0-15%**: Aún es factible el plan.- **15-30%**: Se deben tomar decisiones drásticas.- **Más del 30%**: Se necesita un nuevo plan.          | Team Lead                                    | **PP, SP 2.1** (Establecer el presupuesto y el calendario) **PP, SP 3.2** (Conciliar los niveles de trabajo y de recursos)                                 |

### Salidas

1. **Plan de proyecto** documentado y alineado con CMMI.
2. **Presupuesto y cronograma** definidos y ajustables.
3. **Lista de tareas priorizadas y estimadas** con su asignación de fechas.
4. **Monitoreo continuo** del desempeño, riesgos y ajustes requeridos.
5. **Documentación de desviaciones y replanificación** en caso de ser necesario.
6. **Plan de Entrega** con fechas de finalización de las fases y los hitos.

## Registro de cambios

| Autor                         | Descripción del cambio                           | Versión |
| ----------------------------- | ------------------------------------------------ | ------- |
| Carlos Iván Fonseca Mondragón | Correcciones de ortografía y redacción           | 1.1     |
| Juan Pablo Chávez Leal        | Adición del formato de Compromiso con el plan    | 1.2     |
| Carlos Iván Fonseca Mondragón | Adición de la hoja de Disponibilidad de Recursos | 1.3     |
| Daniel C. y Juan Pablo C.     | Añadir PMC 1.1 a fases faltantes                 | 1.4     |
| Mariana Juárez Ramírez        | Agregar SG 3.1 de PP                             | 1.5     |
