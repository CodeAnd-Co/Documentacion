---
title: ⚙️ | Plantilla para Procesos
---
# ⚙️ Plantilla para Procesos

Esta plantilla proporciona una estructura estandarizada para crear procesos dentro de la organización. Siguiendo este formato, se asegura que todos los procesos sean consistentes, claros y efectivos para guiar el comportamiento y la toma de decisiones en la organización.

## 🎯 Objetivo

- Proporcionar un formato estándar para documentar procesos organizacionales de manera clara y estructurada.
- Facilitar la comprensión y seguimiento de los procesos para todos los miembros del equipo.
- Asegurar que todos los procesos documentados contengan la información esencial para su correcta implementación.

## 📝 Contenido / Secciones sugeridas

- Objetivo: Explica el propósito del proceso.
- Entradas: Elementos necesarios para iniciar el proceso.
- Proceso: Fases, descripciones, responsables y alineación con prácticas CMMI.
- Salidas: Resultados o entregables esperados del proceso.
- Historial de cambios: Registro de versiones y modificaciones.

```md
---
title: 🍻 | PR3 Dailys
sidebar_position: 3
---
# 🍻 Proceso para Dailys

Este proceso establece la estructura y los pasos necesarios para realizar reuniones diarias (dailys) efectivas que permitan al equipo mantenerse alineado, monitorear el avance del proyecto y resolver impedimentos de manera oportuna.

## 🎯 Objetivo

- Establecer un proceso a seguir para la realización de dailys efectivas que mejoren la comunicación del equipo y el seguimiento del proyecto.

## 📥 Entradas

1. Plan de iteración del proyecto.
2. Plan de valor ganado del proyecto.
3. Dashboard del proyecto.

## ⚙️ Proceso


| Fase                            | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Responsable                     | Meta y práctica específica del CMMI                                                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Preparación**                | Abrir el plan de iteración, plan de valor ganado, dashboard y miro (en la departamental para impedimentos).                                                                                                                                                                                                                                                                                                                                                                     | Team Leader / PM                | **PP, SP 3.1** (Revisar los planes que afectan al proyecto)                                                                                                  |
| **Participación**              | Cada integrante responde**¿Qué hice ayer?** acorde a las**tareas del plan de iteración**: <br/>- **Si la tarea fue finalizada**: Verificar que la fecha y costo real estén actualizados y asignar una nueva tarea. <br/>- **Si la tarea no pudo ser finalizada:** Identificar el impedimento y anotarlo para resolverlo posteriormente. <br/>  A. Establecer un nuevo compromiso público con la tarea <br/>  B. Cambiar de responsable <br/>  C. Buscar quién puede ayudar | Team Leader / PM / Team Members | **PMC, SP 1.2** (Monitorear compromisos), **PMC, SP 1.6** (Llevar a cabo las revisiones del progreso), **PMC, SP 1.1** (Monitorear parámetros del proyecto) |
| **Estado del proyecto**         | Con el**dashboard** un miembro aleatorio responde: ¿Dónde estamos? ¿Dónde debemos estar? ¿Cuánto nos ha costado? ¿Cómo está la calidad? ¿Por qué estamos donde estamos?                                                                                                                                                                                                                                                                                             | Team Members                    | **PMC, SP 1.6** (Llevar a cabo las revisiones del progreso), **PP, SP 3.1** (Revisar los planes que afectan al proyecto)                                     |
| **Toma de decisiones**          | Si el proyecto está atrasado o adelantado, determinar la causa raíz y tomar decisiones estratégicas para corregir el curso.                                                                                                                                                                                                                                                                                                                                                   | Team Members                    | **PMC, SP 1.1** (Monitorear parámetros del proyecto)                                                                                                        |
| **Resolución de impedimentos** | Posterior a la daily, resolver los impedimentos identificados durante la reunión.                                                                                                                                                                                                                                                                                                                                                                                               | Team Leader / PM                | **PMC, SP 2.1** (Analizar problemas)                                                                                                                         |

## 📤 Salidas

1. Plan de Valor Ganado actualizado.
2. Impedimentos identificados y plan de resolución.
3. Compromisos actualizados para las próximas 24 horas.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0** | Primera versión del PR19 | 03/03/2025 | Arturo Sánchez Rodríguez |
    | **1.1** | Actualización de fases y prácticas CMMI según nuevo documento | 01/04/2025 | Juan Pablo Chávez Leal |
    | **1.1** | Inclusión de análisis de riesgos y toma de decisiones | 01/04/2025 | Daniel Contreras Chávez |
    | **1.2** | Actualización de fases y prácticas CMMI según nuevo documento | 02/04/2025 | Hiram Israel Mendoza López |
    | **1.2** | Actualización de fases y prácticas CMMI según nuevo documento | 02/04/2025 | Mauricio Anguiano Juárez |
    | **1.2** | Actualización de fases y prácticas CMMI según nuevo documento | 02/04/2025 | Emiliano Valdivia Lara |
    | **1.3** | Inclusión de SP 2.1 del área de proceso MA | 08/04/2025 | Ian Julián Estrada Castro |
    | **1.4** | Refactorización | 18/04/2025 | Diego Fuentes |
    | **1.5** | Corrección PMC 1.1 | 22/04/2025 | Juan Pablo Chávez |
    | **2.0** | Cambio de todo el proceso para coincidir con cómo hacemos una daily efectiva | 25/04/2025 | Diego Fuentes |
    | **2.1** | Identificación de práctica 2.4 de MA | 25/04/2025 | Diego Fuentes |
    | **2.2** | Corregir CMMI y simplificar el proceso | 09/05/2025 | Valeria Zúñiga |
    | **2.3** | Eliminar riesgos del proceso | 13/05/2025 | Paola María Garrido |
    | **2.4** | Corrección SP 3.1 Revisar los planes que afectan al proyecto | 13/05/2025 | Arturo Sánchez |
    | **3.0** | Actualización al formato estándar de procesos | 18/05/2025 | Angel Mauricio Ramírez Herrera |
</details>

```

