---
title: "RF1: Super Administrador Crea Usuario"
sidebar_position: 3
---

# RF1: Super Administrador Crea Usuario

**Última actualización:** 06 de marzo de 2025

---

## Historia de Usuario

Como **Super Administrador**, quiero poder registrar nuevos usuarios en el sistema, asignándoles un rol y permisos específicos para gestionar su acceso de manera estructurada y eficiente.

### **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción de **"Crear Usuario"** desde el panel de administración.
2. Se debe mostrar un formulario con los siguientes campos obligatorios:
   - Nombre completo
   - Correo electrónico
   - Número de telefono
   - Cliente al que pertenece
   - Rol del usuario (Ejemplo: Administrador, Usuario estándar, Moderador, etc.)
   - Permisos específicos según el rol seleccionado
   - Contraseña establecida y confirmada
3. Si los datos ingresados son válidos, el sistema debe registrar al nuevo usuario y mostrar un mensaje de confirmación.
4. Si algún campo obligatorio está vacío o con formato incorrecto, se debe mostrar un mensaje de error indicando qué corregir.
5. El usuario recién creado debe poder iniciar sesión con las credenciales proporcionadas.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia muestra cómo el **Super Administrador** interactúa con el sistema para registrar un nuevo usuario. Inicia con la selección de la opción "Crear Usuario", la validación de los datos ingresados, el almacenamiento en la base de datos y la notificación al nuevo usuario.

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

SuperAdmin -->> Frontend: Selecciona "Crear Usuario"
Frontend -->> Frontend: Muestra formulario con campos obligatorios

SuperAdmin -->> Frontend: Ingresa datos y envía formulario
Frontend -->> Frontend: Valida campos (nombre, correo, rol, etc.)

alt Formulario inválido
    Frontend -->> SuperAdmin: Muestra errores de validación (campos vacíos/formato incorrecto)
else Formulario válido
    Frontend -->> Api_gateway: POST /api/usuarios con JWT y datos usuario
    Api_gateway -->> Backend: Reenvía POST /api/usuarios con JWT y payload
    Backend -->> rutaUsuarios: Llama a la ruta POST /api/usuarios
    rutaUsuarios -->> rutaUsuarios: Valida API key y JWT

    alt Token inválido o no autorizado
        rutaUsuarios -->> Backend: Retorna JSON {"message": "No autorizado"}, status 401
        Backend -->> Api_gateway: Retorna JSON {"message": "No autorizado"}, status 401
        Api_gateway -->> Frontend: Retorna JSON {"message": "No autorizado"}, status 401
        Frontend -->> SuperAdmin: Muestra mensaje "No autorizado"
    else Token válido
        rutaUsuarios -->> controladorUsuarios: Envía datos del nuevo usuario
        controladorUsuarios -->> controladorUsuarios: Valida datos y rol, asigna permisos
        controladorUsuarios -->> repositorioUsuarios: Solicita creación del usuario
        repositorioUsuarios -->> DynamoDB: Inserta nuevo registro
        DynamoDB -->> repositorioUsuarios: Confirma inserción
        repositorioUsuarios -->> controladorUsuarios: Retorna éxito
        controladorUsuarios -->> rutaUsuarios: Retorna JSON {"mensaje": "Usuario creado"}, status 201
        rutaUsuarios -->> Backend: Retorna JSON {"mensaje": "Usuario creado"}, status 201
        Backend -->> Api_gateway: Retorna JSON {"mensaje": "Usuario creado"}, status 201
        Api_gateway -->> Frontend: Retorna JSON {"mensaje": "Usuario creado"}, status 201
        Frontend -->> SuperAdmin: Muestra mensaje de éxito
    end
end
```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz del sistema donde el **Super Administrador** completa los datos del nuevo usuario, selecciona su rol y permisos, y confirma la creación del usuario en el sistema.

## ![alt text](<Añadir Usuarios.png>)
