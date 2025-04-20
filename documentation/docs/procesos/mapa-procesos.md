---
title: Mapa de Procesos
sidebar_position: 0
---

# Mapa de Procesos

---

```mermaid

    flowchart LR
        %% Definición de nodos
        PR0["PR0 - CMMI"]
        PR1["PR1 - Procesos"]
        PR2["PR2 - WBS"]
        PR3a["PR3 - Trazabilidad"]
        PR3b["PR3 - SRS"]
        PR4["PR4 - Plan"]
        PR5["PR5 - Capacitación"]
        PR6["PR6 - Recursos"]
        PR7["PR7 - Rev de Plan"]
        PR9["PR9 - Cambios en requisitos"]
        PR10["PR10 - Pruebas unitarias"]
        PR11["PR11 - Cambio de Arq"]
        PR12["PR12 - Faltas"]
        PR13["PR13 - Asistencia"]
        PR14["PR14 - Conflictos"]
        PR15["PR15 - Juntas grupales"]
        PR16["PR16 - Riesgos"]
        PR17["PR17 - Auditorías internas"]
        PR18["PR18 - Acciones correctivas"]
        PR19["PR19 - Dailys"]
        PR21["PR21 - Retro"]
        PR22["PR22 - Reporte de estado"]
        PR23["PR23 - Mejora de procesos"]
        PR24["PR24 - Métricas y análisis"]
        PR25["PR25 - Iteración"]
        PR26["PR26 - Análisis de datos"]
        PR27["PR27 - Inspección de Código"]
        
        %% Conexiones
        CambioRequisito["Cambio en requisito"] --> PR9
        NuevoProyecto["Nuevo Proyecto"] --> PR2
        
        PR0 --> PR1
        PR1 --> PR17
        PR1 --> PR18
        
        PR2 --> PR3b
        PR2 --> PR6
        
        PR3b --> PR7
        PR3b --> PR4
        
        PR9 --> PR3a
        PR9 --> PR3b
        
        PR3a --> PR10
        PR3a --> PR7
        
        PR6 --> PR4
        
        %% [*] -->|Manual de arquitectura| PR11
        
        PR11 --> PR5
        
        PR4 --> PR7
        PR7 --> PR4
        
        PR4 --> PR16
        PR16 --> PR4
        
        PR7 --> PR25
        PR25 --> PR7
        
        PR10 --> PR25
        
        PR21 --> PR25
        
        PR25 --> PR22
        PR22 --> PR25
        
        PR16 --> PR25
        PR16 --> PR19
        PR19 --> PR16
        
        PR19 --> PR25
        
        PR12 --> PR13
        
        PR22 --> PR15
        PR15 --> PR0

```

## Markdown para edición en Mermaid

```markdown
stateDiagram
%% PR1 Guía de prácticas específicas del CMMI y generación de procesos
PR1_Guia_SP_Procesos
%% PR2 Estimación de alcance, esfuerzo y coste del proyecto (WBS)
PR2_WBS
%% PR3 Proceso de Definición de MVP
PR3_SRS
%% PR4 Guía de hacer un plan de proyecto
PR4_Plan_Proyecto

    %% PR5 Planes de Capacitación
    PR5_Plan_Capacitacion
    %% PR6 Proceso para identificar recursos
    PR6_Identificar_Recursos

    %% PR7 Revisión de Planes de Proyecto
    PR7_Revision_Plan_Proyecto

    %% PR8 Comprensión y trazabilidad de requisitos
    PR8_Trazabilidad_Requisitos
    %% PR9 Gestión de cambios de requisitos
    PR9_Gestion_Cambios_Requisitos

    %% PR10 Pruebas Unitarias
    PR10_Pruebas_Unitarias
    %% PR11 Cambio y migración de arquitectura
    PR11_Migracion_Arquitectura



    %% PR12 Justificación de Faltas
    PR12_Justificacion_Faltas
    %% PR13 Recuperar Asistencia
    PR13_Recuperar_Asistencia
    %% PR14 Resolución de conflictos
    PR14_Resolucion_Conflictos
    %% PR15 Juntas Grupales
    PR15_Juntas_Grupales

    Proceso

    PR1_Guia_SP_Procesos --> Proceso: Practica especifica

    PR4_Plan_Proyecto --> PR7_Revision_Plan_Proyecto: Plan de Proyecto
    PR5_Plan_Capacitacion --> PR4_Plan_Proyecto: Plan de capacitacion
    PR6_Identificar_Recursos --> PR4_Plan_Proyecto: Plan de recursos
    PR2_WBS --> PR4_Plan_Proyecto: WBS
    PR3_SRS --> PR4_Plan_Proyecto: SRS
    PR3_SRS --> PR8_Trazabilidad_Requisitos: SRS
    PR8_Trazabilidad_Requisitos --> PR9_Gestion_Cambios_Requisitos: Requisitos
    PR7_Revision_Plan_Proyecto --> PR9_Gestion_Cambios_Requisitos: Inconsistencia de requisitos
```

## Historial de Cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Ahora abarca la obtención del SRS   | 7/3/2025  | Valeria Zuñiga y Angel Ramírez |
| **1.1**             | Añadir Proceso de Métricas y Análisis al Mapa de Procesos | 3/4/2025  | Rommel Toledo      |
