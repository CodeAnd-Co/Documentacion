---
title: PR16 Inspección de código
sidebar_position: 16
---

# Proceso de inspección de código

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
2. Tamaño del componente a inspeccionar.
3. Lista de revisión de código (Checklist).

---

## Proceso

| Fase              | Descripción    | Responsable             | Meta y práctica específica del CMMI    |
| ----------------- | -------------- | ----------------------- | -------------------------------------- |
| **Preparación**   | Se informa del componente a inspecccionar. Se designan **inspectores** de código (Lo ideal es de 4 a 6 inspectores). | Miembros del equipo | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación) |
|                   | Se presenta el componente y el código fuente. | Autor del código | **VER SP 1.2** (Establecer el entorno de verificación) |
|                   | Una vez concluida la presentación, se abre un espacio para dudas de los inspectores. | Autor del código | **VER SP 1.2** (Establecer el entorno de verificación) |
| **Inspección**    | Se hace la revisión del código usando la <u>_[checklist de código](../recursos/checklists.md)_</u>. La inspección debe hacerse por separado. Se hace una lectura del código por cada apartado de la checklist. | Inspectores | **VER SP 2.1** (Preparar las revisiones entre pares), **PPQA SP 1.2** (Evaluar objetivamente los productos de trabajo) |
| **Documentación** | Los defectos son documentados en el log de defectos individual. Todo lo que se considere como defecto se registra. | Inspectores | **VER SP 2.2** (Realizar las revisiones entre pares) |
|                   | Los defectos documentados por cada inspector se agrupan en el log de defectos y se evalúan. | Inspectores | **VER SP 2.2** (Realizar las revisiones entre pares) |
|                   | Se calcula el número estimado de defectos en el producto utilizando la técnica Catch-Recatch: **(A*B)/C** | Inspectores | **MA SP 2.1** (Obtener los datos de la medición) |
|                   | Se calcula la densidad de los defectos (KLOC) | Inspectores |  **MA SP 2.2** (Alalizar los datos de la medición) |
| **Estimación**    | Se hace una estimación del tiempo para hacer las correciones y se agrega al PVG sin asignarle valor | Inspectores | **PP SP 2.4** (Planificar los recursos del proyecto) |
| **Corrección**    | Se hacen las correcciones de los defectos con base al log de defectos | Autor del código | |

---

## Salidas

1. Componente libre de defectos documentados en el log de defectos

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha**  | **Colaborador**           |
| ------------------- | --------------------------------------------- | ---------- | ------------------------- |
| **1.0**             | Primera versión del PR26                      | 10/04/2025 | Ian Julián Estrada Castro |
| **1.2**             | Refactorización                               | 18/4/2025  | Diego Fuentes             |