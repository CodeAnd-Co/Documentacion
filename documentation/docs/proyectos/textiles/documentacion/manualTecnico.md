# Manual Técnico del Sistema ALTERTEX

## Índice

1. [Introducción](#1-introducción)
2. [Arquitectura del Sistema](#2-arquitectura-del-sistema)
3. [Estructura de Carpetas](#3-estructura-de-carpetas)
4. [Estrategia Técnica](#4-estrategia-técnica)
5. [Seguridad](#5-seguridad)
6. [Pruebas del Sistema](#6-pruebas-del-sistema)
7. [Despliegue y CI/CD](#7-despliegue-y-cicd)
8. [Documentación Visual](#8-documentación-visual)
9. [Referencias](#9-referencias)
10. [Historial de Cambios](#10-historial-de-cambios)

---

## 1. Introducción

### 1.1 Propósito

Este documento técnico detalla la arquitectura, codificación, pruebas, despliegue y mantenimiento del sistema ALTERTEX. Está destinado a desarrolladores, QA y personal técnico encargado del soporte, mantenimiento o evolución del sistema.

### 1.2 Alcance

Incluye toda la información técnica necesaria para entender la estructura, diseño, pruebas, calidad del software, despliegue y uso de herramientas DevOps del sistema ALTERTEX. Cubre tanto frontend como backend, bases de datos, integraciones y seguridad.

---

## 2. Arquitectura del Sistema

### 2.1 Tecnologías Utilizadas

* **Frontend:** React + Vite + Material UI
* **Backend:** Node.js + Express.js
* **Base de Datos:** AWS RDS (MySQL 8.0.37)
* **Almacenamiento:** AWS S3
* **Despliegue:** Amplify (Frontend) y EC2 + PM2 (Backend)
* **Autenticación:** JWT + API Key + RBAC
* **Infraestructura Adicional:** CloudWatch, GitHub Actions

### 2.2 Diagrama de Arquitectura General

* Frontend se comunica con API Gateway usando `x-api-key` y JWT.
* API Gateway redirige al backend en EC2.
* Backend accede a RDS MySQL y S3 según sea necesario.

---

## 3. Estructura de Carpetas

### 3.1 Backend

```bash
/backend
│
├── Autenticacion/
│   ├── controllers/
│   ├── routes/
│
├── Roles/
│   ├── controllers/
│   ├── routes/
│   ├── repositorios/
│
├── Utilidades/
│   ├── middlewares/
│   ├── services/
│
├── Configuracion/
│   └── conexiones.js
│
├── pruebasUnitarias/
├── app.js
```

### 3.2 Frontend (Atomic Design)

```bash
/src
├── hooks/
├── rutas/
├── constantes/
├── dominio/
│   ├── modelos/
│   ├── servicios/
│   ├── repositorios/
├── vistas/
│   ├── componentes/
│   │   ├── atomos/
│   │   ├── moleculas/
│   │   ├── organismos/
│   ├── paginas/
├── estilos/
```

---

## 4. Estrategia Técnica

### 4.1 Estrategia de Ramas

* `main`: código en producción
* `staging`: pruebas de aceptación
* `develop`: desarrollo activo
* `feature/nombre`: nuevas funcionalidades

### 4.2 Commits

Uso de [Conventional Commits](https://www.conventionalcommits.org/).

### 4.3 Documentación

* JSDoc para funciones y controladores
* Swagger para documentar endpoints REST

---

## 5. Seguridad

* **JWT:** Usado para autenticación de usuarios
* **API Key:** Validada por middleware en cada ruta protegida
* **RBAC:** Basado en roles y permisos almacenados en base de datos
* **Protecciones:** CSRF, validaciones SQL, validación de inputs

---

## 6. Pruebas del Sistema

### 6.1 Objetivos de las Pruebas

* Verificar funcionalidades (MVP y MBI)
* Evaluar integración
* Medir rendimiento y carga
* Asegurar seguridad (RBAC, autenticación)

### 6.2 Pruebas Funcionales

* Registro/login
* CRUD de roles, cuotas, sets de productos
* Visualización de gráficas
* Autenticación y protección de rutas

**Ejemplo:**

```markdown
ID: RF6-001
Funcionalidad: Crear Rol
Precondición: Usuario autenticado con permiso
Pasos: Ingresar módulo → Añadir rol → Llenar formulario → Guardar
Resultado: Rol guardado en RDS y mensaje de éxito
```

### 6.3 Pruebas de Volumen

* Hasta 30,000 registros
* Herramientas: Postman, CloudWatch, scripts Node.js
* Métricas: latencia, integridad de datos, concurrencia

### 6.4 Pruebas de Estrés

* Hasta 180,000 registros, +3,000 conexiones simultáneas
* Simulación de caídas, errores de red, concurrencia extrema
* Herramientas: Apache JMeter, Postman

### 6.5 Pruebas de Seguridad

* Inyección SQL
* Validación de tokens
* Verificación de accesos según rol

### 6.6 Ambientes de Prueba

| Entorno     | Características          |
| ----------- | ------------------------ |
| Local       | Node.js + MySQL          |
| Staging AWS | EC2 + Amplify + RDS + S3 |

### 6.7 Manejo de Defectos

* Documentación vía GitHub Issues
* Clasificación: bloqueante, crítico, menor
* Procedimiento: subir evidencia → asignar → corregir → validar

### 6.8 Firmas de Aprobación

* QA Responsable
* Team Lead

---

## 7. Despliegue y CI/CD

### 7.1 Backend (EC2 + PM2)

* Deploy automatizado vía GitHub Actions → pull en EC2 → restart con PM2

### 7.2 Frontend (Amplify)

* Amplify escucha `main` → despliegue automático

### 7.3 Variables de Entorno

* `.env` para frontend
* `process.env` en backend

---

## 8. Documentación Visual

### 8.1 Storybook

* Documentación visual de componentes frontend
* Atomos, Moleculas, Organismos

### 8.2 Swagger

* Documentación interactiva de endpoints backend

---



## 9. Referencias

* [Manual de despliegue AWS Amplify y EC2](manual-despliegue-textiles.md)
* [Diagrama MER y Diccionario de datos](diagrama-mer.md)
* [Estrategia técnica](estrategia-tecnica-textiles.md)
* [Manual de prueba de arquitectura](prueba-de-arquitectura.md)
* [Plan de Pruebas de Software](plan-stp.md)
* [Plan de Pruebas de Volumen](pruebas-vol.md)
* [Plan de Pruebas de Estrés](pruebas-est.md)
* [Endpoints usados para la prueba de arquitectura](endpoints-prueba-arquitectura.md)




---

## 10. Historial de Cambios

| Versión | Descripción                        | Fecha      | Colaborador       |
| ------- | ---------------------------------- | ---------- | ----------------- |
| 1.0     | Versión inicial del manual técnico | 14/05/2025 | Arturo Sánchez  |
