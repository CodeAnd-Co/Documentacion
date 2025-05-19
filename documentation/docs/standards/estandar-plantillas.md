---
title: Estándar para crear plantillas
sidebar_position: 1
---
# 🧩 Estándar para crear nuevas plantillas

Este estándar te guía paso a paso para crear una nueva plantilla dentro de la organización. Su propósito es asegurar uniformidad, claridad y facilidad de uso para cualquier miembro del equipo, incluso si es su primer día.

## 🔙 Pasos previos para la definición de una nueva plantilla

Antes de redactar una plantilla, asegúrate de cumplir con los siguientes pasos:

1. Se siguió correctamente el proceso de [Definición de Ítems](/docs/next/procesos/PR2-definicion-items).
2. La plantilla propuesta es útil y relevante para la organización.
3. Se identificó qué tipo de archivo se requiere (archivo `.md`, presentación de Canva, documento en Google Docs, etc.).
4. Existe una carpeta de plantillas relacionada donde se debe ubicar la nueva plantilla.
5. En caso de que no exista una carpeta correspondiente, registra la nueva categoría en el índice general de plantillas.

## 😄 Las plantillas deben transmitir alegría

En Code&Co valoramos el bienestar y la alegría. Por ello, las plantillas deben reflejar ese espíritu:

### Uso de emojis

Utiliza emojis representativos que:

* Reflejen la esencia del contenido
* Sean consistentes con otras plantillas similares
* Faciliten la identificación visual rápida

**Ejemplos de uso adecuado:**

* 🧑‍🍳 o ⚙️ para procesos
* 📊 para reportes y análisis
* 👥 para documentos relacionados con equipos
* 🚀 para lanzamientos o proyectos nuevos

### Tono y lenguaje

* Escribe de forma clara y concisa, evitando jerga innecesaria
* Usa un tono empático y colaborativo
* Incluye ejemplos prácticos siempre que sea posible
* Mantén una estructura consistente con viñetas y encabezados

Consulta la [política de bienestar](/ruta/a/la/politica-de-bienestar) para más contexto sobre el estilo esperado.

## 📅 Versionamiento de las plantillas

Las plantillas deben seguir el estándar de versionamiento interno. Este historial **no debe ir dentro del contenido visible de la plantilla**, sino como metainformación en el archivo `.md` correspondiente al registro centralizado de plantillas.

## 🧪 Formato base para crear una nueva plantilla `.md`

> Copia y pega este bloque para redactar una nueva plantilla:

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

## 📱 Consideraciones para diferentes formatos

### Plantillas en Markdown (`.md`)

* Utiliza la sintaxis de Docusaurus cuando corresponda
* Incluye bloques de código con formato adecuado
* Aprovecha las admonitions (:::tip, :::info, etc.)

### Presentaciones (Canva, PowerPoint, etc.)

* Crea una versión de referencia en el repositorio oficial
* Incluye un archivo `.md` con instrucciones de uso
* Proporciona el enlace al archivo editable

### Documentos colaborativos (Google Docs, Notion, etc.)

* Configura los permisos adecuadamente
* Crea una plantilla maestra con restricciones apropiadas
* Documenta el proceso de "hacer una copia" o "usar plantilla"

## ℹ️ Recursos para creadores de plantillas

### Archivos descargables en Docusaurus

Para incluir archivos descargables en tus plantillas, sigue la [documentación oficial de Docusaurus sobre manejo de assets](https://docusaurus.io/docs/markdown-features/assets).

Ejemplo básico:

```md
[⬇️ Descargar plantilla](/assets/templates/nombre-plantilla.xlsx)
```

## 📚 Historial de Cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador**           |
    | -------------------------- | ---------------------- | --------------- | ------------------------------- |
    | **1.0**              | Creación del estandar | 18/05/2025      | Angel Mauricio Ramírez Herrera |
</details>
