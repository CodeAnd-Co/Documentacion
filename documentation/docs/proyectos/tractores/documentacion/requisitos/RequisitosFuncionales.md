---
title: Requisitos Funcionales
sidebar_position: 1
---

# Requisitos Funcionales

### **Proveedores de Requisitos Funcionales**

- **Internos**: Personas dentro de Code & Co.
- **Externos**: Cliente.

### **Lista de Proveedores de Requisitos Funcionales**

| Proveedor                       | Rol     | Autoridad | Tipo de Requisitos Funcionales             | Método de Comunicación                           |
| ------------------------------- | ------- | --------- | ------------------------------ | ------------------------------------------------ |
| Product Owner                   | Interno | Alta      | Funcionales y de negocio       | Reuniones diarias en equipo, Whatsapp y Discord. |
| José Luz Bravo (Socio Formador) | Externo | Alta      | Funcionales, de negocio y UX   | Reuniones según sea necesario, Whatsapp y Teams  |
| Architecture Owner              | Interno | Alta      | No funcionales, de información | Reuniones diarias en equipo, Whatsapp y Discord. |
| UX/UI                           | Interno | Alta      | De Interfaz                    | Reuniones diarias en equipo, Whatsapp y Discord. |
| Team Members                    | Interno | Media     | Funcionales y No funcionales   | Reuniones diarias en equipo, Whatsapp y Discord. |

## Requisitos Funcionales

### Descripción General

Los Requisitos Funcionales funcionales del sistema describen una variedad de acciones que los usuarios, administradores y empleados pueden realizar dentro del sistema como lo son la creación, lectura, actualización y eliminación de usuarios, plantillas de reportes, fórmulas y otros elementos clave. Estos Requisitos Funcionales funcionales también contemplan la administración de seguridad, roles y permisos para garantizar que cada usuario pueda realizar únicamente las acciones que le corresponden.

---

### Requisitos Funcionales Específicos del sistema.

- [**RF1**](./RF1.md): Usuario consulta página de inicio de sesión.\ `Done`
- [**RF2**](./RF2.md): Usuario registrado inicia sesión.\ `Done`
- [**RF3**](./RF3.md): Usuario consulta módulo de análisis.\ `Done`
- [**RF4**](./RF4.md): Usuario consulta datos disponibles.\ `Ready`
- [**RF5**](./RF5.md): Usuario cierra sesión.\
- [**RF6**](./RF6.md): Usuario carga excel a la plataforma.\ `Done`
- [**RF7**](./RF7.md): Usuario sustituye el excel cargado.\ `Done`
- [**RF8**](./RF8.md): Usuario elimina el excel cargado.\ `Done`
- [**RF9**](./RF9.md): Usuario descarga PDF del reporte.\ `Done`
- [**RF10**](./RF10.md): Usuario añade gráfica al reporte.\ `Done`
- [**RF11**](./RF11.md): Usuario elimina gráfica en reporte.\ `Done`
- [**RF12**](./RF12.md): Usuario modifica tipo de gráfica en reporte.\ `Done`
- [**RF13**](./RF13.md): Administrador busca usuario.\
- [**RF14**](./RF14.md): Administrador crea usuario.\ `Done`
- [**RF15**](./RF15.md): Administrador consulta usuario.\ `Done`
- [**RF16**](./RF16.md): Administrador modifica usuario.\ `Done`
- [**RF17**](./RF17.md): Administrador elimina usuario.\ `Done`
- [**RF18**](./RF18.md): Usuario añade cuadro de texto al reporte.\ `Done`
- [**RF19**](./RF19.md): Usuario modifica cuadro de texto del reporte.\ `Done`
- [**RF20**](./RF20.md): Usuario elimina cuadro de texto del reporte.\ `Done`
- [**RF21**](./RF21.md): Usuario consulta fórmulas.\
- [**RF22**](./RF22.md): Usuario guarda fórmula.\
- [**RF23**](./RF23.md): Usuario elimina fórmula.\
- [**RF24**](./RF24.md): Usuario define fórmula.\
- [**RF25**](./RF25.md): Usuario selecciona parámetros de fórmula.\
- [**RF26**](./RF26.md): Usuario selecciona datos a comparar.\ `Ready`
- [**RF27**](./RF27.md): Usuario es notificado si se carga algún archivo incorrecto.\ `Done`
- [**RF28**](./RF28.md): Usuario aplica fórmula.\
- [**RF29**](./RF29.md): Usuario modifica fórmula.\
- [**RF30**](./RF30.md): Usuario carga fórmula.\
- [**RF31**](./RF31.md): Usuario retira fórmula.\
- [**RF32**](./RF32.md): Usuario modifica parámetros de fórmula.\
- [**RF33**](./RF33.md): Usuario consulta plantillas de reporte.\ `Ready`
- [**RF34**](./RF34.md): Usuario elimina plantilla de reporte.\ `Ready`
- [**RF35**](./RF35.md): Usuario guarda plantilla de reporte.\ `Ready`
- [**RF36**](./RF36.md): Usuario selecciona plantilla de reporte.\ `Ready`

