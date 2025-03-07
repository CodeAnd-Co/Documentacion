---
title: Requisitos
sidebar_position: 1
---

# Requisitos

**Última actualización:** 06 de marzo de 2025

### **Proveedores de Requisitos**  
   - **Internos**: Personas dentro de Code & Co.  
   - **Externos**: Cliente.  

### **Lista de Proveedores de Requisitos**  

| Proveedor                        | Rol       | Autoridad | Tipo de Requisitos             | Método de Comunicación                                 |
|-----------------------------------|-----------|-----------|--------------------------------|--------------------------------------------------------|
| Product Owner                     | Interno  | Alta      | Funcionales y de negocio      | Reuniones diarias en equipo, Whatsapp y Discord.        |
| Juan Pablo García (Socio Formador)| Externo  | Alta      | Funcionales, de negocio y UX  | Reuniones 2 veces por semana, Whatsapp y Correo         |
| Architecture Owner                | Interno  | Alta      | No funcionales, de información| Reuniones diarias en equipo, Whatsapp y Discord.        |
| UX/UI                              | Interno  | Alta      | de Interfaz                    | Reuniones diarias en equipo, Whatsapp y Discord.        |
| Team Members                      | Interno  | Media     | Funcionales y No funcionales  | Reuniones diarias en equipo, Whatsapp y Discord.        |

## Requisitos Funcionales

### Descripción General

Los requisitos funcionales del sistema describen una variedad de acciones que los usuarios, administradores y empleados pueden realizar dentro del sistema, como la creación, lectura, actualización y eliminación de clientes, productos, pedidos y otros elementos clave. Además, incluyen el manejo de roles, grupos, cuotas y pagos, así como la capacidad del sistema para gestionar solicitudes. Estos requisitos funcionales también contemplan la administración de seguridad, roles y permisos para garantizar que cada usuario pueda realizar únicamente las acciones que le corresponden.

---

### Requisitos Específicos MVP

[**RF1**](RF1.md): Super Administrador Crea Usuario  
[**RF2**](RF2.md): Super Administrador Consulta Lista de Usuarios  
[**RF3**](RF3.md): Super Administrador Lee Usuario  
[**RF4**](RF4.md): Super Administrador Actualiza Usuario  
[**RF5**](RF5.md): Super Administrador Elimina Usuario  
[**RF6**](RF6.md): Super Administrador Crea Rol  
[**RF7**](RF7.md): Super Administrador Consulta Lista de Roles  
[**RF10**](RF10.md): Super Administrador Elimina Rol  
[**RF11**](RF11.md): Super Administrador Crea Cliente  
[**RF12**](RF12.md): Super Administrador Consulta Lista de Clientes  
[**RF13**](RF13.md): Super Administrador, Lee Cliente  
[**RF15**](RF15.md): Super Administrador Elimina Cliente  
[**RF16**](RF16.md): Super Administrador Crea Empleado  
[**RF17**](RF17.md): Super Administrador Consulta Lista de Empleados  
[**RF18**](RF18.md): Super Administrador Lee Empleado  
[**RF20**](RF20.md): Super Administrador Elimina Empleado  
[**RF21**](RF21.md): Super Administrador Crea Grupo de Empleados  
[**RF22**](RF22.md): Super Administrador Consulta Lista de Grupos de Empleados  
[**RF23**](RF23.md): Super Administrador Lee Grupo de Empleados  
[**RF25**](RF25.md): Super Administrador Elimina Grupo de Empleados.  
[**RF26**](RF26.md): Super Administrador Crea Producto  
[**RF27**](RF27.md): Super Administrador, Cliente Consulta Lista de Productos  
[**RF30**](RF30.md): Super Administrador Elimina Producto  
[**RF31**](RF31.md): Super Administrador Crea Set de Cuotas  
[**RF32**](RF32.md): Super Administrador, Cliente Consulta Lista de Set de Cuotas  
[**RF33**](RF33.md): Super Administrador, Cliente Lee Set de Cuotas  
[**RF35**](RF35.md): Super Administrador Elimina Set de Cuotas  
[**RF36**](RF36.md): Super Administrador Crea Evento  
[**RF37**](RF37.md): Super Administrador, Cliente Consulta Lista de Eventos  
[**RF38**](RF38.md): Super Administrador, Cliente Lee Evento  
[**RF40**](RF40.md): Super Administrador, Cliente Elimina Evento  
[**RF41**](RF41.md): Super Administrador Crea Set de Productos  
[**RF42**](RF42.md): Super Administrador, Cliente Consulta Lista de Sets de Productos  
[**RF43**](RF43.md): Super Administrador, Cliente Lee Set de Productos  
[**RF45**](RF45.md): Super Administrador Elimina Set de Productos  
[**RF46**](RF46.md): Super Administrador Crea Categoria de Productos  
[**RF47**](RF47.md): Super Administrador Consulta Lista de Categorias de Productos  
[**RF50**](RF50.md): Elimina Categoria de Productos  
[**RF51**](RF51.md): Super Administrador Crea Tipo de Pago  
[**RF52**](RF52.md): Super Administrador, Cliente Consulta Lista de Tipos de Pago  
[**RF53**](RF53.md): Super Administrador, Cliente Lee Tipo de Pago  
[**RF55**](RF55.md): Super Administrador Elimina Tipo de Pago  
[**RF56**](RF56.md): Super Administrador Importa Productos  
[**RF57**](RF57.md): Super Administrador Importa Empleados  
[**RF58**](RF58.md): Super Administrador Exporta Productos  
[**RF59**](RF59.md): Super Administrador Exportar Empleados  
[**RF60**](RF60.md): Super Administrador, Cliente Consulta Lista de Pedidos  
[**RF61**](RF61.md): Super Administrador, Cliente Lee Pedido  
[**RF63**](RF63.md): Super Administrador Elimina Pedido  

