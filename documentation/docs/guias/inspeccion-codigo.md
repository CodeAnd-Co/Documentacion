---
title: Guía para inspección de código
---

---

Una inspección de código es una revisión manual del código fuente para verificar que cumple con las reglas de programación y diseño. Esta guía describe los pasos y consideraciones necesarias para realizar una inspección de código de manera efectiva. Se debe seguir cada uno de los pasos.

:::warning Importante  
 Una inspección de código es costosa por lo que no es efectivo hacer una inspección en componentes pequeños. Lo mejor es hacer inspecciones en componentes **críticos** del proyecto. Un componente crítico es aquel que si tiene defectos, afecta los objetivos del proyecto.
:::

## 1. Seleccionar el ítem de trabajo a inspeccionar

- Dependiendo de la prioridad, se determina que ítem de trabajo se inspeccionará. (Archivos y sus localizaciones dentro del repositorio)

## 2. Identificación de roles 

- El autor del código explica el flujo y funcionamiento a los inspectores.
- Se designan **inspectores** de código (Lo ideal es de 4 a 6 inspectores).

## 2.1 Entorno de inspección

- Los inspectores abren la [plantilla defect log](https://docs.google.com/spreadsheets/d/1GwKcoKU2H5aKZJyG1p9df5Mvue4CNbyBMvIjGhjbyxg/edit?usp=sharing). Se hace una copia y se le da el nombre de Inspección-Fecha.
- Cada inspector hace su propia hoja con su nombre. 
- Cada inspector abre la [checklist de código](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa). 
- Cada inspector abre el estándar de [codificación departamental](\docs\standards\general.md).
- Una vez concluida la explicación del código, se abre un espacio para dudas de los inspectores que serán respondidas por el autor del código.
- Una vez concluido el espacio de preguntas, los inspectores de código deben estar a una distancia considerable y sin comunicarse entre ellos. 
- Cualquier duda se hace directamente con el autor del código.

## 3. Realizar la inspección

- Cada inspector lee los archivos una vez por cada categoría de defecto. (estilo, seguridad, etc)
- El inspector llena los campos correspondientes de su hoja con los defectos encontrados. Todo lo que se considere defecto se registra.
- En el apartado de severidad:
    - Menor significa que son defectos de estilo, legibilidad, Git y documentación.
    - Mayor significa que son defectos de lógica y complejidad.
    - Critico significa que son defectos de seguridad y funcionalidad. Además de afectar a los requerimientos no funcionales. 

## 4. Pasar los defectos al log

- Una vez concluido el tiempo para la inspeccion individual se elije al inspector A. Este es el que encontró más defectos durante la inspección, este tambien sera el inspector 1
- Este pasa todos sus error directamente a la pestaña de "Log"
- Los demás inspectotres se tienen que asignar un numero (entre el numero de inspectores totales), el cual representa en que orden van a registrar sus errores.
- Despues los inspectores tambien pasan sus defectos al "Log", pero si se encuantran coincidencias con los errores que ya estaban en "Log" estos ponen un uno en su columna correspondiente de inspector
- Asi se tienen que pasar por todos los inspectores 

## 5. Resumen de inspección

- Se hace la suma de todos los defectos encontrados por inspector y el total de todos los defectos. Esto se hace en la parte superior de la hoja de log.
- Se hace la suma de defectos únicos del inspector 1
- Se hace la suma de defectos en común entre inspector 1 y el resto de inspectores
- Se hace la suma de defectos mayores y menores

## 5.1. Estimación de defectos

- Para la estimación de defectos se utiliza la técnica Catch-Recatch representada por la siguiente fórmula: (A*B)/C
- A es el inspector que encontró más defectos 
- B son los defectos encontrados por el resto de inspectores
- C son los defectos en común entre A y B
- Estos datos se colocan en la hoja de *Resumen*

## 5.2 Calcular la densidad de los defectos.
- Una vez aplicada la técnica del paso anterior, se calcula automáticamente la densidad de defectos por cada mil líneas de código (KLOC) en la pestaña de resumen.

## 5.3 Estimación de costos para corrección de defectos  
- Una vez que se encuentran todos los errores, se agregan al defect log de cada proyecto 
- Se estima el tiempo que se necesitará para corregir todos esos errores determinado por el tamaño del proyecto.
- Se agregan estas correcciones al PVG de cada proyecto 
- No se le asigna valor a estas tareas.

## Correcciones
- Corregir todos los defectos encontrados y llenar la información del defect log de manera acorde a cuándo se arreglaron los defectos y por quién.
- Una vez que se han corregido, se marca la tarea creada en el PVG como completada.
