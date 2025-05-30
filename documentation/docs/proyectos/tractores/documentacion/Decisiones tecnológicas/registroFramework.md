---
title: Registro de decisiones arquitectónicas ElectronJS & NeutralinoJS
---

# Registro de decisiones arquitectónicas - ElectronJS & NeutralinoJS

---

### Seleccionar que tecnología vamos a usar
Status: Aceptado  
Encargados: Daniel Contreras Chávez, Daniel Queijeiro Albo  
Fecha: 10/03/2025

### Contexto y problema
***Una breve explicación acerca del problema a resolver***  
Necesitamos construir una aplicación de escritorio para nuestra solución a CNH que permita optimizar el acceso y la gestión de información clave sobre tractores en operación. La aplicación debe permitir generar reportes personalizados, configurar alertas basadas en parámetros y, potencialmente, realizar predicciones de mantenimiento.
### Impulsores de decisiones
***Lista de cosas que necesitas considerar para elegir una opción***  
La tecnología debe ser lo suficientemente robusta para soportar los requisitos que recabamos, incluyendo la generación de reportes, manipulación de datos y conexión con otros sistemas.
La tecnología debe estar basada en JavaScript para que el tiempo de capacitación sea el mínimo.
Debe permitir el desarrollo de aplicaciones de escritorio para Windows 11.
### Opciones consideradas
***Lista de las opciones con una pequeña descripción***  
#### NeutralinoJS
Framework ligero para crear aplicaciones multiplataforma usando HTML, CSS y JavaScript.
-  Ventajas:
    - Consumo mínimo de memoria y tamaño reducido (menos de 5MB).
    - No incluye un navegador completo, lo que lo hace más ligero.
    - Acceso a funcionalidades del sistema operativo mediante API.
- Desventajas:
    - Comunidad más pequeña y menos recursos disponibles.
    - Funcionalidades más limitadas para operaciones complejas.
    - Menor soporte para componentes de UI avanzados.
#### ElectronJS
Framework desarrollado por GitHub que permite crear aplicaciones de escritorio multiplataforma usando HTML, CSS y JavaScript.
- Ventajas:
	- Incluye Node.js para backend y Chromium para frontend.
	- Amplia documentación.
	- Compatible con la mayoría de bibliotecas npm.
- Desventajas:
	- Mayor consumo de recursos y tamaño de aplicación.
	- Mayor complejidad en la estructura de la aplicación.

### Resultado de la decisión
***Explicación acerca de cuál opción fue seleccionada***  
Seleccionamos ElectronJS debido a su capacidad de tener el backend integrado, para así poder realizar nuestros reportes localmente y no tener que guardar información sensible de nuestro socio en la base de datos.
### Consecuencias positivas
***Lista de consecuencias positivas que introduce la opción seleccionada***  
- Capacidad para implementar todas las funcionalidades requeridas por CNH, incluyendo la generación de reportes complejos y fórmulas personalizadas.
- Gran ecosistema de librerías disponibles para implementar gráficas, exportación a PDF y manipulación de datos.
- Conocimiento previo del equipo en JavaScript, reduciendo el tiempo de aprendizaje.
### Consecuencias negativas
***Lista de consecuencias negativas que introduce la opción seleccionada***  
- Vamos a tener que manejar dos backends, uno local y otro en la nube. El local se encargaría del funcionamiento de la aplicación y el de la nube a mandar peticiones al servidor del socio.
- La aplicación tiene mayor peso debido a la inclusión de Chromium y Node.js.
- Mayor consumo de recursos del sistema, aunque esto no debería ser problema dado que los equipos Dell de CNH deberían tener especificaciones adecuadas.

### Links
***Lista de recursos relevantes para aprender de cada opción***  
[Sitio oficial de NeutralinoJS](https://neutralino.js.org/)  
[Sitio oficial de ElectronJS](https://www.electronjs.org/)

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Primer registro de desiciones arquitectónicas | 10/03/2025 | Daniel Contreras Chávez <br/> Daniel Queijeiro Albo |