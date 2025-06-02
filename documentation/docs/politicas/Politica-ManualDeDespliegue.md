---
title: Política sobre el Manual Técnico de Instalación
sidebar_position: 9

---

# **Política sobre el Manual de Despliegue**

---

## **1. Objetivo**

Establecer los lineamientos para la elaboración y mantenimiento del Manual de Despliegue, cuyo propósito es documentar los procedimientos necesarios para desplegar y mantener en operación el sistema Zuustento Tracker en los entornos de staging y producción, garantizando consistencia, calidad y trazabilidad en los procesos de despliegue.

---

## **2. Alcance**

Esta política aplica a la documentación técnica que describe el despliegue del sistema en sus distintos entornos a través de AWS y herramientas complementarias como EC2, PM2 y Amplify. Es de uso principal para el equipo de desarrollo, personal de infraestructura, y cualquier responsable de la operación y mantenimiento del sistema.

---

## **3. Finalidad del Manual de Despliegue**

El Manual de Despliegue tiene como finalidad:

- Documentar los pasos requeridos para el despliegue del backend y frontend en sus respectivos entornos.
- Estandarizar el proceso de configuración de variables de entorno.
- Guiar el monitoreo y mantenimiento post-despliegue.
- Reducir errores y tiempos de recuperación ante fallos.

---

## **4. Contenido mínimo requerido**

Todo Manual de Despliegue debe incluir al menos:

1. **Requisitos previos**:
   - Accesos y permisos necesarios en AWS (EC2, API Gateway, S3, Amplify).
   - Llaves SSH y herramientas instaladas (Node.js, PM2, Git).
2. **Estructura del proyecto**:
   - Repositorios y su destino de despliegue.
3. **Entornos de despliegue**:
   - Detalle de entornos (staging, producción) con sus respectivas URLs y puertos.
4. **Procedimiento de despliegue del backend (EC2 + PM2)**:
   - Clonado del repositorio.
   - Instalación de dependencias.
   - Configuración de variables de entorno (.env).
   - Creación y uso de archivos de ecosistema de PM2.
   - Ejecución o reinicio de procesos.
5. **Variables de entorno**:
   - Estructura y parámetros críticos para backend y frontend.
6. **Mantenimiento y monitoreo**:
   - Comandos de PM2 (logs, restart, stop).
   - Monitoreo en Amplify.
7. **Anexos**:
   - Documentación de endpoints (Swagger).
   - Referencias complementarias.

---

## **5. Impacto esperado**

Con un Manual de Despliegue bien documentado, se espera:

- Consistencia en los despliegues en los diferentes entornos.
- Reducción de tiempos y errores durante el despliegue.
- Mejora en la trazabilidad y auditoría del proceso.
- Facilidad de mantenimiento y monitoreo continuo del sistema.

---

## **6. Responsables**

El equipo de desarrollo y el personal de infraestructura son responsables de mantener actualizado el Manual de Despliegue.  
Cada cambio en los procedimientos, herramientas o configuraciones debe ser reflejado en el documento.

---

## **7. Revisión y actualizaciones**

El manual debe revisarse y actualizarse en los siguientes casos:

- Cambios en la arquitectura o herramientas de despliegue.
- Actualización de versiones críticas (Node.js, PM2, AWS services).
- Incorporación de nuevos entornos.
- Ajustes derivados de lecciones aprendidas en despliegues anteriores.

---

## 📚 Historial de cambios

<details>
  <summary>Versiones</summary>

| **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------- | --------- | --------------- |
| **1.0.0** | Creación de la política basada en el Manual de Despliegue. | 02/06/2025 | Armando Méndez Castro |

</details>
