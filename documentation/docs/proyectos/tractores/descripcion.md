---
title: Descripción General
sidebar_position: 1
---

# Descripción General del Proyecto

---

**Nombre de la Empresa:** Case New Holland México

## Análisis de Necesidades 😑

### Problemas Actuales

CNH busca mejorar su conexión con los clientes después de la compra, ofreciendo soporte post-venta eficiente mediante un sistema centralizado de reportes. Actualmente, los distribuidores deben de solicitar la generación de sus reportes de manera manual, lo que genera perdida de tiempo a la hora de realizar toda la limpieza de la información extraída. La nueva solución digitalizará este proceso para brindar una experiencia más ágil y automatizada. 

### Misión del proyecto
Aumentar la conexión que CNHMx tiene con sus clientes finales creando soluciones que cumplan con los estándares de calidad basándonos en buenas prácticas de desarrollo de software.

### Visión del producto
Optimizar procesos de CNH para asegurar una conexión efectiva y confiable con sus clientes.

### Visión del equipo:
Ser un equipo de INGENIEROS que aprende de sus errores y levanta proyectos de las cenizas.

### Restricciones
- Existen 10 semanas para desarrollar la solución.
- Conexión a internet: El sistema requerirá acceso a internet para poder sincronizar los datos ya sea mediante una conexión con Field Ops o TLXplorer.
- Acceso restringido a datos en plataforma global: Debido a políticas dentro de CNH la integración completa con Field Ops no es viable, requiriendo métodos alternativos de acceso.
- Uso exclusivo de Windows 11: La aplicación de escritorio estará diseñada para ejecutarse en sistemas operativos Windows, debido a que todas las computadoras de CNH utilizan este sistema. 


### Nuestros Valores 

| **Valor**            | **Descripción**                                                                 |
|----------------------|----------------------------------------------------------------------------------|
| 🏆 **Ser el mejor**        | Buscamos continuamente la excelencia.                                           |
| 🤝 **Crecer juntos**       | Promovemos la confianza, la inclusividad y el desarrollo mediante la retroalimentación. |
| ✨ **Hacerlo simple**      | Simplificamos para impulsar la velocidad, la responsabilidad y la innovación.       |
| 🧑‍💼 **El cliente primero**  | Creamos el éxito del cliente al ofrecer las mejores experiencias.               |





## Objetivos del Proyecto 🎯

### Objetivo Principal:

- Lograr un 70% de reducción en los tiempos promedio del proceso de generación de reportes para el final del semestre.

Al medir los tiempos que toma generar cada reporte en un periodo de una semana antes de implementar el sistema, promediarlos, y comparar los resultados con la misma medida después de implementar el sistema podemos determinar si se cumple.



### Objetivos Específicos

- Simplificar el proceso de generación de reportes para que cualquier empleado lo realice con preparación mínima.
- Lograr que un empleado de CNH cuya función no sea hacer reportes, logre hacer un reporte.

Se medirá la satisfacción de un empleado antes y después de usar el sistema, este empleado deberá ser alguien que no ha generado ningún reporte.

- Lograr un 90% de satisfacción del cliente, mediante escucha activa, gestión de expectativas y mejora continua.
Al medir la satisfacción de los usuarios con una encuesta de satisfacción, podemos aprovar el objetivo.


## Alcance del Proyecto ➡️

### Entregables

El proyecto será dividido en tres módulos principales: 
- Reportes.
- Alertas
- Predicciones

El alcance inicial del proyecto está enfocado al módulo de generación de reportes, el módulo de alertas se desarrollará de manera posterior, y el módulo de predicciones se desarrollará si la capacidad del departamento lo permite. A su vez, el alcance inicial estará limitado al CaeTec para después ser escalado al resto de los clientes de CNH.

Se entregará al socio:
- Aplicación de escritorio.
- Repositorio del proyecto.
- Un instalador.
- Cuentas de servicios.
- Manuales de usuario y de instalación.

### Actividades Incluidas

[Cronograma](documentacion/planificacion.md)

### Limitaciones

Cualquier modificación al alcance del proyecto deberá ser evaluada en términos de impacto en el cronograma, costos y recursos. Los cambios deberán ser aprobados formalmente por ambas partes antes de su implementación.

## Equipo del Proyecto 👥