## 🧩 Ejemplo de uso

Esta plantilla debe utilizarse para documentar procesos organizacionales como:

- Proceso de dailies
- Proceso de gestión de riesgos
- Proceso de onboarding de creacion de items

## ©️ Bloque de código con la plantilla `.md`

```md
---
title: [Nombre del Proceso]
sidebar_position: [Número]
---

# 🧩 [Nombre del Proceso]

[Breve descripción del proceso y su importancia dentro de la organización]

## 🎯 Objetivo

- [Definir el propósito del proceso].

## 📥 Entradas

1. [Enlistar las entradas necesarias para iniciar el proceso].
2. [Segunda entrada necesaria].
3. [Tercera entrada necesaria].

## ⚙️ Proceso

| Fase | Descripción | Responsable | Meta y práctica específica del CMMI |
| ---- | ----------- | ----------- | ----------------------------------- |
| **[Nombre de la Fase]** | Explicar los pasos clave de esta fase de manera breve y clara. | Persona o rol asignado. | **Siglas del área de proceso, SP 0.0** (Nombre de la práctica específica). |
| **[Nombre de la Fase]** | Explicar los pasos clave de esta fase de manera breve y clara. | Persona o rol asignado. | **MA, SP 1.2** (Especificar medidas), **PPQA, SP 1.1** (Evaluar procesos). |

## 📤 Salidas

1. [Enlistar los resultados o entregables esperados del proceso].
2. [Segunda salida o entregable].
3. [Tercera salida o entregable].

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0.0** | Creación inicial del proceso. | [Fecha] | [Nombre de colaborador] |
</details>
```

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0.0** | Refactorización completa de la wiki. | 19/04/2025 | Valeria Zúñiga Mendoza |
    | **1.1.0** | Se actualizó la plantilla de procesos siguiendo el estándar de versionamiento. | 06/03/2025 | Diego Ricardo Alfaro Pinto |
    | **1.2.0** | Se corrigieron errores de ortografía. | 08/05/2025 | Diego Ricardo Alfaro Pinto |
    | **1.3.0** | Se corrigieron errores de ortografía. | 08/05/2025 | Paola María Garrido Montes |
    | **1.4.0** | Agregar descripción | 15/05/2025 | Diego Antonio García Padilla |
    | **2.0.0** | Actualización al nuevo formato estándar | 18/05/2025 | Angel Mauricio Ramírez Herrera |
</details>
