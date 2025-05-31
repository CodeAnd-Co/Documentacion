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

| **Fase** | **Descripción** | **Responsable** |
|------|-------------|-------------|
| **Verificar el análisis** | Abre la [checklist de análisis](https://docs.google.com/document/d/1dFEBxS_WGWtgCAAW1Sp57Vlgj06-X-od6HbNy2XnZKk/edit?tab=t.0#heading=h.fhau7kjl46pa). Revísala punto por punto y, si falta algo, haz las correcciones necesarias para asegurar que el análisis esté completo. Guarda la checklist en la carpeta 'Checklists Tractech'. | Codificador del requisito |
| **Seguir el proceso de RTM** | Abre y sigue el proceso de RTM. | Codificador del requisito |
| **Verificación del diseño** | Abre el requisito en Docusaurus y verifica su diseño. | Codificador del requisito |
|  | Dibuja el diagrama de secuencia a mano (en papel) para validar si el diseño es útil. | Codificador del requisito |
|  | Llena la [checklist de diseño](https://docs.google.com/document/d/17iPu9h6KR80SHw6kBhKG3mf926_mbkIipx1Aq1sfD2A/edit?tab=t.0#heading=h.fhau7kjl46pa) y crea una copia en la carpeta 'Checklists Tractech'. | Codificador del requisito |
| **Seguir el proceso de RTM** | Una vez te asegures de que el diagrama de secuencia cumpla con la checklist de diseño, añádelo al documento de la historia siguiendo el Proceso 11 de Trazabilidad.. | Codificador del requisito |
| **Preparación para la codificación** | Mantén abierto el diagrama de secuencia mientras programas el requerimiento. | Codificador del requisito |
| **Inicio de codificación** | Verifica que estás en la rama develop: ejecuta `git branch`. Si no estás en develop: `git checkout develop`. Luego ejecuta: `git pull origin`, `npm i`, y finalmente: `git checkout -b <NombreDeLaRama>`. Sigue la estrategia de ramas. | Codificador del requisito |
| **Selección de pareja** | Si no tienes con quién colaborar, puedes codificar solo. De lo contrario, es obligatorio hacer pair programming. | Codificador del requisito |
| **Codificación del backend desacoplado.** | Verifica que en `app.js` esté definida la ruta del módulo de tu requisito. | Codificador del requisito |
| Si no está la ruta: | **1.** Verifica que exista la carpeta del módulo correspondiente. | Codificador del requisito |
| Si no está la ruta: | **2.** Asegúrate de que existan las carpetas 'controladores', 'data' y 'rutas'. | Codificador del requisito |
|  | **3.** Revisa que dentro de 'data' exista la carpeta 'repositorios'. | Codificador del requisito |
|  | **4.** Verifica que en 'rutas' estén el archivo de índice y el archivo de tu ruta. Agrega tu ruta al índice. | Codificador del requisito |
|  | Si falta algo, créalo siguiendo el patrón de diseño, la convención de nombres y los principios SOLID. | Codificador del requisito |
| **Codificación** | En el archivo de rutas, importa los middlewares necesarios. | Codificador del requisito |
|  | Crea el controlador y agrégalo al archivo de rutas. | Codificador del requisito |
|  | Crea el archivo repositorio en la carpeta correspondiente e incluye todas las validaciones necesarias. | Codificador del requisito |
|  | Crea el archivo modelo con la consulta a base de datos. | Codificador del requisito |
| **Seguir el proceso de RTM** | Abre y sigue el proceso de RTM. | Codificador del requisito |
| **Verificaciones y PR** | Revisa tu código con la checklist de codificación propia. | Codificador del requisito |
|  | Revisa el código con la checklist de codificación del equipo. | Codificador del requisito |
|  | Abre el PR y asegúrate de que la rama objetivo sea develop. | Codificador del requisito |
|  | Notifica a alguien del equipo para que diseñe y ejecute las pruebas. | Codificador del requisito |
|  | Si las pruebas fallan, corrige los errores y haz push a la rama. | Codificador del requisito |
| **Revisa la definición de DONE** | Asegúrate de que todo se cumpla según la definición de DONE. Si es así, continúa con RTM. | Codificador del requisito |
| **Preparación del ambiente** | Vuelve a repasar la fase de "Inicio de codificación". | Codificador del requisito |
| **Codificación del backend local** | Si necesitas comunicarte con el backend desacoplado, sigue los pasos siguientes. | Codificador del requisito |
| **Comunicación** | Verifica que `constantes.js` esté actualizado en la carpeta 'scripts'. | Codificador del requisito |
|  | Crea una carpeta 'API' de tu módulo dentro de 'domain'. | Codificador del requisito |
|  | Dentro de 'API', crea `moduloAPI.js` con las funciones que hacen llamadas al servidor. | Codificador del requisito |
|  | Conecta tu controlador con la ruta de la petición al servidor. | Codificador del requisito |
| **Casos de uso** | En la carpeta 'casosUso', asegúrate de que exista la carpeta del módulo y crea el archivo con la lógica de negocio del backend local. | Codificador del requisito |
| **Preparación del ambiente** | Vuelve a repasar la fase de "Inicio de codificación". | Codificador del requisito |
| **Codificación del front-end** | En `framework > vistas > paginas`, crea la carpeta del módulo. | Codificador del requisito |
|  | Dentro de ella, crea el archivo `.ejs` de la vista. | Codificador del requisito |
|  | Identifica los componentes necesarios. Si no existen, consulta al grupo y desarróllalos si es necesario. | Codificador del requisito |
|  | Añade `encabezado.ejs` y `piePagina.ejs` desde `includes`, y usa variables para rutas. | Codificador del requisito |
|  | En `framework > utils > scripts`, crea el archivo `.js` con la lógica del DOM. Solo debe haber lectura, escritura y funciones HTML. | Codificador del requisito |
|  | Si tienes lógica que no interactúa con HTML, muévela al backend local en el archivo de caso de uso. | Codificador del requisito |
|  | Conecta el controlador con el caso de uso y este con la vista. | Codificador del requisito |
| **Seguir el proceso de RTM** | Abre y sigue el proceso de RTM. | Codificador del requisito |
| **Verificaciones y PR** | Revisa tu código con la checklist propia. | Codificador del requisito |
|  | Revisa tu código con la checklist del equipo. | Codificador del requisito |
|  | Abre el PR asegurándote de apuntar a la rama develop. | Codificador del requisito |
|  | Notifica al equipo para que prueben tu requerimiento. | Codificador del requisito |
|  | Corrige los errores y haz push a la rama. | Codificador del requisito |
| **Revisa la definición de DONE** | Verifica que todo esté completo. Si lo está, continúa con RTM. | Codificador del requisito |


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
| **4.0** | Reescritura completa del proceso | 31/5/2025 | Rommel Toledo C. |
