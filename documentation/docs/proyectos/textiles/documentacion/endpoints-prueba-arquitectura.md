---
title: Endpoints de prueba de arquitectura
---

# Endpoints usados para la prueba de arquitectura

La documentacion tambien se puede encontrar de manera mas visual [aqui](https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/api-docs)

```
### Subir a S3
POST https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/s3/upload
x-api-key: apikey
Content-Type: multipart/form-data

### Registrar un usuario
POST https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/api/register
x-api-key: apikey
Content-Type: application/json

{
    "email": "hola@hotmail.com",
    "password": "hhhhhh",
    "name": "jjjjjj"
}

### Ruta por default
GET https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/
x-api-key: apikey

### Login de usuario
POST https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/api/login
x-api-key: apikey
Content-Type: application/json

{
    "email": "hola@hotmail.com",
    "password": "hhhhhh",
    "name": "jjjjjj"
}

### Autorización del token
GET https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/api/auth/me
x-api-key: apikey
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvbGFAaG90bWFpbC5jb20iLCJpYXQiOjE3NDMxODYyMDEsImV4cCI6MTc0MzE4OTgwMX0.LMGgMGnawskqMC773TwnnoAuppLKbg54YQoj3p3gVbI

### Obtener imagen de S3
GET https://nr8nw243lb.execute-api.us-east-1.amazonaws.com/s3/images/1740439302693-f210cf52db93505f5be2c4e5f477504e.jpg

```

## Historial de clase

| **Tipo de Versión** | **Descripción**                                                   | **Fecha** | **Colaborador** |
| ------------------- | ----------------------------------------------------------------- | --------- | --------------- |
| **1.0**             | Se creo un archivo con los endpoints de la prueba de arquitectura | 4/3/2025  | Diego Alfaro    |
