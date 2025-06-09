---
title: "RF9: Usuario descarga PDF del reporte."  
sidebar_position: 10
---

# RF9: Usuario descarga PDF del reporte.

### Historia de Usuario

Yo como usuario de la aplicación de escritorio Harvester quiero descargar el reporte en formato PDF para compartirlo o almacenarlo en el dispositivo en el que se tenga descargada la aplicación.

 **Criterios de Aceptación:**
 - El usuario debe poder descargar el reporte en formato PDF desde la interfaz del sistema.
 - El PDF debe incluir toda la información visible y clara del reporte.
 - El sistema debe procesar todas las tarjetas de texto y gráficas presentes en el reporte.
 - Las tarjetas de texto deben mantener su formato (Título, Subtítulo, Contenido) en el PDF.
 - Las gráficas deben incluirse como imágenes en el PDF.
 - Las gráficas deben reflejar los datos procesados según las fórmulas aplicadas desde el botón de fórmulas.
 - Si una gráfica tiene fórmulas asociadas, los datos mostrados deben ser el resultado de aplicar esas fórmulas a los parámetros seleccionados.
 - El PDF debe mantener el orden de los elementos tal como aparecen en la previsualización.
 - El usuario debe ver un indicador de "Descargando..." mientras se genera el PDF.
 - La pantalla debe bloquearse temporalmente durante la generación del PDF.
 - El sistema debe manejar errores si jsPDF no está disponible o falla la generación.
 - El PDF debe tener formato A4 con márgenes apropiados (40pt).
 - Si el contenido excede una página, el sistema debe crear páginas adicionales automáticamente.
 - El proceso de descarga debe completarse en menos de 10 segundos para reportes estándar.
 - Después de la descarga exitosa, la interfaz debe regresar a su estado normal.
 - Los títulos de las gráficas configurados por el usuario deben aparecer correctamente en el PDF.

---

### Diagrama de Secuencia

```mermaid
sequenceDiagram
    actor Usuario
    participant vistaAnalisis as generarReporte.ejs
    participant utilAnalisis as moduloAnalisis.js
    participant vistaTractores as seleccionarTractor.ejs
    participant moduloTractores as moduloTractores.js
    participant usecase as seleccionaDatosAComparar.js

    activate Usuario
    Usuario->>vistaTractores: Selecciona tractores y columnas
    activate vistaTractores
    vistaTractores->>vistaTractores: manejarClickTractor(tractorNombre, datosExcel)
    vistaTractores->>vistaTractores: cambiarSeleccionTractor(nombreTractor, casillaVerificacion)
    vistaTractores->>vistaTractores: seleccionarColumna(nombreTractor, nombreColumna, casillaVerificacion)
    vistaTractores-)moduloTractores: botonReporte(datosExcel)
    deactivate vistaTractores
    activate moduloTractores
    
    Note over moduloTractores: Validación de selecciones
    moduloTractores->>moduloTractores: Validar tractoresSeleccionados
    
    alt Caso exitoso
      rect Lightgreen    
      moduloTractores-)usecase: seleccionaDatosAComparar(datosExcel, seleccion)
      activate usecase
      usecase->>moduloTractores: localStorage.setItem('datosFiltradosExcel', JSON.stringify(nuevoJSON))
      moduloTractores-)vistaAnalisis: ipcRenderer.invoke('cargar-vista')
      activate vistaAnalisis
      vistaAnalisis->>Usuario: HTML
      deactivate vistaAnalisis
      deactivate usecase
      end
    else No se selecciona ningún tractor ni columnas
      rect Lightcoral
      moduloTractores->>vistaTractores: mostrarAlerta('No se ha seleccionado ningún tractor ni columnas')
      activate vistaTractores
      vistaTractores->>Usuario: Alerta de validación
      deactivate vistaTractores
      end
    else Se selecciona tractor pero no columnas
      rect Lightcoral
      moduloTractores->>vistaTractores: mostrarAlerta('No hay columnas seleccionadas')
      activate vistaTractores
      vistaTractores->>Usuario: Alerta de validación
      deactivate vistaTractores
      end
    else Se seleccionan columnas de tractor no seleccionado
      rect Lightcoral
      moduloTractores->>vistaTractores: mostrarAlerta('Tractor no seleccionado pero tiene columnas')
      activate vistaTractores
      vistaTractores->>Usuario: Alerta de validación
      deactivate vistaTractores
      end
    else Combinación problemática: tractores sin columnas y columnas sin tractores
      rect Lightcoral
      moduloTractores->>vistaTractores: mostrarAlerta('No hay columnas seleccionadas para tractores seleccionados')
      activate vistaTractores
      vistaTractores->>Usuario: Alerta de validación
      deactivate vistaTractores
      end
    else Solo hay columnas sin tractores seleccionados
      rect Lightcoral
      moduloTractores->>vistaTractores: mostrarAlerta('No hay tractores seleccionados')
      activate vistaTractores
      vistaTractores->>Usuario: Alerta de validación
      deactivate vistaTractores
      end
    else Error al filtrar los datos
      rect Lightcoral
      usecase->>moduloTractores: response.error()
      moduloTractores-)vistaAnalisis: ipcRenderer.invoke('cargar-vista', error)
      vistaAnalisis->>Usuario: HTML con error
      end
    else Error general
      rect Lightcoral
      moduloTractores-)vistaTractores: mostrarAlerta('Ocurrió un problema')
      deactivate moduloTractores
      activate vistaTractores
      vistaTractores->>Usuario: Alerta de error
      deactivate vistaTractores
      end
    end
    deactivate Usuario
```

> *Descripción*: El diagrama de secuencia muestra cómo el usuario solicita la descarga del reporte y el sistema genera y entrega el PDF del reporte usando jsPDF localmente, incluyendo el procesamiento de fórmulas aplicadas a las gráficas


### Mockup

![Mockup](./mockups/MockupAnálisis.jpg)

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede seleccionar la opción para descargar el archivo PDF del reporte.

### Pruebas Unitarias 

[Pruebas](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=177557881#gid=177557881)
---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/27](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/27)

### Historial de cambios

| **Tipo de Versión** | **Descripción**                            | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------------------------ | --------- | ----------------------- |
| **1.0**             |  Añadir requisitos de tractores            | 5/3/2025  | Antonio Landeros           |
| **1.1**             |  Agregar precondicion en RF9 | 3/4/2025  | Ian Julian Estrada|
| **1.2**             |  Ordenar todas las RFs y actualizar los datos | 1/6/2025  | Mauricio Anguiano|
| **1.3**             |  Correcion de diagrama de secuencia | 2/6/2025  | Mauricio Anguiano|
| **1.4**             |  Correccion criterios de aceptacion | 2/6/2025  | Mauricio Anguiano|