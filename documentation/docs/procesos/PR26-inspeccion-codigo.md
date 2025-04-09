---
title: PR26 Inspección de código
sidebar_position: 26
---

# PR26 Proceso de Inspección de Código

:::warning Importante  
Una inspección de código es una revisión manual del código fuente para verificar que cumple con las reglas de programación y diseño. Es costosa por lo que no es efectivo hacer una inspección en componentes pequeños. Lo mejor es hacer inspecciones en componentes **críticos** del proyecto. Un componente crítico es aquel que si tiene defectos, afecta los objetivos del proyecto.
:::

---

## Objetivo

- Encontrar los defectos en los componentes a inspeccionar.
- Asegurar que el componente sigue los estándares definidos.

---

## Entradas
1. Componente listo para su inspección al cual todos tienen acceso.
2. Tamaño del componente a inspaeccionar.
3. Lista de revisión de código (Checklist).

## Proceso

| Fase              | Descripción    | Responsable             | Meta y práctica específica del CMMI    |
| ----------------- | -------------- | ----------------------- | -------------------------------------- |
| **Preparación**   | Se informa del componente a inspecccionar. Se designan **inspectores** de código (Lo ideal es de 4 a 6 inspectores). | Miembros del equipo | |
|                   | Se presenta el componente y el código fuente. | Autor del código | |
|                   | Una vez concluida la presentación, se abre un espacio para dudas de los inspectores. | Autor del código | |
| **Inspección**    | Se hace la revisión del código usando la checklist. La inspección debe hacerse por separado. | Inspectores | |
| **Documentación** | Los defectos son documentados en el log de defectos individual. Todo lo que se considere como defecto se registra. | Inspectores | |
|                   | Los defectos documentados se agrupan en el log de defectos y se evalúan. | Inspectores | |
|                   | Se calcula el número estimado de defectos en el producto utilizando la técnica Catch-Recatch: **(A*B)/C** | Inspectores | |
|                   | Se calcula la densidad de los defectos (KLOC) | Inspectores | |
| **Estimación**    | Se hace una estimación del tiempo para hacer las correciones y se agrega al PVG | Inspectores | |
| **Corrección**    | Se hacen las correcciones de los defectos con base al log de defectos | Autor del código | |

## Salidas

1. Componente libre de defectos documentados en el log de defectos

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha**  | **Colaborador**           |
| ------------------- | --------------------------------------------- | ---------- | ------------------------- |
| **1.0**             | Primera versión del PR26                      |  | Ian Julián Estrada Castro |
