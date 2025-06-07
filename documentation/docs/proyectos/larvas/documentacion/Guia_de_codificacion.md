---
title: Guía de codificación rápida
sidebar_position: 6
---

# Guía de codificación rápida
---
## Flutter

---

## Introducción a Flutter y Dart

**Flutter** es un *framework* de desarrollo de aplicaciones creado por Google que permite construir aplicaciones nativas de alto rendimiento para **iOS, Android, web y escritorio**, todo desde una sola base de código. Se destaca por su rapidez, su interfaz altamente personalizable y su enfoque en una experiencia de usuario fluida.

**Dart**, por su parte, es el lenguaje de programación utilizado por Flutter. También desarrollado por Google, Dart es un lenguaje moderno, eficiente y fácil de aprender que combina características de lenguajes orientados a objetos como Java y C#, con un enfoque en la productividad del desarrollador y la velocidad de ejecución.

### ¿Para qué se utiliza Flutter?

Flutter se utiliza para crear:

* Aplicaciones móviles (Android e iOS) con una sola base de código.
* Aplicaciones web interactivas.
* Aplicaciones de escritorio (Windows, macOS y Linux).
* Interfaces de usuario embebidas en dispositivos personalizados.

### ¿Por qué usar Flutter y Dart?

* 🔁 **Una sola base de código**: Crea apps para múltiples plataformas sin duplicar esfuerzo.
* ⚡ **Rendimiento nativo**: Gracias al motor gráfico de Flutter, las apps son rápidas y fluidas.
* 🎨 **UI flexible y personalizable**: Control total sobre cada píxel de la pantalla.
* 🚀 **Hot Reload**: Permite ver cambios en el código en tiempo real, acelerando el desarrollo.
* 📦 **Gran ecosistema**: Flutter tiene una comunidad activa y miles de paquetes disponibles.
* 🧠 **Aprendizaje accesible**: Dart es un lenguaje fácil de entender, incluso para quienes vienen de otros lenguajes como JavaScript, Java o Python.

En resumen, Flutter y Dart son herramientas poderosas para quienes desean desarrollar aplicaciones modernas, atractivas y eficientes, sin preocuparse por las diferencias entre plataformas.


## ¿Cómo se utiliza Flutter?

Para conocer la información básica sobre dart y cómo instalar flutter, te recomendamos consultar [este laboratorio](https://meeplab2015.github.io/tc3004b-agodic24-101/docs/labs/mobile/flutter/tutorials/intro_flutter/intro_flutter) y seguir con [este otro](https://meeplab2015.github.io/tc3004b-agodic24-101/docs/labs/mobile/flutter/tutorials/intro_flutter/modelos_y_listas) para familiarizarte con flutter.

Puede que al principio no entiendas por completo los widgets, pero tras practicar con ellos te darás cuenta de que son herramientas muy prácticas para construir tus interfaces, ya que son muy personalizables y fáciles de adaptar.

## Patrón de Arquitectura

En quinto semestre aprendimos sobre el patrón MVVM y CLEAN, pero en caso de que no lo recuerdes; MVVM es un patrón de arquitectura que nos ayuda a mantener un código mejor organizado, separándolo en varias capas.

* **View:** Es la capa que el usuario puede ver, le presenta información e interactua con el ViewModel para producir cambios a través de observadores.

* **ViewModel:** El ViewModel es el encargado de manejar todos los cambios que puedan afectar a la interfaz. Se comunica con capas exteriores para detectar cambios en la información y notificarlo a la interfaz.

* **Requirement:** Esta capa maneja la lógica de tus casos de uso y se comunica con el Repository.

* **Repository:** El repository es el encargado de comunicarse con tus APIs en el exterior, es la única parte de tu aplicación que debería hacer esto

* **Model:** Es la capa encargada de almacenar datos. Cuando recibimos información de una base de datos o un servicio, esta se almacenará aquí.

Adicional a esto usamos la meta arquitectura CLEAN, que nos ayuda a organizar el código un poco mejor.

* **Framework:** Es donde se incluyen las capas relacionadas a la interfaz..

* **Domain:** Los Requirements originalmente no son parte de MVVM, pero se incluyeron ahí para familiarizarte al flujo de información en la arquitectura. Esta es la capa que los contiene y está dedicada exclusivamente a ellos.

* **Data:** Como el nombre lo indica, esta es la capa que maneja todos los datos de la aplicación. Contiene los modelos de datos y los repositories responsables de la comunicación con el exterior.

Si realizaste los laboratorios sugeridos, te habrás dado cuenta de que hay más de ellos. Te recomendamos por completo realizarlos para que tengas un buen entendimiento de cómo construir una historia de usuario en flutter. En los siguientes laboratorios se cubren pasos que van desde la conexión con APIs, hasta la implementación de navegación dentro de la app, a través de la construcción de una Pokedex como se hizo el semestre anterior. [Puedes encontrar el link aquí](https://meeplab2015.github.io/tc3004b-agodic24-101/docs/labs/mobile/flutter/tutorials/intro_flutter/)


---

## Backend

Para el backend de nuestra aplicación utilizamos Node.js junto con Express, y seguimos el patrón de arquitectura MVC (Modelo - Vista - Controlador). A continuación, te explicamos brevemente cada uno de estos conceptos para asegurarnos de que todos estamos en la misma página. 

* **Node.js:** Es un entorno de ejecución para JavaScript del lado del servidor. Nos permite crear aplicaciones rápidas y escalables con JavaScript.

* **Express:** Es un framework minimalista y flexible para Node.js. Nos ayuda a definir rutas, manejar peticiones HTTP, middleware y organizar nuestro código de forma eficiente.

## Patrón de Arquitectura

* **Modelo (Model):** Aquí definimos la estructura de los datos, utilizamos consultas SQL a MariaDB. 

* **Vista (View):** En nuestro caso, como estamos construyendo una API, esta parte se omite o se reduce a las respuestas JSON que se envían al cliente. No usamos HTML o plantillas del lado del servidor.

* **Controlador (Controller):** Contiene la lógica principal de cada funcionalidad. Los controladores reciben las peticiones del cliente, interactúan con los modelos y devuelven una respuesta adecuada.

### Pruebas Unitarias

Con el fin de verificar que cada parte del código funciona como se espera, realizamos pruebas unitarias utilizando el framework Jest y definimos que se debe tener un 80% de cobertura de código.

Si no estás familiarizado con Jest, no te preocupes, contamos con un [documento de apoyo](https://docs.google.com/document/d/1808QLRqBniT8i_6Jt113K7b38NHDM5bDEzDPTVA3_Ok/edit?tab=t.0#heading=h.2gfkk8xjjpat) para apoyarte a entender lo que debes hacer.

---

Esperamos que esta guía te sea de mucha utilidad para tu tiempo en nuestro equipo. No dudes preguntarle a cualquiera de nuestros miembros si te llega a surgir alguna duda. ¡Bienvenido al equipo Tech-nebrios! 🪱

# Historial de cambios
| **Tipo de Versión** | **Descripción**                                             | **Fecha** | **Colaborador**            |
| ------------------- | ----------------------------------------------------------- | --------- | -------------------------- |
| **1.0**             |   Guía de codificación rápida     | 8/05/2025 | Miguel Angel Uribe y Emiliano Valdivia  |