---
title: "RF8: Usuario selecciona el rancho a analizar."  
sidebar_position: 9
---

# RF8: Usuario selecciona el rancho a analizar.

**Última actualización:** 03 de abril de 2025

### Historia de Usuario

Yo como usuario quiero seleccionar un rancho específico de la lista disponible para visualizar los tractores asociados.

  **Criterios de Aceptación:**
  - Al seleccionar un rancho, el sistema debe resaltarlo visualmente (checkmark) para confirmar la selección.
Al seleccionar un rancho, el sistema debe mostrar automáticamente la lista de tractores vinculados a ese rancho.
La lista de tractores debe incluir al menos:
Identificador del tractor (ej.: número de serie o nombre).
Si no hay tractores asociados al rancho, mostrar un mensaje claro: "No se encontraron tractores registrados para este rancho".
Permitir volver a la lista de ranchos sin perder el filtro/búsqueda anterior.
La carga de los tractores debe ser inmediata (< 2 segundo) desde la selección del rancho.
Si la carga demora (ej.: muchos tractores), mostrar un indicador de progreso (spinner).
Si el rancho seleccionado no existe (ej.: fue eliminado), mostrar un error amigable y recargar la lista automáticamente.

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
