---
title: "RF5: Usuario selecciona modo claro/oscuro."  
sidebar_position: 6
---

# RF5: Usuario selecciona modo claro/oscuro.

**Última actualización:** 03 de abril de 2025

### Historia de Usuario

Yo como usuario quiero cambiar entre el modo claro y oscuro del sistema, y que mi elección se mantenga incluso al reiniciar la aplicación, para tener una experiencia visual consistente y personalizada.

  **Criterios de Aceptación:**
  - El sistema debe mostrar una opción en la configuración para alternar entre modo claro y modo oscuro.
  - El cambio debe aplicarse inmediatamente al seleccionar la opción (sin requerir reinicio).
  - La selección del tema debe guardarse automáticamente en las preferencias del usuario.
  - Al cerrar y reabrir la aplicación, el sistema debe cargar el último tema seleccionado.
  - Todos los componentes de la interfaz (botones, textos, fondos) deben adaptarse al tema activo sin errores (ej.: texto ilegible, contraste insuficiente).

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
