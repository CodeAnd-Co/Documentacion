---
title: PR29 Liberacion de lineas base
sidebar_position: 29
---

# Proceso de liberacion de lineas base

---

## Objetivo

El objetivo de este proceso es definir una estrategia para liberar una linea base

---

## Entradas

1. Repositorio de GitHub donde se encuentra el elemento o elementos de trabajo que esten bajo la practica de CM.

2. [Matriz de configuracion](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0)

## Proceso

| Fase             | Descripción                                                                                                                                                                                                                                    | Responsable | Meta y práctica específica del CMMI |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------- |
| **Definición**   | Identificar los elementos que se tendran bajo CM. Esto se puede hacer mediante el uso de la [política de identificación de elementos de configuración](../politicas/elementos-de-configuración.md)                                             | CCB         | CM SP 1.1,1.2                       |
| **Preparación**  | Para liberar una línea base de la wiki del departamento se debe revisar que los elementos que formarán parte de la línea base cumplan con la [checklist de items de tabajo para línea base de la wiki](../recursos/CL2-items-trabajo-wiki.md). | CCB         | CM SP 1.3,3.2                       |
| **Preparación**  | Para liberar una línea base de uno de los proyectos del departamento. Realizar un pull request a la rama main del proyecto, el cual debe seguir la [Guia para liberar producción](../guias/documentacion/liberar-produccion.md).               | CCB         | CM SP 1.3                           |
| **Liberación**   | Crear un nuevo release en el repositorio de GitHub del proyecto.                                                                                                                                                                               | CCB         | CM SP 1.3                           |
| **Liberación**   | Solicitar a un miembro del CCB que revise y apruebe el release creado. El miembro seleccionado debe ser un miembro distinto al que creó el release.                                                                                            | CCB         | CM SP 1.3                           |
| **Comunicación** | Actualizar la matriz de configuración y comunicar al departamento acerca del relase a través de uno de los canales de comunicación oficales.                                                                                                   | CCB         | CM SP 1.3,2.2                       |

## Salidas

1. Nuevo release en repositorio de GitHub.
2. Aviso a través de canales oficiales del departamento.

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                                  | **Fecha** | **Colaborador** |
| ------------------- | ------------------------------------------------ | --------- | --------------- |
| **Versión 1.0**     | Se creó el proceso de liberación de lineas base. | 22/4/2025 | Diego Alfaro    |
