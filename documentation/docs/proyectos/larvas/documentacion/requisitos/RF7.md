---
title: "RF7: Modificar datos generales Charola"
sidebar_position: 8
---

# RF7: Modificar datos generales Charola


### Historia de Usuario

Como usuario del sistema, quiero modificar los datos de una charola que están guardados en la base de datos, para corregir errores o actualizar su información y mantener registros precisos.

**Criterios de Aceptación:**

- El sistema debe permitir la edición de los datos de una charola previamente registrada.
- La actualización de datos debe reflejarse de inmediato en la base de datos.

---

### Diagrama de Actividades

<a href="https://drive.google.com/file/d/1fBtWBZdEJXJS6EgMfcuVWJjD4JW90CD7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Modificar datos generales dl Charola</a>

---

### Diagrama de Secuencia

```mermaid
sequenceDiagram
    actor Usuario
    participant View as View
    participant ViewModel as ViewModel
    participant Domain as Domain
    participant Repository as Repository
    participant APIService as APIService
    participant Controller as Controller
    participant Model as Model
    participant Database as Base de Datos

    alt GET Consultar Charola (200)
        Usuario->>View: Seleccionar charola para editar
        activate View
        View->>ViewModel: obtenerCharola(id)
        deactivate View
        activate ViewModel
        ViewModel->>Domain: charolaRequirement.obtenerPorId(id)
        deactivate ViewModel
        activate Domain
        Domain->>Repository: repository.obtenerPorId(id)
        deactivate Domain
        activate Repository
        Repository->>APIService: apiService.obtenerCharola(id)
        deactivate Repository
        activate APIService
        APIService->>Controller: @GET ("/charola/:id")
        deactivate APIService
        activate Controller
        Controller->>Controller: exports.obtenerCharola = async(req, res)
        Controller->>Model: charolaModel.obtenerCharolaPorId(id)
        deactivate Controller
        activate Model
        Model->>Database: query
        deactivate Model
        activate Database
        Database-->>Model: datos de la charola
        deactivate Database
        activate Model
        Model-->>Controller: datos de la charola
        deactivate Model
        activate Controller
        Controller-->>APIService: datos
        deactivate Controller
        activate APIService
        APIService-->>Repository: datos
        deactivate APIService
        activate Repository
        Repository-->>Domain: datos
        deactivate Repository
        activate Domain
        Domain-->>ViewModel: datos
        deactivate Domain
        activate ViewModel
        ViewModel-->>View: datos
        deactivate ViewModel
        activate View
        View-->>Usuario: Muestra formulario con datos precargados
        deactivate View
    else Else: Error al consultar (404 o 500)
        Controller-->>APIService: error
        APIService-->>Repository: error
        Repository-->>Domain: error
        Domain-->>ViewModel: error
        ViewModel-->>View: error
        View-->>Usuario: Error al obtener charola (no encontrada o error del servidor)
    end

    alt PUT Editar Charola (200)
        Usuario->>View: (PUT) do Editar Charola
        activate View
        View->>ViewModel: do EditarCharola(DatosEditados)
        deactivate View
        activate ViewModel
        ViewModel->>Domain: charolaRequirement.editar(charola)
        deactivate ViewModel
        activate Domain
        Domain->>Repository: repository.editar(charola)
        deactivate Domain
        activate Repository
        Repository->>APIService: apiService.editar(charola)
        deactivate Repository
        activate APIService
        APIService->>Controller: @PUT ("/charola/editarCharola")
        deactivate APIService
        activate Controller
        Controller->>Controller: exports.editarCharola = async(req, res)
        Controller->>Model: charolaModel.editarCharola(datos)
        deactivate Controller
        activate Model
        Model->>Database: actualizarCharola(query)
        deactivate Model
        activate Database
        Database-->>Model: respuesta
        deactivate Database
        activate Model
        Model-->>Controller: respuesta
        deactivate Model
        activate Controller
        Controller-->>APIService: respuesta
        deactivate Controller
        activate APIService
        APIService-->>Repository: respuesta
        deactivate APIService
        activate Repository
        Repository-->>Domain: respuesta
        deactivate Repository
        activate Domain
        Domain-->>ViewModel: respuesta
        deactivate Domain
        activate ViewModel
        ViewModel-->>View: respuesta
        deactivate ViewModel
        activate View
        View-->>Usuario: ¡Charola actualizada exitosamente!
        deactivate View
    else Else: Error al editar (400 o 500)
        Controller-->>APIService: error
        APIService-->>Repository: error
        Repository-->>Domain: error
        Domain-->>ViewModel: error
        ViewModel-->>View: error
        View-->>Usuario: Error al actualizar charola (validación o servidor)
    end

```
---

### Pull Request

<a href="https://github.com/CodeAnd-Co/TECH-NEBRIOS-BACKEND/pull/25" target="_blank" rel="noopener noreferrer"> PR de Modificar datos generales dl Charola Backend</a>

<a href="https://github.com/CodeAnd-Co/TECH-NEBRIOS-FLUTTER/pull/27" target="_blank" rel="noopener noreferrer"> PR de Modificar datos generales dl Charola Frontend</a>

---

### Mockup

![alt text](<img/mockupRF7.png>)

---
## Historial de cambios

| **Tipo de Versión** | **Descripción**                            | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------------------------ | --------- | ----------------------- |
| **1.0**             | Creacion de la historia de usuario         | 8/3/2025  | Armando Mendez          |
| **1.1**             | Modificar historial de cambio              | 17/05/2025| Mariaa Juárez           |
| **1.3**             | Diagramas de actividades   | 23/5/2025  | Juan Eduardo Rosas Cerón |
| **1.4**             | Se corrigió mockup  | 29/5/2025  | Mariana Juárez |
| **1.5**             | Se agregaron los pull request de front y back | 29/5/2025  | Sofía Osorio |