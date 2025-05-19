---
title: ⭐ | Estandar de Versionamiento
sidebar_position: 2
---

# ⭐ Estandar de Versionamiento

Este estándar define cómo versionar documentos y artefactos dentro de la organización para asegurar trazabilidad, transparencia y colaboración efectiva entre múltiples participantes. La aplicación constante de este estándar evita errores, conflictos de versiones y facilita auditorías de cambios.

## 🎯 Objetivo

- Establecer una convención clara para el versionamiento de documentos y artefactos.
- Prevenir conflictos derivados de modificaciones simultáneas entre distintos colaboradores.
- Facilitar el seguimiento de cambios, revisiones y mejoras continuas de la documentación.

## 📑 Artefactos en los que aplica

* Documentación técnica compartida
* Documentación de proyectos
* Documentación externa a la wiki
* Procesos, Guías, Plantillas, Políticas, Recursos y Estandares de la wiki

## 📋 Estándares

### 🧭 Convención de Versionamiento

El esquema de versionamiento sigue el formato **X.Y.Z**, donde:

- **Versión Mayor (`X.0.0`)**  
  Cambios significativos que afectan la estructura o el propósito del documento. Por ejemplo: secciones eliminadas o añadidas, o modificaciones que alteran el uso original.

- **Versión Menor (`1.Y.0`)**  
  Cambios relevantes pero no disruptivos. Incluyen ajustes de contenido, redacción técnica o ampliaciones menores que no alteran la intención global del documento.

- **Versión de Revisión o Parche (`1.0.Z`)**  
  Cambios triviales o de corrección, como errores ortográficos, formato, tipografías, enlaces rotos, etc.

El historial debe registrarse **al final del documento** bajo una sección titulada `## 📚 Historial de cambios`.

### 🧾 Registro del Historial

- El historial de cambios debe presentarse en una tabla con las siguientes columnas:
  - Tipo de versión (formato X.Y.Z)
  - Descripción clara y concisa
  - Fecha (formato DD/MM/AAAA)
  - Colaboradores participantes

- Toda modificación, por mínima que sea, debe reflejarse en una nueva entrada del historial.

- Se recomienda usar formato Markdown para facilitar visualización y consistencia.

### 📘 Versionamiento de la Wiki (Docusaurus)

Cada vez que se genera una nueva versión del sitio de documentación en Docusaurus, se debe aplicar el estándar de versionamiento semántico `X.Y.Z`, tomando en cuenta la magnitud y el origen del cambio. Este versionamiento permite mantener múltiples versiones de la wiki en paralelo, facilitando auditorías, trazabilidad histórica y estabilidad documental.

#### 🧭 ¿Cuándo se debe crear una nueva versión de la wiki?

| Escenario                             | Nivel de versión | Ejemplo     | Justificación                                                      |
|--------------------------------------|------------------|-------------|--------------------------------------------------------------------|
| Se realiza un **SCAMPI**             | Mayor (`X.0.0`)  | `v2.0.0/`   | Cambios estructurales importantes en procesos o estándares.        |
| Se realiza una **auditoría interna** | Menor (`1.Y.0`)  | `v2.1.0/`   | Ajustes o ampliaciones que no modifican la estructura general.     |
| Se agrega un documento o corrige algo menor | Revisión o parche (`1.0.Z`) | `v2.1.1/` | Nuevos documentos, correcciones ortográficas, cambios triviales.   |

> 📌 **Nota importante:** Toda vez que se publique o modifique documentación en `/docs/next/`, se debe evaluar si es necesario crear una nueva versión estable. Esta nueva versión se debe generar usando el comando oficial de Docusaurus (`npm run docusaurus docs:version <x.y.z>`) y seguir los lineamientos del estándar de versionamiento.

#### 📁 Ejemplos de rutas generadas

- `/docs/v1.0.0/`: Versión inicial de la wiki.
- `/docs/v2.0.0/`: Reestructuración general posterior a un SCAMPI.
- `/docs/v2.1.0/`: Cambios tras una auditoría interna.
- `/docs/v2.1.1/`: Corrección de errores menores o incorporación de nuevo documento.


