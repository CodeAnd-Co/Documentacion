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
rutaUsuarios -->> rutaUsuarios: Valida API key y JWT

alt Token inválido o no autorizado
    rutaUsuarios -->> Backend: Retorna JSON {"message": "No autorizado"}, status 401
    Backend -->> Api_gateway: Retorna JSON {"message": "No autorizado"}, status 401
    Api_gateway -->> Frontend: Retorna JSON {"message": "No autorizado"}, status 401
    Frontend -->> SuperAdmin: Muestra mensaje de error: "No autorizado"
else Token válido
    rutaUsuarios -->> controladorUsuarios: Enviar parámetros (filtros, búsqueda, paginación)
    controladorUsuarios -->> repositorioUsuarios: Solicita usuarios aplicando filtros
    repositorioUsuarios -->> DynamoDB: Consulta usuarios con filtros
    DynamoDB -->> repositorioUsuarios: Retorna datos de usuarios
    repositorioUsuarios -->> controladorUsuarios: Retorna lista de usuarios
    controladorUsuarios -->> rutaUsuarios: Retorna lista paginada con nombre y rol

    alt Lista vacía
        rutaUsuarios -->> Backend: JSON {"usuarios": [], "mensaje": "No hay registros"}, status 200
        Backend -->> Api_gateway: JSON {"usuarios": [], "mensaje": "No hay registros"}, status 200
        Api_gateway -->> Frontend: JSON {"usuarios": [], "mensaje": "No hay registros"}, status 200
        Frontend -->> SuperAdmin: Muestra mensaje "No hay registros disponibles"
    else Lista con usuarios
        rutaUsuarios -->> Backend: JSON con usuarios y metadata de paginación, status 200
        Backend -->> Api_gateway: JSON con usuarios y metadata de paginación, status 200
        Api_gateway -->> Frontend: JSON con usuarios y metadata de paginación, status 200
        Frontend -->> SuperAdmin: Muestra tabla con nombre, rol, búsqueda y paginación
    end
end

```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz de usuario donde el Super Administrador puede ver la lista de usuarios en formato de tabla, con opciones para filtrar, buscar y paginar los resultados.

> ![Interfaz de consultar lista de usuarios](imagenes/mockupConsultaListaUsuarios.PNG)
