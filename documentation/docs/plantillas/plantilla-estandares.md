---
title: 📐 | Plantilla para Estándares
---
# 📐 Plantilla para Estándares

Esta plantilla proporciona una estructura estandarizada para crear y documentar estándares técnicos y organizacionales dentro de la organización. Siguiendo este formato, se asegura que todos los estándares sean claros, aplicables y estén correctamente documentados para su implementación efectiva.

## 🎯 Objetivo

- Proporcionar un formato estándar para documentar estándares técnicos y organizacionales.
- Facilitar la implementación y verificación de criterios de calidad consistentes.
- Asegurar que todos los estándares documentados contengan la información esencial para su correcta aplicación.

## 📝 Contenido / Secciones sugeridas

- Objetivo: Explica el propósito del estándar.
- Artefactos en los que aplica: Lista los documentos, archivos o sistemas donde debe aplicarse.
- Estándares: Detalla los lineamientos específicos que deben seguirse.
- Ejemplos: Muestra casos de implementación correcta e incorrecta.
- Recursos relacionados: Enlaces a documentación complementaria.
- Historial de cambios: Registro de versiones y modificaciones.

## 🧩 Ejemplo de uso

Esta plantilla debe utilizarse para documentar estándares organizacionales como:

- Estándares de codificación
- Estándares de documentación
- Estándares de arquitectura
- Estándares de interfaz de usuario

```md
---
title: 🖥️ | Estándar de Nomenclatura de Variables
sidebar_position: 3
---

# 🖥️ Estándar de Nomenclatura de Variables

Este estándar establece las convenciones a seguir para nombrar variables en todos los proyectos de desarrollo de software de la organización, asegurando consistencia, legibilidad y mantenibilidad del código.

## 🎯 Objetivo

- Establecer reglas claras y consistentes para la nomenclatura de variables en el código.
- Mejorar la legibilidad y mantenibilidad del código a través de nombres significativos.
- Facilitar la colaboración entre equipos de desarrollo al seguir una convención común.

## 📑 Artefactos en los que aplica

* Código fuente en todos los lenguajes de programación
* Documentación técnica
* Comentarios en el código
* Nombres de constantes y variables de entorno

## 📋 Estándares

### Convenciones generales

- Las variables deben tener nombres descriptivos que reflejen su propósito.
- Utilizar inglés para todos los nombres de variables.
- Evitar abreviaturas ambiguas o poco comunes.

### Convención por tipo de variable

- **Variables locales**: Utilizar camelCase (ej. `userName`, `totalAmount`).
- **Constantes**: Utilizar UPPER_SNAKE_CASE (ej. `MAX_CONNECTIONS`, `API_TIMEOUT`).
- **Variables privadas**: Prefijo con guión bajo seguido de camelCase (ej. `_privateVariable`).
- **Variables booleanas**: Prefijo con "is", "has", o "should" (ej. `isActive`, `hasPermission`).

### Estándar para arreglos y colecciones

- Usar nombres en plural para indicar colecciones (ej. `users`, `productList`).
- Para iteradores, usar nombres significativos en lugar de `i`, `j`, `k` (ej. `userIndex`, `productIndex`).

## 📝 Ejemplos

### ✅ Correcto

const MAX_RETRY_COUNT = 3;
let isUserLoggedIn = false;
const userProfiles = getUserProfiles();

for (let profileIndex = 0; profileIndex < userProfiles.length; profileIndex++) {
  const currentProfile = userProfiles[profileIndex];
  processUserProfile(currentProfile);
}

### ❌ Incorrecto

const m = 3;
let flag = false;
const data = getData();

for (let i = 0; i < data.length; i++) {
  const x = data[i];
  process(x);
}

## 📎 Recursos relacionados

- [Guía de estilo de código completa](/docs/guias/codigo-estilo)
- [Herramienta de validación de estándares](/docs/herramientas/linter-config)
- [Plantilla para estándares](/docs/next/plantillas/plantilla-estandares)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0.0** | Creación inicial del estándar | 19/05/2025 | Angel Mauricio Ramírez Herrera |
</details>
```

## ©️ Bloque de código con la plantilla `.md`

```md
---
title: 📏 | [Nombre del Estándar]
sidebar_position: [Número]
---

# 📏 [Nombre del Estándar]

[Breve descripción del estándar y su importancia dentro de la organización]

## 🎯 Objetivo

- [Definir el propósito principal del estándar].
- [Explicar la necesidad que cubre o problema que resuelve].
- [Mencionar los beneficios esperados de su implementación].

## 📑 Artefactos en los que aplica

* [Artefacto/documento 1]: [Link (si aplica)]
* [Artefacto/documento 2]: [Link (si aplica)]
* [Artefacto/documento 3]: [Link (si aplica)]

## 📋 Estándares

### [Categoría o grupo de estándares 1]

- [Estándar 1]: [Descripción clara y verificable]
- [Estándar 2]: [Descripción clara y verificable]
- [Estándar 3]: [Descripción clara y verificable]

### [Categoría o grupo de estándares 2]

- [Estándar 1]: [Descripción clara y verificable]
- [Estándar 2]: [Descripción clara y verificable]
- [Estándar 3]: [Descripción clara y verificable]

## 📝 Ejemplos

### ✅ Correcto

[Ejemplo de implementación correcta del estándar]

### ❌ Incorrecto

[Ejemplo de implementación incorrecta del estándar]

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para estándares](/docs/next/plantillas/plantilla-estandares)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0.0** | Creación inicial del estándar. | [Fecha] | [Nombre de colaborador] |
</details>
```

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
    | **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
    | ------------------- | --------------- | --------- | --------------- |
    | **1.0.0** | Creación de la plantilla. | 06/03/2025 | Diego Antonio García Padilla |
    | **2.0.0** | Actualización al nuevo formato estándar | 19/05/2025 | Angel Mauricio Ramírez Herrera |
</details>