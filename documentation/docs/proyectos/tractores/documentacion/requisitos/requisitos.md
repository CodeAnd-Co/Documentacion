---
title: Requisitos
sidebar_position: 1
---

# Requisitos

**Última actualización:** 03 de marzo de 2025

### **Proveedores de Requisitos**  
   - **Internos**: Personas dentro de Code & Co.  
   - **Externos**: Cliente.  

### **Lista de Proveedores de Requisitos**  

| Proveedor | Rol | Autoridad | Tipo de Requisitos | Método de Comunicación |
|-----------|-----|-----------|--------------------|------------------------|
| Product Owner | Interno | Alta | Funcionales y de negocio | Reuniones diarias en equipo, Whatsapp y Discord.|
| José Luz Bravo (Socio Formador) | Externo | Alta | Funcionales, de negocio y UX | Reuniones 2 veces por semana, Whatsapp y Teams|
| Architecture Owner| Interno | Alta | No funcionales, de información | Reuniones diarias en equipo, Whatsapp y Discord.  |
| UX/UI | Interno | Alta | De Interfaz | Reuniones diarias en equipo, Whatsapp y Discord. |
| Team Members | Interno | Media | Funcionales y No funcionales | Reuniones diarias en equipo, Whatsapp y Discord. |


## Requisitos Funcionales

### Descripción General

Los requisitos funcionales del sistema describen una variedad de acciones que los usuarios, administradores y empleados pueden realizar dentro del sistema como lo son la creación, lectura, actualización y eliminación de usuarios, plantillas de reportes, fórmulas y otros elementos clave. Estos requisitos funcionales también contemplan la administración de seguridad, roles y permisos para garantizar que cada usuario pueda realizar únicamente las acciones que le corresponden.

---

### Requisitos Específicos del sistema y del módulo de reportes.

[**RF1**](RF1.md): Usuario consulta página de inicio de sesión.\
[**RF2**](RF2.md): Usuario registrado inicia sesión.\
[**RF3**](RF3.md): Usuario cierra sesión\
[**RF4**](RF1.md): Usuario consulta módulo de análisis.\
[**RF5**](RF1.md): Usuario consulta los ranchos disponibles.\
[**RF6**](RF1.md): Usuario selecciona el rancho a analizar.\
[**RF7**](RF1.md): Usuario modifica selección de rancho a analizar\
[**RF8**](RF1.md): Usuario consulta los tractores disponibles.\
[**RF9**](RF1.md): Usuario selecciona tractores a analizar.\
[**RF10**](RF1.md): Usuario modifica selección de tractor a analizar.\
[**RF11**](RF1.md): Usuario consulta datos disponibles.\
[**RF12**](RF1.md): Usuario selecciona datos a comparar.\
[**RF13**](RF1.md): Usuario consulta filtros disponibles.\
[**RF14**](RF1.md): Usuario selecciona filtros a aplicar.\
[**RF15**](RF1.md): Usuario añade cuadro de texto al reporte.\
[**RF16**](RF1.md): Usuario edita cuadro de texto del reporte.\
[**RF17**](RF1.md): Usuario elimina cuadro de texto del reporte.\
[**RF18**](RF1.md): Usuario genera plantilla de reporte.\
[**RF19**](RF1.md): Usuario elimina plantilla de reporte.\
[**RF20**](RF1.md):Usuario guarda plantilla de reporte.\
[**RF21**](RF1.md):Usuario consulta plantillas de reporte.\
[**RF22**](RF1.md):Usuario selecciona plantilla de reporte.\
[**RF23**](RF1.md):Usuario descarga PDF del reporte.\
[**RF24**](RF1.md):Usuario define frecuencia de envío automático del reporte.\
[**RF25**](RF1.md):Usuario define correos de destinatarios.\
[**RF26**](RF1.md):Usuario modifica correo de destinatario.\
[**RF27**](RF1.md):Usuario elimina correo de destinatario.\
[**RF28**](RF1.md):Usuario puede seleccionar y aplicar filtros personalizados.\
[**RF29**](RF1.md):Usuario es notificado si se carga algún archivo incorrecto.\
[**RF30**](RF1.md):Usuario añade gráfica a reporte.\
[**RF31**](RF1.md):Usuario modifica tipo de gráfica en reporte.\
[**RF32**](RF1.md):Usuario elimina gráfica en reporte.\
[**RF33**](RF1.md):Usuario elimina gráfica de reporte.\
[**RF34**](RF1.md):Administrador crea usuario.\
[**RF35**](RF1.md):Administrador consulta usuario.\
[**RF36**](RF1.md):Administrador modifica usuario.\
[**RF37**](RF1.md):Administrador elimina usuario.\
[**RF38**](RF1.md):Usuario carga Excel a la plataforma.\
[**RF39**](RF1.md):Usuario elimina el Excel cargado.\
[**RF40**](RF1.md):Usuario sustituye el Excel cargado.\
[**RF41**](RF1.md):Usuario inicia sesión con Microsoft.\


---

## Requisitos No Funcionales

#### Descripción General

Los requisitos no funcionales establecen las expectativas en términos de tiempo de respuesta, capacidad de carga, compatibilidad con diferentes plataformas, accesibilidad para los usuarios, disponibilidad, entre otros aspectos. También incluyen criterios de seguridad, como el cifrado de datos y la protección contra ataques, así como la facilidad de mantenimiento y escalabilidad del sistema, asegurando que pueda adaptarse a nuevas necesidades y crecimiento sin comprometer la estabilidad del sistema.

---

### Requisitos Específicos

**Rendimiento**  
- El tiempo de respuesta del sistema debe ser menor a 5 segundos.  
- El sistema debe ser capaz de soportar al menos 100 usuarios concurrentes.

**Usabilidad**  
- El administrador debe tardar menos de 6 horas en aprender a utilizar el sistema de backoffice.  
- El sistema debe ser compatible con los siguientes navegadores:  
  - Chrome versión 133.0.6943.126  
  - Firefox 135.0.1  
- Un empleado debe tardar menos de 1 hora en aprender a utilizar el sistema de e-commerce.

**Disponibilidad**  
- El sistema debe contar con redundancia de datos y sistemas de respaldo para garantizar la disponibilidad continua.

**Portabilidad y compatibilidad**  
- El sistema debe contar con estándares abiertos para facilitar la integración con otros sistemas.

**Mantenibilidad**  
- El sistema debe contar con una documentación clara y actualizada. Un desarrollador debe poder encontrarla en un plazo de 15 minutos.

**Escalabilidad**  
- El sistema debe soportar un rango de entre 5,000 y 10,000 usuarios registrados.  
- El sistema debe permitir la carga masiva de datos y facilitar la incorporación de nuevas funciones sin afectar las existentes.

**Seguridad**  
- Los datos sensibles, como contraseñas, deben estar cifrados utilizando bcrypt.  
- Una computadora debe tardar más de 3 años en descifrar la contraseña cifrada.  
- El sistema debe contar con protección contra ataques CSRF y ataques de inyección NoSQL.  
- El sistema debe contar con un sistema de autorización y autenticación robusto.  
- El sistema debe cerrar automáticamente la sesión de los usuarios después de 8 horas de inactividad.
