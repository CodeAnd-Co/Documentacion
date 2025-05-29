---
title: 💻 | Guía para inspección de código
---

# 💻 Guía para inspección de código

Esta guía proporciona una serie de pasos estructurados para llevar a cabo una inspección manual del código fuente, con el fin de identificar defectos que puedan afectar la calidad, seguridad o estabilidad del sistema. Está diseñada para facilitar revisiones efectivas y consistentes en componentes críticos del software.

## 🎯 Objetivo

- Establecer un procedimiento claro para inspeccionar código fuente de manera estructurada y colaborativa.
- Detectar y clasificar defectos antes de que impacten el producto final.
- Dirigido a desarrolladores y revisores técnicos involucrados en proyectos donde la calidad del software es prioritaria.

## 📝 Procedimiento

### Paso 1: Selección del componente a inspeccionar

- Identificar un componente del sistema cuyo impacto sea crítico. Es decir, que su mal funcionamiento pueda afectar directamente los objetivos del proyecto.
- El componente a inspeccionar debe requerir una alta estabilidad debido a su rol en el sistema.
- Se deben registrar detalles como archivos involucrados, localización en el repositorio y estimación de líneas de código (LOC).

### Paso 2: Identificación de roles

- Se asigna un **autor del código**, responsable de explicar el flujo general.
- Se seleccionan entre 4 y 6 **inspectores de código** para garantizar diversidad de observaciones.

#### 2.1 Entorno de inspección

- Cada inspector:
  - Abre la [plantilla Defect Log](https://docs.google.com/spreadsheets/d/1GwKcoKU2H5aKZJyG1p9df5Mvue4CNbyBMvIjGhjbyxg/edit?usp=sharing) y crea una copia con nombre `Inspección-Fecha`.
  - Agrega una hoja con su nombre en la copia del Log.
  - Abre la [checklist de inspección de código](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa).
  - Revisa el [estándar de codificación departamental](../standards/estandar-codificacion.md).
- El autor del código responde dudas después de explicar el componente.
- Luego, los inspectores deben trabajar de forma individual y sin comunicación entre sí. Toda duda posterior se consulta directamente con el autor.

### Paso 3: Realizar la inspección individual

- Cada inspector hace una primera lectura general del código.
- Posteriormente, analiza cada archivo una vez por cada categoría de defecto (por ejemplo: estilo, lógica, seguridad).
- Registra todos los defectos detectados en su hoja, categorizándolos por severidad:
  - **Menor**: estilo, legibilidad, Git, documentación.
  - **Mayor**: lógica, complejidad.
  - **Crítico**: seguridad, funcionalidad, o incumplimiento de requerimientos no funcionales.

### Paso 4: Registro consolidado de defectos

- Se designa al **Inspector A** (quien haya identificado más defectos). Él transfiere todos sus hallazgos a la hoja `Log`.
- Los demás inspectores se numeran (Inspector 2, 3, etc.) y transfieren sus hallazgos en orden.
- Si un defecto ya está registrado, marcan su coincidencia en su columna correspondiente dentro del `Log`.
- Se evitan duplicados exactos, pero se contabilizan coincidencias.

### Paso 5: Resumen y análisis de inspección

- Se realiza el conteo de:
  - Defectos individuales por inspector.
  - Total de defectos únicos del Inspector A.
  - Coincidencias entre A y los demás inspectores.
  - Totales por severidad (menores, mayores, críticos).

#### 5.1 Estimación de defectos

- Se aplica la técnica **Catch-Recatch** para estimar defectos no detectados, usando la fórmula:  
  **(A * B) / C**
  - `A`: defectos únicos del inspector A.
  - `B`: defectos únicos del resto de inspectores.
  - `C`: defectos en común entre A y los demás.
- Esta estimación se anota en la hoja de `Resumen`.

#### 5.2 Densidad de defectos

- Se calcula automáticamente la densidad de defectos por cada mil líneas de código (KLOC) en la hoja de resumen.

## ⚠️ Consideraciones adicionales

- **Pre-requisitos:**
  - Conocer el estándar de codificación del equipo.
  - Acceso al código fuente y las plantillas mencionadas.
  - Disponibilidad de 4 a 6 inspectores.

- **Limitaciones:**
  - No aplicar este proceso en componentes pequeños o sin impacto relevante.
  - No sustituye pruebas automatizadas ni revisión por pares informal.

- **Advertencias:**
  - La inspección de código es costosa en tiempo; debe aplicarse únicamente a componentes críticos.
  - Un componente crítico es aquel que requiere alta estabilidad y cuyo mal funcionamiento puede afectar los objetivos del sistema o del negocio.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para guías](/docs/next/plantillas/plantilla-guias)
- [Checklists y plantillas de defectos](https://docs.google.com/spreadsheets/d/1GwKcoKU2H5aKZJyG1p9df5Mvue4CNbyBMvIjGhjbyxg/edit?usp=sharing)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Versión** | **Descripción**                            | **Fecha**     | **Colaborador**       |
|-------------|--------------------------------------------|---------------|------------------------|
| **1.0.0**   | Creación de la guía de inspección de código | 15/05/2025    | Ian Julián Estrada Castro <br/> Galo Alejandro del Río Viggiano <br/> Mauricio Angiano Juárez <br/> Emiliano Valdivia Lara |
| **1.0.1**   | Modificación de estilo de la guía de inspección de código | 28/05/2025    | Angel Mauricio Ramírez Herrera |
</details>
