---
title: Estrategia tecnica
---

**Última actualización por:** Hiram Mendoza , 24 de abril de 2025

---

# Estrategia técnica

## Objetivo

Establecer lineamientos claros para el desarrollo, asegurando calidad y consistencia.

---

## Repositorios

Utilizaremos 2 repositorios separados, tanto para el backend como para el frontend de la aplicación, de esta manera nuestro sistema puede ser modular.

## Estrategia de Ramas

![alt text](/img/manejo-de-ramas-textiles.png)

Utilizaremos 3 ramas principales:

- **Main**: Contiene el código que será desplegado en producción y sobre el que se maneja el versionamiento de la aplicación.
  - El código no debe tener problemas de integración o ejecución.
  - El código debe haber sido probado.
- **Staging**: Rama pre-productiva usada para preparar el release de las versiones y realizar pruebas de aceptación.
- **Develop**: Rama de desarrollo donde se mantiene la integración de todos los desarrollos del equipo.
- **Feature**: Ramas temporales destinadas para el código de uno o varios developers que trabajan en una característica.

## Estrategia de commits

Se utilizaran los llamados **"conventional commits"**.

Se puede encontrar la informacion de como crear los conventionals commits en este [link](https://www.conventionalcommits.org/en/v1.0.0/)

---

## Gestión de Requerimientos

### Objetivo

Alinear las decisiones técnicas con los objetivos de negocio.

### Priorización basada en valor y riesgos

La priorización de requerimientos se puede encontrar aquí:

[_Priorizacion de requisitos_](https://docs.google.com/spreadsheets/d/1ToxcYLMjoZ0dPXlb2eTesLf_YXg8q86tE7bredXapYk/edit?gid=1686427669#gid=1686427669)

---

## Gestión de Calidad y Pruebas

### Objetivo

Garantizar un software confiable a través de buenas prácticas de aseguramiento de calidad.

---

### Estrategia de Pruebas

Seguiremos una estrategia de pruebas detallada en el documento llamado [*STP*](Agregar link al stp de textiles)

---

## Documentación del código

### Objetivo

Documentar claramente las funcionalidades y código del sistema para lectura en caso de confusiones.

- Se agregaran espacios alrededor de operadores y comas.
- Se agregan punto y coma al final de definiciones simples.
- Para documentar el código utilizaremos el estándar de documentación JS docs.
- Para ver mas informacion de el estandar de codificacion ver el documento: [_Estandar de codificación_](/docs/standards/general).
- Para la documentacion de los endpoints, usaremos SwaggerUI. Se puede encontrar un manual de su uso [*aqui*](Agregar el link al manual de swagger).

---

## Patrones de diseño y diagrama de paquetes

### Backend

![alt text](/img/diagrama-paquetes-textiles.png)

Este diagrama de paquetes representa la organización de un backend. Se divide en varias secciones principales:

### 1. Módulos

Cada módulo contiene:

- **Data**: Manejo de los datos estructurados en:
  - `Repositorios` Gestión de la base de datos.
  - `Modelos` Creacion de los modelos de datos.
- **Controladores**: Manejo de solicitudes HTTP, estructurado en:
  - `IndexControladores`: Archivo que contiene todos los controladores del modulo
  - `Controladores`: Implementación de la lógica de negocio de una sola funcionalidad.
- **Rutas**: Manejo de las rutas estructuradas en:
  - `IndiceRutas`: Punto de entrada de las rutas de todo el modulo.
  - `Rutas`: Definición de rutas de cada funcionalidad.

### 2. Util

- **Middlewares**: Funciones intermedias para procesar solicitudes.
- **Servicios**: Lógica reutilizable independiente de los controladores.

### 3. Views

Sección opcional para manejar vistas en caso de ser necesario.

### 4. Pruebas Unitarias

Cada módulo puede incluir pruebas unitarias para garantizar su correcto funcionamiento.

### 5. Archivos Principales

- app.js: Punto de entrada del servidor.
- node_modules: Dependencias del proyecto.

### Frontend

![alt text](DiagramaPaquetesFront.png)

Este diagrama de paquetes representa la organización de un frontend. Se divide en varias secciones principales:

### 1. estilos

Contiene los archivos de estilos globales del proyecto.

### 2. hooks

Incluye hooks personalizados de React que encapsulan lógica para ser utilizada en distintos componentes de la aplicación.

### 3. Rutas

Contiene la configuración de rutas del proyecto, para definir la navegación entre páginas y componentes.

### 4. Utilidades

Incluye utilidades generales que no pertenecen a una parte específica del dominio o la interfaz, como validaciones, constantes, etc.

- **Constantes**: Conjunto de componentes organizados por nivel de complejidad:

### 5. Vistas

La carpeta de vistas contiene:

- **Componentes**: Conjunto de componentes organizados por nivel de complejidad:

  - `Atomos` : Componentes más pequeños e indivisibles como botones, iconos, etiquetas.
  - `Moleculas` : Combinación de átomos que forman unidades funcionales simples, como formularios, inputs con etiqueta, etc.
  - `Organismos` : Combinaciones de moléculas y/o átomos que conforman secciones completas reutilizables, como encabezados o tarjetas de usuario.

- **Paginas**: Vistas completas que representan pantallas enteras del sistema, construidas a partir de los organismos y otros componentes.

### 6. dominio

El dominio contiene:

- **modelos**: Definiciones de los modelos de datos utilizados en el frontend, como clases o interfaces que representan la estructura de la información.

- **repositorios**: Encapsulan la lógica de acceso a datos, conectándose con APIs u otras fuentes para obtener o enviar información.

- **servicios**: Contienen funciones que implementan la lógica de negocio relacionada con el dominio, trabajando con los repositorios y modelos para realizar operaciones más complejas como la obtención de permisos.

---

# Plantilla PR FrontEnd TEXT & LINES

---

# Descripción

## <!--- Agrega una descripción del cambio en una línea y si se necesita instalar una nueva dependencia-->

---

## Tipo de cambio

- [ ] Corrección de error (cambio no disruptivo que soluciona un problema)
- [ ] Nueva función (cambio no disruptivo que agrega funcionalidad)
- [ ] Cambio disruptivo (corrección o función que afecta la compatibilidad existente)
- [ ] Este cambio requiere una actualización en la documentación
- [ ] Cambio mínimo (visual o de bajo impacto, sin afectar lógica)

---

## Nueva funcionalidad (si aplica)

- [ ] Repositorio
- [ ] Modelo
- [ ] Hook
- [ ] Rutas y Rutas Individuales
- [ ] Pagina

Si creaste algo más, ponlo aquí:

- Ejemplo.jsx

---

## ¿Cómo se ha probado?

- [ ] Se utilizó lint para errores
- [ ] Pasaron las pruebas unitarias (si aplica)
- [ ] Se probó la funcionalidad y no mostró errores
- [ ] Visualemente cumple con estándares definidos en el Figma

---

### Cambios menores

- [ ] Este PR realiza un cambio mínimo que no afecta la lógica del sistema
- [ ] Se validó visualmente el componente afectado
- [ ] No se realizaron pruebas unitarias porque no aplica

---

## Checklist del evaluador:

- [ ] He determinado que el autor cumplió con todos los puntos mencionados
- [ ] He determinado que los cambios no tienen un impacto negativo en la aplicación
- [ ] He notificado al autor del PR en caso de dudas o ajustes necesarios
- [ ] Una vez que acepte el PR, eliminaré la rama

---

```

```

# Plantilla PR BackEnd TEXT & LINES

---

## Descripción

<!-- Agrega una descripción breve del cambio y, si aplica, si se necesita instalar una nueva dependencia. -->

---

## Tipo de cambio

- [ ] Corrección de error (cambio no disruptivo que soluciona un problema)
- [ ] Nueva funcionalidad (cambio no disruptivo que agrega funcionalidad)
- [ ] Cambio disruptivo (corrección o función que afecta la compatibilidad existente)
- [ ] Este cambio requiere actualización en la documentación
- [ ] Cambio mínimo (cambio estructural o visual sin impacto en la lógica principal)

---

## Nueva funcionalidad (si aplica)

- [ ] Controlador
- [ ] Ruta
- [ ] Repositorio
- [ ] Consulta
- [ ] Mensaje
- [ ] Middleware
- [ ] Servicio

Si agregaste otro archivo relevante, indícalo aquí:

- `ejemploArchivo.js`

---

## ¿Cómo se ha probado?

- [ ] Se probaron manualmente los endpoints con Postman
- [ ] Pasaron las pruebas unitarias (si aplica)
- [ ] Se probaron integraciones con otros módulos
- [ ] No se mostraron errores en consola ni logs
- [ ] Validado en base de datos que el comportamiento es correcto

---

### Cambios menores

- [ ] Este PR realiza un cambio mínimo que no afecta la lógica del sistema
- [ ] Se validó manualmente que el cambio no afecta funcionalidades existentes
- [ ] No se realizaron pruebas automatizadas porque no aplica

---

## Checklist del evaluador:

- [ ] He determinado que el autor cumplió con todos los puntos mencionados
- [ ] He determinado que los cambios no tienen un impacto negativo en la aplicación
- [ ] He notificado al autor del PR en caso de dudas o ajustes necesarios
- [ ] Una vez que acepte el PR, eliminaré la rama correspondiente

````

## CI / CD

### CD

Para el despliegue continuo del backend utilizaremos un script de github actions para hacer pull automaticamente y desplegar las ramas de produccion (main) y pruebas (staging), por lo que no tendremos que manejar estas acciones manualmente.

```yaml
name: Node.js CI/CD

on:
  push:
    branches:
      - main
      - staging

jobs:
  deploy-production:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-22.04
    steps:
      - name: Setup SSH
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
          SERVER_IP: ${{ secrets.SERVER_IP }}
        run: |
          mkdir -p ~/.ssh
          echo "$DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H $SERVER_IP >> ~/.ssh/known_hosts
          ssh-keyscan -H github.com >> ~/.ssh/known_hosts

      - name: Deploy to Production
        env:
          SERVER_IP: ${{ secrets.SERVER_IP }}
          PROJECT_PATH: ${{ secrets.PROJECT_PATH_PRODUCTION }}
          GIT_REPO: ${{ secrets.GIT_REPO }}
          PM2_PROCESS: ${{ secrets.PM2_PROCESS_PRODUCTION }}
        run: |
          ssh -i ~/.ssh/id_rsa -o StrictHostKeyChecking=no ubuntu@$SERVER_IP "
            cd $PROJECT_PATH &&
            git checkout main &&
            git pull origin main &&
            npm install &&
            pm2 reload ecosystem-production.config.js --only $PM2_PROCESS
          "

  deploy-staging:
    if: github.ref == 'refs/heads/staging'
    runs-on: ubuntu-22.04
    steps:
      - name: Setup SSH
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
          SERVER_IP: ${{ secrets.SERVER_IP }}
        run: |
          mkdir -p ~/.ssh
          echo "$DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H $SERVER_IP >> ~/.ssh/known_hosts
          ssh-keyscan -H github.com >> ~/.ssh/known_hosts

      - name: Deploy to Staging
        env:
          SERVER_IP: ${{ secrets.SERVER_IP }}
          PROJECT_PATH: ${{ secrets.PROJECT_PATH_STAGING }}
          GIT_REPO: ${{ secrets.GIT_REPO }}
          PM2_PROCESS: ${{ secrets.PM2_PROCESS_STAGING }}
        run: |
          ssh -i ~/.ssh/id_rsa -o StrictHostKeyChecking=no ubuntu@$SERVER_IP "
            cd $PROJECT_PATH &&
            git checkout staging &&
            git pull origin staging &&
            npm install &&
            pm2 reload ecosystem-staging.config.js --only $PM2_PROCESS
          "
````

# Historial de cambios

| **Tipo de Versión** | **Descripción**                                         | **Fecha**  | **Colaborador**                                |
| ------------------- | ------------------------------------------------------- | ---------- | ---------------------------------------------- |
| **1.0**             | Creacion de la estrategia tecnica textiles              | 6/03/2025  | Diego Alfaro, Daniel Contreras, Emiliano Gomez |
| **1.1**             | Documentación de la estructura de frontend              | 01/05/2025 | Angélica Ríos                                  |
| **1.2**             | Modificaciones de plantilla de pull request del backend | 19/05/2025 | Arturo Sánchez                                 |
| **1.3**             | Mejoras en la plantilla de Frontend                     | 19/05/2025 | Rodrigo Antonio                                |
