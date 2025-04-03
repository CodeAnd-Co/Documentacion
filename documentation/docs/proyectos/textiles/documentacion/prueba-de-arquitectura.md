---
title: Manual de prueba de arquitectura
sidebar_position: 3
---

# Manual paso a paso de prueba de arquitectura

## Creacion de proyectos del frontend y backend

### Prerequisitos

Antes de comenzar, hay que instalar la version de node especificadas en el manual de arquitectura

#### Creacion del proyecto

Abrir la terminar y moverse al directorio donde se desea crear la aplicacion, una vez ahi, ejecutar el comando

```
npm create vite@latest <nombre-del-proyecto>
```

Seguir los pasos que aparacen una vez se corre el comando

Moverse al directorio que se creo

```
cd <nombre-del-proyecto>
```

Ahora hay que instalar las dependencias

```
npm install
```

Una vez se instalaron las dependencias, ya podemos correr el servidor de manera local

```
npm run dev
```

Ahora ya tienes una aplicacion de react corriendo en tu servidor local

### Backend

Primero hay que movernos hacia el directorio donde queramos iniciar nuestro proyecto

Una vez en el directorio, hay que correr el comando

```
npm init
```

Y seguir los pasos que apareceran en la terminal

Una vez se termine, se generara el archivo **package.json**

Despues de esto, hay que instalarr la libreria de express, el cual es el framework que se usara para la creacion de nuestra api

```
npm install express
```

Una vez instalado express, pasamos a crear nuestro archivo app.js, y agregarle el codigo inicial para crear una aplicacion basica

```js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hola, mundo desde Express!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

Para ejecutar nuestra aplicacion, debemos correr el comando

```
node app.js
```

Una vez creados nuestros proyectos, podemos empezar a programar nuestra aplicacion

:::warning Aviso  
Es importante leer el archivo de [Estrategia tecnica](/docs/proyectos/textiles/documentacion/estrategia-tecnica-textiles) para conocer la forma en la que se desarrollara el proyecto, y otros aspectos como el diagrama de paquetes y el manejo de ramas
:::

## Creacion del Backend del proyecto

:::tip Aviso

En este apartado se mostrara como se crearon los endpoints, de ser necesarios mas detalles revisar el documento [Endpoints prueba de arquitectura](/docs/proyectos/textiles/documentacion/estrategia-tecnica-textiles) o el repositorios del [backend](https://github.com/DiegoAlfaro1/prueba-arquitectura-backend-textiles)
:::

Para empezar a crear los endpoints, empezaremos a crear la seguridad para estos mismo, por lo que empezaremos por los middlewares de autenticacion y revision de api key

### Funcion para autentacion del token JWT

Primero tenemos que instalar las dependencias necesarias

```
npm install jsonwebtoken cookie-parser dotenv
```

Ahora tenemos que configurar la libreria de `cookie-parser` en el archivo `app.js`

```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

Ahora creamos el archivo del middleware en la carpeta `middlewares` donde crearemos nuestra funcion usando este codigo

```js
/**
 * Middleware para autorizar un usuario utilizando un token JWT almacenado en las cookies.
 *
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {Function} next - Función para pasar al siguiente middleware.
 * @returns {void} - Devuelve una respuesta JSON en caso de error o llama a `next()` si el token es válido.
 */
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.cookies.token; // Obtener el token de las cookies

  console.log(req.cookies);
  console.log(token);

  if (!token) {
    return res.status(403).json({ message: "Acceso denegado" });
  }

  try {
    // Verificar el token JWT
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Agregar información del usuario verificado a la solicitud
    console.log("Verificado");
    next();
  } catch (err) {
    console.log("No Verificado");
    res.status(401).json({ message: "Token inválido", error: err });
  }
};
```

Este codigo lo que hara, es revisar el token guardado en las cookies, y revisarlo usando las funciones que nos proporciona JWT, lo que nos revisara la validez del token

Una vez creado, podemos utilizar este middleware para proteger las rutas a las que no deberia acceder un usuario no autenticado

```js
router.get("/perfil", autorizarToken, (req, res) => {
  res.json({ message: "Bienvenido a tu perfil", usuario: req.user });
});
```

De esta manera, cuando se haga una llamada a esa ruta, antes de hacer la logica de la funcion, se llamara a la fucion y si falla no dejara que se complete la llamada

