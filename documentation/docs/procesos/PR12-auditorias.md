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

- [Informe de evaluación](https://docs.google.com/document/d/1-TueYt2DH3oXroMLAMGTHo6kgNeB5UHfoj7lkqZzfZs/edit?usp=sharing)

### Proceso

| Fase                           | Actividades                                                                                                                                                                   | Responsable                    | Práctica específica del CMMI                                 |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Planificación de auditoría** | Identificar el item de proceso o producto de trabajo sujeto a auditoría durante la iteración. Los procesos deben auditarse por lo menos una vez antes de cada SCAMPI. | Team Lead / SEPG               | **PPQA SP 1.1, 1.2**    |
|  | Agregar la tarea de auditoría al plan de trabajo y asignar a un responsable. Si es un producto de trabajo el Team Lead debe asignar al responsable. Si es un item de proceso el SEPG del área debe asignar al responsable. | Team Lead / SEPG               | **PPQA SP 1.1**    |
| **Preparación de documentos** | Ir al [índice de checklists](/docs/recursos/checklists.md), identificar la checklist que corresponde al elemento a auditar, y crear una copia de la checklist en la [carpeta de auditorías de google drive](https://drive.google.com/drive/folders/1hsIk-W736AzRyjjHCXkxu2O9SN901gh3?usp=drive_link) del proyecto correspondiente
| **Ejecución de auditoría**     | Revisar el elemento seleccionado en base a la copia de la checklist seleccionada, llenar las casillas de verificación conforme corresponda.  | Team Lead / SEPG / Team Member | **PPQA SP 1.1, 1.2** **OPF SP 1.2** |
|      | Revisar que el elemento seleccionado cumpla con el [estándar de historial de cambios](/docs/standards/versionamiento-productos-trabajo). Revisar si el elemento seleccionado está bajo [gestión de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0), y si es así revisar en la [matriz de configuración](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=620052691#gid=620052691) que su versionamiento se encuentre actualizado.  | Team Lead / SEPG / Team Member | **PPQA SP 1.1, 1.2** **OPF SP 1.2** |
| **Documentación**         | Si se auditó un item de proceso, ingresar a la [bitácora de auditorías](https://docs.google.com/spreadsheets/d/1K9TJz_XcdXFlEZ-Unm_3QbWYkx_QM3oSfe6ZWBpc3fo/edit?usp=sharing) y llenar los campos.  | Team lead | **PPQA SP 2.2** (Establecer los registros) | 
|         | El ID de la auditoría se llena de forma secuencial empezando por: AUD00. El elemento auditado corresponde al item de proceso que se auditó. La fecha corresponde a la fecha en la que se hizo la auditoría. El resultado corresponde a los allazgos de la auditoría. Agregar el link a la checklist que se utilizó para auditar. | Team Lead / SEPG / Team Member | **PPQA SP 2.2** (Establecer los registros) | 
| **Registro de hallazgos**      | Documentación de desviaciones, observaciones y oportunidades de mejora sobre items de proceso y productos de trabajo siguiendo el [proceso para acciones correctivas](/docs/procesos/PR13-acciones-correctivas).  | Team Lead / SEPG               | **PPQA SP 1.1, 1.2, 2.1**, **PMC SP 1.1** **OPF 1.3** |
| **Decisión de acción**         | Determinar si se requieren acciones correctivas o preventivas siguiendo el [proceso para acciones correctivas](/docs/procesos/PR13-acciones-correctivas). |Team Lead / SEPG / Team Member   | **PPQA SP 1.1, 1.2, 2.1**, **OPF SP 1.2** |


### Salidas

- Documento de auditoría.
- Bitácora de auditorías actualizada.
- Acciones correctivas incluidas en el plan de trabajo correspondiente.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                   | **Fecha** | **Colaborador**                         |
| ------------------- | --------------------------------- | --------- | --------------------------------------- |
| **1.0**             | Creación de proceso de auditorias | 19/3/2025 | Juan Carlos Calderon, Mauricio Anguiano |
| **1.1**             | Se agregó PPQA 2.2 al proceso     | 8/4/2025  | Juan Carlos Calderon, Mauricio Anguiano |
| **1.2**             | Refactorización                   | 18/4/2025 | Diego Fuentes Juvera                    |
| **2.0**             | Agregar pasos para bitácora.      | 22/4/2025 | Ian Julián Estrada Castro               |
| **3.0**             | Agregar pasos para checklists, conexión con acciones correctivas.  | 22/4/2025 | Diego Fuentes Juvera |
| **4.0**             | Agregar pasos para auditar CM  | 22/4/2025 | Diego Fuentes Juvera |
| **4.1**             | Agregar paso para asignar un repsonsable de la auditoría y para especificar cuándo se auditan procesos. | 23/4/2025 | Diego Fuentes Juvera |
