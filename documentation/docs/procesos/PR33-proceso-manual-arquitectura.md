---
title: 📒 | PR24 Elaborar el Manual de Arquitectura
sidebar_position: 24
---

# 📒 Elaborar el Manual de Arquitectura

Proceso que define los pasos para crear, revisar, documentar y publicar el Manual de Arquitectura. Este documento es esencial para asegurar que el diseño del sistema —basado en servicios en la nube u otras arquitecturas— cumpla con los requisitos funcionales y no funcionales, manteniendo trazabilidad con decisiones técnicas.

## 🎯 Objetivo

- Guiar la elaboración de un Manual de Arquitectura completo, estructurado y trazable.
- Documentar el tipo de arquitectura, componentes, decisiones y criterios de calidad.
- Asegurar consistencia entre requisitos, diseño y decisiones tecnológicas.

## 📥 Entradas

1. Requisitos funcionales y no funcionales.
2. Plantilla oficial del Manual de Arquitectura.
3. Decisiones técnicas previas (tipo de arquitectura, tecnologías propuestas).

## ⚙️ Proceso

| Fase                           | Descripción                                                                                                                                                                                                                                     | Responsable                         | Meta y práctica específica del CMMI                          |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------ |
| **Preparar plantilla**     | Copiar la plantilla oficial del Manual de Arquitectura en el repositorio central y registrar el control de cambios inicial.                                                                                                                     | Arquitecto owner                    | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)     |
| **Documentar tipo de arquitectura** | Describir el tipo de arquitectura (ej. basada en servicios, en capas) y explicar cómo responde a los requisitos funcionales y no funcionales.                                                                                              | Arquitecto owner                    | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)                                                |
| **Desglose de componentes** | Crear secciones para cada componente clave del sistema:<br/>– Propósito funcional.<br/>– Rol en el flujo de datos.<br/>– Dependencias técnicas.<br/>– Restricciones asociadas.                                                              | Arquitecto owner                    | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)                                                |
| **Definir criterios y decisiones** | Establecer criterios de calidad por componente (rendimiento, seguridad, escalabilidad, disponibilidad) y documentar las decisiones arquitectónicas que justifican cada criterio.                                                           | Team Lead, Arquitecto owner         | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)                                                |
| **Integrar diagrama de despliegue** | Incluir un diagrama de despliegue que muestre componentes, flujos de comunicación y entornos (dev, QA, producción). Validar su coherencia con los criterios definidos.                                                                    | Arquitecto owner                    | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)                                                |
| **Redactar y compilar manual** | Redactar las secciones en Docusaurus:<br/>1. Tipo de arquitectura.<br/>2. Componentes.<br/>3. Criterios y decisiones.<br/>4. Diagrama de despliegue.<br/>5. Justificación tecnológica.<br/>6. Trazabilidad.                                | Arquitecto líder, equipo de arquitectura | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)                                            |
| **Publicar y archivar manual** | Verificar que el contenido esté completo y consistente. Publicar el documento en Docusaurus, notificar a los stakeholders y archivar copia en el repositorio correspondiente.                                                             | Arquitecto líder                    | **TS, SP 2.1** (Desarrollar la arquitectura del sistema)                                                |

## 📤 Salidas

1. Manual de Arquitectura publicado en Docusaurus.
2. Diagrama de despliegue validado (SVG/PNG).
3. Justificaciones arquitectónicas y criterios de calidad documentados.
4. Matriz de trazabilidad requisitos ↔ arquitectura (en Markdown o Google Sheets).
5. Control de cambios actualizado (en frontmatter y tabla interna).

## 📎 Recursos relacionados

- [Plantilla del Manual de Arquitectura](/docs/plantillas/plantilla-manual-arquitectura)
- [Definición de ítems de configuración](/docs/next/procesos/PR2-definicion-items)
- [Estándar para documentación técnica](/docs/next/standards/estandar-plantillas)

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>
  | **Versión** | **Descripción**                                             | **Fecha**    | **Colaborador**                                         |
  | ----------- | ----------------------------------------------------------- | ------------ | ------------------------------------------------------- |
  | **1.0.0**   | Creación inicial del proceso de Manual de Arquitectura     | 06/06/2025   | Armando Méndez Castro, Juan Antonio Landeros Velázquez |
</details>
