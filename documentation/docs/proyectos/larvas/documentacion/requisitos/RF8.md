---
title: "RF8: Eliminar Charola"  
sidebar_position: 9
---

# RF8: Eliminar Charola

### Historia de Usuario
Como usuario del sistema, quiero borrar los datos de una charola en la base de datos, para eliminar registros obsoletos o incorrectos y mantener la base de datos actualizada y ordenada.


  **Criterios de Aceptación:**
  - El sistema debe permitir la eliminación de charolas solo a usuarios autorizados.
  - Antes de eliminar una charola, se debe mostrar un mensaje de confirmación.
  - La eliminación debe reflejarse de inmediato en la base de datos sin afectar otros registros.

---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia muestra el flujo de eliminación de un empleado, donde el Super Administrador solicita la eliminación y el sistema confirma la acción antes de proceder.

# Eliminar charola

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

    alt Conexión disponible
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

        APIClient ->> APIService: DELETE /charolas/{id}
        deactivate APIClient
        activate APIService

        APIService ->> Controller: Procesar solicitud
        deactivate APIService
        activate Controller

        Controller ->> Model: Validar existencia y eliminar
        deactivate Controller
        activate Model

        Model ->> Database: DELETE FROM charolas WHERE id = ?
        deactivate Model
        activate Database

        Database -->> Model: Confirma eliminación
        activate Model
        deactivate Database

        Model -->> Controller: Éxito
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
    else Sin conexión a internet, 101
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

        APIClient ->> APIService: DELETE /charolas/{id}
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
    else Error de servidor, 500
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

        APIClient ->> APIService: DELETE /charolas/{id}
        deactivate APIClient
        activate APIService

        APIService ->> Controller: Procesar solicitud
        deactivate APIService
        activate Controller

        Controller ->> Model: Validar existencia y eliminar
        deactivate Controller
        activate Model

        Model ->> Database: DELETE FROM charolas WHERE id = ?
        deactivate Model
        activate Database

        Database -->> Model: Dato no encontrado
        activate Model
        deactivate Database

        Model -->> Controller: Error
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

### Mockup

> *Descripción*: El mockup muestra la interfaz donde el Super Administrador puede eliminar un empleado, con un botón de confirmación para realizar la eliminación.

![Mockup](../mockupRF8.jpg)

### Pruebas Unitarias 
| ID Prueba  | Descripción                                               | Resultado Esperado  |
|------------|-----------------------------------------------------------|---------------------|
| PU-RF8-01  | Eliminar una charola existente con permisos adecuados.    | El sistema elimina la charola y muestra un mensaje de confirmación. |
| PU-RF8-02  | Intentar eliminar una charola sin permisos.               | El sistema bloquea la acción e informa que se requieren permisos adecuados. |
| PU-RF8-03  | Intentar eliminar una charola inexistente.                | El sistema muestra un mensaje de error indicando que la charola no existe. |
| PU-RF8-04  | Verificar que la eliminación se refleje inmediatamente en la base de datos. | La charola eliminada ya no aparece en consultas posteriores. |
| PU-RF8-05  | Confirmar que la eliminación de una charola no afecta otros registros. | Los demás datos en la base permanecen intactos tras la eliminación. |
| PU-RF8-06  | Validar que el sistema solicite confirmación antes de eliminar. | Se muestra un mensaje de confirmación antes de ejecutar la acción de eliminación. |


## Historial de cambios

| **Tipo de Versión** | **Descripción**                      | **Fecha** | **Colaborador**   |
| ------------------- | ------------------------------------ | --------- | ----------------- |
| **1.0**             | Creacion de la historia de usuario   | 8/3/2025  | Armando Mendez    |
| **1.0**             | Verificación de los cambios          | 8/3/2025  | Miguel Angel      |
| **1.1**             | Creación del diagrama de secuencia   | 3/4/2025  | Juan Eduardo      |