### Roles y Responsabilidades:



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---
<Tabs className="unique-tabs">
  <TabItem value="po" label="Product Owner">

    1. Enlace con Stakeholders

        - Coordinar y atender juntas virtuales con el Socio Formador.
            - Llenar el formato de juntas efectivas, compartiendo a los socios la agenda de antemano.

        - Comunicar las necesidades de los stakeholders al equipo. 

        - Comunicar las necesidades del equipo a los stakeholders.
            - Resolver dudas. 
            - Crear documento de acuerdos para que sea firmado por el
            - Socio Formador.

        - Coordinar el ingreso del Socio Formador al campus para juntas
        presenciales.


    2. Definir la visión del producto.*


    3. Gestionar y priorizar los requisitos en el Work Items List.

        Antes de la reunión de planeación de la iteración se vuelve a
        asegurar que los requisitos estén priorizadas, considerando
        cualquier cambio.


    4. Tomar decisiones sobre el alcance en cada sprint. 

        Define los Mínimos Productos Viables

  
  </TabItem>

  <TabItem value="tl" label="Team lead">
  
    1. Resolver conflictos y asegurar un ambiente de trabajo productivo.

        - Eliminar obstáculos que bloquean el progreso del equipo.


    2. Actualizar y priorizar las tareas del Work Items List.


    3. Monitorear el progreso del plan de proyecto. Monitorear el avance y
    asegurar que se cumplan los entregables.

        - Burndown Chart
        - Plan de valor ganado.


    4. Comprender la metodología de DAD y ayuda a implementarla. 


    5. Facilitar reuniones y coordinar al equipo

        - DAILY
        - PLANEACIÓN DE ITERACIÓN
        - REVIEW de la iteración
        - RETROSPECTIVE de la iteración


    6. Supervisar la implementación de procesos del CMMI.

  </TabItem>

  <TabItem value="ao" label="Architecture owner">
  
    1. Diseñar y validar la arquitectura del sistema y estándares
    del proyecto.

    2. Definir las tecnologías a utilizar en el proyecto:

        - Investigar de diferentes opciones, elegir una y añadir.
        - justificación.

    3. Desarrollar, actualizar y seguir el manual de arquitectura:

        - Asegurarse que los demás lo sigan también.

    4. Guiar al equipo en decisiones técnicas y resolver sus
    dudas.

    5. Asegurar que el sistema sea escalable, seguro y
    mantenible.
  </TabItem>
  <TabItem value="tm" label="Team member">
    **AUTO-ORGANIZADOS**

    1. Funcionalidades del producto :

        - Deja los requerimientos en READY
        - Hace estimación de Historias
        - Diseñan
        - Desarrollan
        - Pruebas
        - Dejan la historia en DONE

    2. Actualizar el work items list.

    3. Crear y mantener la documentación del proyecto.

    4. Compromisos:

        - Participa en las Dailys.
        - Juntas y reuniones.
        - Comunicar cualquier idea que tengan de cómo mejorar cualquier cosa.

    5. Definir procesos acorde a las prácticas del CMMI.

        - Sigue los procesos una vez definidos
        - Asegurar la mejora continua de los procesos.



  </TabItem>
  <TabItem value="uxui" label="UX/UI Owner">

    1. **Diseño de Experiencia de Usuario (UX) e Interfaz de Usuario (UI)**

    - Responsable de la experiencia de usuario (**UX**) y la interfaz de usuario (**UI**) del producto o proyecto.
    - Garantizar un diseño intuitivo, usable y visualmente atractivo, optimizando la interacción entre el usuario y la aplicación.

    2. **Investigación de Usuario**

    - Identificar necesidades, comportamientos y expectativas de los usuarios.
    - Validar conceptos y prototipos con usuarios finales para recopilar retroalimentación temprana.

    3. **Diseño de Interfaz y Prototipos**

    - Crear wireframes, mockups y prototipos que definan la estructura, navegación y apariencia del producto.
    - Validar los prototipos con el **Product Owner** y el equipo de desarrollo antes de proceder a implementaciones detalladas.

    4. **Pruebas de Usabilidad**

    - Planificar y ejecutar pruebas de usabilidad para identificar problemas y oportunidades de mejora.
    - Recopilar datos y retroalimentación para iterar sobre el diseño.

    5. **Colaboración con Desarrollo**

    - Trabajar estrechamente con los desarrolladores para asegurar que los diseños se implementen correctamente y se mantenga la consistencia visual.
    - Resolver dudas técnicas y realizar ajustes necesarios durante el proceso de construcción del producto.

    6. **Documentación y Actualización de Diseño**
    - Mantener actualizada la documentación de diseño y estilo, asegurando su accesibilidad para el equipo.

