---
title: "RF1: Iniciar Sesión"  
sidebar_position: 2
---

# RF1: Iniciar Sesión


### Historia de Usuario
Como usuario de la aplicación, quiero autenticarme en el sistema ingresando mi usuario y contraseña, para acceder de forma segura a la aplicación y utilizar sus funcionalidades sin restricciones.

  **Criterios de Aceptación:**
  - El sistema debe permitir al usuario ingresar su usuario y contraseña para autenticarse mediante una interfaz clara e intuitiva.
  - Si las credenciales son correctas, el usuario debe acceder a la aplicación y ser redirigido a la pantalla principal. 
  - Si las credenciales son incorrectas, el sistema debe mostrar un mensaje de error.
  - Si el usuario cierra sesión, el sistema debe invalidar la sesión activa y redirigirlo a la pantalla de inicio de sesión.
  - La autenticación debe ser segura y estar encriptada para proteger los datos de acceso de los usuarios.

---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia muestra cómo el Super Administrador interactúa con el sistema para crear un cliente, detallando los pasos de solicitud de datos, validación y confirmación.

```mermaid
sequenceDiagram
    actor Usuario 
    participant View as View
    participant ViewModel as ViewModel
    participant Domain as Domain
    participant Repository as Repository
    participant APIService as API Service (MVVM)
    participant Controller as Controller
    participant Model as Model
    participant Database as Base de Datos

    alt Inicio de sesión exitoso
        Usuario->>View: Presiona "Iniciar Sesión"
        activate View

        View->>ViewModel: iniciarSesion(usuario, contraseña)
        deactivate View
        activate ViewModel

        ViewModel->>Domain: iniciarSesion(usuario, contraseña)
        deactivate ViewModel
        activate Domain

        Domain->>Repository: iniciarSesion(usuario, contraseña)
        deactivate Domain
        activate Repository

        Repository->>APIService: iniciarSesion(usuario, contraseña)
        deactivate Repository
        activate APIService

        APIService->>Controller: Procesar solicitud
        deactivate APIService
        activate Controller

        Controller->>Model: Validar existencia y dar acceso
        deactivate Controller
        activate Model

        Model->>Database: SELECT FROM usuarios WHERE user = usuario && contrasena = contraseña
        deactivate Model
        activate Database

        Database-->>Model: Confirma información
        deactivate Database
        activate Model

        Model-->>Controller: Éxito
        deactivate Model
        activate Controller

        Controller-->>APIService: 200 OK
        deactivate Controller
        activate APIService

        APIService-->>Repository: Inicio de sesión exitoso
        deactivate APIService
        activate Repository

        Repository-->>Domain: Inicio de sesión exitoso
        deactivate Repository
        activate Domain

        Domain-->>ViewModel: Notifica éxito
        deactivate Domain
        activate ViewModel

        ViewModel-->>View: Actualizar UI
        deactivate ViewModel
        activate View

        View-->>Usuario: Mostrar interfaz de menú de charolas
        deactivate View
    else Sin conexión a internet, 503
        Usuario->>View: Presiona "Iniciar Sesión"
        activate View

        View->>ViewModel: iniciarSesion(usuario, contraseña)
        deactivate View
        activate ViewModel

        ViewModel->>Domain: iniciarSesion(usuario, contraseña)
        deactivate ViewModel
        activate Domain

        Domain->>Repository: iniciarSesion(usuario, contraseña)
        deactivate Domain
        activate Repository

        Repository->>APIService: iniciarSesion(usuario, contraseña)
        deactivate Repository
        activate APIService

        APIService-->>Repository: Error 503
        deactivate APIService
        activate Repository

        Repository-->>Domain: Error 503
        deactivate Repository
        activate Domain

        Domain-->>ViewModel: Notifica error
        deactivate Domain
        activate ViewModel

        ViewModel-->>View: Actualizar UI
        deactivate ViewModel
        activate View

        View-->>Usuario: Mostrar mensaje "Sin conexión a internet"
        deactivate View
        
    else Usuario o contraseña incorrecto, 404
        Usuario->>View: Presiona "Iniciar Sesión"
        activate View

        View->>ViewModel: iniciarSesion(usuario, contraseña)
        deactivate View
        activate ViewModel

        ViewModel->>Domain: iniciarSesion(usuario, contraseña)
        deactivate ViewModel
        activate Domain

        Domain->>Repository: iniciarSesion(usuario, contraseña)
        deactivate Domain
        activate Repository

        Repository->>APIService: iniciarSesion(usuario, contraseña)
        deactivate Repository
        activate APIService

        APIService->>Controller: Procesar solicitud
        deactivate APIService
        activate Controller

        Controller->>Model: Validar existencia y dar acceso
        deactivate Controller
        activate Model

        Model->>Database: SELECT FROM usuarios WHERE user = usuario && contrasena = contraseña
        deactivate Model
        activate Database

        Database-->>Model: Dato no encontrado
        deactivate Database
        activate Model

        Model-->>Controller: Error
        deactivate Model
        activate Controller

        Controller-->>APIService: Error 404
        deactivate Controller
        activate APIService

        APIService-->>Repository: Error 404
        deactivate APIService
        activate Repository

        Repository-->>Domain: Error 404
        deactivate Repository
        activate Domain

        Domain-->>ViewModel: Notifica Error
        deactivate Domain
        activate ViewModel

        ViewModel-->>View: Actualizar UI
        deactivate ViewModel
        activate View

        View-->>Usuario: Mostrar mensaje "Usuario o contraseña incorrecto"
        deactivate View
    end

```

---

### Mockup

![alt text](../mockupRF1.png)

> *Descripción*: El mockup representa la interfaz del sistema donde los usuarios pueden iniciar sesión.

### Pruebas Unitarias 
| ID Prueba  | Descripción                                             | Resultado Esperado  |
|------------|---------------------------------------------------------|---------------------|
| PU-RF1-01  | Inicio de sesión con credenciales válidas.              | El usuario es autenticado y redirigido a la pantalla principal. |
| PU-RF1-02  | Inicio de sesión con contraseña incorrecta.             | Se muestra un mensaje de error indicando que la contraseña es incorrecta. |
| PU-RF1-03  | Inicio de sesión con usuario no registrado.             | Se muestra un mensaje de error indicando que el usuario no existe. |
| PU-RF1-04  | Inicio de sesión con campos vacíos.                     | Se muestra un mensaje de error solicitando completar los campos. |
| PU-RF1-05  | Tiempo de sesión expira por inactividad.                | La sesión es invalidada y el usuario es redirigido a la pantalla de inicio de sesión. |

| **Tipo de Versión** | **Descripción**                      | **Fecha** | **Colaborador**   |
| ------------------- | ------------------------------------ | --------- | ----------------- |
| **1.0**             | Creacion de la historia de usuario   | 8/3/2025  | Armando Mendez    |
| **1.0**             | Verificación de los cambios          | 8/3/2025  | Miguel Angel      |
| **1.1**             | Creación del diagrama de secuencia   | 22/4/2025  | Emiliano Valdivia Lara      |