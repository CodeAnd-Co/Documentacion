---
title: PR32 Proceso de despliegue
sidebar_position: 32
---

# Proceso de despliegue

---

## Objetivo

- Establecer un flujo para el despliegue de la solución de alta calidad.
- Obtener validación temprano por parte del socioformador.

---

## Entradas

1. Requerimientos o historias de usuario asignadas en READY.
2. Requerimientos o historias de usuario con pruebas ya ejecutadas y pasadas.


---

## Proceso

| Fase     |Descripción                                                    | Responsable             | Meta y práctica específica del CMMI                                        |
| -------- | -------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------------- |
| **Verificación de pruebas** | Verificar que todas las pruebas hayan sido ejecutadas con la [checklist de pruebas](https://docs.google.com/document/d/1vgbiGV0X7-2gam2kI9x5Da3l594kb4XKfE4BtnfEJ-8/edit?tab=t.0#heading=h.fhau7kjl46pa) en el apartado de ejecución de pruebas. Si hay un item faltante actualizarlo y seguir al siguiente paso. | Desarrollador. | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación), **VER SP 3.1** (Realizar la verificación). 
| **Merge de la rama** | Tras verificar que las pruebas han sido aprobadas, generar un pull request hacía la rama destino. | Desarrollador. | **CM, SP 2.2** (Controlar los elementos de configuración). |
| **Despliegue** | Entrar a la rama del entorno correspondiente (develop-staging o main-producción) del repositorio según la [estrategia de ramas del departamento](../guias/github/git-branches) y del proyecto. | Desarrollador. | |
| **Obtener la versión más reciente** | Ejecutar git pull origin para asegurar que se tiene la versión más actualizada de la rama a desplegar. | Desarrollador. | **CM, SP 2.2** (Controlar los elementos de configuración).
| **Mostrar los cambios** | Ejecutar el comando de reinicio del entorno por ejemplo en el servidor web usar el comando pm2 restart [id del proceso]. | Desarrollador. |  |
| **Aprobación** | Ejecutar las pruebas de aceptación correspondientes por parte del equipo o con el cliente. | Desarollador. | **PPQA 1.2** (Evaluar objetivamente los productos). **REQM, SP 1.5** ( Asegurar el alineamiento entre el trabajo del proyecto y los requisitos)
|**Documentación.**|   Tras ser aceptado por el cliente o por el equipo desarrollar el manual de la funcionalidad despleagada. Este paso es de acuerdo a su estrategía de despliegue o WBS. | Desarollador. | **REQM, SP 1.4** ( Mantener la trazabilidad bidireccional de los requisito).
|**Capacitación.**|  Capacitar a los usuarios finales con un manual o con una presenatción en vivo. | Desarollador. | 
| **Verificación**|  Usar la [checklist de despliegue](https://docs.google.com/document/d/1EG-ZbfHgw4n80yBjMSuXoVeoflwsJaIqhdJFRF0B8Z8/edit?tab=t.0#heading=h.fhau7kjl46pa) asegurando que todos los pasos se han cumplido. | Desarollador. | **VER SP 1.1** (Seleccionar los productos de trabajo para la verificación), **VER SP 1.3** (Establecer los procedimientos y los criterios de verificación), **VER SP 3.1** (Realizar la verificación).  |
| **Cerrar historia** | Actualizar el estado de la historia a Done de acuerdo a la definición de cada proyecto. | Desarollador. |  **REQM, SP 1.4** ( Mantener la trazabilidad bidireccional de los requisito). |

---

## Salidas

1. Un  pull request cerrado en el proyecto.
2. Actualización del estatus de la historia.
3. Un manual o una capacitación.
---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Creación del proceso | 18/05/2025 | Rommel Pacheco Hernández|
