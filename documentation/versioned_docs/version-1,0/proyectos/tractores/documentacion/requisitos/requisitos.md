---
title: Requisitos
sidebar_position: 1
---

# Requisitos

**Última actualización:** 07 de marzo de 2025
**Versión:** V1.1
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

[**RF1**](RF1.md): Usuario consulta página de inicio de sesión.\ `Ready`
[**RF2**](RF2.md): Usuario registrado inicia sesión.\ `Ready`
[**RF3**](RF3.md): Usuario cierra sesión\ 
[**RF4**](RF4.md): Usuario consulta módulo de análisis.\ `Ready`
[**RF5**](RF5.md): Usuario consulta los ranchos disponibles.\ 
[**RF6**](RF6.md): Usuario selecciona el rancho a analizar.\
[**RF7**](RF7.md): Usuario modifica selección de rancho a analizar\
[**RF8**](RF8.md): Usuario consulta los tractores disponibles.\
[**RF9**](RF9.md): Usuario selecciona tractores a analizar.\
[**RF10**](RF10.md): Usuario modifica selección de tractor a analizar.\
[**RF11**](RF11.md): Usuario consulta datos disponibles.\ `Ready`
[**RF12**](RF12.md): Usuario selecciona datos a comparar.\
[**RF13**](RF13.md): Usuario consulta filtros disponibles.\
[**RF14**](RF14.md): Usuario selecciona filtros a aplicar.\ 
[**RF15**](RF15.md): Usuario añade cuadro de texto al reporte.\ `Ready`
[**RF16**](RF16.md): Usuario edita cuadro de texto del reporte.\ `Ready`
[**RF17**](RF17.md): Usuario elimina cuadro de texto del reporte.\ `Ready`
[**RF18**](RF18.md): Usuario genera plantilla de reporte.\ `Ready`
[**RF19**](RF19.md): Usuario elimina plantilla de reporte.\ `Ready`
[**RF20**](RF20.md):Usuario guarda plantilla de reporte.\ `Ready`
[**RF21**](RF21.md):Usuario consulta plantillas de reporte.\ `Ready`
[**RF22**](RF22.md):Usuario selecciona plantilla de reporte.\ `Ready`
[**RF23**](RF23.md):Usuario descarga PDF del reporte.\ `Ready`
[**RF24**](RF24.md):Usuario define frecuencia de envío automático del reporte.\ 
[**RF25**](RF25.md):Usuario define correos de destinatarios.\
[**RF26**](RF26.md):Usuario modifica correo de destinatario.\
[**RF27**](RF27.md):Usuario elimina correo de destinatario.\
[**RF28**](RF28.md):Usuario es notificado si se carga algún archivo incorrecto.\ `Ready`
[**RF29**](RF29.md):Usuario añade gráfica a reporte.\ `Ready`
[**RF30**](RF30.md):Usuario modifica tipo de gráfica en reporte.\ `Ready`
[**RF31**](RF31.md):Usuario elimina gráfica en reporte.\ `Ready`
[**RF32**](RF32.md):Administrador crea usuario.\
[**RF33**](RF33.md):Administrador consulta usuario.\ `Ready`
[**RF34**](RF34.md):Administrador modifica usuario.\
[**RF35**](RF35.md):Administrador elimina usuario.\
[**RF36**](RF36.md):Usuario carga Excel a la plataforma.\ `Ready`
[**RF37**](RF37.md):Usuario elimina el Excel cargado.\ `Ready`
[**RF38**](RF38.md):Usuario sustituye el Excel cargado.\ `Ready`
[**RF39**](RF39.md):Usuario inicia sesión con Microsoft.\


---

## Requisitos No Funcionales

#### Descripción General

Los requisitos no funcionales establecen las expectativas en términos de tiempo de respuesta, capacidad de carga, compatibilidad con diferentes plataformas, accesibilidad para los usuarios, disponibilidad, entre otros aspectos. También incluyen criterios de seguridad, como el cifrado de datos y la protección contra ataques, así como la facilidad de mantenimiento y escalabilidad del sistema, asegurando que pueda adaptarse a nuevas necesidades y crecimiento sin comprometer la estabilidad del sistema.

---

### Requisitos Específicos

**Rendimiento**.
- La aplicación será capaz de generar un reporte de una gráfica en menos de 10 segundos.
- La aplicación será capaz de leer un archivo de Excel de 2,500 registros en menos de 20 segundos.
- El sistema debe tardar menos de 10 segundos en cargar una plantilla de reporte.
- Las plantillas deben tardar menos de 10 segundos en ser guardadas en el servidor.
- El sistema debe soportar más de 50 usuarios simultáneos cargando plantillas de reportes.

**Escalabilidad**.
- El sistema debe ser capaz de permitir la creación y  uso de nuevas fórmulas.

**Usabilidad**.
- Los reportes básicos deben poder ser generados por cualquier empleado de la empresa con una capacitación menor a 20 minutos. 

**Portabilidad**.
- El sistema solo estará disponible en el sistema operativo de Windows 11.
- El sistema debe funcionar perfectamente en los equipos DELL de la compañía.
- El sistema debe contar con una manera de ser instalada en cualquier momento, ya sea vía USB o alojar el ejecutable en el Google Drive del socio.

**Seguridad**.
- El sistema debe dar acceso basado en los roles: Administrador y Usuario general.
- Toda la información sensible debe estar cifrada.
- La aplicación no debe ser accesible de manera pública.
- La aplicación debe poder ser deshabilitada en caso de robo/extravío de un equipo que la tenga instalada.

| Autor | Descripción del cambio | Versión |
|---------|-------------------------|---------|
| Juan Pablo Chávez | Adición de requisitos no-funcionales | V1.1 |