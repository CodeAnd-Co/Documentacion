---
title: "RF9: Usuario modifica seleccion de rancho a analizar."  
sidebar_position: 10
---

# RF9: Usuario modifica selección de rancho a analizar.

### Historia de Usuario

Yo como usuario quiero cambiar el rancho seleccionado para poder analizar los diferentes tractores que están asignados a este rancho seleccionado.

  **Precondiciones:**
  - Se consultaron los ranchos.

  **Criterios de Aceptación:**
  - El usuario debe poder modificar la selección del rancho.
  - Al cambiar el rancho, el sistema debe de actualizar los tractores asignados a este rancho.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra el proceso de cambio de selección de rancho y la actualización de los tractores en la pantalla.

---

### Mockup

![Mockup]

> *Descripción*: El mockup representa la interfaz donde se muestra la modificación de la selección del rancho

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF9-01|Cambiar el rancho seleccionado.|Se actualizan los tractores asignados al nuevo rancho seleccionado|
|PU-RF-02|Verificar actualización.|La información se refresca sin necesidad de recargar la aplicación|
|PU-RF-03|Comprobar persistencia.|Al navegar entre secciones se mantiene el nuevo rancho seleccionado.|

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------- | --------- | --------------- |
| **1.0** | Primera versión de del RF9 | 7/03/2025 | Daniel Contreras Chavez |
| **1.0** | Se agregaron precondiciones | 3/04/2025 | Ian Julián Estrada Castro |