---
title: "RF5: Super Administrador Elimina Usuario"
sidebar_position: 7
---

# RF5: Super Administrador Elimina Usuario

---

## Historia de Usuario

Como administrador, quiero poder eliminar a un usuario que ya no requiera acceso al sistema para mantener una base de datos precisa y evitar accesos innecesarios.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder acceder a la opción **"Eliminar Usuario"** dentro del panel de información de un usuario.
2. Antes de eliminar, se debe mostrar una ventana de confirmación para evitar eliminaciones accidentales.
3. Si el usuario es eliminado con éxito, el sistema debe actualizar la lista de usuarios y mostrar un mensaje de confirmación.
4. Si ocurre un error en la eliminación, se debe mostrar un mensaje de error indicando el motivo.

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
participant RDS

    SuperAdmin -->> Frontend: Selecciona un usuario
    Frontend -->> Frontend: Mostrar el menú para el usuario
    SuperAdmin -->> Frontend: Selecciona "Eliminar Usuario"
    Frontend -->> Api_gateway: Envía petición DELETE /api/usuarios/{id} con JWT
    Api_gateway -->> Backend: Envía solicitud de eliminación
    Backend -->> rutaUsuario: Llama a la ruta DELETE /api/usuarios/{id}
    rutaUsuario -->> rutaUsuario: Verifica la API key y JWT
    alt API Key inválida
        rutaUsuario -->> Backend: Retorna JSON {"mensaje": "No autorizado"} con status 401
        Backend -->> Api_gateway: Retorna JSON {"mensaje": "No autorizado"} con status 401
        Api_gateway -->> Frontend: Retorna JSON {"mensaje": "No autorizado"} con status 401
        Frontend -->> SuperAdmin: Mensaje "Error, acceso no autorizado"
    else API Key validada
        rutaUsuario -->> controladorUsuario: Llama al controlador de eliminación
        controladorUsuario -->> repositorioUsuario: Solicita la eliminación del usuario
        repositorioUsuario -->> RDS: Quita al usuario de la base de datos
        RDS -->> repositorioUsuario: Confirma eliminación del usuario
        repositorioUsuario -->> controladorUsuario: Retorna éxito
        controladorUsuario -->> rutaUsuario: Retorna status 204 sin cuerpo
        rutaUsuario -->> Backend: Retorna status 204 sin cuerpo
        Backend -->> Api_gateway: Retorna status 204 sin cuerpo
        Api_gateway -->> Frontend: Retorna status 204 sin cuerpo
        Frontend -->> SuperAdmin: Mensaje de éxito y retorno a la vista de usuarios
    end
```

---

## **Mockup**

> _Descripción_: El mockup muestra la interfaz donde el **Super Administrador** puede eliminar un usuario, con una ventana de confirmación para evitar acciones accidentales.

![Interfaz para eliminar a un usuario](<imagenes/US05 Eliminar usuarios.png>)

## **Pruebas Unitarias**

En caso de que alguna de las pruebas unitarias no sea aprobada, se deberá realizar una nueva iteración del proceso de pruebas.
Este proceso continuará de forma iterativa hasta que todas las pruebas sean aprobadas satisfactoriamente, garantizando así la estabilidad y el cumplimiento de los requisitos funcionales definidos en la historia de usuario.

| ID Prueba | Descripción                               | Precondiciones                                                                                                                | Valores de entrada                                                                        | Resultado esperado                                                                                                          | Resultado observado | Aprobado (sí/no) |
| --------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------- |
| EU001     | Entrar a la lista de usuarios             | - Super administrador autenticado                                                                                             | - Click en la opción de "Usuarios" en el menú                                             | Pantalla de lista de usuarios                                                                                               | Pendiente           | Pendiente        |
| EU002     | Seleccionar usuarios y clic en "Eliminar" | - Super administrador autenticado <br /> - Usuario existente en la lista de usuarios                                          | - Click en la casilla de los usuarios a eliminar <br /> - Click en el botón de "Eliminar" | Pantalla para confirmar eliminación, con el nombre o nombres de los usuarios seleccionados                                  | Pendiente           | Pendiente        |
| EU003     | Eliminar usuario existente                | - Super administrador autenticado <br /> - Usuario existente en la base de datos <br /> - Acceso de super admin en el sistema | ID del usuario a eliminar (a través de un click en el botón de eliminar usuario)          | - Mensaje de éxito y actualización de la lista de usuarios <br /> - Usuarios eliminados no aparecen en la lista actualizada | Pendiente           | Pendiente        |

### Historial de cambios

| **Tipo de Versión** | **Descripción**                                 | **Fecha**  | **Colaborador**               |
| ------------------- | ----------------------------------------------- | ---------- | ----------------------------- |
| **1.0**             | Creación del documento                          | 06/03/2025 | Angélica Rios Cuentas         |
| **1.1**             | Actualización de la documentación del requisito | 08/04/2025 | Carlos Iván Fonseca Mondragón |
