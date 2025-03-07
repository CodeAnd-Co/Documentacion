---
title: Cambio y migración de arquitectura
sidebar_position: 8
---

# Cambio y migración de arquitectura

**Última actualización** 06 de marzo del 2025 por Miguel Angel Uribe Esquivel

---

### Autores
| Nombre                            | Rol       |
| --------------------------------- | --------- |
| Miguel Angel Uribe Esquivel       | Autor     |
| Emiliano Valdivia Lara       | Co-autor     |
---

### Objetivo

* Garantizar el cambio en la arquitectura de un proyecto de manera estructurada.
* Minimizar los riesgos de la migración del sistema.
* Asegurar que la calidad del software siga igual aun con el imprevisto.
---

### Entradas

1. Manual de Arquitectura anterior.
2. Motivo del cambio.
3. Nombre(s) de la nueva arquitectura y/o tecnología a utilizar.


### Proceso

| Fase                  | Descripción                                                                               | Responsables       | Meta y práctica específica del CMMI |
| --------------------- | ----------------------------------------------------------------------------------------- | -------------------| -----------------------------|
|**Análisis y evaluación**| Inicialmente se analizan los motivos por el cual ocurrió el cambio de arquitectura en el proyecto y se evalúa la probabilidad de un posible cambio futuro.   | Architecture Owner, Team members       | CM 2.1(Rastreo de peticiones de cambio a los productos de trabajo), RSKM 3.1 (Planes de contingencia y mitigación de riesgos) |
| **Investigación**                      | Se investiga la nueva arquitectura y se recopila la documentación necesaria para la capacitación y despliegue. | Architecture Owner | PP 2.5 (Planificar el conocimiento y las habilidades necesarias para desarrollar el proyecto) |
| **Planificación**| Se planifica la migración, estableciendo plazos temporales, recursos y medidas de contingencia para el cambio.  | Architecture Owner, Team leader, Product Owner| RD 3.4 (Análisis de requerimientos para balancear necesidades y restricciones) |
| **Preparación del entorno de migración** | Hacer el despliegue del nuevo sistema, esto consistiendo en crear y configurar el entorno de la nueva arquitectura, haciendo uso de las guías obtenidas con anterioridad. | Architecture Owner | TS 1.1: Desarrollo de soluciones alternativas y criterios de selección, CM 2.2: Control de cambios a la configuración |
| **Migración de los datos (en caso de ser necesario)**          | Recopilar todos los datos que todavía se encuentran en la arquitectura anterior y hacer la inserción de los mismos en la nueva arquitectura. Esto involucra bases de datos, ficheros, imágenes, archivos, etc. | Team members, Architecture Owner | CM 2.2 Control de cambios a la configuración |
| **Implementación y pruebas**    | Realizar pruebas de integración, rendimiento y seguridad en el entorno de migración. Documentar resultados, incidencias y efectuar las correcciones necesarias para asegurar la integridad del sistema. | Team members, Architecture Owner | REQM SP 1.3 (Administrar cambios a los requisitos), PP SP 2.7 (Establecer y mantener los elementos del plan). |
| **Despliegue y actualización** |Se lleva la nueva arquitectura a producción de forma controlada, actualizando el Manual de Arquitectura para reflejar los cambios aprobados y la nueva configuración del sistema. | Architecture Owner    | CM 2.2 (Control de cambios a la configuración e incorporación de cambios aprobados) |
| **Seguimiento y retroalimentación** |Se monitorea el desempeño post-implementación, se recopila retroalimentación de los usuarios y se evalúa la efectividad del cambio. | Team leader, Architecture Owner, Product Owner, Team Members | CM 2.2 (Control de cambios a la configuración e incorporación de cambios aprobados) |
---

### Salidas
1. Manual de Arquitectura actualizado.
2. Sistema Migrado.