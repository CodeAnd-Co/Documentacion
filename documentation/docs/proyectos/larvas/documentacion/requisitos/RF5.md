---
title: "RF5: Registrar Charola"
sidebar_position: 6
---

# RF5: Registrar Charola

### Historia de Usuario

Como usuario del sistema, quiero ingresar la información de una charola nueva en el sistema y guardarla en la base de datos, para llevar un registro digital preciso de la producción y rastrear la trazabilidad de las charolas.

**Criterios de Aceptación:**

- El sistema debe permitir el ingreso de una nueva charola con su identificador único.
- Se debe registrar la fecha de creación, peso y estado de la charola.
- Si hay un error en el ingreso, el sistema debe proporcionar un mensaje de error, indicando qué campo requiere corrección.
- La información ingresada debe guardarse correctamente en la base de datos de manera segura y consistente.
- El sistema debe confirmar el registro exitoso mediante una notificación o mensaje visual.

---

### Diagrama de Secuencia

> _Descripción_: El diagrama de secuencia muestra el flujo del proceso de creación de un nuevo empleado, con la interacción entre el Super Administrador, el formulario de ingreso y la base de datos.

```mermaid
sequenceDiagram
    actor Usuario
    participant View as View
    participant ViewModel as ViewModel
    participant Domain as Domain
    participant Repository as Repository
    participant APIService as Data
    participant Controller as Controller
    participant Model as Model
    participant Database as Base de Datos

    alt POST (200)
    Usuario->>View: (POST) do Registrar Charola
    activate View
    View->>ViewModel: do RegistrarCharola(Datos)
    deactivate View
    activate ViewModel
    ViewModel->>Domain: charolaRequirement.registrar(charola)
    deactivate ViewModel
    activate Domain
    Domain->>Repository: repository.registrar(charola)
    deactivate Domain
    activate Repository
    Repository->>APIService: apiService.registrar(charola)
    deactivate Repository
    activate APIService
    APIService->>Controller: @POST ("/registrar-charola")
    deactivate APIService
    activate Controller
    Controller->>Controller: exports.registrarCharola = async(req, res)
    Controller->>Model: charolaModel.registrarCharola(datos)
    deactivate Controller
    activate Model
    Model->>Database: crearCharola(query)
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
    View-->>Usuario: ¡Charola registrada exitosamente!
    deactivate View
    end

    alt ERROR (400) - Petición incorrecta
    Usuario->>View: (POST) do Registrar Charola
    activate View
    View->>ViewModel: doRegistrarCharola(charola)
    deactivate View
    activate ViewModel
    ViewModel-->>View: Error: Datos inválidos
    deactivate ViewModel
    activate View
    View-->>Usuario: "Los datos ingresados son incorrectos. Por favor, revisa los campos obligatorios."
    deactivate View
    end

    alt ERROR (401) - Usuario no autenticado
    Usuario->>View: (POST) do Registrar Charola
    activate View
    View->>ViewModel: doRegistrarCharola(charola)
    deactivate View
    activate ViewModel
    ViewModel-->>View: Error: Usuario no autenticado
    deactivate ViewModel
    activate View
    View-->>Usuario: "Por favor, inicia sesión para continuar."
    deactivate View
    end

    alt ERROR (500) - Error Interno en el Servidor
    Usuario->>+View: (POST) do Registrar Charola
    activate View
    View->>ViewModel: do RegistrarCharola(Datos)
    deactivate View
    activate ViewModel
    ViewModel->>Domain: charolaRequirement.registrar(charola)
    deactivate ViewModel
    activate Domain
    Domain->>Repository: repository.registrar(charola)
    deactivate Domain
    activate Repository
    Repository->>APIService: apiService.registrar(charola)
    deactivate Repository
    activate APIService
    APIService->>Controller: @POST ("/registrar-charola")
    deactivate APIService
    activate Controller
    Controller->>Model: charolaModel.registrarCharola(datos)
    deactivate Controller
    activate Model
    Model->>Database: crearCharola(query)
    deactivate Model
    activate Database
    Database--XModel: Error en la consulta
    deactivate Database
    activate Model
    Model--XController: Error inesperado en la base de datos
    deactivate Model
    activate Controller
    Controller-->>APIService: 500 Error Interno en el Servidor
    deactivate Controller
    activate APIService
    APIService-->>Repository: 500 Error Interno en el Servidor
    deactivate APIService
    activate Repository
    Repository-->>Domain: 500 Error Interno en el Servidor
    deactivate Repository
    activate Domain
    Domain-->>ViewModel: 500 Error Interno en el Servidor
    deactivate Domain
    activate ViewModel
    ViewModel-->>View: Error interno en el servidor. Intenta más tarde.
    deactivate ViewModel
    activate View
    View-->>Usuario: Hubo un problema en el sistema. Intenta de nuevo más tarde.
    deactivate View
    end

    alt ERROR 101 - Sin conexión a Internet
    Usuario->>View: (POST) do Registrar Charola
    activate View
    View->>+ViewModel: do RegistrarCharola(Datos)
    deactivate View
    activate ViewModel
    ViewModel->>Domain: charolaRequirement.registrar(charola)
    deactivate ViewModel
    activate Domain
    Domain->>Repository: repository.registrar(charola)
    deactivate Domain
    activate Repository
    Repository->>APIService: APIService.registrar(charola)
    deactivate Repository
    activate APIService
    APIService--XViewModel: 101 Error: No hay conexión a Internet
    deactivate APIService
    activate ViewModel
    ViewModel-->>View: No pudo conectar con el servidor. Revisa tu conexión.
    deactivate ViewModel
    activate View
    View-->>Usuario: No tienes conexión a Internet.
    deactivate View
    end



```

---

### Mockup

> _Descripción_: El mockup presenta la interfaz donde el Super Administrador puede ingresar los datos de un nuevo empleado, con campos requeridos y botones de acción para crear al empleado.

![Mockup: Registrar Charola](image-1.png)

### Pruebas Unitarias

| ID Prueba | Descripción                                                        | Resultado Esperado                                                                           |
| --------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| PU-RF5-01 | Registrar una nueva charola con datos válidos.                     | El sistema guarda la charola con su identificador único y muestra confirmación de éxito.     |
| PU-RF5-02 | Intentar registrar una charola sin identificador único.            | El sistema muestra un mensaje de error indicando que el identificador es obligatorio.        |
| PU-RF5-03 | Registrar una charola con datos incompletos.                       | El sistema impide el registro y señala qué campos faltan.                                    |
| PU-RF5-04 | Intentar ingresar datos inválidos en peso o estado de la charola.  | El sistema valida los datos y muestra un error si no cumplen con el formato esperado.        |
| PU-RF5-05 | Confirmar que la charola registrada se guarda en la base de datos. | La información ingresada se almacena de manera segura y es accesible para futuras consultas. |
| PU-RF5-06 | Probar el mensaje de confirmación tras un registro exitoso.        | El sistema muestra una notificación confirmando que la charola fue registrada correctamente. |

## Historial de cambios

| **Tipo de Versión** | **Descripción**                            | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------------------------ | --------- | ----------------------- |
| **1.0**             | Creacion de la historia de usuario         | 8/3/2025  | Armando Mendez          |
| **1.0**             | Verificación de los cambios                | 8/3/2025  | Miguel Angel            |
| **1.1**             | Creación del diagrama de secuencia         | 3/4/2025  | Emiliano Gomez Gonzalez |
| **1.2**             | Correciones del DS y agregacion del Mockup | 22/4/2025 | Emiliano Gomez Gonzalez |