:::warning Aviso
Esta funcion solo se uso para la prueba de arquitectura, ya que es necesario checar los roles y permisos que tiene los usuarios

Tambien se explicara mas adelante como se genera el token que se busca validar
:::

Tambien tenemos que configurar nuestro secreto en nuestro `.env`

```js
JWT_SECRET=una clave super secreta
```

### Funcion para autenticar el api key

Primero tenemos que crear nuestro archivo `revisarApiKey.js`

En este archivo usaremos la siguiente funcion

```js
/**
 * Middleware para verificar la existencia de un encabezado específico en la solicitud.
 *
 * @param {string} headerName - Nombre del encabezado a verificar.
 * @param {string} [errorMessage="Api key invalida"] - Mensaje de error personalizado en caso de que el encabezado no exista.
 * @returns {Function} - Middleware de Express que verifica la presencia del encabezado.
 */
module.exports = (headerName, errorMessage = "Api key invalida") => {
  return (req, res, next) => {
    const headerValue = req.get(headerName); // Obtener el valor del encabezado

    if (!headerValue) {
      return res.status(400).json({ message: errorMessage }); // Responder con error si no existe
    }

    next(); // Pasar al siguiente middleware si el encabezado existe
  };
};
```

Esta funcion revisa los `headers` de la peticion enviada, y revisara que si se haya enviado el header del api key

Al igual que con el middleware del JWT, lo usaremos en una ruta para darle una capa de proteccion mas

```js
router.get(
  "/perfil",
  autorizarToken,
  revisarHeader("x-api-key"),
  (req, res) => {
    res.json({ message: "Bienvenido a tu perfil", usuario: req.user });
  }
);
```

Esto hara que a pesar de que el token sea valido, si no se envia el api key, no se completara la peticion, lo que hara que nuestras rutas tengan mas seguridad

Una vez que tenemos nuestras 2 capas de seguridad, podemos pasar a construir los diferentes modulos de la aplicaion

:::warning Aviso
En este manual solo se hablara de las integraciones con servicios externos, si se quiere obtener mas informacion de el resto de la aplicacion, consultar el repositorio [backend](https://github.com/DiegoAlfaro1/prueba-arquitectura-backend-textiles)
:::

### Integracion con AWS DynamoDB

#### Envio de datos

Primero tenemos que instalar las librerias necesarias para utilizar DyamoDB

```
npm install @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb
```

Tambien tenemos que asegurarnos de haber creado la tabla que se usara para crear el usuario. En este caso, la tabla se llama `Users`, y tiene como llave el nombre y el correo electronico del usuario, esto es muy importante tenerlo en cuenta, ya que seran los campos obligatorios que se tienen que enviar a la base de datos

Tambien es importante haber configurado las credenciales de aws

De esta manera ahora podemos utilizar el SDK de aws

Ahora es momento de integrar nuestro primer servicio extrerno, AWS DynamoDB, el cual es una base de datos no relacional similar a MongoDB

Para esto vamos a seguir con nuestra pequeña aplicacion. Para poder integrar la subida de datos a DynamoDB, vamos a crear un servicio en nuestro backend para enviar datos.

Primero creamos un nuevo archivo en la carpeta de servicios, y utilizamos el siguiente codigo

```js
/**
 * Función para insertar un ítem en una tabla de DynamoDB.
 *
 * @param {string} nombreTabla - El nombre de la tabla de DynamoDB donde se insertará el ítem.
 * @param {Object} modelo - El objeto que representa el ítem a insertar en la tabla.
 * @returns {Promise} - Promesa que resuelve con el resultado de la operación de inserción.
 */
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const clienteDynamo = new DynamoDBClient({ region: "us-east-1" });
const db = DynamoDBDocumentClient.from(clienteDynamo);

module.exports = async (nombreTabla, modelo) => {
  const comando = new PutCommand({
    TableName: nombreTabla,
    Item: modelo,
  });

  return db.send(comando);
};
```

Esta funcion nos crea un cliente de Dynamo, y lo utiliza para enviar el `PutCommand`, que lo que hace es enviar el objeto que se le paso a la funcion hacia la tabla que tambien es parte de los parametros de la funcion.

Esta funcion nos ayudara a no tener que crear multiples bloques de codigo iguales y poder reutilizar este mismo cada que se quiera subir algo a dynamo

Una vez creada esta funcion, podemos pasara a crear nuestra ruta, la cual se encargara de recibir la peticion para crear un nuevo usuario.

La ruta se vera de esta manera

```js
router.post(
  "/register",
  checkHeader("x-api-key", "Api key invalida"),
  registerController.register
);
```

Ahora hay que crear el controlador para esta ruta

```js
exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: "Se ocupa el mail y contra" });
  }

  try {
    // Crear una nueva instancia de usuario
    const user = new User(name, email, password);

    // Hashear la contraseña antes de guardarla
    await user.hashPassword();

    // Guardar el usuario en la base de datos
    await userRepository.createUser(user);

    res.status(201).json({ message: "Registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

Este controlador sera el que maneje la logica necesaria para crear el usuario, aqui es donde entra en accion el diagrama de paquetes, como podemos ver, aun no se llama a la funcion que creamos primero, en el controlador podemos ver que se crea una clase `User`, el cual es un modelo que nos ayudara a asegurarnos que se envien los datos correctos

```js
const bcrypt = require("bcryptjs");

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
    return this;
  }
}

