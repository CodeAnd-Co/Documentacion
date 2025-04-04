---
title: "RF3: Consultar historial de ancestros de una charola"  
sidebar_position: 4
---

# RF3: Consultar historial de ancestros de una charola

**Última actualización:** 08 de marzo de 2025

### Historia de Usuario
Como usuario del sistema, quiero consultar el historial de ancestros de una charola específica dentro del sistema, para rastrear su origen y evolución, asegurando un mejor control sobre la producción.

  **Criterios de Aceptación:**
  - El sistema debe permitir al administrador seleccionar una charola específica.
  - Se debe mostrar el historial completo de la charola, incluyendo las charolas de las que proviene.
  - La información debe presentarse de manera clara y organizada, utilizando una estructura visual intuitiva que facilite la vista de los datos.
  - La visualización del historial debe actualizarse en tiempo real conforme se registren nuevos datos.
  - La interfaz debe permitir la navegación entre generaciones de charolas para rastrear su evolución y procedencia de manera eficiente.

---

### Diagrama de Secuencia

> El diagrama de secuencia ilustra cómo un Administrador interactúa con el sistema para consultar el historial de ancestros de una charola. La interacción comienza cuando el Administrador selecciona la charola en la interfaz (View). Esta acción se propaga al ViewModel y luego al Domain, que se encarga de la lógica del negocio. Desde allí, la solicitud se dirige al Repository y continúa a través del APIClient y APIService, llegando finalmente al Controller y al Model, que consulta la base de datos para obtener los datos requeridos. Una vez recuperados, la información se retorna siguiendo la misma cadena hasta actualizar la interfaz y mostrar el historial. 

# Consultar historial de ancestros de una charola

