---
title: "RF8: Usuario elimina el Excel cargado."  
sidebar_position: 9
---

# RF8: Usuario elimina el Excel cargado.

### Historia de Usuario

Yo como usuario quiero eliminar el Excel cargado para cuando termine de trabajar en un reporte.

  **Criterios de Aceptación:**

  - El sistema debe mostrar una confirmación antes de eliminar el archivo.
  - Si el usuario confirma la eliminación, el archivo Excel debe eliminarse de la aplicación y no debe estar disponible para futuras operaciones.
  - Si el usuario cancela la acción, el archivo debe permanecer cargado y no debe realizarse ningún cambio.
  - Tras la eliminación exitosa, la interfaz debe actualizarse para reflejar que no hay archivo cargado (por ejemplo, ocultar el nombre del archivo y deshabilitar botones relacionados).
  - Si ocurre un error durante la eliminación, el sistema debe mostrar un mensaje de error claro al usuario.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

```mermaid
  sequenceDiagram
      actor Usuario
      participant vistaInicio as Inicio
      participant utilInicio as seleccionarArchivo.js
      participant backend as borrarExcel.js

      activate Usuario
      Usuario->>vistaInicio: Click en "Eliminar Excel"
      activate vistaInicio
      vistaInicio->>utilInicio: botonBorrar()
      utilInicio->>backend: borrarExcel()
      activate backend
      alt Eliminación exitosa
          rect Lightgreen
          backend-->>utilInicio: { ok: true }
          utilInicio-->>vistaInicio: Actualiza UI (oculta nombre, deshabilita botones)
          vistaInicio-->>Usuario: Muestra mensaje de éxito
          end
      else Error de backend
          rect Lightcoral
          backend-->>utilInicio: { ok: false, mensaje }
          utilInicio-->>vistaInicio: Muestra alerta de error
          vistaInicio-->>Usuario: Muestra mensaje de error
          end
      else Error inesperado
          rect Lightcoral
          backend--x utilInicio: Excepción/Error
          utilInicio-->>vistaInicio: Muestra alerta de error
          vistaInicio-->>Usuario: Muestra mensaje de error
          end
      end
      deactivate backend
      deactivate vistaInicio
      deactivate Usuario
```


> *Descripción*: El diagrama de secuencia muestra cómo el usuario interactúa con el sistema para eliminar un Excel, detallando los pasos de solicitud de datos, validación y confirmación.

---

### Mockup

![Mockup](./mockups/MockupInicio.png)

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario elimina un Excel. Muestra los campos requeridos y los botones de acción disponibles.

---

### Pruebas Unitarias 
| ID Prueba   | Descripción                        | Resultado Esperado                                 |
|-------------|------------------------------------|----------------------------------------------------|
|PU-RF45-01   |Eliminar archivo Excel              |El archivo es eliminado correctamente               |
|PU-RF45-02   |Intentar eliminar archivo con error |El sistema muestra un mensaje de error al usuario   |

---

### Link Pruebas

#### [https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=765173927#gid=765173927](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=765173927#gid=765173927)

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/19](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/19)
