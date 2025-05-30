---
title: Manual de Arquitectura TracTech
sidebar_position: 4
---

# Manual de Arquitectura de Software

---

## Tipo de arquitectura de software

Arquitectura basada en servicios en la nube con API REST en NodeJS y frontend basado en el framework Electron con HTML, CSS y JavaScript.

## Desglose de arquitectura

La arquitectura se compone de capas principales:

- **Frontend** (Electron + HTML, CSS, JavaScript)
- **Backend** (Node.JS + Express + AWS EC2 + MySQL)

---

## Frontend

### Objetivo

Objetivo: Interfaz de usuario para la sección de analíticas, reportes y plantillas

### Tecnologías

- Framework de Electron
- CSS, HTML, JavaScript

### Características

Agregar las características del frontend de su proyecto. 

- **Inicio de sesión**
  - Pantalla de inicio de sesión
- **Análisis**
  - Módulo principal de análisis
  - Selección y carga de filtros
  - Creación y aplicación de fórmulas a los datos
  - Generación de plantillas
  - Generación de reportes
  - Interpretación de datos
  - Control de acceso según el rol del usuario
  - Carga de gráficas
- **Selección de distribuidores y tractores**
  - Panel para la selección de distribuidores y tractores a analizar
  - Opciones múltiples para tractores
- **Selección de plantillas**
  - Panel para la selección de plantillas
  - Vista previa de las plantillas
- **Periodicidad de envíos**
  - Definición de destinatarios
  - Definición de frecuencia de envío
  - Definición de cantidad envíos
- **Perfil de usuario**
  - Nombre
  - Cerrar sesión
- **Gestión de usuarios**
  - Barra de búsqueda
  - Lista de usuarios
  - Eliminar o modificar usuarios

### Despliegue de su frontend
El frontend de la aplicación se ejecutará localmente en el equipo del usuario mediante Electron, lo que significa que no requiere un servidor externo para su despliegue.

---

## Backend

### Objetivo
Desglose del componente Backend de la arquitectura. 

- Exponer una API REST para manejar la autenticación de usuarios y guardado de plantillas (backend desplegado).
- Procesamiento de los datos, generación de reportes, cargado y descargado de archivos (backend local)

### Tecnologías
Escribir las tecnologías que se usarán para crear el backend.

**Backend desplegado:**
- Node.JS + Express.JS para construir la API
- DynamoDB SDK para interactuar con la base de datos
- JWT para manejar la autenticación
- PM2 para administrar procesos en producción

**Backend local:**
- Node.JS + Express.JS para hacer peticiones al backend desplegado.
- JS PDF para el descargado de archivos al almacenamiento local
- Hyperformula para el uso, y creación de fórmulas de excel sobre los datos
- Chart JS para la creación y uso de gráficas

### Características

- **API REST**
  - Se definen endpoints para los usuarios
  - Uso de middlewares para proteger las rutas según el rol del usuario
- **RBAC y autenticación**
  - Uso de JWT para manejar las sesiones
- **Optimización**
  - Rate Limiting para evitar el abuso de la API
  - CORS para la seguridad en las peticiones

### Despliegue
- AWS EC2 para el despliegue del backend.

### Endpoints Principales
- Usar Swagger UI para documentar endpoints.
---

## Servicios de infraestructura

### Objetivo
Proveer infraestructura escalable y segura para la aplicación.

### Servicios

- **EC2 de amazon**
  - Ya que el servidor no se encargará de hacer el procesamiento de los datos, una pequeña instancia del EC2 será suficiente (Especificar).
---

## Beneficios de la arquitectura seleccionada

Redactar los beneficios de la arquitectura seleccionada.

- Escalable
- Segura
- Optimizada
- Flexible
- Fácil implementación
- Conocimiento previo de la mayoría de tecnologías
- No necesitamos contratar instancias grandes

## Diagrama de despliegue
``` mermaid 
graph TD
    Usuario <--> |Accede a| Dispositivo
    Administrador <--> |Accede a| Dispositivo
    subgraph Dispositivo
      subgraph Windows 10
        subgraph Harvester
        end
      end
    end

    Dispositivo <--> |https| Internet

    subgraph InfraestructuraAWS [Infraestructura AWS]
        subgraph VPC ["Virtual Private Cloud - VPC"]
            subgraph EC2 ["EC2"]
                subgraph ServidorUbuntu["Servidor Ubuntu"]
                    subgraph Sistema["Entorno: Node.js"]
                       ExpressFramework["express"]
                       APP["app.js"]
                    end
                    MySQL["Base de datos: MySQL"]
                end
            end
            end
    end

    Internet <--> |https| InfraestructuraAWS
    
```

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                    | **Fecha** | **Colaborador**        |
|---------------------|------------------------------------| --------- | ---------------------- |
| **1.0**             | Primera versión del manual de arquitectura        | 06/03/2025 | Daniel Contreras Chávez      |
| **2.0**             | Adición del diagrama de despliegue | 25/03/2025   | Juan Pablo Chávez Leal |
| **2.1**             | Corrección al diagrama de despliegue | 04/04/2025 | Ian Julián Estrada Castro |
| **2.2**             | Corrección de una palabra | 08/05/2025 | Rommel Toledo C. |
| **3.0**             | Eliminar servicios de AWS | 13/05/2025 | Daniel Queijeiro |