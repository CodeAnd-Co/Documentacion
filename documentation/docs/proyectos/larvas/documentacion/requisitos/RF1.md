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

### Diagrama de Actividades

<a href="https://drive.google.com/file/d/1Zql5LFEL76YKACtJoWMFsT_L4QYmpX8o/view?usp=sharing" target="_blank" rel="noopener noreferrer">Iniciar Sesión</a>

---

### Diagrama de Secuencia

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

    alt POST: Inicio de sesión exitoso
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

        APIService->>Controller: POST /iniciarSesion
        deactivate APIService
        activate Controller

        Controller->>Model: iniciarSesion
        deactivate Controller
        activate Model

        Model->>Database: query
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
    else POST: Sin conexión a internet, 503
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

        APIService-->>Repository: TIMEOUT
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
        
    else POST: Error de Servidor, 500
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

        APIService->>Controller: POST /iniciarSesion
        deactivate APIService
        activate Controller

        Controller->>Model: iniciarSesion
        activate Model

        Model->>Database: query
        activate Database

        Database-->>Model: Error
        deactivate Database

        Model-->>Controller: Error 500
        deactivate Model

        Controller-->>APIService: Error 500
        deactivate Controller
        activate APIService

        APIService-->>Repository: Error 500
        deactivate APIService
        activate Repository

        Repository-->>Domain: Error 500
        deactivate Repository
        activate Domain

        Domain-->>ViewModel: Notifica Error
        deactivate Domain
        activate ViewModel

        ViewModel-->>View: Actualizar UI
        deactivate ViewModel
        activate View

        View-->>Usuario: Mostrar mensaje "Error de servidor"
        deactivate View

        else POST: Usuario o contraseña incorrecto, 404
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

        APIService->>Controller: POST /iniciarSesion
        deactivate APIService
        activate Controller

        Controller->>Model: iniciarSesion
        deactivate Controller
        activate Model

        Model->>Database: query
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

---


# Historial de cambios
| **Tipo de Versión** | **Descripción**                      | **Fecha** | **Colaborador**   |
| ------------------- | ------------------------------------ | --------- | ----------------- |
| **1.0**             | Creacion de la historia de usuario   | 8/3/2025  | Armando Mendez    |
| **1.0**             | Verificación de los cambios          | 8/3/2025  | Miguel Angel      |
| **1.1**             | Creación del diagrama de secuencia   | 22/4/2025  | Emiliano Valdivia Lara  |
| **1.2**             | Se cambio el query del diagrama de secuencia   | 17/5/2025  | Mariana Juárez |
| **1.3**             | Diagramas de actividades   | 23/5/2025  | Juan Eduardo Rosas Cerón |