---
title: Requisitos
sidebar_position: 1
---

# Requisitos

**Última actualización:** 23 de mayo de 2025
**Versión:** V2.0

### **Proveedores de Requisitos**

- **Internos**: Personas dentro de Code & Co.
- **Externos**: Cliente.

### **Lista de Proveedores de Requisitos**

| Proveedor                       | Rol     | Autoridad | Tipo de Requisitos             | Método de Comunicación                           |
| ------------------------------- | ------- | --------- | ------------------------------ | ------------------------------------------------ |
| Product Owner                   | Interno | Alta      | Funcionales y de negocio       | Reuniones diarias en equipo, Whatsapp y Discord. |
| José Luz Bravo (Socio Formador) | Externo | Alta      | Funcionales, de negocio y UX   | Reuniones según sea necesario, Whatsapp y Teams  |
| Architecture Owner              | Interno | Alta      | No funcionales, de información | Reuniones diarias en equipo, Whatsapp y Discord. |
| UX/UI                           | Interno | Alta      | De Interfaz                    | Reuniones diarias en equipo, Whatsapp y Discord. |
| Team Members                    | Interno | Media     | Funcionales y No funcionales   | Reuniones diarias en equipo, Whatsapp y Discord. |

## Requisitos Funcionales

### Descripción General

Los requisitos funcionales del sistema describen una variedad de acciones que los usuarios, administradores y empleados pueden realizar dentro del sistema como lo son la creación, lectura, actualización y eliminación de usuarios, plantillas de reportes, fórmulas y otros elementos clave. Estos requisitos funcionales también contemplan la administración de seguridad, roles y permisos para garantizar que cada usuario pueda realizar únicamente las acciones que le corresponden.

---

### Requisitos Específicos del sistema.

- [**RF1**](RF1.md): Usuario consulta página de inicio de sesión.\ `Done`
- [**RF2**](RF2.md): Usuario registrado inicia sesión.\ `Done`
- [**RF3**](RF3.md): Usuario cierra sesión\ `Done`
- [**RF4**](RF4.md): Usuario consulta módulo de análisis.\ `Done`
- [**RF5**](RF5.md): Usuario consulta los ranchos disponibles.\ `Eliminado`
- [**RF6**](RF6.md): Usuario selecciona el rancho a analizar.\ `Eliminado`
- [**RF7**](RF7.md): Usuario modifica selección de rancho a analizar\ `Eliminado`
- [**RF8**](RF8.md): Usuario consulta los tractores disponibles.\ `Ready`
- [**RF9**](RF9.md): Usuario selecciona tractores a analizar.\ `Ready`
- [**RF10**](RF10.md): Usuario modifica selección de tractor a analizar.\ `Ready`
- [**RF11**](RF11.md): Usuario consulta datos disponibles.\ `Ready`
- [**RF12**](RF12.md): Usuario selecciona datos a comparar.\ `Ready`
- [**RF13**](RF13.md): Usuario consulta filtros disponibles.\ `Ready`
- [**RF14**](RF14.md): Usuario selecciona filtros a aplicar.\ `Ready`
- [**RF15**](RF15.md): Usuario añade cuadro de texto al reporte.\ `Done`
- [**RF16**](RF16.md): Usuario edita cuadro de texto del reporte.\ `Done`
- [**RF17**](RF17.md): Usuario elimina cuadro de texto del reporte.\ `Done`
- [**RF18**](RF18.md): Usuario genera plantilla de reporte.\ `Ready`
- [**RF19**](RF19.md): Usuario elimina plantilla de reporte.\ `Ready`
- [**RF20**](RF20.md):Usuario guarda plantilla de reporte.\ `Ready`
- [**RF21**](RF21.md):Usuario consulta plantillas de reporte.\ `Ready`
- [**RF22**](RF22.md):Usuario selecciona plantilla de reporte.\ `Ready`
- [**RF23**](RF23.md):Usuario descarga PDF del reporte.\ `Done`
- [**RF24**](RF24.md):Usuario define frecuencia de envío automático del reporte.\
- [**RF25**](RF25.md):Usuario define correos de destinatarios.\
- [**RF26**](RF26.md):Usuario modifica correo de destinatario.\
- [**RF27**](RF27.md):Usuario elimina correo de destinatario.\
- [**RF28**](RF28.md):Usuario es notificado si se carga algún archivo incorrecto.\ `Done`
- [**RF29**](RF29.md):Usuario añade gráfica a reporte.\ `Done`
- [**RF30**](RF30.md):Usuario modifica tipo de gráfica en reporte.\ `Done`
- [**RF31**](RF31.md):Usuario elimina gráfica en reporte.\ `Done`
- [**RF32**](RF32.md):Administrador crea usuario.\ `Done`
- [**RF33**](RF33.md):Administrador consulta usuario.\ `Done`
- [**RF34**](RF34.md):Administrador modifica usuario.\ `Done`
- [**RF35**](RF35.md):Administrador elimina usuario.\ `Done`
- [**RF36**](RF36.md):Usuario carga Excel a la plataforma.\ `Done`
- [**RF37**](RF37.md):Usuario elimina el Excel cargado.\ `Done`
- [**RF38**](RF38.md):Usuario sustituye el Excel cargado.\ `Done`
- [**RF39**](RF39.md):Usuario inicia sesión con Microsoft.\

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

