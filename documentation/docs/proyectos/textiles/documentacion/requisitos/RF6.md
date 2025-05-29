---
title: "RF6: Super Administrador Crea Rol"
sidebar_position: 8
---

# RF6: Super Administrador Crea Rol

**Última actualización:** 06 de marzo de 2025

---

## Historia de Usuario

Como administrador, quiero poder crear nuevos roles personalizados con permisos específicos para asignarlos a los usuarios del sistema y gestionar su acceso de manera estructurada.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción **"Crear Rol"** dentro de la vista de roles.
2. Debe permitir ingresar un nombre para el rol, una descripción y definir los permisos asociados.
3. Al guardar, el sistema debe validar que el nombre del rol no esté duplicado.
4. Si la creación es exitosa, el nuevo rol debe aparecer en la lista de roles disponibles.
5. Si hay un error, el sistema debe mostrar un mensaje indicando el problema.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia representa el proceso mediante el cual el Super Administrador crea un nuevo rol, especificando sus permisos y confirmando la acción.

```mermaid
sequenceDiagram
    autonumber
    participant Usuario
    participant Frontend
    participant Api_gateway
    participant Backend
    participant rutaRol
    participant controladorRol
    participant repositorioRol
    participant RDS

    Usuario-->>Frontend: Ingresa nombre del rol y selecciona permisos
    Frontend-->>Api_gateway: Envia petición POST
    Api_gateway-->>Backend: Recibe petición POST
    Backend-->>rutaRol: Llama a la ruta /api/roles

    rutaRol-->>rutaRol: Revisa que la API key fue enviada
    rutaRol-->>rutaRol: Valida la API key

    alt API key inválida
        rutaRol-->>Backend: Retorna JSON {"message": "API key invalida"}, status 400
        Backend-->>Api_gateway: Retorna JSON {"message": "API key invalida"}, status 400
        Api_gateway-->>Frontend: Retorna JSON {"message": "API key invalida"}, status 400
        Frontend-->>Usuario: Muestra mensaje de error: "API key invalida"
    else API key válida
        rutaRol-->>controladorRol: Envía datos al controlador
        controladorRol-->>controladorRol: Valida campos requeridos (nombre y permisos)

        alt Campos vacíos
            controladorRol-->>rutaRol: Retorna JSON {"message": "Campos requeridos"}, status 400
            rutaRol-->>Backend: Retorna JSON {"message": "Campos requeridos"}, status 400
            Backend-->>Api_gateway: Retorna JSON {"message": "Campos requeridos"}, status 400
            Api_gateway-->>Frontend: Retorna JSON {"message": "Campos requeridos"}, status 400
            Frontend-->>Usuario: Muestra mensaje de error
        else Campos válidos
            controladorRol-->>repositorioRol: Verifica si el rol ya existe
            repositorioRol-->>RDS: SELECT nombre FROM roles WHERE nombre = '...'
            RDS-->>repositorioRol: Retorna resultado
            repositorioRol-->>controladorRol: Retorna existencia

            alt Rol ya existe
                controladorRol-->>rutaRol: Retorna JSON {"message": "El rol ya existe"}, status 409
                rutaRol-->>Backend: Retorna JSON {"message": "El rol ya existe"}, status 409
                Backend-->>Api_gateway: Retorna JSON {"message": "El rol ya existe"}, status 409
                Api_gateway-->>Frontend: Retorna JSON {"message": "El rol ya existe"}, status 409
                Frontend-->>Usuario: Muestra mensaje de error
            else Rol no existe
                controladorRol-->>repositorioRol: Verifica existencia de permisos
                repositorioRol-->>RDS: SELECT * FROM permisos WHERE id IN (...)
                RDS-->>repositorioRol: Retorna permisos válidos
                repositorioRol-->>controladorRol: Permisos válidos

                alt Permisos inválidos
                    controladorRol-->>rutaRol: Retorna JSON {"message": "Permisos inválidos"}, status 400
                    rutaRol-->>Backend: Retorna JSON {"message": "Permisos inválidos"}, status 400
                    Backend-->>Api_gateway: Retorna JSON {"message": "Permisos inválidos"}, status 400
                    Api_gateway-->>Frontend: Retorna JSON {"message": "Permisos inválidos"}, status 400
                    Frontend-->>Usuario: Muestra mensaje de error
                else Permisos válidos
                    controladorRol-->>repositorioRol: Llama a función para crear el rol
                    repositorioRol-->>RDS: INSERT INTO roles (...)
                    RDS-->>repositorioRol: Confirma inserción
                    repositorioRol-->>controladorRol: Respuesta exitosa

                    controladorRol-->>rutaRol: Retorna JSON {"message": "Rol creado exitosamente"}, status 201
                    rutaRol-->>Backend: Retorna JSON {"message": "Rol creado exitosamente"}, status 201
                    Backend-->>Api_gateway: Retorna JSON {"message": "Rol creado exitosamente"}, status 201
                    Api_gateway-->>Frontend: Retorna JSON {"message": "Rol creado exitosamente"}, status 201
                    Frontend-->>Usuario: Muestra mensaje "Rol creado exitosamente"
                end
            end
        end
    end

```

---

## **Mockup**

> _Descripción_: El mockup muestra la interfaz donde el Super Administrador puede ingresar el nombre del rol y seleccionar los permisos antes de crearlo.

![alt text](imagenes/RF6.png)

## **Código**

_<u>[Pull Request Front-End](https://github.com/CodeAnd-Co/Frontend-Text-Lines/pull/43)</u>_

_<u>[Pull Request Back-End](https://github.com/CodeAnd-Co/Backend-textiles/pull/44)</u>_

---

### Historial de cambios

| **Tipo de Versión** | **Descripción**             | **Fecha**  | **Colaborador**          |
| ------------------- | --------------------------- | ---------- | ------------------------ |
| **1.0**             | Se actualizó documentación. | 22/05/2025 | Arturo Sánchez Rodríguez |
| **1.1**             | Agregar links de PR         | 26/05/2025 | Max Toscano              |
