---
title: "HU6: Usuario carga Excel a la plataforma."  
sidebar_position: 7
---

# HU6: Usuario carga Excel a la plataforma.

### Historia de Usuario

Yo como usuario quiero cargar archivos Excel a la plataforma para importar y analizar los datos para realizar reportes.

  **Precondiciones:**
  - El sistema debe tener acceso a los archivos.

  **Criterios de Aceptación:**
  - El sistema debe aceptar archivos en formato .csv y .xls.
  - El sistema muestra una alerta si el archivo supera los 10 Mb.
  - El sistema muestra el nombre del archivo cargado.

---

### Diagrama de Secuencia

```mermaid
sequenceDiagram
    actor Usuario
    participant vistaInicio as inicio.ejs
    participant utilInicio as seleccionarArchivo.js
    participant casoUso as cargarExcel.js

    Usuario->>vistaInicio: /inicio.ejs
    activate Usuario
    activate vistaInicio
    vistaInicio->>utilInicio: addEventListener('click')
    deactivate vistaInicio
    activate utilInicio
    utilInicio-)casoUso: botonCargar()
    activate casoUso
    casoUso-->>utilInicio: leerExcel(archivo)
    deactivate casoUso
    alt Caso Exitoso
        rect Lightgreen
        utilInicio-->>vistaInicio: response(exito)
        activate vistaInicio
        vistaInicio-->>Usuario: HTML
        deactivate vistaInicio
        end
    else Archivo supera los 10 Mb
        rect Lightcoral
        utilInicio-->>vistaInicio: response(error)
        activate vistaInicio
        vistaInicio-->>Usuario: HTML
        deactivate vistaInicio
        end
    else Error al cargar excel
        rect Lightcoral
        utilInicio-->>vistaInicio: response(error)
        deactivate utilInicio
        activate vistaInicio
        vistaInicio-->>Usuario: HTML
        deactivate vistaInicio
        deactivate Usuario
        end
    end
```

---

### Mockup

![Mockup](./mockups/MockupInicio.png)

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede cerrar sesión. Muestra los campos requeridos y los botones de acción disponibles.

---
### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-HU6-01|Cargar archivo Excel válido|Los datos del archivo son cargados y procesados correctamente|

- [Pruebas TracTech HU6](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=1898208261#gid=1898208261)

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/11](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/11)
