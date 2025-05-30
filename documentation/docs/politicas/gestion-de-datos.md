---
title: Política de gestión de datos del proyecto
sidebar_position: 2
---

# **Política de gestión de datos del proyecto**

---

## **1. Objetivo**

Establecer lineamientos para gestionar los datos del proyecto de forma estructurada, segura y conforme a estándares, asegurando su uso correcto y alineación con las prácticas del modelo **CMMI**.

## **2. Alcance**

Esta política aplica a todos los proyectos en los que se utilicen datos relevantes para la operación, análisis y toma de decisiones dentro de la organización. Involucra a todas las áreas responsables de la recopilación, almacenamiento, distribución y protección de datos.

Se excluyen las métricas derivadas del análisis de desempeño del proyecto, pues pertenecen a procesos de evaluación específicos.

## **3. Clasificación de datos**

Los datos utilizados en los proyectos se dividen en dos categorías principales:

### **3.1 Datos sensibles**

Se refiere a aquellos datos cuya divulgación podría comprometer la integridad del proyecto o de sus participantes. Estos incluyen, entre otros:

- Información personal o identificativa de los interesados (datos personales, direcciones físicas, etc.).
- Credenciales de acceso o autenticación (cuentas, contraseñas, claves de acceso, etc.).
- Datos financieros, estratégicos o confidenciales (cuentas bancarias, métodos de pago, información financiera, etc.).
- Claves de API y configuraciones privadas (.env, .pem, cadenas de conexión, etc.).

Estos datos se almacenarán en sus archivos originales (en caso de ser .env, .pem o similares) o, en caso de ser cuentas y contraseñas, se almacenarán en un archivo Excel. Dichos archivos se guardarán en una carpeta dentro del resto de recursos de cada proyecto con el nombre de “Credenciales”.

Para salvaguardar la integridad, seguridad y confianza depositada en los datos, el acceso será restringido únicamente al Team Leader y Architecture Owner de cada proyecto. Ambos roles de liderazgo tienen la obligación de colocar dichos accesos dentro de las carpetas y delegar su acceso en caso de cambiar de rol. En caso de que un miembro del equipo necesite tener acceso a alguno estos datos, debe notificar a alguno de estos dos líderes, que evaluarán la petición y concederán acceso al dato específico que fue solicitado si lo consideran necesario.

Para evitar cualquier filtración de información, **queda estrictamente prohibida la distribución de los accesos a través de cualquier medio digital distinto a los canales oficiales.**

### **3.2 Datos generales**

Son aquellos que pueden ser compartidos dentro del equipo de trabajo sin representar un riesgo para la organización. Algunos ejemplos son:

- Modelos de datos, diccionarios y estructuras de información.
- Documentación técnica, materiales de referencia y guías de usuario.
- Registros de pruebas y reportes sin información confidencial.

## **4. Directrices para la gestión de datos**

De acuerdo con el modelo **CMMI PP SP 2.3 (Gestión de Datos del Proyecto)**, se establecen las siguientes directrices:

1. **Identificación y documentación de datos (PP SP 2.3, PMC SP 1.4)**

   - Cada dato manejado en el proyecto debe ser identificado y registrado en el [plan de gestión de datos](https://docs.google.com/spreadsheets/d/17af-k-gFvmqhUVZggVDDZ3HWGfbBG-TjpaLGUKcnITk/edit?usp=sharing).
   - Se utilizará el **Diccionario de Datos** para definir nombres, formatos y estructuras de los datos.
   - Se definirá un **Modelo Entidad-Relación (MER)** para estructurar la base de datos y sus relaciones.

2. **Definición de estándares y requisitos (PP SP 2.3)**

   - Los datos deben cumplir con los estándares definidos en los **Requisitos Funcionales**.
   - Se establecerán criterios de validación para garantizar la compatibilidad y calidad de los datos.

3. **Seguridad y privacidad (PP SP 2.3)**

   - Asignación de permisos de acceso diferenciados según roles y niveles de autorización.
   - Aplicación de **cifrado** y autenticación para proteger información confidencial.

4. **Almacenamiento y acceso (PP SP 2.3)**

   - Los datos serán almacenados en bases de datos seguras, utilizando la estructura definida en el **MER**.
   - Se establecerán mecanismos de acceso con autenticación y registros de actividad.

5. **Distribución controlada de datos (PP SP 2.3)**

   - Se regulará la distribución de datos mediante permisos explícitos.
   - Se definirán formatos y protocolos de transmisión para garantizar la integridad de los datos compartidos.

6. **Control de versiones y trazabilidad de datos (CM SP 1.1, CM SP 2.1)**

   - Todo cambio en los datos deberá registrarse en un **historial de modificaciones**.
   - Se mantendrá un control de versiones para evitar inconsistencias en la información almacenada.
   - Se utilizará un repositorio para el seguimiento de cambios en datos críticos.

7. **Revisión y validación (PP SP 2.3, MA SP 2.2)**

   - Se evaluará la información recopilada para garantizar que cumpla con los objetivos del proyecto.

## **5. Mecanismos de protección y seguridad**

Siguiendo las mejores prácticas de CMMI en seguridad y control de datos, se implementarán los siguientes mecanismos:

- Uso de **cifrado** para datos sensibles.
- Implementación de **autenticación y autorización** en sistemas de acceso.
- Aplicación de **controles contra accesos no autorizados** o manipulación indebida.

## **6. Monitoreo y cumplimiento (PMC SP 1.4)**

Para garantizar el cumplimiento de esta política, se implementarán mecanismos de monitoreo continuo:

1. **Seguimiento del estado y calidad de los datos**:

   - Se realizarán revisiones posteriormente a publicar a la implementación.
   - Se verificará que los datos cumplan con los estándares y regulaciones aplicables.

2. **Gestión de configuración de datos (CM SP 1.1, CM SP 3.2)**:

   - Se implementará un control de cambios estructurado para evitar errores en la información.
   - Se utilizarán herramientas de gestión de configuración para mantener la trazabilidad.

3. **Medidas correctivas y acciones disciplinarias**:

   - Cualquier incumplimiento de esta política puede derivar en medidas correctivas o disciplinarias según lo establecido por la organización.
   - Se fomentará la capacitación del equipo en buenas prácticas de gestión de datos.

---

### **Notas finales**

- Esta política se revisará y actualizará periódicamente conforme a la evolución de los proyectos y los estándares organizacionales.
- Cualquier modificación en esta política deberá ser aprobada por los responsables de gestión de datos.

---

## Historial de cambios

| **Tipo de versión** | **Descripción**                                                         | **Fecha**  | **Colaborador**                 |
| ------------------- | ----------------------------------------------------------------------- | ---------- | ------------------------------- |
| **1.0**             | Creación de la política.                                                |            | Diego Alfaro, Arturo Sánchez    |
| **1.1**             | Eliminación de salidas de la política.                                  | 08/04/2025 | Daniel Contreras, Eduardo Rosas |
| **1.2**             | Modificación datos sensibles.                                           | 25/04/2025 | Miguel Angel Uribe              |
| **1.3**             | Implementar acciones correctivas.                                       | 26/04/2025 | Max Toscano                     |
| **1.4**             | Plan de Datos.                                                          | 28/04/2025 | Pablo Hurtado                   |
| **1.5**             | Eliminar principios y resumir objetivo.                                 | 08/05/2025 | Daniel Contreras                |
| **1.6**             | Definir un método para que una persona pueda acceder a datos sensibles. | 29/05/2025 | Emiliano Valdivia Lara          |

