---
title: Guía de estrategia de ramas
sidebar_position: 2
---

# Guía de estrategia de ramas

_Establece una estructura clara para la creación y gestión de ramas en los proyectos, definiendo cuándo y cómo crear ramas para nuevas funcionalidades, correcciones de errores y versiones de producción._

## 1. Convenciones de nomenclatura para las ramas

Una nomenclatura coherente facilita la identificación y gestión de las ramas. A continuación, se presenta una convención recomendada:

**Formato**:

```
<tipo>/<iniciales>_<referencia>_<descripción>
```

**Componentes**:

- **`<tipo>`**: Categoría de la tarea, como `feature`, `bugfix`, `chore`, `docs`, `refactor` o `test`.
- **`<iniciales>`**: Iniciales del desarrollador responsable de la rama.
- **`<referencia>`**: Identificador de la historia de usuario, ticket o referencia relevante. Si no existe, se puede utilizar `no_ref`.
- **`<descripción>`**: Breve descripción de la tarea o funcionalidad.

**Ejemplos**:

- Para una nueva funcionalidad desarrollada por Juan Pérez relacionada con la historia de usuario `US-101` que añade autenticación de dos factores:

  ```
  feature/JP_US-101_autenticacion-2-factores
  ```

- Para corregir un error identificado por María Gómez sin una referencia específica, relacionado con el formulario de registro:

  ```
  bugfix/MG_no_ref_corregir-formulario-registro
  ```

**Buenas prácticas adicionales**:

- **Uso de minúsculas y guiones bajos**: Mantener los nombres en minúsculas y utilizar guiones bajos (`_`) para separar los elementos dentro de cada segmento, mejorando la legibilidad.
- **Descripciones claras y concisas**: Asegurarse de que la `<descripción>` sea breve pero suficientemente descriptiva para entender el propósito de la rama.
- **Evitar caracteres especiales**: No utilizar caracteres especiales o espacios en los nombres de las ramas para prevenir posibles conflictos.

## 2. Flujo de trabajo recomendado

El **Gitflow** es una estrategia de ramificación que define roles claros para las diferentes ramas y establece procedimientos para su interacción. Este flujo de trabajo es especialmente útil en proyectos con ciclos de lanzamiento programados.

**Ramas principales**:

- **`main`**: Almacena el historial oficial de versiones en producción.
- **`develop`**: Sirve como rama de integración para funcionalidades en desarrollo.

**Ramas de soporte**:

- **Ramas de funcionalidad (`feature`)**: Se crean a partir de `develop` para desarrollar nuevas características. Una vez completadas, se fusionan de nuevo en `develop`.
- **Ramas de preparación de lanzamiento (`release`)**: Se crean a partir de `develop` cuando se considera que el conjunto de funcionalidades está listo para una nueva versión. Se utilizan para realizar pruebas finales, correcciones de errores y preparación de la documentación antes del lanzamiento. Una vez listas, se fusionan en `main` y `develop`.
- **Ramas de corrección rápida (`hotfix`)**: Se crean a partir de `main` para abordar problemas críticos en producción. Después de la corrección, se fusionan tanto en `main` como en `develop` para asegurar que la solución se refleje en futuras versiones.

**Flujo de trabajo**:

1. **Desarrollo de funcionalidades**: Los desarrolladores crean ramas `feature` desde `develop` para trabajar en nuevas características.
2. **Preparación de lanzamiento**: Una vez que las funcionalidades están completas, se crea una rama `release` desde `develop` para preparar la nueva versión.
3. **Lanzamiento**: La rama `release` se fusiona en `main` y se etiqueta con el número de versión correspondiente.
4. **Correcciones de errores**: Si se detectan errores críticos en producción, se crea una rama `hotfix` desde `main`, se corrige el error y se fusiona de nuevo en `main` y `develop`.

Implementar estas prácticas contribuirá a una gestión eficiente de las ramas y facilitará la colaboración dentro del equipo de desarrollo.

## 3. Procedimientos para la integración de cambios y manejo de conflictos

- **Integración continua**: Fusionar regularmente las ramas de funcionalidad en `develop` para detectar y resolver conflictos de manera temprana.
- **Revisiones de código**: Antes de fusionar cambios, realizar revisiones de código para mantener la calidad y coherencia del proyecto.
- **Resolución de conflictos**: En caso de conflictos durante la fusión, resolverlos en la rama correspondiente antes de completar la integración.

Implementar estas prácticas contribuirá a una gestión eficiente de las ramas y facilitará la colaboración dentro del equipo de desarrollo.

---

## Historial de cambios

| **Tipo de versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** |  Creación de la guía. | 16/02/2025 | Ángel Ramírez, Ian Estrada |
| **1.1** |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |
| **1.2** |  Implementar acciones correctivas.        |  27/04/2025   |  Max Toscano  |