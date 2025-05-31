---
title: "HU4: Usuario consulta datos disponibles."  
sidebar_position: 5
---

# HU4: Usuario consulta datos disponibles.

### Historia de Usuario

Yo como usuario quiero ver los datos disponibles para los tractores seleccionados con el fin de poder analizar el desempeño de estos

  **Criterios de Aceptación:**
  - El sistema debe de permitir al usuario visualizar los datos que se encuentren disponibles
  - La información debe de estar organizada por categorías como:
    - Distribuidores
    - Tractores
    - Datos de los tractores
  - El sistema debe mostrar una alerta si ocurre un error
---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

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

![Mockup]

> *Descripción*: El mockup representa la interfaz del sistema donde se presentan los datos disponibles que se tienen de los tractores para su análisis.

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF13-01|Cargar lista de datos disponible.|Se muestran los datos del tractor de manera ordenada.|
|PU-RF13-02|Filtrar la información por la categoría.|Solo se muestran los datos de la categoría seleccionada|

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/48](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/48)