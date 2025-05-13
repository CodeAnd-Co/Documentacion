---
title: PR8 Gestión de Riesgos
sidebar_position: 8
---

# Proceso de gestión de Riesgos

---

## **Objetivo**

- Identificar nuevos riesgos y monitorear los riesgos actuales conforme el avance de los proyectos.
- Evitar o prevenir que los riesgos identificados en los proyectos escalen.

---

## **Entradas**

1. Matriz de gestión de riesgos
2. Plan de Valor Ganado

---

## **Proceso**

| **Fase**                      | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Responsables**  | **Meta y práctica específica del CMMI**                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------ |
| **Preparación**               | Crea una copia de la plantilla de [Gestión de riesgos](https://docs.google.com/spreadsheets/d/1AVpwd7Ie_oefisEYoK59dAlArm9PhWATAbajT_qfMYQ/edit?usp=sharing) en el Plan de valor ganado.                                                                                                                                                                                                                                                                                                                         | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
| **Identificación de Riesgos** | Utilizando la sección [¿Cómo se definen los riesgos?](#cómo-se-definen-los-riesgos), identifica los posibles riesgos en cada etapa del proyecto de software.                                                                                                                                                                                                                                                                                                                | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
|                               | Define todos los riesgos potenciales que pueden obstaculizar el logro de los objetivos del proyecto en la **Matriz de gestión de riesgos**.                                                                                                                                                                                                                                                                                                                                                                                 | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
| **Análisis de Riesgos**       | Define las causas y efectos que pueden tener los riesgos identificados.                                                                                                                                                                                                                                                                                                                                                                                                               | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
| **Magnitud de Riesgos**       | Determina la probabilidad de que el riesgo ocurra y el impacto que podría generar.                                                                                                                                                                                                                                                                                                                                                                                                   | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
|                               | Por cada riesgo identificado cuya magnitud no sea **"Riesgo Bajo"** (este valor se calcula automáticamente en la plantilla), se debe activar un plan de mitigación que incluya acciones preventivas y asignación de responsables. Dicho plan tendrá una duración máxima de una semana.                                                                                                                                                                                      | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
| **Comunicación de Riesgos**   | Comparte con los stakeholders relevantes los riesgos identificados, el plan de acción para mitigarlos y el plan de contingencia.                                                                                                                                                                                                                                                                                                                                                     | **Product Owner** | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
| **Aprobación de Riesgos**     | Obtén la aprobación de los stakeholders relevantes respecto a la documentación de los riesgos identificados.                                                                                                                                                                                                                                                                                                                                                                        | **Product Owner** | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                        |
| **Monitoreo de Riesgos**      | Cada lunes se llevará a cabo una revisión de riesgos con los miembros del equipo, en la cual se evaluará si la magnitud de cada riesgo ha disminuido, se ha mantenido o ha aumentado. | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) **PMC SP 1.6** (Llevar a cabo revisiones del progreso) |
|                               | Documenta la evaluación en la matriz de riesgos, incluyendo la fecha y el nivel de magnitud registrado.  | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) **PMC SP 1.6** (Llevar a cabo revisiones del progreso) |
|                               | En caso de que el riesgo haya aumentado o se mantenga en un nivel **"Riesgo Alto"** o **"Riesgo Extremo"**, se activará un plan de contingencia definido por el equipo. | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) **PMC SP 1.6** (Llevar a cabo revisiones del progreso) |

---

## **Salidas**

1. Matriz de gestión de riesgos

---

## **¿Cómo se definen los riesgos?**

Los riesgos se definen como eventos potenciales que, de ocurrir, podrían afectar negativamente el cumplimiento de los objetivos del proyecto. Estos pueden originarse por:

- Incertidumbre técnica o del alcance.
- Dependencias externas (proveedores, plataformas, reglas de negocio).
- Restricciones de tiempo.
- Fallos en la comunicación.
- Recursos limitados o subestimados.

Un buen riesgo está redactado de forma clara, debe contar con una causa y consecuencia.

---

## **¿Cómo se define la probabilidad de riesgos?**

La probabilidad de un riesgo se evalúa de forma cualitativa o cuantitativa, y generalmente se clasifica en tres niveles:

- **Alta**: Es muy probable que ocurra (70-100%)
- **Media**: Puede ocurrir, pero no es seguro (30-69%)
- **Baja**: Es poco probable que ocurra (0-29%)

Esta probabilidad puede ser estimada por el equipo con base en la experiencia y datos históricos. Luego, se combina con el impacto que tendría en el proyecto para determinar la magnitud del riesgo, lo cual ayuda a la activación de planes de mitigación y contingencia.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                                                                                                                | **Fecha** | **Colaborador**                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **1.0**             | Creacion de proceso de gestión de riesgos                                                                                      | 03/3/2025 | Rommel Toledo, Daniel Quejeiro, Mauricio Anguiano |
| **1.1**             | Se agregó una fase en el proceso para el monitoreo de riesgos e información para la definición de requisitos y su probabilidad | 04/4/2025 | Angélica Ríos, Paola Garrido                      |
| **1.2**             | Adición e identificacion de PMC 1.6 en los pasos del proceso                                                                   | 17/4/2025 | Nicolas Hood Figueroa                             |
| **1.3**             | Refactorización                                                                   | 18/4/2025 | Diego Fuentes                             |
| **1.4**             | Simplificación de pasos.                                                                  | 13/05/2025 | Paola María Garrido                        |

---
