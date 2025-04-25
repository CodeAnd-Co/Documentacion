---
title: Guía de Buenas Prácticas para Commits
sidebar_position: 6
---

# Guía de Buenas Prácticas para Commits

_Define estándares para la realización de commits claros y coherentes, facilitando el seguimiento de cambios y la colaboración entre desarrolladores._

## Frecuencia y Tamaño de los Commits

- **Commits Atómicos**: Realiza commits que representen unidades lógicas de trabajo, enfocándose en una sola tarea o corrección por commit. Esto facilita revisiones de código más rápidas y revertir cambios sin efectos secundarios no deseados.

- **Tamaño Adecuado**: Evita commits excesivamente grandes que incluyan múltiples cambios no relacionados. Si un commit requiere una explicación extensa, es probable que deba dividirse en varios commits más pequeños.

## Convenciones para Mensajes de Commit Descriptivos

- **Uso del Verbo Imperativo**: Comienza el mensaje de commit con un verbo en imperativo, como "Añadir", "Corregir" o "Eliminar". Esto refleja la acción que se realiza al aplicar el commit.

- **Longitud del Asunto**: Limita el asunto del mensaje a 50 caracteres o menos. Esto mejora la legibilidad y permite que herramientas de visualización de commits muestren el mensaje completo sin truncamientos.

- **Cuerpo del Mensaje**: Si es necesario proporcionar más contexto, agrega un cuerpo al mensaje después de una línea en blanco. Utiliza párrafos breves y claros para explicar el "por qué" detrás de los cambios.

- **Puntuación**: No utilices punto final ni puntos suspensivos en los mensajes de commit.

**Ejemplo de un Buen Mensaje de Commit**:

```
Añadir funcionalidad de búsqueda

Implementada una nueva característica que permite a los usuarios buscar productos por nombre y categoría.
```

## Asociación de Commits con Issues o Tareas Específicas

- **Referencias a Issues**: Incluye identificadores de issues o tareas en los mensajes de commit para vincular cambios con problemas específicos. Esto facilita el seguimiento y la trazabilidad de los cambios.

- **Formato Consistente**: Adopta un formato consistente para las referencias, como `#<número_de_issue>` o `ISSUE-<número>`, según las convenciones de tu equipo o proyecto.

**Ejemplo de Commit con Referencia a Issue**:

```
Corregir error en la validación de formularios

Se solucionó un problema donde los campos de correo electrónico no se validaban correctamente.
Relacionado con el issue #123.
```

## Buenas Prácticas Adicionales

- **Revisiones de Código**: Antes de realizar un commit, revisa los cambios para asegurarte de que son correctos y necesarios. Esto ayuda a mantener la calidad del código y reduce la posibilidad de errores.

- **Actualización del Repositorio**: Antes de hacer commits, asegúrate de que tu rama esté actualizada con la rama principal (`main` o `develop`) para evitar conflictos.

- **Evitar Commits de Prueba**: Evita realizar commits que solo sirvan para probar algo. Si es necesario, utiliza ramas temporales y elimínalas después de realizar las pruebas.

Implementar estas prácticas contribuirá a un historial de commits más limpio y comprensible, facilitando la colaboración y el mantenimiento del proyecto a largo plazo.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** |  Creación de la guía | 16/02/2025 | Ángel Ramírez, Ian Estrada |
| **1.1** |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |