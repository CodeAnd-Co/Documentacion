---
title: "RF7: Usuario consulta los ranchos disponibles."  
sidebar_position: 8
---

# RF7: Usuario consulta los ranchos disponibles.

**Última actualización:** 03 de abril de 2025

### Historia de Usuario

Yo como usuario quiero consultar una lista completa de ranchos disponibles en el sistema, con opciones de búsqueda y organización clara, para poder encontrar rápidamente la información que necesito.

  **Criterios de Aceptación:**
  - Mostrar los ranchos disponibles en un formato tabla.
  - La lista debe cargarse en menos de 2 segundos (bajo condiciones normales de red).
  - Permitir ordenar la lista por Nombre (A-Z / Z-A).
  - Barra de búsqueda: Permitir buscar ranchos por nombre (búsqueda parcial, ej.: "San" → "San Miguel").
  - Si no hay ranchos disponibles, mostrar un mensaje claro (ej.: "No se encontraron ranchos con los filtros seleccionados").
  - En caso de error de carga, mostrar un mensaje amigable con opción de reintentar.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario solicita ver los ranchos disponibless y el sistema responde con la información indicada
---

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz del sistema donde se enlistan los ranchos disponibles en una forma de menú dropdown.

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF7-01|Cargar la lista de ranchos disponibles.|Se muestra el nombre de todos los ranchos disponibles para analizar.|
