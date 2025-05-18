---
title: Política de cambio de requisitos

sidebar_position: 1
---

# **Política de cambio de requisitos**

---

## **1. Objetivo**
Establecer los lineamientos y criterios para gestionar de forma ordenada, justificada y transparente las solicitudes de cambio a los requisitos del proyecto. El objetivo es asegurar que cada modificación sea evaluada según su impacto, viabilidad y valor agregado, evitando que su implementación comprometa la calidad, el cronograma o los objetivos establecidos.

## **2. Alcance**
Esta política aplica a todos los miembros del equipo involucrados en el desarrollo, validación, gestión y mantenimiento de requisitos dentro del proyecto. Cubre desde la recepción de una solicitud de cambio hasta su evaluación, aprobación o rechazo, y en caso necesario, la incorporación controlada del cambio al plan de trabajo. Incluye tanto cambios solicitados por el cliente como por cualquier rol interno (PO, AO, TL, desarrolladores, testers, etc.).

### Criterios de gravedad

| Impacto | Descripción | Ejemplos 
| ------- | ----------- | - | 
|   **Bajo**  | Cambios estéticos o de bajo riesgo que no afectan la operación si no se implementan. | - Cambios en la interfaz de usuario sin impacto funcional  <br/>- Corrección de errores tipográficos <br/>- Actualización menor en documentación interna |
|  **Medio**  | Afecta funcionalidades importantes pero no críticas, puede afectar la experiencia del usuario pero no detiene la operación completa. | - El cambio mejora un módulo secundario <br/> - El cambio corrige errores que tienen soluciones alternativas (workarounds) disponibles <br/> - El cambio optimiza procesos internos | 
|  **Alto**   | Afecta funcionalidades principales (core) del sistema, es necesario para cumplir requisitos regulatorios/legales, la ausencia del cambio puede interrumpir o detener la operación de usuarios finales. | - El cambio corrige violaciones regulatorias <br/> - El cambio repara fallos que bloquean procesos críticos <br/> - El cambio evita pérdida de datos importantes | 

### Afectación al cronograma
- Comparar el esfuerzo estimado con la capacidad del equipo para determinar si hay margen para absorber el cambio.
- Identificar si el cambio afecta módulos críticos o entregas prioritarias.
- Evaluar si es necesario reprogramar tareas existentes o reasignar recursos.

### Criterios de aceptación

Los líderes del equipo deberán evaluar cada solicitud de cambio considerando los siguientes criterios, cada uno con un peso asignado. Para que un cambio sea aprobado, deberá cumplir con al menos el **75% del puntaje total posible** (es decir, 3.75 de un total de 5 puntos).

#### Tabla de criterios con peso

| Criterio                   | Descripción                                                                                                                                      | Peso (%) |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| **Factibilidad Técnica**   | El equipo tiene la capacidad técnica de implementar el cambio sin comprometer la estabilidad del sistema.                                        | 30%      |
| **Disponibilidad de tiempo** | La implementación del cambio es viable dentro del cronograma sin afectar entregas críticas.                                                       | 25%      |
| **Valor agregado**         | El cambio mejora la experiencia del usuario, la funcionalidad del sistema o la alineación con los objetivos del cliente.                         | 30%      |
| **Compatibilidad**         | No genera conflictos graves con otros requisitos u otros módulos del sistema.                                                                   | 15%      |

#### Forma de evaluación

Cada criterio se evalúa en una escala del 1 al 5:
- **1 = Muy bajo**
- **2 = Bajo**
- **3 = Medio**
- **4 = Alto**
- **5 = Muy alto**

Se multiplica el puntaje asignado por el peso del criterio. Por ejemplo, si “Factibilidad técnica” se evalúa como 4, se obtiene 4 × 30% = **1.2 puntos**.

#### Aprobación del cambio

- La solicitud será **aprobada** si el **puntaje total es mayor o igual a 3.75** (de un máximo de 5).
- La solicitud será **rechazada** si no alcanza ese umbral.
- Las solicitudes con puntajes entre **3.5 y 3.75** pueden entrar en una **segunda revisión**, con propuestas de mitigación o ajustes antes de tomar la decisión final. 
- Las solicitudes deben cumplir con al menos uno de los siguientes principios, además de superar el porcentaje mínimo en la evaluación:
  - **Corrección de defectos críticos:** soluciona errores/deficiencias graves detectadas durante el uso del sistema. 
  - **Mejora de valor para el usuario:** representa una mejora importante en la funcionalidad, usabilidad o satisfacción del cliente. 
  - **Cumplimiento de requisitos legales o normativos:** es necesario para cumplir nuevas regulaciones o estándares del departamento/empresa. 
  - **Solicitud formal del cliente:** proviene de una petición formal del cliente y es esencial para satisfacer sus expectativas. 
  - **Optimización del sistema:** optimiza el rendimiento, la eficiencia o el mantenimiento del sistema sin impactar negativamente en el alcance o el cronograma. 


## Historial de cambios

| **Tipo de versión** | **Descripción**                                      | **Fecha** | **Colaborador**                                   |
| ------------------- | ---------------------------------------------------- | --------- | ------------------------------------------------- |
| **1.0**             | Definición de cómo decidimos qué requisitos aceptar. |            | Angélica Ríos                                    |
| **2.0**             | Criterios de aceptación, gravedad y cronograma.      |            | Daniel Contreras                             |
| **2.1**             | Correcciones de criterios de gravedad y criterios de aceptación, para llenar el registro de cambios.    |      22/04/2025        |  Max Toscano
| **3.0**             |  Creación de política con la información que se encontraba en el proceso. |      14/05/2025        |  Paola María Garrido
