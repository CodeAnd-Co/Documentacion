---
title: Historias de Usuario
sidebar_position: 1
---

# Historias de Usuario

### **Proveedores de Historias de Usuario**

- **Internos**: Personas dentro de Code & Co.
- **Externos**: Cliente.

### **Lista de Proveedores de Historias de Usuario**

| Proveedor                       | Rol     | Autoridad | Tipo de Historias de Usuario             | Método de Comunicación                           |
| ------------------------------- | ------- | --------- | ------------------------------ | ------------------------------------------------ |
| Product Owner                   | Interno | Alta      | Funcionales y de negocio       | Reuniones diarias en equipo, Whatsapp y Discord. |
| José Luz Bravo (Socio Formador) | Externo | Alta      | Funcionales, de negocio y UX   | Reuniones según sea necesario, Whatsapp y Teams  |
| Architecture Owner              | Interno | Alta      | No funcionales, de información | Reuniones diarias en equipo, Whatsapp y Discord. |
| UX/UI                           | Interno | Alta      | De Interfaz                    | Reuniones diarias en equipo, Whatsapp y Discord. |
| Team Members                    | Interno | Media     | Funcionales y No funcionales   | Reuniones diarias en equipo, Whatsapp y Discord. |

## Historias de Usuario Funcionales

### Descripción General

Los Historias de Usuario funcionales del sistema describen una variedad de acciones que los usuarios, administradores y empleados pueden realizar dentro del sistema como lo son la creación, lectura, actualización y eliminación de usuarios, plantillas de reportes, fórmulas y otros elementos clave. Estos Historias de Usuario funcionales también contemplan la administración de seguridad, roles y permisos para garantizar que cada usuario pueda realizar únicamente las acciones que le corresponden.

---

### Historias de Usuario Específicos del sistema.

- [**HU1**](./HU1.md): Usuario consulta página de inicio de sesión.\ `Done`
- [**HU2**](./HU2.md): Usuario registrado inicia sesión.\ `Done`
- [**HU3**](./HU3.md): Usuario consulta módulo de análisis.\ `Done`


---

## Matriz de dependencias

[Enlace a Matriz de dependencias](https://docs.google.com/spreadsheets/d/12LGuotzg1zaO7pS5-I_qlntOOh-vTWoIH8i-Eyptbg4/edit?gid=1737125783#gid=1737125783)


## Historias de Usuario No Funcionales

#### Descripción General

Los Historias de Usuario no funcionales establecen las expectativas en términos de tiempo de respuesta, capacidad de carga, compatibilidad con diferentes plataformas, accesibilidad para los usuarios, disponibilidad, entre otros aspectos. También incluyen criterios de seguridad, como el cifrado de datos y la protección contra ataques, así como la facilidad de mantenimiento y escalabilidad del sistema, asegurando que pueda adaptarse a nuevas necesidades y crecimiento sin comprometer la estabilidad del sistema.

---

### Historias de Usuario Específicas

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

<iframe
  frameborder="0"
  style={{ borderRadius: "1em" }}
  width="100%"
  height="500em"
  src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%23G1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%23%257B%2522pageId%2522%253A%2522l-jaUNbbZnOwnRJqBNt3%2522%257D&layers=1&nav=1&title=diagrama%20de%20paquetes%20Electron.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1KPglZc2PKZ8ah6t3utgAD4n3U6BQs2sG%26export%3Ddownload"
></iframe>

**Diagrama de paquetes Backend:**

![alt text](../diagrama-de-paquetes-backend-desacoplado.png)

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

## Historias de Usuario de información

**Diagrama MER**

<iframe
  frameborder="0"
  style={{ borderRadius: "1em" }}
  width="100%"
  height="500em"
  src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=https%3A%2F%2Fapp.diagrams.net%2F%3Fsplash%3D0%23G160oFnNvJFYZdJblO2gJofiWYZ3D7cJyZ%23%257B%2522pageId%2522%253A%2522RvwrZuzGptMe-nOa_BFY%2522%257D&layers=1&nav=1&title=MER.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D160oFnNvJFYZdJblO2gJofiWYZ3D7cJyZ%26export%3Ddownload"
></iframe>


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

## Historias de Usuario de interfaz

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
| Juan Pablo Chávez       | Adición de Historias de Usuario no-funcionales                    | V1.1    |
| Daniel Queijeiro Albo   | Adición de Historias de Usuario de información, reglas de negocio | V2.0    |
| Emiliano Gomez Gonzalez | Agrega el link de lso mockups                           | V2.1    |
