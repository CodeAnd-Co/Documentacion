---
title: PR15 Pruebas Unitarias
sidebar_position: 15
---

# Proceso para Pruebas Unitarias

---

## Objetivo

Garantizar la calidad de cada release.

---

## Entradas

1. Historia de usuario/caso de uso

---

## Proceso

| **Fase**                         | **Descripción**                                                                                                              | **Responsables**      | **Meta y práctica específica del CMMI**                                         |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------- |
| **Preparación**                  | Identificar el flujo alterno de la función o método a probar.                                                                | Autor del caso de uso | **VER, SP 1.3** (Establecer los procedimientos y los criterios de verificación) |
|                                  | Determinar los casos de prueba clave (datos de entrada, salida esperada, salida recibida).                                   | Autor del caso de uso | **VER, SP 1.3** (Establecer los procedimientos y los criterios de verificación) |
|                                  | Realizar una matriz de casos de prueba con los datos del paso anterior.                                                      | Autor del caso de uso | **VER, SP 1.3** (Establecer los procedimientos y los criterios de verificación) |
| **Construcción**                 | Codificar los casos de prueba definidos en la matriz, utilizando los frameworks establecidos.                                | Autor de la prueba    | **VER, SP 3.1** (Realizar la verificación)                                      |
| **Ejecución**                    | Ejecutar las pruebas localmente.                                                                                             | Autor de la prueba    | **VER, SP 3.1** (Realizar la verificación)                                      |
| **Revisión y Retroalimentación** | Analizar los resultados, revisando las pruebas exitosas y no exitosas; en caso de fallos, informar al autor del caso de uso. | Autor de la prueba    | **VER, SP 3.2** (Analizar los resultados de la verificación)                    |

---

## Salida

1. Matriz de prueba
2. Código fuente de la prueba
3. Capturas de los resultados obtenidos

---

## Métricas

1. **Tasa de éxito (%):** (Pruebas pasadas / Total de pruebas) \* 100
2. **Resultado Binario:** Indica si el resultado obtenido coincide o no con el esperado
3. **Cantidad de Casos de Prueba (Cobertura)**

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                             | **Fecha** | **Colaborador**                 |
| ------------------- | ------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Propuesta inicial sobre preparar un caso de prueba.   | 24/2/2025  | Ian Julián Estrada Castro, Emiliano Gómez González |
| **1.1**             | Integración de las áreas y prácticas específicas de CMMI correspondientes al proceso. |  | Emiliano Gómez González  |
| **1.2**             | Refactorización                             | 18/4/2025 | Diego Fuentes                    |
| **1.3**             | Errores ortográficos                             | 25/4/2025 | Hiram Mendoza                    |