module.exports = User;
```

Este modelo User, tambien tiene una funcion para hashear la contraseña

Ahora que creamos el usuario y hasheamos la contraseña, tenemos que crear la funcion `createUser` en nuestro repositorio

```js
exports.createUser = async (user) => {
  return await enviarDatos("Users", user);
};
```

Como podemos ver, es una funcion muy pequeña que llama a la funcion que creamos al principio

Y de esta manera es como podemos crear nuestra ruta para crear un usuario en la base de datos

#### Recibo de datos

Para poder recibir datos de AWS, primero creamos una funcion similar a la de enviar datos, seguimos el mismo proceso, pero ahora la funcion sera un poco diferente

```js
/**
 * Función para obtener un ítem de una tabla de DynamoDB usando las llaves proporcionadas.
 *
 * @param {string} nombreTabla - El nombre de la tabla de DynamoDB de la cual se va a obtener el ítem.
 * @param {Object} llaves - Un objeto que contiene las llaves para buscar el ítem en la tabla.
 * @returns {Promise<Object|null>} - Un objeto con los datos del ítem si se encuentra, o null si no se encuentra el ítem.
 */
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const clienteDynamo = new DynamoDBClient({ region: "us-east-1" });
const db = DynamoDBDocumentClient.from(clienteDynamo);

module.exports = async (nombreTabla, llaves) => {
  const comando = new GetCommand({
    TableName: nombreTabla,
    Key: llaves,
  });
  const response = await db.send(comando);
  return response.Item;
};
```

Con esta funcion, podremos recibir datos de dynamoDB, en este caso, recibiremos la informacion de un usuario, y haremos el login al sistema

Primero vamos a crear nuestra ruta

```js
router.post(
  "/login",
  checkHeader("x-api-key", "Api key invalida"),
  loginController.login
);
```

Ahora vamos a crear el controlador

```js
/**
 * @file Controlador para la autenticación de usuarios utilizando bcrypt y JWT.
 * @module AuthController
 */

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepository = require("../Data/userRepository");

/**
 * Maneja el inicio de sesión del usuario verificando credenciales y generando un token JWT.
 *
 * @async
 * @function login
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} req.body - Cuerpo de la solicitud con los datos de inicio de sesión.
 * @param {string} req.body.email - Correo electrónico del usuario.
 * @param {string} req.body.password - Contraseña del usuario.
 * @param {string} [req.body.name] - Nombre del usuario (opcional).
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} Respuesta JSON con un mensaje de éxito o error.
 *
 * @example
 * POST /api/login
 * Body: {
 *   "email": "usuario@ejemplo.com",
 *   "password": "contraseña_segura",
 *   "name": "Juan Pérez"
 * }
 */
exports.login = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Se necesita email y contraseña" });
  }

  try {
    // Buscar al usuario en la base de datos utilizando el repositorio de usuarios
    const user = await userRepository.getUserByEmail(email, name);

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada (hash)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Generar un token JWT válido por 1 hora
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Configurar el token como una cookie HTTP-only para mayor seguridad
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};
```

Aunque esta funcion es mas extensa, el flujo es parecido a la funcion para registrar un usuario, solo con la diferencia de que esta hace mas verificaciones antes de llamar a la base de datos

Ahora vamos a crear la funcion del repositorio para obtener los datos

```js
exports.getUserByEmail = async (email, name) => {
  return await recibirDatos("Users", { email, name });
};
```

Al igual que con el registro, esta funcion solo llama al sevicio que obtiene los datos de dynamo

Una vez que la funcion se asegura que las credenciales son correctas, se crea el JWT, y se asigna a una cookie, la misma cookie que se lee en la funcion de mas arriba para autorizar al usuario

Ahora ya tenemos creado tanto el registro de usuarios como el login de usuarios, pero mas importante, tenemos implementado el recibir y enviar datos a DynamoDB.

### Integracion con AWS S3

#### Subida de archivos a S3

Para poder crear la integracion con AWS S3, primero tenemos que instalar las librerias

```
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

