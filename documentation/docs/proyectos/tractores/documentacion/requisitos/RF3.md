---
title: "RF3: Usuario consulta el módulo de análisis."  
sidebar_position: 4
---

# RF3: Usuario consulta el módulo de análisis.

### Historia de Usuario

Yo como usuario de la aplicación de escritorio Harvester quiero acceder al módulo de análisis donde podré realizar reportes, visualizar gráficos, agregar tarjetas de texto y agregar tarjetas de gráfica para poder interpretar los datos del Excel cargado. 

  **Criterios de Aceptación:**
  - Al módulo solamente se puede acceder cuando se cargue un Excel, se seleccionen los datos a comparar y se de click en generar reporte proveniente del módulo de inicio.
  - La navegación al módulo debe ser inmediata (latencia < 1 segundo en condiciones normales).
  - La aplicación debe de hacer la carga inicial de los datos y gráficos debe completarse en menos de 10 segundos (en conexiones estándar).
  - Al momento de entrar al módulo de análisis se debe de mostrar una tarjeta de texto y una tarjeta de gráfica.
  - No se puede tener menos de una tarjeta, ya sea texto o de gráfica.
  - En dado caso de que se pueda acceder al módulo sin cargar un archivo de Excel, este mostrará una alerta donde diga que no hay datos cargados en el Excel. 
  - En el modulo de análisis se podrán descargar los reportes en pdf.
---

### Diagrama de Secuencia

```mermaid
sequenceDiagram
    participant U as Usuario  
    participant VI as Vista Inicio
    participant VA as Vista Análisis
    participant SS as iniciarSesion.ejs
    participant GR as generarReporte.ejs
    participant AG as agregarGrafica.js
    participant AT as agregarTexto.js
    participant VT as verificarToken.js
    participant VP as verificarPermisos.js

    U->>+VI: Hace clic en "Generar Reporte"
    VI->>+VT: Verificar token de sesión
    VT-->>-VI: Token válido
    VI->>+VP: Verificar permisos de usuario
    VP-->>-VI: Permisos confirmados
    
    alt Excel cargado y datos seleccionados (Flujo Exitoso)
        rect rgb(220, 255, 220)
            VI->>+VA: Navegar a módulo análisis
            VA->>+GR: Cargar generarReporte.ejs
            GR->>GR: Verificar datos en memoria
            GR->>GR: Generar tarjeta de texto inicial
            GR->>+AG: Cargar tarjeta de gráfica inicial
            AG->>AG: Procesar datos del Excel
            AG->>AG: Generar gráfico con datos
            AG-->>-GR: Gráfico generado
            GR-->>-VA: Interfaz completa cargada
            VA-->>-U: Mostrar módulo análisis con tarjetas
        end
            
        rect rgb(220, 255, 220)
            U->>+VA: Agregar nueva tarjeta de texto
            VA->>+AT: Cargar agregarTexto.js
            AT-->>-VA: Nueva tarjeta de texto creada
            VA-->>-U: Tarjeta agregada
        end
        
        rect rgb(220, 255, 220)
            U->>+VA: Agregar nueva tarjeta de gráfica
            VA->>+AG: Cargar agregarGrafica.js
            AG->>AG: Procesar datos para nuevo gráfico
            AG-->>-VA: Nueva tarjeta de gráfica creada
            VA-->>-U: Tarjeta agregada
        end
        
        rect rgb(220, 255, 220)
            U->>+VA: Descargar reporte en PDF
            VA->>+GR: Generar PDF con tarjetas actuales
            GR->>GR: Compilar datos y gráficos
            GR-->>-U: Descarga de PDF iniciada
            VA-->>-U: PDF descargado exitosamente
        end
        
        rect rgb(220, 255, 220)
            U->>+VA: Guardar plantilla
            VA->>+GR: Guardar configuración actual
            GR->>GR: Almacenar plantilla localmente
            GR-->>-VA: Plantilla guardada
            VA-->>-U: Plantilla guardada exitosamente
        end
        
    else Excel no cargado o sin datos (Flujo de Error)
        rect rgb(255, 220, 220)
            VI->>+VA: Navegar a módulo análisis
            VA->>+GR: Cargar generarReporte.ejs
            GR->>GR: Verificar datos en memoria
            GR->>GR: No hay datos disponibles
            GR-->>-VA: Mostrar alerta "No hay datos cargados"
            VA-->>-U: Mostrar mensaje de error
        end
    end
    
    VI-->>-U: Proceso completado
```

### Mockup

![Mockup](./mockups/RF3.png)

---

### Pruebas Unitarias 

#### [Pruebas de la RF](https://docs.google.com/spreadsheets/d/1W-JW32dTsfI22-Yl5LydMhiu-oXHH_xo3hWvK6FHeLw/edit?gid=111374045#gid=111374045)

---

### Pull Request
[https://github.com/CodeAnd-Co/App-Local-TracTech/pull/7](https://github.com/CodeAnd-Co/App-Local-TracTech/pull/7)

[https://github.com/CodeAnd-Co/Backend-Desacoplado-TracTech/pull/20](https://github.com/CodeAnd-Co/Backend-Desacoplado-TracTech/pull/20)

### Historial de cambios

| **Tipo de Versión** | **Descripción**                            | **Fecha** | **Colaborador**         |
| ------------------- | ------------------------------------------ | --------- | ----------------------- |
| **1.0**             |  Añadir requisitos de tractores            | 4/3/2025  | Diego Fuentes           |
| **1.1**             |  Añadir pull request a requisitos completados | 27/5/2025  | Juan Carlos Calderón|
| **2.0**             |  Refactor de Usuario Consulta Modulo Analisis | 31/5/2025  | Mauricio Anguiano|
| **2.1**             |  Arreglar documentación | 31/5/2025  | Daniel Queijeiro|
| **2.2**             |  Ordenar todas las RFs y actualizar los datos | 1/6/2025  | Mauricio Anguiano|
| **2.3**             |  Correccion criterios de aceptacion | 3/6/2025  | Mauricio Anguiano|
| **2.4**             |  Agregar pull requests de RF | 5/6/2025  | Sofía Osorio|