---
title: "RF6: Buscar charola"  
sidebar_position: 7
---

# RF6: Buscar charola

**Última actualización:** 08 de marzo de 2025

### Historia de Usuario
Como usuario del sistema, quiero buscar una charola específica a través de una barra de navegación, para localizar rápidamente su información sin necesidad de revisar manualmente los registros.

  **Criterios de Aceptación:**
  - El sistema debe permitir la búsqueda de charolas por identificador único.
  - La búsqueda debe ser rápida y sin afectar el rendimiento del sistema.

---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia muestra el flujo de consulta de un empleado, donde el Super Administrador o Cliente solicita la información y el sistema responde con los datos del empleado.

---

### Mockup

> *Descripción*: El mockup muestra cómo se visualizan los datos del empleado en la interfaz, con campos como nombre, cargo y estado, accesibles para el Super Administrador o Cliente.

### Pruebas Unitarias 
| ID Prueba  | Descripción                                               | Resultado Esperado  |
|------------|-----------------------------------------------------------|---------------------|
| PU-RF6-01  | Buscar una charola existente por su identificador único.  | El sistema muestra la charola correspondiente con su información detallada. |
| PU-RF6-02  | Intentar buscar una charola con un identificador inexistente. | El sistema informa que no se encontraron resultados sin generar errores. |
| PU-RF6-03  | Realizar una búsqueda con el campo vacío.                 | El sistema impide la búsqueda y muestra un mensaje indicando que el identificador es obligatorio. |
| PU-RF6-04  | Evaluar el tiempo de respuesta de la búsqueda.            | La búsqueda devuelve los resultados en un tiempo óptimo sin afectar el rendimiento. |
| PU-RF6-05  | Probar la búsqueda con caracteres no válidos.             | El sistema bloquea la búsqueda e informa que el identificador debe ser numérico o alfanumérico según corresponda. |
| PU-RF6-06  | Validar búsqueda con múltiples registros en la base de datos. | La búsqueda sigue funcionando de manera eficiente, sin demoras significativas. |
