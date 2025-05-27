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
    - Asegurate de tener tu constantes.js con la URL base ya sea con la IP del servidor (staging) o localhost para local
    - Checar en la carpeta domain si existe la carpeta API de tu modulo:
        - En esa carpeta debes crear tu moduloAPI.js donde vas a poner tus funciones con las llamadas al servidor
        - Cuando tengas tu controlador conectarlo a la ruta de la peticion del servidor para que exista comunicacion
 -  Ya con la conexion al backend desacoplado puedes codificar el backend local:
    - Ingresar a src>backend>casosUso
    - Verificar si existe la carpeta del módulo correspondiente al requisito.
    - Crear el archivo que tiene toda la lógica de negocio y que funciona como controlador del requisito.

### Programar frontend:

**Preparación:**
- Ir a develop y hacer git pull.
- Hacer npm i.
- Crear la rama deacuerdo al requisito siguiendo la estrategia de ramas.

**Notas importantes**
- Todas las rutas que se usen dentro de HTML son absolutas en base a /harvester-app.
    - Esto signfica que si quieres importar css o un script dentro del HTML debes usar el código `<%= rutaBase %>`
    - También deberás usar esta ruta absoluta en las importaciones dentro de cualquier script.
    - Esto no aplica para código EJS aunque esté en el mismo archivo, en ese si se pueden usar rutas relativas.

**Codificación:**
    - Ir a src>framework>vistas>paginas y crear la carpeta correspondiente a tu módulo si no existe.
    - Crear el archivo de EJS donde vas a crear la vista.
        - Revisar que componentes se necesitan para crear la vista y revisar si ya existen. Si necesitas un componente que aún no existe, avisar en el grupo para confirmar y luego programarlo.
        - Añadir el encabezado.ejs y piePagina.ejs que estan dentro de src>framework>vistas>includes
        - Hacer el EJS usando variables para cargar cosas como las rutas.
    - Ir ar src>framework>utils>scripts y crear el archivo con el código de js que correra directamente en el frontEnd y manejará el DOM (Document Object Model) o body. No debes incluir lógica más allá de leer, escribir, y asignar funciones a los valores de los elementos de HTML.
        - Si en tu script quieres implementar la carga de otro módulo o vista, usar la función de `ipcRenderer.invoke('precargarEJS')`.
        - Añadir `const { ipcRenderer } = require('electron')`.
            - Si quieres ver un ejemplo puedes consultar barraLateral.js
    - Cualquier lógica que no interactúe directamente con elementos HTML debe ir src>backend (consultar proceso para programar el Backend local)
    - Conectar el controlador a la vista del usuario a través de este archivo.

### Revisar el código

- Usar tu checklist individual para verificar todo el código.
- Usar la checklist del equipo para verificar todo el código.
- Actualizar las checklists en caso de ser necesario.

### Programar pruebas
- Ejecutar prueba manual registrando entradas y salidas.
- Ubicarte en las carpetas de src>pruebas y pruebas en el Front y Backend respectivamente.
- Codificar la prueba Jest validando que los resultados sean iguales a la prueba manual.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Creación del proceso | 15/05/2025 | Diego Fuentes, Ian Julian Estrada, Daniel Queijeiro, Juan Pablo Chávez. |
| **2.0** | Ajustar proceso con el refactor | 22/05/2025 | Daniel Queijeiro, Diego Fuentes |
| **2.1** | Añadir pasos para actualizar checklists | 26/05/2025 | Diego Fuentes |