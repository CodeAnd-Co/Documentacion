---
title: "RF5: Super Administrador Elimina Usuario"
sidebar_position: 7
---

# RF5: Super Administrador Elimina Usuario

**Última actualización:** 24 de abril de 2025

## Historia de Usuario

Como administrador, quiero poder eliminar a un usuario que ya no requiera acceso al sistema para mantener una base de datos precisa y evitar accesos innecesarios.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder eliminar un usuario existente.
2. Antes de eliminar, se debe mostrar una ventana de confirmación para evitar eliminaciones accidentales.
3. Si el usuario es eliminado con éxito, el sistema debe actualizar la lista de usuarios y mostrar un mensaje de éxito.
4. Si ocurre un error en la eliminación, se debe mostrar un mensaje de error indicando el motivo.
5. Si el usuario a eliminar posee el rol de Super Administrador:
   - Se debe solicitar un paso de verificación adicional mediante código 2FA (Google Authenticator), además de la contraseña.
   - Solo los Super Administradores habilitados para acciones críticas podrán realizar esta operación.
6. Si el código 2FA o la contraseña son incorrectos, la eliminación no se ejecuta y se muestra un mensaje de error.
7. La eliminación debe garantizar autenticación por token válida y permisos correspondientes.
8. No se podrá eliminar el usuario que está en uso.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia ilustra los pasos que sigue el sistema cuando el Super Administrador elimina un usuario. Incluye la confirmación, la eliminación en la base de datos y la actualización de la lista de usuarios.

```mermaid
sequenceDiagram
participant SuperAdmin
participant Frontend
participant Api_gateway
participant Backend
participant rutaUsuario
participant controladorUsuario
participant repositorioUsuario
participant Verificacion2FA
participant RDS

SuperAdmin -->> Frontend: Selecciona uno o más usuarios (checkbox)

Frontend -->> Frontend: Verifica si hay usuarios seleccionados
alt No hay usuarios seleccionados
    Frontend -->> SuperAdmin: Muestra mensaje "Selecciona al menos un usuario"
else Hay usuarios seleccionados
    SuperAdmin -->> Frontend: Presiona botón "Eliminar usuario"
    Frontend -->> SuperAdmin: Muestra modal de confirmación
    SuperAdmin -->> Frontend: Confirma eliminación

    alt Se detecta usuario con rol SuperAdministrador
        Frontend -->> SuperAdmin: Solicita contraseña + código 2FA
        SuperAdmin -->> Frontend: Ingresa credenciales y código
        Frontend -->> Api_gateway: POST /api/seguridad/verificar-2fa (idUsuario, código, contraseña)
        Api_gateway -->> Backend: Verifica credenciales y código

        Backend -->> Verificacion2FA: Valida contraseña y código 2FA
        alt Verificación fallida
            Verificacion2FA -->> Backend: Error 403
            Backend -->> Api_gateway: Error 403
            Api_gateway -->> Frontend: Error 403
            Frontend -->> SuperAdmin: Muestra mensaje "Error en autenticación 2FA"
        else Verificación exitosa
            Verificacion2FA -->> Backend: OK
            Backend -->> Api_gateway: OK
            Api_gateway -->> Frontend: Continúa con eliminación
        end
    end

    Frontend -->> Api_gateway: DELETE /api/usuarios (body: lista_usuarios[]) + JWT
    Api_gateway -->> Backend: Solicitud de eliminación
    Backend -->> rutaUsuario: DELETE /api/usuarios
    rutaUsuario -->> rutaUsuario: Verifica API key y JWT

    alt API Key/JWT inválidas
        rutaUsuario -->> Backend: Retorna 401
        Backend -->> Api_gateway: Retorna 401
        Api_gateway -->> Frontend: Retorna 401
        Frontend -->> SuperAdmin: Muestra "Error: acceso no autorizado"
    else Autenticación exitosa
        rutaUsuario -->> controladorUsuario: Llama controlador de eliminación
        controladorUsuario -->> repositorioUsuario: Elimina usuario(s)
        repositorioUsuario -->> RDS: Ejecuta eliminación en DB
        RDS -->> repositorioUsuario: Confirma eliminación
        repositorioUsuario -->> controladorUsuario: OK
        controladorUsuario -->> rutaUsuario: Status 204
        rutaUsuario -->> Backend: Status 204
        Backend -->> Api_gateway: Status 204
        Api_gateway -->> Frontend: Status 204
        Frontend -->> SuperAdmin: Muestra "Usuarios eliminados con éxito"
    end
end
```

---

## **Mockup**

> _Descripción_: El mockup muestra la interfaz donde el **Super Administrador** puede eliminar un usuario, con una ventana de confirmación para evitar acciones accidentales.

![Interfaz para eliminar a un usuario](imagenes/RF5EliminaUsuario.png)

## **Pruebas Unitarias**

_<u>[Enlace a pruebas RF5 Elimina Usuario](https://docs.google.com/spreadsheets/d/1NLGwGrGA5PVOEzLaqxa8Ts1D_Ng3QzzqNKWJYUzxD-M/edit?usp=sharing)</u>_

## **Código**

_<u>[Pull Request Front-End](https://github.com/CodeAnd-Co/Frontend-Text-Lines/pull/40)</u>_

_<u>[Pull Request Back-End](https://github.com/CodeAnd-Co/Backend-textiles/pull/42)</u>_

---

### Historial de cambios

| **Tipo de Versión** | **Descripción**                                 | **Fecha**  | **Colaborador**               |
| ------------------- | ----------------------------------------------- | ---------- | ----------------------------- |
| **1.0**             | Creación del documento                          | 06/3/2025  | Angélica Rios Cuentas         |
| **1.1**             | Actualización de la documentación del requisito | 08/4/2025  | Carlos Iván Fonseca Mondragón |
| **1.2**             | Actualización al diagrama de secuencia          | 24/4/2025  | Carlos Iván Fonseca Mondragón |
| **1.3**             | Actualización de la documentación del requisito | 24/4/2025  | Carlos Iván Fonseca Mondragón |
| **1.4**             | Actualización de diagrama                       | 06/05/2025 | Hiram Mendoza                 |
| **1.5**             | Actualizar interfaz                             | 22/5/2025  | Diego Antonio García Padilla  |
| **1.6**             | Agregar links de PR                             | 26/05/2025 | Max Toscano                   |
