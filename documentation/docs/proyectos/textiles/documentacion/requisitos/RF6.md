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
participant Usuario
participant Frontend
participant Api_gateway
participant Backend
participant rutaCrearRol
participant controladorCrearRol
participant repositorioCrearRol
participant RDS

Usuario -->> Frontend: Ingresa nombre, descripción y selecciona permisos
Frontend -->> Api_gateway: POST /api/roles/crear-rol
Api_gateway -->> Backend: Reenvía la solicitud
Backend -->> rutaCrearRol: Llama a la ruta /api/roles/crear-rol

rutaCrearRol -->> rutaCrearRol: Ejecuta validarYSanitizar()
rutaCrearRol -->> rutaCrearRol: Ejecuta revisarApiKey()
rutaCrearRol -->> rutaCrearRol: Ejecuta autorizarToken()
rutaCrearRol -->> rutaCrearRol: Ejecuta limitePeticionesDiarias()

alt API key inválida o token inválido
    rutaCrearRol -->> Backend: Retorna JSON 401 "No autorizado"
    Backend -->> Api_gateway: Retorna JSON 401 "No autorizado"
    Api_gateway -->> Frontend: Retorna JSON 401 "No autorizado"
    Frontend -->> Usuario: Muestra mensaje de error
else Validaciones exitosas
    rutaCrearRol -->> controladorCrearRol: Llama a crearRol()

    controladorCrearRol -->> controladorCrearRol: Valida nombre y permisos
    alt Datos faltantes
        controladorCrearRol -->> rutaCrearRol: Retorna JSON 400 "Datos incompletos"
        rutaCrearRol -->> Backend: Retorna error de validación
        Backend -->> Api_gateway: Retorna error
        Api_gateway -->> Frontend: Error en formulario
        Frontend -->> Usuario: Muestra mensaje de validación
    else Datos válidos
        controladorCrearRol -->> repositorioCrearRol: verificarNombreRol(nombre)
        repositorioCrearRol -->> RDS: SELECT idRol FROM rol WHERE nombre = ?
        RDS -->> repositorioCrearRol: Resultado
        repositorioCrearRol -->> controladorCrearRol: ¿Existe?

        alt Rol ya existe
            controladorCrearRol -->> rutaCrearRol: Retorna JSON 400 "Rol existente"
            rutaCrearRol -->> Backend: Error por nombre repetido
            Backend -->> Api_gateway: Error 400
            Api_gateway -->> Frontend: Error 400
            Frontend -->> Usuario: Muestra mensaje "Ya existe un rol con ese nombre"
        else Nombre disponible
            loop Por cada permiso
                controladorCrearRol -->> repositorioCrearRol: verificarPermiso(id)
                repositorioCrearRol -->> RDS: SELECT idPermiso FROM permiso WHERE idPermiso = ?
                RDS -->> repositorioCrearRol: Permiso válido
                repositorioCrearRol -->> controladorCrearRol: Permiso OK
            end

            alt Algún permiso inválido
                controladorCrearRol -->> rutaCrearRol: Retorna JSON 400 "Permiso inválido"
                rutaCrearRol -->> Backend: Error por permiso inválido
                Backend -->> Api_gateway: Error 400
                Api_gateway -->> Frontend: Error 400
                Frontend -->> Usuario: Muestra error
            else Todos los permisos válidos
                controladorCrearRol -->> repositorioCrearRol: crearRol(nombre, descripcion)
                repositorioCrearRol -->> RDS: INSERT INTO rol (...)
                RDS -->> repositorioCrearRol: Devuelve insertId

                controladorCrearRol -->> repositorioCrearRol: asociarPermisosARol(insertId, permisos)
                loop Inserta permisos
                    repositorioCrearRol -->> RDS: INSERT INTO rol_permiso (...)
                    RDS -->> repositorioCrearRol: OK
                end

                repositorioCrearRol -->> controladorCrearRol: Rol creado exitosamente
                controladorCrearRol -->> rutaCrearRol: Retorna JSON 201 "Rol creado exitosamente"
                rutaCrearRol -->> Backend: Rol creado con éxito
                Backend -->> Api_gateway: Éxito 201
                Api_gateway -->> Frontend: Éxito 201
                Frontend -->> Usuario: Muestra mensaje de éxito
            end
        end
    end
end

```

---

## **Mockup**

> _Descripción_: El mockup muestra la interfaz donde el Super Administrador puede ingresar el nombre del rol y seleccionar los permisos antes de crearlo.

![alt text](imagenes/RF6.png)

## **Pruebas Unitarias**

_<u>[Enlace a pruebas RF6 Crear Rol](https://docs.google.com/spreadsheets/d/1NLGwGrGA5PVOEzLaqxa8Ts1D_Ng3QzzqNKWJYUzxD-M/edit?gid=1715637979#gid=1715637979)</u>_

## **Código**

_<u>[Pull Request Front-End](https://github.com/CodeAnd-Co/Frontend-Text-Lines/pull/43)</u>_

_<u>[Pull Request Back-End](https://github.com/CodeAnd-Co/Backend-textiles/pull/44)</u>_

---

### Historial de cambios

| **Tipo de Versión** | **Descripción**             | **Fecha**  | **Colaborador**          |
| ------------------- | --------------------------- | ---------- | ------------------------ |
| **1.0**             | Se actualizó documentación. | 22/05/2025 | Arturo Sánchez Rodríguez |
| **1.1**             | Agregar links de PR         | 26/05/2025 | Max Toscano              |