Docusaurus soporta múltiples versiones automáticamente si se sigue esta convención.
> - Para más información, consulta la política de versionamiento.
> - Si necesitas crear una nueva versión de la wiki, consulta la [Guía de versionamiento en Docusaurus](https://docusaurus.io/docs/versioning).

## 📝 Ejemplos

### ✅ Correcto

#### 🔴 Versión mayor

```markdown
## 📚 Historial de cambios

| **Versión** | **Descripción**                                   | **Fecha**   | **Colaborador**             |
|-------------|---------------------------------------------------|-------------|-----------------------------|
| **2.0.0**   | Reestructura total del documento; nuevas secciones agregadas. | 15/03/2025  | Ana Torres, Luis Herrera    |

````

#### 🟠 Versión menor

```markdown
## 📚 Historial de cambios

| **Versión** | **Descripción**                                  | **Fecha**   | **Colaborador**     |
|-------------|--------------------------------------------------|-------------|---------------------|
| **1.3.0**   | Agregada nueva subsección "Alcance" al documento | 22/03/2025  | Ricardo Mendoza     |

````
#### 🟡 Versión de revisión o parches

```markdown
## 📚 Historial de cambios

| **Versión** | **Descripción**                          | **Fecha**   | **Colaborador**  |
|-------------|------------------------------------------|-------------|------------------|
| **1.2.1**   | Corrección ortográfica en sección Objetivo | 27/03/2025  | Gabriela Salinas |

````

### ❌ Incorrecto

#### 🔴 Versión mayor

```markdown
## Cambios

| **Versión** | **Descripción**         | **Fecha** | **Colaborador** |
|-------------|-------------------------|-----------|-----------------|
| **1.2.0**   | Documento completamente reescrito. | 15/03/2025 | Ana             |
```

> ❌ Problemas:
>
> * El cambio amerita un aumento de versión mayor, no menor.
> * Descripción ambigua: no se detalla qué fue reescrito.
> * Falta apellido del colaborador.

#### 🟠 Versión menor

```markdown
## Cambios

| **Versión** | **Descripción**     | **Fecha**   | **Colaborador** |
|-------------|---------------------|-------------|-----------------|
| **2.0.0**   | Se añadió un ejemplo. | 22/03/2025  | Ricardo         |

```

> ❌ Problemas:
>
> * El cambio es menor, no mayor.
> * Descripción demasiado genérica.
> * Falta el apellido del colaborador.

#### 🟡 Versión de revisión o parches

```markdown
## Cambios

| **Versión** | **Descripción**         | **Fecha**   | **Colaborador** |
|-------------|-------------------------|-------------|-----------------|
| **1.2.0**   | Se corrigió una palabra. | 27/03/2025  | Gabriela        |

```

> ❌ Problemas:
>
> * Se usó versión menor para un simple parche.
> * La descripción no especifica qué palabra o dónde.
> * Falta apellido del colaborador.

## 📎 Recursos relacionados

* [Estándar para crear nuevas plantillas](/docs/standards/estandar-plantillas)
* [Definición de Ítems](/docs/procesos/PR2-definicion-items)
* [Plantilla para estándares](/docs/plantillas/plantilla-estandares)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Versión** | **Descripción**                                                                 | **Fecha**     | **Colaborador**                        |
|-------------|----------------------------------------------------------------------------------|---------------|----------------------------------------|
| **1.0.0**   | Creación de la guía de historial de cambios.                                    | 03/03/2025    | Daniel Contreras, Rommel Toledo        |
| **2.0.0**   | Sustitución de la guía por el nuevo estándar de versionamiento documental.      | 03/03/2025    | Miguel Ángel, Diego Alfaro             |
| **2.0.1**   | Ajuste del formato de fecha (estandarización visual).                           | 18/04/2025    | Diego Fuentes                          |
| **2.1.0**   | Inclusión de acciones correctivas para controles de cambios.                    | 26/04/2025    | Max Toscano                            |
| **2.1.1**   | Aclaración sobre los momentos en que se debe aplicar el versionamiento.         | 13/05/2025    | Daniel Contreras Chávez                |
| **3.0.0**   | Cambio completo en el esquema de versionamiento utilizado en los documentos.    | 19/05/2025    | Angel Mauricio Ramírez Herrera         |
</details>