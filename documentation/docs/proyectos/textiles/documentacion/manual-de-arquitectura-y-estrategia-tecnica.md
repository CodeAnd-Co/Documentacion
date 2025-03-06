---
title: Manual de arquitectura y estrategia tecnica
sidebar_position: 3
---

## Tipo de arquitectura de software

Arquitectura basada en servicios en la nube con API REST en NodeJS y frontend desacoplado en React

---

## Desglose de arquitectura

- **Frontend** (React + AWS Amplify)
- **Backend** (Node.JS + Express + AWS EC2)
- **Servicios AWS** (DynamoDB, S3, etc.)
- **Servicios Google** (Firebase)

---

## Frontend

### Objetivo

- Interfaz de usuario para la tienda en línea y el backoffice

### Tecnologías

- React (vite)
- AWS Amplify para el hosting del frontend
- Tailwind CSS
- Material UI
- MercadoPago
- Axios para consumir la API REST

### Características

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
- **Carga de imágenes**
  - Uso de Pre Signed URLs para subir las imágenes de los productos a S3
- **Manejo de autenticacion de roles**
  - El frontend solo muestra opciones según el rol del usuario

### Despliegue de su frontend

- AWS Amplify

## Backend

### Objetivo

- Exponer una API REST para manejar la autenticación de usuarios, producto y pedidos.

### Tecnologías

- Node.JS + Express.JS para construir la API
- DynamoDB SDK para interactuar con la base de datos
- AWS S3 SDK para manejar las imágenes
- JWT para manejar la autenticación
- PM2 para administrar procesos en producción
- MercadoPago SDK

### Características

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

- S3 de Amazon
- El socio ya contaba con servicios de AWS y nos dará acceso a los mismos.
- DynamoDB como base de datos
- AWS amplify gen 2
- IAM para la seguridad y gestión
- CloudWatch para el monitoreo de logs del backend en EBS
- Google Firebase para el registro de usuarios

---

## Documentación del código

### Objetivo

Documentar claramente las funcionalidades y código del sistema para lectura en caso de confusiones.

- Se agregaron espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- El detalle del estándar de codificación se podrá ver en el siguiente documento: _[Estandar de codificación_] (agregar link).

---

## Beneficios de la arquitectura seleccionada

- Escalable
- Segura
- Optimizada
- Flexible
- Fácil implementación
- Conocimiento previo de la mayoría de tecnologías
