---
title: 🌻 | PRL1 Ingeniería de software de TracTech
sidebar_position: 1
---

# 🌻 | PRL1 Ingeniería de software de TracTech

---

## Seguimiento

Para que en las sesiones de trabajo y días de _Home Office_ se mantenga una comprensión del progreso, asegúrate de comentar al equipo, ya sea oralmente o por uno de los medios oficiales de comunicación, que tareas vas a comenzar, cuanto tiempo vas a destinar (estructurando tus tareas en incrementos pequeños, como de 25 o 30 minutos) y sobretodo, comenta cuando completes tu tarea.

**¿Qué conseguimos con esto?**

- Que en las sesiones de trabajo y días de _Home Office_ donde el seguimiento no es tan estricto, se mantenga un registro de los avances que se realizan.
- Aumentar la motivación del equipo al compartir nuestros avances.
- Evadir la Ley de Parkinson, es decir, el obligarte a estructurar tus tareas en un tiempo concreto te fuerza a que tus tareas se realicen en incrementos manejables.

---

## Objetivo

- Establecer un flujo para el desarrollo de código de alta calidad.
- Identificar y corregir defectos en etapas tempranas del desarrollo.
- Asegurar la verificación efectiva del código.

---

## Entradas

1. Requerimientos o historias de usuario asignadas en READY.
2. [Estándar de codificación](/docs/standards/general).
3. [Checklist de verificación de código](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa).
4. Checklist individual de código (con los defectos propios más comunes).

---

## Proceso

