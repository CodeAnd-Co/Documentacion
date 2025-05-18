---
title: Proceso de codificación de TracTech
sidebar_position: 1
---

# Proceso de codificación de TracTech

---

## Objetivo

- Establecer un flujo para el desarrollo de código de alta calidad.
- Identificar y corregir defectos en etapas tempranas del desarrollo.
- Asegurar la verificación efectiva de código.

---

## Entradas

1. Requerimientos o historias de usuario asignadas en READY.
2. [Estándar de codificación](/docs/standards/general).
3. [Checklist de verificación de código](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa).
4. Checklist individual de código (con los defectos propios más comunes).

---

## Proceso

### Para programar backend desacoplado:

**Preparación:**
- Ir a develop y hacer git pull.
- Hacer npm i.
- Crear la rama deacuerdo al requisito siguiendo la estrategia de ramas.

**Codificación:**
- Verificas que en app.js esté definida la ruta del módulo correspondiente al requisito.
    - Si no está:
        - Verificar que exista la carpeta del módulo correspondiente al requisito.
        - Verificar que dentro de la carpeta del módulo existan las carpetas 'controladores', 'data', y 'rutas'.
            - Verificar que dentro de la carpeta 'data' exista la carpeta 'repositorios'.
        - Verificar que exista el archivo de índice de las rutas del módulo.
- Crear el archivo de ruta individual del requisito, añadiendo los middlewares necesarios.
- Agregar el archivo de ruta individual al índice de rutas del módulo.
- Crear el archivo de controlador del requisito dentro de la carpeta de controladores.
- Agregar el archivo de controlador del requisito al archivo de ruta individual del requisito.
- Crear el archivo de repositorio del requisito dentro de la carpeta data>repositorios.
- Agregar el archivo de repositorio del requisito al controlador del requisito.


### Programar backend local:

**Preparación:**
- Ir a develop y hacer git pull.
- Hacer npm i.
- Crear la rama deacuerdo al requisito siguiendo la estrategia de ramas.

**Codificación:**
- Si necesitas comunicarte con el backend desacoplado:
    - Asegurate de tener tu .env con la URL base ya sea con la IP del servidor o localhost para local
    - Checar en la carpeta domain si existe la carpeta API de tu modulo:
        - En esa carpeta debes crear tu moduloAPI.js donde vas a poner tus funciones con las llamadas al servidor
        - Cuando tengas tu controlador conectarlo a la ruta de la peticion del servidor para que exista comunicacion
 -  Ya con la conexion al backend desacoplado puedes codificar el backend local:
    - Ingresar a src>backend>casosUso
    - Verificar si existe la carpeta del módulo correspondiente al requisito.
    - Crear el archivo que tiene toda la lógica de negocio y que funciona como controlador del requisito.
- Programar frontend:
    - Ir ar src>framework>js y crear el archivo con el código de js que correra directamente en el frontEnd y manejará el DOM (Document Object Model) o body.
    - Conectar el controlador a la vista del usuario a través de este archivo.
    - Englobar las funciones del DOM en una función de inicializar módulo para que al cargar tu módulo se pueda interactuar con el módulo.

### Revisar el código

- Usar tu checklist individual para verificar todo el código.
- Usar la checklist del equipo para verificar todo el código.

### Programar pruebas
- Ejecutar prueba manual registrando entradas y salidas.
- Ubicarte en las carpetas de src>pruebas y pruebas en el Front y Backend respectivamente.
- Codificar la prueba Jest validando que los resultados sean iguales a la prueba manual.

---

## Acuerdos de trabajo:
- Agarramos las tareas que nadie quiere, hacemos 2 tareas malas por una tarea buena.
- No nos paramos hasta terminar el trabajo actual.
- Nos damos recordatorios de seguir trabajando cuando notamos que alguien no trabaja.
- No interrumpimos a las personas que están trabajando en el CMMI.
- Dejamos el ego de lado al pedir ayuda, nos acercamos a miembros de otros equipos o departamentos.


## Visión del equipo:
- Ser un equipo disciplinado, que aprenda de los errores, y que retrabaje lo mínimo posible para su proceso de aprendizaje.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Creación del proceso | 15/05/2025 | Diego Fuentes, Ian Julian Estrada, Daniel Queijeiro, Juan Pablo Chávez. |