---
title: 🪄 | Política de identificación de elementos de configuración
sidebar_position: 4
---

# 🪄 Política de identificación de elementos de configuración

Esta política establece los criterios, responsabilidades y mecanismos para identificar, registrar y controlar los elementos seleccionados para la gestión de configuración en los proyectos del departamento, en alineación con el modelo CMMI. Su implementación garantiza trazabilidad, control de cambios y coordinación efectiva entre equipos.

## 🎯 Objetivo

- Definir lineamientos claros para identificar los elementos que serán gestionados como elementos de configuración (EC).
- Asegurar que los elementos clave para el éxito de los proyectos estén debidamente controlados y documentados.
- Fortalecer la trazabilidad, la integridad de versiones y la coordinación entre equipos mediante un sistema estandarizado.

## 📊 Alcance

Esta política aplica a:
- Todos los proyectos del departamento y sus equipos involucrados.
- Elementos y productos de trabajo seleccionados por cumplir con criterios de control de configuración.
- Documentación, software, diagramas, resultados de pruebas y cualquier otro activo considerado crítico.

**Excepciones:** Elementos de uso temporal, personales o sin impacto en el proyecto no están sujetos a esta política.

## 📋 Declaraciones de la política

1. **Criterios de selección de elementos de configuración**
   - Un producto de trabajo será considerado elemento de configuración si cumple uno o más de los siguientes criterios:
     - Cambia con una periodicidad mayor a una semana.
     - Es utilizado por más de un equipo o presenta dependencias técnicas con otros elementos.
     - Requiere validación por parte del socio formador o cliente.
     - Tiene impacto crítico en el cumplimiento de los objetivos del proyecto.

2. **Matriz de identificación de elementos de configuración**
   - Se utilizará una matriz centralizada para registrar los elementos seleccionados. Esta incluirá campos como:
     - Identificador único
     - Nombre o descripción
     - Formato del EC
     - Categoría
     - Método de control
     - Propietario
     - Dependencias
     - Hito de inicio de gestión
     - Versión
     - Fecha de notificación
   - Enlace de la matriz: [Matriz de identificación de elementos de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0)

3. **Identificación y actualización de líneas base**
   - Una **línea base** se identifica cuando un conjunto de elementos ha alcanzado un estado aprobado y estable, listo para ser utilizado como referencia en iteraciones posteriores.
   - Las líneas base se documentan en la matriz e incluyen la versión de cada elemento en ese punto de control.
   - **Criterios para actualizar una línea base:**
     - Cambios significativos en uno o más elementos de configuración.
     - Introducción de nuevas funcionalidades que afectan la arquitectura o acuerdos establecidos.
     - Solicitudes de cambio aprobadas por el equipo responsable.
     - Revisión o aprobación por parte del cliente o socio formador.
   - Toda nueva línea base debe ser registrada con su fecha, versión y justificación.

## 👥 Roles y responsabilidades

- **Responsable de configuración:** Define los criterios, gestiona la matriz y supervisa la aplicación de esta política.
- **Propietario del elemento:** Mantiene actualizada la información de cada EC y reporta cambios.
- **Equipo de calidad:** Verifica la correcta identificación y registro de elementos durante auditorías o revisiones internas.
- **Líder de proyecto:** Asegura que su equipo cumpla con esta política durante el desarrollo del proyecto.

## ⚠️ Consecuencias del incumplimiento

El incumplimiento de esta política puede resultar en:
- Pérdida de trazabilidad o errores críticos por uso de versiones desactualizadas.
- Observaciones o no conformidades en auditorías internas o externas.
- Repetición de trabajos o demoras por falta de control sobre los elementos clave.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para políticas](/docs/next/plantillas/plantilla-politicas)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>

| **Tipo de versión** | **Descripción**                         | **Fecha**   | **Colaborador**               |
| ------------------- | --------------------------------------- | ----------- | ----------------------------- |
| **1.0.0**           | Creación de la política.                | 06/04/2025  | Max Toscano, Diego Fuentes    |
| **1.1.0**           | Implementar acciones correctivas.       | 26/04/2025  | Max Toscano                   |
| **1.2.0**           | Implementar acciones correctivas.       | 08/05/2025  | Armando Méndez Castro         |
| **1.3.0**           | Corrección de ortografía.               | 08/05/2025  | Paola Garrido                 |
| **1.4.0**           | Se agregan criterios y gestión de líneas base. | 26/05/2025  | Angel Mauricio Ramírez Herrera                   |

</details>
