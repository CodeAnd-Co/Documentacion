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

## Aclaraciones

### ¿Qué se entiende con Pair Programming?

Es un **método de programación** en el que dos desarrolladores trabajan juntos en el mismo código al mismo tiempo. Uno de ellos, conocido como "controlador" o "conductor", escribe el código, mientras que el otro, llamado "navegador", revisa cada línea de código a medida que se escribe, buscando errores y asegurándose de que el código sea correcto.

:::warning Importante

#### ¿Qué NO es pair programming?

:::

1. Una persona programa y la otra solo observa pasivamente.
2. Ambos están en la misma sala, pero trabajando en tareas distintas.
3. Uno le enseña al otro como en una clase.
4. Una persona dicta el código y la otra simplemente lo escribe sin entender.
5. Cada uno trabaja en su propio equipo y luego fusionan sus cambios.

---

## Proceso

| Fase                           | Descripción                                                                                                                                                                                                                                                                                                                                          | Responsable  | Meta y práctica específica del CMMI                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------- |
| **Guardado de datos**          | En la carpeta de drive de tu proyecto, crear una carpeta llamada Pair Programming (si no ha sido creada) y dentro de ella crear una copia de la plantilla y agregar el informe generado. Con el nombre: Sesion*Pair_Programming*(Fecha)_(Siglas Conductor) _(Siglas Navegante)                                                                       | Team Members | **VER, SP 2.3** (Analizar los datos de las revisiones entre pares)        |
| **Planificar sesiones**        | Definir en el Informe de Pair Programming la historia de usuario, tarea o componente a desarrollar donde se aplicará Pair Programming y declarar parejas que estarán involucradas en el proceso. Además de la fecha en que se realizó.                                                                                                               | Team Members | **VER, SP 1.1** Seleccionar los productos de trabajo para la verificación |
|                                | Definir y establecer objetivos de la sesión. Estos objetivos tienen que ver con criterios de aceptación o de identificación que se quieren aplicar durante la sesión.                                                                                                                                                                                | Team Members | **VER, SP 1.1** Seleccionar los productos de trabajo para la verificación |
| **Preparar el entorno**        | Asegurar el ambiente de desarrollo. Elegir entre hacerlo de manera colaborativa o en un solo dispositivo. Si es de manera colaborativa, elegir una herramienta adecuada para lograr visualizar el código de la pareja (Opciones recomendadas: [Live Share](https://visualstudio.microsoft.com/es/services/live-share/), Zoom, Google Meet o Discord) | Team Members | **VER, SP 1.2** (Establecer el entorno de verificación)                   |
| **Preparar el entorno**        | Dado que un miembro debe ser el responsable de la historia de usuario, en este caso no se haran prácticas de alternancia entre "conductor" y "navegador". Por lo tanto, define estos dos roles.                                                                                                                                                      | Team Members | **VER, SP 1.2** (Establecer el entorno de verificación)                   |
| **Ejecutar Pair Programming**  | Codificar en pareja, haciendo revisiones constantes y cumplimiento de estándares técnicos.                                                                                                                                                                                                                                                           | Team Members | **VER, SP 2.2** (Realizar las revisiones entre pares)                     |
| **Registrar hallazgos**        | Documentar problemas técnicos encontrados, decisiones tomadas, defectos y acciones correctivas realizadas. Registrar duración de la sesión. De encontrarse alguna acción correctiva, seguir el [Proceso de Acciones Correctivas](\docs\procesos\PR13-acciones-correctivas.md).                                                                       | Team Members | **MA, SP 1.1** (Establecer los objetivos de medición)                     |
| **Retroalimentación y mejora** | Analizar los datos obtenidos para ajustar prácticas de Pair Programming y encontrar oportunidades de mejora en el futuro. Respondiendo a las preguntas de **Retroalimentación** de la plantilla.                                                                                                                                                     | Team Members | **VER, SP 2.3** (Analizar los datos de las revisiones entre pares)        |

---

## Salidas

1. Pull Request del código fuente funcional desarrollado en sesiones de Pair Programming (si aplica).
2. Informe de sesión de Pair Programming completado.

---

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                          | **Fecha**  | **Colaborador**         |
| ------------------- | ---------------------------------------- | ---------- | ----------------------- |
| **1.0**             | Creación del proceso de Pair Programming | 26/04/2025 | Emiliano Gomez Gonzalez |
