---
title: "RF2: Autenticación de la cuenta"  
sidebar_position: 3
---

# RF2: Autenticación de la cuenta

**Última actualización:** 05 de marzo de 2025

### Historia de Usuario
Como usuario, quiero ingresar a mi cuenta a través de un proceso de autenticación de dos pasos, para garantizar una mayor seguridad en el acceso a mi cuenta.

  **Criterios de Aceptación:**
  - El sistema debe solicitar al usuario su usuario y contraseña para iniciar sesión.
  - Luego de ingresar sus credenciales, el usuario debe recibir un código de verificación en su correo electrónico o aplicación de    autenticación.
  - El usuario debe ingresar correctamente el código de verificación para completar el inicio de sesión.
  - Si el código es incorrecto o expira, el sistema debe notificar al usuario y permitirle solicitar un nuevo código.
  - La autenticación de dos pasos debe ser opcional pero configurable por el usuario en los ajustes de seguridad.

---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia ilustra cómo el Super Administrador interactúa con el sistema para buscar y visualizar los detalles de un cliente, destacando las interacciones entre el administrador, la base de datos y la interfaz de usuario.

---

### Mockup

> *Descripción*: El mockup muestra la interfaz donde el Super Administrador puede consultar la información de un cliente. Se incluyen los campos de búsqueda y visualización de datos, con el diseño organizado para facilitar la navegación.
