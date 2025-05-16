---
title: PR13 Acciones correctivas
sidebar_position: 13
---

# Proceso para acciones correctivas

---

### Objetivo

- Detectar, registrar, comunicar, dar seguimiento y resolver de forma objetiva las no conformidades identificadas.
- Asegurar que se tomen acciones correctivas adecuadas, manteniendo la calidad de los procesos y productos conforme a los estándares y procedimientos definidos por el departamento.

:::tip ¿Qué es una no conformidad?

Situación en la que el producto o acuerdo de trabajo no cumple con los requisitos establecidos, tales como estándares, especificaciones, políticas o criterios de calidad.

:::

---

### Entradas

1. Matriz de riesgos.
2. Informe de evaluación. 
3. Defect Log.

---

### Proceso

| Fase                                       | Descripción                                                                                                                                                                                                                                                                                                      | Responsable             | Meta y práctica específica del CMMI                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| **Identificar la no conformidad**          | Identificar en las entradas del proceso aquellas cuestiones que cuente con alguno de los [criterios establecidos](../procesos/PR13-acciones-correctivas.md#tabla-de-criterios) para aplicar una acción correctiva.                                                                                              | Team member             | **OPD SP 1.1** (Esrablecer los procesos estándar), **PMC 2.1** (Analizar las cuestiones), **PPQA SP 2.1** (Comunicar y resolver las no conformidades)                                          |
| | En caso de que la entrada sea el defect log, analizar los resultados obtenidos sobre lo que se había especificado. | Team member | **VER SP 3.2** (Analizar los resultados de las actividades de verificación e identificar acciones correctivas). |
|                                            | Documenta las no conformidades en el [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0), llenando los campos correspondientes: <br/>-Fecha de identificación <br/>-Fuente de origen <br/>-Descripción breve del problema <br/>-Urgencia de la correción <br/>-Acción correctiva (tareas) <br/>-Responsable de implementar   <br/><br/>  *Nota: Si la no conformidad no puede resolverse dentro del proyecto, deberá escalarse al nivel de gestión designado para su atención (PMs o Maestros).*   | Team member             | **PMC SP 2.1** (Analizar las cuestiones), **PPQA SP 2.1** (Comunicar y resolver las no conformidades), **PPQA SP 2.2** (Establecer los registros), **PMC SP 2.2** (Llevar a cabo las acciones correctivas)                                                               |                                                                                                    | Miembro del equipo      |                                              |
| **Aprobación stakeholders**                | Identificar a los stakeholders relevantes y obtener su aprobación de las acciones a tomar.                                                                                                                                                                                              | Team member             | **PMC, SP 2.2** (Llevar a cabo las acciones correctivas)                                                                               |
|                                            | Documentar la fecha de aprobación.                                                                                                                                                                                                    | Team member             | **PMC, SP 2.2** (Llevar a cabo las acciones correctivas)                                                                               |
| **Llevar a cabo las acciones correctivas** | Realiza la acción correctiva y documenta la fecha de ejecucción.                                                                                                                                                                                                 | Team member             | **PMC, SP 2.2** (Llevar a cabo las acciones correctivas)                                                                               |
| **Validar la acción correctiva**           | Identifica la métrica o documentación (algo tangible) que demuestre que la accion correctiva fue exitosa.      | Team member             | **PMC, SP 2.3** (Gestionar las acciones correctivas)                                                                               |
|                                            | Si la no conformidad persiste, repite el proceso nuevamente y documenta por qué no fue exitoso.                                                   | Team member             | **PMC, SP 2.3** (Gestionar las acciones correctivas), **PPQA SP 2.2** (Establecer los registros)                                                                              |
|                                            | Si la resolución fue exitosa, notifica a los stakeholders y documenta la evidencia de resolución.                                                              | Team member             | **PPQA, SP 2.1** (Comunicar y resolver las no conformidades)                                                                               |

---

### Salidas

1. Repositorio de acciones correctivas y no conformidades actualizado.


---

## Tabla de criterios

| Criterio                                           | Pregunta guía                                                                                                                              | 
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | 
| Impacto en objetivos                               | ¿Este problema puede afectar el cumplimiento de los objetivos del proyecto (tiempo, calidad, alcance, costo)?                              | 
| Acción previa fallida                              | ¿Es una desviación o situación que ya se abordó anteriormente, pero el problema persiste?                                                  | 
| Gravedad                                           | ¿Es una desviación significativa respecto al plan, métricas o compromisos?                                                                 |
| Riesgo materializado                               | ¿Corresponde a un riesgo previamente identificado que ahora se ha hecho realidad?                                                          | 
| Interrupción de procesos                           | ¿Afecta el flujo de trabajo, la disponibilidad de recursos o la continuidad del proyecto?                                                  | 
| Falta de participación de stakeholders             | ¿Se observa una baja participación, compromiso o coordinación deficiente entre los interesados?                                            | 
| Gestión o seguridad de datos comprometida          | ¿Se han detectado accesos no autorizados o fallos en la privacidad, integridad o disponibilidad de los datos o productos de trabajo?       |
| Desviación de los estándares de codificación       | ¿El código presenta inconsistencias, malas prácticas o no cumple con los estándares definidos por el equipo o la organización?             | 
| Problemas en pruebas o validación                  | ¿Se han detectado errores no capturados por pruebas, falta de cobertura o ejecución inadecuada de pruebas?                                 | 
| Fallas en la identificación de requisitos          | ¿Se han omitido, malinterpretado o identificado incorrectamente requisitos funcionales o no funcionales?                                   | 

---

## Historial de cambios

| **Tipo de Versión**             | **Descripción**                                             | **Fecha**  | **Colaborador**                                                             |
| ------------------------------- | ----------------------------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| **1.0**                         | Proceso inicial para acciones correctivas                   | 26/03/2025 | Paola Garrido, Valeria Zúñiga                                               |
| **1.1**                         | Se agregó enlace y práctica OPD SP 1.3                      | 31/03/2025  | Ian Julián Estrada Castro                                                   |
| **1.2**                         | Refactorización                                             | 18/04/2025  | Diego Fuentes                                                               |
| **2.0**                         | Proceso actualizado para cumplir con la meta 2 de PMC       | 21/04/2025  | Diego Fuentes, Max Toscano, Paola Garrido, Rommel Toledo, Daniel Queijeiro. |
| **2.1**                         | Correcciones de REQM 1.5                                    | 22/04/2025 | Juan Pablo Chávez Leal                                                      |
| **2.2**                         | Incorporación de PPQA 2.1 (no conformidades y notificación) | 24/04/2025 | Juan Eduardo Rosas Cerón                                                    |
| **2.3**                         | Errores ortográficos | 25/04/2025 | Hiram Mendoza                                                   |
| **3.0**                         | Simplifación del proceso y corrección acorde al CMMI.       | 15/05/2025 | Paola María Garrido, Valeria Zúñiga                                                   |