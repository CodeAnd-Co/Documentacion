---
title: "RF3: Usuario cierra sesión."  
sidebar_position: 6
---

# RF3: Usuario cierra sesión.

### Historia de Usuario

Yo como usuario quiero cerrar sesión en el sistema de manera segura termino de utilizar la aplicación de escritorio, asegurando que no se puede accede a mis datos sin mis credenciales.

  **Criterios de Aceptación:**
  - El sistema debe garantizar que una vez el usuario cierre sesión ni el sistema ni los datos del usuario sean accesibles.
  - Al cerrar sesión, el sistema debe redirigir al usuario a la página de inicio de sesión.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario interactúa con el sistema para cerrar sesión, detallando los pasos de solicitud de datos, validación y confirmación.

---

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede cerrar sesión. Muestra los campos requeridos y los botones de acción disponibles.

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF3-01|Cerrar sesión desde la aplicación.|El usuario es redirigido a la pantalla de inicio de sesión|
|PU-RF3-02|Intento de acceso después de cerrar sesión.|El sistema requiere autenticación nuevamente.|

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/21](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/21)
