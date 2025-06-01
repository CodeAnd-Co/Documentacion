---
title: "RF9: Usuario descarga PDF del reporte."  
sidebar_position: 10
---

# RF9: Usuario descarga pdf del reporte.

### Historia de Usuario

Yo como usuario quiero descargar el reporte en formato PDF para compartirlo o almacenarlo en el dispositivo en el que se tenga descargada la aplicación

  **Criterios de Aceptación:**
  - El usuario debe de poder descargar el reporte en formato PDF desde la interfaz del sistema.
  - El PDF debe de incluir toda la información visible y clara del reporte.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario solicita la descarga del reporte y el sistema genera y entrega el PDF del reporte.

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz del sistema donde el usuario puede seleccionar la opción para descargar el archivo PDF del reporte.

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF25-01|Descargar el reporte.|Se descarga el archivo PDF mostrando un mensaje de éxito|
|PU-RF25-02|Verificar contenido.|El PDF contiene toda la información del reporte visible.|

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/27](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/27)
