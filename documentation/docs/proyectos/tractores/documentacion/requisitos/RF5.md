---
title: "RF5: Usuario selecciona modo claro/oscuro."  
sidebar_position: 6
---

# RF5: Usuario selecciona modo claro/oscuro.

**Última actualización:** 07 de marzo de 2025

### Historia de Usuario

Yo como usuario quiero cambiar entre el modo claro y oscuro del sistema para mejorar la experiencia de cada usuario.

  **Criterios de Aceptación:**
  - El sistema debe de permitir a los usuarios alternar entre el modo claro y oscuro desde la configuración del sistema.

---

### Diagrama de Secuencia

![Diagrama de Secuencia] 

> *Descripción*: El diagrama de secuencia muestra cómo el usuario cambia el modo de visualización.

---

### Mockup

![Mockup]

> *Descripción*: El mockup muestra la interfaz con la opción de cambiar el modo claro/oscuro

---

### Pruebas Unitarias 
| ID Prueba | Descripción | Resultado Esperado |
|-----------|-------------|--------------------|
|PU-RF5-01|Cambiar a modo oscuro.|La interfaz cambia a modo oscuro y se guarda la preferencia dentro de la aplicación|
|PU-RF5-02|Cambiar a modo claro.|La interfaz cambia a modoclaro y se guarda la preferencia dentro de la aplicación|
|PU-RF5-03|Persistencia del modo.|Se mantiene la preferencia del usuario aun cuando salga de la aplicación o se cierre la sesión|
