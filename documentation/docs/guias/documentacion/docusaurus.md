---
title: Guía de documentación en Docusaurus
sidebar_position: 2
---

# Guía de documentación en Docusaurus

---

## Crear una nueva rama

:::tip Revisa las Guías

1. [Guía de estrategia de ramas](/docs/guias/github/git-branches/)

2. [Guía de buenas prácticas para commits](/docs/guias/github/git-commits/)

3. [Guía de solicitudes de extracción](/docs/guias/github/git-pull/)

:::

1. **Abrir la terminal**: Accede a la terminal o línea de comandos en tu sistema.

2. **Navegar al directorio del proyecto**: Utiliza el comando `cd` para dirigirte al directorio raíz de tu proyecto Docusaurus.

3. **Crear y cambiar a la nueva rama**: Ejecuta el siguiente comando para crear una nueva rama y cambiar a ella simultáneamente:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

   Reemplaza `nombre-de-tu-rama` con un nombre descriptivo para la nueva rama.

4. **Verificar la rama activa**: Confirma que estás en la rama correcta con:

   ```bash
   git branch
   ```

   La rama activa estará precedida por un asterisco (\*).

## Crear un nuevo documento

1. **Ubicación del archivo**: Guarda tus documentos en la carpeta `docs` de tu proyecto Docusaurus.

2. **Nombre del archivo**: Asigna un nombre descriptivo al archivo con la extensión `.md` o `.mdx` (por ejemplo, `mi-documento.md`).

3. **Contenido del archivo**: Inicia el archivo con un encabezado de metadatos (front matter) para definir propiedades como el título y la posición en la barra lateral.

   ```markdown
   ---
   title: Título de mi documento
   sidebar_position: 1
   ---

   # Título de mi documento

   **Última actualización:** día de mes de año

   Contenido de mi documento.
   ```

   - `title`: Título que aparecerá en la interfaz.
   - `sidebar_position`: Posición del documento en la barra lateral.

## Actualizar un documento existente

1. **Editar el archivo**: Localiza el archivo correspondiente en la carpeta `docs` y ábrelo con tu editor de texto preferido.

2. **Modificar contenido**: Realiza los cambios necesarios en el contenido o en los metadatos del documento.

3. **Actualizar la fecha de modificación**: Actualiza la fecha de modificación del documento.

   ```markdown
   # Título de mi documento

   **Última actualización:** [Fecha de Actualización del Documento](día de mes de año)
   ```

4. **Guardar cambios**: Guarda el archivo después de realizar las modificaciones.

## Ejecutar el servidor de desarrollo

Para visualizar los cambios en tiempo real:

1. **Iniciar el servidor**: Abre una terminal y navega hasta el directorio raíz de tu proyecto Docusaurus. Ejecuta el siguiente comando:

   ```bash
   npm start
   ```

2. **Acceder al sitio**: Esto iniciará el servidor de desarrollo y podrás ver tus cambios en `http://localhost:3000/`.

## Confirmar cambios

Después de realizar los cambios en el proyecto, es fundamental confirmar los cambios mediante un commit y, posteriormente, crear un pull request para que otro miembro del equipo pueda revisar y aceptar tus modificaciones.

1. **Agregar archivos al staging**: Añade los archivos modificados al área de preparación con:

   ```bash
   git add .
   ```

2. **Realizar un commit**: Confirma los cambios con un mensaje descriptivo:

   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```

3. **Subir la rama al repositorio remoto**: Envía la nueva rama al repositorio remoto:

   ```bash
   git push origin nombre-de-tu-rama
   ```

4. **Crear un pull request**: Accede a la plataforma de gestión de código (como GitHub) y crea un pull request desde tu rama hacia la rama principal del proyecto.

Siguiendo estos pasos y consultando las guías mencionadas, asegurarás una colaboración eficiente y una gestión clara de las modificaciones en el proyecto.

---

## Historial de cambios

| **Tipo de versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------- | --------- | --------------- |
| **1.0** | Creación de la guía.   | 16/02/2025 | Ángel Ramirez |
| **1.1** | Gestión de configuración.   | 24/04/2025 | Diego Fuentes |