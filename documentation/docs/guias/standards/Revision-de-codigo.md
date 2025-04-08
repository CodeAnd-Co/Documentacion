---
title: Estandar para la revisión de código
sidebar_position: 6
---
# Checklist para la revisión de código
---

## Objetivo
Los objetivo de esta checklist son:

- **Mejorar la calidad del código:** Aseguramos la limpieza y legibilidad del mismo.
- **Mantener consistencia:** Se verifica que se sigan guías de estilo o estándares en el lenguaje que se utilizará.
- **Ayuda a la documentación:** Buen código suele estar documentado, ayuda a entender el propósito , contexto y funcionamiento de él.

## Checklist
1. **Legibilidad y estilo**
 - [ ] ¿El código sigue el estilo del proyecto (nombres, espacios, indentación)?

 - [ ] ¿Los nombres son claros y están en español?

 - [ ] ¿Es fácil de entender para alguien más?

 - [ ] ¿Los comentarios ayudan a entender partes no obvias?

2. **Lógica y funcionalidad**
- [ ] ¿El código hace lo que debe?

 - [ ] ¿Se consideran casos límite?

 - [ ] ¿Hay pruebas relevantes?

3. **Seguridad**
 - [ ] ¿Se validan y sanitizan las entradas del usuario?

 - [ ] ¿No hay datos sensibles expuestos (claves, contraseñas, tokens)?

 - [ ] ¿Se evitan vulnerabilidades comunes (ej. XSS, SQLi, CSRF)?


4. **Buenas prácticas**
 - [ ] ¿Se aplica el principio de responsabilidad única?

 - [ ] ¿El código es modular y reutilizable?

 - [ ] ¿Se siguen principios como DRY (Don’t Repeat Yourself), KISS (Keep It Simple, Stupid), YAGNI (You Aren’t Gonna Need It)?

5. **Git y documentación**

 - [ ] ¿Se sigue el estándar definido en docusaurus?
 - [ ] ¿Se ha actualizado la documentación si es necesario?
 - [ ] ¿Las funciones públicas o APIs están explicadas?
 - [ ] ¿El código nuevo está debidamente comentado o documentado?

 



 ## Historial de cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación de la checklist de revisión   | 7/4/2025  | Juan Pablo Chávez Leal, Diego Alfaro Pinto y Miguel Ángel Uribe |
