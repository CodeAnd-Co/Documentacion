---
title: 🦑 | PR34 Proceso de Estrategia Técnica 
sidebar_position: 36
---

# 🦑 Proceso de Estrategia Técnica 

Este proceso detalla únicamente la práctica **TS SP 2.1 – Desarrollar la arquitectura del sistema y componentes**, aplicado a la creación de la **Estrategia técnica**. Proporciona pasos concretos para documentar la arquitectura de flujos y componentes (repositorios, ramas, commits, pruebas, documentación, CI/CD) como un activo CMMI.

## 🎯 Objetivo

- **Definir y documentar** la arquitectura de la Estrategia técnica (componentes, flujos, dependencias) como parte de TS SP 2.1.  
- Establecer una base clara para los repositorios, ramas, convenciones de commits, pipelines de pruebas, herramientas de documentación y procesos de CI/CD.  
- Asegurar la trazabilidad entre requisitos de calidad (rendimiento, seguridad, escalabilidad) y las decisiones de arquitectura de la Estrategia técnica.

## 📥 Entradas

1. **Plantilla de Estrategia Técnica** (formato Docusaurus).  

## ⚙️ Proceso

| Fase                                   | Descripción                                                                                                                                                                                                                                                                                                                                                                                             | Responsable                           | Criterio de aceptación / Práctica CMMI                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------ |
| **1. Preparar plantilla y recopilar entradas** | • Obtener la plantilla base de Estrategia Técnica (Docusaurus).<br/>• Revisar y consolidar **Requisitos Funcionales y No Funcionales** (RF/RNF) relevantes para la Estrategia técnica (p. ej., estándares de calidad, políticas de seguridad, tiempos de despliegue).<br/>• Recopilar las **Políticas Organizacionales** (estándares de codificación, convenciones de versión) y **actas previas** que afecten el diseño. | Líder Técnico / Arquitecto de Software | • Plantilla verificada y copiada.<br/>• RF/RNF y políticas documentados en `docs/requerimientos/*.md`.<br/>**TS SP 2.1** |
| **2. Definir tipo de arquitectura de Estrategia técnica** | • Describir en la Estrategia técnica el “modelo arquitectónico” de alto nivel para la gestión de código y despliegues: por ejemplo, “repositorios separados (frontend/backend), flujo GitFlow simplificado, pipeline de CI/CD centralizado”.<br/>• Explicar por qué ese modelo satisface los RF/RNF (p. ej., modularidad, trazabilidad, tiempos de integración).                                               | Arquitecto de Software / Líder Técnico  | • Sección “Tipo de arquitectura” escrita (p. ej., `docs/procesos/PR35-estrategia-tecnica.md`).<br/>**TS SP 2.1** |
| **3. Desglosar componentes de la Estrategia**         | • Identificar y documentar cada componente principal de la Estrategia técnica:<br/> – **Repositorios**: ubicaciones (GitHub, GitLab), estructuras de carpetas.<br/> – **Ramas**: `main`, `staging`, `develop`, `feature/*`.<br/> – **Convenciones de Commits**: formato “conventional commits”.<br/> – **Pipeline de Pruebas**: herramientas (unitarias, integración, e2e).<br/> – **Documentación de Código**: JSDoc, Swagger/OpenAPI.<br/> – **CI/CD**: flujos de despliegue automático (GitHub Actions, scripts de despliegue).<br/>• Para cada componente, indicar propósito funcional, dependencias clave y restricciones (p. ej., requerimientos de seguridad, control de acceso). | Equipo de Arquitectura                  | • Tabla de “Desglose de componentes” incluida en el documento.<br/>• Cada componente vinculado a uno o más RF/RNF.<br/>**TS SP 2.1** |
| **4. Definir criterios y decisiones de calidad**       | • Para cada componente documentado en la fase 3, establecer criterios de calidad:<br/> – **Rendimiento**: por ejemplo, “tiempo de integración continua < 5 min por push a `develop`”.<br/> – **Disponibilidad**: “pipelines disponibles 24×7 con alertas en caso de falla”.<br/> – **Seguridad**: “repositorios con ramas protegidas, credenciales en GitHub Secrets”.<br/> – **Escalabilidad**: “capacidad de agregar nuevos repositorios o pipelines sin reconfiguración global”.<br/>• Documentar la **decisión arquitectónica** que justifica cada criterio (por ejemplo, elegir GitHub Actions por integración nativa con repositorios). | Arquitecto de Software / Líder Técnico | • Sección “Criterios y decisiones” completada con justificaciones.<br/>• Cada decisión ligada a al menos un RF/RNF.<br/>**TS SP 2.1** |
| **5. Integrar diagramas de flujos y componentes**      | • Crear un **diagrama de flujo** que muestre cómo interactúan los componentes de la Estrategia técnica:<br/> – Flujo: Desarrollador → Ramas (`feature` → `develop` → `staging` → `main`) → CI/CD → Pruebas → Despliegue.<br/> – Representar dependencias (repositorios, herramientas de pruebas, servidores de despliegue).<br/>• Exportar el diagrama (SVG/PNG) y **incrustarlo** en `docs/diagramas/` y en el documento Docusaurus. | Equipo de Arquitectura                  | • Diagrama exportado correctamente y referenciado en el documento.<br/>**TS SP 2.1**       |
| **6. Redactar y compilar la Estrategia técnica**       | • Redactar en Docusaurus las secciones finales:<br/> 1. **Tipo de arquitectura** y justificación de alto nivel.<br/> 2. **Desglose de componentes** (propósito, dependencias y restricciones).<br/> 3. **Criterios y decisiones** de calidad.<br/> 4. **Diagrama de flujos**, con referencias a archivos fuente.<br/> 5. **Tabla de trazabilidad**: RF/RNF ↔ Componente ↔ Decisión.<br/>• Completar frontmatter con versión (por ejemplo, `v1.0`) y `sidebar_position: 37`. | Líder Técnico / Equipo de Arquitectura | • Documento publicado sin errores en Docusaurus.<br/>• Tabla de trazabilidad verificada.<br/>**TS SP 2.1** |
| **7. Publicar y verificar Estrategia**                 | • Revisar que todas las secciones estén completas y sin errores de Markdown.<br/>• Publicar la página en el sitio Docusaurus y notificar al equipo (correo o canal de comunicación).<br/>• Verificar que la página cargue correctamente (todos los enlaces y diagramas) y que la tabla de trazabilidad muestre correspondencia con RF/RNF.<br/>• Archivar versión final en el repositorio (`docs/procesos/PR35-estrategia-tecnica.md`). | Líder Técnico                        | • Estrategia disponible en el sitio sin errores.<br/>• Evidencia de notificación al equipo.<br/>**TS SP 2.1** |

## 📤 Salidas

1. **Documento “Estrategia técnica” (v1.0)**  
     - Sección “Tipo de arquitectura” y justificación de alto nivel.  
     - “Desglose de componentes” (repositorios, ramas, commits, pruebas, documentación, CI/CD).  
     - “Criterios y decisiones” documentados con base en RF/RNF.  
     - Diagrama de flujos (SVG/PNG) incrustado.  
     - Tabla de trazabilidad (RF/RNF ↔ Componente ↔ Decisión).  
     
## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>

  | **Versión** | **Descripción**                                                   | **Fecha**     | **Colaborador**   |
  | ----------- | ----------------------------------------------------------------- | ------------- | ----------------- |
  | **1.0.0**   | Creación del proceso de Estrategia Técnicas | 05/06/2025    | Juan Antonio Landeros Velazquez |

</details>