</TabItem>
<TabItem value="qa" label="Quality Assurance">

    1. **Estrategia de Pruebas**

    - Definir el plan de pruebas, especificando tipos de pruebas, ambiente, herramientas y cronograma.
    - Alinear la estrategia de pruebas con los objetivos del proyecto y los requisitos definidos.

    2. **Ejecución de Pruebas**

    - Realizar pruebas funcionales, de integración, de rendimiento, de seguridad y de usabilidad.
    - Identificar defectos y evaluar el comportamiento del sistema bajo diferentes escenarios.

    3. **Reporte y Seguimiento de Bugs**

    - Documentar de manera clara y detallada los errores encontrados, incluyendo evidencia y pasos para reproducirlos.
    - Dar seguimiento a la corrección de errores hasta su resolución final.

    4. **Mejora Continua**

    - Retroalimentar al equipo de desarrollo sobre los hallazgos, proponiendo mejoras en procesos y estándares de calidad.
    - Promover prácticas de prevención de defectos y optimización de código.

    5. **Plan de Calidad y Auditoría**

    - Definir métricas y criterios de aceptación para asegurar el cumplimiento de los requisitos.
    - Establecer procesos de revisión y auditoría interna para validar la calidad del producto.

    6. **Identificación y Gestión de Riesgos**

    - Evaluar riesgos técnicos y de negocio que puedan comprometer la calidad del producto.
    - Definir planes de pruebas específicas para mitigar problemas asociados a esos riesgos.

    7. **Validación de Reglas de Negocio y Requisitos**
    - Asegurarse de que los casos de prueba contemplen escenarios que verifiquen correctamente las reglas de negocio definidas.
    - Validar el cumplimiento de los requisitos en cada iteración del proyecto.
</TabItem>
<TabItem value="preo" label="Presentaciones Owner">
        ## Presentaciones Owner

        ### 📌 Descripción General
        - Encargado de preparar y coordinar las presentaciones del proyecto, ya sean internas o externas.
        - Se asegura de que las presentaciones comuniquen claramente el estado, los logros y los planes del proyecto.
        - Diseña materiales atractivos y facilita la comprensión de la información.

        ---

        ### 🏆 Responsabilidades Clave
        1. **Diseño de Presentaciones:** Crear las diapositivas o materiales necesarios para comunicar el progreso, hitos y metas.
        2. **Coordinación de Información:** Recopilar datos del equipo (avances, métricas, planes) y sintetizarlos de forma clara y concisa.
        3. **Ejecución de Presentaciones:** Planificar el flujo de la presentación y, en muchos casos, presentarla frente a la audiencia correspondiente.
        4. **Feedback:** Recoger retroalimentación de las partes interesadas y transmitirla al equipo.

        ---

        ### 🚀 Responsabilidades Adicionales

        #### 🔹 1. Crear y Coordinar la Presentación de Kick-Off
         Explicar objetivos, alcance, roles y responsabilidades a todos los involucrados.

        #### 🔹 2. Preparar Materiales para Otras Reuniones Clave
        - Diseñar las presentaciones necesarias en las distintas etapas (avances, demostraciones, retrospectivas).
        - Garantizar que la información sea clara y atractiva para la audiencia.

  </TabItem>

</Tabs>

---

### Estructura Organizacional

| Nombre                  | Rol         | Objetivo |
| ----------------------- | ----------- | ---------- |
| Juan Pablo Chávez Leal          | Team member, QA, Presentation Owner | |
| Rommel Toledo Crespo            | Team Member | |
| Pablo Hazael Hurtado Mireles    | Team Member, UX/UI, Writing Owner | |
| Diego Isaac Fuentes Juvera         | Team Member | |
| Daniel Queijeiro Albo           | Architecture Owner | |
| Mauricio Anguiano Juárez        | Team member, UX/UI | |
| Juan Carlos Calderón García     | Product Owner | |
| Ian Julián Estrada Castro       | Team Leader | |
| Galo Alejandro del Rio Viggiano | Team Member | |

### Recursos Necesarios

[Manual de arquitectura](./documentacion/arquitectura.md)

[Manual de estrategia técnica](./documentacion/estrategia.md)

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                    | **Fecha**  | **Colaborador**        |
|---------------------|------------------------------------| ---------- | ---------------------- |
| **1.0**             | Primera versión de descripción general del proyecto | 03/03/2025 | Diego Isaac Fuentes Juvera <br/> Juan Pablo Chávez Leal |
| **1.1**             | Adición de todo exceptuando "Roles y Responsabilidades" | 08/03/2025 | Juan Pablo Chávez Leal |
| **1.2**             | Agregar Mision y Vision del proyecto | 25/04/2025 | Galo Alejandro del Rio Viggiano |
| **1.3**             | Corrección de una palabra | 08/05/2025 | Rommel Toledo C. |
| **1.4**             | Actualización del contenido | 15/05/2025 | Juan Pablo Chávez |
| **2.0**             | Actualizar visión del equipo | 22/05/2025 | Diego Fuentes |