---
title: "RF3: Super Administrador Lee Usuario"
sidebar_position: 5
---

# RF3: Super Administrador Lee Usuario

---

## Historia de Usuario

Como **Super Administrador**, quiero consultar la información detallada de un usuario, para verificar que su rol, estado y datos de contacto sean correctos y estén actualizados.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder hacer clic en un usuario dentro de la **Lista de Usuarios** para ver su información.
2. Al hacer clic, se debe abrir un panel que muestre los siguientes datos:
   - Nombre completo
   - Cliente
   - Rol asignado (desplegable si está en modo edición)
   - Estado del usuario (Activo/Inactivo)
   - Correo electrónico
   - Teléfono
   - Dirección
   - Fecha de nacimiento
   - Género
3. El panel debe tener las opciones “Editar” y “Salir”.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia ilustra el flujo de interacción entre el Super Administrador y el sistema cuando se solicita la información detallada de un usuario. Incluye la solicitud desde la interfaz, el procesamiento por parte del backend, la consulta a la base de datos, la respuesta con los datos del usuario y su posterior visualización en la interfaz.

```mermaid
sequenceDiagram
participant SuperAdmin as Super Administrador
participant Frontend
participant Api_gateway
participant Backend
participant rutaUsuarios
participant controladorUsuarios
participant repositorioUsuarios
participant Database


SuperAdmin -->> Frontend: Hace clic en un usuario de la lista
Frontend -->> Api_gateway: GET /api/usuarios/:id con JWT
Api_gateway -->> Backend: Reenvía GET /api/usuarios/:id con JWT
Backend -->> rutaUsuarios: Llama a la ruta /api/usuarios/:id
rutaUsuarios -->> rutaUsuarios: Valida API key

alt API key inválida
    rutaUsuarios -->> Backend: Retorna JSON {"message": "API key inválida"}, status 400
    Backend -->> Api_gateway: Retorna JSON {"message": "API key inválida"}, status 400
    Api_gateway -->> Frontend: Retorna JSON {"message": "Error de autenticación"}, status 400
    Frontend -->> SuperAdmin: Muestra mensaje de error: "Acceso no autorizado"
else API key válida
    rutaUsuarios -->> rutaUsuarios: Valida JWT

    alt JWT inválido o expirado
        rutaUsuarios -->> Backend: Retorna JSON {"message": "No autorizado"}, status 401
        Backend -->> Api_gateway: Retorna JSON {"message": "No autorizado"}, status 401
        Api_gateway -->> Frontend: Retorna JSON {"message": "No autorizado"}, status 401
        Frontend -->> SuperAdmin: Muestra mensaje de error "No autorizado"
    else JWT válido
        rutaUsuarios -->> controladorUsuarios: Solicita usuario por ID
        controladorUsuarios -->> repositorioUsuarios: Busca usuario por ID
        repositorioUsuarios -->> Database: Consulta por ID

        alt Error al obtener los datos
            Database -->> repositorioUsuarios: Retorna error (RequestTimeout, ResourceNotFoundException)
            repositorioUsuarios -->> controladorUsuarios: Retorna error
            controladorUsuarios -->> rutaUsuarios: Retorna error
            rutaUsuarios -->> Backend: Retorna 500 {"message": "Error al obtener datos"}
            Backend -->> Api_gateway: Retorna 500 {"message": "Error al obtener datos"}
            Api_gateway -->> Frontend: Retorna 500 {"message": "Error al obtener datos"}
            Frontend -->> SuperAdmin: Muestra mensaje "Error al cargar la información del usuario."
        else Usuario encontrado
            Database -->> repositorioUsuarios: Retorna datos del usuario
            repositorioUsuarios -->> controladorUsuarios: Retorna datos del usuario
            controladorUsuarios -->> rutaUsuarios: Retorna datos del usuario
            rutaUsuarios -->> Backend: JSON con la información del usuario, status 200
            Backend -->> Api_gateway: JSON con la información del usuario, status 200
            Api_gateway -->> Frontend: JSON con la información del usuario, status 200
            Frontend -->> SuperAdmin: Muestra panel con información del usuario
        end
    end
end
```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz que permite al Super Administrador consultar la información detallada de un usuario. Al seleccionar un usuario en la tabla, se muestra un panel con sus datos completos, incluyendo nombre, cliente, rol, estado, correo electrónico, teléfono, dirección, fecha de nacimiento y género.

> ![Interfaz de leer usuario](imagenes/RF3LeeUsuario.png)

## **Pruebas Unitarias**

_<u>[Enlace a pruebas RF03 Lee Usuario](https://docs.google.com/spreadsheets/d/1NLGwGrGA5PVOEzLaqxa8Ts1D_Ng3QzzqNKWJYUzxD-M/edit?usp=sharing)</u>_

### Historial de cambios

| **Tipo de Versión** | **Descripción**                                  | **Fecha** | **Colaborador**            |
| ------------------- | ------------------------------------------------ | --------- | -------------------------- |
| **1.0**             | Actualización de la documentación del requisito. | 07/4/2025 | Paola María Garrido Montes |