Ahora vamos a empezar por crear el flujo de subir una imagen a S3

Primero creamos la ruta

```js
const express = require("express");
const multer = require("multer");

const router = express.Router();
const uploadController = require("../Controllers/upload.controller");
const getUrl = require("../Controllers/getUrl.controller");

const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/upload", upload.single("file"), uploadController.upload);
```

Esta ruta como podemos ver es diferente, ya que utilizamos un middleware para poder recibir un archivo

Ahora creamos el controlador que utilizara esta ruta

```js
/**
 * Maneja la carga de un archivo a S3.
 *
 * Esta función verifica si hay un archivo en la solicitud y lo sube a un bucket de S3.
 * Luego, responde con un mensaje de éxito o un error en caso de fallo.
 *
 * @function
 * @async
 * @param {Object} req - El objeto de la solicitud HTTP.
 * @param {Object} req.file - El archivo cargado en la solicitud.
 * @param {Buffer} req.file.buffer - El contenido del archivo cargado en forma de buffer.
 * @param {string} req.file.originalname - El nombre original del archivo cargado.
 * @param {string} req.file.mimetype - El tipo MIME del archivo cargado.
 * @param {Object} res - El objeto de la respuesta HTTP.
 * @returns {Object} Respuesta JSON que contiene:
 *   - message: Mensaje de éxito en caso de que la carga se realice correctamente.
 *   - url: URL donde se encuentra el archivo en S3.
 * @throws {Error} Si ocurre un error al subir el archivo a S3.
 *
 * @example
 * // Ejemplo de solicitud con un archivo llamado "image.png"
 * // POST /api/upload
 *
 * // Respuesta esperada:
 * {
 *   "message": "Subido exitosamente",
 *   "url": "https://example-bucket.s3.amazonaws.com/uploads/1234567890abcdef-image.png"
 * }
 */
exports.upload = async (req, res) => {
  // Verifica que se haya recibido un archivo en la solicitud
  if (!req.file) {
    console.log("No hay archivo");
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Genera un nombre único para el archivo
  const fileName = generarNombreUnico(req.file.originalname);

  // Parámetros para subir un objeto a S3
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${fileName}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype || "application/octet-stream",
  };

  try {
    // Intenta subir el archivo a S3 y obtener la URL prefirmada
    const urlArchivo = await enviarS3(params, fileName);
    res.json({ message: "Subido exitosamente", url: urlArchivo });
  } catch (error) {
    console.error("Error al subir archivo:", error);
    // Responde con un error si falla la carga
    res
      .status(500)
      .json({ message: "Error al subir archivo", error: error.message });
  }
};
```

Como se puede notar, en este controlador se utiliza una funcion llamada `generarNombreUnico`, la cual genera un nombre unico para los archivos que se suben

```js
/**
 * Función para generar un nombre de archivo único basado en la fecha y un valor aleatorio.
 *
 * @param {string} originalName - El nombre original del archivo, utilizado para obtener la extensión del archivo.
 * @returns {string} - Un nombre único para el archivo, basado en la fecha actual y un valor aleatorio.
 */
const crypto = require("crypto");
const path = require("path");

module.exports = (originalName) => {
  const randomBytes = crypto.randomBytes(16).toString("hex");
  return `${Date.now()}-${randomBytes}${path.extname(originalName)}`;
};
```

Al igual que se hizo con dynamo, aqui tambien utilizaremos un servicio para subir objetos a S3

