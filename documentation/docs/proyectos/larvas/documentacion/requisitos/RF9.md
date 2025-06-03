---
title: "RF9: Cerrar sesión"  
sidebar_position: 10
---

# RF9: Cerrar sesión

### Historia de Usuario
Como usuario, quiero cerrar mi sesión en la aplicación, para asegurar el cierre de mi cuenta y prevenir accesos no autorizados.

  **Criterios de Aceptación:**
  - El sistema debe proporcionar un botón de "Cerrar Sesión" accesible en la sidebar.
  - Al cerrar sesión, el usuario debe ser redirigido a la pantalla de inicio de sesión.
  - Se debe invalidar la sesión activa para evitar que otra persona acceda sin autenticación.
  - El cierre de sesión debe ser rápido y no afectar la usabilidad del sistema.

---

### Diagrama de Actividades

<a href="https://drive.google.com/file/d/12x_zfxa1QmTsGL5XsYHaTIIvdtvq-ioz/view?usp=sharing" target="_blank" rel="noopener noreferrer">Cerrar sesión</a>

---

### Diagrama de Secuencia
```mermaid
sequenceDiagram
    actor Usuario 
    participant View as View
    participant ViewModel as ViewModel
    participant Domain as Domain
    participant Repository as Repository
   
    alt GET Historial de actividad, 200
        Usuario->>+View: Do cerrar sesión
        View->>-ViewModel: eliminarToken()
        activate ViewModel 
        ViewModel->>Domain: eliminarToken()
        deactivate ViewModel 
        activate Domain
        Domain->>Repository: eliminarToken()
        deactivate Domain
        activate Repository
        Repository->>APIService: eliminarToken()
        deactivate Repository
        activate APIService
        

        APIService-->>Repository: eliminarToken
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

![alt text](img/mockupRF09_1.png)

---

| **Tipo de Versión** | **Descripción**                      | **Fecha** | **Colaborador**   |
| ------------------- | ------------------------------------ | --------- | ----------------- |
| **1.0**             | Creacion de la historia de usuario   | 8/3/2025  | Armando Mendez    |
| **1.2**             | Diagramas de actividades   | 23/5/2025  | Juan Eduardo Rosas Cerón |
| **1.3**             | Se agregaron los pull request de front  | 29/5/2025  | Sofía Osorio |
| **1.4**             | Actualización | 03/06/2025  | Armando Méndez Catro |
| **1.5**             |  Correción | 03/06/2025  | Mariana Juárez |