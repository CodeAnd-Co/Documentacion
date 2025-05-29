---
title: 📜 | Política de estatus de control
sidebar_position: 5
---
# 📜 Política de estatus de control de la matriz de configuración

Esta política clasifica los elementos de configuración como estáticos, dinámicos o en revisión, permitiendo un mejor seguimiento, control de calidad y gestión de cambios. Es clave para asegurar que siempre se trabaje con versiones confiables y actualizadas.

## 🎯 Objetivo

- describir la política de control de estatus aplicada en la matriz de configuración, utilizada para clasificar y dar seguimiento a los elemento de configuración.

## 📊 Alcance

Esta política aplica a:

- Esta política aplica a todos los elementos de configuración y productos de trabajo gestionados dentro de la matriz de configuración de la organización. Abarca desde su creación hasta su liberación final, asegurando trazabilidad, control y consistencia en cada etapa del ciclo de vida del producto.

## 📋 Declaraciones de la política

1. **Clasificación por estatus**

   - Los elementos de configuración deben clasificarse como Estático, Dinámico o Bajo Revisión, según su estado actual dentro del ciclo de vida.
     - **Estatus estático**: Indica que un elemento de configuración o producto de trabajo ya fue validado y cumple con las políticas y estándares establecidos por el departamento. Generalmente, no requiere modificaciones, a menos que haya actualizaciones relevantes en normativas, lineamientos o procedimientos. Una vez asignado este estatus, la versión se considera como base de referencia.
     - **Estatus dinámico**: Se refiere a elemento de configuración que están siendo trabajados, ajustados o en revisión continua. Son susceptibles a cambios frecuentes debido a nuevas prácticas, comentarios de los usuarios o ajustes necesarios. Es fundamental consultar siempre la última versión disponible.
     - **Estatus bajo revisión**: Esta categoría aplica a elementos de configuración que han sido seleccionados específicamente para evaluación, pero que aún no concluyen su proceso de auditoría. Puede tratarse de material que anteriormente fue estático o que está en una fase crítica de análisis antes de volverse base estable.
   - Esta clasificación debe mantenerse actualizada en la matriz de configuración y reflejarse en la documentación correspondiente.
2. **Criterios de cambio de estatus**

   - Un elemento puede cambiar de Dinámico a Estático tras superar una auditoría y no requerir ajustes relevantes.
   - Cambios mayores (e.g., de versión 1.x.x a 2.0.0) deben justificar un cambio de estatus y nueva auditoría. Cambios menores pueden mantenerse como Estático si se sigue el estándar de versiones.
3. **Control y seguimiento**

   - Toda modificación o reclasificación debe ser documentada adecuadamente en el [repositorio de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=620052691#gid=620052691).
   - Los elementos Bajo Revisión deben identificarse claramente y priorizarse para auditoría o ajustes según su impacto.

4. **Frecuencia y método de actualización del repositorio de configuración**

   * El repositorio de configuración debe actualizarse **al menos una vez por semana** o inmediatamente después de cualquier modificación significativa en un elemento de configuración.
   * El **responsable de configuración** debe registrar cada cambio de estatus, nueva versión o inclusión de elementos, asegurando que la información esté sincronizada con la realidad operativa del proyecto.
   * Para garantizar trazabilidad, cada entrada debe contener: identificador único, nombre del elemento, versión, estatus actual, fecha de actualización, autor del cambio y notas relevantes.
   * Las actualizaciones deben hacerse directamente en el [repositorio de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=620052691#gid=620052691) y notificarse a los equipos interesados si afectan entregables, dependencias o procesos clave.

## 👥 Roles y responsabilidades

- **Responsable de configuración**: Clasificar y actualizar el estatus de cada elemento, asegurar trazabilidad y documentación.
- **Equipo de desarrollo**: Consultar siempre el estatus antes de utilizar o modificar un elemento.
- **Auditor**: Validar los cambios de estatus mediante revisiones y auditorías periódicas.

## ⚠️ Consecuencias del incumplimiento

El incumplimiento de esta política puede resultar en:

- Retrasos en entregas por uso de versiones obsoletas o no aprobadas.
- Observaciones en auditorías de calidad o incumplimiento normativo.
- Escalamiento al Comité de Calidad para evaluación de acciones correctivas.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/standards/estandar-plantillas.md)
- [Definición de Ítems](/docs/procesos/PR2-definicion-items.md)
- [Plantilla para políticas](/docs/plantillas/plantilla-politicas.md)
- [EST05 | Estándar de versiones](/docs/standards/estandar-versiones.md)
- [Repositorio de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=620052691#gid=620052691)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción**                                          | **Fecha**  | **Colaborador**                |
    | ------------------- | -------------------------------------------------------- | ---------- | ------------------------------ |
    | **1.0.0** | Creación de la política.                                           | 14/05/2025 | Armando Méndez Castro          |
    | **1.1.0** | Refactorizar política.                                             | 19/05/2025 | Daniel Contreras Chávez        |
    | **1.1.1** | Incluir frecuencia de actualización de la matriz de configuración. | 28/05/2025 | Angel Mauricio Ramírez Herrera |
</details>