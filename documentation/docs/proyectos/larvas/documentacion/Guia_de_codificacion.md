---
title: Guía de codificación rápida
sidebar_position: 8
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



---

# Historial de cambios
| **Tipo de Versión** | **Descripción**                                             | **Fecha** | **Colaborador**            |
| ------------------- | ----------------------------------------------------------- | --------- | -------------------------- |
| **1.0**             |   Guía de codificación rápida     | 8/05/2025 | Miguel Angel Uribe y Emiliano Valdivia  |