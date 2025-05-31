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

| Fase | Descripción | Responsable | 
|------|-------------|-------------|
| **Verificar el análisis** | Llenar la [checklist de análisis](https://docs.google.com/document/d/1dFEBxS_WGWtgCAAW1Sp57Vlgj06-X-od6HbNy2XnZKk/edit?tab=t.0#heading=h.fhau7kjl46pa), si hay un punto faltante llevar a cabo las acciones correctivas para asegurar que el análisis es correcto. Esta checklist debe estar llena en la carpeta 'Checklists Tractech'.| Codificador del requisito |
| **Seguir el proceso de RTM** | Abrir y seguir el proceso de RTM. | Codificador del requisito |
| **Verificación del diseño** | Abrir el requisito a programar en el docusaurus y verificar su diseño. | Codificador del requisito |
| | Rehacer el diagrama de secuencia a papel para verificar qué tan útil es su diseño actual. | Codificador del requisito |
| | Llenar la [checklist de diseño](https://docs.google.com/document/d/17iPu9h6KR80SHw6kBhKG3mf926_mbkIipx1Aq1sfD2A/edit?tab=t.0#heading=h.fhau7kjl46pa) y crear una copia en la carpeta de 'Checklists TracTech'. | Codificador del requisito | 
| **Seguir el proceso de RTM** | Abrir y seguir el proceso de RTM. | Codificador del requisito |
| **Preparación para la codificación** | Mantén abierto el diagrama de secuencia del requisito para basarte de él a la hora de programar el requerimiento. | Codificador del requisito |
| **Inicio de codificación** | Asegúrate de estar en la rama de develop, en el repositorio pertiente ejecutando: ```git branch```, si no estás en develop: ```git checkout develop```, después ejecuta: ```git pull origin``` y ```npm i```, finalmente ejecuta:  ```git checkout -b <NombreDeLaRama>```, recuerda seguir la estrategia de ramas. | Codificador del requisito |
| **Selección de pareja** | En el único caso de que no exista persona con la que colaborar, se puede iniciar la codificación solo. De lo contrario, es obligatorio hacer pair programming para el desarrollo de historias de usuario. | Codificador del requisito|
| **Codificación del backend desacoplado.** | Verifica que en ```app.js``` esté definida la ruta del módulo de tu requisito. | Codificador del requisito |
| Si no está la ruta: | **1.** Verifica que la carpeta del módulo correspondiente exista.  | Codificador del requisito |
| Si no está la ruta: | **2.** Verifica que dentro de la carpeta del módulo existan las carpetas (controladores, data y rutas).| Codificador del requisito |
| | **3.** Asegúrate de que dentro de la carpeta 'data' exista la carpeta 'repositorios'. | Codificador del requisito |
| | **4.** Verifica que exista el archivo de índice y el de la ruta de tu requisito dentro de la carpeta 'rutas'. | Codificador del requisito. Además de incluir en el archivo de índice la dirección al archivo de ruta del requisito  |
| | En cualquiera de los casos anteriores, crea el archivo teniendo en cuenta: el patrón de diseño, el estándar para nombrar los archivos y la práctica de SOLID. | Codificador del requisito | 
| **Codificación** |  En el archivo de rutas de tu requerimiento importa los middlewares que requieras. | Codificador del requisito
| | Crear el controlador del requerimiento dentro de la carpeta de controladores y agregarlo al archivo de rutas de tu requerimiento. | Codificador del requisito|
| | Crear el archivo repositorio en la carpeta con el mismo nombre del módulo pertinente. Asegúrate de hacer todas las validaciones congruentes en este archivo. | Codificador del requisito |
| | Crear el archivo modelo del requerimiento, en el que solo debe incluirse la consulta a la base de datos. | Codificador del requisito|
| **Seguir el proceso de RTM** | Abrir y seguir el proceso de RTM. | Codificador del requisito |
| **Verificaciones y PR** | Revisa el código con la checklist  de codificación propia. | Codificador del requisito|
| | Revisa el código con la checklist de codificación del equipo. | Codificador del requisito|
| | Abre el PR asegurándote de que la rama objetivo sea develop. | Codificador del requisito|
| | Notifica a alguien más del equipo para que diseñe y ejecute las pruebas de tu requerimiento. | Codificador del requisito |
| | Si las pruebas arrojan correcciones, corrígelas y haz push a la rama. | Codificador del requisito |
|**Revisa la definición de DONE** | Repasa la definición de DONE y verifica que se cumpla por completo, si cumple con la definición sigue el proceso de RTM. | Codificador del requisito | 
| **Preparación del ambiente** | Repasa la fase de '**Inicio de codificación**'. | Codificador del requisito |
| **Codificación del backend local** | Si necesitas comunicarte con el backend desacoplado debes: | Codificador del requisito|
|**Comunicación** | Tener el archivo constantes.js actualizado en la carpeta 'scripts' en su primer nivel. | Codificador del requisito |
| | Tener en la carpeta 'domain' una carpeta 'API' de tu módulo. | Codificador del requisito | 
| | En esa carpeta 'API' debes crear tu archivo moduloAPI.js en donde debes agregar las funciones que incorporen las llamadas al servidor. | Codificador del requisito |
| | Conecta el controlador con la ruta de la petición del servidor. | Codificador del requisito |
| **Casos de uso** | Ingresa a la carpeta 'casosUso' y verifica si la carpeta del módulo existe, crea el archivo que contendrá toda la lógica de negocio que simula al controlador del backend, pero en la aplicación local. |  Codificador del requisito |
| **Preparación del ambiente** | Repasa la fase de '**Inicio de codificación**'. | Codificador del requisito |
| **Codificación del front-end** | Ir a la carpeta de "paginas"  que se encuentra en framework > vistas. Crea la carpeta de tu módulo ahí. | Codificador del requisito | 
| | Dentro de la carpeta, crea el archivo EJS donde crearás la vista. | Codificador del requisito |
| | Identifica los componentes que debes utilizar para desarrollar la vista y checar su existencia. Si necesitas un componente que no existe aún, avisa en el grupo para confirmar que no existe y pasar a desarrolarlo. | Codificador del requisito | 
| | Dentro del archivo EJS añade el encabezado.ejs y piePagina.ejs que estan ubicados en framework > vistas > includes. Crea el EJS usando variables para cargar cosas como las rutas. | Codificador del requisito | 
| | Abre la carpeta scripts en framework > utils, y crear el archivo con el código de js que correrá en el frontEnd y manejará el DOM o body. No debes incluir lógica más allá de lectura, escritura y asignación de funciones y valores de los elementos HTML. | Codificador del requisito |
| | Si tienes lógica que NO interactúa con elementos HTML, debes agregarlo en el backend local (Consulta la fase de Codificación de backend local, específicamente el archivo de casoUso). | Codificador del requisito |
| | Conecta el controlador a la vista del usuario a tráves del archivo de casoUso.| Codificador del requisito|
| **Seguir el proceso de RTM** | Abrir y seguir el proceso de RTM. | Codificador del requisito |
| **Verificaciones y PR** | Revisa el código con la checklist  de codificación propia. | Codificador del requisito|
| | Revisa el código con la checklist de codificación del equipo. | Codificador del requisito|
| | Abre el PR asegurándote de que la rama objetivo sea develop. | Codificador del requisito|
| | Notifica a alguien más del equipo para que diseñe y ejecute las pruebas de tu requerimiento. | Codificador del requisito |
| | Si las pruebas arrojan correcciones, corrígelas y haz push a la rama. | Codificador del requisito |
|**Revisa la definición de DONE** | Repasa la definición de DONE y verifica que se cumpla por completo, si cumple con la definición sigue el proceso de RTM. | Codificador del requisito |

### Actualización de Checklists
- La **checklist de codificación** se actualizará **cada lunes**, incorporando los defectos más frecuentemente registrados en el Defect Log.
- Al **cierre de cada iteración**, se actualizarán las **checklists de análisis y diseño** con base en los defectos detectados durante el ciclo.
- El objetivo de estas actualizaciones periódicas es **abordar de manera directa las áreas de oportunidad** del equipo y fomentar la mejora continua.


### Notas
- Todas las rutas que se usen dentro de HTML son absolutas en base a /harvester-app.
    - Esto signfica que si quieres importar css o un script dentro del HTML debes usar el código `<%= rutaBase %>`.
    - También deberás usar esta ruta absoluta en las importaciones dentro de cualquier script.
    - Esto no aplica para código EJS aunque esté en el mismo archivo, en ese si se pueden usar rutas relativas.
    - Si en tu script quieres implementar la carga de otro módulo o vista, usar la función de `ipcRenderer.invoke('precargarEJS')`.
        - Añadir `const { ipcRenderer } = require('electron')`.
        - Si quieres ver un ejemplo puedes consultar barraLateral.js.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Creación del proceso | 15/05/2025 | Diego Fuentes, Ian Julian Estrada, Daniel Queijeiro, Juan Pablo Chávez. |
| **2.0** | Ajustar proceso con el refactor | 22/05/2025 | Daniel Queijeiro, Diego Fuentes |
| **2.1** | Añadir pasos para actualizar checklists | 26/05/2025 | Diego Fuentes |
| **2.2** | Añadir pasos para revisar componentes | 26/05/2025 | Diego Fuentes |
| **3.0** | Refactorización del proceso | 29/5/2025 | Juan Pablo Chávez Leal |
| **3.1** | Corrección de errores ortográficos en el proceso | 30/5/2025 | Juan Pablo Chávez Leal |
| **3.2** | Añadir al proceso la actualización de Checklists | 31/5/2025 | Rommel Toledo C. |
