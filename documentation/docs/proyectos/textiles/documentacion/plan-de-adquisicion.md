---
title: Plan de adquisición de infraestructura
sidebar_position: 4
---

# Plan de adquisición de infraestructura

## Objetivo

Mantener informado al socio formador sobre los costos de adquisición de la infraestructura planificada, así como las tecnologías asociadas al sistema.

---

## Infraestructura planificada

### Hosting

- **Proveedor**: AWS EC2  
- **Especificaciones**: t2.micro, 1 vCPU, 1 GiB de memoria, 10 GB de almacenamiento  
- **Ventajas**: Escalabilidad, seguridad, pago por uso  
- **Nivel gratis**: 750 horas  

### Hosting de interfaz de backoffice

- **Proveedor**: AWS Amplify  
- **Capacidad**: 300 minutos de construcción, 15 GB de almacenamiento, 1 GB servido  
- **Ventajas**: Fácil despliegue, seguridad, alta disponibilidad  
- **Nivel gratis**: 15 GB de información servida, 1000 minutos de construcción, 5 GB de almacenamiento  

### Almacenamiento de imágenes

- **Proveedor**: AWS S3  
- **Capacidad**: 100 GB de almacenamiento  
- **Ventajas**: Alta disponibilidad, seguridad  
- **Consideraciones**: La cotización se hizo estimando que las imágenes pesen en promedio 158 KB  
- **Nivel gratis**: 5 GB de almacenamiento  

---

## Base de datos

- **Proveedor**: AWS RDS  
- **Capacidad**: 20 GB de almacenamiento  
- **Ventajas**: Seguridad, disponibilidad, buen rendimiento  
- **Nivel gratis**: 20 GB de almacenamiento  

---

## Autenticación

- **Tecnología utilizada**: JWT (JSON Web Tokens)  

---

## Pagos

- **Proveedor**: MercadoPago Checkout Pro  
- **Capacidad**: Soporte para tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo  
- **Ventajas**: Facilidad de implementación, confiabilidad, seguridad  

---

## Cotizaciones

- **AWS**: Cotización generada mediante la calculadora de precios oficial de Amazon.  
  [Ver cotización AWS](https://drive.google.com/file/d/1Ey0RAPLCcacJTQDKdy0Y2XiYEu_3BNdi/view?usp=drive_link)

- **MercadoPago**: Costos obtenidos desde la página oficial de MercadoPago.  
  [Ver costos de MercadoPago](https://www.mercadopago.com.mx/ayuda/33399)


# Historial de cambios

| **Tipo de Versión** | **Descripción**                                             | **Fecha** | **Colaborador**            |
| ------------------- | ----------------------------------------------------------- | --------- | -------------------------- |
| **1.0**             | Implementación de plan de adquisición de infraestructura                         | 05/30/2025 | Arturo Sánchez               |