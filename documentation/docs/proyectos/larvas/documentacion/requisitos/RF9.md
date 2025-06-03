---
title: "RF9: Cerrar sesión"  
sidebar_position: 10
---

# RF9: Cerrar sesión

### Historia de Usuario
Como usuario de la aplicación, quiero cerrar mi cuenta de usuario en la aplicación, para finalizar mi sesión de manera segura y evitar accesos no autorizados en mi cuenta.

  **Criterios de Aceptación:**
  - El sistema debe proporcionar un botón de "Cerrar Sesión" accesible en la interfaz.
  - Al cerrar sesión, el usuario debe ser redirigido a la pantalla de inicio de sesión.
  - Se debe invalidar la sesión activa para evitar que otra persona acceda sin autenticación.
  - El cierre de sesión debe ser rápido y no afectar la usabilidad del sistema.

---

### Diagrama de Actividades

<a href="https://drive.google.com/file/d/12x_zfxa1QmTsGL5XsYHaTIIvdtvq-ioz/view?usp=sharing" target="_blank" rel="noopener noreferrer">Cerrar sesión</a>

---

### Diagrama de Secuencia

> Descripción: El diagrama de secuencia muestra cómo los usuarios salen del sistema.
```mermaid
sequenceDiagram
    actor Usuario 
    participant View as View
    participant ViewModel as ViewModel
    participant Domain as Domain
    participant Repository as Repository
   
    alt GET Historial de actividad, 200
        Usuario->>+View: Do cerrar sesión
        View->>-ViewModel: loginView()
        activate ViewModel 
        ViewModel->>Domain: loginVM()
        deactivate ViewModel 
        activate Domain
        Domain->>Repository: CerrarSesio()
        deactivate Domain
        activate Repository
        Repository->>APIService: Eliinar Token APIS()
        deactivate Repository
        activate APIService
        

        APIService-->>Repository: EliminarTokenRepo
        deactivate APIService
        activate Repository
        Repository-->>Domain: 200 OK [Info]
        deactivate Repository
        activate Domain
        Domain-->>ViewModel: 200 OK [Info]
        deactivate Domain
        activate ViewModel
        ViewModel-->>View: Actualizar UI
        deactivate ViewModel
        activate View
        View-->>Usuario: Mostrar pop up de historial de actividad
        deactivate View
    
      end
```   


---

### Pull Request

<a href="https://github.com/CodeAnd-Co/TECH-NEBRIOS-FLUTTER/pull/20" target="_blank" rel="noopener noreferrer"> PR de Cerrar Sesión Frontend</a>
---

### Mockup

![alt text](img/mockupRF09.png)

---

| **Tipo de Versión** | **Descripción**                      | **Fecha** | **Colaborador**   |
| ------------------- | ------------------------------------ | --------- | ----------------- |
| **1.0**             | Creacion de la historia de usuario   | 8/3/2025  | Armando Mendez    |
| **1.2**             | Diagramas de actividades   | 23/5/2025  | Juan Eduardo Rosas Cerón |
| **1.3**             | Se agregaron los pull request de front  | 29/5/2025  | Sofía Osorio |
| **1.3**             | Actualización | 03/06/2025  | Armando Méndez Catro |