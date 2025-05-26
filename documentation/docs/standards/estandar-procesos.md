---
title: ⚙️ | Estándar para la modificación o creación de procesos
sidebar_position: 3
---
# ⚙️ Estándar para la modificación o creación de procesos

Establece los criterios para determinar si una modificación a un proceso existente es suficiente o si debe crearse uno nuevo. Su correcta aplicación asegura la coherencia, trazabilidad y vigencia de los procesos documentados en la organización.

## 🎯 Objetivo

- Definir un marco de decisión claro entre modificar o reemplazar un proceso existente.
- Evitar alteraciones sustanciales no controladas que puedan comprometer la integridad del proceso.
- Facilitar la trazabilidad de cambios y asegurar la alineación con los objetivos organizacionales.

## 📑 Artefactos en los que aplica

* Procesos documentados: [procesos](/docs/category/procesos/)
* Plantillas de procesos: [plantilla de procesos](/docs/plantillas/plantilla-procesos)
* Historial de cambios: Incluido en cada pull request del repositorio correspondiente.

## 📋 Estándares

### 🔍 Identificación de necesidad

- **Evaluar el cumplimiento parcial** del proceso actual frente a los nuevos requerimientos.
- **Analizar el porcentaje de actividades afectadas** por los cambios (mayor o menor al 50%).
- **Verificar si el propósito original del proceso permanece vigente**.
- **Identificar si se incorporan nuevos elementos clave**: herramientas, roles o metodologías no contempladas previamente.
- **Detectar la inclusión de nuevos stakeholders** que requieran estructuras diferenciadas.

### 🛠️ Modificación de procesos existentes

- Se permite cuando los cambios no alteran la estructura ni el objetivo del proceso.
- Puede implicar la actualización de actividades, responsables o herramientas, siempre que el flujo esencial se mantenga.
- La documentación base debe seguir siendo válida con ajustes menores.

#### Cambios mínimos permitidos

- Correcciones de redacción, formato o estilo.
- Ajustes en la descripción de actividades sin modificar su lógica.
- Inclusión de pasos opcionales que no afecten la secuencia general.
- Mejoras en claridad, consistencia o eficiencia documental.

#### Cambios máximos permitidos

- Adición o eliminación de hasta el 50% de las actividades del proceso.
- Reasignación de roles sin alterar responsabilidades clave.
- Integración de nuevas herramientas sin modificar sustancialmente el flujo del proceso.

### 🆕 Creación de un nuevo proceso

- Cuando el cambio transforma completamente la lógica o el propósito del proceso existente.
- Si se atiende a un stakeholder nuevo con requerimientos distintos.
- Cuando el proceso actual se considera obsoleto o no aplicable.
- En casos de fusión de procesos o por cambios regulatorios significativos.

## 📝 Ejemplos

### ✅ Correcto

> Se desea agregar dos actividades y actualizar el nombre de un rol en un proceso vigente, sin alterar su objetivo ni su flujo general.

✅ Se modifica el proceso existente, manteniendo su número de versión con incremento menor (por ejemplo, de 2.0.0 a 2.1.0).

---

### ❌ Incorrecto

> Se necesita reemplazar el 70% de las actividades, cambiar el propósito del proceso y añadir nuevos actores que no estaban contemplados.

❌ Se modifica el proceso actual en lugar de crear uno nuevo, lo que genera ambigüedad e inconsistencia documental.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para estándares](/docs/next/plantillas/plantilla-estandares)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Tipo de versión** | **Descripción**                   | **Fecha**   | **Colaborador**                                                   |
|---------------------|-----------------------------------|-------------|-------------------------------------------------------------------|
| **1.0.0**           | Creación inicial del estándar.    | 23/03/2025  | Galo Alejandro del Río Viggiano <br/> Ian Julián Estrada Castro  |
| **1.1.0**           | Corregir redacción y estilo.    | 26/05/2025  | Angel Mauricio Ramírez Herrera  |

</details>
