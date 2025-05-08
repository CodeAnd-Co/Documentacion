---
title: Guía de Documentación en Docusaurus
sidebar_position: 2
---

# Guía de Documentación en Docusaurus

---

## Crear una Nueva Rama

:::tip Revisa las Guías

1. [Guía de Estrategia de Ramas](/docs/guias/github/git-branches/)

2. [Guía de Buenas Prácticas para Commits](/docs/guias/github/git-commits/)

3. [Guía de Solicitudes de Extracción](/docs/guias/github/git-pull/)

:::

1. **Abrir la Terminal**: Accede a la terminal o línea de comandos en tu sistema.

2. **Navegar al Directorio del Proyecto**: Utiliza el comando `cd` para dirigirte al directorio raíz de tu proyecto Docusaurus.

3. **Crear y Cambiar a la Nueva Rama**: Ejecuta el siguiente comando para crear una nueva rama y cambiar a ella simultáneamente:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

   Reemplaza `nombre-de-tu-rama` con un nombre descriptivo para la nueva rama.

4. **Verificar la Rama Activa**: Confirma que estás en la rama correcta con:

   ```bash
   git branch
   ```

   La rama activa estará precedida por un asterisco (\*).

## Crear un Nuevo Documento

1. **Ubicación del Archivo**: Guarda tus documentos en la carpeta `docs` de tu proyecto Docusaurus.

2. **Nombre del Archivo**: Asigna un nombre descriptivo al archivo con la extensión `.md` o `.mdx` (por ejemplo, `mi-documento.md`).

3. **Contenido del Archivo**: Inicia el archivo con un encabezado de metadatos (front matter) para definir propiedades como el título y la posición en la barra lateral.

   ```markdown
   ---
   title: Título de Mi Documento
   sidebar_position: 1
   ---

   # Título de Mi Documento

   **Última actualización:** día de mes de año

   Contenido de mi documento.
   ```

   - `title`: Título que aparecerá en la interfaz.
   - `sidebar_position`: Posición del documento en la barra lateral.

## Actualizar un Documento Existente

1. **Editar el Archivo**: Localiza el archivo correspondiente en la carpeta `docs` y ábrelo con tu editor de texto preferido.

2. **Modificar Contenido**: Realiza los cambios necesarios en el contenido o en los metadatos del documento.

3. **Actualizar la Fecha de Modificación**: Actualiza la fecha de modificación del documento.

   ```markdown
   # Título de Mi Documento

   **Última actualización:** [Fecha de Actualización del Documento](día de mes de año)
   ```

4. **Guardar Cambios**: Guarda el archivo después de realizar las modificaciones.

## Ejecutar el Servidor de Desarrollo

Para visualizar los cambios en tiempo real:

1. **Iniciar el Servidor**: Abre una terminal y navega hasta el directorio raíz de tu proyecto Docusaurus. Ejecuta el siguiente comando:

   ```bash
   npm start
   ```

2. **Acceder al Sitio**: Esto iniciará el servidor de desarrollo y podrás ver tus cambios en `http://localhost:3000/`.

## Confirmar Cambios

Después de realizar los cambios en el proyecto, es fundamental confirmar los cambios mediante un commit y, posteriormente, crear un pull request para que otro miembro del equipo pueda revisar y aceptar tus modificaciones.

1. **Agregar Archivos al Staging**: Añade los archivos modificados al área de preparación con:

   ```bash
   git add .
   ```

2. **Realizar un Commit**: Confirma los cambios con un mensaje descriptivo:

   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```

3. **Subir la Rama al Repositorio Remoto**: Envía la nueva rama al repositorio remoto:

   ```bash
   git push origin nombre-de-tu-rama
   ```

4. **Crear un Pull Request**: Accede a la plataforma de gestión de código (como GitHub) y crea un pull request desde tu rama hacia la rama principal del proyecto.

Siguiendo estos pasos y consultando las guías mencionadas, asegurarás una colaboración eficiente y una gestión clara de las modificaciones en el proyecto.

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------- | --------- | --------------- |
| **1.0** | Creación de la guía   | 16/02/2025 | Ángel Ramirez |
| **1.1** | Gestión de configuración   | 24/04/2025 | Diego Fuentes |