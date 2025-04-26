---
title: Guía de pull request
sidebar_position: 3
---

# Guía de pull request


_Detalla el proceso para crear, revisar y aprobar pull requests, fomentando una colaboración efectiva y asegurando la calidad del código antes de su integración._


## ¿Cómo hacer un pull request?

1. Hacer pull origin (main/develop) para asegurar que tu rama local este al corriente.

    - Si al hacer el pull origin surgen conflictos es necesario que los resuelvas antes de que puedas hacer el pull request 

2. Hacer push origin (tu rama) con tus cambios de la rama local.

3. Entrar a la página de la organización Code&Co.

4. Seleccionar el repositorio donde realizaste cambios.

5. En la barra superior seleccionar la ventana de pull request.

6. Seleccionar el botón de "Nuevo pull request".

7. Modificar el orden de las ramas que vas a mergear.

8. Escribir el título, y basándote en la plantilla del pull request la descripción.

9. En el costado derecho asignar cómo evaluador al QA del proyecto correspondiente.

10. Crear el pull request.

## ¿Cómo aprobar un pull request?

1. Entrar a la página de la organización Code&Co.

2. Seleccionar el repositorio donde solicitaron la revisión.

3. En la barra superior seleccionar la ventana de pull request.

4. Seleccionar el pull request donde solicitaron la revisión.

5. Verificar que todas las pruebas automáticas hayan pasado.

6. Completar la checklist del evaluador verificando cada archivo.

7. En caso de que haya errores, dejar comentario con las correcciones necesarias y solicitar cambios al autor del pull request.

8. Si no hay errores y paso la checklist, aceptar el pull request y borrar la rama.

## Criterios para la Creación de pull requests

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

:::tip Beneficio  
Implementar estas prácticas garantizará una gestión efectiva de las pull request, promoviendo una colaboración eficiente y manteniendo la calidad del código en el proyecto.
:::

6. **Eliminación de la rama**: Una vez que se haya hecho la fusión, elimina la rama. 

:::warning Importante  
 No eliminar las ramas principales definidas según la estratégia técnica. Ejemplo: main, staging, develop.
 :::

**Plantilla de PR**

```
<!--- Plantilla de PR para docusaurus -->
<!--- Autor: Ian Julián Estrada Castro -->
<!--- Versión 2.1 -->
<!--- Última actualización: 26 de abril de 2025 -->

# Solicitud de cambio (PR)

<!--- Agrega una breve descripción del cambio en una línea -->

[Ejemplo: Se agregó una nueva guía sobre los estándares de codificación]

## Descripción detallada

<!-- Explica con más detalle lo que hiciste y por qué -->

[Ejemplo: Este cambio integra un estándar de codificación porque actualmente no hay uno establecido]

## Tipo de cambio

<!--- ¿Qué hace este cambio? Pon una `x` en los espacios que aplican: -->

- [ ] Documentación (Un nuevo proceso, práctica, guía, estándar, documentación de proyecto, etc.)
- [ ] Modificación en documentación existente (Modificaciones a procesos, prácticas, guías, estándares, documentación de proyecto, etc.)
- [ ] Hotfix (Una modificación rápida o urgente, eliminación de archivos repetidos, correcciones ortográficas, etc.)
- [ ] Refactorización de documentación (Reorganización de contenido sin cambios significativos)
- [ ] Eliminación de documentación obsoleta

## Checklist del autor:

<!--- Antes de hacer la solicitud, repasa los puntos siguientes y pon una `x` en todas las cajas que aplican -->

- [ ] He determinado que los cambios no tienen un impacto negativo en el sistema
- [ ] Ortografía y gramática correctas
- [ ] Formato en Markdown consistente con el resto de la documentación
- [ ] Enlaces y referencias son funcionales
- [ ] Imágenes y código bien formateados (si aplica)
- [ ] Contenido actualizado y relevante
- [ ] Fecha y versión actualizados (si aplica)
- [ ] Alguien más está asignado como evaluador (tester/reviewer)
- [ ] Actualicé la información del repositorio de configuración.

## Checklist del evaluador:

<!--- Repasa los puntos siguientes, y pon una `x` en todas las cajas que aplican -->

- [ ] El registro de cambios coincide con la descripción del pull request
- [ ] Los cambios no afectan negativamente la documentación o generan inconsistencias
- [ ] Ortografía y gramática correctas
- [ ] He notificado al autor del PR en caso de dudas o ajustes necesarios
- [ ] Una vez que acepte el PR, eliminaré la rama


<!-- ## Registro de cambios

Seguir la guía para mantener un control de versiones en la documentación: https://codeandco-wiki.netlify.app/docs/guias/documentacion/trazabilidad
En la parte inferior de los documentos Markdown debe haber una tabla como la siguiente:

| Autor | Descripción del cambio | Versión |
|---------|-------------------------|---------|
| [Tu nombre] | [Breve descripción del cambio] | [Versión] |
 -->
```

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** |  Creación de la guía | 16/02/2025 | Ángel Ramírez, Ian Estrada |
| **1.1** |  Agregué la plantilla para pull request. | 16/02/2025 |  Ian Julián Estrada Castro |
| **1.2** |  Agregué un campo en el checklist del evaluador. | 24/04/2025 |  Ian Julián Estrada Castro |
| **2.0** | Eliminé apartado de lista de archivos, cambié un elemento de la lista del evaluador y comenté el apartado de registro de cambios en plantilla. Hice referencia de la guía para mantener un control de versiones en la documentación.  | 24/04/2025 |  Ian Julián Estrada Castro |
| **2.1** |  Corregí error ortográfico. Agregué enlace a guía para mantener un control de versiones en la documentación.  | 24/04/2025 | Ian Julián Estrada Castro |
| **2.2** |  Solicitudes de extracción -> pull request.  | 24/04/2025 | Juan Eduardo Rosas Cerón, Juan Carlos Calderón García, Pablo Hazael Hurtado Mireles |
| **2.3** |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |
| **2.4** |  Gestión de configuración como check.  | 25/04/2025 | Diego Fuentes |
| **2.5** |  Agregué como realizar un PR y aprobarlo en Github  | 26/04/2025 | Daniel Queijeiro |
