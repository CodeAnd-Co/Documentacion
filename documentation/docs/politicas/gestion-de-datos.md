---
title: Política de Gestión de Datos del Proyecto
sidebar_position: 2
---

# **Política de Gestión de Datos del Proyecto**

---

## **1. Objetivo**

Esta política establece los lineamientos para la gestión de datos dentro de los proyectos, garantizando su seguridad, privacidad, trazabilidad y correcto uso. Se busca asegurar que los datos sean utilizados de manera estructurada y protegida, cumpliendo con los estándares internos y normativas aplicables. Asimismo, se alinea con las prácticas específicas del modelo **CMMI**, asegurando un enfoque de mejora continua en la gestión de datos.

## **2. Alcance**

Esta política aplica a todos los proyectos en los que se utilicen datos relevantes para la operación, análisis y toma de decisiones dentro de la organización. Involucra a todas las áreas responsables de la recopilación, almacenamiento, distribución y protección de datos.

Se excluyen las métricas derivadas del análisis de desempeño del proyecto, ya que estas pertenecen a procesos de evaluación específicos.

## **3. Principios**

1. **Precisión y consistencia**: Los datos deben mantenerse actualizados y evitar duplicaciones o inconsistencias.
2. **Seguridad y confidencialidad**: Deben aplicarse controles de acceso para proteger la información sensible.
3. **Trazabilidad**: Toda modificación en los datos debe documentarse de manera que se pueda verificar su historial.
4. **Accesibilidad controlada**: Se debe garantizar el acceso a los datos solo a usuarios autorizados y conforme a su rol.
5. **Cumplimiento normativo**: La gestión de datos debe ajustarse a regulaciones internas y externas aplicables.
6. **Control de versiones y cambios**: Todo dato clave debe estar sujeto a una estrategia de control de versiones, asegurando su integridad y evolución documentada.

## **4. Clasificación de Datos**

Los datos utilizados en los proyectos se dividen en dos categorías principales:

### **4.1 Datos Sensibles**

Se refiere a aquellos datos cuya divulgación podría comprometer la integridad del proyecto o de sus participantes. Estos incluyen, entre otros:

- Información personal o identificativa de los interesados (datos personales, direcciones físicas, etc.).
- Credenciales de acceso o autenticación (cuentas, contraseñas, claves de acceso, etc.).
- Datos financieros, estratégicos o confidenciales (cuentas bancarias, métodos de pago, información financiera, etc.).
- Claves de API y configuraciones privadas (.env, .pem, cadenas de conexión, etc.).

Estos datos se almacenarán en sus archivos originales (en caso de ser .env, .pem o similares) o, en caso de ser cuentas y contraseñas, se almacenarán en un archivo Excel donde se coloque dicha información. Dichos archivos se guardarán en una carpeta dentro del resto de recursos de cada proyecto con el nombre de “Credenciales”.

Para salvaguardar la integridad, seguridad y confianza depositada en los datos, el acceso será restringido únicamente al Team Lider y Architecture Owner de cada proyecto. Ambos roles de liderazgo tienen la obligación de colocar dichos accesos dentro de las carpetas y delegar su acceso en caso de cambiar de rol.

Para evitar cualquier filtración de informacion, **queda estrictamente prohibido la distribución de los accesos a traves de cualquier  medio digital externo al uso de las carpetas privadas.**

### **4.2 Datos Generales**

Son aquellos que pueden ser compartidos dentro del equipo de trabajo sin representar un riesgo para la organización. Algunos ejemplos son:

- Modelos de datos, diccionarios y estructuras de información.
- Documentación técnica, materiales de referencia y guías de usuario.
- Registros de pruebas y reportes sin información confidencial.

## **5. Directrices para la Gestión de Datos**

De acuerdo con el modelo **CMMI PP SP 2.3 (Gestión de Datos del Proyecto)**, se establecen las siguientes directrices:

1. **Identificación y documentación de datos (PP SP 2.3)**

   - Cada dato manejado en el proyecto debe ser identificado y registrado en un repositorio centralizado.
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

## **6. Mecanismos de Protección y Seguridad**

Siguiendo las mejores prácticas de CMMI en seguridad y control de datos, se implementarán los siguientes mecanismos:

- Uso de **cifrado** para datos sensibles.
- Implementación de **autenticación y autorización** en sistemas de acceso.
- Aplicación de **controles contra accesos no autorizados** o manipulación indebida.

## **7. Monitoreo y Cumplimiento (PMC SP 1.4)**

Para garantizar el cumplimiento de esta política, se implementarán mecanismos de monitoreo continuo:

1. **Seguimiento del estado y calidad de los datos**:

   - Se realizarán revisiones posteriormente a publicar a la implementacion.
   - Se verificará que los datos cumplan con los estándares y regulaciones aplicables.

2. **Gestión de configuración de datos (CM SP 1.1, CM SP 3.2)**:

   - Se implementará un control de cambios estructurado para evitar errores en la información.
   - Se utilizarán herramientas de gestión de configuración para mantener la trazabilidad.

3. **Medidas correctivas y acciones disciplinarias**:

   - Cualquier incumplimiento de esta política puede derivar en medidas correctivas o disciplinarias según lo establecido por la organización.
   - Se fomentará la capacitación del equipo en buenas prácticas de gestión de datos.

---

### **Notas Finales**

- Esta política se revisará y actualizará periódicamente conforme a la evolución de los proyectos y los estándares organizacionales.
- Cualquier modificación en esta política deberá ser aprobada por los responsables de gestión de datos.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación de la política  |   | Diego Alfaro, Arturo Sánchez |
| **1.1**             | Eliminación de salidas de la política   | 08/04/2025  | Daniel Contreras, Eduardo Rosas |
| **1.2**             | Modificacion datos sensibles  | 25/04/2025  | Miguel Angel Uribe |
