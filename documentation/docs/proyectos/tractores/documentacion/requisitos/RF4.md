---
title: "RF4: Usuario consulta datos disponibles."  
sidebar_position: 5
---

# RF4: Usuario consulta datos disponibles.

### Historia de Usuario

Yo como usuario quiero ver los datos disponibles para los tractores seleccionados con el fin de poder analizar el desempeño de estos

  **Criterios de Aceptación:**
  - El sistema debe de permitir al usuario visualizar los datos que se encuentren disponibles
  - La información debe de estar organizada por categorías como:
    - Distribuidores (Si el reporte cuenta con distribuidores)
    - Con telemetría / Sin telemetría
    - Tractores
    - Datos de los tractores
  - El sistema debe permitir hacer la busqueda de tractores por nombre
  - La barra de búsqueda no permite más de 60 caracteres
  - La barra de búsqueda no permite inyecciones de código
  - El sistema debe mostrar una alerta si se selecciona un tractor pero no seleccionas valores de ese tractor.
  - El sistema debe de mostrar una alerta si se selecciona un valor de un tractor, pero no el tractor para analizarlo. 
---

### Diagrama de Secuencia

> *Descripción*: El diagrama de secuencia muestra cómo el usuario accede a los datos disponibles que tienen los tractores para su análisis.

```mermaid
sequenceDiagram
    actor Usuario
    participant vistaInicio as inicio.ejs
    participant seleccionarArchivo as seleccionarArchivo.js
    participant vistaTractores as seleccionarTractor.ejs
    participant moduloTractores as moduloTractores.js

    activate Usuario
    Usuario->>vistaInicio: /inicio.ejs
    activate vistaInicio
    vistaInicio->>seleccionarArchivo: botonTractores()
    deactivate vistaInicio
    activate seleccionarArchivo
    seleccionarArchivo-)vistaTractores: ipcRenderer.invoke('cargar-vista');
    deactivate seleccionarArchivo
    activate vistaTractores
    vistaTractores->>moduloTractores: inicializarModuloTractores()
    activate moduloTractores
    moduloTractores->>moduloTractores: iniciarDistribuidores(datosExcel)
    moduloTractores->>moduloTractores: iniciarTractores(datosExcel)
    alt Caso exitoso
      rect Lightgreen
      moduloTractores->>vistaTractores: inicializarModuloTractores()
      vistaTractores->>Usuario: HTML
      end
    else Error al obtener distribuidores
      rect Lightcoral
      moduloTractores->>vistaTractores: inicializarModuloTractores()
      vistaTractores->>Usuario: HTML
      end
    else Error al obtener tractores
      rect Lightcoral
      moduloTractores->>vistaTractores: inicializarModuloTractores()
      vistaTractores->>Usuario: HTML
      end
    else Error al obtener datos del excel
      rect Lightcoral
      moduloTractores->>vistaTractores: inicializarModuloTractores()
      vistaTractores->>Usuario: HTML
      deactivate vistaTractores
      end
    else Error
      rect Lightcoral
      moduloTractores->>vistaInicio: error()
      deactivate moduloTractores
      activate vistaInicio
      vistaInicio->>Usuario: HTML
      deactivate vistaInicio
      end
    end 
    deactivate Usuario

```
---

### Mockup

![Mockup](./mockups/SeleccionaDatos.jpg)

> *Descripción*: El mockup representa la interfaz del sistema donde se presentan los datos disponibles que se tienen de los tractores para su análisis.

---

### Pruebas Unitarias 
#### [Pruebas del RF](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=1089355168#gid=1089355168)

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/48](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/48)

[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/48](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/48)

### Historial de cambios

| **Tipo de Versión** | **Descripción**                            | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------------------------ | --------- | ----------------------- |
| **1.0**             |  Añadir requisitos de tractores            | 5/3/2025  | Antonio Landeros           |
| **1.1**             |  Añadir pull request a requisitos completados | 27/5/2025  | Juan Carlos Calderón|
| **1.2**             |  Correccion de diagrama de secuencia de app local | 1/6/2025  | Mauricio Anguiano|
| **2.0**             |  Agregar criterios de aceptacion | 2/6/2025  | Ian Julian Estrada|
| **2.1**             |  Ordenar todas las RFs y actualizar los datos | 1/6/2025  | Mauricio Anguiano|
| **2.2**             |  Correccion criterios de aceptacion | 3/6/2025  | Mauricio Anguiano|
| **2.3**             |  Agregar pull requests de RF back| 5/6/2025  | Sofía Osorio|