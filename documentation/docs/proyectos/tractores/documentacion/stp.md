---
title: Software Test Plan TracTech
---

# Introducción

### Propósito

Propósito: Este plan define las pruebas necesarias que se deben realizar para asegurar la calidad de la aplicación "Harvester".

### Alcance

El plan abarca las pruebas de todas las funcionalidades principales e historias de usuario de la aplicación que conforman el MVP y el MBI. Englobando el módulo de Reportes.

### Definiciones, Acrónimos y Abreviaciones

- **PPS**: Plan de Pruebas del Sistema.
- **QA**: Aseguramiento de Calidad (Quality Assurance).
- **RBAC**: Control de Acceso Basado en Roles (Role-Based Access Control).
- **MVP**: Producto Mínimo Viable (Minimum Viable Product).
- **MBI**: Incremento Mínimo de Negocio (Minimum Business Increment).

# Objetivos de las Pruebas

- Verificar la funcionalidad completa de la aplicación según los requisitos especificados.
- Validar el rendimiento y la escalabilidad de la aplicación.
- Comprobar la seguridad de los datos de los usuarios y la implementación correcta del RBAC.

# Alcance de las Pruebas

### Dentro del Alcance

- Módulos:
    - Registro y autenticación de usuarios.
    - Perfil de usuario.
    - Reportes.
    - Plantillas.
    - Gestión de usuarios.
    - Alertas.
    - Predicciones.

### Fuera del Alcance

**Pendiente**

# Aproximación a las Pruebas

### Estrategia de Pruebas

Se utilizará una combinación de pruebas manuales y automatizadas para cubrir todos los aspectos de la aplicación.

### Tipos de Pruebas

- Pruebas Funcionales.
- Pruebas de Usabiidad.
- Pruebas de Rendimiento.

### Niveles de Pruebas

- Pruebas Unitarias.
- Pruebas de Integración.
- Pruebas heurísticas.
- Pruebas de arquitectura.
- Pruebas de volumen.
- Pruebas de estrés.

# Criterios de las Pruebas

### Criterios de Aceptación

- Todas las funcionalidades principales deben funcionar según lo especificado.
- El tiempo de respuesta debe ser menor a 10 segundos para generación de gráficas.
- La aplicación debe ser capaz de leer un archivo de excel de 2,500 registros en menos de 20 segundos.
- El sistema debe de ser capaz de guardar plantillas en menos de 10 segundos en el servidor.
- El sistema debe de ser capaz de manejar al menos 50 usuarios simultáneos cargando plantillas
- El 80% de los usuarios deben calificar la usabilidad como satisfactoria o mejor.

### Criterios de Suspensión

- Fallos críticos que impidan el funcionamiento básico de la aplicación.
- Problemas de seguridad que comprometan los datos de los usuarios.

# Entregables de las Pruebas

- Casos de prueba detallados.
- Scripts de pruebas automatizadas.
- Datos de prueba.
- Informes de ejecución de pruebas.

# Cronorgrama de las pruebas

- Planificación de pruebas: sprints 1 y 2.
- Diseño de pruebas: sprints 2 y 3
- Ejecución de pruebas: sprints 4 y 5

# Recursos para Pruebas

**Personal**: 2 ingenieros de QA que se asegurarán de la correcta aplicación de las pruebas y de la calidad de código. Además, el resto de los miembros del equipo se encargarán de ejecutar pruebas y corregir código.

**Herramientas**: Framework de pruebas Jest.

**Dispositivos**: Laptop empresarial de CNH y laptops del equipo.

# Ambientes de Prueba

- Entornos locales que repliquen el entorno de producción.
- Base de datos de prueba con datos simulados.
- Laptops con diferentes características de hardware.

# Casos de Prueba

- Se ha desarroado un caso de prueba para cada historia de usuario que
forma parte de MVP y MBI, los cuáles se pueden encontrar en a
carpeta enistada en el apéndice.

# Riesgos y Mitigación

| Riesgos   |   Mitigación  |
|---------------------|---------------------------|
|   Retrasos en el desarrollo o disponibilidad del entorno. |   Priorizar pruebas de funcionalidades críticas   |
|   Problemas de sobrecarga de hardware.    |   Implementar monitoreo proactivo y optimización de recursos  |
|   Sobrecarga del servidor.    |   Optimizar las consultas |


# Manejo de las Pruebas

- Los defectos se casificarán por severidad y prioridad.
- Se informará a os desarroadores y diseñadores de a funcionaidad cuál fue el resutado de las pruebas.


# Aprobación y Firma

El pan de pruebas debe ser aprovbdo por los QA. El Product Owner
informará al Socio Formador de las pruebas que fueron llevadas a cabo y
de su resutado para que se puedan tomar decisiones informadas sobre el siguiente paso en el desarrollo del proyecto.

# Apéndices

- Carpeta con los casos de prueba diseñados: [Diseño de casos de prueba](https://drive.google.com/drive/folders/1dsrEs-Q9aMTufagqpBs5FZsyYb-ybw8-?usp=drive_link)

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                    | **Fecha**  | **Colaborador**        |
|---------------------|------------------------------------| ---------- | ---------------------- |
| **1.0**             | Primera versión de plan STP        | 07/03/2025 | Daniel Contreras Chávez |