```js
/**
 * Función para subir un archivo a un bucket de S3.
 *
 * @param {Object} params - Parámetros necesarios para subir el archivo, que incluyen el nombre del archivo, el contenido y otras configuraciones de S3.
 * @param {string} params.Bucket - El nombre del bucket de S3.
 * @param {string} params.Key - El nombre del archivo a subir.
 * @param {Buffer|Stream|Uint8Array} params.Body - El contenido del archivo que se subirá.
 * @returns {Promise<string>} - URL pública del archivo subido en S3.
 * @throws {Error} - Lanza un error si no se puede completar la carga.
 */
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: "us-east-1",
});

module.exports = async (params) => {
  try {
    await s3.send(new PutObjectCommand(params));
    const fileName = params.Key;
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${fileName}`;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw new Error("Failed to upload file to S3");
  }
};
```

Con estos bloques de codigo, podemos crear nuestro flujo para subir un archivo a S3

#### Recibo de archivos de S3

Para recibir los archivos que subimos previamente, es un poco diferente que recibir datos de dynamo, ya que tenemos que utilizar algo llamado `Pre-signed URL`, lo que nos permitira visualizar el contenido de los archivos

Primero creamos nuestro servicio para generar estos url prefirmados

```js
/**
 * @module generarUrlPrefirmado
 */

const {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// Cliente de S3 configurado para la región especificada
const s3Client = new S3Client({
  region: "us-east-1",
});

// Nombre del bucket y tiempo de expiración predeterminado de la URL
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const URL_EXPIRATION = 3600;

/**
 * Genera una URL prefirmada para acceder a un objeto almacenado en S3.
 *
 * Esta función genera una URL que permite acceder a un objeto almacenado en S3 sin necesidad de credenciales,
 * válida por un tiempo determinado. La URL prefirmada es útil para la descarga de archivos sin exponer el
 * acceso directo al bucket S3.
 *
 * @function
 * @async
 * @param {string} llaveObjeto - La clave (key) del objeto en el bucket S3.
 * @param {number} [expiresIn=3600] - El tiempo en segundos que la URL prefirmada será válida. Por defecto es 3600 segundos (1 hora).
 * @returns {string} La URL prefirmada generada que permite acceder al objeto.
 * @throws {Error} Si ocurre un error al generar la URL prefirmada.
 *
 * @example
 * // Generar una URL prefirmada para un archivo llamado "image.png"
 * const url = await generarUrlPrefirmado("uploads/image.png");
 * console.log(url); // URL que puede ser usada para acceder al archivo
 */
module.exports = async (llaveObjeto, expiresIn = URL_EXPIRATION) => {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: llaveObjeto,
  });

  return getSignedUrl(s3Client, command, { expiresIn });
};
```

Este codigo nos retorna los urls prefirmados que usaremos

Ahora podemos crear todo el flujo

Primero como siempre creamos la ruta

```js
router.get("/images/:filename", getUrl.getUrl);
```

Ahora creamos el controlador para la ruta

```js
/**
 * @module getUrl
 */

const generarUrlPrefirmado = require("../../util/generarUrlPresigned");

const FOLDER_NAME = "uploads"; // Nombre de la carpeta donde se guardan los archivos
const URL_EXPIRATION = 3600; // Tiempo de expiración de la URL prefirmada en segundos

/**
 * Obtiene una URL prefirmada para acceder a un archivo en S3.
 *
 * @function
 * @async
 * @param {Object} req - El objeto de la solicitud HTTP.
 * @param {Object} req.params - Parámetros de la solicitud, que contiene el nombre del archivo.
 * @param {string} req.params.filename - El nombre del archivo para el cual se generará la URL prefirmada.
 * @param {Object} res - El objeto de la respuesta HTTP.
 * @returns {Object} Respuesta JSON que contiene:
 *   - success: Booleano que indica si la operación fue exitosa.
 *   - url: La URL prefirmada generada para acceder al archivo.
 *   - expiresIn: El tiempo en segundos hasta que la URL expire.
 * @throws {Error} Si ocurre un error al generar la URL prefirmada.
 *
 * @example
 * // Ejemplo de solicitud con un archivo llamado "file.txt"
 * // GET /api/file/file.txt
 *
 * // Respuesta esperada:
 * {
 *   "success": true,
 *   "url": "https://example-bucket.s3.amazonaws.com/uploads/file.txt?...",
 *   "expiresIn": 3600
 * }
 */
