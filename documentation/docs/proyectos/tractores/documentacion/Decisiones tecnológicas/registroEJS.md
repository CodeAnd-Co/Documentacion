---
title: Registro de decisiones arquitectónicas Migrar a EJS
---

# Registro de decisiones arquitectónicas - Migrar a EJS

### Título de la decisión arquitectónica
Status: Aceptado
Encargados: Daniel Queijeiro Albo, Diego Isaac Fuentes Juvera
Fecha: 19-05-2025

### Contexto y problema
***Una breve explicación acerca del problema a resolver***  
La forma en que implementamos nuestra navegación entre vistas en ElectronJS originalmente está dificultando mucho el desarrollar requisitos funcionales.
Hicimos una prueba de concepto y si implementamos EJS en la lógica de carga de vistas se puede acelerar el desarrollo, pero esto significa:
1. Tener que hacer una forma reutilizable de precargar los EJS, ya que ElectronJS solo carga HTML y el EJS necesita de Node para renderizarse.
2. Refactorizar todas nuestras vistas a formato EJS.
3. Adaptar todos nuestros scripts a la nueva forma de cargar vistas. 

### Impulsores de decisiones
***Lista de cosas que necesitas considerar para elegir una opción***  
- ¿Cuánto nos va a realmente eficientar hacer la migración a EJS?
- ¿Es viable hacer una migración tan tarde en el proyecto?
- ¿Es mejor solo seguir con HTML?

### Opciones consideradas
***Lista de las opciones con una pequeña descripción, ventajas y desventajas de usar cada opción***  
#### EJS
Motor de plantillas que permite generar HTML dinámico usando JavaScript y sintaxis embebida.

**Ventajas:**
- Permite reutilización de componentes y layouts.
- Sintaxis familiar para desarrolladores JavaScript.
- Facilita la inyección de datos dinámicos.
- Reduce duplicación de código HTML.
- Mejor mantenibilidad del código.

**Desventajas:**
- Requiere configuración adicional en ElectronJS.
- Necesita refactorización completa de vistas existentes.
- Curva de aprendizaje para el equipo.
- Dependencia adicional en el proyecto.

#### HTML
Continuar con archivos HTML estáticos como se implementó originalmente.

**Ventajas:**
- No requiere cambios en la arquitectura actual.
- Funciona directamente con ElectronJS.
- Sin curva de aprendizaje adicional.

**Desventajas:**
- Alta duplicación de código.
- Dificultad para mantener consistencia en la UI.
- Desarrollo más lento de nuevas características.
- Navegación entre vistas compleja.

### Resultado de la decisión
***Explicación acerca de cuál opción fue seleccionada***  
Decidimos hacer la migración a EJS por las múltiples maneras en que nos ayudará a acelerar el desarrollo. Vemos más viable liberar el MVP tomando una semana para refactorizar todo a EJS que seguir con nuestro HTML complicado.

### Consecuencias positivas
***Lista de consecuencias positivas que introduce la opción seleccionada***  
- Aceleración significativa en el desarrollo de nuevas vistas.
- Mejor reutilización de componentes UI (headers, footers, menú).
- Código más mantenible y organizado.
- Facilita la implementación de temas y estilos consistentes.
- Reducción de duplicación de código HTML.
- Mayor flexibilidad para inyectar datos dinámicos en las vistas.

### Consecuencias negativas
***Lista de consecuencias negativas que introduce la opción seleccionada***  
- Tiempo invertido en refactorización (aproximadamente 1 semana).
- Posibles bugs introducidos durante la migración.
- Complejidad adicional en el proceso de build.
- Dependencia nueva que debe ser mantenida.
- Posible impacto en el rendimiento por el proceso de renderizado.

### Links
***Lista de recursos relevantes para aprender de cada opción***  
- [Documentación oficial de EJS](https://ejs.co/).
---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Registrar decisión | 30/05/2025 |  Daniel Queijeiro Albo |