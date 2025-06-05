---
title: "RF8: Eliminar Charola"  
sidebar_position: 9
---

# RF8: Eliminar Charola

### Historia de Usuario
Como usuario del sistema, quiero borrar los datos de una charola en la base de datos, para eliminar registros obsoletos o incorrectos y mantener la base de datos actualizada y ordenada.


  **Criterios de Aceptación:**
  - Antes de eliminar una charola, se debe mostrar un mensaje de confirmación.
  - La eliminación debe reflejarse de inmediato en la base de datos sin afectar otros registros.

---

### Diagrama de Actividades

<a href="https://drive.google.com/file/d/1vQI5exhxIFS7IrY4KmKrz5jEx54D7FlS/view?usp=sharing" target="_blank" rel="noopener noreferrer">Eliminar Charola</a>

---

### Diagrama de Secuencia



```mermaid
sequenceDiagram
    actor Usuario 
    participant View as View
    participant ViewModel as ViewModel
    participant Domain as Domain
    participant Repository as Repository
    participant APIClient as API Client (MVVM)
    participant APIService as API Service (MVVM)
    participant Controller as Controller
    participant Model as Model
    participant Database as Base de Datos

    alt Conexión disponible | POST
        Usuario ->> View: Presiona "Eliminar Charola"
        activate View

        View ->> ViewModel: eliminarCharola(id)
        deactivate View
        activate ViewModel

        ViewModel ->> Domain: eliminarCharola(id)
        deactivate ViewModel
        activate Domain

        Domain ->> Repository: eliminarCharola(id)
        deactivate Domain
        activate Repository

        Repository ->> APIClient: eliminarCharola(id)
        deactivate Repository
        activate APIClient

        APIClient ->> APIService: POST  /charolas/{id}
        deactivate APIClient
        activate APIService

        APIService ->> Controller: POST /charolas/{id}
        deactivate APIService
        activate Controller

        Controller ->> Model: Validar()
        deactivate Controller
        activate Model

        Model ->> Database: query
        deactivate Model
        activate Database

        Database -->> Model: respuesta: charola eliminada
        activate Model
        deactivate Database

        Model -->> Controller: respuesta: charola eliminada
        deactivate Model
        activate Controller

        Controller -->> APIService: 200 OK
        deactivate Controller
        activate APIService

        APIService -->> APIClient: Eliminación exitosa
        deactivate APIService
        activate APIClient

        APIClient -->> Repository: Eliminación exitosa
        deactivate APIClient
        activate Repository

        Repository -->> Domain: Resultado de eliminación
        deactivate Repository
        activate Domain

        Domain -->> ViewModel: Notifica éxito
        deactivate Domain
        activate ViewModel

        ViewModel -->> View: Actualizar UI
        deactivate ViewModel
        activate View

        View -->> Usuario: Mostrar mensaje "Charola eliminada correctamente"
        deactivate View

    else Sin conexión a internet, 101 | POST
        Usuario ->> View: Presiona "Eliminar Charola"
        activate View

        View ->> ViewModel: eliminarCharola(id)
        deactivate View
        activate ViewModel

        ViewModel ->> Domain: eliminarCharola(id)
        deactivate ViewModel
        activate Domain

        Domain ->> Repository: eliminarCharola(id)
        deactivate Domain
        activate Repository

        Repository ->> APIClient: eliminarCharola(id)
        deactivate Repository
        activate APIClient

        APIClient ->> APIService: POST /charolas/{id}
        deactivate APIClient
        activate APIService

        APIService -->> APIClient: Error 101
        deactivate APIService
        activate APIClient

        APIClient -->> Repository: Error 101
        deactivate APIClient
        activate Repository

        Repository -->> Domain: Error 101
        deactivate Repository
        activate Domain

        Domain -->> ViewModel: Notifica error
        deactivate Domain
        activate ViewModel

        ViewModel -->> View: Actualizar UI
        deactivate ViewModel
        activate View

        View -->> Usuario: Mostrar mensaje "Sin conexión a internet"
        deactivate View

    else Error de servidor, 500 | POST
        Usuario ->> View: Presiona "Eliminar Charola"
        activate View

        View ->> ViewModel: eliminarCharola(id)
        deactivate View
        activate ViewModel

        ViewModel ->> Domain: eliminarCharola(id)
        deactivate ViewModel
        activate Domain

        Domain ->> Repository: eliminarCharola(id)
        deactivate Domain
        activate Repository

        Repository ->> APIClient: eliminarCharola(id)
        deactivate Repository
        activate APIClient

        APIClient ->> APIService: POST /charolas/{id}
        deactivate APIClient
        activate APIService

        APIService ->> Controller: POST /charolas/{id}
        deactivate APIService
        activate Controller

        Controller ->> Model: Validar()
        deactivate Controller
        activate Model

        Model ->> Database: query
        deactivate Model
        activate Database

        Database -->> Model: respuesta: Dato no encontrado
        activate Model
        deactivate Database

        Model -->> Controller: respuesta: Dato no encontrado
        deactivate Model
        activate Controller

        Controller -->> APIService: Error 500
        deactivate Controller
        activate APIService

        APIService -->> APIClient: Error 500
        deactivate APIService
        activate APIClient

        APIClient -->> Repository: Error 500
        deactivate APIClient
        activate Repository

        Repository -->> Domain: Error 500
        deactivate Repository
        activate Domain

        Domain -->> ViewModel: Notifica Error
        deactivate Domain
        activate ViewModel

        ViewModel -->> View: Actualizar UI
        deactivate ViewModel
        activate View

        View -->> Usuario: Mostrar mensaje "Error de servidor"
        deactivate View
    end

```
---

### Pull Request

<a href="https://github.com/CodeAnd-Co/TECH-NEBRIOS-BACKEND/pull/17" target="_blank" rel="noopener noreferrer"> PR de Eliminar Charola Backend</a>

<a href="https://github.com/CodeAnd-Co/TECH-NEBRIOS-FLUTTER/pull/12" target="_blank" rel="noopener noreferrer"> PR de Eliminar Charola Frontend</a>

---

### Mockup

![alt text](<img/mockupRF8.png>)

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                      | **Fecha** | **Colaborador**   |
| ------------------- | ------------------------------------ | --------- | ----------------- |
| **1.0**             | Creacion de la historia de usuario   | 8/3/2025  | Armando Mendez    |
| **1.0**             | Verificación de los cambios          | 8/3/2025  | Miguel Angel      |
| **1.1**             | Creación del diagrama de secuencia   | 3/4/2025  | Juan Eduardo      |
| **1.2**             | Mockup y correcciones del diagrama   | 3/4/2025  | Juan Eduardo      |
| **1.3**             | Correciones del query                | 17/5/2025 | Mariana Juárez    |
| **1.3**             | Diagramas de actividades   | 23/5/2025  | Juan Eduardo Rosas Cerón |
| **1.4**             | Se corrigió mockup  | 29/5/2025  | Mariana Juárez |
| **1.5**             | Se agregaron los pull request de front y back | 29/5/2025  | Sofía Osorio |