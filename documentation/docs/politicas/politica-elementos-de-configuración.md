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

### 1. **Criterios de selección de elementos de configuración**
Un producto de trabajo será considerado elemento de configuración si cumple uno o más de los siguientes criterios:

- Cambia con una periodicidad mayor a una semana.
- Es utilizado por más de un equipo o presenta dependencias técnicas con otros elementos.
- Requiere validación por parte del socio formador o cliente.
- Tiene impacto crítico en el cumplimiento de los objetivos del proyecto.
- Está relacionado con una entrega oficial como MVP (Producto Mínimo Viable), MBI (Incremento de Negocio Mínimo), release interna o pública.
- Su modificación requiere trazabilidad y control formal (ej. código fuente, infraestructura como código, definiciones de API, documentos de arquitectura, wikis oficiales, procesos automatizados).

### 2. **Matriz de identificación de elementos de configuración**

Se utilizará una matriz centralizada para registrar los elementos seleccionados. Esta incluirá campos como:

- Identificador único
- Nombre del elemento de configuración
- Categoría del elemento de configuración
- Estatus que puede tener un elemento de configuración
  - Estático: Indica que un elemento de configuración o producto de trabajo ya fue validado y cumple con las políticas y estándares establecidos por el departamento. Generalmente, no requiere modificaciones, a menos que haya actualizaciones relevantes en normativas, lineamientos o procedimientos. Una vez asignado este estatus, la versión se considera como base de referencia.					
  - Dinámico: Se refiere a elemento de configuración que están siendo trabajados, ajustados o en revisión continua. Son susceptibles a cambios frecuentes debido a nuevas prácticas, comentarios de los usuarios o ajustes necesarios. Es fundamental consultar siempre la última versión disponible.					
  - Bajo Revisión: Esta categoría aplica a elementos de configuración que han sido seleccionados específicamente para evaluación, pero que aún no concluyen su proceso de auditoría. Puede tratarse de material que anteriormente fue estático o que está en una fase crítica de análisis antes de volverse base estable.					
- Versión correspondiente a la última versión estable del elemento de configuración para la documentación que fue parte del último release.
- Auditado: Estado de la de auditorías sobre esa versión del elemento.
- Ubicación o link de acceso al elemento de configuración
- Utilidad: Checkbox para saber si el elemento está siendo usado y aporta valr

📎 Enlace a la matriz: [Matriz de identificación de elementos de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0)

### 3. **Identificación y actualización de líneas base**

Una **línea base** se identifica cuando un conjunto de elementos ha alcanzado un estado aprobado y estable, listo para ser utilizado como referencia en iteraciones posteriores.

#### 📌 Ejemplos típicos de hitos para crear líneas base:

- Validación o verificación exitosa del sistema o módulo.
- Publicación de una versión tipo **MVP**, **MBI**, **release estable** o **release candidata**.
- Aprobación de entregables por parte del cliente.
- Cierre de un sprint o etapa con entregables aceptados.

Las líneas base se documentan en la matriz e incluyen la versión de cada elemento en ese punto de control.

#### 🔁 Criterios para actualizar una línea base:

- Cambios significativos en uno o más elementos de configuración.
- Introducción de nuevas funcionalidades que afectan la arquitectura o acuerdos establecidos.
- Solicitudes de cambio aprobadas por el equipo responsable.
- Revisión o aprobación por parte del cliente o socio formador.

Toda nueva línea base debe ser registrada con su fecha, versión y justificación.

## 🧩 Elementos bajo gestión de configuración

Los siguientes elementos **deben registrarse y mantenerse bajo control de configuración**, siempre que cumplan con criterios como: estar listos para entrega, validados por responsables, tener dependencias interequipos, o implicar impacto significativo en el proyecto.

### 🗂 Categorías gestionadas

| Categoría                    | Descripción                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| **Acuerdos**                 | Compromisos formales/informales entre partes, como cliente y proveedor o entre áreas internas.    |
| **Arquitectura**             | Estructura técnica o lógica del sistema (componentes, relaciones, decisiones de diseño clave).    |
| **Entregas**                 | Productos, documentos o resultados esperados. Incluye MVPs, MBIs, releases, etc.                  |
| **Plantillas**               | Documentos modelo que aseguran consistencia (actas, informes, reportes, etc.).                    |
| **Procesos**                 | Descripciones paso a paso de actividades repetitivas, incluyendo roles, entradas y salidas.       |
| **Políticas**                | Lineamientos obligatorios de la organización (seguridad, recursos, buenas prácticas).             |
| **Guías**                    | Instrucciones o recomendaciones operativas (no siempre obligatorias).                             |
| **Estándares**               | Normas mínimas requeridas (ej. codificación, diseño, documentación).                              |
| **Definiciones**             | Glosarios de términos clave usados en el proyecto o proceso.                                      |
| **Checklist**                | Listas de verificación para asegurar cumplimiento de criterios, actividades o entregables.        |
| **Encuestas**                | Formularios para recolectar retroalimentación, satisfacción o métricas de uso.                    |
| **Diagramas**                | Representaciones visuales de arquitectura, procesos, flujos, etc.                                 |
| **Código**                   | Repositorios, scripts o pull requests **solo cuando se trata de versiones críticas o revisadas**. |
| **Información del Proyecto** | Documento resumen con nombre del proyecto, objetivos, responsables, alcance, fechas y cambios.    |

> ✅ Estos elementos deben agregarse a la matriz de configuración si cumplen con los **criterios de control**, como uso compartido, necesidad de trazabilidad o validación externa.

---

Además, puedes ajustar esta frase en la sección anterior para reforzar el criterio del código:

> * Su modificación requiere trazabilidad y control formal (ej. **pull requests de código**, infraestructura como código, definiciones de API, documentos de arquitectura, wikis oficiales, procesos automatizados).

## 👥 Roles y responsabilidades

- [**Comité de Control de Cambios (CCB):**](/docs/next/politicas/Politica-CCB) Evalúa y autoriza modificaciones sobre elementos bajo control de configuración, garantizando trazabilidad, estructura y alineación con los objetivos del departamento.
- **Propietario del elemento:** Mantiene actualizada la información de cada EC y reporta cambios.

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
| **Tipo de versión** | **Descripción**                                                  | **Fecha**   | **Colaborador**                  |
| ------------------- | ---------------------------------------------------------------- | ----------- | -------------------------------- |
| **1.0.0**           | Creación de la política.                                         | 06/04/2025  | Max Toscano, Diego Fuentes       |
| **1.1.0**           | Implementar acciones correctivas.                                | 26/04/2025  | Max Toscano                      |
| **1.2.0**           | Implementar acciones correctivas.                                | 08/05/2025  | Armando Méndez Castro            |
| **1.3.0**           | Corrección de ortografía.                                        | 08/05/2025  | Paola Garrido                    |
| **1.4.0**           | Se agregan criterios y gestión de líneas base.                   | 26/05/2025  | Angel Mauricio Ramírez Herrera  |
| **1.5.0**           | Incluir categorías de los elementos bajo configuración.   | 29/05/2025  | Angel Mauricio Ramírez Herrera                      |

</details>
