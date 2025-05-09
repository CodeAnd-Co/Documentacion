---
title: Guía de uso de Swagger UI
sidebar_position: 3
---

# Manual de uso de Swagger UI para documentar APIs

Este documento explica cómo configurar Swagger UI en un proyecto Node.js con Express para documentar tus endpoints de manera clara y accesible desde un navegador.

---

## Requisitos previos

Asegúrate de tener instalados los siguientes paquetes:

```bash
npm install express swagger-jsdoc swagger-ui-express
```

## Configuración básica de swagger

En tu archivo principal (por ejemplo index.js), agrega lo siguiente para configurar Swagger:

```javascript
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de ejemplo",
      version: "1.0.0",
      description: "Documentación generada con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["login/login.routes.js"], // Cambia esto según tus rutas
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
```

## Ejemplo de documentación para un endpoint
En tu archivo de rutas (por ejemplo, login.routes.js), puedes usar el siguiente formato para documentar un endpoint:

```javascript
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna una lista de usuarios en formato JSON.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 */
router.get("/users/:id", async (req, res) => {
  return res.json({ message: "Si funciona" });
});
```

Este bloque de comentario permite que Swagger genere automáticamente una entrada en la documentación para ese endpoint.

## Acceder a Swagger UI

Una vez que el servidor esté corriendo, puedes acceder a la documentación generada visitando:

```bash
http://localhost:3000/api-docs
```

## Buenas prácticas

- Mantén tus comentarios Swagger cerca del endpoint que documentan.

- Especifica claramente los parámetros, tipos y ejemplos para facilitar el uso.

- Usa tags para agrupar endpoints relacionados si tu API crece.

## Historial de cambios

| **Tipo de versión** | **Descripción**                               | **Fecha** | **Colaborador**                 |
| ------------------- | --------------------------------------------- | --------- | ------------------------------- |
| **1.0**             | Creacion del manual de uso de swagger UI.      | 06/04/2025 | Daniel Contreras |
| **1.1**             |  Gestión de configuración.  | 24/04/2025 | Diego Fuentes |