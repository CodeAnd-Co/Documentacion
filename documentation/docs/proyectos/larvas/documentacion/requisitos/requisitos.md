---
title: Requisitos
sidebar_position: 1
---

# Requisitos

| Nombre | Rol |
|---------|-------------------------|
| Armando Méndez Castro | Autor | 

**Última actualización:** 06 de marzo de 2025

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

- [**RF1**](RF1.md): Iniciar Sesión - `Ready` 
- [**RF2**](RF2.md): Consultar Gráficas 
- [**RF3**](RF3.md): Consultar historial de ancestros de una charola - `Ready`
- [**RF4**](RF4.md): Splashscreen 
- [**RF5**](RF5.md): Registrar Charola - `Ready`
- [**RF6**](RF6.md): Buscar charola 
- [**RF7**](RF7.md): Modificar datos generales Charola
- [**RF8**](RF8.md): Eliminar Charola  
- [**RF9**](RF9.md): Cerrar sesión
- [**RF10**](RF10.md): Consultar información detallada de una charola - `Ready`
- [**RF11**](RF11.md): Descargar reportes - `Ready`
- [**RF12**](RF12.md): Alertas
- [**RF13**](RF13.md): Registrar usuario  
- [**RF14**](RF14.md): Borrar usuario 
- [**RF15**](RF15.md): Filtrar las charolas por escarabajo y larva
- [**RF16**](RF16.md): Visualizar todas las charolas registradas en el sistema  
- [**RF17**](RF17.md): Multiselección para eliminar historial  
- [**RF18**](RF18.md): Historial de actividad de charola 
- [**RF19**](RF19.md): Editar Usuario
- [**RF20**](RF20.md): Registrar Tamizado
- [**RF21**](RF21.md): Consultar charolas de cambios pasados
- [**RF22**](RF22.md): Consultar charolas de cambios pasados
- [**RF23**](RF23.md): Registrar un nuevo tipo de comida en el sistema - `Ready`
- [**RF24**](RF24.md): Editar un tipo de comida en el sistema - `Ready`
- [**RF25**](RF25.md): Eliminar un tipo de comida
- [**RF26**](RF26.md): Registrar un nuevo tipo de comida en el sistema
- [**RF27**](RF27.md): Editar la alimentación de la charola
- [**RF28**](RF28.md): Eliminar la alimentación de la charola 
- [**RF29**](RF29.md): Registar la información del Frass obtenido 
- [**RF30**](RF30.md): Editar la información del Frass obtenido  
- [**RF31**](RF31.md): Eliminar la información del Frass obtenido 
- [**RF32**](RF32.md): Archivar datos visuales de charolas

---

## Requisitos No Funcionales

#### Descripción General

Los requisitos no funcionales establecen las expectativas en términos de tiempo de respuesta, capacidad de carga, compatibilidad con diferentes plataformas, accesibilidad para los usuarios, disponibilidad, entre otros aspectos. También incluyen criterios de seguridad, como el cifrado de datos y la protección contra ataques, así como la facilidad de mantenimiento y escalabilidad del sistema, asegurando que pueda adaptarse a nuevas necesidades y crecimiento sin comprometer la estabilidad del sistema.

---

### Requisitos Específicos

### Rendimiento
- El sistema debe responder a las solicitudes del usuario dentro de un tiempo de respuesta aceptable; menos de 2 segundos para la mayoría de las operaciones.

### Escalabilidad
- El sistema debe ser escalable para manejar un aumento de hasta 20 usuarios simultáneos sin que exista una decadencia significativa del rendimiento ya que Zuustento pretende una expansión a futuro en los próximos 2 años. En este plazo el límite de colaboradores es de 20, sin embargo, aunque no es mucho, es importante hacer el sistema escalable para futuros cambios.

### Disponibilidad
- Desde la perspectiva del tiempo debe estar disponible entre semana la mayoría del tiempo, sin embargo, en fines de semana se pueden hacer servicios de mantenimiento.
- El sistema tolerará un máximo de 48 horas fuera de servicio (preferentemente en un fin de semana).

### Usabilidad
- La interfaz debe ser intuitiva, permitiendo a los usuarios navegar con facilidad. Los botones deben ofrecer una interacción sencilla y las gráficas presentar los datos relevantes de forma clara y comprensible. El diseño debe ser minimalista y limpio, evitando un aspecto desordenado, y estar optimizado para su uso en tabletas.
- El sistema deberá adaptarse a una interfaz de tableta

### Portabilidad
- La aplicación móvil debe funcionar en Windows 10 y iOS 18 en adelante

### Seguridad 
- El sistema debe realizar copias de seguridad de datos automáticas  cada 7 días. Debido a que es muy importante realizar respaldos.
- Información sensible (credenciales) deben estar cifradas con un método confiable.

### Mantenibilidad 
- La documentación del código debe seguir el estándar establecido en el equipo Tech-Nebrios. 
- Todo el código debe estar documentado adecuadamente utilizando comentarios explicativos y convenciones de documentación estándar para facilitar la comprensión por parte de otros desarrolladores.
- El código debe ser acompañado por pruebas unitarias con al menos un 80% de cobertura.

### Interoperabilidad
- El sistema debe ser capaz de integrarse con servicios de almacenamiento en la nube AWS debido a que el cliente cuenta con este servicio.
- El sistema debe ser capaz de intercambiar datos con aplicaciones de terceros mediante APIs RESTful, utilizando el estándar JSON para el formato de intercambio.

### Registro de cambios 
| Autor | Descripción del cambio | Versión |
|---------|-------------------------|---------|
| Armando Méndez Castro | Historias de usuario y requisitos no funcionales | 1.0 |
| Miguel Angel Uribe Esquivel  | Reviewer y autorizador | 1.0 |
| Armando Méndez Castro | Descripción de pruebas unitarias del MVP | 1.1 |

