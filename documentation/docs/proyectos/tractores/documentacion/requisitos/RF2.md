---
title: "RF2: Usuario registrado inicia sesión."  
sidebar_position: 3
---

# RF2: Usuario registrado inicia sesión.

**Última actualización:** 07 de marzo de 2025

### Historia de Usuario

Yo como usuario registrado de CNH quiero ingresar mis credenciales a la aplicación de escritorio para acceder a mis datos y funcionalidades dentro del sistema.

  **Criterios de Aceptación:**
  - El sistema debe permitir a lo usuarios registrados acceder a sus cuentas e ingresar al sistema.
  - Si las credenciales son incorrectas, el sistema debe de mostrar un mensaje claro de error.
  - Si el usuario ingresa correctamente, debe de ser reedirigido a la página principal.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario interactúa con el sistema para iniciar sesión, detallando los pasos de solicitud de datos, validación y confirmación.

---

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede iniciar de sesión. Muestra los campos requeridos y los botones de acción disponibles.

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF2-01|Inicio de sesión con credenciales válidas.|El usuario es autenticado y redirigidoa la página principal|
|PU-RF2-02|Inicio de sesión con contraseña incorrecta.|Se muestra un mensaje de error claro indicando que la credencial es inválida.|
|PU-RF2-03|Inicio de sesión con correo no registrado.|Se muestra un mensaje de error claro indicando que la credencial es inválida.|
|PU-RF2-04 |Inicio de sesión con campos vacíos|Se muestra un mensaje de error claro pidiendo completar los campos necesarios.|