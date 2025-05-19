---
title: 🩻 | PR12 Auditorías internas
sidebar_position: 12
---

# 🩻 Proceso para auditorías internas

Asegurar la evaluación sistemática de procesos y productos de trabajo mediante auditorías internas, con el fin de detectar desviaciones, promover la mejora continua y garantizar el cumplimiento con los estándares de calidad y objetivos organizacionales.

## 🎯 Objetivo

- Asegurar la evaluación sistemática de procesos y productos de trabajo mediante auditorías internas.
- Detectar desviaciones.
- Promover la mejora continua.
- Garantizar el cumplimiento con estándares de calidad y objetivos organizacionales.

## 📥 Entradas

1. Estándar
2. Política
3. Guía
4. Proceso

## ⚙️ Proceso

| Fase                           | Actividades                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Responsable                    | Práctica específica del CMMI                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------- |
| **Planificación de auditoría** | Identificar el ítem a auditar.                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Team Lead / SEPG               | **PPQA SP 1.1, 1.2 <br/> OPF SP 1.2**                      |
| **Preparación de documentos**  | Localizar la carpeta correspondiente en la [carpeta de auditorías](https://drive.google.com/drive/folders/1hsIk-W736AzRyjjHCXkxu2O9SN901gh3?usp=drive_link). <br/> **`ID del elemento` - `Nombre del elemento`** <br/> _Ejemplo: PR12 - Auditorias_ <br/>\*Nota: Cada elemento debe tener su propia carpeta para asegurar la trazabilidad de las auditorías.                                                                                                                                                      | Team Lead / SEPG               |                                                            |
|                                | Crear una subcarpeta con la fecha de la auditoría. <br/>Formato: **`DD/MM/AAAA`** <br/> _Ejemplo: 23/04/2025_                                                                                                                                                                                                                                                                                                                                                                                                     | Team Lead / SEPG               |                                                            |
|                                | Hacer una copia de la checklist que corresponda del [índice de checklists](/docs/recursos/checklists.md) y moverla a la subcarpeta de la fecha. Renombrarla usando el siguiente formato: **`ID del elemento` - `Nombre de la checklist` - `DD/MM/AAAA`** <br/> _Ejemplo: CL01 - Procesos - 23/04/2025_                                                                                                                                                                                                            | Team Lead / SEPG               |                                                            |
|                                | Crear una copia del [informe de evaluación](https://docs.google.com/document/d/1-TueYt2DH3oXroMLAMGTHo6kgNeB5UHfoj7lkqZzfZs/edit?usp=sharing). Renombrarla usando el siguiente formato: **`ID del elemento` - `Informe Evaluación` - `DD/MM/AAAA`** <br/> _Ejemplo: PR12 - Informe Evaluación - 23/04/2025_ <br/> Mover la copia del informe de evaluación a la subcarpeta de la fecha. Agregar el link de la checklist al informe.                                                                               | Team Lead / SEPG               | **PPQA SP 2.2 OPF SP 1.3**                                 |
| **Ejecución de auditoría**     | Verificar el elemento a auditar con la checklist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Team Lead / SEPG / Team member | **PPQA SP 1.1, 1.2**                                       |
|                                | Llenar el informe de evaluación documentando los hallazgos.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Team Lead / SEPG / Team member | **PPQA SP 1.1, 1.2**                                       |
|                                | Verificar que el elemento auditado cumpla con el [estándar de historial de cambios](/docs/standards/versionamiento-productos-trabajo).                                                                                                                                                                                                                                                                                                                                                                            | Team Lead / SEPG / Team member | **CM SP 3.2**                                              |
|                                | Posteriormente, validar si el elemento está bajo [gestión de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0) [(Política de identificación de elementos de Configuración)](/docs/politicas/elementos-de-configuración.md). Si es así, revisar que la versión del ítem esté actualizada en la [matriz de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=620052691#gid=620052691). | Team Lead / SEPG / Team member | **CM SP 3.2**                                              |
| **Documentación**              | Agregar el elemento auditado a la [bitácora de auditorías](https://docs.google.com/spreadsheets/d/1K9TJz_XcdXFlEZ-Unm_3QbWYkx_QM3oSfe6ZWBpc3fo/edit?usp=sharing) llenando los campos correspondientes.                                                                                                                                                                                                                                                                                                            | Team Lead / SEPG / Team member | **PPQA SP 2.2**                                            |
|                                | El _ID de la auditoría_ es secuencial, comenzando con **`AUD00`**. <br/> El _elemento auditado_ corresponde al ítem de proceso o producto de trabajo revisado. <br/> La _fecha registrada_ debe coincidir con el día en que se realizó la auditoría. <br/> El _resultado_ debe reflejar los hallazgos obtenidos durante la revisión. <br/> Agregar el enlace el informe de evaluación y el autor.                                                                                                                 | Team Lead / SEPG / Team member | **PPQA SP 2.2**                                            |
| **Seguimiento**                | Si es necesario, agregar al plan de iteración la tarea de "Aplicar el [proceso para acciones correctivas](/docs/procesos/PR13-acciones-correctivas) para el elemento auditado".                                                                                                                                                                                                                                                                                                                                   | Team Lead / SEPG / Team member | **PPQA SP 1.1, 1.2** <br/> **OPF SP 1.2**, **PPQA SP 2.1** |

## 📤 Salidas

1. Informe de evaluación
2. Bitácora de auditorías actualizada
3. Checklist del ítem auditado

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de Versión** | **Descripción**                                                                                                        | **Fecha**  | **Colaborador**                         |
    | ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------- |
    | **1.0**             | Creación de proceso de auditorías                                                                                      | 19/3/2025  | Juan Carlos Calderon, Mauricio Anguiano |
    | **1.1**             | Se agregó PPQA 2.2 al proceso                                                                                          | 8/4/2025   | Juan Carlos Calderon, Mauricio Anguiano |
    | **1.2**             | Refactorización                                                                                                         | 18/4/2025  | Diego Fuentes Juvera                    |
    | **2.0**             | Agregar pasos para bitácora                                                                                            | 22/4/2025  | Ian Julián Estrada Castro               |
    | **3.0**             | Agregar pasos para checklists, conexión con acciones correctivas                                                      | 22/4/2025  | Diego Fuentes Juvera                    |
    | **4.0**             | Agregar pasos para auditar CM                                                                                          | 22/4/2025  | Diego Fuentes Juvera                    |
    | **4.1**             | Agregar paso para asignar un responsable de auditoría y especificar cuándo se auditan procesos                         | 23/4/2025  | Diego Fuentes Juvera                    |
    | **4.2**             | Agregar paso para crear copias de la checklist y del informe de evaluación                                            | 23/4/2025  | Diego Fuentes Juvera                    |
    | **5.0**             | Corregir el proceso completo                                                                                           | 23/4/2025  | Angel Ramírez, Valeria Zúñiga           |
    | **5.1**             | Corregir sintaxis y ortografía                                                                                         | 23/4/2025  | Max Toscano                             |
    | **5.2**             | Cambiar nombre de la copia del informe de evaluación, aclarar pasos para llenar bitácora                               | 24/4/2025  | Max Toscano                             |
    | **5.3**             | Implementar acciones correctivas y simplificar el proceso                                                              | 08/05/2025 | Armando Méndez Castro, Valeria Zúñiga   |
</details>