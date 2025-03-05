---
title: Manual de arquitectura
sidebar_position: 1
---

# Manual de arquitectura

**Última actualización:** 5 de marzo de 2025
**Versión:** 1.0

## Tipo de arquitectura de software

**Arquitectura elegida:** Arquitectura basada en capas (N-Tier)

### Evaluación y selección de diseño de arquitectura 

Justificación de la arquitectura: Dividir la arquitectura por capas nos permitirá mantener un manejo independiente de las diferentes partes importantes del sistema: UI, lógica del negocio y datos.

Propuestas alternativas:

- Monolítica
    - **Definición**: Con esta arquitectura todas las partes del sistema se encuentran definidas en un único código base y se ejecutan en un solo proceso.
    - **Características**:
        - **Interdependencia**: Al estar todo definido dentro de un mismo código, todos los elementos del mismo son interdependientes.
    - **Ventajas**:
        - **Simplicidad**: Desarrollar y desplegar el proyecto es más sencillo gracias a que todo está contenido en un solo código.
    - **Desventajas**:
        - **Dificultad para modificar**: Tener un código altamente interdependiente significa que al hacer una modificación, hay una alta probabilidad de que la misma tenga efectos inesperados.
        - **Errores complejos**: Tener un error en el código podría afectar a más de una parte o incluso a toda la aplicación.
- Arquitectura en capas
    - **Definición**: La arquitectura está dividida en varias capas con diferentes responsabilidades bien definidas. No se define la cantidad de capas que el proyecto debe tener.
    - **Características**: 
        - **Responsabilidades**: Cada capa de la aplicación se encarga de una tarea diferente (por ejemplo: IU, lógica de negocio, datos).
    - **Ventajas**:
        - **Código Ordenado**: Al solo tener código con ciertas funcionalidades en cada capa, este se vuelve más legible.
        - **Fácil de mantener**: Elimina interdependencias inesperadas en el código, por lo que el mantenimiento también es más fácil.
    - **Desventaja**:
        - **Rigidez**: Si un cambio en los requerimientos abarca más de una capa de la aplicación, el tiempo necesario para modificar el código puede volverse alto.

- Microservicios
- Basada en eventos
- Serverless
- Orientada a servicios (SOA)