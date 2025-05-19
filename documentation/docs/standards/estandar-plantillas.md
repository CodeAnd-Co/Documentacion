---
title: 📄 | Estándar para Plantillas
sidebar_position: 1
---

# 📄 Estándar para Plantillas

Este estándar guía la creación de nuevas plantillas dentro de la organización para asegurar **uniformidad**, **claridad** y **facilidad de uso**, promoviendo un entorno de colaboración accesible para todos, incluso nuevos integrantes del equipo.

## 🎯 Objetivo

- Establecer lineamientos claros para la creación de plantillas en distintos formatos.
- Asegurar la coherencia, utilidad y accesibilidad de las plantillas.
- Fomentar un lenguaje claro, empático y alineado con la cultura organizacional.

## 📑 Artefactos en los que aplica

* Plantillas en Markdown (`.md`): Usadas en documentación Docusaurus.
* Plantillas en Canva o PowerPoint: Usadas para presentaciones internas o formativas.
* Plantillas en Google Docs o Notion: Usadas para documentos colaborativos y formularios internos.

## 📋 Estándares

### 📄 Estructura general

- Las plantillas deben comenzar con un bloque `frontmatter` con `title` y `sidebar_position`.
- Todo archivo debe tener una sección de título visible con emoji representativo y un resumen inicial.
- Debe incluir la sección `🎯 Objetivo`, siempre redactada en viñetas.

### 😄 Estilo y tono

- Utilizar emojis consistentes y relevantes al tipo de documento.
- Mantener un lenguaje claro, empático y libre de jerga innecesaria.
- Incluir ejemplos prácticos y anotaciones cuando sea necesario.
- Seguir la política de bienestar para reflejar el espíritu de alegría y colaboración.

### 🧾 Versionamiento

- Toda plantilla debe tener su historial de cambios como bloque `<details>` al final del archivo `.md`.
- No incluir el historial dentro del contenido visible de la plantilla final (solo en el archivo de registro).

### 🧪 Formato base para `.md`

- Debe incluir un bloque de código con el formato de plantilla sugerido para reutilización.
- Incluir instrucciones de uso, ejemplos y secciones recomendadas.
- Usar admonitions (`:::tip`, `:::info`, `:::warning`) de forma adecuada.

### 📱 Consideraciones por tipo de plantilla

#### Markdown (`.md`)
- Respetar la sintaxis de Docusaurus.
- Usar emojis y admonitions correctamente.
- Incluir bloque descargable si aplica.

#### Presentaciones (Canva, PowerPoint)
- Mantener versión editable y otra de referencia.
- Documentar su uso en archivo `.md` adjunto.

#### Documentos colaborativos (Google Docs, Notion)
- Controlar permisos de edición y visualización.
- Documentar el proceso para duplicar o reutilizar.

## 📝 Ejemplos

### ✅ Correcto

```md
---
title: [Título de la plantilla]
sidebar_position: [Número de posición en la barra lateral]
---

# [🆎 Título de la plantilla con emoji adecuado]

Breve descripción de la utilidad de esta plantilla y cómo debe usarse dentro de la organización.

:::tip
Usa emojis para darle un toque amigable y alineado con la cultura de la organización.
:::

## 🎯 Objetivo

- [Describe brevemente el propósito de esta plantilla.]

:::info
Esta sección es **obligatoria**. Toda plantilla debe tener un objetivo claro y conciso.
:::

## 📝 Contenido / Secciones sugeridas

- [Aquí se listan las secciones que debe contener la plantilla, según su objetivo.]

:::tip
Incluye al menos los elementos que consideres indispensables para quien va a usar la plantilla. Puedes guiarte de otras plantillas existentes.
:::

## 🧩 Ejemplo de uso

- [Incluye un ejemplo si es necesario para clarificar el uso.]

:::info
Esta sección es **opcional**, pero altamente recomendable cuando la plantilla puede prestarse a diferentes interpretaciones.
:::

## ©️ Bloque de código con la plantilla `.md`

:::warning
Incluye aquí un bloque de código **solo si** la plantilla que estás creando está pensada para ser reutilizada directamente en Markdown.
:::

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)

## 📚 Historial de cambios
<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción**        | **Fecha**       | **Colaborador**                 |
    | ------------------- | ---------------------- | --------------- | ------------------------------- |
    | **0.0.0**           |   Descripción          | 00/00/0000      | Nombre Completo                 |
</details>
```

### ❌ Incorrecto

```md
# Documentación de entregables

Objetivo: hacer entregables.

Secciones: Las que veas necesarias.
```

> ❗ Falta estructura, frontmatter, emojis y claridad en redacción.

## 📎 Recursos relacionados

* [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
* [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
* [Plantilla para estándares](/docs/next/plantillas/plantilla-estandares)
* [Política de bienestar](/ruta/a/la/politica-de-bienestar)
* [Manejo de assets en Docusaurus](https://docusaurus.io/docs/markdown-features/assets)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>

| **Tipo de versión** | **Descripción**               | **Fecha**  | **Colaborador**                |
| ------------------- | ----------------------------- | ---------- | ------------------------------ |
| **1.0.0**           | Creación inicial del estándar | 18/05/2025 | Angel Mauricio Ramírez Herrera |

</details>