---

## Matriz de dependencias

[Enlace a Matriz de dependencias](https://docs.google.com/spreadsheets/d/12LGuotzg1zaO7pS5-I_qlntOOh-vTWoIH8i-Eyptbg4/edit?gid=1737125783#gid=1737125783)

## Requisitos No Funcionales

#### Descripción General

Los Requisitos no funcionales establecen las expectativas en términos de tiempo de respuesta, capacidad de carga, compatibilidad con diferentes plataformas, accesibilidad para los usuarios, disponibilidad, entre otros aspectos. También incluyen criterios de seguridad, como el cifrado de datos y la protección contra ataques, así como la facilidad de mantenimiento y escalabilidad del sistema, asegurando que pueda adaptarse a nuevas necesidades y crecimiento sin comprometer la estabilidad del sistema.

---

### Requisitos Funcionales Específicas

**Rendimiento**.

- La aplicación será capaz de generar un reporte de una gráfica en menos de 10 segundos.
- La aplicación será capaz de leer un archivo de Excel de 2,500 registros en menos de 20 segundos.
- El sistema debe tardar menos de 10 segundos en cargar una plantilla de reporte.
- Las plantillas deben tardar menos de 10 segundos en ser guardadas en el servidor.
- El sistema debe soportar más de 50 usuarios simultáneos cargando plantillas de reportes.

**Escalabilidad**.

- El sistema debe ser capaz de permitir la creación y uso de nuevas fórmulas.
- El sistema debe usar el patron de diseño CLEAN para el frontEnd y MVC para el backend.

**Diagrama de paquetes Frontend:**

[Ver diagrama de paquetes Frontend](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%23%257B%2522pageId%2522%253A%2522l-jaUNbbZnOwnRJqBNt3%2522%257D&layers=1&nav=1&title=diagrama%20de%20paquetes%20Electron.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%26export%3Ddownload)

**Diagrama de paquetes Backend:**

![Diagrama de paquetes Backend](../diagrama-de-paquetes-backend-desacoplado.png)

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

**Diagrama MER**

[Ver diagrama MER](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%3Fsplash%3D0%23G160oFnNvJFYZdJblO2gJofiWYZ3D7cJyZ%23%257B%2522pageId%2522%253A%2522RvwrZuzGptMe-nOa_BFY%2522%257D&layers=1&nav=1&title=MER.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D160oFnNvJFYZdJblO2gJofiWYZ3D7cJyZ%26export%3Ddownload)

### Usuarios y Roles

## Usuario

- Id
- Correo
- Contraseña
- Nombre
- Rol

### Plantilla de reporte

## Plantilla de reporte

- Id
- Nombre
- Codificación
- Frecuencia de envío
- Correo de destino
- Número de destino

### Fórmulas

## Fórmulas

- Id
- Codificación
- Nombre

### Plantilla de alertas

## Plantilla de alertas

- Id
- Datos de la plantilla
- Nombre

### Reporte

## Reporte

- Id
- Destino
- Fecha

---

## Requisitos de interfaz

- Las interfaces generadas para su uso dentro del proyecto deberán seguir el estilo de las presentes en la plataforma "FieldOps".
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
| Juan Pablo Chávez       | Adición de Requisitos no-funcionales                    | V1.1    |
| Daniel Queijeiro Albo   | Adición de Requisitos  de información, reglas de negocio | V2.0    |
| Emiliano Gomez Gonzalez | Agrega el link de lso mockups                           | V2.1    |