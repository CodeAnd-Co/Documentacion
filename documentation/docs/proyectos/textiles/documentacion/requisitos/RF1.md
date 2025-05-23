---
title: "RF1: Super Administrador Crea Usuario"
sidebar_position: 3
---

# RF1: Super Administrador Crea Usuario

---

## Historia de Usuario

Como **Super Administrador**, quiero poder registrar nuevos usuarios en el sistema, asignándoles un rol y permisos específicos para gestionar su acceso de manera estructurada y eficiente.

### **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción de **"Crear Usuario"** desde el panel de administración.
2. Se debe mostrar un formulario con los siguientes campos obligatorios:
   <<<<<<<<< Temporary merge branch 1
   - Nombre
   - Apellido(s)
   - Fecha de Nacimiento
   - Género
   - Correo electrónico
   - Número de telefono
   - Dirección
   - Cliente al que pertenece
   - Rol del usuario (Ejemplo: Administrador, Usuario estándar, Moderador, etc.)
   - # Contraseña establecida y confirmada
   - Nombre(s)
   - Apellido(s)
   - Fecha de nacimiento
   - Género
   - Correo electrónico
   - Número de telefono
   - Dirección
   - Rol del usuario (Ejemplo: Administrador, Usuario estándar, Moderador, etc.)
   - Cliente al que pertenece
   - Contraseña establecida y confirmada
3. Si los datos ingresados son válidos, el sistema debe registrar al nuevo usuario y mostrar un mensaje de confirmación.
4. Si algún campo obligatorio está vacío o con formato incorrecto, se debe mostrar un mensaje de error en el campo a corregir.
5. Si el rol seleccionado es Super Administrador, entonces el campo cliente debe bloquearse y asignarse automaticamente a todos los clientes.
6. El usuario recién creado debe poder iniciar sesión con las credenciales proporcionadas.
7. Se debe validar que no exista un usuario con el correo electrónico ingresado.
8. Se debe validar que no exista un usuario con el número de teléfono ingresado.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia muestra cómo el **Super Administrador** interactúa con el sistema para registrar un nuevo usuario. Inicia con la selección de la opción "Crear Usuario", la validación de los datos ingresados, el almacenamiento en la base de datos y la notificación al nuevo usuario.

```mermaid
sequenceDiagram
    actor SuperAdministrador as Super Administrador

    %% Bloque FRONTEND
    box Frontend
    participant ListaUsuarios as Página: ListaUsuarios.jsx
    participant FormularioCrearUsuario as Organismo: FormularioCrearUsuario
    participant useCrearUsuario as Hook: useCrearUsuario
    participant RepoFront as RepositorioCrearUsuario (Front)
    end

    %% Bloque BACKEND
    box Backend
    participant API as API Backend (Servidor Express)
    participant ExpressRouter as Router (indexUsuarios.routes.js)
    participant Middleware as Middlewares (validarYSanitizar, revisarApiKey, autorizarToken, verificarPermisos)
    participant Controller as Controller (crearUsuario.controller.js)
    participant RepoBack as RepositorioCrearUsuario (Back)
    end

    %% Bloque BASE DE DATOS
    box Base de Datos
    participant Database as Base de Datos
    end

    %% Flujo principal
    SuperAdministrador ->> ListaUsuarios: Da clic en \"Añadir Usuario\"
    ListaUsuarios ->> FormularioCrearUsuario: Modal se abre

    SuperAdministrador ->> FormularioCrearUsuario: Llena datos y presiona \"Guardar\"
    FormularioCrearUsuario ->> useCrearUsuario: manejarConfirmacion()
    useCrearUsuario ->> RepoFront: crearUsuario(datosUsuario)
    RepoFront ->> API: POST /api/usuarios/crear

    API ->> ExpressRouter: POST /usuarios/crear
    ExpressRouter ->> Middleware: validarYSanitizar(), revisarApiKey(), autorizarToken(), verificarPermisos()
    Middleware ->> Controller: controlador.crearUsuario(req, res)
    Controller ->> RepoBack: crearUsuario()
    RepoBack ->> Database: ejecutar INSERT Usuario
    Database -->> RepoBack: responde success/fail
    RepoBack -->> Controller: responde resultado de la creación

    %% Alternativas de respuesta
    alt Usuario creado exitosamente
        Controller -->> API: 201 Created, mensaje de éxito
        API -->> RepoFront: 201 Created, mensaje de éxito
        RepoFront -->> useCrearUsuario: respuesta éxito
        useCrearUsuario -->> FormularioCrearUsuario: mostrar Alerta tipo success
        FormularioCrearUsuario ->> ListaUsuarios:  mostrar Alerta tipo success durante 4 segundos
    else Error en creación
        Controller -->> API: 400/500 Error
        API -->> RepoFront: 400/500 Error
        RepoFront -->> useCrearUsuario: respuesta error
        useCrearUsuario -->> FormularioCrearUsuario: mostrar Alerta tipo error
        FormularioCrearUsuario -->> FormularioCrearUsuario: mantiene modal abierto
    end

    Note right of FormularioCrearUsuario: Validaciones locales de campos se ejecutan antes de enviar datos.

```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz del sistema donde el **Super Administrador** completa los datos del nuevo usuario, selecciona su rol y permisos, y confirma la creación del usuario en el sistema.

![Interfaz de crear usuario](./imagenes/crearUsuario.png)

## **Pruebas**

_<u>[Enlace a pruebas RF2 Consultar Lista de Usuarios.](https://docs.google.com/spreadsheets/d/1NLGwGrGA5PVOEzLaqxa8Ts1D_Ng3QzzqNKWJYUzxD-M/edit?gid=336266899#gid=336266899)</u>_

---

| **Tipo de Versión** | **Descripción**              | **Fecha** | **Colaborador** |
| ------------------- | ---------------------------- | --------- | --------------- |
| **1.0**             | Creación del requisito       | 6/3/2025  | Angélica Rios   |
| **1.1**             | Cambio de estado de historia | 6/5/2025  | Nicolas Hood    |
| **1.3**             | Se actualizó documentación. | 22/05/2025 | Arturo Sánchez Rodríguez |

