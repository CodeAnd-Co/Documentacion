# Plan de Pruebas de Estrés

## Información general

**Responsable de las pruebas:** Text & Lines  
**Fecha estimada de ejecución:** Por definirse

---

## Objetivo

Evaluar la capacidad del sistema para soportar condiciones extremas, simulando cargas que excedan límites operativos normales, y detectar fallos de rendimiento, estabilidad o integridad de datos.

---

## Alcance

### Componentes evaluados

- Base de Datos
- API (Servidor web)

### Volumen de datos

- Inserción de hasta **180,000 registros**
- Carga concurrente con miles de solicitudes

---

## Escenario de Prueba

### Casos de prueba

- Forzar la inserción de 180,000 registros en la base de datos en un tiempo reducido, con múltiples hilos o procesos simultáneos.
- Ejecutar consultas complejas con carga concurrente que exceda los niveles normales de uso.
- Simular múltiples usuarios accediendo al servidor al mismo tiempo y medir el tiempo promedio de respuesta, tasa de transferencia y posibles cuellos de botella.
- Evaluar la velocidad y estabilidad de la API bajo diferentes niveles de carga.
- Generar peticiones concurrentes para medir el tiempo promedio de respuesta y detectar cuellos de botella.
- Simular fallas controladas (corte de red, reinicio de servicio) para observar cómo responde el sistema.

### Datos de prueba

Los datos serán generados sintéticamente mediante scripts, diseñados para simular escenarios de uso real.

---

## Configuración del Entorno

### Software y versiones

- Ubuntu versión 22.04
- RDS MySql versión 8.0.37
- Node.js versión 22.14
- CloudWatch versión 1.300053.0
- Postman versión 11.38.5

---

## Criterios de éxito y falla

### Criterios de Éxito para Base de Datos

- La base de datos maneja la inserción, consulta, actualización y eliminación de grandes volúmenes de datos dentro de _N_ segundos.
- La integridad de los datos se mantiene incluso bajo carga masiva (sin corrupción ni pérdida de datos).
- Los índices y claves funcionan eficientemente con el volumen máximo de datos probado.
- No hay fallos en conexiones simultáneas de 3,800 clientes.

### Criterios de Éxito para APIs

- La API responde a todas las solicitudes dentro del tiempo máximo permitido (_N_ segundos), incluso con _X_ (peor de los casos) solicitudes simultáneas.
- Los endpoints soportan respuestas de gran tamaño (como datos paginados con 30,000 registros).
- La API gestiona correctamente errores como tiempos de espera agotados y entradas inválidas.
- Mantiene la tasa de éxito de respuestas sin errores (por ejemplo, ≥ 99.9%).

---

### Criterios de Falla para Base de Datos

- Incrementos drásticos en los tiempos de consulta o inserción, superando los límites aceptables.
- Pérdida, corrupción o duplicación de datos durante las operaciones.
- Fallos en transacciones bajo condiciones de alta concurrencia (deadlocks, conflictos de escritura).
- Consumo excesivo de memoria o disco, causando errores de "out of memory" o falta de espacio.

### Criterios de Falla para APIs

- La latencia promedio de las respuestas supera los límites definidos bajo alta carga.
- Fallos en las conexiones o caídas de endpoints al manejar múltiples solicitudes simultáneas.
- Respuestas incompletas, con errores en el formato o inconsistencia en los datos.
- Problemas con la autenticación o autorización bajo volumen masivo de solicitudes.

---

## Resultados esperados

El sistema debería mantenerse funcional, con una degradación controlada del rendimiento, permitiendo identificar umbrales críticos y puntos de optimización.

---

## Ejecución y análisis

### Cómo se ejecutará la prueba

- Preparación del entorno
- Generación de datos
- Automatización de pruebas
- Ejecución de escenarios definidos
- Registro de métricas

### Cómo se interpretarán los resultados

Se registran logs en CloudWatch (en caso de aplicar) para identificar errores o cuellos de botella. También se analizarán los tiempos de respuesta y latencia promedio.

---

## Conclusiones y Recomendaciones

| Aspecto                  | Observaciones/Resultados | Impacto en el rendimiento |
| ------------------------ | ------------------------ | ------------------------- |
| Tiempo de respuesta      |                          |                           |
| Cuellos de botella       |                          |                           |
| Recomendaciones técnicas |                          |                           |

# Historial de cambios

| **Tipo de Versión** | **Descripción**          | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------ | --------- | ----------------------- |
| **1.0**             | Creacion de el documento | 4/9/2025  | Rodrigo Antonio Benítez |