- El sistema debe ser capaz de permitir la creación y uso de nuevas fórmulas.

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

**Accesibilidad**

- El tamaño de letra debe ser ajustable para ser legible en todo tiempo.
- La aplicación debe proporcionar retroalimentación visual inmediata cuando se realice cualquier acción.

---

## Reglas de negocio

- No se pueden hacer cambios a la plataforma de FieldOps debido a su impacto global.
- Los usuarios no pueden acceder directamente a la base de datos.

---

## Requisitos de información

[Diagrama MER](../MER%20-%20Tractores.jpeg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="usuarios" label="Usuarios y Roles" default>

## Usuario

- Id
- Correo
- Contraseña
- Nombre
- Rol

</TabItem>

<TabItem value='Plantilla de reporte' label='Plantilla de reporte'>

## Plantilla de reporte

- Id
- Nombre
- Codificación
- Frecuencia de envío
- Correo de destino
- Número de destino

</TabItem>

<TabItem value='Fórmulas' label='Fórmulas'>

## Plantilla de reporte

- Id
- Codificación
- Nombre

</TabItem>

<TabItem value='Plantilla de alertas' label='Plantilla de alertas'>

## Plantilla de reporte

- Id
- Datos de la plantilla
- Nombre

</TabItem>

<TabItem value='Reporte' label='Reporte'>

## Plantilla de reporte

- Id
- Destino
- Fecha

</TabItem>
</Tabs>

---

## Requisitos de interfaz

- Las interfaces generadas para su uso dentro del proyecto deberán seguir el estilo de las presentes en la plataforma “FieldOps”.
- Se utilizará una paleta de colores conformada por: azul marino (#1f4281), gris azulado (#262b40), rojo (#a61930), negro (#0e101a) y blanco (#fcfcfd).
- La aplicación no reproducirá sonidos.
- El tamaño de letra debe ser ajustable para ser legible en todo tiempo.
- La interfaz debe ser responsiva y adaptarse a diferentes tamaños desde una resolución mínima de 400x600.
- La aplicación debe proporcionar retroalimentación visual inmediata cuando se realice cualquier acción.
- Los elementos interactivos deben tener un tamaño mínimo de 32x32 para facilitar su uso.

Los **mockups** de la interfaz están disponibles en el siguiente enlace:  
[Figma – Interfaz TracTech](https://www.figma.com/design/YwQeTOQDegDUvP4eh3OVIu/Trac-Tech?node-id=0-1&p=f&t=FuWyYjMuueKZ2Ia6-0)

---

## Características de los usuarios

- Los dispositivos son marca Dell y usan el sistema operativo Windows 11, tanto laptop como PC.
- Se hace la suposición de que los usuarios tienen un rango de edad de 20 a 60 años.
- Los usuarios tienen un conocimiento promedio de las tecnologías que utilizan.
- Algunos usuarios serán temporales.
- Los usuarios trabajan en diferentes aplicaciones: Excel, FieldOps, TLExplorer, etc.

---

## Suposiciones

- El usuario contará con experiencia previa en Excel.
- El usuario cuenta con una conexión a internet.
- El usuario ha recibido credenciales de acceso válidas y personalizadas.
- Todas las computadoras donde se instalará la aplicación de escritorio son computadoras Dell con Windows 11.
- Todas las computadoras donde se ejecutará el sistema tienen el mismo rendimiento.

---

| Autor                   | Descripción del cambio                                  | Versión |
| ----------------------- | ------------------------------------------------------- | ------- |
| Juan Pablo Chávez       | Adición de requisitos no-funcionales                    | V1.1    |
| Daniel Queijeiro Albo   | Adición de requisitos de información, reglas de negocio | V2.0    |
| Emiliano Gomez Gonzalez | Agrega el link de lso mockups                           | V2.1    |
