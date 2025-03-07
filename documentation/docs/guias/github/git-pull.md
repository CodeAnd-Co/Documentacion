---
title: Guía de Solicitudes de Extracción
sidebar_position: 3
---

# Guía de Solicitudes de Extracción

**Última actualización:** 7 de marzo de 2025

_Detalla el proceso para crear, revisar y aprobar pull requests, fomentando una colaboración efectiva y asegurando la calidad del código antes de su integración._

## Criterios para la Creación de Pull Requests

1. **Tamaño y Enfoque**: Limita las pull requests a cambios pequeños y enfocados. Esto facilita una revisión más rápida y reduce la posibilidad de introducir errores.

2. **Descripciones Claras**: Proporciona títulos y descripciones detalladas que expliquen el propósito de los cambios, los archivos modificados y cualquier contexto relevante.

3. **Adherencia a Convenciones de Estilo**: Asegúrate de que el código siga las guías de estilo y convenciones del proyecto para mantener la coherencia.

4. **Documentación Actualizada**: Si es necesario, actualiza la documentación relacionada con los cambios realizados.

## Checklist para Revisores (Code Review)

1. **Comprensión del Propósito**: Verifica que el propósito de la pull request esté claramente definido y que los cambios sean coherentes con los objetivos del proyecto

2. **Calidad del Código**: Evalúa la legibilidad, estructura y adherencia a las convenciones de estilo del código.

3. **Cobertura de Pruebas**: Asegúrate de que existan pruebas adecuadas que validen los cambios y que todas las pruebas pasen correctamente.

4. **Seguridad**: Revisa el código en busca de posibles vulnerabilidades de seguridad y asegúrate de que se sigan las mejores prácticas de seguridad.

## Procedimientos para Pruebas y Validación Antes de la Fusión

1. **Ejecución de Pruebas**: Antes de fusionar, ejecuta todas las pruebas para garantizar que los cambios no introduzcan errores.

2. **Pruebas Manuales**: Si es necesario, realiza pruebas manuales para validar escenarios que no estén cubiertos por las pruebas descritas.

3. **Revisión de Dependencias**: Verifica que las dependencias del proyecto estén actualizadas y que no se hayan introducido vulnerabilidades.

4. **Confirmación de Documentación**: Asegúrate de que cualquier documentación relacionada esté actualizada y refleje los cambios realizados.

5. **Aprobación Formal**: Una vez que todas las pruebas hayan pasado y la revisión haya sido completada, obtén la aprobación formal de los revisores antes de proceder con la fusión.

Implementar estas prácticas garantizará una gestión efectiva de las solicitudes de extracción, promoviendo una colaboración eficiente y manteniendo la calidad del código en el proyecto.

6. **Eliminación de la rama**: Una vez que se haya hecho la fusión, elimina la rama. IMPORTANTE: No eliminar las ramas principales (main, staging, develop).

**Plantilla de PR**

```
<!--- Plantilla de PR para dacusaurus -->
<!--- Autor: Ian Julián Estrada Castro -->
<!--- Versión 1.2 -->
<!--- Última actualización: 7 de marzo de 2025 -->

# Solicitud de cambio (PR)

<!--- Agrega una breve descripción del cambio en una línea -->

[Ejemplo: Se agregó una nueva guía sobre los estándares de codificación]

## Descripción detallada

<!-- Explica con más detalle lo que hiciste y por qué -->

[Ejemplo: Este cambio integra un estándar de codificación porque actualmente no hay uno establecido]

### Archivos modificados

<!--- Lista los archivos que agregaste, modificaste o eliminaste -->

[Ejemplo:
- `docs/estándares.md` (Nuevo documento)
- `docs/procesos.md` (Modificado)
- `docs/errores.md` (Eliminado)]

## Tipo de cambio

<!--- ¿Qué hace este cambio? Pon una `x` en los espacios que aplican: -->

- [ ] Documentación (Un nuevo proceso, práctica, guía, estándar, documentación de proyecto, etc.)
- [ ] Modificación en documentación existente (Modificaciones a procesos, prácticas, guías, estándares, documentación de proyecto, etc.)
- [ ] Hotfix (Una modificación rápida o urgente, eliminación de archivos repetidos, correcciones ortográficas, etc.)
- [ ] Refactorización de documentación (Reorganización de contenido sin cambios significativos)
- [ ] Eliminación de documentación obsoleta

## Checklits del autor:

<!--- Antes de hacer la solicitud, repasa los puntos siguientes y pon una `x` en todas las cajas que aplican -->

- [ ] He determinado que los cambios no tienen un impacto negativo en el sistema
- [ ] Ortografía y gramática correctas
- [ ] Formato en Markdown consistente con el resto de la documentación
- [ ] Enlaces y referencias son funcionales
- [ ] Imágenes y código bien formateados (si aplica)
- [ ] Contenido actualizado y relevante
- [ ] Fecha y versión actualizados (si aplica)
- [ ] Alguien más está asignado como evaluador (tester/reviewer)

## Checklist del evaluador:

<!--- Repasa los puntos siguientes, y pon una `x` en todas las cajas que aplican -->

- [ ] La descripción en la tabla que se encuentra en la parte inferior del documento coincide con la descripción del pull request
- [ ] Los cambios no afectan negativamente la documentación o generan inconsistencias
- [ ] Ortografía y gramática correctas
- [ ] He notificado al autor del PR en caso de dudas o ajustes necesarios
- [ ] Una vez que acepte el PR, eliminaré la rama


## Registro de cambios:

<!-- En la parte inferior de los documentos Markdown debe haber una tabla como la siguiente -->

| Autor | Descripción del cambio | Versión |
|---------|-------------------------|---------|
| [Tu nombre] | [Breve descripción del cambio] | [Versión] |
```

## Registro de cambios
| Autor | Descripción del cambio | Versión |
|---------|-------------------------|---------|
| Ian Julián Estrada Castro | Agregué la plantilla para pull request | 1.1 |
| Ian Julián Estrada Castro | Agregué un campo en el checklist del evaluador | 1.2 |