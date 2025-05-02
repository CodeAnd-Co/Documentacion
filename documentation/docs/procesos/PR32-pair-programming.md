---
title: PR32 Pair Programming
sidebar_position: 32
---

# Proceso de Pair Programming

---

## Objetivo

- Establecer un proceso estandarizado de Pair Programming como parte del desarrollo técnico, con el fin de fomentar la colaboración, mejorar la calidad del código y facilitar la transferencia de conocimiento entre desarrolladores.

---

## Entradas

1. Historia de usuario.
2. [Plantilla de Informe de Pair Programming](https://docs.google.com/document/d/1-EaWhSb_dq-qSsKXmSnqfM8dyCkDDWdrHhIf6peLZOQ/edit?usp=sharing)
3. Entorno de desarrollo y herramientas de colaboración configuradas.

---

## Proceso

| Fase                               | Descripción                                                                                                                                                                                                                                                                            | Responsable            | Meta y práctica específica del CMMI                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Planificar sesiones**            | Definir en el Informe de Pair Programming la historia de usuario, tarea o componente a desarrollar donde se aplicará Pair Programming y declarar parejas que estarán involucradas en el proceso. Además de la fecha en que se realizó.                                                 | Team Members           |      **VER, SP 1.1** Seleccionar los productos de trabajo para la verificación                                     |
|                                    | Definir y establecer objetivos de la sesión.                                                                                                                                                                                                                                        | Team Members           |     **VER, SP 1.1** Seleccionar los productos de trabajo para la verificación                                         |
| **Preparar el entorno**       | Asegurar el ambiente de desarrollo. Elegir entre hacerlo de manera colaborativa o en un solo dispositivo. Si es de manera colaborativa, elegir una herramienta adecuada para lograr visualizar el código de la pareja (Opciones recomendadas: [Live Share](https://visualstudio.microsoft.com/es/services/live-share/), Zoom, Google Meet o Discord) | Team Members           | **VER, SP 1.2** (Establecer el entorno de verificación)                            |
| **Ejecutar Pair Programming**      | Codificar en pareja, aplicando prácticas de alternancia de conductor/copiloto, revisiones constantes y cumplimiento de estándares técnicos.                                                                                                                                     | Team Members           | **VER, SP 2.2** (Realizar las revisiones entre pares)                                  |
| **Registrar hallazgos**            | Documentar problemas técnicos encontrados, decisiones tomadas, defectos y acciones correctivas realizadas.                                                                                                                                                                             | Team Members           | **MA, SP 1.1** (Establecer los objetivos de medición)                                      |
| **Revisión técnica de resultados** | Revisar los entregables (código) generados en sesiones de Pair Programming, identificando oportunidades de mejora.                                                                                                                                                                     | QA, Architecture Owner |  |
| **Retroalimentación y mejora**     | Analizar los datos obtenidos para ajustar prácticas de Pair Programming y encontrar oportunidades de mejora en el futuro.                                                                                                                                                              | Team Members           |   **VER, SP 2.3** (Analizar los datos de las revisiones entre pares)                                                                                           |
| **Guardado de datos**              | En la carpeta de drive de tu proyecto, crear una carpeta llamada Pair Programming (si no ha sido creada) y ahi agregar el informe generado. Con el nombre: Sesion Pair-Programming < Fecha > < Siglas del miembro 1 > < Siglas del miembro 2 >                                           | Team Members           |    **VER, SP 2.3** (Analizar los datos de las revisiones entre pares)                                                                                              |

---

## Salidas

1. Pull Request del código fuente funcional desarrollado en sesiones de Pair Programming (si aplica).
2. Informe de sesión de Pair Programming (decisiones tomadas, evidencia fotografica (opcional), defectos encontrados, correcciones aplicadas).

---

## Historial de Cambios

| **Tipo de Versión**     | **Descripción**                          | **Fecha**  | **Colaborador**         |
| ----------------------- | ---------------------------------------- | ---------- | ----------------------- |
| **1.0** | Creación del proceso de Pair Programming | 26/04/2025 | Emiliano Gomez Gonzalez |
