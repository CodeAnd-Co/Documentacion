---
title: "RF5: Usuario cierra sesión."  
sidebar_position: 6
---

# RF5: Usuario cierra sesión.

**Última actualización:** 07 de marzo de 2025

### Historia de Usuario

Yo como usuario quiero cerrar sesión en el sistema de manera segura termino de utilizar la aplicación de escritorio, asegurando que no se puede accede a mis datos sin mis credenciales.

  **Criterios de Aceptación:**
  - El sistema debe garantizar que una vez el usuario cierre sesión ni el sistema ni los datos del usuario sean accesibles.
  - En caso debe que falle el cerrar sesión debe de aparecer un error con el servidor
  - Al cerrar sesión, el sistema debe redirigir al usuario a la página de inicio de sesión.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario interactúa con el sistema para cerrar sesión, detallando los pasos de solicitud de datos, validación y confirmación.

```mermaid
  sequenceDiagram
    participant Usuario
    participant moduloPerfil_js as moduloPerfil.js
    participant Backend as cerrarSesion.js
    participant SesionAPI as sesionAPI

    Usuario->>moduloPerfil_js: Clic en "Cerrar sesión"
    moduloPerfil_js->>moduloPerfil_js: Deshabilita botón y muestra "Cerrando sesión..."
    moduloPerfil_js->>Backend: cerrarSesion(token)
    Backend->>SesionAPI: cerrarSesionAPI(token)
    SesionAPI-->>Backend: Respuesta (éxito o error)
    Backend-->>moduloPerfil_js: Respuesta (éxito o error)
    alt Éxito
        moduloPerfil_js->>moduloPerfil_js: Limpia localStorage
        moduloPerfil_js->>moduloPerfil_js: Redirige a login
    else Error
        moduloPerfil_js->>Usuario: Muestra mensaje de error
        moduloPerfil_js->>moduloPerfil_js: Reactiva botón
    end
```

```mermaid
sequenceDiagram
    participant Cliente
    participant rutas/cerrarSesion.rutas.js
    participant controladores/cerrarSesion.controlador.js
    participant middlewares/middlewareAutenticacion.js

    Cliente->>rutas/cerrarSesion.rutas.js: POST /sesion/cerrar
    rutas/cerrarSesion.rutas.js->>middlewares/middlewareAutenticacion.js: verificarToken(req, res, next)
    alt Token válido
        middlewares/middlewareAutenticacion.js->>controladores/cerrarSesion.controlador.js: cerrarSesion(req, res)
        controladores/cerrarSesion.controlador.js->>Cliente: 200 OK (Sesión cerrada)
    else Token inválido
        middlewares/middlewareAutenticacion.js->>Cliente: 401 Unauthorized (Token inválido)
    end
```
---

### Mockup

![alt text](./mockups/MockupUsuario.png)

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede cerrar sesión. Muestra los campos requeridos y los botones de acción disponibles.

---

### Pruebas Unitarias 



---

### Link a pruebas

[Pruebas](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=1725561716#gid=1725561716)

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/21](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/21)
