---
title: "RF1: Usuario consulta página de inicio de sesión."  
sidebar_position: 2
---

# RF1: Usuario consulta página de inicio de sesión.

**Última actualización:** 07 de marzo de 2025

### Historia de Usuario

Yo como usuario quiero consultar la pagina de inicio de sesion antes de estar verificado para saber a que sistema voy a ingresar. 

  **Criterios de Aceptación:**
  - El sistema debe permitir a cualquier usuario consultar la página de inicio de sesión.
  - La página de inicio de sesión debe de mostrar el nombre del sistema y los campos necesarios para llenar con tus credenciales
---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario interactúa con el sistema para visualizar la página de incio de sesión, detallando los pasos de solicitud de datos, validación y confirmación.

---

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede consultar la página de inicio de sesión. 

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF1-01|Cargar la página de inicio de sesión. |La página se muestra con el formulario para el inicio de sesión|
|PU-RF1-02|Probar acceso sin autenticación.|El usuario puede visualizar la página de inicio de sesión sin estar iniciado dentro de la sesión|

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/1](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/1)
