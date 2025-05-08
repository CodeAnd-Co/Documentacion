---
title: PR13 Acciones correctivas
sidebar_position: 13
---

# Proceso para acciones correctivas

---

### Objetivo

- Asegurar la identificación, análisis y corrección de problemas en los procesos organizacionales, garantizando su mejora continua y alineación con los objetivos de la empresa.

---

### Entradas

1. Riesgo identificado.
2. Problema detectado en un proceso existente.
3. Propuesta de mejora aprobada.
4. Cambio en las necesidades u objetivos de la empresa.
5. Incumplimiento de estándares de codificación.
6. Código no testeable.
7. Requisitos mal identificados.

---

### No conformidad

Situación en la que el producto o acuerdo de trabajo no cumple con los requisitos establecidos:
- Estándares.
- Especificaciones.
- Políticas.
- Criterios de calidad.

#### Ejemplos

- Código que no sigue estándares.
- Funcionalidades que no cumplen con lo especificado en los requisitos.
- Pruebas no ejecutables o con resultados ignorados.
- Documentación no completa o ausente.

### Proceso

| Fase                                       | Descripción                                                                                                                                                                                                                                                                                                      | Responsable             | Meta y práctica específica del CMMI                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| **Identificar la no conformidad**          | Identifica cualquier desviación de los estándares para productos de trabajo o procesos que afecte el cumplimiento de los objetivos del proyecto. Ten a la mano los documentos de la sección de "Entradas".                                                                                                       | Miembro del equipo      | **OPD, SP 1.1**, **RSKM, SP 2.1**, **PMC, SP 2.1**, **PPQA SP 2.1**                                             |
|                                            | Documenta las no conformidades en el [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0), llenando los campos correspondientes.                                                                                          | Miembro del equipo      | **PMC, SP 2.1**, **REQM SP 1.5**, **PPQA SP 2.1**                                                               |
| **Análisis del problema**                  | Analiza los problemas documentados, utilizando los criterios establecidos para decidir si se requiere acción correctiva. Puedes apoyarte del [Estándar para la Modificación o Creación de Procesos](https://codeandco-wiki.netlify.app/docs/standards/modificacion-procesos/).                                                                                                                                                                                          | Miembro del equipo      | **PMC, SP 2.1**, **RSKM, SP 2.2**, **RSKM, SP 3.1**, **REQM SP 1.5**, **PPQA SP 2.1**                           |
|                                            | Identifica y documenta los stakeholders relevantes en la columna correspondiente.                                                                                                                                                                                                                                | Miembro del equipo      | **PMC, SP 2.1**                                                                                |
| **Notificar no conformidad**               | Notifícala formalmente a los stakeholders y responsables, por correo, mensaje o reunión. Registra la fecha y responsables en el [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0).                                     | QA / Líder de equipo    | **PPQA, SP 2.1**                                                                               |
| **Registrar en el reporte**                | Documenta todas las no conformidades y acciones correctivas en el [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0), llenando los campos correspondientes.                                                             | QA / Miembro del equipo | **PPQA, SP 2.1**                                                                               |
| **Obtener aprobación de stakeholders**     | Revisa el problema y las acciones propuestas con los stakeholders afectados. Registra su aprobación en el [Repositorio de Acciones Correctivas](https://docs.google.com/spreadsheets/d/1bWcGOW0PjlB6ws4VDCAXw4rdlsBL1s1UbFidUgTCvCM/edit?gid=0#gid=0).                                                           | Miembro del equipo      | **PMC, SP 2.2**, **OPF, SP 3.2**, **OPD, SP 1.3**, **PPQA SP 2.1**                                              |
| **Llevar a cabo las acciones correctivas** | Agrega las tareas correspondientes al plan de trabajo, incluyendo responsable, fecha de realización y costo. Regístralo en la columna “Tareas agregadas al plan de trabajo”.                                                                                                                                     | Miembro del equipo      | **PMC, SP 2.2**, **REQM SP 1.5**, **PPQA SP 2.1**                                                               |
|                                            | Anota la fecha en que se aplican las acciones correctivas en la columna “Fecha de ejecución”.                                                                                                                                                                                                                    | Miembro del equipo      | **PMC, SP 2.2**, **REQM SP 1.5**                                                               |
|                                            | Verifica que las tareas se hayan cumplido conforme a lo planeado. Registra el cumplimiento en la columna “¿Se cumplieron todas las tareas agregadas en tiempo y forma?”.                                                                                                                                         | Miembro del equipo      | **PMC, SP 2.3**, **REQM SP 1.5**, **PPQA SP 2.1**                                                               |
| **Validación y seguimiento**               | Agenda una revisión de los resultados. Registra en la columna “Fecha de revisión”. Evalúa si las acciones correctivas fueron efectivas y regístralo en “¿Resolvió el problema?”.                                                                                                                                 | QA / Miembro del equipo | **PPQA, SP 1.1**, **PPQA, SP 1.2**, **PPQA, SP 2.1**, **PMC, SP 2.3**, **REQM SP 1.5**         |
|                                            | Si no se resolvió el problema, documenta áreas de oportunidad y repite el proceso desde la fase correspondiente.                                                                                                                                                                                                 | Miembro del equipo      | **PMC, SP 2.3**, **PPQA SP 2.1**                                                                                |
| **Escalar si no se resuelve**              | Si la no conformidad persiste sin solución, escálala volviendo a aplicar este proceso.                                                                                                                                                                                                                           | QA / Gerente            | **PPQA, SP 2.1**                                                                               |

---

### Salidas

1. Resolución de la no conformidad.
2. Historial de cambios.
3. Corrección validada y en funcionamiento.
4. Comunicación formal de la no conformidad.
5. Repositorio de acciones correctivas y no conformidades actualizado.

---

## Tabla de criterios

| Criterio                                           | Pregunta guía                                                                                                                              | ¿Requiere acción correctiva?      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| Impacto en objetivos                               | ¿Este problema puede afectar el cumplimiento de los objetivos del proyecto (tiempo, calidad, alcance, costo)?                              | Sí                                |
| Compromisos no cumplidos                           | ¿Existen compromisos (internos o externos) que no se están cumpliendo según lo planeado?                                                   | Sí                                |
| Repetición del problema                            | ¿Es una desviación o situación que ya ha ocurrido antes y aún no ha sido atendida?                                                         | Sí                                |
| Acción previa fallida                              | ¿Es una desviación o situación que ya se abordó anteriormente, pero el problema persiste?                                                  | Sí                                |
| Gravedad                                           | ¿Es una desviación significativa respecto al plan, métricas o compromisos?                                                                 | Sí                                |
| Riesgo materializado                               | ¿Corresponde a un riesgo previamente identificado que ahora se ha hecho realidad?                                                          | Sí (Atender plan de contingencia) |
| Interrupción de procesos                           | ¿Afecta el flujo de trabajo, la disponibilidad de recursos o la continuidad del proyecto?                                                  | Sí                                |
| Falta de participación de stakeholders             | ¿Se observa una baja participación, compromiso o coordinación deficiente entre los interesados?                                            | Sí                                |
| Gestión o seguridad de datos comprometida          | ¿Se han detectado accesos no autorizados o fallos en la privacidad, integridad o disponibilidad de los datos o productos de trabajo?       | Sí                                |
| Desviación de los estándares de codificación       | ¿El código presenta inconsistencias, malas prácticas o no cumple con los estándares definidos por el equipo o la organización?             | Sí                                |
| Problemas en pruebas o validación                  | ¿Se han detectado errores no capturados por pruebas, falta de cobertura o ejecución inadecuada de pruebas?                                 | Sí                                |
| Problemas en la gestión y/o seguridad de los datos | ¿Se han identificado errores, accesos no controlados o compromisos en la privacidad, integridad o disponibilidad de los datos o productos? | Sí                                |
| Fallas en la identificación de requisitos          | ¿Se han omitido, malinterpretado o identificado incorrectamente requisitos funcionales o no funcionales?                                   | Sí                                |
| Sin impacto aparente                               | ¿No tiene consecuencias observables ni potenciales si no se atiende?                                                                       | No (solo registrar)               |


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