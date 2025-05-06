---
title: "RF7: Super Administrador Consulta Lista de Roles"
sidebar_position: 9
---

# RF7: Super Administrador Consulta Lista de Roles


---

## Historia de Usuario

Como administrador, quiero poder ver un listado de roles con filtros y opciones de búsqueda para gestionar el acceso de los usuarios de manera eficiente.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción **"Lista de Roles"** dentro del panel de administración.
2. La lista debe mostrar los siguientes datos de cada rol:
   - Nombre del rol
   - Cantidad de usuarios asignados a ese rol
3. Debe permitir filtrar roles por nombre.
4. Si no hay roles registrados, se debe mostrar un mensaje indicando que no hay registros disponibles.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia muestra la interacción entre el Super Administrador y el sistema para consultar la lista de roles, incluyendo la solicitud de datos y su visualización.

```mermaid
sequenceDiagram
    participant SuperAdministrador
    participant Frontend as RolesPage (Frontend)
    participant ApiGateway
    participant Backend
    participant RutaRoles
    participant ControladorRoles
    participant RepositorioRoles
    participant BD as BaseDeDatos

    SuperAdministrador->>Frontend: Selecciona "Lista de Roles"
    Frontend->>ApiGateway: Envia GET /api/roles con JWT
    ApiGateway->>Backend: Reenvía GET /api/roles con JWT
    Backend->>RutaRoles: Llama a ruta /api/roles
    RutaRoles->>RutaRoles: Valida API Key y JWT

    alt Token inválido o no autorizado
        RutaRoles-->>Backend: JSON {"message": "No autorizado"}, status 401
        Backend-->>ApiGateway: JSON {"message": "No autorizado"}, status 401
        ApiGateway-->>Frontend: JSON {"message": "No autorizado"}, status 401
        Frontend-->>SuperAdministrador: Muestra mensaje "No autorizado"
    else Token válido
        RutaRoles->>ControladorRoles: Enviar parámetros (filtros, búsqueda)
        ControladorRoles->>RepositorioRoles: Solicita roles con filtros
        RepositorioRoles->>BD: Consulta datos de roles
        BD-->>RepositorioRoles: Retorna datos de roles
        RepositorioRoles-->>ControladorRoles: Retorna lista de roles
        ControladorRoles-->>RutaRoles: Lista paginada con nombre y cantidad de usuarios
        alt Lista vacía
            RutaRoles-->>Backend: JSON {"roles": [], "mensaje": "No hay registros"}, status 200
            Backend-->>ApiGateway: JSON {"roles": [], "mensaje": "No hay registros"}, status 200
            ApiGateway-->>Frontend: JSON {"roles": [], "mensaje": "No hay registros"}, status 200
            Frontend-->>SuperAdministrador: Muestra mensaje "No hay registros disponibles"
        else Lista con roles
            RutaRoles-->>Backend: JSON con roles y metadata de paginación, status 200
            Backend-->>ApiGateway: JSON con roles y metadata de paginación, status 200
            ApiGateway-->>Frontend: JSON con roles y metadata de paginación, status 200
            Frontend-->>SuperAdministrador: Muestra tabla con roles y cantidad de usuarios.
        end
    end
```
---

## **Mockup**

> _Descripción_: El mockup muestra la interfaz donde el Super Administrador puede ver la lista de roles disponibles, con opciones de búsqueda y filtrado.

> ![Interfaz de consultar lista de roles](imagenes/Consultar_Roles.png)

## **Pruebas**

_<u>[Enlace a pruebas RF7 Consultar lista de roles.](https://docs.google.com/spreadsheets/d/1NLGwGrGA5PVOEzLaqxa8Ts1D_Ng3QzzqNKWJYUzxD-M/edit?pli=1&gid=1274458259#gid=1274458259)</u>_

| **Tipo de Versión** | **Descripción**                  | **Fecha**  | **Colaborador** |
| ------------------- | -------------------------------- | ---------- | --------------- |
| **1.0**             | Creación de documentación        | 06/04/2025 | Hiram Mendoza  |
| **1.1**             | Agregar pruebas | 06/05/2025 | Hiram Mendoza   |
