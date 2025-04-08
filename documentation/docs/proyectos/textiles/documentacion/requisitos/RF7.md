---
title: "RF7: Super Administrador Consulta Lista de Roles"
sidebar_position: 9
---

# RF7: Super Administrador Consulta Lista de Roles

**Última actualización:** 08 de abril de 2025

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

## **Pruebas Unitarias**

En caso de que alguna de las pruebas unitarias no sea aprobada, se deberá realizar una nueva iteración del proceso de pruebas.
Este proceso continuará de forma iterativa hasta que todas las pruebas sean aprobadas satisfactoriamente, garantizando así la estabilidad y el cumplimiento de los requisitos funcionales definidos en la historia de usuario.

**Iteración:** 1

| ID Prueba | Descripción                                      | Valores de entrada                                 | Resultado esperado                                                   | Resultado observado | Aprobado (sí/no) |
|-----------|--------------------------------------------------|----------------------------------------------------|----------------------------------------------------------------------|---------------------|------------------|
| CU001     | Obtener todos los roles                          | Sin filtros                                        | Retorna lista completa de roles                                      | pending             | pending          |
| CU002     | Filtrar roles por nombre exacto                  | nombre = "Empleado"                           | Retorna lista con el rol "Empleado"                             | pending             | pending          |
| CU003     | Filtrar roles por nombre parcial                 | nombre = "Super"                                   | Retorna lista con roles que contengan "Super" en el nombre          | pending             | pending          |
| CU004     | Buscar rol inexistente                           | nombre = "NoExiste"                                | Retorna lista vacía                                                  | pending             | pending          |
| CU005     | Validar respuesta cuando no hay roles registrados| Sin filtros (base de datos vacía)                  | Retorna lista vacía y mensaje “No hay registros disponibles”         | pending             | pending          |
| CU006     | Validar acceso sin autenticación                 | JWT inválido o ausente                             | Retorna error: “No autorizado”                                       | pending             | pending          |
