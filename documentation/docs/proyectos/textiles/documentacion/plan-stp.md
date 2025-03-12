# Plan de Pruebas de Software

## Autores

| Nombre               | Rol   |
|----------------------|-------|
| Hiram Mendoza   | Autor |
| Carlos Fonseca   | Autor |

---

## Introducción


### Propósito
El propósito de este plan es garantizar la calidad del software, detectando y corrigiendo errores a tiempo para asegurar que el sitio web de ALTERTEX cumpla con los requisitos y expectativas de los usuarios.

<!-- Pendiente -->
### Alcance
**Funcionalidades Clave:**
- **Gestión:** Permitir al administrador gestionar los pedidos, productos y usuarios.
- **Visualización:** Transformar datos en gráficos intuitivos para facilitar la identificación de tendencias, patrones y anomalías.

---

## Definiciones, Acrónimos y Abreviaciones

- **PPS:** Plan de Pruebas del Sistema.
- **QA:** Aseguramiento de Calidad (Quality Assurance).
- **RBAC:** Control de Acceso Basado en Roles (Role-Based Access Control).
- **MVP:** Producto Mínimo Viable (Minimum Viable Product).
- **MBI:** Incremento Mínimo de Negocio (Minimum Business Increment).
- **UI:** User Interface (Interfaz de Usuario).

---

## Objetivos de las Pruebas

- Detectar problemas de usabilidad y experiencia del usuario.
- Verificar la correcta integración de los módulos del sistema.
- Validar la instalación y configuración en el entorno de producción.
- Evaluar la robustez y estabilidad del sistema bajo carga extrema.
- Asegurar que cada componente individual funcione correctamente.
- Verificar la funcionalidad general del software.
- Comprobar la seguridad y la correcta implementación del RBAC.

---

## Entregables de las Pruebas

- Casos de prueba.
- Scripts de las pruebas.
- Datos de las pruebas.
- Resultados de las pruebas.

---

## Recursos para Pruebas

### Personal
El ingeniero de QA se asegurará de la correcta aplicación de las pruebas y calidad del código. Los miembros del equipo se encargarán de hacer las pruebas. El autor de la prueba debe ser diferente al autor del caso de uso/historia de usuario.

### Herramientas

**Herramientas a considerar:**
- React
- Vite
- AWS Amplify
- Node.js 
- Express

### Dispositivos
- Computadoras (Safari, Chrome)
- Navegadores de dispositivos móviles iOS/Android (Safari, Chrome)

---

## Ambientes de Prueba

- Entornos locales con las mismas dependencias que el entorno de producción.
- Base de datos para pruebas con datos simulados (realistas).
- Computadoras portátiles con Windows y macOS como ambiente de desarrollo.
- Navegadores de dispositivos móviles iOS-Android.

---

## Casos de Prueba

Por cada requisito funcional/historia de usuario que forma parte del MVP y MBI debe haber un caso de prueba.

[Guía para hacer casos de prueba a partir de casos de uso](https://www.fing.edu.uy/inco/cursos/ingsoft/iis/files/3172_0958_usecase.pdf)

---

## Riesgos y Mitigación

| Riesgos                                                           | Mitigación                                       |
|-------------------------------------------------------------------|-------------------------------------------------|
| Disponibilidad del entorno                                        | Priorizar las funciones que forman parte del MVP |
| Uso de una nueva tecnología para el desarrollo de la pagina web   | Capacitación en la tecnología                   |
| Implementación de frameworks de pruebas                           | Capacitación en el uso de los frameworks        |
| Los usuarios finales no se adaptan a la web                       | Capacitación y retroalimentación de los usuarios |

---

## Manejo de las Pruebas

Explicación de cómo se gestionarán los defectos y los resultados de las pruebas. Se debe detallar:

- Cómo se clasificarán y priorizarán los defectos encontrados.
- Procedimientos para informar a los desarrolladores y diseñadores sobre los resultados de las pruebas.
- Herramientas utilizadas para registrar y dar seguimiento a los defectos.

---

## Aprobación y Firma

Proceso para validar las pruebas:

1. Realizar la documentación de la prueba correspondiente.
2. Notificar al responsable de la aprobación.
3. Notificar al QA.

---

## Apéndices

- [Guía para hacer casos de prueba a partir de casos de uso](https://www.fing.edu.uy/inco/cursos/ingsoft/iis/files/3172_0958_usecase.pdf)

---

## Registro de Cambios

| Autores             | Descripción                 | Versión |
|------------------|---------------------------|---------|
| Hiram Mendoza, Carlos Fonseca         | Creación del documento     | 1.0     |
