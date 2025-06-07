---
title: 🦴 | PR13 Acciones correctivas
sidebar_position: 13
---
# 🦴 Acciones correctivas

Detectar, registrar, comunicar, dar seguimiento y resolver de forma objetiva las no conformidades identificadas, asegurando que se tomen acciones correctivas adecuadas y manteniendo la calidad de los procesos y productos conforme a los estándares y procedimientos definidos por el departamento.

## 🎯 Objetivo

- Detectar, registrar, comunicar, dar seguimiento y resolver de forma objetiva las no conformidades identificadas.
- Asegurar que se tomen acciones correctivas adecuadas, manteniendo la calidad de los procesos y productos conforme a los estándares y procedimientos definidos por el departamento.

:::tip ¿Qué es una no conformidad?

Situación en la que el producto o acuerdo de trabajo no cumple con los requisitos establecidos, tales como estándares, especificaciones, políticas o criterios de calidad.

:::

## 📥 Entradas

1. Matriz de riesgos.
2. Informe de evaluación.
3. Defect Log.
4. Plan de iteración

## ⚙️ Proceso

| Fase                                             | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Responsable | Meta y práctica específica del CMMI                                                                                                                                                                                                          |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Identificar la no conformidad**          | Identificar en las entradas del proceso aquellas cuestiones que cuente con alguno de los [criterios establecidos](../procesos/PR13-acciones-correctivas.md#tabla-de-criterios) para aplicar una acción correctiva.                                                                                                                                                                                                                                                                                                                                                                                 | Team member | **OPD SP 1.1** (Esrablecer los procesos estándar), **PMC 2.1** (Analizar las cuestiones), **PPQA SP 2.1** (Comunicar y resolver las no conformidades)                                                                       |
|                                                  | En caso de que la entrada sea el defect log, analizar los resultados obtenidos sobre lo que se había especificado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Team member | **VER SP 3.2** (Analizar los resultados de las actividades de verificación e identificar acciones correctivas).                                                                                                                         |
|                                                  | Documenta las no conformidades en el [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0), llenando los campos correspondientes:<br />-Fecha de identificación <br />-Fuente de origen <br />-Descripción breve del problema <br />-Urgencia de la correción <br />-Acción correctiva (tareas) <br />-Responsable de implementar<br /><br />*Nota: Si la no conformidad no puede resolverse dentro del proyecto, deberá escalarse al nivel de gestión designado para su atención (PMs o Maestros).* | Team member | **PMC SP 2.1** (Analizar las cuestiones)<br />**PPQA SP 2.1** (Comunicar y resolver las no conformidades)<br />**PPQA SP 2.2** (Establecer los registros)<br />**PMC SP 2.2** (Llevar a cabo las acciones correctivas) |
| **Aprobación stakeholders**               | Identificar a los stakeholders relevantes y obtener su aprobación de las acciones a tomar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Team member | **PMC SP 2.2** (Llevar a cabo las acciones correctivas)                                                                                                                                                                                 |
|                                                  | Documentar la fecha de aprobación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Team member | **PMC SP 2.2** (Llevar a cabo las acciones correctivas)                                                                                                                                                                                  |
| **Llevar a cabo las acciones correctivas** | Realiza la acción correctiva y documenta la fecha de ejecucción.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Team member | **PMC SP 2.2** (Llevar a cabo las acciones correctivas)                                                                                                                                                                                  |
| **Validar la acción correctiva**          | Identifica la métrica o documentación (algo tangible) que demuestre que la accion correctiva fue exitosa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Team member | **PMC SP 2.3** (Gestionar las acciones correctivas)                                                                                                                                                                                      |
|                                                  | En caso de que la acción correctiva sea exitosa, marcar la casilla de **acción exitosa** dentro del [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0).                                                                                                                                                                                                                                                                                                                                           | Team member | **PMC SP 2.3** (Gestionar las acciones correctivas)                                                                                                                                                                                     |
|                                                  | Si la no conformidad persiste, repite el proceso nuevamente y documenta por qué no fue exitoso.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Team member | **PMC SP 2.3** (Gestionar las acciones correctivas)<br />**PPQA SP 2.2** (Establecer los registros)                                                                                                                                |
|                                                  | Si la resolución fue exitosa, notifica a los stakeholders y documenta la evidencia de resolución.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Team member | **PPQA SP 2.1** (Comunicar y resolver las no conformidades)                                                                                                                                                                              |

## 📤 Salidas

1. Repositorio de acciones correctivas y no conformidades actualizado.
2. Plantillas, guías, estándares y procesos corregidos.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)
- [Estándar para la modificación o creación de procesos](/docs/next/standards/modificacion-procesos)

