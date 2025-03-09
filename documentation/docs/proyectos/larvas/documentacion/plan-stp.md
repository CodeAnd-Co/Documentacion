---
title: Plan STP
---

### Autores

| Nombre                      | Rol   |
| --------------------------- | ----- |
| Miguel Angel Uribe Esquivel | Autor |
| Ian Julián Estrada Castro   | Autor |
| Juan Eduardo Rosas Cerón    | Autor |

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

- Detectar problemas de usabilidad y experiencia del usuario aplicando criterios expertos, lo que facilita la mejora de la interfaz y la interacción general.
- Verificar que los distintos módulos o componentes del sistema se comuniquen correctamente y funcionen en conjunto, asegurando la coherencia y el flujo adecuado de la información.
- Validar que el proceso de instalación y configuración del software en el entorno de producción se realice sin contratiempos, garantizando que la transición del entorno de desarrollo a producción sea exitosa.
- Evaluar la robustez y estabilidad del sistema bajo condiciones de carga extrema, identificando cuellos de botella y determinando la capacidad máxima antes de que el sistema falle.
- Asegurar que cada componente o módulo individual funcione según lo esperado, permitiendo detectar y corregir errores en etapas tempranas del desarrollo.
- Verificar la funcionalidad completa de la aplicación según los requisitos especificados.
- Comprobar la seguridad de los datos de los usuarios y la implementación correcta del RBAC.

# Alcance de las Pruebas

- Módulos:
    - Registro.
    - Visualización.

### Dentro del Alcance

- Ejemplo 1
- Ejemplo 2

### Fuera del Alcance

- Pendiente

# Aproximación a las Pruebas

### Estrategia de Pruebas

Usaremos pruebas manuales y automatizadas dentro de la aplicación. 

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
- Baja satisfacción de los involucrados.
- Problemas de despliegue y relación con los servidores.

# Entregables de las Pruebas

- Casos de prueba.
- Scripts de las pruebas.
- Datos de las pruebas.
- Resultados de las pruebas.

# Recursos para Pruebas

**Personal**: El ingeniero de QA se asegurará de la correcta aplicación de las pruebas y calidad del código. Los miembros del equipo se encargarán de hacer las pruebas. El autor de la prueba debe ser diferente al autor del caso de uso/historia de usuario.

**Herramientas**: Frameworks de testing en node

- Jest

Herramientas a considerar:

- chai
- chai-http
- mocha
- mochawesome
- nyc
- sinon

**Dispositivos**:

- Tablet industrial con Windows 10
- Computadoras portátiles del equipo (Windows 10 y 11, MacOS Sequoia 15.3.1)
- Dispositivos móviles del equipo (iOS 18, Android 14)

# Ambientes de Prueba

- Entornos locales con las mismas dependencias que el entorno de producción
- Base de datos para pruebas con datos simulados (REALISTAS)
- Computadoras portátiles: MacOS Sequoia 15.3.1, Windows 10 y 11. Ambiente de desarrollo

# Casos de Prueba

- Por cada requisito funcional/historia de usuario que forma parte del MVP y MBI debe haber un caso de prueba. [Guía para hacer casos prueba a partir de casos de uso](https://www.fing.edu.uy/inco/cursos/ingsoft/iis/files/3172_0958_usecase.pdf)

# Riesgos y Mitigación

| Riesgos                                                           | Mitigación | 
| ----------------------------------------------------------------- | --------------------------------------------------- |
| Disponibilidad del entorno                                        | Prioizar las funciones que forman parte del MVP     |
| El uso de una nueva tecnología (Flutter) para la aplicación móvil | Capacitación en Flutter                             |
| Implementación de frameworks de pruebas                           | Capacitación en el uso de los frameworks y sus usos |
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

# Registro de cambios

| Autor                       | Descripción                                | Versión |
| --------------------------- | ------------------------------------------ | ------- |
| Miguel Angel Uribe Esquivel | Primera versión                            | 1.0     |
| Ian Julián Estrada Castro   | Agregar frameworks, dispositivos y riesgos | 1.1     |
| Juan Eduardo Rosas Ceron    | Manejo de pruebas y Aprobacion y firma     | 1.2     |