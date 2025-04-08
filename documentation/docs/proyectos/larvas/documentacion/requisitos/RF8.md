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
        Usuario->>View: Presiona "Eliminar Charola"
        View->>ViewModel: eliminarCharola(id)
        ViewModel->>Domain: eliminarCharola(id)
        Domain->>Repository: eliminarCharola(id)

        Repository->>APIClient: eliminarCharola(id)
        APIClient->>+APIService: DELETE /charolas/{id}
        APIService->>Controller: Procesar solicitud
        Controller->>Model: Validar existencia y eliminar
        Model->>Database: DELETE FROM charolas WHERE id = ?

        Database-->>Model: Confirma eliminación
        Model-->>Controller: Éxito
        Controller-->>APIService: 200 OK
        APIService-->>-APIClient: Eliminación exitosa
        APIClient-->>Repository: Eliminación exitosa
        Repository-->>Domain: Resultado de eliminación
        Domain-->>ViewModel: Notifica éxito
        ViewModel-->>View: Actualizar UI
        View-->>Usuario: Mostrar mensaje "Charola eliminada correctamente"
    else Sin conexión a internet, 101
        Usuario->>View: Presiona "Eliminar Charola"
        View->>ViewModel: eliminarCharola(id)
        ViewModel->>Domain: eliminarCharola(id)
        Domain->>Repository: eliminarCharola(id)

        Repository->>APIClient: eliminarCharola(id)
        APIClient->>+APIService: DELETE /charolas/{id}        

        APIService-->>-APIClient: Error 101
        APIClient-->>Repository: Error 101
        Repository-->>Domain: Error 101
        Domain-->>ViewModel: Notifica error
        ViewModel-->>View: Actualizar UI
        View-->>Usuario: Mostrar mensaje "Sin conexión a internet"
    else Error de servidor, 500
        Usuario->>View: Presiona "Eliminar Charola"
        View->>ViewModel: eliminarCharola(id)
        ViewModel->>Domain: eliminarCharola(id)
        Domain->>Repository: eliminarCharola(id)

        Repository->>APIClient: eliminarCharola(id)
        APIClient->>+APIService: DELETE /charolas/{id}
        APIService->>Controller: Procesar solicitud
        Controller->>Model: Validar existencia y eliminar
        Model->>Database: DELETE FROM charolas WHERE id = ?

        Database-->>Model: Dato no encontrado
        Model-->>Controller: Error
        Controller-->>APIService: Error 500
        APIService-->>-APIClient: Error 500
        APIClient-->>Repository: Error 500
        Repository-->>Domain: Error 500
        Domain-->>ViewModel: Notifica Error
        ViewModel-->>View: Actualizar UI
        View-->>Usuario: Mostrar mensaje "Error de servidor"
    end

```

---

### Mockup

> *Descripción*: El mockup muestra la interfaz donde el Super Administrador puede eliminar un empleado, con un botón de confirmación para realizar la eliminación.

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