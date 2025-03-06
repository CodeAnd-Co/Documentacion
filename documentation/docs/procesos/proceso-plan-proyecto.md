---
title: Guía de hacer un plan de proyecto
sidebar_position: 2
---

# Guía de hacer un plan de proyecto

**Última actualización:** 5 de marzo de 2025.

---

### Autores
| Nombre                            | Rol         |
| --------------------------------- | ----------- |
| Valeria Zúñiga Mendoza            | Autor       |
| Max Toscano Díaz        | Colaborador |
| Carlos Iván Fonseca Mondragón        | Colaborador |

---

### Objetivo

* Elaborar un plan de proyecto efectivo alineado con varias prácticas del **CMMI-DEV V1.3**.
* Asegurar la planificación, estimación de esfuerzo, asignación de recursos y monitoreo de avances para optimizar la ejecución y el cumplimiento de los objetivos estratégicos.


---

### Entradas

1. Lista de requerimientos del proyecto.
2. Work Items List.
3. Datos de recursos.

### Proceso

| **Fase** | **Descripción** | **Responsable** | **Meta y práctica específica del CMMI** |
|----------|----------------|-----------------|-----------------------------------------|
| **Plan de proyecto** | Seguir la <u>*[plantilla de Plan de Proyecto](https://docs.google.com/spreadsheets/d/1ASpVrD2yAUDSG3F0yN3xRMQW_yR_ykhLwBdV2hSwv5Y/edit?usp=sharing)*</u> | Team Lead | **PP, SP 2.7** (Establecer el plan de proyecto) |
| **Definición de tareas** | Definir las tareas Work Items list: requerimientos, tareas, etc. | Team Lead, Product Owner, Architecture Owner | **PP, SP 2.7** (Establecer el plan de proyecto) |
| **Estimación de esfuerzo y costo** | Establecer puntos departamentales a cada tarea en equipo considerando:- Número de interfaces y su complejidad.- Volumen de datos.- Velocidad y complejidad del equipo.- Elementos de la arquitectura. Si hay desacuerdos, seguir la siguiente fórmula:`= (Estimación más optimista + estimación más pesimista + estimación más probable*4 ) / 6` | Todos los miembros del equipo | **PP, SP 1.2** (Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas) |
| **Conversión de puntos a horas** | La conversión de puntos departamentales a horas se establece según la hoja “Estimación y reestimación de costos”. Donde se indica la conversión actual y la reestimación según el tamaño y el costo real del historial. | No aplica | **PP, SP 1.2** (Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas), **PP, SP 1.4** (Estimar el esfuerzo y el coste) |
| **Presupuesto del proyecto** | El Team Lead establece el presupuesto según la fórmula anterior, revisando periódicamente la página de “estimación y reestimación de costos” y cambia la fórmula de “costo estimado” según sea necesario. | Team Lead | **PP, SP 1.4** (Estimar el esfuerzo y el coste), **PP, SP 2.1** (Establecer el presupuesto y el calendario) |
| **Identificación de dependencias y fechas fijas** | Identificar cuando las tareas tienen fecha fija o cuando hay dependencias, es decir cuando otras tareas deban ser completadas antes para que esta pueda ser ejecutada, añadir en la primera columna “D” (Dependencia) o “F” (Fecha fija). | Team Lead, Product Owner, Architecture Owner | **PP, SP 2.1** (Establecer el presupuesto y el calendario) |
| **Priorización de tareas** | Ordenar las tareas por prioridad considerando fechas fijas, dependencias y para requisitos basarse en la prioridad del MVP. | Team Lead, Product Owner | **PP, SP 2.1** (Establecer el presupuesto y el calendario) |
| **Asignación de fechas** | Establecer la fecha de las tareas según la prioridad. | Team Lead, Product Owner | **PP, SP 2.1** (Establecer el presupuesto y el calendario) |
| **Seguimiento del valor acumulado** | Gestionar la gráfica de valor acumulado esperado vs ganado a lo largo del tiempo. | Team Lead | **PMC, SP 1.1** (Monitorizar los parámetros de planificación del proyecto) |
| **Seguimiento del costo acumulado** | Gestionar la gráfica de costo acumulado esperado vs ganado a lo largo del tiempo. | Team Lead | **PMC, SP 1.1** (Monitorizar los parámetros de planificación del proyecto) |
| **Gestión de riesgos** | Gestionar los riesgos del proyecto según x proceso. | Team Lead | **PP, SP 2.2** (Identificar los riesgos del proyecto)**PMC, SP 1.3** (Monitorizar los riesgos del proyecto) |
| **Monitoreo diario** | En las dailys establecer responsables en el plan de proyectos, actualizar el estado de las tareas, según el proyecto x de Daily meetings. | Team Lead, Miembros del equipo | **PMC, SP 1.2** (Monitorizar los compromisos) |
| **Replanificación** | Para identificar si vamos atrasados, se calcula el valor de SPI con la fórmula:`SPI = valor real acumulado / valor planeado`Después se calcula la desviación con la fórmula:`(1 - SPI) * 100`Interpretación de la desviación:- **0-15%**: Aún es factible el plan.- **15-30%**: Se deben tomar decisiones drásticas.- **Más del 30%**: Se necesita un nuevo plan. | Team Lead | **PP, SP 2.1** (Establecer el presupuesto y el calendario) |



### Salidas
1. **Plan de proyecto** documentado y alineado con CMMI.
2. **Presupuesto y cronograma** definidos y ajustables.
3. **Lista de tareas priorizadas y estimadas** con su asignación de fechas.
4. **Monitoreo continuo** del desempeño, riesgos y ajustes requeridos.
5. **Documentación de desviaciones y replanificación** en caso de ser necesario.

