---
title: "RF9: Super Administrador Actualiza Rol"
sidebar_position: 11
---

# RF9: Super Administrador Actualiza Rol

**Última actualización:** 06 de marzo de 2025

---

## Historia de Usuario

Como administrador, quiero poder modificar los permisos y el nombre de un rol para mantener el sistema actualizado y seguro.

## **Criterios de Aceptación:**

1. El Super Administrador debe poder modificar la información de un rol existente.
2. Se debe permitir cambiar el nombre y los permisos asignados.
3. El sistema debe validar que el nuevo nombre no esté duplicado.
4. Si la actualización es exitosa, los cambios deben reflejarse de inmediato en la vista con la información del rol.
5. Si hay un error, el sistema debe mostrar un mensaje indicando el problema.

---

## **Diagrama de Secuencia**

> _Descripción_: El diagrama de secuencia muestra el proceso mediante el cual el Super Administrador actualiza un rol, validando los datos y aplicando los cambios.

```mermaid

sequenceDiagram
    actor Usuario
    
    participant frontend as Frontend
    participant api_gateway as API-Gateway
    participant backend as Backend
    participant ruta as Ruta
    participant controlador as Controlador
    participant repositorio as Repositorio
    participant rds as RDS
    
    
    Usuario -->> frontend: Ingresa el nuevo nombre del rol
    Usuario -->> frontend: Ingresa los nuevos permisos para el, ya se agregar o eliminar los roles
    
    frontend -->> api_gateway: PUT '/api/roles/actualizar'
    
    api_gateway -->> backend:  PUT '/api/roles/actualizar'
    
    backend -->> ruta:  PUT '/api/roles/actualizar'
    
    ruta -->> controlador: actualizarProductos(nuevosDatos)
    
    controlador -->> controlador: Validar que los nuevos datos se envio correctamente
    
    alt Formato de datos invalidos
        controlador -->> backend: Mensaje formato de datos invalido
        backend -->> api_gateway: Mensaje formato de datos invalido
        api_gateway -->> frontend: Mensaje formato de datos invalido
        frontend -->> Usuario: Alerta con mensaje proveniente del backend
    end
    
    controlador -->> controlador: Validar que hay un cliente seleccionado
    
    alt Cliente no seleccionado
        controlador -->> backend: Mensaje formato de cliente no seleccionado
        backend -->> api_gateway: Mensaje formato de cliente no seleccionado
        api_gateway -->> frontend: Mensaje formato de cliente no seleccionado
        frontend -->> Usuario: Alerta con mensaje proveniente del backend
    end
    
    controlador -->> repositorio: Enviar datos al repositorio
    
    repositorio -->> repositorio: Validar que los datos se esten enviando correctamente  

```

---

## **Mockup**

> _Descripción_: El mockup representa la interfaz donde el Super Administrador puede modificar la información de un rol y guardar los cambios.
