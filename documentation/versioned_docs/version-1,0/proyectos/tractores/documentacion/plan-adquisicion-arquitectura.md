---
title: Plan de adquisición de infraestructura
sidebar_position: 12
---

# Plan de adquisición de infraestructura

---

## Objetivo

Definir los costos de la infraestructura planeada e informar al socio de estos costos.

---

## Infraestructura Planificada

#### Hosting de backend desacoplado

**Proveedor:** AWS EC2 t4g.medium

#### Especificaciones

- **2 Núcleos**
- **4GB de memoria RAM**
- **Almacenamiento EBS**
- **5 Gigabits de rendimiento de red**

---

#### Ventajas

- Es una de las instancias más rentables dentro de AWS para cargas de trabajo ligeras y moderadas.
- Ideal para aplicaciones con uso de CPU intermitente, gracias a su modelo de créditos de CPU.
- Bajo costo operativo, lo que permite escalar horizontalmente si se requiere mayor capacidad.
- Compatible con Instance Savings Plans, lo que permite reducir aún más los costos con compromisos a largo plazo.

---

#### Consideraciones

Se propone el uso de EC2 Instance Savings Plan para el costo del servidor, por lo que si se necesita aumentar el rendimiento de red no es posible mejorarlos durante el periodo por el que ya se pagó.

---

## Cotización

Cotizaciones generadas con la calculadora de precios de Amazon: [Aquí se encuentra el link](https://drive.google.com/file/d/1FlJALKFlD4zp4iKF97G-6rtFDlhKZqPN/view?usp=sharing)

---

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación del documento   | 13/3/2025  | Daniel Queijeiro Mauricio Anguiano Juarez  |