```mermaid
sequenceDiagram
    actor Administrador 
    participant View as View (Presentación)
    participant ViewModel as ViewModel (Presentación)
    participant Domain as Domain (Dominio)
    participant Repository as Repository (Infraestructura)
    participant APIClient as API Client (Infraestructura)
    participant APIService as API Service (Infraestructura)
    participant Controller as Controller (Infraestructura)
    participant Model as Model (Dominio/Persistencia)
    participant Database as Base de Datos (Persistencia)

    %% Flujo principal: Conexión disponible
    alt Conexión disponible
        Administrador->>View: Selecciona charola para ver historial
        View->>ViewModel: consultarHistorialAncestros(idCharola)
        ViewModel->>Domain: consultarHistorialAncestros(idCharola)
        Domain->>Repository: consultarHistorialAncestros(idCharola)
        Repository->>APIClient: consultarHistorialAncestros(idCharola)
        APIClient->>+APIService: GET /charolas/{idCharola}/ancestros
        APIService->>Controller: Procesar solicitud
        Controller->>Model: Buscar ancestros
        Model->>Database: SELECT * FROM ancestros WHERE charola_id = ?
        Database-->>Model: Retorna resultados
        Model-->>Controller: Datos de ancestros encontrados
        Controller-->>APIService: 200 OK
        APIService-->>-APIClient: Retorna datos de ancestros
        APIClient-->>Repository: Datos de ancestros
        Repository-->>Domain: Datos de ancestros
        Domain-->>ViewModel: Datos de ancestros
        ViewModel-->>View: Actualizar UI con historial
        View-->>Administrador: Mostrar historial de ancestros
    end

    %% Error: Sin conexión a internet (101)
    alt Sin conexión a internet, 101
        Administrador->>View: Selecciona charola para ver historial
        View->>ViewModel: consultarHistorialAncestros(idCharola)
        ViewModel->>Domain: consultarHistorialAncestros(idCharola)
        Domain->>Repository: consultarHistorialAncestros(idCharola)
        Repository->>APIClient: consultarHistorialAncestros(idCharola)
        APIClient->>+APIService: GET /charolas/{idCharola}/ancestros        
        APIService-->>-APIClient: Error 101
        APIClient-->>Repository: Error 101
        Repository-->>Domain: Error 101
        Domain-->>ViewModel: Notifica error
        ViewModel-->>View: Actualizar UI
        View-->>Administrador: Mostrar mensaje "Sin conexión a internet"
    end

    %% Error: Charola no encontrada (404)
    alt Charola no encontrada, 404
        Administrador->>View: Selecciona charola para ver historial
        View->>ViewModel: consultarHistorialAncestros(idCharola)
        ViewModel->>Domain: consultarHistorialAncestros(idCharola)
        Domain->>Repository: consultarHistorialAncestros(idCharola)
        Repository->>APIClient: consultarHistorialAncestros(idCharola)
        APIClient->>+APIService: GET /charolas/{idCharola}/ancestros
        APIService->>Controller: Procesar solicitud
        Controller->>Model: Buscar ancestros
        Model->>Database: SELECT * FROM ancestros WHERE charola_id = ?
        Database-->>Model: Dato no encontrado
        Model-->>Controller: Error "Charola no encontrada"
        Controller-->>APIService: Error 404
        APIService-->>-APIClient: Error 404
        APIClient-->>Repository: Error 404
        Repository-->>Domain: Error 404
        Domain-->>ViewModel: Notifica error
        ViewModel-->>View: Actualizar UI
        View-->>Administrador: Mostrar mensaje "Charola no encontrada"
    end

    %% Error: Autenticación (401)
    alt Error de autenticación, 401
        Administrador->>View: Selecciona charola para ver historial
        View->>ViewModel: consultarHistorialAncestros(idCharola)
        ViewModel->>Domain: consultarHistorialAncestros(idCharola)
        Domain->>Repository: consultarHistorialAncestros(idCharola)
        Repository->>APIClient: consultarHistorialAncestros(idCharola)
        APIClient->>+APIService: GET /charolas/{idCharola}/ancestros        
        APIService-->>-APIClient: Error 401
        APIClient-->>Repository: Error 401
        Repository-->>Domain: Error 401
        Domain-->>ViewModel: Notifica error
        ViewModel-->>View: Actualizar UI
        View-->>Administrador: Mostrar mensaje "No autorizado. Por favor, inicie sesión."
    end

    %% Error: Validación (400)
    alt Error de validación, 400
        Administrador->>View: Selecciona charola para ver historial
        View->>ViewModel: consultarHistorialAncestros(idCharola)
        ViewModel->>Domain: consultarHistorialAncestros(idCharola)
        Domain->>Repository: consultarHistorialAncestros(idCharola)
        Repository->>APIClient: consultarHistorialAncestros(idCharola)
        APIClient->>+APIService: GET /charolas/{idCharola}/ancestros        
        APIService-->>-APIClient: Error 400
        APIClient-->>Repository: Error 400
        Repository-->>Domain: Error 400
        Domain-->>ViewModel: Notifica error
        ViewModel-->>View: Actualizar UI
        View-->>Administrador: Mostrar mensaje "Parámetros inválidos. Verifique la solicitud."
    end

    %% Error: Timeout
    alt Timeout
        Administrador->>View: Selecciona charola para ver historial
        View->>ViewModel: consultarHistorialAncestros(idCharola)
        ViewModel->>Domain: consultarHistorialAncestros(idCharola)
        Domain->>Repository: consultarHistorialAncestros(idCharola)
        Repository->>APIClient: consultarHistorialAncestros(idCharola)
        APIClient->>+APIService: GET /charolas/{idCharola}/ancestros        
        APIService-->>-APIClient: Timeout
        APIClient-->>Repository: Timeout
        Repository-->>Domain: Timeout
        Domain-->>ViewModel: Notifica Timeout
        ViewModel-->>View: Actualizar UI
        View-->>Administrador: Mostrar mensaje "La solicitud ha expirado, intente nuevamente"
    end


```
---

### Mockup

> *Descripción*: El mockup muestra la pantalla donde el Super Administrador puede eliminar un cliente, con la opción de confirmación antes de ejecutar la acción.

### Pruebas Unitarias 
| ID Prueba  | Descripción                                               | Resultado Esperado  |
|------------|-----------------------------------------------------------|---------------------|
| PU-RF3-01  | Consultar el historial de una charola que tiene ancestros registrados. | El sistema muestra correctamente todas las charolas de las que proviene la charola seleccionada. |
| PU-RF3-02  | Consultar el historial de una charola sin ancestros registrados. | El sistema indica que no hay datos disponibles sin generar errores. |
| PU-RF3-03  | Verificar la actualización del historial en tiempo real. | Si se registra un nuevo ancestro, el historial se actualiza automáticamente sin necesidad de recargar la página. |
| PU-RF3-04  | Buscar una charola inexistente. | El sistema muestra un mensaje de error indicando que la charola no existe. |
| PU-RF3-05  | Validar la navegación entre generaciones de charolas. | El sistema permite desplazarse entre diferentes niveles de ancestros sin fallos. |
