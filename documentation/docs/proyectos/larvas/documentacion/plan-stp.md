---
title: Plan STP
sidebar_position: 6
---

# Introducción

### Propósito
El proposito de este plan es garantizar la calidad del software, detectando y corrigiendo errores a tiempo para asegurar que el producto cumpla con los requisitos y expectativas de los usuarios en la aplicación móvil "Zuustentotracker".

### Alcance
**Registro:** Al digitalizar el proceso de captura de datos, la intención es reducir los errores y la duplicidad de información, lo que permite consultar con datos más fiables y que el equipo de trabajo dedique más tiempo a las actividades de mayor valor.
**Visualización:** Transformar datos en gráficos que sean intuitivos para facilitar la identificación de tendencias, patrones y anomalías, lo que mejora la capacidad para detectar oportunidades y áreas de mejora. Los datos registrados serán procesados, generando un historial y manteniendo la trazabilidad.


### Definiciones, Acrónimos y Abreviaciones

- **PPS**: Plan de Pruebas del Sistema.
- **QA**: Aseguramiento de Calidad (Quality Assurance).
- **RBAC**: Control de Acceso Basado en Roles (Role-Based Access Control).
- **MVP**: Producto Mínimo Viable (Minimum Viable Product).
- **MBI**: Incremento Mínimo de Negocio (Minimum Business Increment).
- **UI**: User Interface (Interfaz de Usuario)

# Objetivos de las Pruebas
- Validan de forma aislada el comportamiento de funciones o métodos individuales, asegurando que produzcan los resultados esperados con entradas específicas.

- Evalúan la experiencia de usuario observando cómo interactúan con la interfaz mientras verbalizan sus pensamientos, permitiendo detectar barreras de uso.

- Verifican que las nuevas funciones implementadas cumplan con los requisitos y se comporten correctamente desde su primera versión funcional.

- Aseguran que los distintos módulos del sistema funcionen correctamente en conjunto, intercambiando datos y procesando flujos de forma coherente.

- Confirman que nuevas actualizaciones o cambios no han afectado negativamente funcionalidades previamente desarrolladas y validadas.

- Validan el comportamiento del sistema en el entorno real de uso, asegurando estabilidad, acceso correcto y rendimiento aceptable.

- Confirman que el despliegue del sistema o sus actualizaciones se realizaron correctamente, sin errores de instalación ni pérdida de datos.

- Verifican que el sistema protege adecuadamente los datos y recursos, evaluando posibles vulnerabilidades y control de accesos.

- Evalúan el sistema como un todo en condiciones reales de operación, considerando tanto requerimientos funcionales como no funcionales.

- Confirman que el sistema cumple con los criterios establecidos por el cliente o usuario final, y que está listo para su liberación o uso en producción.

# Alcance de las Pruebas

### Dentro del Alcance

- **Autenticación**
  - Iniciar sesión (RF1)
  - Cerrar sesión (RF9)

- **Usuarios**
  - Registrar usuario (RF13)
  - Editar usuario (RF19)
  - Eliminar usuario (RF14)
  - Recuperar contraseña (RF35)

- **Charolas**
  - Registrar charola (RF5)
  - Buscar charola (RF6)
  - Editar charola (RF7)
  - Eliminar charola (RF8)
  - Ver detalle de charola (RF10)
  - Filtrar charolas (RF15)
  - Listar todas las charolas (RF16)
  - Ver estado de charolas (RF21)

- **Historial de Charola**
  - Consultar ancestros (RF3)
  - Consultar historial de actividad (RF18)
  - Ver cambios pasados (RF22)

- **Tamizado**
  - Seleccionar charola para tamizar (RF37)
  - Registrar tamizado (RF38)

- **Alimentación**
  - Registrar tipo de comida (RF23)
  - Editar tipo de comida (RF24)
  - Eliminar tipo de comida (RF25)

- **Hidratación**
  - Registrar tipo de hidratación
  - Editar tipo de hidratación
  - Eliminar tipo de hidratación

- **Frass**
  - Registrar frass (RF29)
  - Editar frass (RF30)

- **Reportes**
  - Descargar reportes (RF11)

- **Gráficas**
  - Consultar gráficas (RF2)

# Aproximación a las Pruebas

### Estrategia de Pruebas

Usaremos pruebas, manuales y automatizadas dentro de la aplicación. 

### Tipos de Pruebas

- Pruebas Funcionales.
- Pruebas de Usabilidad.
- Pruebas de Rendimiento.
- Pruebas de Interfaz.

### Niveles de Pruebas

- Pruebas Unitarias.
- Pruebas de Integración.
- Pruebas Heuristicas.
- Pruebas de Despliegue.
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
- Problemas de despliegue y relación con los servidores.

# Entregables de las Pruebas

- Casos de prueba.
- Datos de las pruebas.
- Resultados de las pruebas.

# Recursos para Pruebas

**Personal**: El ingeniero de QA se asegurará de la correcta aplicación de las pruebas y calidad del código. Los miembros del equipo se encargarán de hacer las pruebas. El autor de la prueba debe ser diferente al autor del caso de uso/historia de usuario.

**Herramientas**: Frameworks de testing en node

- Jest

Herramientas a considerar:
- mocha
- mochawesome
- nyc
- sinon

**Dispositivos**:
- Computadoras portátiles del equipo (Windows 10 y 11, MacOS Sequoia 15.3.1)

# Ambientes de Prueba

- Entornos locales con las mismas dependencias que el entorno de producción
- Base de datos para pruebas con datos simulados (REALISTAS)
- Computadoras portátiles: MacOS Sequoia 15.3.1, Windows 10 y 11. Ambiente de desarrollo

# Casos de Prueba

- Por cada requisito funcional/historia de usuario que forma parte del MVP y MBI debe haber un caso de prueba de portabilidad
# Riesgos y Mitigación

| Riesgos                                                           | Mitigación | 
| ----------------------------------------------------------------- | --------------------------------------------------- |
| Dispositivos en el entorno de producción                          | Priorizar las funciones que forman parte del MVP    |
| Los usuarios finales no se adaptan a la aplicación                | Capacitación y retroalimentación de los usuarios    |

# Manejo de las Pruebas

Explicación de cómo se gestionarán los defectos y los resultados de las pruebas. Se debe detallar:

- Cómo se clasificarán y priorizarán los defectos encontrados.
- Procedimientos para informar a los desarrolladores y diseñadores sobre los resultados de las pruebas.
- Herramientas utilizadas para registrar y dar seguimiento a los defectos.

# Aprobación y Firma

Proceso para validar las pruebas

- Realizar la documentación de la prueba correspondiente.
- Notificar al responsable de la aprobación.
- Notificar al QA.

# Apéndices

- [Guía para hacer casos prueba a partir de casos de uso](https://www.fing.edu.uy/inco/cursos/ingsoft/iis/files/3172_0958_usecase.pdf)

# Historial de cambios

| **Tipo de Versión** | **Descripción**                                             | **Fecha** | **Colaborador**            |
| ------------------- | ----------------------------------------------------------- | --------- | -------------------------- |
| **1.0**             | Primera versión                | 8/03/2025 | Miguel Angel Uribe Esquivel  |
| **1.1**             | Agregar frameworks, dispositivos y riesgos                 | 8/03/2025 | Ian Julián Estrada Castro  |
| **1.2**             | Manejo de pruebas y Aprobacion y firma             | 11/03/2025 | Juan Eduardo Rosas Ceron  |
| **2.0**             | Actualización del stp            | 23/05/2025 | Armando Méndez Castrp  |
