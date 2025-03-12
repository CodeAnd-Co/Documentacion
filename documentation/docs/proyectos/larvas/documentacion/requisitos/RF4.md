---
title: "RF4: Splashscreen"  
sidebar_position: 5
---

# RF4: Splashscreen

**Última actualización:** 05 de marzo de 2025

### Historia de Usuario
Como usuario de sistema, quiero ver una pantalla de presentación con el logo de Zuustento antes de acceder a la interfaz principal, para tener una experiencia visual más profesional y reconocer la identidad de la aplicación al iniciar.

  **Criterios de Aceptación:**
  - El sistema debe mostrar el logo de Zuustento durante 1 segundo antes de redirigir a la pantalla de inicio.
  - La pantalla de presentación no debe retrasar el acceso a la aplicación.
  - El splashscreen debe aparecer solo al abrir la aplicación, no al navegar dentro de ella.
  - La animación debe ser fluida y compatible con dispositivos móviles.

---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia muestra cómo el Super Administrador consulta la lista de clientes, interactuando con la base de datos para obtener los datos de todos los clientes registrados.

---

### Mockup

> *Descripción*: El mockup presenta la interfaz de consulta de clientes, donde el Super Administrador puede ver una lista paginada o filtrada de clientes.

### Pruebas Unitarias 
| ID Prueba  | Descripción                                               | Resultado Esperado  |
|------------|-----------------------------------------------------------|---------------------|
| PU-RF4-01  | Verificar que el splashscreen se muestre al iniciar la aplicación. | Al abrir la aplicación, el splashscreen se muestra antes de la pantalla principal. |
| PU-RF4-02  | Comprobar que el splashscreen se oculta después del tiempo definido. | Después de 1 segundo, el splashscreen desaparece y se redirige a la pantalla de inicio. |
| PU-RF4-03  | Asegurar que el splashscreen no aparezca al navegar dentro de la aplicación. | El splashscreen solo se muestra al iniciar la aplicación, no al cambiar de pantalla. |
| PU-RF4-04  | Evaluar que el splashscreen no retrase el acceso a la aplicación. | El usuario accede a la aplicación sin demoras innecesarias tras el splashscreen. |
| PU-RF4-05  | Verificar la compatibilidad del splashscreen en dispositivos móviles. | La animación del splashscreen se ejecuta sin problemas en diferentes dispositivos. |
