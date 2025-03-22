---
title: Definicion de Done
sidebar_position: 4
---

# Definicion de Done (Tractech)

---

### Autores

| Nombre       | Rol   |
| ------------ | ----- |
| Rommel Toledo Crespo | Autor|

---

# ✅ Definición de Done

Una historia de usuario se considerará completa cuando se cumplan todos los siguientes criterios:

---

## **Pruebas**

- Las pruebas unitarias manuales han sido creadas y ejecutadas en escenarios de verificación de datos.
- Las pruebas deben ser realizadas por un miembro distinto al que desarrolló la funcionalidad y deben arrojar los resultados esperados.
- Se han ejecutado las pruebas necesarias (arquitectura, estrés, volumen, heurísticas, integración, rendimiento y unitarias) según corresponda.

---

## **Código**

- El código cumple con el [estándar de codificación](/docs/guias/standards/general/) y está documentado usando [JSDoc](https://medium.com/swlh/creating-better-jsdoc-documentation-8b7a65744dcb).
- Se ha realizado una revisión por pares (**peer review**) por parte de otro miembro del equipo antes de hacer *merge*. Cualquier observación relevante ha sido atendida.

---

## **Documentación**

- Toda la información técnica y funcional relacionada (incluyendo código, decisiones y pruebas) ha sido documentada y agregada al apartado correspondiente en **Docusaurus**, en la sección del requisito correspondiente.
- La documentación relacionada está actualizada y disponible.

---

## **Trazabilidad**

- La historia de usuario está correctamente enlazada a su documentación, código fuente, pruebas y evidencias para mantener la trazabilidad. Esta debe ser bidireccional.

---

## **Seguridad y validaciones**

- Se cumple con validación de entradas, control de acceso por roles, y cifrado de datos, si aplica.

---

## **Interfaz de usuario**

- La interfaz relacionada con la historia de usuario cumple con los criterios de aceptación establecidos. Estos se encuentran definidos en el apartado de [Requisitos](/docs/proyectos/tractores/documentacion/requisitos/).

---

## **Criterios no funcionales**

- Se han validado los criterios no funcionales aplicables (rendimiento, usabilidad, portabilidad, accesibilidad, escalabilidad y seguridad) según lo establecido en el apartado de [Requisitos](/docs/proyectos/tractores/documentacion/requisitos/).

---

## **Control de configuración**

- Todos los documentos, pruebas, configuraciones y cambios relevantes han sido versionados y almacenados en el repositorio correspondiente.

---

## **Pull Request**

- La plantilla de pull request ha sido completada correctamente conforme a los lineamientos del departamento.

---

## **Validación del cliente**

- El cliente ha revisado y validado la historia de usuario, confirmando que cumple con los requerimientos funcionales y de negocio establecidos.