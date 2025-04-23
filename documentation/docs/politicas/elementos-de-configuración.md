---
title: Política de identificación de elementos de Configuración
sidebar_position: 4
---

---

## **1. Objetivo**

Esta política establece los lineamientos para identificar que elementos son seleccionados para la gestión de configuración basándose en las prácticas específicas del área de CM del *CMMI*.

---

## **2. Definiciones**

**Producto de trabajo:** Cualquier entidad generada como resultado del esfuerzo de los equipos que trabajan para los proyectos del departamento.

**Elemento de configuración:** Entidades seleccionadas para la gestión de configuración que puede consistir en varios
productos de trabajo relacionados que forman una línea base. Pueden incluir el hardware, el
equipamiento, los activos tangibles, el software, la documentación, resultados de pruebas, etc.

---

## **3. Alcance**

Esta política aplica a los elementos y productos de trabajo de los proyectos del departamento que cumplan con los criterios especificados.

---


## **4. Criterios**

Una entidad o entidades estarán sujetas a la gestión de la configuración si cumplen con algunos de los siguientes criterios:

1. Cambian con una periodicidad mayor a una semana.
2. Son dependientes entre sí.
3. Son utilizados por más de un equipo.
4. Deben ser validados por el socio formador.
5. Son de importacia crítica para el éxito del proyecto.

---

## 5. Matriz de Identificación de Elementos de Configuración

La **Matriz de Identificación de Elementos de Configuración** constituye el instrumento central para registrar y controlar la información de cada ítem. La estructura recomendada (o ejemplo de columnas) es la siguiente:

1. **Identificador (ID):**  
   - Código único que permite rastrear el elemento de configuración de manera ágil.
2. **Nombre/Descripción:**  
   - Título descriptivo, como “Código de Ética”, “Acuerdos de Trabajo”, “Manual de Arquitectura”, etc.
3. **Formato del EC:**  
   - Indicar si es un documento (PDF, Word), un repositorio de GitHub, un diagrama, etc.
4. **Categoría:**  
   - Clasificación del elemento (Arquitectura, Acuernos, etc.).
5. **Método de Control:**  
   - Especificar la herramienta o práctica con la que se gestiona.
6. **Propietario:**  
   - Persona o rol responsable de la actualización y mantenimiento del elemento.
7. **Dependencias:**  
   - Lista de otros elementos o documentos de los cuales depende o que dependen de él (por ejemplo, “Manual de Arquitectura” depende de “Diagrama de despliegue”).
8. **Cuándo se empieza a gestionar:**  
   - Momento o hito que detona la inclusión formal del elemento en la gestión de configuración (por ejemplo, “Al iniciar la segunda iteración”).
9. **Dependencias**  
   - Otros productos que se deben modificar derivado de los cambios de otro producto que obligan a actualizar la línea base.
10. **Versión:**  
    - Estado actual o número de versión del elemento.
11. **Fecha de Notificación:**  
    - Fecha en la que se anuncia un nuevo release o una modificación oficial.

Adicionalmente, se pueden incluir enlaces de herramientas colaborativas (Trac, JIRA, Confluence, etc.) para mejorar la trazabilidad.

### 5.1 Actualización y Mantenimiento de la Matriz

- **Periodicidad de Actualización:**  
  Se recomienda actualizar la matriz de manera inmediata cuando se añada, modifique o elimine un elemento. 
  
- **Responsabilidad:**  
  El propietario de cada elemento es el responsable de mantener la información actualizada.

## 7. Comunicación y Difusión

1. **Notificación Formal:**  
   - Cada  actualización o incorporación de un elemento a la matriz se comunicará a los equipos afectados a través de canales oficiales.

## 8. Mantenimiento y Actualización de la Política

- **Revisión Periódica:**  
  Esta política se revisará al menos una vez por todos los integrantes del departamento o tras eventos significativos (como auditorías o cambios normativos).

- **Responsable de la Revisión:**  
  El equipo de Aseguramiento de Calidad o el responsable designado se encargará de actualizar y validar la política, garantizando que se mantenga alineada con las mejores prácticas, las herramientas implementadas y las necesidades del departamento.

---

[Matriz de identificación de elementos de configuración.](https://docs.google.com/spreadsheets/d/1e73fKSTAhxyPqiPN32u_1mkIyCbzssFc-7Ylfs-HL3w/edit?gid=0#gid=0)

---


### **Notas Finales**

- Esta política se revisará y actualizará periódicamente conforme a la evolución de los proyectos y los estándares organizacionales.
- Cualquier modificación en esta política deberá ser aprobada por los responsables de gestión de configuración.


---

### Historial de cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación de la política   | 06/04/2025  | Diego Fuentes|