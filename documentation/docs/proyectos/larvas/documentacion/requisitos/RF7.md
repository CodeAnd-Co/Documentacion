---
title: "RF7: Modificar datos generales Charola"
sidebar_position: 8
---

# RF7: Modificar datos generales Charola

**Última actualización:** 08 de marzo de 2025

### Historia de Usuario

Como usuario del sistema, quiero modificar los datos de una charola que están guardados en la base de datos, para corregir errores o actualizar su información y mantener registros precisos.

**Criterios de Aceptación:**

- El sistema debe permitir la edición de los datos de una charola previamente registrada.
- Solo los usuarios autorizados deben poder modificar la información.
- La actualización de datos debe reflejarse de inmediato en la base de datos.

---

### Diagrama de Secuencia

> _Descripción_: El diagrama de secuencia muestra el proceso de actualización de un empleado, con la interacción entre el Super Administrador y el sistema para modificar la información del empleado.

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

### Mockup

> _Descripción_: El mockup muestra el formulario de actualización de empleado, con los campos de datos actuales y opciones para modificarlos.

![mockup-rf7](image-2.png)

### Pruebas Unitarias

| ID Prueba | Descripción                                                               | Resultado Esperado                                                                         |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| PU-RF7-01 | Modificar los datos de una charola existente con información válida.      | El sistema actualiza los datos y muestra un mensaje de éxito.                              |
| PU-RF7-02 | Intentar modificar una charola inexistente.                               | El sistema muestra un mensaje de error indicando que la charola no existe.                 |
| PU-RF7-04 | Verificar que los cambios se reflejan en la base de datos inmediatamente. | La información modificada es visible en la base de datos sin necesidad de recargar.        |
| PU-RF7-05 | Intentar guardar modificaciones con datos inválidos o vacíos.             | El sistema valida la información y muestra errores si los datos no cumplen los requisitos. |
| PU-RF7-06 | Intentar modificar múltiples campos de una charola al mismo tiempo.       | El sistema procesa correctamente los cambios y los almacena sin inconsistencias.           |
