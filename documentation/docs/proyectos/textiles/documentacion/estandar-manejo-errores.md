---
title: Estandar de manejo de errores
---

# Estandar de manejo de errores

---
### Objetivo

El objetivo de este estandar es poder tener coherencia a la hora de crear el codigo y enviar alertas de retroalimentacion al usuario

---

## Artefactos en los que aplica

* Codigo de las historias de usuario de textiles:
  * Backend
  * Frontend

## Convenciones generales

* La mayoria de los errores se deberan manejar desde el backend en lugar desde el frontend directamente.
* Los errores de validaciones pueden ser utilizados en el frontend para mostrar al usuario retroalimentación específica.
* Los errores se manejarán desde el repositorio del backend.

## Ejemplo frontend


### Incorrecto ❌

 Repositorio
```js
export class RepositorioEjemplo {
    static async crearEjemplo (parametros) {
        try{
            const respuesta = await axios.post(RUTAS_API.RUTA.EJEMPLO, {parametros})
            
            return respuesta.data
        }catch{
            //El error no se esta manejando desde el backend
            // Se esta manejando de manera en que el error siempre sera el mismo
            return "Error al crear el ejemplo"
        }
    }
}
```

Hook
```js
const useCrearEjemplo = () => {
    const crearEjemplo = async (parametros) => {
        try{
            const respuesta = await RepositorioCrearEjemplo.crearEjemplo(parametros)
            
            const mensaje = respuesta.mensaje
            return mensaje
        }catch {
            // El error esta siendo seteado de manera incorrecta
            // Siempre sera el mismo error
            // Si hay un error inesperado o un error critico no se podra dar feedback
            const mensaje = "Error al crear ejemplo"
            return mensaje
        }
    }
}
```

---

### Correcto ✅

Repositorio
```js
export class RepositorioEjemplo {
    static async crearEjemplo (parametros) {
        try{
            const respuesta = await axios.post(RUTAS_API.RUTA.EJEMPLO, {parametros})
            
            return respuesta.data
        }catch (error){
            // El error esta siendo correctamente manejado en el frontend
            // En el backend tendremos que considerar todos los casos posibles que daran diferentes errores
            throw new Error(error.response.data.mensaje)
        }
    }
}
```

Hook
```js
const useCrearEjemplo = () => {
    const crearEjemplo = async (parametros) => {
        try{
            const respuesta = await RepositorioCrearEjemplo.crearEjemplo(parametros)
            
            return respuesta.mensaje
        }catch (error) {
            // Utilizamos directamente el error de la respuesta del api
            // Esto hace que tengamos que manejar todos los casos alternos posibles directamente desde el backend
            return error.message
        }
    }
}
```

--- 

## Ejemplo backend

### Incorrecto ❌

Controlador

```js
exports.crearEjemplo = async (req,res) => {
    const parametros = req.body.parametros
    
    if(!parametros) {
        return res.status(400).json{mensaje: "No se enviaron los parametros"}
    }
    
    if(!parametros.parametro1) {
        return res.status(401).json{mensaje: "No se enviaron los parametros"}
    }

    if(!parametros.parametro2) {
        return res.status(404).json{mensaje: "No se enviaron los parametros"}
    }
    
    try{
        await repositorio.crearEjemplo(parametros)
        
        return res.status(200).json({mensaje: Exito creando el ejemplo})
    }catch{
        return res.status(500).json({mensaje: Error creando ejemplo})
    }
}
```

Repositorio

```js
exports.crearEjemplo = async (parametros) => {
    try{
        await correrQuery(QUERY, [parametros])
    }catch {
        return "Error creando ejemplo"
    }
}
```

### Errores:

- Se esta haciendo el manejo de datos no criticos en el controlador
    - El controlador solo funciona como puente para recibir la peticion y enviar una respuesta

- Se estan enviando codigos incorrectos de HTTP para los errores ej. el error status 500 significa que el servidor tiene un error.
    - El estatus 500, aunque puede significar un error en el servidor, este se refiere a un error del que el server no puede dar mas informacion, ya sea un bug o algo parecido
    - Si queremos dar a entender que hubo un error debido a logica de negocio, como que el usuario ya exista, o que el nombre ya exista, es mejor enviar errores `4xx`

- En el repositorio no se estan haciendo validaciones, solo se esta llamando a la base de datos, lo que puede hacer que en historias mas grandes que tengan muchos datos no se hagan buenas validaciones.

## Como saber que estatus HTTP usar?

Pueden dirigirse a esta página, la cual contiene todos los estados utilizando imagenes de gatitos

[HTTP CATS](https://http.cat/)

### Correcto ✅

Controlador

```js
exports.crearEjemplo = async (req,res) => {
    const parametros = req.body.parametros
    const idCliente = req.user.clienteSeleccionado
    
    // Aqui tenemos validaciones criticas, ya que si no seleccionamos cliente no deberiamos hacer nada mas
    // Si los parametros no fueron enviados solo estaremos esperando errores mas adelante, es mejor retornarlo lo mas rapido posible
    if(!idCliente) {
        return res.status(400).json({mensaje: "Cliente no seleccionado"})
    }
    if(!parametros) {
        return res.status(400).json({mensaje: "Parametros no fueron enviados"})
    }
    
    try{
        await repositorio.crearEjemplo(parametros, idCliente)
        
        return res.status(200).json({mensaje: "Se creo el ejemplo exitosamente"})
    }catch (error){
        // A pesar de que el estandar departamental es español, .message es una propiedad reservada de los errores
        return res.status(400).json({mensaje: error.message})
    }
}
```

Repositorio

```js
exports.crearEjemplo = async (parametros, idCliente) => {
    
    if(parametros.parametro1 >= 0){
        throw new Error("El parametro 1 debe ser 0")
    }
    
    if(!parametros.parametro2 || typeof parametros.parametro2 !== "Number" ) {
        throw new Error("El parametro 2 es obligatorio y tiene que ser numerico")
    }
    
    try {
        const respuesta = await correrQuery(QUERY,[parametros, idCliente])
        
        if(respuesta.insertId !== 0){
            throw new Error("No se creo el ejemplo")
        }
        
        return
    }catch (error){
        throw new Error(error.message)
    }
}
```

### Que se hizo bien?

- Se estan manejando 2 diferentes errores de reglas de negocio en el repositorio
- Se estan manejando 1 error en el que se especifica que no se creo el ejemplo, este puede ser inesperado o otro tipo de error, eso depende de lo que se identifico en el analisis
- Por ultimo, se maneja el error en caso de que haya habido algun error al correr la query, este es el ultimo error posible, y el que esperamos que no se retorne ya que ya se deberian haber hecho las validaciones necesarias

- El controlador enviara 4 diferentes mensajes de error en diferentes casos, en lugar de 1 solo error no descriptivo

---

## Que conseguimos con esto

Es mas limpio, mas ordenado, y mas facil de leer los errores que estamos obteniendo si se envian desde el backend, tambien hace que nuestro codigo en el frontend no tenga tantas validaciones, y nos podamos concentrar en la logica de reenderizacion y manejo de datos.

---

Historial de versiones


| **Tipo de Versión** | **Descripción** | **Fecha** | **Colaborador** |
| ------------------- | --------------| ---------- | --------------- |
| **1.0** | Crear el estandar de manejo de errores | 4/06/2025 | Diego Alfaro |
