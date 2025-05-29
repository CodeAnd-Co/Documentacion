---
title: Estrategia tecnica
sidebar_position: 5
---

# Estrategia tecnica

## Objetivo

Establecer lineamientos claros para el desarrollo, asegurando calidad y consistencia.

---

## Repositorios

Utilizaremos 2 repositorios separados, tanto para el backend como para el frontend de la aplicación, de esta manera nuestro sistema puede ser modular.

## Estrategia de Ramas

![alt text](/img/manejo-de-ramas.png)

Utilizaremos 3 ramas principales:

- **Master**: Contiene el código que será desplegado en producción y sobre el que se maneja el versionamiento de la aplicación.
  - El código no debe tener problemas de integración o ejecución.
  - El código debe haber sido probado.
- **Staging**: Rama pre-productiva usada para preparar el release de las versiones y realizar pruebas de aceptación.
- **Develop**: Rama de desarrollo donde se mantiene la integración de todos los desarrollos del equipo.
- **Feature**: Ramas temporales destinadas para el código de uno o varios developers que trabajan en una característica.

---

## Gestión de Requerimientos

### Objetivo

Alinear las decisiones técnicas con los objetivos de negocio.

### Priorización basada en valor y riesgos

La priorización de requerimientos se puede encontrar aquí:

[**_Priorización de requerimientos_**](https://docs.google.com/spreadsheets/d/1E5J6ugtuWdjWGQqJeEW1vYByL9mUm9-9wHdZaO0a2zE/edit?gid=0#gid=0)

La especificación de historias de usuario se llevarán a cabo teniendo en cuenta la definición de [**Done**](../definicion-done-larvas.md) y [**Ready**](../definicion-ready-larvas.md).

---

## Gestión de Calidad y Pruebas

### Objetivo

Garantizar un software confiable a través de buenas prácticas de aseguramiento de calidad.

---

### Estrategia de Pruebas

La estrategia que se seguirá para las pruebas será la siguiente:

[**_STP_**](./plan-stp.md)

---

## Documentación del código

### Objetivo

Documentar claramente las funcionalidades y código del sistema para lectura en caso de confusiones.

**Ejemplo:**

- Se agregaron espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- El detalle del estándar de codificación se podrá ver en el siguiente documento: [**Estandar de codificación**](../../../standards/estandar-codificacion.md).
- Adicionalmente usaremos el estándar de codificación para Flutter: [**Estándar de Flutter**](https://docs.google.com/document/d/1beTj1z5LRMbYtg2gzlaBTFU66nikZ-U8oWIscKtHk-c/edit?usp=sharing)

---

## Patrones de diseño y diagrama de paquetes

### Backend

![alt text](./Diagrama_paquetes_backend.png)

Este diagrama de paquetes representa la organización de un backend. Se divide en varias secciones principales:

- **Routes**: Definición de las rutas por cada modulo.
- **Controllers**: Implementación de la lógica de negocio.
- **Models**: Interacción con la base de datos.
- **Utils**:
  - **Middlewares**: Funciones intermedias para procesar solicitudes.
  - **Services**: Lógica reutilizable independiente de los controladores.
- **Views**: Sección opcional para manejar vistas en caso de ser necesario.
- **Public**: Archivos o recursos publicos utilizados en varios modulos (no deben de comprometer la seguridad de la información).

- **Archivos principales**:
  - app.js: Punto de entrada del servidor.
  - .env: Archivo con cuentas, llaves y contraseñas importantes, sensibles y secretas.
  - package.json: Declaración de las dependencias y su versionamiento.
  - node_modules: Dependencias del proyecto.
---
  ## Plantilla Pull Requests FrontEnd

```

## Plantilla PR FrontEnd

Última actualización 28/04/25

---

# Descripción

---

## Tipo de cambio

- [ ] Corrección de error (cambio no disruptivo que soluciona un problema)
- [ ] Nueva función (cambio no disruptivo que agrega funcionalidad)
- [ ] Cambio disruptivo (corrección o función que afecta la compatibilidad existente)
- [ ] Este cambio requiere una actualización en la documentación
- [ ] Camio mínimo (Visual o de bajo impacto, sin afectcar lógica )

---

# ¿Qué archivo fue el que modifiqué?

Ejemplo:

- charola_view.dart

---

# ¿Cómo se ha probado?

Describe resumidamente cómo lo probaste y funciona. Ejemplo:

- "Se probó manualmente. Se validó que el botón 'Guardar' guarda correctamente la información y se muestra una alerta de éxito."
  _En caso de cambio mínimo:_
- "El cambio fue visualmente unicamente (color del boton). Se validó en los navegadores principales. No se requirieron pruebas funcionales."

---

### Cambios menores

- [ ] Este PR realiza un cambio mínimo que no afecta la lógica del sistema
- [ ] Se validó visualmente el componente afectado
- [ ] No se realizaron pruebas unitarias porque no aplica

---

Versión: V1
### Autores

| Nombre                         | Rol   |
| ------------------------------ | ----- |
| Juan Antonio Landeros Velázquez          | Autor |
```

## Aplicación en Flutter

![alt text](Diagrama_paquetes_frontend.png)

Este diagrama describe la distribución de paquetes de la aplicación en Flutter utilizando MVVM y Clean Architecture

### 1. Framework

Framework es un paquete que se encarga de la gestión de la vista de la presentación.

- **Views**: Contiene los elementos graficos de la aplicación, la UI.
  - **Components**: Componentes usados en la aplicación.
- **ViewModel**: Paquete que maneja la lógica dentro de la vista de la aplicación. ViewModel se comunica con Domain para obtener información.
- **Navigation**: Incluye el archivo donde se manejan las rutas de la aplicación.

### 2. Data

Data maneja la adquisición de los datos.

- **Model**: Modelos de datos que representan la información obtenida por las APIs y bases de datos.
- **Repository**: Repositorios encargados de obtener los datos, remotos desde la red o locales.
- **Service**: Contiene los archivos que declaran la clase abstracta de los métodos del repositorio.

### 3. Domain

Domain es la núcleo de la lógica dentro de la aplicación

### 4. Archivos importantes

**Main.dart**: Punto de entrada de la aplicación.

### 5. Pruebas unitarias

Contiene todas las pruebas unitarias.

- **Data**: repositorios, APIs, modelos
- **Domain**: casos de uso
- **ViewModel**: validación de estados y lógica de presentación

### Historial de cambios

| **Tipo de Versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creación de la  estrategía tecnica   | 08/03/2025  | Juan Eduardo |
| **2.0**             | Actualización del diagrama de paquetes backend   | 22/04/2025  | Miguel Angel Uribe Esquivel |
| **3.0**             | Agregar plantilla de PR de technebrios   | 28/04/2025  | Juan Antonio Landeros Velázquez |
| **4.0**             | Actualización del diagrama de paquetes frontend  | 22/05/2025  | Juan Antonio Landeros Velázquez |