### Requisitos Específicos MBI

[**RF8**](RF8.md): Super Administrador Lee Rol  
[**RF9**](RF9.md): Super Administrador Actualiza Rol  
[**RF14**](RF14.md): Super Administrador Actualiza Cliente  
[**RF19**](RF19.md): Super Administrador Actualiza Empleado  
[**RF24**](RF24.md): Super Administrador Actualiza Grupo de Empleados  
[**RF28**](RF28.md): Super Administrador, Cliente Lee Producto  
[**RF29**](RF29.md): Super Administrador Actualizar Producto  
[**RF34**](RF34.md): Super Administrador Actualiza Set de Cuotas  
[**RF39**](RF39.md): Super Administrador Actualiza Evento  
[**RF44**](RF44.md): Super Administrador Actualiza Set de Productos  
[**RF48**](RF48.md): Super Administrador, Cliente Lee Categoria de Productos  
[**RF49**](RF49.md): Super Administrador Actualiza Categoria de Productos  
[**RF54**](RF54.md): Super Administrador Actualiza Tipo de Pago  
[**RF62**](RF62.md): Super Administrador, Cliente Actualiza Pedido  
[**RF64**](RF64.md): Empleado Accede al Centro de Ayuda  
[**RF65**](RF65.md): Empleado Lee Carrito de Compras  
[**RF66**](RF66.md): Empleado Actualiza Carrito de Compras  
[**RF67**](RF67.md): Empleado Elimina Productos del Carrito  
[**RF68**](RF68.md): Empleado Agrega Producto al Carrito  
[**RF69**](RF69.md): Empleado Crea Pedido  
[**RF70**](RF70.md): Empleado Lee Pedido  
[**RF71**](RF71.md): Empleado Finaliza Pedido  
[**RF72**](RF72.md): Empleado Consulta Lista de Pedidos  
[**RF73**](RF73.md): Empleado Recibe Notificaciones de Estado del Pedido  
[**RF74**](RF74.md): Empleado Lee Producto  
[**RF75**](RF75.md): Empleado Consulta Lista de Productos  
[**RF76**](RF76.md): Empleado Lee Balance  
[**RF77**](RF77.md): Empleado Selecciona Tipo de Pago  

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
