---
title: Plantilla Manual de Arquitectura
sidebar_position: 14
---

## Tipo de arquitectura de software

Escribir el tipo de arquitectura que maneja su proyecto.

**Ejemplo:**

- Arquitectura basada en la nube

---

## Desglose de arquitectura

Escribir el desglose de los componentes de arquitectura.

**Ejemplo:**
La arquitectura se compone de capas principales:

- **Frontend** (React + AWS Amplify)
- **Backend** (Node.JS + Express + AWS EC2)
- **Servicios AWS** (DynamoDB, S3, etc.)

---

## Frontend

### Objetivo

Desglose del componente Frontend de la arquitectura.

**Ejemplo:**

- Interfaz de usuario para la tienda en línea y el backoffice

### Tecnologías

Escribir todas las tecnologías que se usarán para el frontend (Frameworks de diseño, tecnologías para consumir APIs).

### Características

Agregar las características del frontend de su proyecto.

**Ejemplo:**

- **E-commerce**
  - Página principal con productos
  - Carrito de compras y checkout
  - Historial de pedidos
  - Filtros
- **Backoffice**
  - Panel para la administración de productos y pedidos
  - Control de acceso según el rol del usuario
  - Panel para administración de cuotas (puntos)
  - Carga de imágenes
  - Uso de Pre Signed URLs para subir las imágenes de los productos a S3
  - Manejo de autenticación y roles
  - El frontend solo muestra opciones según el rol del usuario

### Despliegue de su frontend

Donde se hosteará su frontend.

---

## Backend

### Objetivo

Desglose del componente Backend de la arquitectura.

**Ejemplo:**

- Exponer una API REST para manejar la autenticación de usuarios, producto y pedidos.

### Tecnologías

Escribir las tecnologías que se usarán para crear el backend.

**Ejemplo:**

- Node.JS + Express.JS para construir la API
- DynamoDB SDK para interactuar con la base de datos
- AWS S3 SDK para manejar las imágenes
- JWT para manejar la autenticación
- PM2 para administrar procesos en producción

### Características

Agregar las características del backend de su proyecto.

**Ejemplo:**

- **API REST**
  - Se definen endpoints para los usuarios
  - Uso de middlewares para proteger las rutas según el rol del usuario
- **RBAC y autenticación**
  - Uso de JWT para manejar las sesiones
- **Optimización**
  - Rate Limiting para evitar el abuso de la API
  - CORS para la seguridad en las peticiones
  - AWS CloudWatch para registrar errores y métricas

### Despliegue

- AWS EC2 para el despliegue del backend.

### Endpoints Principales

- Usar Swagger UI para documentar endpoints.

---

## Servicios de infraestructura

### Objetivo

Proveer infraestructura escalable y segura para la aplicación.

### Servicios

Escribe tu servicio a utilizar, justificación técnica breve de la elección del servicio y alternativas consideradas.

**Ejemplo:**

- **S3 de Amazon**
  - El socio ya contaba con servicios de AWS y nos dará acceso a los mismos.

**Alternativas:**

- Azure

---

## Beneficios de la arquitectura seleccionada

Redactar los beneficios de la arquitectura seleccionada.

**Ejemplo:**

- Escalable
- Segura
- Optimizada
- Flexible
- Fácil implementación
- Conocimiento previo de la mayoría de tecnologías

---

### Historial de cambios

| **Tipo de Versión** | **Descripción**                                                                               | **Fecha**  | **Colaborador**            |
| ------------------- | --------------------------------------------------------------------------------------------- | ---------- | -------------------------- |
| **1.0**             | Creación del plantilla                                                                        | 05/03/2025 | Diego Ricardo Alfaro Pinto |
| **1.1**             | agregar plantilla de estrategia tecnica, modificacion de plantilla de manual de arquitectura. | 06/03/2025 | Emiliano Valdivia          |
| **1.3**             | Resolucion de conclicto                                                                       | 06/03/2025 | Emiliano Valdivia Lara     |
