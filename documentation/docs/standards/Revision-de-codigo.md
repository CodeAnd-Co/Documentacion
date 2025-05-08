---
title: Estándar para la revisión de código
sidebar_position: 6
---

# Checklist para la revisión de código

## Objetivo

Los objetivos de esta checklist son:

- **Mejorar la calidad del código:** Asegurar la limpieza y legibilidad del código.
- **Mantener la consistencia:** Verificar que se sigan las guías de estilo o estándares del lenguaje utilizado.
- **Facilitar la documentación:** Un buen código está documentado y permite entender su propósito, contexto y funcionamiento.

## Errores comunes

**Estilo y legibilidad**
- [ ] Comentarios innecesarios o desactualizados.

**Funcionalidad**
- [ ] El código no cumple con su propósito.
- [ ] No se consideran casos límite o entradas inesperadas.

**Pruebas**
- [ ] No existen pruebas para el código.
- [ ] Las pruebas no cubren escenarios suficientes.

**Complejidad**
- [ ] Código duplicado.

**Seguridad**
- [ ] Entradas sin validación o sanitización.

**Buenas prácticas**
- [ ] Código no modular.

**Git y documentación**
- [ ] Commits poco descriptivos o sin mensaje.
- [ ] Cambios sin documentar.

## Checklist

1. **Legibilidad y estilo**
   - [ ] ¿El código sigue el estilo del proyecto (nombres, espacios, indentación)?
   - [ ] ¿Los nombres son claros y están en español?
   - [ ] ¿El código es fácil de entender para otros?
   - [ ] ¿Los comentarios explican las partes no obvias?

2. **Lógica y funcionalidad**
   - [ ] ¿El código hace lo que debe?
   - [ ] ¿Se consideran casos límite?
   - [ ] ¿Existen pruebas relevantes?

3. **Seguridad**
   - [ ] ¿Se validan y sanitizan las entradas del usuario?
   - [ ] ¿No se exponen datos sensibles (claves, contraseñas, tokens)?
   - [ ] ¿Se evitan vulnerabilidades comunes (ej. XSS, SQLi, CSRF)?

4. **Buenas prácticas**
   - [ ] ¿Se aplica el principio de responsabilidad única?
   - [ ] ¿El código es modular y reutilizable?
   - [ ] ¿Se siguen principios como DRY (Don’t Repeat Yourself), KISS (Keep It Simple, Stupid), YAGNI (You Aren’t Gonna Need It)?

5. **Git y documentación**
   - [ ] ¿Se siguen los estándares definidos en Docusaurus?
   - [ ] ¿La documentación está actualizada?
   - [ ] ¿Las funciones públicas o APIs están explicadas?
   - [ ] ¿El nuevo código está debidamente comentado o documentado?

## Historial de cambios

| **Versión** | **Descripción**                                       | **Fecha**  | **Colaboradores**                                                 |
|-------------|--------------------------------------------------------|------------|--------------------------------------------------------------------|
| **1.0**     | Creación de la checklist de revisión                   | 07/04/2025 | Juan Pablo Chávez Leal, Diego Alfaro Pinto, Miguel Ángel Uribe     |
| **1.1**     | Correcciones de redacción y ortografía         | 08/04/2025 | Rommel Toledo Crespo                                               |
