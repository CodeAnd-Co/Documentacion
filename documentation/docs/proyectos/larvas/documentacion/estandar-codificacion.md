---
title: 🧑‍💻 | Estándar de Codificación General
sidebar_position: 4
---

# 🧑‍💻 Estándar de Codificación General

Este documento establece una serie de normas y buenas prácticas de codificación para mantener consistencia, claridad y calidad en el código fuente del proyecto de Technebrios dentro de la organización.

## 🎯 Objetivo

- Garantizar un estilo de codificación uniforme entre los desarrolladores.
- Prevenir errores comunes y facilitar el mantenimiento del código.
- Asegurar que el código sea legible, escalable y comprensible para cualquier miembro del proyecto.

## 📑 Artefactos en los que aplica

- Scripts de código.

## 📋 Estándares

### 🧠 Convenciones de nomenclatura

- Los **nombres de variables** deben estar en **español** utilizando `camelCase`.
- Las **clases o constructores** deben nombrarse en `PascalCase`.
- Los **nombres de archivos** deben estar en español en `camelCase`, excepto términos específicos de arquitectura como `Controller`, `Service`, etc.
- Los **nombres de variables** deben tener **al menos 3 caracteres**.

### ⚙️ Declaración de variables

- En JavaScript, se debe usar `let` o `const`. **Nunca usar `var`**.
- Agrupar `let` y `const` si solo se están declarando, en bloques separados por tipo:

```js
// ✅ Correcto
const goSportsTeam = true;
const items = getItems();

let dragonball;
let i;
let length;

// ❌ Incorrecto
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;
```

### 🧾 Funciones

- Los **parámetros con valores por defecto** deben ir al final de la lista de parámetros.

```js
// ✅ Correcto
function handleThings(name, opts = {}) {}

// ❌ Incorrecto
function handleThings(opts = {}, name) {}
```

### 🔒 Buenas prácticas

- No utilizar `eval()` bajo ninguna circunstancia.
- No usar **importaciones generales** (como `import * as X from '...'`).
- Las **importaciones deben colocarse al inicio** del archivo, antes de cualquier otro código.
- No usar **leading commas** (comas antes de los elementos).
- Las líneas de código no deben exceder **150 caracteres**.
- Se deben usar **comillas simples** para definir `Strings`.

## 📝 Ejemplos

### ✅ Correcto

```js
import { obtenerUsuario } from "./servicios/usuarioService";

const mensaje = "Hola";
let contador = 0;

function saludarUsuario(nombre, opciones = {}) {
  console.log(`Hola, ${nombre}`);
}
```

### ❌ Incorrecto

```js
import * as servicios from "./servicios";

var mensaje = "Hola";

function saludarUsuario(opciones = {}, nombre) {
  eval("console.log('Hola')");
}
```

## 📎 Recursos relacionados

- [Plantilla para estándares](/docs/next/plantillas/plantilla-estandares)
- [Guía de estilo de JavaScript (Airbnb)](https://github.com/airbnb/javascript)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Tipo de versión** | **Descripción**                      | **Fecha**     | **Colaborador**                  |
|---------------------|--------------------------------------|---------------|----------------------------------|
| **1.0.0**           | Creación inicial del estándar de codificación para Technebrios.       | 30/05/2025    | Emiliano Gomez Gonzalez   |
</details>
```
