---
title: PR10 Pruebas Unitarias
sidebar_position: 10
---

# Pruebas Unitarias

**Última actualización:** 24 de febrero de 2025
**Versión:** 2.0

### Autores

| Nombre                    | Rol   |
| ------------------------- | ----- |
| Emiliano Gómez González   | Autor |
| Ian Julián Estrada Castro | Autor |

## Objetivo

Garantizar la calidad de cada release.

## Entradas

1. Historia de usaurio/caso de uso

## Proceso

### Fases del proceso

| **Fase**                         | **Descripción**                                                                                                              | **Responsables**      | **Meta y práctica específica del CMMI**                                         |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------- |
| **Preparación**                  | Identificar el flujo alterno de la función o método a probar.                                                                | Autor del caso de uso | **VER, SP 1.3** (Establecer los procedimientos y los criterios de verificación) |
|                                  | Determinar los casos de prueba clave (datos de entrada, salida esperada, salida recibida).                                   | Autor del caso de uso | **VER, SP 1.3** (Establecer los procedimientos y los criterios de verificación) |
|                                  | Realizar una matriz de casos de prueba con los datos del paso anterior.                                                      | Autor del caso de uso | **VER, SP 1.3** (Establecer los procedimientos y los criterios de verificación) |
| **Construcción**                 | Codificar los casos de prueba definidos en la matriz, utilizando los frameworks establecidos.                                | Autor de la prueba    | **VER, SP 3.1** (Realizar la verificación)                                      |
| **Ejecución**                    | Ejecutar las pruebas localmente.                                                                                             | Autor de la prueba    | **VER, SP 3.1** (Realizar la verificación)                                      |
| **Revisión y Retroalimentación** | Analizar los resultados, revisando las pruebas exitosas y no exitosas; en caso de fallos, informar al autor del caso de uso. | Autor de la prueba    | **VER, SP 3.2** (Analizar los resultados de la verificación)                    |

## Salida

1. Matriz de prueba
2. Código de la prueba
3. Capturas de los resultados obtenidos

## Métricas

1. **Tasa de éxito (%):** (Pruebas pasadas / Total de pruebas) \* 100
2. **Resultado Binario:** Indica si el resultado obtenido coincide o no con el esperado
3. **Cantidad de Casos de Prueba (Cobertura)**

## Historial de Cambios

| Autor                     | Descripción del cambio                                                                | Versión |
| ------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Ian Julián Estrada Castro | Propuesta inicial sobre preparar un caso de prueba.                                   | 1.0     |
| Emiliano Gómez González   | Propuesta inicial sobre preparar un caso de prueba.                                   | 1.0     |
| Emiliano Gómez González   | Integración de las áreas y prácticas específicas de CMMI correspondientes al proceso. | 1.0     |
