---
title: Guía de codificación de TracTech
sidebar_position: 0
---

# Guía de codificación de TracTech

---

### Objetivo
El proósito de la guía es documentar la forma de trabajo de TracTech, además de clarificar las tecnologías que se utilizan y como el equipo desempeña sus tareas.

### Estructura
El proyecto cuenta actualmente con dos repositorios, **App-Local-TracTech** y el repositorio **Backend-Desacoplado-TracTech**.

Ambos repositorios están configurados para prevenir pushes directos a ramas protegidas, como: Main, Staging y Develop. Utilizamos Pull Requests como estrategia para mantener el repositorio actualizado, al hacer un PR el desarrollador necesita solicitar una revisión de algún otro miembro del equipo y asegurarse de usar la [plantilla de PR](plantillaPR.md) del equipo. Quien haga la revisión debe verificar que el código dentro del Pull Request cumpla con la [checklist de codificación](https://docs.google.com/document/d/1ItP965B7cFppIUX3RPXg_ZuUiYZzSuGs1b5bMw2-ZpQ/edit?tab=t.0#heading=h.fhau7kjl46pa), además de los [estándares de estilo](../../../standards/general/).

Asimismo, el repositorio de Github ejecutará pruebas de estilo para asegurar su seguimiento.

### Tecnologías
#### Front-end
El proyecto es una página web encapsulada en el framework llamado "ElectronJS". Utilizamos HTML, JavaScript y CSS. El proyecto **NO** utiliza un framework de estilo, como consecuencia los archivos relacionados al estilo pueden llegar a ser muy voluminosos y abrumadores, si está perdido, consulte a un miembro.

#### Back-end
El backend está basado en Node.js y la librería de express para el manejo de peticiones desde el front-end.

### Arquitectura
El patrón de arquitectura que se está utilizando para el front-end es CLEAN, donde se divide cada funcionalidad en front y back. El front está relacionado a la interfaz de usuario y la lógica para editarla, mientras que el back está orientado a mandar peticiones al backend desacoplado.

El patrón de arquitectura que se utiliza en el backend es MVC, donde la estructura inicial está dividida por modulo de la aplicación.

Utilizamos una aquitectura cliente servidor con un solo servidor alojado en AWS, el servidor es un t4g.medium, que cuenta con dos núcleos de procesamiento y 4 Gb de RAM.

Estamos utilizando MySQL como administrador de bases de datos, en el que intentamos guardar lo menos posible del usuario para respetar la confidencialidad del socio formador. 

### Tutorial de desarrollo
Aquí se encuentra un [tutorial de desarrollo](https://docs.google.com/document/d/1y5JGth2MZl87e25fxkxWlEw_Tq4ujgkLLAUwtf6xBcA/edit?tab=t.0) para los nuevos integrantes de TracTech
### Historial de Cambios


| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación del documento   | 8/5/25  | Juan Pablo Chávez Leal y Daniel Queijeiro Albo  |
| **1.1**             | Se agregó el tutorial de desarrollo | 13/05/2025 | Juan Pablo Chávez Leal |
