---
title: 🦑 | PR33 Proceso de Manual de Arquitectura
sidebar_position: 35
---

# 🦑 Proceso de Manual de Arquitectura

## 🎯 Objetivo

- Guiar la creación, revisión y aprobación de un Manual de Arquitectura que refleje fielmente el diseño basado en servicios en la nube descrito.  
- Asegurar que cada sección del Manual (tipo de arquitectura, desglose, objetivos, tecnologías, características, despliegue, justificación y diagramas) cumpla con los requisitos funcionales y no funcionales.  
- Mantener la trazabilidad entre requisitos, diseño de alto nivel (tipo de arquitectura) y detalles de implementación (tecnologías, AWS, justificaciones).  

## 📥 Entradas

Plantilla Manual de arquitectura

## ⚙️ Proceso

| Fase                               | Descripción                                                                                                                                                                                                                               | Responsable                       | Meta y práctica específica del CMMI                                  |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| **1. Preparar plantilla**  | • Copiar la plantilla CMMI para Manual de Arquitectura en el repositorio central. [Plantilla Manual de Arquitectura ](/docs/plantillas/plantilla-manual-arquitectura)              | Arquitecto owner                  | **TS SP 2.1** – Desarrollar la arquitectura del sistema y componentes |
| **2. Documentar tipo de arquitectura** | • Describir en el Manual el tipo de arquitectura seleccionado (por ejemplo, “arquitectura basada en servicios en la nube” o “arquitectura en capas”).<br/>• Explicar brevemente las ventajas y cómo satisface RF/RNF relevantes.          | Arquitecto owner                  | **TS SP 2.1**                                                        |
| **3. Desglose de componentes**     | • Crear secciones para cada componente principal:<br/> – Identificar el propósito funcional.<br/> – Describir el rol en el flujo de datos.<br/> – Enumerar dependencias clave y restricciones asociadas a cada componente.                  | Arquitecto Owner          | **TS SP 2.1**                                                        |
| **4. Definir criterios y decisiones** | • Establecer criterios de calidad para cada componente:<br/> – Rendimiento (por ejemplo, tiempo de respuesta esperado).<br/> – Disponibilidad (nivel de tolerancia a fallos).<br/> – Seguridad (controles de acceso, cifrado).<br/> – Escalabilidad (mecanismos de escalado).<br/>• Documentar las decisiones arquitectónicas que justifican cada criterio. | Team lead & Arquitecto Owner | **TS SP 2.1**                                                        |
| **5. Integrar diagrama de despliegue** | • Incluir en el Manual un diagrama de despliegue que muestre:<br/> – Componentes principales y sus interconexiones.<br/> – Flujos de comunicación genéricos (por ejemplo, HTTP, mensajería interna).<br/> – Entornos (pruebas, staging, producción).<br/>• Verificar que el diagrama corresponda al tipo de arquitectura y criterios establecidos. | Arquitecto Owner            | **TS SP 2.1**                                                        |
| **6. Redactar y compilar Manual**  | • Redactar en Docusaurus las secciones esenciales:<br/> 1. Tipo de arquitectura y sus ventajas.<br/> 2. Desglose de componentes con propósito y dependencias.<br/> 3. Criterios de calidad y decisiones arquitectónicas.<br/> 4. Diagrama de despliegue (imagen incrustada).| Arquitecto líder & Equipo de Arquitectura | **TS SP 2.1**                                                        |
| **7. Publicar Manual**             | • Revisar que todas las secciones estén completas y consistentes.<br/>• Publicar la página en Docusaurus y notificar al equipo de desarrollo y stakeholders.<br/>• Archivar una copia en el repositorio de documentación y actualizar control de cambios. | Arquitecto líder                  | **TS SP 2.1**                                                        |

## 📤 Salidas

1. **Manual de Arquitectura (versión final v1.0 o superior)**  
   - Documento alojado en Docusaurus con:  
     - Tipo de arquitectura de software.  
     - Desglose de componentes (Frontend, Backend, Servicios AWS).  
     - Objetivos y tecnologías detalladas.  
     - Características funcionales y de despliegue.  
     - Justificación tecnológica cuantitativa y cualitativa.  
     - Diagrama de despliegue (imagen SVG/PNG exportada).  
     - Matriz de trazabilidad (Markdown o enlace a Google Sheets).  
     - Control de cambios en frontmatter y tabla histórico.  


## 📎 Recursos relacionados

- [Plantilla CMMI – Manual de Arquitectura (portada, índice, control de cambios)](/docs/plantillas/plantilla-manual-arquitectura)  


## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>

  | **Versión** | **Descripción**                                                                                                      | **Fecha**     | **Colaborador**          |
  | ----------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------ |
  | **1.0.0**   | Creación inicial del proceso de Manual de Arquitectura        | 04/06/2025    |  Armando Méndez Castro, Juan Antonio Landeros Velazquez|

</details>
