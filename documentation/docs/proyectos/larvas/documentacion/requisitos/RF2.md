---
title: "RF2: Consultar gráficas (administrador)"  
sidebar_position: 3
---

# RF2: Consultar gráficas (administrador)

**Última actualización:** 05 de marzo de 2025

### Historia de Usuario
Como administrador del sistema, quiero visualizar los datos recolectados de manera intuitiva a través de gráficos generados automáticamente, para obtener una representación visual clara del desempeño y producción sin necesidad de revisar datos en tablas.

  **Criterios de Aceptación:**
  - El sistema debe mostrar gráficos con los datos recolectados en tiempo real.
  - La visualización debe ser automática y no requerir configuración manual.
  - Los gráficos deben actualizarse dinámicamente conforme se registren nuevos datos.
  - La interfaz debe ser clara y comprensible, con etiquetas adecuadas en los gráficos.
  - La representación visual debe facilitar la interpretación de tendencias y patrones.
  - El sistema debe garantizar la seguridad de los datos visualizados, asegurando que solo usuarios autorizados puedan acceder a ellos.

---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia muestra el flujo entre el Super Administrador, el sistema de actualización de cliente y la base de datos para realizar la actualización de los datos del cliente.

---

### Mockup

> *Descripción*: El mockup muestra cómo el Super Administrador interactúa con la interfaz para modificar los datos del cliente. Se incluyen campos editables y botones para guardar los cambios.

### Pruebas Unitarias 
| ID Prueba  | Descripción                                               | Resultado Esperado  |
|------------|-----------------------------------------------------------|---------------------|
| PU-RF2-01  | Cargar la página de visualización de gráficas.            | La página se muestra con los gráficos de datos recolectados en tiempo real. |
| PU-RF2-02  | Verificar que la visualización sea automática.            | Los gráficos se muestran sin necesidad de configuración manual. |
| PU-RF2-03  | Probar actualización dinámica de los gráficos.            | Los gráficos se actualizan automáticamente al registrarse nuevos datos. |
| PU-RF2-04  | Verificar carga de datos incorrectos en los gráficos.      | Se muestra un mensaje de error si los datos no pueden visualizarse correctamente. |
| PU-RF2-05  | Validar rendimiento de carga de gráficos con gran volumen de datos. | Los gráficos se muestran sin retrasos significativos, incluso con grandes volúmenes de datos. |