exports.getUrl = async (req, res) => {
  try {
    const filename = req.params.filename;
    const objectKey = `${FOLDER_NAME}/${filename}`;

    // Generar URL prefirmada
    const presignedUrl = await generarUrlPrefirmado(objectKey);

    // Responder con la URL prefirmada y la expiración
    res.json({
      success: true,
      url: presignedUrl,
      expiresIn: URL_EXPIRATION,
    });
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    // Manejo de errores
    res.status(500).json({
      success: false,
      message: "Failed to generate presigned URL",
      error: error.message,
    });
  }
};
```

Este seria nuestro controlador que nos regresa un ur json con los mensajes de si la peticion fue un exito, el url que nos permite visualizar la imagen, y la expiracion del url

De esta manera, podemos tanto subir y ver archivos de S3

# Integración de Mercado Pago con Checkout Pro

# Documentación Integración con Mercado Pago utilizando Checkout Pro

---

### 1. `configMercadoPago.js`

```js
const { MercadoPagoConfig } = require("mercadopago");

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

module.exports = mercadopago;
```

**Explicación**:

- Se inicializa el cliente SDK de Mercado Pago con el **Access Token**.
- Se exporta para ser reutilizado donde se cree la preferencia.

---

### 2. `configPreference.js`

```js
const mercadopago = require("./configMercadoPago");
const { Preference } = require("mercadopago");

const createPreference = async (products) => {
  const items = products.map((product) => ({
    title: product.title,
    quantity: product.quantity,
    unit_price: product.unit_price,
    currency_id: "MXN",
  }));

  const preference = {
    items,
    back_urls: {
      success: "http://localhost:4000/exito",
      failure: "http://localhost:4000/fallo",
      pending: "http://localhost:4000/pendiente",
    },
    auto_return: "approved",
  };

  const preferenceClient = new Preference(mercadopago);
  const response = await preferenceClient.create({ body: preference });

  return response;
};

module.exports = createPreference;
```

**Explicación**:

- Transforma productos al formato de Mercado Pago.
- Define URLs de redirección y genera la preferencia.
- Devuelve `id` e `init_point`.

---

### 3. `mercadoPago.controller.js`

```js
const createPreference = require("../../util/createPreference");

const createPreferenceHandler = async (req, res) => {
  try {
    const products = req.body.products;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "Productos inválidos" });
    }

    const preference = await createPreference(products);
    res.status(200).json({
      id: preference.id,
      init_point: preference.init_point,
    });
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    res.status(500).json({ error: "Error interno al generar la preferencia" });
  }
};

module.exports = { createPreferenceHandler };
```

**Explicación**:

- Controlador que crea la preferencia con los productos recibidos.
- Devuelve el `init_point` para usar en el frontend.

---

### 4. `mercadoPago.routes.js`

```js
const express = require("express");
const router = express.Router();
const {
  createPreferenceHandler,
} = require("../Controllers/mercadoPago.controller");

router.post("/create_preference", createPreferenceHandler);

module.exports = router;
```

**Explicación**:

- Define la ruta POST para crear la preferencia.
- Conectada al controlador explicado arriba.

---

# Aqui empieza el frontend

## Frontend

### 5. `BotonPago.jsx`

```jsx
import { useState } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import Button from "@mui/material/Button";

function BotonPago() {
  const [preferenceId, setPreferenceId] = useState(null);

  const crearPreferencia = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/mercadoPago/create_preference`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
          body: JSON.stringify({
            products: [
              {
                title: "Producto de prueba",
                quantity: 1,
                unit_price: 1000,
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const error = await res.json();
        console.error("Error en respuesta:", error);
        alert("Ocurrió un error al crear la preferencia");
        return;
      }

      const data = await res.json();
      setPreferenceId(data.id);
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      alert("Error de conexión con el backend");
    }
  };

  return (
    <div>
      <Button variant='contained' color='primary' onClick={crearPreferencia}>
        Pagar con Mercado Pago
      </Button>
      {preferenceId && (
        <div style={{ marginTop: "20px" }}>
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
    </div>
  );
}

export default BotonPago;
```

**Explicación**:

- Envía solicitud al backend.
- Muestra botón Wallet de Mercado Pago con la preferencia generada.

---

## Resultado

- El usuario hace clic en “Pagar con Mercado Pago”.
- Se abre el checkout.
- Luego del pago, es redirigido según el estado (`success`, `failure`, `pending`).

---

| **Tipo de Versión** | **Descripción**                                       | **Fecha** | **Colaborador**              |
| ------------------- | ----------------------------------------------------- | --------- | ---------------------------- |
| **1.0**             | Se creo la documentacion de la prueba de arquitectura | 4/3/2025  | Arturo Sanchez, Diego Alfaro |
