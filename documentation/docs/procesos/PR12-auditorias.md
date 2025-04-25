---
title: PR12 Auditorías internas
sidebar_position: 12
---

# Proceso para auditorías internas

---

### Objetivo

- Asegurar la evaluación sistemática de procesos y productos de trabajo mediante auditorías internas, con el fin de detectar desviaciones, promover la mejora continua y garantizar el cumplimiento con los estándares de calidad y objetivos organizacionales.

---

## **Auditoría Interna en Iteraciones**

### **Entradas**

- Tarea del plan de iteración de hacer auditoría

### Proceso

| Fase                           | Actividades                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Responsable                                    | Práctica específica del CMMI                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------- |
| **Planificación de auditoría** | Identificar el ítem de proceso o producto de trabajo a auditar.                                                                                                                                                                                                                                                                                                                                                                                                                                             | Team Lead / SEPG                               | **PPQA SP 1.1, 1.2 <br/> OPF SP 1.2**                |
| **Preparación de documentos**      | Abrir la [carpeta de auditorías de google drive](https://drive.google.com/drive/folders/1hsIk-W736AzRyjjHCXkxu2O9SN901gh3?usp=drive_link) y localizar la carpeta correspondiente al elemento que se auditará. Cada elemento debe tener su propia carpeta para asegurar la trazabilidad de las auditorías. Si la carpeta aún no existe, crearla con un nombre claro y relacionado al ítem de la siguiente forma: <br/> **`ID del elemento` - `Nombre del elemento`** <br/> *Ejemplo: PR12 - Auditorias*                                                    | Team Lead / SEPG                               |                                             |
|                                | Dentro de la carpeta del ítem, crear una subcarpeta con la fecha de la auditoría, usando el formato **`DD/MM/AAAA`** <br/> *Ejemplo: 23/04/2025*                                                                                                                                                                                                                                                                                                                                                                                                              | Team Lead / SEPG                               |                                             |
|                                | Ir al [índice de checklists](/docs/recursos/checklists.md) e identificar la que corresponde al elemento a auditar. Hacer una copia de la checklist seleccionada y moverla a la subcarpeta de la fecha. Renombrarla usando el siguiente formato: **`ID del elemento` - `Nombre de la checklist` - `DD/MM/AAAA`** <br/> *Ejemplo: CL01 - Procesos - 23/04/2025*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Team Lead / SEPG                               |                                             |
|                                | Crear una copia del [informe de evaluación](https://docs.google.com/document/d/1-TueYt2DH3oXroMLAMGTHo6kgNeB5UHfoj7lkqZzfZs/edit?usp=sharing). Renombrarla usando el siguiente formato: **`ID del elemento` - `Informe Evaluación` - `DD/MM/AAAA`** <br/> *Ejemplo: PR12 - Informe Evaluación - 23/04/2025* <br/> Mover la copia del informe de evaluación a la subcarpeta de la fecha. Agregar el link de la checklist al informe.                                                                                                                                                                                | Team Lead / SEPG                               | **PPQA SP 2.2 OPF SP 1.3**                  |
| **Ejecución de auditoría**         | Revisar el elemento a auditar utilizando la checklist como guía de verificación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Team Lead / SEPG / Team member | **PPQA SP 1.1, 1.2**                         |
|                                | Llenar el informe de evaluación documentando las no comformidades en la sección de hallazgos. Una no conformidad es cualquier desviación de lo esperado del elemento a auditar según la checklist correspondiente.  | Team Lead  / SEPG / Team member | **PPQA SP 1.1, 1.2**                         |
|                                | Verificar que el elemento seleccionado cumpla con el [estándar de historial de cambios](/docs/standards/versionamiento-productos-trabajo). Posteriormente, validar si el elemento está bajo [gestión de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0). Si es así, revisar que la versión del ítem esté actualizada en la [matriz de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=620052691#gid=620052691). | Team Lead / SEPG / Team member | **CM SP 3.2**                               |
| **Documentación**              | Si se auditó un ítem de proceso, acceder a la [bitácora de auditorías](https://docs.google.com/spreadsheets/d/1K9TJz_XcdXFlEZ-Unm_3QbWYkx_QM3oSfe6ZWBpc3fo/edit?usp=sharing) y completa los campos correspondientes.                                                                                                                                                                                                                                                                                                                               | Team Lead / SEPG / Team member | **PPQA SP 2.2**                             |
|                                | El *ID de la auditoría* debe asignarse de forma secuencial, comenzando con  **`AUD00`**. <br/> El *elemento auditado* corresponde al ítem de proceso o producto de trabajo revisado. <br/> La *fecha registrada* debe coincidir con el día en que se realizó la auditoría. <br/> El *resultado* debe reflejar los hallazgos obtenidos durante la revisión. <br/> Agregar el enlace al informe utilizado para realizar la auditoría.                                                                                                                                                                         | Team Lead  / SEPG / Team member | **PPQA SP 2.2**                             |
| **Registro de hallazgos**          | Seguir el [proceso para acciones correctivas](/docs/procesos/PR13-acciones-correctivas).                                                                                                                                                                                                                                                                                                                                                                                                                     | Team Lead / SEPG / Team member | **PPQA SP 1.1, 1.2** <br/> **OPF SP 1.2** |

### Salidas

- Informe de evaluación
- Bitácora de auditorías actualizada
- Checklist del ítem

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                                                                                         | **Fecha** | **Colaborador**                         |
| ------------------- | ------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------- |
| **1.0**             | Creación de proceso de auditorias                                                                       | 19/3/2025 | Juan Carlos Calderon, Mauricio Anguiano |
| **1.1**             | Se agregó PPQA 2.2 al proceso                                                                           | 8/4/2025  | Juan Carlos Calderon, Mauricio Anguiano |
| **1.2**             | Refactorización                                                                                         | 18/4/2025 | Diego Fuentes Juvera                    |
| **2.0**             | Agregar pasos para bitácora.                                                                            | 22/4/2025 | Ian Julián Estrada Castro               |
| **3.0**             | Agregar pasos para checklists, conexión con acciones correctivas.                                       | 22/4/2025 | Diego Fuentes Juvera                    |
| **4.0**             | Agregar pasos para auditar CM                                                                           | 22/4/2025 | Diego Fuentes Juvera                    |
| **4.1**             | Agregar paso para asignar un repsonsable de la auditoría y para especificar cuándo se auditan procesos. | 23/4/2025 | Diego Fuentes Juvera                    |
| **4.2**             | Agregar paso para crear copias de la checklist y del informe de evaluación.                             | 23/4/2025 | Diego Fuentes Juvera                    |
| **5.0**                 | Corregir el proceso completo                                                                            | 23/4/2025 | Angel Ramírez, Valeria Zúñiga           |
| **5.1**                 | Corregir sintaxis y ortografía                                                                             | 23/4/2025 | Max Toscano           |
| **5.2**                 | Cambiar nombre de la copia del informe de evaluación, hacer más claros los pasos para llenar la bitácora de auditorías                                                                            | 24/4/2025 | Max Toscano           |
