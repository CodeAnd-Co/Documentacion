---
title: 🚨 | PR8 Gestión de Riesgos
sidebar_position: 8
---
# 🚨 Gestión de Riesgos

Proceso para identificar, analizar, monitorear y mitigar riesgos que puedan afectar el logro de los objetivos del proyecto, asegurando una gestión proactiva y efectiva para prevenir o minimizar impactos negativos.

## 🎯 Objetivo

- Identificar nuevos riesgos y monitorear los riesgos actuales conforme avance el proyecto.
- Prevenir o evitar que los riesgos escalen y afecten el proyecto.

## 📥 Entradas

1. Matriz de gestión de riesgos.
2. Plan de Valor Ganado.

## ⚙️ Proceso

| **Fase**                       | **Descripción**                                                                                                                                                                                                                                                                                                                | **Responsables**  | **Meta y práctica específica del CMMI**                                                                                                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Preparación**               | Crea una copia de la plantilla de [Gestión de riesgos](https://docs.google.com/spreadsheets/d/1AVpwd7Ie_oefisEYoK59dAlArm9PhWATAbajT_qfMYQ/edit?usp=sharing) en el Plan de valor ganado.                                                                                                                                                 | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
| **Identificación de Riesgos** | Utilizando la sección [¿Cómo se definen los riesgos?](#cómo-se-definen-los-riesgos), identifica los posibles riesgos en cada etapa del proyecto de software.                                                                                                                                                                          | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
|                                      | Define todos los riesgos potenciales que pueden obstaculizar el logro de los objetivos del proyecto en la**Matriz de gestión de riesgos**.                                                                                                                                                                                     | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
|                                      | Para el caso de los requisitos observa la [Plantilla de requerimientos](https://docs.google.com/spreadsheets/d/1Tz8nFzeBN-ivIDT2qz6ovjVQXEiSxPJNFCsuD2BjgSM/edit?gid=2142998713#gid=2142998713). Si alguno es de riesgo alto o extremo definelo como se menciona en el paso anterior.                                                     | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)<br />**RD SP 3.4** (Analizar los requisitos para conseguir un equilibrio)<br />**RD SP 3.5** (Validar los requisitos)                                                                          |
| **Análisis de Riesgos**       | Define las causas y efectos que pueden tener los riesgos identificados.                                                                                                                                                                                                                                                               | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
| **Magnitud de Riesgos**        | Determina la probabilidad de que el riesgo ocurra y el impacto que podría generar.<br/><br/> Para los requisitos utiliza las columnas de Probabilidad, Impacto y Magnitud de la [Plantilla de requerimientos](https://docs.google.com/spreadsheets/d/1Tz8nFzeBN-ivIDT2qz6ovjVQXEiSxPJNFCsuD2BjgSM/edit?gid=2142998713#gid=2142998713). | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)<br />**RD SP 3.4** (Analizar los requisitos para conseguir un equilibrio)<br />**RD SP 3.5** (Validar los requisitos)                                                                          |
|                                      | Por cada riesgo identificado cuya magnitud no sea**"Riesgo Bajo"** (este valor se calcula automáticamente en la plantilla), se debe activar un plan de mitigación que incluya acciones preventivas y asignación de responsables. Dicho plan tendrá una duración máxima de una semana.                                           | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
|                                      | Agregar el plan de mitigación con acciones y responsable al plan de iteración actual.                                                                                                                                                                                                                                               | **Team Leader**   | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
| **Comunicación de Riesgos**   | Comparte con los stakeholders relevantes los riesgos identificados y obtén su aprobación.                                                                                                                                                                                                                                           | **Product Owner** | **PP, SP 2.2** (Identificar los riesgos del proyecto)                                                                                                                                                                                                            |
| **Monitoreo de Riesgos**       | Cada lunes se repetirá este proceso con los miembros del equipo, en la cual se evaluará si la magnitud de cada riesgo ha cambiado o se han identificado nuevos riesgos. (Esto incluye revisar nuevamente los riesgos en la plantilla de requerimientos).                                                                            | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) <br />**PMC SP 1.6** (Llevar a cabo revisiones del progreso)<br />**RD , SP 3.4** (Analizar los requisitos para conseguir un equilibrio) <br />**RD , SP 3.5** (Validar los requisitos) |
|                                      | Documenta la evaluación en la matriz de riesgos, incluyendo la fecha y el nivel de magnitud registrado.                                                                                                                                                                                                                              | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) <br />**PMC SP 1.6** (Llevar a cabo revisiones del progreso)                                                                                                                                         |
|                                      | En caso de que el riesgo haya aumentado o se mantenga en un nivel**"Riesgo Alto"** o**"Riesgo Extremo"**, se activará un plan de contingencia definido por el equipo, el cual deberá agregarse al plan de iteración.                                                                                                               | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) <br />**PMC SP 1.6** (Llevar a cabo revisiones del progreso)                                                                                                                                         |
|                                      | En caso de que el riesgo se haya convertido en problema hacer el [proceso de acciones correctivas](../procesos/PR13-acciones-correctivas.md).                                                                                                                                                                                             | **Team Lead**     | **PMC, SP 1.3** (Monitorear los riesgos del proyecto) <br />**PMC SP 1.6** (Llevar a cabo revisiones del progreso)<br />**PMC SP 2.1** (Analizar las cuestiones)                                                                                         |

## ¿Cómo se definen los riesgos?

Los riesgos se definen como eventos potenciales que, de ocurrir, podrían afectar negativamente el cumplimiento de los objetivos del proyecto. Estos pueden originarse por:

Incertidumbre técnica o del alcance.
Dependencias externas (proveedores, plataformas, reglas de negocio).
Restricciones de tiempo.
Fallos en la comunicación.
Recursos limitados o subestimados.
Un buen riesgo está redactado de forma clara, debe contar con una causa y consecuencia.

## ¿Cómo se define la probabilidad de riesgos?

La probabilidad de un riesgo se evalúa de forma cualitativa o cuantitativa, y generalmente se clasifica en tres niveles:

Alta: Es muy probable que ocurra (70-100%)
Media: Puede ocurrir, pero no es seguro (30-69%)
Baja: Es poco probable que ocurra (0-29%)
Esta probabilidad puede ser estimada por el equipo con base en la experiencia y datos históricos. Luego, se combina con el impacto que tendría en el proyecto para determinar la magnitud del riesgo, lo cual ayuda a la activación de planes de mitigación y contingencia.

## 📤 Salidas

1. Matriz de gestión de riesgos actualizada.
2. Plan de iteración con planes de mitigación y contingencia integrados.

## 📎 Recursos relacionados

- [PR13 Acciones Correctivas](../procesos/PR13-acciones-correctivas.md)
- [Plantilla de Matriz de Gestión de Riesgos](https://docs.google.com/spreadsheets/d/1AVpwd7Ie_oefisEYoK59dAlArm9PhWATAbajT_qfMYQ/edit?usp=sharing)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
  | **Versión** | **Descripción**                                                                 | **Fecha**     | **Colaborador**                                   |
|-------------|----------------------------------------------------------------------------------|---------------|--------------------------------------------------------|
| **1.0.0**   | Creación del proceso de gestión de riesgos.                                     | 03/03/2025    | Rommel Toledo, Daniel Queijeiro, Mauricio Anguiano     |
| **1.1.0**   | Agregada fase de monitoreo y definición de probabilidad de riesgos.             | 04/04/2025    | Angélica Ríos, Paola María Garrido                     |
| **1.2.0**   | Inclusión de referencias a PMC 1.6 en los pasos del proceso.                    | 17/04/2025    | Nicolás Hood Figueroa                                  |
| **1.3.0**   | Refactorización del proceso.                                                    | 18/04/2025    | Diego Fuentes                                          |
| **1.4.0**   | Simplificación de pasos del proceso.                                            | 13/05/2025    | Paola María Garrido                                    |
| **1.4.1**       | Correcciones ortográficas y de enlaces                       | 29/05/2025 | Valeria Zúñiga, Nicolas Hood                 |
| **1.5.0**   | Mapeo de RD 3.4 y RD 3.5 en el proceso.                                           | 30/05/2025    | Paola María Garrido, Carlos Iván Fonseca Mondragón |
| **1.5.1**   | Mapeo de PMC 2.1 en el proceso.                                           | 30/05/2025    | Paola María Garrido, Angel Mauricio Ramírez Herrera |

</details>
