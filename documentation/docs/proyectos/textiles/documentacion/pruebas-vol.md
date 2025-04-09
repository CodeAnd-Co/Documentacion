# Plan de Pruebas de Volumen

## Información general:

**Responsable de las pruebas:** Text & Lines  
**Fecha estimada de ejecución:** Por definirse

---

## Objetivo

Verificar la capacidad de los componentes del sistema para manejar grandes volúmenes de datos sin errores, degradación significativa del rendimiento o pérdida de integridad.

---

## Alcance

### Componentes evaluados

- Base de Datos
- APIs (Servidor web)

### Volumen de datos

- Hasta **30,000 registros**

---

## Escenario de Prueba

### Casos de prueba

- Insertar 30,000 registros en la base de datos y registrar el tiempo de respuesta.
- Ejecutar consultas complejas sobre los 30,000 registros y medir su rendimiento.
- Simular concurrencia con múltiples usuarios accediendo simultáneamente a la API para evaluar latencia, tasa de transferencia y estabilidad.
- Evaluar la velocidad y estabilidad de la API bajo diferentes niveles de carga.
- Generar peticiones concurrentes para medir el tiempo promedio de respuesta y detectar cuellos de botella.

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

### Criterios de Éxito para Base de Datos:

- La base de datos maneja la inserción, consulta, actualización y eliminación de grandes volúmenes de datos dentro de _N_ segundos.
- La integridad de los datos se mantiene incluso bajo carga masiva (sin corrupción ni pérdida de datos).
- Los índices y claves funcionan eficientemente con el volumen máximo de datos probado.
- No hay fallos en conexiones simultáneas de 1,900 clientes.

### Criterios de Éxito para API (Servidor web):

- El servidor maneja 30,000 peticiones simultáneas sin degradar significativamente su rendimiento.
- Los tiempos de respuesta se mantienen dentro de límites aceptables (< _N_ segundo para archivos estáticos y < _N_ segundos para solicitudes dinámicas).
- Uso controlado de recursos del sistema (CPU, RAM y ancho de banda) sin alcanzar límites críticos.
- El servidor mantiene la estabilidad en pruebas prolongadas (24 horas continuas) bajo alta carga.
- Los endpoints soportan respuestas de gran tamaño (como datos paginados con 30,000 registros).

---

### Criterios de Falla para Base de Datos:

- Incrementos drásticos en los tiempos de consulta o inserción, superando los límites aceptables.
- Pérdida, corrupción o duplicación de datos durante las operaciones.
- Fallos en transacciones bajo condiciones de alta concurrencia (deadlocks, conflictos de escritura).
- Consumo excesivo de memoria o disco, causando errores de "out of memory" o falta de espacio.

### Criterios de Falla para APIs:

- La latencia promedio de las respuestas supera los límites definidos bajo alta carga.
- Fallos en las conexiones o caídas de endpoints al manejar múltiples solicitudes simultáneas.
- Respuestas incompletas, con errores en el formato o inconsistencia en los datos.
- Problemas con la autenticación o autorización bajo volumen masivo de solicitudes.
- Errores HTTP recurrentes, como 500 (Error Interno del Servidor) o 503 (Servicio No Disponible).

---

## Resultados esperados

Se espera que el sistema mantenga una latencia estable, sin cuellos de botella graves, y con uso eficiente de los recursos del sistema.

---

## Ejecución y análisis

### Cómo se ejecutará la prueba:

- Preparación del entorno
- Generación de datos
- Automatización de pruebas
- Ejecución de escenarios definidos
- Registro de métricas

### Cómo se interpretarán los resultados:

Se registran logs en CloudWatch (en caso de aplicar) para identificar errores o cuellos de botella. También se analizarán los tiempos de respuesta y latencia promedio.

---

## Conclusiones y Recomendaciones

| Aspecto                  | Observaciones/Resultados | Impacto en el rendimiento |
| ------------------------ | ------------------------ | ------------------------- |
| Tiempo de respuesta      |                          |                           |
| Cuellos de botella       |                          |                           |
| Recomendaciones técnicas |                          |                           |

---

## Riesgos

- Posibles limitaciones del entorno de pruebas
- Disponibilidad del equipo técnico
- Cambios en configuraciones que puedan afectar resultados

# Historial de cambios

| **Tipo de Versión** | **Descripción**          | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------ | --------- | ----------------------- |
| **1.0**             | Creacion de el documento | 4/9/2025  | Rodrigo Antonio Benítez |
