---
title: 🌐 | PR23 Despliegue
sidebar_position: 23
---

# 🌐 Despliegue

Proceso que establece una secuencia clara de pasos para desplegar una solución validada, garantizando la calidad del producto entregado y la alineación con los requisitos definidos. Facilita la verificación, documentación y capacitación posterior al despliegue.

## 🎯 Objetivo

- Establecer un flujo para el despliegue de la solución de alta calidad.
- Obtener validación temprana por parte del socioformador.

## 📥 Entradas

1. Requerimientos o historias de usuario asignadas en estado READY.
2. Requerimientos o historias de usuario con pruebas ya ejecutadas y aprobadas.

## ⚙️ Proceso

| Fase | Descripción | Responsable | Meta y práctica específica del CMMI |
| ---- | ----------- | ----------- | ----------------------------------- |
| **Verificación de pruebas** | Validar que todas las pruebas hayan sido ejecutadas utilizando la [checklist de pruebas](https://docs.google.com/document/d/1vgbiGV0X7-2gam2kI9x5Da3l594kb4XKfE4BtnfEJ-8/edit?tab=t.0#heading=h.fhau7kjl46pa). | Desarrollador | **VER SP 1.1**, **VER SP 1.3**, **VER SP 3.1** |
| **Merge de la rama** | Generar un pull request hacia la rama destino tras verificar que las pruebas fueron aprobadas. | Desarrollador | **CM SP 2.2** (Controlar los elementos de configuración). |
| **Despliegue** | Cambiar a la rama correspondiente (develop-staging o main-producción), según la [estrategia de ramas](../guias/github/git-branches). | Desarrollador | — |
| **Obtener la versión más reciente** | Ejecutar `git pull origin` para actualizar la rama local. | Desarrollador | **CM SP 2.2** (Controlar los elementos de configuración). |
| **Mostrar los cambios** | Reiniciar el entorno con el comando adecuado (ej. `pm2 restart [id del proceso]`). | Desarrollador | — |
| **Aprobación** | Ejecutar las pruebas de aceptación por parte del equipo o cliente. | Desarrollador | **PPQA SP 1.2**, **REQM SP 1.5** |
| **Documentación** | Desarrollar el manual o guía de la funcionalidad desplegada según estrategia o WBS. | Desarrollador | **REQM SP 1.4** (Mantener la trazabilidad bidireccional de los requisitos). |
| **Capacitación** | Capacitar a los usuarios finales mediante documentación o presentación. | Desarrollador | — |
| **Verificación final** | Usar la [checklist de despliegue](https://docs.google.com/document/d/1EG-ZbfHgw4n80yBjMSuXoVeoflwsJaIqhdJFRF0B8Z8/edit?tab=t.0#heading=h.fhau7kjl46pa) para confirmar que todos los pasos fueron cumplidos. | Desarrollador | **VER SP 1.1**, **VER SP 1.3**, **VER SP 3.1** |
| **Cerrar historia** | Marcar la historia como *Done* en la herramienta de gestión, de acuerdo con la definición del proyecto. | Desarrollador | **REQM SP 1.4** (Mantener la trazabilidad bidireccional de los requisitos). |

## 📤 Salidas

1. Pull request cerrado en el repositorio.
2. Historia actualizada en estado *Done*.
3. Manual desarrollado o capacitación impartida.

## 📎 Recursos relacionados

- [Estándar para crear nuevas plantillas](/docs/next/standards/estandar-plantillas)
- [Definición de Ítems](/docs/next/procesos/PR2-definicion-items)
- [Plantilla para procesos](/docs/next/plantillas/plantilla-procesos)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
| **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------- | --------- | --------------- |
| **1.0.0** | Creación inicial del proceso. | 18/05/2025 | Rommel Pacheco Hernández |
| **1.0.1** | Correcciones ortográficas y de enlaces. | 29/05/2025 | Valeria Zúñiga, Nicolas Hood |
| **1.0.2** | Actualizar formato. | 06/06/2025 | Angel Mauricio Ramírez Herrera |

</details>
