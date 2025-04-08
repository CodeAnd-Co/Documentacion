---
title: PR2 Estimación de alcance y coste del proyecto (WBS)
sidebar_position: 2
---

# Estimación de alcance y coste del proyecto (WBS)

---



### Objetivo

- Estimar el tiempo necesario para cada entregable a partir de un WBS.

---

### Entradas

1. Métrica de complejidad
2. Tareas del proyecto

---

### Proceso

| Fase                      | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                     | Responsables  | Meta y práctica específica del CMMI |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------- |
| **Definición del WBS**    | Definir el alcance y objetivos del proyecto.                                                                                                                                                                                                                                                                                                                                                                                                    | Product Owner | **PP 1.1**                          |
|                           | Identificar las áreas de mayor importancia en las que se puede dividir el proyecto para definir los WBS. Al menos se debe tener un WBS de Requisitos y uno de Gestión de Proyectos.                                                                                                                                                                                                                                                             | Team Leader   | **PP 1.1, PP 1.2**                  |
|                           | Definir las fases en las que se dividirán las áreas del proyecto según su orden temporal. Ej.: Inicio, Construcción, Transición.                                                                                                                                                                                                                                                                                                                | Team Leader   | **PP 1.3**                          |
|                           | Separar cada fase en paquetes de entregables necesarios para cumplir con la fase.                                                                                                                                                                                                                                                                                                                                                               | Team Leader   | **PP 1.2**                          |
|                           | Dividir cada paquete en entregables específicos.                                                                                                                                                                                                                                                                                                                                                                                                | Team Leader   | **PP 1.2**                          |
|                           | Generar un diagrama jerárquico con todos los componentes identificados.                                                                                                                                                                                                                                                                                                                                                                         | Team Leader   | **PP 1.4**                          |
| **Planes de soporte**     | Generar un plan de proyecto según el proceso [*para generar un plan de proyecto*](https://codeandco-wiki.netlify.app/docs/procesos/proceso-plan-proyecto/) donde se incluyen la definición de riesgos y sus tareas de mitigación, tareas para los entregables y las actividades de soporte, tareas para la adquisición de habilidades y conocimiento y tareas para integrar y gestionar elementos fuera del desarrollo, entre otras. | Team Leader   | **PP 1.1, PP 2.1, PP 2.7, PMC 1.1**          |
|                           | Generar el resto de planes de soporte necesarios. Ej.: Plan de configuración, plan de calidad, plan de verificación.                                                                                                                                                                                                                                                                                                                            | Team Leader   | **PP 2.3, PMC  1.1**                          |
| **Integración y gestión** | Definir tareas y entregables necesarios para complementar lo generado en la fase de desarrollo. Ej.: Manuales de usuario                                                                                                                                                                                                                                                                                                                        | Team Leader   | **PP 3.1**                          |

### Salidas

1. WBS de alto nivel
2. Estimación inicial del proyecto.

---

# ¿Qué es el WBS?

El **WBS** (Work Breakdown Structure o *Estructura de Desglose del Trabajo*) es una herramienta fundamental en la gestión de proyectos. Básicamente, es la descomposición jerárquica del trabajo total que debe realizarse en un proyecto. Divide el proyecto en entregables y luego en tareas más pequeñas y manejables.

---

## ¿Para qué sirve?

- Organizar el trabajo del proyecto en partes comprensibles.  
- Facilitar la estimación de:
  - **Alcance:** el tamaño de todo el proyecto, con sus segmentación en módulos.
  - **Costo:** cuánto costará en horas cada elemento.
- Mejorar el control y monitoreo del avance del proyecto.

---

## ¿Cuándo se debe crear?

El WBS se debe crear al inicio del proceso de planificación, antes de estimar el esfuerzo y el costo. Específicamente:

- Después de definir el **alcance** del proyecto con sus segmentación en módulos (Análisis, Construcción y Transición).
- Antes de estimar esfuerzo y costos, ya que estas estimaciones se basan en las tareas identificadas en el WBS.

---

### Métricas

1. Número de tareas generadas y estimadas

----

## Registro de cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                                          |
| ------------------- | --------------------------------------------- | --------- | -------------------------------------------------------- |
| **1.1**             | Creacion de la guia de historial de cambios   | 6/3/2025  | Diego Isaac Fuentes Juvera                               |
| **1.2**             | Eliminar proceso de juntas grupales duplicado | 6/3/2025  | Carlos Iván Fonseca Mondragón|
| **1.3**             | Agregar práctica de PMC 1.1                   | 1/4/2025  | Daniel Contreras Chávez, Juan Pablo Chávez Leal          |
| **1.4**             | Agregar descrpción y cambio de nombre         | 7/4/2025  | Galo Alejandro del Rio Viggiano                          |