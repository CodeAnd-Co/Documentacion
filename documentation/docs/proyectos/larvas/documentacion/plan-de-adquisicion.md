---
title: Plan de adquisición de infraestructura
sidebar_position: 8
---

# Plan de adquisición de infraestructura

## Objetivo

Mantener informado al socio formador sobre los costos de adquisición de la infraestructura planificada, así como las tecnologías asociadas al sistema.

---

## Infraestructura planificada

### Hosting

- **Proveedor**: AWS EC2  
- **Especificaciones**: t2.micro, 1 vCPU, 1 GiB de memoria, 10 GB de almacenamiento  
- **Sistema Operativo**: Linux Ubuntu
- **Ventajas**: Escalabilidad, seguridad, el socio tiene créditos de AWS 
- **Nivel gratis**: 750 horas  

### Almacenamiento de respaldos

- **Proveedor**: AWS S3  
- **Ventajas**: Alta disponibilidad, seguridad  
- **Consideraciones**: Se hará por lo menos un respaldo a la semana  
- **Nivel gratis**: 5 GB de almacenamiento  

---

## Base de datos

- **Proveedor**: MariaDB instalado en EC2
- **Ventajas**: Gratis al estar incluido en la instancia de EC2

---

## Hardware

- **Proveedor**: Socio formador
- **Marca**: Dell
- **Especificaciones**: Procesador Intel Core M3, RAM 8GB  
- **Sistema Operativo**: Windows 10
- **Ventajas**: El socio formador ya cuenta con el equipo
- **Desventajas**: Las usuarias finales no tienen experiencia usando computadoras

---


# Historial de cambios

| **Tipo de Versión** | **Descripción**                                             | **Fecha** | **Colaborador**            |
| ------------------- | ----------------------------------------------------------- | --------- | -------------------------- |
| **1.0**             | Implementación de plan de adquisición de infraestructura    | 05/06/2025 | Emiliano Valdivia Lara               |