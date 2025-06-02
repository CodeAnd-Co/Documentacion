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
 - Las gráficas deben incluirse como imágenes PNG en el PDF.
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
  box App local
    actor Usuario as Usuario
    participant vistaAnalisis as Vista: moduloAnalisis.ejs
    participant moduloAnalisis as Script: moduloAnalisis.js
    participant cuadroFormulas as Cuadro de Fórmulas
    participant jsPDF as jsPDF Library
    participant ipcRenderer as Electron IPC
    participant sistemaArchivos as Sistema de Archivos
  end

  %% Inicio del proceso de descarga
  Usuario ->> vistaAnalisis: Click en botón "Descargar PDF"
  vistaAnalisis ->> moduloAnalisis: click event en #descargarPDF
  moduloAnalisis ->> moduloAnalisis: Capturar contenido anterior del botón
  moduloAnalisis ->> vistaAnalisis: Deshabilitar botón, cambiar texto a "Descargando..."
  moduloAnalisis ->> vistaAnalisis: Mostrar pantalla de bloqueo (remover clase 'oculto')
  vistaAnalisis ->> Usuario: Interfaz bloqueada con indicador de descarga

  %% Validaciones iniciales
  alt jsPDF no está disponible
    rect rgb(255, 200, 200)
      moduloAnalisis ->> moduloAnalisis: Verificar if (!jsPDF)
      moduloAnalisis ->> vistaAnalisis: Mostrar Swal "Error al descargar reporte"
      moduloAnalisis ->> moduloAnalisis: throw new Error('[PDF] jsPDF no cargado')
      moduloAnalisis ->> vistaAnalisis: Restaurar botón y ocultar pantalla bloqueo
      vistaAnalisis ->> Usuario: Error mostrado, interfaz restaurada
    end
  else jsPDF disponible
    rect rgb(200, 255, 200)
      moduloAnalisis ->> jsPDF: new jsPDF({orientation: 'portrait', unit: 'pt', format: 'a4'})
      jsPDF ->> moduloAnalisis: Documento PDF inicializado
      moduloAnalisis ->> moduloAnalisis: Configurar márgenes (40pt) y dimensiones de página
    end
  end

  %% Obtener contenedor de previsualización
  moduloAnalisis ->> vistaAnalisis: document.getElementById('contenedor-elementos-previsualizacion')

  %% Procesamiento de elementos del reporte
  loop Por cada elemento en el contenedor
    alt Elemento es tarjeta de texto (.previsualizacion-texto)
      rect rgb(200, 255, 200)
        moduloAnalisis ->> moduloAnalisis: Detectar tipo: preview-titulo/subtitulo/contenido

        alt Es título
          moduloAnalisis ->> jsPDF: setFontSize(18), setFont(undefined, 'bold')
          moduloAnalisis ->> moduloAnalisis: espaciado = 14
        else Es subtítulo
          moduloAnalisis ->> jsPDF: setFontSize(15), setFont(undefined, 'bold')
          moduloAnalisis ->> moduloAnalisis: espaciado = 16
        else Es contenido
          moduloAnalisis ->> jsPDF: setFontSize(12), setFont(undefined, 'normal')
          moduloAnalisis ->> moduloAnalisis: espaciado = 11
        end

        %% Procesar párrafos dentro de la tarjeta de texto
        loop Por cada párrafo <p>
          moduloAnalisis ->> moduloAnalisis: const texto = elementoSecundario.textContent

          alt Texto vacío
            moduloAnalisis ->> moduloAnalisis: return (saltar párrafo)
          else Texto presente
            rect rgb(200, 255, 200)
              moduloAnalisis ->> jsPDF: splitTextToSize(texto, anchoPagina)
              jsPDF ->> moduloAnalisis: Array de líneas ajustadas

              alt Texto excede página actual
                moduloAnalisis ->> jsPDF: addPage()
                moduloAnalisis ->> moduloAnalisis: posicionY = margen (reiniciar)
              end

              moduloAnalisis ->> jsPDF: text(lineas, margen, posicionY)
              moduloAnalisis ->> moduloAnalisis: posicionY += altura calculada + espaciado
            end
          end
        end
      end

    else Elemento es gráfica (.previsualizacion-grafica)
      rect rgb(200, 255, 200)
        moduloAnalisis ->> vistaAnalisis: elemento.querySelector('canvas')

        alt Canvas no encontrado
          moduloAnalisis ->> moduloAnalisis: return (saltar gráfica)
        else Canvas encontrado
          vistaAnalisis ->> moduloAnalisis: canvas element

          %% Verificar si la gráfica tiene fórmulas aplicadas
          moduloAnalisis ->> cuadroFormulas: Verificar fórmulas asociadas a la gráfica

          alt Gráfica tiene fórmulas aplicadas
            rect rgb(200, 255, 200)
              cuadroFormulas ->> moduloAnalisis: Datos procesados con fórmulas (f(y): y + k, f(y): 2x, etc.)
              moduloAnalisis ->> moduloAnalisis: Actualizar datos del Chart.js con resultados de fórmulas
              moduloAnalisis ->> vistaAnalisis: chart.data.datasets[0].data = datosConFormulas
              moduloAnalisis ->> vistaAnalisis: chart.update() - regenerar gráfica
              Note over moduloAnalisis,cuadroFormulas: La gráfica ahora refleja los datos<br/>procesados por las fórmulas seleccionadas
            end
          else Gráfica sin fórmulas
            Note over moduloAnalisis: Usar datos originales del Excel<br/>sin procesamiento adicional
          end

          %% Verificar título personalizado de la gráfica
          moduloAnalisis ->> vistaAnalisis: Obtener título de input.titulo-grafica

          alt Título personalizado existe
            vistaAnalisis ->> moduloAnalisis: Título configurado por usuario
            moduloAnalisis ->> vistaAnalisis: chart.options.plugins.title.text = tituloPersonalizado
            moduloAnalisis ->> vistaAnalisis: chart.update() - aplicar título
          end

          %% Convertir canvas a PNG y agregar al PDF
          vistaAnalisis ->> moduloAnalisis: lienzo.toDataURL('image/png')
          vistaAnalisis ->> moduloAnalisis: imagen en formato base64 (con datos de fórmulas aplicadas)

          moduloAnalisis ->> moduloAnalisis: Calcular proporción y dimensiones
          moduloAnalisis ->> moduloAnalisis: const proporcion = lienzo.height / lienzo.width
          moduloAnalisis ->> moduloAnalisis: Configurar anchoImagen, altoImagen, desplazamiento

          alt Gráfica excede página actual
            moduloAnalisis ->> jsPDF: addPage()
            moduloAnalisis ->> moduloAnalisis: posicionY = margen
          end

          moduloAnalisis ->> jsPDF: setFillColor(224, 224, 224) - fondo gris
          moduloAnalisis ->> jsPDF: roundedRect() - fondo con bordes redondeados
          moduloAnalisis ->> jsPDF: addImage(imagen, 'PNG', coordenadas, dimensiones)
          Note over jsPDF: La imagen incluye los datos procesados<br/>por fórmulas y título personalizado
          moduloAnalisis ->> moduloAnalisis: posicionY += altoFondo + espaciado
        end
      end
    end
  end

  %% Finalización y guardado
  moduloAnalisis ->> jsPDF: output('blob')
  jsPDF ->> moduloAnalisis: documentoNuevo (PDF blob)
  moduloAnalisis ->> moduloAnalisis: documentoNuevo.arrayBuffer()
  moduloAnalisis ->> moduloAnalisis: Buffer.from(pdfBufer)
  moduloAnalisis ->> ipcRenderer: send('guardar-pdf', Buffer)

  %% Comunicación con proceso principal de Electron
  ipcRenderer ->> sistemaArchivos: Mostrar diálogo "Guardar como..."

  alt Usuario cancela guardado
    rect rgb(255, 200, 200)
      sistemaArchivos ->> ipcRenderer: Usuario canceló operación
      ipcRenderer ->> moduloAnalisis: once('pdf-guardado', (event, false))
      moduloAnalisis ->> vistaAnalisis: Restaurar botón y ocultar pantalla bloqueo
      vistaAnalisis ->> Usuario: Interfaz restaurada sin guardar
    end
  else Error al guardar archivo
    rect rgb(255, 200, 200)
      sistemaArchivos ->> ipcRenderer: Error de escritura/permisos
      ipcRenderer ->> moduloAnalisis: once('pdf-guardado', (event, false))
      moduloAnalisis ->> vistaAnalisis: Restaurar interfaz, mostrar error
      vistaAnalisis ->> Usuario: Error al guardar archivo
    end
  else Guardado exitoso
    rect rgb(200, 255, 200)
      sistemaArchivos ->> ipcRenderer: Archivo guardado correctamente
      ipcRenderer ->> moduloAnalisis: once('pdf-guardado', (event, true))
      moduloAnalisis ->> vistaAnalisis: Restaurar texto botón, habilitar botón
      moduloAnalisis ->> vistaAnalisis: Ocultar pantalla bloqueo (agregar clase 'oculto')
      vistaAnalisis ->> Usuario: Descarga completada, PDF con datos procesados por fórmulas
    end
  end
```

> *Descripción*: El diagrama de secuencia muestra cómo el usuario solicita la descarga del reporte y el sistema genera y entrega el PDF del reporte usando jsPDF localmente, incluyendo el procesamiento de fórmulas aplicadas a las gráficas

### Mockup

![Mockup](./mockups/MockupAnálisis.png)

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede seleccionar la opción para descargar el archivo PDF del reporte.

### Pruebas Unitarias 

[Pruebas](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=177557881#gid=177557881)
---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/27](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/27)
