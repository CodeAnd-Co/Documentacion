---
title: Plan STP
---

### Autores

| Nombre           | Rol   |
| ---------------- | ----- |
| Miguel Angel Uribe Esquivel | Autor |

---

# Introducción

### Propósito
El proposito de este plan es garantizar la calidad del software, detectando y corrigiendo errores a tiempo para asegurar que el producto cumpla con los requisitos y expectativas de los usuarios.

### Alcance
**Registro:** Al digitalizar el proceso de captura de datos, la intención es reducir los errores y la duplicidad de información, lo que permite consultar con datos más fiables y que el equipo de trabajo dedique más tiempo a las actividades de mayor valor.
**Visualización:** Transformar datos en gráficos que sean intuitivos para facilitar la identificación de tendencias, patrones y anomalías, lo que mejora la capacidad para detectar oportunidades y áreas de mejora. Los datos registrados serán procesados, generando un historial y manteniendo la trazabilidad.


### Definiciones, Acrónimos y Abreviaciones

- **PPS**: Plan de Pruebas del Sistema.
- **QA**: Aseguramiento de Calidad (Quality Assurance).
- **RBAC**: Control de Acceso Basado en Roles (Role-Based Access Control).
- **MVP**: Producto Mínimo Viable (Minimum Viable Product).
- **MBI**: Incremento Mínimo de Negocio (Minimum Business Increment).

# Objetivos de las Pruebas

- Detectar problemas de usabilidad y experiencia del usuario aplicando criterios expertos, lo que facilita la mejora de la interfaz y la interacción general.
- Verificar que los distintos módulos o componentes del sistema se comuniquen correctamente y funcionen en conjunto, asegurando la coherencia y el flujo adecuado de la información.
- Validar que el proceso de instalación y configuración del software en el entorno de producción se realice sin contratiempos, garantizando que la transición del entorno de desarrollo a producción sea exitosa.
- Evaluar la robustez y estabilidad del sistema bajo condiciones de carga extrema, identificando cuellos de botella y determinando la capacidad máxima antes de que el sistema falle.
- Asegurar que cada componente o módulo individual funcione según lo esperado, permitiendo detectar y corregir errores en etapas tempranas del desarrollo.
- Verificar la funcionalidad completa de la aplicación según los requisitos especificados.
- Comprobar la seguridad de los datos de los usuarios y la implementación correcta del RBAC.

# Alcance de las Pruebas

### Dentro del Alcance

- Ejemplo 1
- Ejemplo 2

### Fuera del Alcance

- Ejemplo 1
- Ejemplo 2

# Aproximación a las Pruebas

### Estrategia de Pruebas

### Tipos de Pruebas

- Pruebas Funcionales.
- Pruebas de Usabilidad.
- Pruebas de Rendimiento.
- Pruebas de interfaz.

### Niveles de Pruebas

- Pruebas Unitarias.
- Pruebas de Integración.
- Pruebas Heuristicas
- Pruebas de Despliegue
- Pruebas de Estrés. 

# Criterios de las Pruebas

### Criterios de Aceptación

- Todas las funcionalidades principales deben funcionar según lo especificado y cumpliendo sus historias de usuario.
- El sistema debe responder a las solicitudes del usuario dentro de un tiempo de respuesta aceptable; menos de 2 segundos para la mayoría de las operaciones.
- El sistema debe ser escalable para soportar hasta 20 usuarios concurrentes sin que se degrade significativamente el rendimiento. Actualmente, Zuustento cuenta con 4 usuarios y se proyecta una expansión a 20 colaboradores en los próximos 2 años. Aunque este límite no es elevado, es esencial que la arquitectura permita adaptaciones para futuros crecimientos.
- La interfaz debe ser intuitiva, permitiendo a los usuarios navegar con facilidad. Los botones deben ofrecer una interacción sencilla y las gráficas presentar los datos relevantes de forma clara y comprensible. El diseño debe ser minimalista y limpio, evitando un aspecto desordenado, y estar optimizado para su uso en tabletas.
- El 90% de los usuarios deben calificar la usabilidad como satisfactoria o mejor.

### Criterios de Suspensión

- Fallos críticos que impidan el funcionamiento básico de la aplicación.
- Baja satisfacción de los involucrados.
- Problemas de despliegue y relación con los servidores.

# Entregables de las Pruebas

- Documentación de la realización y resultado de las pruebas.

# Recursos para Pruebas

Ejemplos:

**Personal**:

**Herramientas**:

**Dispositivos**:

# Ambientes de Prueba

En esta sección se deben describir los entornos en los que se llevarán a cabo las pruebas. Es importante incluir:

- Tipos de entornos utilizados (desarrollo, pruebas, producción, etc.).
- Configuración de los entornos, como bases de datos de prueba y servidores.
- Dispositivos o plataformas en las que se ejecutarán las pruebas (iOS, Android, navegadores, etc.).

# Casos de Prueba

Aquí se documentan los casos de prueba diseñados para validar la funcionalidad del software. Se debe incluir:

- Una descripción de cómo se estructuran los casos de prueba.
- Criterios para seleccionar los casos de prueba según el alcance del sistema.
- Ubicación o referencia donde se pueden consultar los casos de prueba detallados.

# Riesgos y Mitigación

Identificación de posibles riesgos que podrían afectar las pruebas y sus estrategias de mitigación. Se deben considerar:

- Retrasos en el desarrollo o disponibilidad del entorno.
- Problemas de compatibilidad entre dispositivos o plataformas.
- Estrategias para minimizar los riesgos, como priorizar pruebas críticas o realizar pruebas tempranas.

# Manejo de las Pruebas

Explicación de cómo se gestionarán los defectos y los resultados de las pruebas. Se debe detallar:

- Cómo se clasificarán y priorizarán los defectos encontrados.
- Procedimientos para informar a los desarrolladores y diseñadores sobre los resultados de las pruebas.
- Herramientas utilizadas para registrar y dar seguimiento a los defectos.

# Aprobación y Firma

Proceso de validación del plan de pruebas. Se debe incluir:

- Responsables de la aprobación (QA, Product Owner, equipo de desarrollo, etc.).
- Procedimiento para documentar la ejecución de las pruebas y su aprobación.
- Criterios para determinar si el software está listo para su lanzamiento.

# Apéndices

Espacio para incluir referencias adicionales o documentación complementaria, como:

- Enlaces a carpetas con casos de prueba detallados.
- Documentos relacionados con normativas de calidad o metodologías de prueba utilizadas.
- Información adicional que ayude a la comprensión del plan de pruebas.
