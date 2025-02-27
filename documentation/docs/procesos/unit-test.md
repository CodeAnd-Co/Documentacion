---
title: TPruebas Unitarias
sidebar_position: 1
---

# Pruebas unitarias

**Última actualización:** 24 de febrero de 2025  
**Version:** 1.0


### Autores
| Nombre                            | Rol       |
| --------------------------------- | --------- |
| Emiliano Gomez Gonzalez            | Autor     |
| Ian Julián Estrada Castro   | Autor     |
---

## Objetivo  
Garantizar la calidad de cada release  

## Entradas  
1. Descripción de caso de uso/historia de usuario  
2. ID de caso de uso/historia de usuario  
3. Autor de caso de uso/historia de usuario  

## Proceso  

### Fases del proceso  

| Fase          | Descripción | Responsables |
|--------------|------------|--------------|
| **Preparación** | Identificar flujo alterno de la función o método a probar. | Autor del caso de uso |
|  | Determinar los casos de prueba clave (datos de entrada, salida esperada, salida recibida). | Autor del caso de uso |
|  | Realizar una matriz de casos de prueba con los datos del paso anterior. | Autor del caso de uso |
| **Construcción** | Codificar los casos de prueba definidos en la matriz, utilizando los frameworks definidos. | Autor de la prueba |
| **Ejecución** | Ejecutar las pruebas localmente. | Autor de la prueba |
| **Revisión y retroalimentación** | Analizar los resultados, revisando las pruebas exitosas y no exitosas. | Autor de la prueba |
|  | En caso de algún caso no exitoso, informar al autor del caso de uso. | Autor de la prueba |

## Salida  
1. Matriz de prueba  
2. Código de la prueba  
3. Capturas de los resultados obtenidos  

## Métricas  
1. **Tasa de éxito (%)**: (Pruebas pasadas / Total de pruebas) * 100  
2. **Binario**: El resultado obtenido coincide o no con el resultado esperado  
3. **Cantidad de casos de prueba (Cobertura)**  
