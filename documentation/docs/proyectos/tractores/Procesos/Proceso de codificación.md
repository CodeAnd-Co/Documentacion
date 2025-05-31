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
|----------|-----------------|-----------------|
| **Análisis** | **Abre y llena** la [checklist de análisis](https://docs.google.com/document/d/1dFEBxS_WGWtgCAAW1Sp57Vlgj06-X-od6HbNy2XnZKk/edit). Revísala punto por punto y, si falta algo, haz las correcciones necesarias para asegurar que el análisis esté completo. Guarda la checklist en la carpeta correspondiente en 'Checklists Tractech'. Y sigue la parte correspondiente del Proceso 11 de Trazabilidad. | **Codificador del requisito** |
| **Diseño** | Verifica el diseño en Docusaurus en el documento del Requisito. **Abre y llena** la [checklist de diseño](https://docs.google.com/document/d/1dFEBxS_WGWtgCAAW1Sp57Vlgj06-X-od6HbNy2XnZKk/edit). Si falta algo, dibuja el diagrama de secuencia a mano (en papel) y modifícalo hasta cumplir con la checklist. Guarda la checklist en la carpeta correspondiente en 'Checklists Tractech'. Y sigue la parte correspondiente del Proceso 11 de Trazabilidad. | **Codificador del requisito** |
| **Inicio de Codificación** |  Si no tienes con quién colaborar, puedes codificar solo. De lo contrario, es obligatorio hacer pair programming. | **Codificador del requisito** |
| | Mantén abierto el diagrama de secuencia durante la codificación. Verifica que estás en la rama con `git branch` y cambia a `develop` si es necesario. Ejecuta `git pull origin`, `npm i` y crea tu rama con `git checkout -b <NombreDeLaRama>`. Recuerda seguir la estrategia de ramas. | **Codificador del requisito** |
| **Backend desacoplado** | Verifica que la ruta esté definida en `app.js`. Si no está: crea la carpeta del módulo con subcarpetas `controladores`, `data`, `rutas` y `repositorios`. Agrega el archivo de rutas e índice aplicando convención de nombres, principios SOLID y el patrón de diseño. | **Codificador del requisito** |
| **Implementación Backend Desacoplado** | Importa los middlewares necesarios en el archivo de rutas. Crea el controlador, el repositorio con validaciones, y el modelo con la consulta a la base de datos. Sigue la parte correspondiente del Proceso 11 de Trazabilidad. | **Codificador del requisito** |
| **Verificación** | Revisa tu código con tu checklist personal y posteriormente con la del equipo. Realiza las modificaciones necesarias para cumplir con ambas. | **Codificador del requisito** |
| **Pull Request** | Abre un PR para asegurándote de apuntar a `develop`. Notifica a alguien para que realice las pruebas. Si hay errores, corrígelos y haz push. Verifica que se cumpla la definición de DONE y sigue la parte correspondiente del Proceso 11 de Trazabilidad. | **Codificador del requisito** |
| **Backend Local** |  Vuelve a repasar la segunda parte de la fase de "_Inicio de codificación_". Si necesitas comunicarte con el backend desacoplado actualiza `constantes.js` en la carpeta `scripts`. Crea una carpeta `API` en `domain` con `moduloAPI.js` para funciones que llamen al servidor. Conecta tu controlador con la ruta del servidor. En `casosUso`, crea la lógica de negocio del módulo. Revisa tu código como se menciona en la fase de "_Verificación_". | **Codificador del requisito** |
| **Frontend** |  Vuelve a repasar la segunda parte de la fase de "_Inicio de codificación_". En `framework/vistas/paginas`, crea la carpeta del módulo y el archivo `.ejs`. Incluye `encabezado.ejs` y `piePagina.ejs`. Usa variables para rutas. Identifica componentes existentes o crea nuevos si es necesario, recordando consultar al grupo y añadiendo la tarea al Plan de Iteración correspondiente. En `scripts`, crea un archivo `.js` para manipular el DOM. Si hay lógica que no interactúa con HTML, muévela al archivo de caso de uso. Conecta el controlador con el caso de uso y este con la vista. Revisa tu código como se menciona en la fase de "_Verificación_". Para terminar realiza un Pull Request siguiendo la fase de "_Pull Request_". | **Codificador del requisito** |



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
