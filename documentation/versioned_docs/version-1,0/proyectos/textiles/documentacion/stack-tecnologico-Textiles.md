---
title: Diagrama de Stack Tecnológico TracTech
---

# Diagrama Stack Tecnológico TracTech

```mermaid

graph TD
    
    A[Stack Tecnológico] --> B[Frontend]
    A --> C[AWS]
    
    
    B --> B1[Vite]
    B --> B2[NodeJS]
    B --> B3[Material UI]
    B --> |Autenticación| B4[JWT]
    B1 --> B1_1[React]
    
    C --> |Hosting Frontend| C4[Amplify]
    
    C2 --> C1[Backend]
    C1 --> |Lenguaje| C1_1[JavaScript]
    C1 --> C1_2[NodeJS]
    C1 --> C1_3[ExpressJS]
    
    C --> |Servidor| C2[EC2]
    C2 --> C2_1[PM2]
    C2 --> C2_2[Git]
    
    C --> |Base de datos| C3[RDS]
    C3 --> C3_1[MySQL]

    C4 --> B








```

---
## Historial de cambios

| **Tipo de versión** | **Descripción**                                  | **Fecha**  | **Colaborador**    |
|---------------------|--------------------------------------------------|------------|--------------------|
| **1.0**             | Primera versión de diagrama de stack tecnológico | 05/30/2025 | Diego Alfaro Pinto |