---
title: Guía de uso de Markdown
sidebar_position: 2
---

# Guía de uso de Markdown

**Última actualización:** 16 de febrero de 2025

Docusaurus amplía las capacidades estándar de Markdown, permitiendo la inclusión de elementos interactivos y personalizados en tus documentos. A continuación, se detallan algunos de los elementos más comunes que puedes utilizar:

**1. Admoniciones (Alertas)**

Las admoniciones son bloques de contenido destacados que puedes utilizar para resaltar información importante, advertencias, notas, entre otros. Docusaurus facilita la creación de estas alertas mediante una sintaxis sencilla.

_Sintaxis:_

```markdown
:::tipo
Contenido de la admonición.
:::
```

Donde `tipo` puede ser: `note`, `tip`, `info`, `caution` o `danger`.

_Ejemplo:_

```markdown
:::note
Esta es una nota informativa.
:::
```

**2. Pestañas (Tabs)**

Para mostrar contenido en pestañas, puedes utilizar la siguiente estructura:

_Sintaxis:_

```markdown
import { Tabs, TabItem } from '@docusaurus/theme-common';

<Tabs>
  <TabItem value="opcion1" label="Opción 1">
  
  Contenido para la opción 1.
  
  </TabItem>
  <TabItem value="opcion2" label="Opción 2">
  
  Contenido para la opción 2.
  
  </TabItem>
</Tabs>
```

**3. Bloques de código con resaltado de sintaxis**

Docusaurus soporta bloques de código con resaltado de sintaxis. Puedes especificar el lenguaje de programación para obtener el resaltado adecuado.

_Sintaxis:_

````markdown
```javascript
function saludo() {
  console.log("¡Hola, mundo!");
}
```
````

````

**4. Inclusión de Componentes de React**

Gracias a MDX, puedes insertar componentes de React directamente en tus archivos Markdown.

*Sintaxis:*

```markdown
import MiComponente from './MiComponente';

<MiComponente />
````

**5. Tablas**

Puedes crear tablas utilizando la sintaxis estándar de Markdown.

_Sintaxis:_

```markdown
| Encabezado 1 | Encabezado 2 |
| ------------ | ------------ |
| Dato 1       | Dato 2       |
| Dato 3       | Dato 4       |
```

**6. Enlaces y referencias**

Para crear enlaces internos o externos, utiliza la siguiente sintaxis:

_Sintaxis:_

```markdown
[Texto del enlace](URL)
```

_Ejemplo:_

```markdown
[Ir a Google](https://www.google.com)
```

**7. Imágenes**

Para insertar imágenes, utiliza:

_Sintaxis:_

```markdown
![Texto alternativo](ruta/a/la/imagen.png)
```

**8. Citas**

Para agregar citas o bloques de citas:

_Sintaxis:_

```markdown
> Esta es una cita.
```

**9. Listas**

Puedes crear listas ordenadas y no ordenadas:

_Lista no ordenada:_

```markdown
- Elemento 1
- Elemento 2
- Elemento 3
```

_Lista ordenada:_

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

Para una guía más detallada sobre las características de Markdown en Docusaurus, puedes consultar la [documentación oficial](https://docusaurus.io/docs/markdown-features).

Además, para una comprensión más visual y práctica, te recomiendo el siguiente tutorial en video:

[![Construye un sitio de documentación con Docusaurus](https://img.youtube.com/vi/2R53Y7eP45k/0.jpg)](https://www.youtube.com/watch?v=2R53Y7eP45k)

Este video ofrece una explicación paso a paso sobre cómo utilizar Docusaurus para crear sitios de documentación efectivos.


---

## Historial de cambios

| **Tipo de versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0**             | Primera versión de la guía. | 16/02/2025 |   |
| **1.1**             |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |