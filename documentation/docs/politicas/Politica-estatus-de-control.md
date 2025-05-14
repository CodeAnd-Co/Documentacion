---
title: Política de estatus de control
sidebar_position: 5
---

# **Política de estatus de control de la matriz de configuración**

---

## **1. Objetivo**

Este documento tiene como finalidad describir la política de control de estatus aplicada en la matriz de configuración, utilizada para clasificar y dar seguimiento a los elemento de configuración.

---

## **2. Tipos de Estatus**

### **Estatus Estático**

Indica que un elemento de configuración o producto de trabajo ya fue validado y cumple con las políticas y estándares establecidos por el departamento. Generalmente, no requiere modificaciones, a menos que haya actualizaciones relevantes en normativas, lineamientos o procedimientos. Una vez asignado este estatus, la versión se considera como base de referencia.

### **Estatus Dinámico**

Se refiere a elemento de configuración que están siendo trabajados, ajustados o en revisión continua. Son susceptibles a cambios frecuentes debido a nuevas prácticas, comentarios de los usuarios o ajustes necesarios. Es fundamental consultar siempre la última versión disponible.

### **Estatus Bajo Revisión**

Esta categoría aplica a elementos de configuración que han sido seleccionados específicamente para evaluación, pero que aún no concluyen su proceso de auditoría. Puede tratarse de material que anteriormente fue estático o que está en una fase crítica de análisis antes de volverse base estable.

---

## **3. ¿Para qué sirven estos estatus?**

### **Claridad y seguimiento**

Permiten a cualquier persona identificar de inmediato qué tan estable o confiable es un elemento de configuración o producto de trabajo.

### **Gestión efectiva**

Facilitan el trabajo de actualización, ya que distinguen fácilmente entre elementos en desarrollo, elementos estandarizados y elementos en revisión.

### **Control de calidad**

Un elemento de configuración o producto de trabajo en estatus estático refleja que ha pasado por una evaluación rigurosa y está alineado con los objetivos de calidad del área.

---

## **4. Cambios entre estatus**

- Los elemento de configuración o producto de trabajo en estatus dinámico pueden pasar a estático cuando completan exitosamente una auditoría y no requieren más ajustes relevantes.

- De igual forma, un elemento de configuración o producto de trabajo estático puede regresar a estado dinámico si se identifican cambios sustanciales que afecten su versión principal (por ejemplo, pasar de la versión 1.x a 2.0), lo cual implica que se debe realizar una nueva auditoría.

- En cambio, si los ajustes realizados son menores (por ejemplo, solo afectan los decimales como pasar de la versión 1.4 a 1.6), el documento puede conservar su estatus estático sin necesidad de una auditoría adicional, siempre que dichos cambios no alteren su validez y se siga el estandar de versiones. [EST05 | Estándar de versiones](docs/standards/versionamiento-productos-trabajo.md).

---
## Historial de cambios

| **Tipo de versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación de la política.                       | 14/05/2025 | Armando Méndez Castro   |