## 🤗 Tabla de criterios

| Criterio                                        | Pregunta guía                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Impacto en objetivos                            | ¿Este problema puede afectar el cumplimiento de los objetivos del proyecto (tiempo, calidad, alcance, costo)?                        |
| Acción previa fallida                          | ¿Es una desviación o situación que ya se abordó anteriormente, pero el problema persiste?                                         |
| Gravedad                                        | ¿Es una desviación significativa respecto al plan, métricas o compromisos?                                                         |
| Riesgo materializado                            | ¿Corresponde a un riesgo previamente identificado que ahora se ha hecho realidad?                                                    |
| Interrupción de procesos                       | ¿Afecta el flujo de trabajo, la disponibilidad de recursos o la continuidad del proyecto?                                            |
| Falta de participación de stakeholders         | ¿Se observa una baja participación, compromiso o coordinación deficiente entre los interesados?                                    |
| Gestión o seguridad de datos comprometida      | ¿Se han detectado accesos no autorizados o fallos en la privacidad, integridad o disponibilidad de los datos o productos de trabajo? |
| Desviación de los estándares de codificación | ¿El código presenta inconsistencias, malas prácticas o no cumple con los estándares definidos por el equipo o la organización?   |
| Problemas en pruebas o validación              | ¿Se han detectado errores no capturados por pruebas, falta de cobertura o ejecución inadecuada de pruebas?                          |
| Fallas en la identificación de requisitos      | ¿Se han omitido, malinterpretado o identificado incorrectamente requisitos funcionales o no funcionales?                             |

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Versión** | **Descripción**                                                    | **Fecha**   | **Colaborador**                                         |
|-------------|------------------------------------------------------------------|-------------|--------------------------------------------------------|
| **1.0.0**   | Proceso inicial para acciones correctivas                        | 26/03/2025  | Paola Garrido, Valeria Zúñiga                           |
| **1.1.0**   | Se agregó enlace y práctica OPD SP 1.3                           | 31/03/2025  | Ian Julián Estrada Castro                               |
| **1.2.0**   | Refactorización del proceso                                       | 18/04/2025  | Diego Fuentes                                          |
| **2.0.0**   | Proceso actualizado para cumplir con la meta 2 de PMC            | 21/04/2025  | Diego Fuentes, Max Toscano, Paola Garrido, Rommel Toledo, Daniel Queijeiro |
| **2.1.0**   | Correcciones de REQM 1.5                                         | 22/04/2025  | Juan Pablo Chávez Leal                                 |
| **2.2.0**   | Incorporación de PPQA 2.1 (no conformidades y notificación)      | 24/04/2025  | Juan Eduardo Rosas Cerón                               |
| **2.3.0**   | Corrección de errores ortográficos                                | 25/04/2025  | Hiram Mendoza                                         |
| **3.0.0**   | Simplificación del proceso y corrección acorde al estándar CMMI  | 15/05/2025  | Paola María Garrido, Valeria Zúñiga                     |
| **3.1.0**   | Agregado paso para introducir versión 3.2                        | 16/05/2025  | Daniel Contreras Chávez                               |
| **3.1.1**   | Mapeo de PMC 2.1 en el proceso.                                           | 30/05/2025    | Paola María Garrido, Angel Mauricio Ramírez Herrera |
| **3.2.0**   | Se agregó el estándar de modificación o creación de proceso como recurso relacionado | 4/06/2025 | Ian Julián Estrada Castro |
</details>
