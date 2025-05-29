---
title: "RF2: Super Administrador Consulta Lista de Usuarios"
sidebar_position: 4
---

# RF2: Super Administrador Consulta Lista de Usuarios

**Última actualización:** 10 de abril de 2025

---

## Historia de Usuario

Como **Super Administrador**, quiero acceder a un listado de usuarios con opciones de búsqueda y filtros para gestionar su información y accesos de manera eficiente.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción **"Usuarios"** desde el panel de administración.
2. Se debe mostrar una tabla con la siguiente información de cada usuario:
   - ID
   - Nombre completo
   - Rol
   - Cliente
   - Estatus
   - Correo
   - Teléfono
3. Se deben poder hacer búsquedas y filtros para ubicar usuarios.
4. Debe permitir paginación si hay muchos usuarios registrados.
5. Si no hay usuarios en la base de datos, se debe mostrar un mensaje indicando que no hay registros disponibles.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia muestra la interacción del Super Administrador con el sistema para consultar la lista de usuarios. Incluye los pasos de solicitud, procesamiento y respuesta de los datos obtenidos de la base de datos.

```mermaid
sequenceDiagram
    actor SuperAdministrador as Super Administrador


    %% Bloque FRONTEND
    box Frontend
    participant ListaUsuarios as Página: ListaUsuarios.jsx
    participant useConsultarListaUsuarios as Hook: useConsultarListaUsuarios
    participant RepoFront as RepositorioConsultarListaUsuarios (Front)
    end


    %% Bloque API / RUTA
    box API/Router/Middlewares
    participant API as API Backend (consultar-lista-usuarios)
    participant ExpressRouter as Router (consultarListaUsuarios.routes.js)
    participant Middleware as Middlewares (revisarApiKey, autorizarToken, verificarPermisos)
    end


    %% Bloque BACKEND
    box Backend
    participant Controller as Controller (consultarListaUsuarios.controller.js)
    participant RepoBack as RepositorioConsultarListaUsuarios (Back)
    end


    %% Bloque BASE DE DATOS
    box Base de Datos
    participant Database as Base de Datos
    end


    %% Flujo principal
    SuperAdministrador ->> ListaUsuarios: Accede a la página ListaUsuarios
    ListaUsuarios ->> useConsultarListaUsuarios: useEffect inicializa
    useConsultarListaUsuarios ->> RepoFront: obtenerLista()
    RepoFront ->> API: POST /api/usuarios/consultar-lista-usuarios


    API ->> ExpressRouter: POST /usuarios/consultar-lista-usuarios
    ExpressRouter ->> Middleware: revisarApiKey(), autorizarToken(), verificarPermisos()
    Middleware ->> Controller: controlador.consultarListaUsuarios(req, res)
    Controller ->> RepoBack: consultarListaUsuarios()
    RepoBack ->> Database: ejecutar query CONSULTAS_USUARIOS.OBTENER_LISTA
    Database -->> RepoBack: devuelve lista de usuarios
    RepoBack -->> Controller: retorna lista de usuarios


    %% Alternativas en el Controller
    alt Lista de usuarios encontrada
        Controller -->> API: 200 OK, listaUsuarios
        API -->> RepoFront: 200 OK, listaUsuarios
        RepoFront -->> useConsultarListaUsuarios: retorna lista de usuarios
        useConsultarListaUsuarios -->> ListaUsuarios: actualiza estados (usuarios)
        ListaUsuarios -->> ListaUsuarios: renderiza tabla con usuarios
        ListaUsuarios -->> SuperAdministrador: muestra tabla de usuarios
    else No hay usuarios
        Controller -->> API: 200 OK, mensaje "No se encontraron usuarios"
        API -->> RepoFront: 200 OK, mensaje "No se encontraron usuarios"
        RepoFront -->> useConsultarListaUsuarios: retorna mensaje vacío
        useConsultarListaUsuarios -->> ListaUsuarios: actualiza estado mensaje
        ListaUsuarios -->> ListaUsuarios: muestra mensaje "No hay usuarios registrados"
        ListaUsuarios -->> SuperAdministrador: muestra mensaje "No hay usuarios registrados"
    else Error en consulta
        Controller -->> API: 500 Error, mensaje "Error al obtener usuarios"
        API -->> RepoFront: 500 Error, mensaje "Error al obtener usuarios"
        RepoFront -->> useConsultarListaUsuarios: retorna error
        useConsultarListaUsuarios -->> ListaUsuarios: actualiza estado error
        ListaUsuarios -->> ListaUsuarios: muestra mensaje de error
        ListaUsuarios -->> SuperAdministrador: muestra mensaje de error
    end


    Note right of ListaUsuarios: Filtros, búsqueda y paginación realizados en el frontend con Material UI
```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz de usuario donde el Super Administrador puede ver la lista de usuarios en formato de tabla, con opciones para filtrar, buscar y paginar los resultados.

> ![Interfaz de consultar lista de usuarios](imagenes/mockupConsultaListaUsuarios.PNG)

## **Pruebas**

_<u>[Enlace a pruebas RF2 Consultar Lista de Usuarios.](https://docs.google.com/spreadsheets/d/1NLGwGrGA5PVOEzLaqxa8Ts1D_Ng3QzzqNKWJYUzxD-M/edit?gid=1685718554#gid=1685718554)</u>_

### Historial de cambios

| **Tipo de Versión** | **Descripción**                                  | **Fecha** | **Colaborador** |
| ------------------- | ------------------------------------------------ | --------- | --------------- |
| **1.0**             | Actualización de la documentación del requisito. | 10/4/2025 | Valeria Zúñiga  |