| **Fase**                                  | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Responsable**               | **Meta y práctica específica del CMMI**                                                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Análisis**                           | **Abre y llena** la [checklist de análisis](https://docs.google.com/document/d/10oQVaYoiHrBbJjHWcvZDRMZLWdWukiI5ONUdzWmxchs/edit?tab=t.0#heading=h.fhau7kjl46pa). Revísala punto por punto y, si falta algo, haz las correcciones necesarias para asegurar que el análisis esté completo. Guarda la checklist en la carpeta correspondiente en 'Checklists Tractech'. Y sigue la parte correspondiente del [Proceso de Trazabilidad](/docs/next/procesos/PR11-trazabilidad-requisitos).                                                                                                                                                                                                                                                                     | **Codificador del requisito** | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.3** (Establecer los procedimientos y criterios de verificación), **VER SP 3.1** (Realizar la verificación) |
| **2. Diseño**                             | Verifica el diseño en Docusaurus en el documento del requisito. **Abre y llena** la [checklist de diseño](https://docs.google.com/document/d/1RWFAyym9Kphn2Pl4UBQtPHf09XGEX_OADpe3IqYxLe4/edit?tab=t.0#heading=h.fhau7kjl46pa). Si identificas áreas de mejora, dibuja el diagrama de secuencia a mano (en papel) para replantear su lógica. Una vez definido el nuevo diseño, actualiza el diagrama del documento del requisito. Guarda la checklist en la carpeta correspondiente en 'Checklists Tractech'. Y sigue la parte correspondiente del [Proceso de Trazabilidad](/docs/next/procesos/PR11-trazabilidad-requisitos).                                                                                                                             | **Codificador del requisito** | **TS SP 2.1** (Diseñar el producto o componentes del producto), **VER SP 1.3** (Establecer los procedimientos y criterios de verificación), **VER SP 3.1** (Realizar la verificación)             |
| **3. Ready**                              | Verifica que se cumpla la definición de [READY](/docs/next/proyectos/tractores/definicion-ready-tractores)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Codificador del requisito** | **RD SP 3.3** (Analizar los requerimentos para comprobar que sean necesarios y suficientes).                                                                                                      |
| **4. Inicio de Codificación**             | Si no tienes con quién colaborar, puedes codificar solo. De lo contrario, es obligatorio hacer pair programming.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Codificador del requisito** | **TS SP 3.1** (Implementar el diseño), **VER SP 2.1** (Preparar las revisiones entre pares)                                                                                                       |
|                                           | Mantén abierto el diagrama de secuencia durante la codificación. Verifica que estás en la rama con `git branch` y cambia a `develop` si es necesario. Ejecuta `git pull origin`, `npm i` y crea tu rama con `git checkout -b <NombreDeLaRama>`. Recuerda seguir [la estrategia de ramas](/docs/next/guias/github/git-branches).                                                                                                                                                                                                                                                                                                                                                                                                                             | **Codificador del requisito** | **CM SP 2.2** (Controlar los elementos de configuración)                                                                                                                                          |
| **5. Backend desacoplado**                | Verifica que la ruta esté definida en `app.js`. Si no está: crea la carpeta del módulo con subcarpetas `controladores`, `data`, `rutas` y `repositorios`. Agrega el archivo de rutas e índice aplicando [la convención de nombres](/docs/next/standards/estandar-codificacion/), los principios SOLID y el [patrón de diseño](/docs/next/proyectos/tractores/documentacion/estrategia).                                                                                                                                                                                                                                                                                                                                                                     | **Codificador del requisito** | **TS SP 3.1** (Implementar el diseño)                                                                                                                                                             |
| **6. Implementación Backend Desacoplado** | Importa los middlewares necesarios en el archivo de rutas. Crea el controlador, el repositorio con validaciones, y el modelo con la consulta a la base de datos. Sigue la parte correspondiente del [Proceso de Trazabilidad](/docs/next/procesos/PR11-trazabilidad-requisitos).                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Codificador del requisito** | **TS SP 3.1** (Implementar el diseño), **REQM SP 1.4** (Mantener la trazabilidad bidireccional)                                                                                                   |
| **7. Verificación del Código**            | Revisa tu código con tu checklist personal y posteriormente con la del equipo. Realiza las modificaciones necesarias para cumplir con ambas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **Codificador del requisito** | **PPQA SP 1.2** (Evaluar objetivamente los productos de trabajo), **VER SP 3.1** (Realizar la verificación)                                                                                       |
| **8. Pull Request**                       | Abre un PR asegurándote de apuntar a `develop`. Notifica a alguien para que realice las pruebas. Si hay errores, corrígelos y haz push.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Codificador del requisito** | **CM SP 2.2** (Controlar los elementos de configuración), **VER SP 2.2** (Realizar revisiones entre pares)                                                                                        |
| **9. Done**                               | Verifica que se cumpla la definición de [DONE](/docs/next/proyectos/tractores/definicion-done-tractores) y sigue la parte correspondiente del [Proceso de Trazabilidad](/docs/next/procesos/PR11-trazabilidad-requisitos).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Codificador del requisito** | **CM SP 2.2** (Controlar los elementos de configuración), **RD SP 3.3** (Analizar los requerimentos para comprobar que sean necesarios y suficientes).                                            |
| **10. Backend Local**                     | Vuelve a repasar la segunda parte de la fase de '_Inicio de codificación_'. Si necesitas comunicarte con el backend desacoplado actualiza `constantes.js` en la carpeta `scripts`. Crea una carpeta `API` en `domain` con `moduloAPI.js` para funciones que llamen al servidor. Conecta tu controlador con la ruta del servidor. En `casosUso`, crea la lógica de negocio del módulo. Revisa tu código como se menciona en la fase de '_Verificación del Código_'.                                                                                                                                                                                                                                                                                          | **Codificador del requisito** | **TS SP 3.1** (Implementar el diseño), **VER SP 3.1** (Realizar la verificación)                                                                                                                  |
| **11. Frontend**                          | Vuelve a repasar la segunda parte de la fase de '_Inicio de codificación_'. En `framework/vistas/paginas`, crea la carpeta del módulo y el archivo `.ejs`. Incluye `encabezado.ejs` y `piePagina.ejs`. Usa variables para rutas. Identifica componentes existentes o crea nuevos si es necesario, recordando consultar al grupo y añadiendo la tarea al Plan de Iteración correspondiente. En `scripts`, crea un archivo `.js` para manipular el DOM. Si hay lógica que no interactúa con HTML, muévela al archivo de caso de uso. Conecta el controlador con el caso de uso y este con la vista. Revisa tu código como se menciona en la fase de '_Verificación del Código_'. Para terminar realiza un Pull Request siguiendo la fase de '_Pull Request_'. | **Codificador del requisito** | **TS SP 3.1** (Implementar el diseño), **VER SP 3.1** (Realizar la verificación), **CM SP 2.2** (Controlar los elementos de configuración)                                                        |

### Actualización de Checklists

- La **checklist de codificación** se actualizará **cada lunes**, incorporando los defectos más frecuentemente registrados en el Defect Log.
- Al **cierre de cada iteración**, se actualizarán las **checklists de análisis y diseño** con base en los defectos detectados durante el ciclo.
- El objetivo de estas actualizaciones periódicas es **abordar de manera directa las áreas de oportunidad** del equipo y fomentar la mejora continua.

### Uso de rutas en HTML, EJS y scripts

- **Todas las rutas dentro del HTML deben ser absolutas**, partiendo de `/harvester-app`. Ejemplo: para importar un script o archivo CSS en un archivo HTML, usa:
  ```html
  <script src="<%= rutaBase %>src/scripts/archivo.js"></script>
  <link rel="stylesheet" href="<%= rutaBase %>src/css/estilos.css" />
  ```
- **También deberás usar rutas absolutas en las importaciones dentro de cualquier script JS.** Esto garantiza que el módulo cargue correctamente desde la raíz del proyecto.

- **Excepción importante:** las rutas **dentro del código EJS** (aunque esté en el mismo archivo) **sí pueden ser relativas.**

---

### Carga dinámica de módulos o vistas (Electron)

Si necesitas **cargar otra vista desde un script**, sigue estos pasos:

1. **Importa ipcRenderer al inicio de tu script:**
   ```js
   const { ipcRenderer } = require("electron");
   ```
2. **Usa la función:**
   `js
ipcRenderer.invoke('precargarEJS', 'ruta/de/la/vista');
`
   Puedes consultar un ejemplo en: `barraLateral.js`.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                                                                  | **Fecha**  | **Colaborador**                                                         |
| ------------------- | -------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- |
| **1.0**             | Creación del proceso                                                             | 15/05/2025 | Diego Fuentes, Ian Julian Estrada, Daniel Queijeiro, Juan Pablo Chávez. |
| **2.0**             | Ajustar proceso con el refactor                                                  | 22/05/2025 | Daniel Queijeiro, Diego Fuentes                                         |
| **2.1**             | Añadir pasos para actualizar checklists                                          | 26/05/2025 | Diego Fuentes                                                           |
| **2.2**             | Añadir pasos para revisar componentes                                            | 26/05/2025 | Diego Fuentes                                                           |
| **3.0**             | Refactorización del proceso                                                      | 29/5/2025  | Juan Pablo Chávez Leal                                                  |
| **3.1**             | Corrección de errores ortográficos en el proceso                                 | 30/5/2025  | Juan Pablo Chávez Leal                                                  |
| **3.2**             | Enlaces al proceso de RTM.                                                       | 30/05/2025 | Juan Pablo Chávez Leal                                                  |
| **3.3**             | Añadir al proceso la actualización de Checklists                                 | 31/5/2025  | Rommel Toledo C.                                                        |
| **4.0**             | Reescritura para aumentar la claridad del proceso                                | 31/5/2025  | Rommel Toledo C.                                                        |
| **5.0**             | Reescritura completa del proceso para aumentar la concisión                      | 31/5/2025  | Rommel Toledo C.                                                        |
| **5.1**             | Corrección de los links a las checklist del equipo                               | 2/6/2025   | Rommel Toledo C.                                                        |
| **5.2**             | Se añadió una sección al documento del proceso para el seguimiento de las tareas | 2/6/2025   | Rommel Toledo C.                                                        |
