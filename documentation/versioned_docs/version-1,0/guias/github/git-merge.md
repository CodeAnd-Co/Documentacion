---
title: Guía para fusiones de ramas
sidebar_position: 1
---

# Guía para fusiones de ramas


_Proporciona directrices sobre cómo realizar fusiones de ramas de manera efectiva, minimizando conflictos y asegurando la integridad del código._

## Diferencias entre `merge` y `rebase` y cuándo utilizar cada uno

En Git, `merge` y `rebase` son dos estrategias principales para integrar cambios de una rama a otra, cada una con sus particularidades:

- **`merge`**: Combina el historial de dos ramas, creando un nuevo commit de fusión que preserva la historia de ambas ramas. Es útil cuando se desea mantener un registro completo de las integraciones.

- **`rebase`**: Reaplica los commits de una rama sobre otra, creando un historial lineal. Esto puede hacer que el historial sea más limpio y fácil de seguir, pero reescribe la historia, lo que puede ser problemático en ramas compartidas.

**Cuándo utilizar cada uno**:

- Utiliza `merge` cuando desees preservar el historial completo de las ramas y las integraciones.

- Opta por `rebase` para mantener un historial lineal y limpio, especialmente en ramas de características locales antes de integrarlas a la rama principal.

## Pasos para realizar una fusión exitosa

1. **Preparación**: Antes de fusionar, asegúrate de que la rama de destino esté actualizada con los últimos cambios remotos.

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Iniciar la fusión**: Fusiona la rama de características o la rama que deseas integrar.

   ```bash
   git merge nombre-de-la-rama
   ```

3. **Resolver conflictos**: Si se presentan conflictos, Git te notificará. Abre los archivos conflictivos, resuelve los conflictos y marca los archivos como resueltos.

   ```bash
   git add archivo-resuelto
   ```

4. **Finalizar la fusión**: Una vez resueltos todos los conflictos, completa la fusión con un commit.

   ```bash
   git commit -m "Mensaje de fusión"
   ```

5. **Actualizar el repositorio remoto**: Sube los cambios al repositorio remoto.

   ```bash
   git push origin main
   ```

## Resolución de conflictos durante la fusión

Los conflictos ocurren cuando Git no puede reconciliar diferencias entre ramas. Para resolverlos:

1. **Identificar archivos en conflicto**: Git marcará los archivos conflictivos.

2. **Editar archivos conflictivos**: Abre cada archivo y decide cómo combinar los cambios.

3. **Marcar archivos como resueltos**: Después de editar, agrega los archivos resueltos al área de preparación.

   ```bash
   git add archivo-resuelto
   ```

4. **Completar la fusión**: Finaliza la fusión con un commit.

   ```bash
   git commit -m "Mensaje de resolución de conflictos"
   ```

Para una comprensión más profunda de las diferencias entre `merge` y `rebase`, así como sus implicaciones en el historial del proyecto, puedes consultar el siguiente artículo:

- [Merging vs. Rebasing | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

Implementar estas prácticas garantizará fusiones de ramas efectivas, minimizando conflictos y manteniendo la integridad del código en tus proyectos.


---

## Historial de cambios

| **Tipo de versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** |  Creación de la guía. | 16/02/2025 | Ángel Ramírez, Ian Estrada |
| **1.1** |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |