---
title: 📐 | PR35 Diseño de Software
sidebar_position: 37
---

# 📐 Proceso de Diseño de Software

Este proceso establece las actividades, responsabilidades y directrices para realizar el diseño técnico de un proyecto de software, asegurando que la solución propuesta sea escalable, mantenible y cumpla con los requisitos establecidos.

## 🎯 Objetivo

- Establecer un proceso estandarizado para el diseño de software que garantice la creación de arquitecturas robustas, componentes bien definidos e interfaces claras que satisfagan los requisitos funcionales y no funcionales del proyecto.

## 📥 Entradas

1. Documento de Especificación de Requisitos (SRS).
2. Historias de usuario.
3. Restricciones técnicas y de negocio.
4. Estándares de arquitectura organizacional.
5. Análisis de riesgos técnicos.

## ⚙️ Proceso

| Fase | Descripción | Responsable | Meta y práctica específica del CMMI |
| ---- | ----------- | ----------- | ----------------------------------- |
| **Análisis de Requisitos** | Revisar y analizar los requisitos funcionales y no funcionales para identificar componentes principales, restricciones técnicas y decisiones arquitectónicas clave. | Encargado del diseño / Architecture Owner | **RD, SP 1.1** (Desarrollar el entendimiento con el cliente de los requisitos), **TS, SP 1.1** (Desarrollar soluciones alternativas y criterios de selección) |
| **Diseño de Arquitectura** | Definir la arquitectura de alto nivel del sistema: <br/>- Seleccionar patrones arquitectónicos (MVC, microservicios, etc.) <br/>- Definir componentes principales y sus interacciones <br/>- Especificar tecnologías y frameworks a utilizar <br/>- Crear diagramas de arquitectura | Arquitecto de Software | **TS, SP 2.1** (Diseñar la solución), **TS, SP 2.2** (Establecer un paquete de datos técnicos) |
| **Diseño de Componentes** | Detallar el diseño de cada componente del sistema: <br/>- Definir interfaces <br/>- Documentar patrones de diseño a aplicar | Encargado del diseño / Architecture Owner | **TS, SP 2.3** (Diseñar interfaces usando criterios establecidos), **TS, SP 2.4** (Realizar análisis de hacer, comprar o reutilizar) |
| **Diseño de Base de Datos** | Crear el modelo de datos (MER, MR, diccionario de datos): <br/>- Diseñar esquema de base de datos <br/>- Definir tablas, relaciones e índices | Encargado del diseño / Architecture Owner | **TS, SP 2.1** (Diseñar la solución), **CM, SP 1.1** (Identificar ítems de configuración) |
| **Diseño de Interfaces de Usuario** | Diseñar la experiencia e interfaz de usuario: <br/>- Crear wireframes y mockups <br/>- Definir flujos de navegación <br/>- Especificar guías de estilo y componentes UI <br/>- Validar accesibilidad y usabilidad | Diseñador UX/UI | **TS, SP 3.1** (Establecer criterios de interfaz), **VAL, SP 1.1** (Seleccionar productos para validación) |
| **Validación del Diseño** | Revisar y validar el diseño completo: <br/>- Realizar revisiones técnicas con el equipo <br/>- Verificar cumplimiento de requisitos <br/>- Evaluar riesgos técnicos <br/>- Aprobar el diseño para implementación | PM / Architecture Owner / Stakeholders | **VER, SP 1.2** (Realizar revisiones entre pares), **TS, SP 3.2** (Evaluar soluciones alternativas) |
| **Documentación** | Consolidar toda la documentación de diseño: <br/>- Agregar el diseño a la wiki (Matriz RTM, manual de arquitectura, estrategia técnica, MER, MR) | Encargado del diseño / Architecture Owner / Equipo de Desarrollo | **TS, SP 2.2** (Establecer un paquete de datos técnicos), **CM, SP 1.3** (Crear o liberar líneas base) |

## 📤 Salidas

1. Diagramas de arquitectura y componentes.
2. Modelo de base de datos.
3. Prototipos de interfaz de usuario.
4. Matriz de trazabilidad requisitos-diseño.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](../standards/estandar-plantillas.md)
- [Definición de Ítems](../procesos/PR2-definicion-items.md)
- [Plantilla para procesos](../plantillas/plantilla-procesos.md)
- [Proceso de Especificación de Requisitos](../procesos/PR11-trazabilidad-requisitos.md)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0.0** | Creación inicial del proceso de diseño de software. | 05/06/2025 | Daniel Contreras Chávez |
</details>