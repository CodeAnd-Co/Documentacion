---
title: "RF8: Usuario selecciona el rancho a analizar."  
sidebar_position: 9
---

# RF8: Usuario selecciona el rancho a analizar.

**Última actualización:** 07 de marzo de 2025

### Historia de Usuario

Yo como usuario quiero seleccionar un rancho especifico dentro del sistema para poder ver los tractores asociados dentro de la aplicación

  **Criterios de Aceptación:**
  - El usuario debe de poder seleccionar un rancho de la lista mostrada

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra el flujo de selección de un rancho y de como este se actualiza para mostrar los tractores asignados a ese rancho.

---

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz de selección de ranchos con los tractores asociados por rancho

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF8-01|Seleccionar un rancho de la lista.|Se cargan los tractores asignados por rancho.|
|PU-RF8-02|Comprobar persistencia de selección.|Al navegar entre secciones, se mantiene el rancho seleccionado.|
