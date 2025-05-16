---
title: Estándar para la modificación o creación de procesos
sidebar_position: 3
---

# Estándar para la modificación o creación de procesos

---

## 1. Propósito
Este documento establece los criterios que determinan si un cambio en un proceso existente es suficiente o si es necesario crear un nuevo proceso. Además, define los límites de modificaciones permitidas en un proceso antes de requerir su reemplazo.

## 2. Identificación de necesidad
Para determinar si se debe modificar un proceso existente o crear uno nuevo, responde las siguientes preguntas:

- **¿El proceso actual cumple parcialmente con los nuevos requerimientos?**
  - **Sí** → Se puede modificar el proceso existente para ajustarlo a los nuevos requerimientos.
  - **No** → Es necesario crear un nuevo proceso que cubra completamente los requerimientos.

- **¿Los cambios afectan a más del 50% de las actividades del proceso?**
  - **Sí** → Se recomienda crear un nuevo proceso, ya que el actual cambiaría de forma significativa.
  - **No** → Se puede modificar el proceso existente manteniendo su estructura principal.

- **¿El propósito del proceso sigue siendo el mismo?**
  - **Sí** → Se debe modificar el proceso existente, ya que su objetivo sigue siendo válido.
  - **No** → Se debe crear un nuevo proceso, ya que su finalidad ha cambiado.

- **¿Se requieren nuevas herramientas, roles o metodologías que no existían antes?**
  - **Sí** → Se debe crear un nuevo proceso que integre estos nuevos elementos.
  - **No** → Se puede modificar el proceso existente sin necesidad de una nueva estructura.

- **¿El cambio afecta a un stakeholder adicional o específico?**
  - **Sí** → Se debe crear un nuevo proceso que contemple los nuevos requerimientos del stakeholder.
  - **No** → Se puede modificar el proceso actual sin necesidad de generar uno nuevo.

## 3. Criterios para modificar un proceso existente
Un proceso existente debe modificarse cuando:

- Los cambios propuestos no alteran la estructura fundamental del proceso.
- Se requiere actualizar actividades o responsabilidades sin afectar su objetivo general.
- Se incorporan mejoras de eficiencia sin cambiar el resultado final del proceso.
- La documentación sigue siendo válida con ajustes menores.
- No se introducen nuevos actores o sistemas que requieran una reformulación completa.

### Cambios mínimos permitidos
Se consideran cambios mínimos aquellos que:

- Ajustan descripciones sin modificar la lógica del proceso.
- Corrigen errores de redacción o formato.
- Agregan pasos opcionales sin afectar la secuencia principal.
- Mejoran la claridad o simplifican la documentación.

### Cambios máximos permitidos
Se consideran cambios máximos en un proceso antes de requerir la creación de uno nuevo cuando:

- Se agregan o eliminan más del 50% de las actividades.
- Se cambia el objetivo o el resultado final del proceso.
- Se modifican significativamente los roles o responsabilidades de los actores clave.
- Se introducen tecnologías o herramientas que alteran la ejecución original del proceso.

## 4. Criterios para crear un nuevo proceso
Debe crearse un nuevo proceso cuando:

- El cambio propuesto transforma por completo el flujo de trabajo.
- Se requiere un proceso específico para un nuevo stakeholder.
- El proceso existente ya no es aplicable o se ha vuelto obsoleto.
- Se fusionan varios procesos en uno nuevo.
- Existen diferencias regulatorias o de cumplimiento que lo justifican.

## 5. Proceso de decisión
1. **Análisis de impacto:** Evaluar el proceso actual y los cambios propuestos.
2. **Comparación con los criterios:** Determinar si se cumplen los criterios de modificación o de creación de un nuevo proceso.
3. **Revisión y validación:** Someter la decisión al Comité de Revisión.
4. **Implementación:** Aplicar la modificación o desarrollar el nuevo proceso según las políticas establecidas.

## 6. Registro de cambios
Cualquier modificación o nuevo proceso debe documentarse con:

- Autor del cambio.
- Descripción del cambio.
- Versión.

Esto se hace en la documentación del pull request.

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                                                                                                                | **Fecha** | **Colaborador**                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| **1.0**             | Creación del estándar.  | 23/03/2025 | Galo Alejandro del Río Viggiano <br/> Ian Julián Estrada Castro | 