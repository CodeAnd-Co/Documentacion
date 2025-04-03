---
title: Requisitos No Funcionales
sidebar_position: 2
---

---

# Requisitos No Funcionales

#### Descripción General

Los requisitos no funcionales establecen las expectativas en términos de tiempo de respuesta, capacidad de carga, compatibilidad con diferentes plataformas, accesibilidad para los usuarios, disponibilidad, entre otros aspectos. También incluyen criterios de seguridad, como el cifrado de datos y la protección contra ataques, así como la facilidad de mantenimiento y escalabilidad del sistema, asegurando que pueda adaptarse a nuevas necesidades y crecimiento sin comprometer la estabilidad del sistema.

---

## Rendimiento

- El tiempo de respuesta tiene que ser menor a **5 segundos**.
- El sistema debe soportar al menos **5,000 usuarios concurrentes**.

## Usabilidad

- El administrador se debe de tardar **6 horas** en aprender a utilizar el sistema de backoffice.
- El sistema debe ser compatible con distintos navegadores:
  - **Chrome** versión **133.0.6943.126**
  - **Firefox** versión **135.0.1**
- Un empleado debe de tardar **1 hora** en aprender a utilizar el sistema de e-commerce.

## Disponibilidad

- El sistema debe de contar con **redundancia de datos** y **sistemas de respaldo**.

## Portabilidad y Compatibilidad

- El sistema debe contar con **estándares abiertos** para facilitar la integración con otros sistemas.

## Mantenibilidad

- El sistema debe contar con una **documentación clara y actualizada**.
- Un desarrollador debe poder encontrar la documentación en **15 minutos**.

## Escalabilidad

- El sistema debe soportar al menos **5,000 - 10,000 usuarios registrados**.
- El sistema debe permitir la **carga masiva de datos** y facilitar la incorporación de **nuevas funciones sin afectar las existentes**.

## Seguridad

- Los **datos sensibles** guardados en la base de datos (ej. contraseñas) deben estar **cifrados usando bcrypt**.
- Una computadora debe tardar **más de 3 años** en descifrar una contraseña.
- El sistema debe contar con protección contra:
  - **Ataques CSRF**
  - **Ataques por inyección NoSQL**
- El sistema debe contar con un **sistema de autorización y autenticación**.
- El sistema **cierra la sesión** de los usuarios después de **8 horas** desde que iniciaron sesión.

---

### Historial de cambios

| Tipo de Versión | Descripción             | Fecha    | Colaborador                            |
| --------------- | ----------------------- | -------- | -------------------------------------- |
| 1.0             | Creación de Descripción | 6/3/2025 | Ángel Mauricio Ramírez Herrera         |
| 1.1             | Modificación Roles      | 3/4/2025 | Rodrigo Antonio Benítez De La Portilla |

---
