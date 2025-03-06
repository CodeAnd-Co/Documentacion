---
title: Requisitos
sidebar_position: 1
---

# Requisitos

**Última actualización:** 05 de marzo de 2025

### **Proveedores de Requisitos**  
   - **Internos**: Personas dentro de Code & Co.  
   - **Externos**: Cliente.  

### **Lista de Proveedores de Requisitos**  

| Proveedor | Rol | Autoridad | Tipo de Requisitos | Método de Comunicación |
|-----------|-----|-----------|--------------------|------------------------|
| Product Owner | Interno | Alta | Funcionales y de negocio | Reuniones diarias en equipo, Whatsapp y Discord.|
| Socio Formador | Externo | Alta | Funcionales, de negocio y UX | Reuniones 2 veces por semana, Whatsapp. |
| Architecture Owner| Interno | Alta | No funcionales, de información | Reuniones diarias en equipo, Whatsapp y Discord.  |
| UX/UI | Interno | Alta | de Interfaz | Reuniones diarias en equipo, Whatsapp y Discord. |
| Team Members | Interno | Media | Funcionales y No funcionales | Reuniones diarias en equipo, Whatsapp y Discord. |


## Requisitos Funcionales

### Descripción General

Los requisitos funcionales del sistema describen una variedad de acciones que los usuarios, administradores y empleados pueden realizar dentro del sistema, como la creación, lectura, actualización y eliminación de clientes, productos, pedidos y otros elementos clave. Además, incluyen el manejo de roles, grupos, cuotas y pagos, así como la capacidad del sistema para gestionar solicitudes. Estos requisitos funcionales también contemplan la administración de seguridad, roles y permisos para garantizar que cada usuario pueda realizar únicamente las acciones que le corresponden.

---

### Requisitos Específicos

- [**RF1**](RF1.md): Iniciar Sesión  
- [**RF2**](RF2.md): Autenticación de la cuenta 
- [**RF3**](RF3.md): Consultar gráficas (administrador)
- [**RF4**](RF4.md): Consultar historial de ancestros de una charola
- [**RF5**](RF5.md): Splashscreen 
- [**RF6**](RF6.md): Registrar Charola  
- [**RF7**](RF7.md): Buscar charola 
- [**RF8**](RF8.md): Modificar datos generales Charola 
- [**RF9**](RF9.md): Eliminar Charola 
- [**RF10**](RF10.md): Cerrar sesión
- [**RF11**](RF11.md): Consultar información detallada de una charola 
- [**RF12**](RF12.md): Descargar reportes
- [**RF13**](RF13.md): Notificaciones 
- [**RF14**](RF14.md): Registrar usuario 
- [**RF15**](RF15.md): Borrar usuario 
- [**RF16**](RF16.md): Filtrar las charolas por escarabajo y larva 
- [**RF17**](RF17.md): Visualizar todas las charolas registradas en el sistema  
- [**RF18**](RF18.md): Multiselección para eliminar historial
- [**RF19**](RF19.md): Historial de actividad de charola 
- [**RF20**](RF20.md): Editar Usuario
- [**RF21**](RF21.md): Registrar cambio de escarabajo
- [**RF22**](RF22.md): Registrar Tamizado 
- [**RF23**](RF23.md): Ocultar charolas de cambios pasados 
- [**RF24**](RF24.md): Consultar charolas de cambios pasados 
- [**RF25**](RF25.md): Ocultar charolas de escarabajos descartados
- [**RF26**](RF26.md): Registrar un nuevo tipo de comida en el sistema
- [**RF27**](RF27.md): Editar un tipo de comida en el sistema
- [**RF28**](RF28.md): Eliminar un tipo de comida 
- [**RF29**](RF29.md): Registrar la alimentación de la charola 
- [**RF30**](RF30.md): Editar la alimentación de la charola  
- [**RF31**](RF31.md): Eliminar la alimentación de la charola 
- [**RF32**](RF32.md): Registar la información del Frass obtenido 
- [**RF33**](RF33.md): Editar la información del Frass obtenido
- [**RF34**](RF34.md): Eliminar la información del Frass obtenido

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
