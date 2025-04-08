---
title: "RF2: Super Administrador Consulta Lista de Usuarios"
sidebar_position: 4
---

# RF2: Super Administrador Consulta Lista de Usuarios

**Última actualización:** 06 de abril de 2025

---

## Historia de Usuario

Como **Super Administrador**, quiero acceder a un listado de usuarios con opciones de búsqueda y filtros para gestionar su información y accesos de manera eficiente.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción **"Lista de Usuarios"** desde el panel de administración.
2. Se debe mostrar una tabla con la siguiente información de cada usuario:
   - Nombre completo
   - Rol
3. Debe existir una barra de búsqueda para filtrar usuarios por nombre o correo electrónico.
4. Debe permitir paginación si hay muchos usuarios registrados.
5. Si no hay usuarios en la base de datos, se debe mostrar un mensaje indicando que no hay registros disponibles.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia muestra la interacción del Super Administrador con el sistema para consultar la lista de usuarios. Incluye los pasos de solicitud, procesamiento y respuesta de los datos obtenidos de la base de datos.

```mermaid
sequenceDiagram
participant SuperAdmin as Super Administrador
participant Frontend
participant Api_gateway
participant Backend
participant rutaUsuarios
participant controladorUsuarios
participant repositorioUsuarios
participant DynamoDB

SuperAdmin -->> Frontend: Selecciona "Lista de Usuarios"
Frontend -->> Api_gateway: Envía petición GET /api/usuarios con JWT
Api_gateway -->> Backend: Reenvía GET /api/usuarios con JWT
Backend -->> rutaUsuarios: Llama a la ruta /api/usuarios
rutaUsuarios -->> rutaUsuarios: Valida API key

alt API key inválida
    rutaUsuarios -->> Backend: Retorna JSON {"message": "API key inválida"}, status 400
    Backend -->> Api_gateway: Retorna JSON {"message": "API key inválida"}, status 400
    Api_gateway -->> Frontend: Retorna JSON {"message": "Error de autenticación"}, status 400
    Frontend -->> SuperAdmin: Muestra mensaje de error: "Acceso no autorizado"
else API key válida
    rutaUsuarios -->> rutaUsuarios: Valida JWT

    alt JWT inválido o expirado
        rutaUsuarios -->> Backend: Retorna JSON {"message": "JWT inválido"}, status 401
        Backend -->> Api_gateway: Retorna JSON {"message": "JWT inválido"}, status 401
        Api_gateway -->> Frontend: Retorna JSON {"message": "Error de autenticación"}, status 401
        Frontend -->> SuperAdmin: Muestra mensaje de error: "Acceso no autorizado"
    else JWT válido
        rutaUsuarios -->> controladorUsuarios: Solicita usuarios
        controladorUsuarios -->> repositorioUsuarios: Solicita usuarios
        repositorioUsuarios -->> DynamoDB: Consulta usuarios

        alt Error en la base de datos
            DynamoDB -->> repositorioUsuarios: Retorna error
            repositorioUsuarios -->> controladorUsuarios: Retorna error
            controladorUsuarios -->> rutaUsuarios: Retorna JSON {"message": "Error al consultar usuarios"}, status 500
            rutaUsuarios -->> Backend: Retorna JSON {"message": "Error al consultar usuarios"}, status 500
            Backend -->> Api_gateway: Retorna JSON {"message": "Error al consultar usuarios"}, status 500
            Api_gateway -->> Frontend: Retorna JSON {"message": "Error interno"}, status 500
            Frontend -->> SuperAdmin: Muestra mensaje: "Hubo un error al cargar los usuarios"
        else Consulta exitosa
            DynamoDB -->> repositorioUsuarios: Retorna lista de usuarios
            repositorioUsuarios -->> controladorUsuarios: Retorna lista de usuarios
            controladorUsuarios -->> rutaUsuarios: Retorna lista de usuarios
            rutaUsuarios -->> Backend: Retorna lista de usuarios, status 200
            Backend -->> Api_gateway: Retorna lista de usuarios, status 200
            Api_gateway -->> Frontend: Retorna lista de usuarios, status 200

            alt Lista vacía
                Frontend -->> SuperAdmin: Muestra mensaje "No hay registros disponibles"
            else Lista con usuarios
                Frontend -->> SuperAdmin: Muestra tabla con ID, nombre, rol, cliente, correo, teléfono, estatus
            end
        end
    end
end

Note right of Frontend: Filtros, búsqueda y paginación realizados en el frontend con Material UI


```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz de usuario donde el Super Administrador puede ver la lista de usuarios en formato de tabla, con opciones para filtrar, buscar y paginar los resultados.

> ![Interfaz de consultar lista de usuarios](mockupConsultaListaUsuarios.PNG)
