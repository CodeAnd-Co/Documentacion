---
title: PR25 Liberacion de lineas base
sidebar_position: 25
---

# PR25 Proceso de liberacion de lineas base

---

## Objetivo

El objetivo de este proceso es definir una estrategia para liberar una linea base

---

## Entradas

1. Repositorio de github donde se encuentra el elemento o elementos de trabajo que esten bajo la practica de CM

2. [Matriz de configuracion](agregar link a matriz)

## Proceso

| Fase             | Descripción                                                                                                                                                                                                                                   | Responsable | Meta y práctica específica del CMMI |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------- |
| **Definicion**   | Identificar los elementos que se tendran bajo CM. Esto se puede hacer mediante el uso de la [politica de identificacion de elementos de configuracion](../intro/politicas/elementos-de-configuración.md)                                      | CCB         | CM SP 1.1,1.2                       |
| **Preparacion**  | Para liberar una linea base de la wiki del departamento se debe revisar que los elementos que formaran parte de la linea base cumplan con la [checklist de items de tabajo para linea base de la wiki](../recursos/CL2-items-trabajo-wiki.md) | CCB         | CM SP 1.3,3.2                       |
| **Preparacion**  | Para liberar una linea base de uno de los proyectos del departamento se debe realizar un pull request a la rama main del proyecto, este pull request debe seguir la [guia para liberar a produccion](agregar link)                            | CCB         | CM SP 1.3                           |
| **Liberacion**   | Crear un nuevo release en el repositorio de github del proyecto                                                                                                                                                                               | CCB         | CM SP 1.3                           |
| **Liberacion**   | Solicitar a un miembro del CCB que revise y apruebe el release creado, el miembro seleccionado debe ser un miembro distinto al que creo el relaease                                                                                           | CCB         | CM SP 1.3                           |
| **Comunicacion** | Actualizar la matriz de configuracion y comunicar al departamento acerca del relase a traves de uno de los canales de comunicación oficales                                                                                                   | CCB         | CM SP 1.3,2.2                       |

## Salidas

1. Nuevo release en repositorio de github
2. Aviso a traves de canales oficiales del departamento

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                                 | **Fecha** | **Colaborador** |
| ------------------- | ----------------------------------------------- | --------- | --------------- |
| **Versión 1.0**     | Se creo el proceso de liberacion de lineas base | 4/8/2025  | Diego Alfaro    |
