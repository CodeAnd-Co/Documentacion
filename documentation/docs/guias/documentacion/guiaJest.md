---
title: Guía de Jest
---

# **Guía de Jest**

## **QUICKSTART**

1. **Instalación**: `npm install --save-dev jest`  
2. **Crear archivo de prueba**: Con el nombre del módulo \+ `.test.js` (ej: `cargarExcel.test.js`)  
3. **Importar módulo**: Importar las funciones a probar en el archivo de test  
4. **Configurar package.json**: Asegurar que en `scripts` tengamos `"test": "jest"`  
5. **Ejecutar pruebas**: `npm test`  
6. **Revisar resultados**: Ver pruebas exitosas/fallidas con mensajes de error

## **Estructura Básica de una Prueba**

**¿Qué es?** Una prueba en Jest es una función que verifica si nuestro código se comporta como esperamos. Cada prueba tiene un nombre descriptivo y una función que ejecuta el código y verifica el resultado.

**¿Cuándo usar `test()` vs `describe()`?**

* `test()` se usa para pruebas individuales  
* `describe()` se usa para agrupar pruebas relacionadas y organizarlas mejor

```javascript
test('NOMBRE DE LA FUNCIÓN', () => {
  expect('cosaProbar').toBe('resultadoEsperado');
});

// O usando describe para agrupar pruebas
describe('Calculadora', () => {
  test('debe sumar correctamente', () => {
    expect(2 + 2).toBe(4);
  });
  
  test('debe restar correctamente', () => {
    expect(5 - 3).toBe(2);
  });
});
```

## **Matchers Principales**

**¿Qué son los Matchers?** Son métodos que Jest proporciona para verificar que los valores cumplan ciertas condiciones. Cada matcher tiene un propósito específico y es importante elegir el correcto para cada situación.

### **Igualdad**

**¿Cuándo usar cada uno?**

* **`.toBe()`**: Para valores primitivos (números, strings, booleans) y cuando necesitas verificar que son exactamente el mismo objeto en memoria  
* **`.toEqual()`**: Para comparar el contenido de objetos y arrays, ignorando si son el mismo objeto en memoria  
* **`.toStrictEqual()`**: Como `toEqual` pero más estricto con propiedades undefined

```javascript
test('toBe vs toEqual', () => {
  // toBe funciona con primitivos
  expect(5).toBe(5);
  expect('hello').toBe('hello');
  
  // toEqual compara contenido de objetos
  const obj1 = {name: 'Juan'};
  const obj2 = {name: 'Juan'};
  expect(obj1).toEqual(obj2); //  Pasa - mismo contenido
  expect(obj1).toBe(obj2);    //  Falla - diferentes objetos en memoria
});
```

### **Verificación de Tipos**

**¿Por qué son importantes?** En JavaScript, `null`, `undefined` y `false` pueden comportarse de manera similar en ciertas situaciones, pero a menudo necesitamos distinguir entre ellos.

```javascript
test('verificaciones de tipo', () => {
  let valor;
  expect(valor).toBeUndefined();        // Variable declarada pero no asignada
  
  valor = null;
  expect(valor).toBeNull();             // Valor intencionalmente vacío
  
  valor = 0;
  expect(valor).toBeFalsy();            // 0 es falsy pero está definido
  expect(valor).toBeDefined();          // Tiene un valor asignado
  
  valor = 'texto';
  expect(valor).toBeTruthy();           // String no vacío es truthy
});
```

### **Números**

**¿Por qué `.toBeCloseTo()` para flotantes?** Los números decimales en JavaScript pueden tener problemas de precisión debido a cómo se almacenan en memoria. Por ejemplo, `0.1 + 0.2` no es exactamente `0.3`.

```javascript
test('problemas con números flotantes', () => {
  // Esto fallará debido a la precisión de flotantes
  // expect(0.1 + 0.2).toBe(0.3);
  
  //  Esto funciona correctamente
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test('comparaciones numéricas', () => {
  const edad = 25;
  expect(edad).toBeGreaterThan(18);           // Mayor de edad
  expect(edad).toBeLessThanOrEqual(100);      // Edad realista
});
```

### **Strings**

**¿Cuándo usar cada método?**

* **`.toMatch()`**: Cuando necesitas verificar patrones complejos con regex o substrings  
* **`.toContain()`**: Para verificaciones simples de substring

```javascript
test('validaciones de string', () => {
  const email = 'usuario@ejemplo.com';
  
  // Verificar formato de email con regex
  expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  
  // Verificar que contiene el dominio
  expect(email).toContain('@ejemplo.com');
  
  // Verificar que no contiene espacios
  expect(email).not.toContain(' ');
});
```

### **Arrays y Objetos**

**¿Para qué sirve cada matcher?**

* **`.toContain()`**: Verifica si un elemento está presente en un array  
* **`.toHaveLength()`**: Verifica el tamaño exacto  
* **`.toHaveProperty()`**: Verifica que un objeto tenga una propiedad específica

```javascript
test('validaciones de arrays', () => {
  const productos = ['laptop', 'mouse', 'teclado'];
  
  expect(productos).toContain('laptop');        // Producto existe
  expect(productos).toHaveLength(3);            // Cantidad correcta
  expect(productos).not.toContain('monitor');   // Producto no existe
});

test('validaciones de objetos', () => {
  const usuario = {
    id: 1,
    nombre: 'Juan',
    email: 'juan@test.com',
    activo: true
  };
  
  expect(usuario).toHaveProperty('id');               // Tiene la propiedad
  expect(usuario).toHaveProperty('email', 'juan@test.com'); // Valor específico
  expect(usuario).not.toHaveProperty('password');    // No tiene contraseña expuesta
});
```

## **Negación**

**¿Para qué sirve `.not`?** Te permite verificar que algo NO ocurra, lo cual es tan importante como verificar que sí ocurra. Es especialmente útil para casos edge y validaciones de seguridad.

```javascript
test('ejemplos de negación', () => {
  const password = 'miPassword123';
  
  // Verificar que la contraseña no esté vacía
  expect(password).not.toBe('');
  expect(password).not.toHaveLength(0);
  
  // Verificar que no contenga información sensible
  expect(password.toLowerCase()).not.toContain('password');
  expect(password).not.toMatch(/123456|qwerty|admin/);
});
```

## **Pruebas Asíncronas**

**¿Por qué son diferentes?** El código asíncrono (como llamadas a APIs, lectura de archivos, timers) no se ejecuta inmediatamente. Jest necesita saber cuándo la operación ha terminado para poder verificar el resultado.

### **Promises con async/await (Recomendado)**

**¿Por qué usar async/await?** Es la forma más moderna y legible de manejar código asíncrono. Jest automáticamente esperará a que la promesa se resuelva.

```javascript
// Función que simula una llamada a API
async function obtenerUsuario(id) {
  const response = await fetch(`/api/usuarios/${id}`);
  return response.json();
}

test('debe obtener usuario por ID', async () => {
  // La prueba espera automáticamente a que se resuelva
  const usuario = await obtenerUsuario(1);
  
  expect(usuario).toHaveProperty('id', 1);
  expect(usuario).toHaveProperty('nombre');
});

test('debe manejar errores de API', async () => {
  // Verificar que se lance un error
  await expect(obtenerUsuario(999)).rejects.toThrow('Usuario no encontrado');
});
```

### **Promises con .then (Alternativa)**

```javascript
test('promesa con then', () => {
  // IMPORTANTE: Debes retornar la promesa
  return obtenerUsuario(1).then(usuario => {
    expect(usuario.id).toBe(1);
  });
});
```

### **Callbacks (Para código legacy)**

**¿Cuándo usar?** Solo cuando trabajas con código antiguo que usa callbacks en lugar de promesas.

```javascript
function obtenerDatosCallback(callback) {
  setTimeout(() => {
    callback(null, {data: 'información'});
  }, 100);
}

test('callback con done', done => {
  obtenerDatosCallback((error, data) => {
    try {
      expect(error).toBeNull();
      expect(data).toHaveProperty('data');
      done(); // IMPORTANTE: Llamar done() para indicar que terminó
    } catch (e) {
      done(e); // Pasar el error a done() si algo falla
    }
  });
});
```

## **Mocks y Spies**

**¿Qué son y para qué sirven?** Los mocks son versiones "falsas" de funciones o módulos que podemos controlar completamente. Son esenciales para:

* Aislar el código que estamos probando  
* Simular respuestas de APIs sin hacer llamadas reales  
* Verificar que las funciones se llamen correctamente

### **Mock Functions**

```javascript
test('verificar llamadas a función', () => {
  const mockCallback = jest.fn();
  
  // Función que usa el callback
  function procesarDatos(datos, callback) {
    if (datos.length > 0) {
      callback('procesado');
    }
  }
  
  procesarDatos(['a', 'b'], mockCallback);
  
  // Verificar que se llamó
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledWith('procesado');
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

test('controlar valor de retorno', () => {
  const mockFunction = jest.fn();
  mockFunction.mockReturnValue('valor simulado');
  
  const resultado = mockFunction();
  expect(resultado).toBe('valor simulado');
});
```

### **Módulos Mock**

**¿Cuándo usar?** Cuando necesitas reemplazar módulos completos, como librerías de HTTP, bases de datos, o servicios externos.

```javascript
// Mockear axios para no hacer llamadas HTTP reales
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('llamada a API mockeada', async () => {
  const userData = {id: 1, name: 'Juan'};
  mockedAxios.get.mockResolvedValue({data: userData});
  
  const result = await obtenerUsuario(1);
  
  expect(mockedAxios.get).toHaveBeenCalledWith('/api/usuarios/1');
  expect(result).toEqual(userData);
});
```

## **Setup y Teardown**

**¿Para qué sirven?** Te permiten preparar el entorno antes de las pruebas y limpiarlo después. Esto es crucial para mantener las pruebas independientes entre sí.

**¿Cuándo usar cada uno?**

* **beforeAll/afterAll**: Configuración costosa que se puede reutilizar (conexión a BD, servidor de prueba)  
* **beforeEach/afterEach**: Configuración que debe ser fresca para cada prueba (datos de prueba, mocks)

```javascript
describe('Pruebas de base de datos', () => {
  let database;
  
  beforeAll(async () => {
    // Se ejecuta una sola vez antes de todas las pruebas
    // Útil para configuración costosa
    database = await conectarBaseDatos();
    await database.ejecutarMigraciones();
  });

  afterAll(async () => {
    // Limpieza final
    await database.cerrarConexion();
  });

  beforeEach(async () => {
    // Se ejecuta antes de CADA prueba
    // Útil para tener datos frescos en cada prueba
    await database.limpiarTablas();
    await database.insertarDatosPrueba();
  });

  afterEach(() => {
    // Limpieza después de cada prueba
    jest.clearAllMocks();
  });

  test('debe crear usuario', async () => {
    const usuario = await crearUsuario({nombre: 'Juan'});
    expect(usuario).toHaveProperty('id');
  });

  test('debe eliminar usuario', async () => {
    const usuario = await crearUsuario({nombre: 'Pedro'});
    await eliminarUsuario(usuario.id);
    
    const usuarioEliminado = await buscarUsuario(usuario.id);
    expect(usuarioEliminado).toBeNull();
  });
});
```

## **Configuración Avanzada**

**¿Por qué necesitas configuración?** Jest funciona bien "out of the box", pero para proyectos reales necesitas personalizar su comportamiento.

### **jest.config.js**

```javascript
module.exports = {
  // Entorno de ejecución
  testEnvironment: 'node',        // Para APIs/backend
  // testEnvironment: 'jsdom',    // Para frontend/DOM
  
  // Cobertura de código
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Patrones de archivos de prueba
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  
  // Configuración inicial
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  
  // Transformaciones
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
};
```

### **Scripts útiles en package.json**

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",           // Re-ejecuta al cambiar archivos
    "test:coverage": "jest --coverage",     // Genera reporte de cobertura
    "test:ci": "jest --ci --coverage --watchAll=false" // Para CI/CD
  }
}
```

## **Mejores Prácticas**

### **1\. Nombres Descriptivos**

**¿Por qué importa?** Los nombres de las pruebas son documentación. Deben explicar qué hace la función y en qué condiciones.

```javascript
// Mal - No dice nada útil
test('suma', () => {
  expect(add(2, 3)).toBe(5);
});

// Bien - Describe comportamiento específico
test('debe sumar correctamente dos números positivos', () => {
  expect(add(2, 3)).toBe(5);
});

test('debe manejar números negativos en la suma', () => {
  expect(add(-2, 3)).toBe(1);
});

test('debe lanzar error cuando los parámetros no son números', () => {
  expect(() => add('a', 3)).toThrow('Los parámetros deben ser números');
});
```

### **2\. Arrange, Act, Assert (AAA)**

**¿Qué es el patrón AAA?** Una estructura que hace las pruebas más legibles y mantenibles:

* **Arrange**: Preparar los datos y condiciones  
* **Act**: Ejecutar la función a probar  
* **Assert**: Verificar el resultado

```javascript
test('debe calcular descuento correctamente', () => {
  // Arrange (Preparar)
  const precio = 100;
  const porcentajeDescuento = 20;
  const descuentoEsperado = 20;
  
  // Act (Actuar)
  const descuento = calcularDescuento(precio, porcentajeDescuento);
  
  // Assert (Verificar)
  expect(descuento).toBe(descuentoEsperado);
});
```

### **3\. Casos Edge (Casos Límite)**

**¿Por qué son importantes?** Los bugs a menudo ocurren en los límites: valores nulos, arrays vacíos, strings vacíos, números muy grandes, etc.

```javascript
describe('validación de email', () => {
  test('debe aceptar email válido', () => {
    expect(validarEmail('user@domain.com')).toBe(true);
  });

  // Casos edge
  test('debe rechazar email sin @', () => {
    expect(validarEmail('userdomain.com')).toBe(false);
  });

  test('debe rechazar string vacío', () => {
    expect(validarEmail('')).toBe(false);
  });

  test('debe manejar null y undefined', () => {
    expect(validarEmail(null)).toBe(false);
    expect(validarEmail(undefined)).toBe(false);
  });

  test('debe rechazar email con espacios', () => {
    expect(validarEmail('user @domain.com')).toBe(false);
  });
});
```

### **4\. Una Sola Responsabilidad por Test**

**¿Por qué?** Si una prueba falla, debes saber exactamente qué está roto. Si una prueba verifica múltiples cosas, es difícil saber cuál falló.

```javascript
// Mal - Múltiples responsabilidades
test('operaciones de usuario', () => {
  const usuario = crearUsuario('Juan');     // Primera responsabilidad
  expect(usuario).toBeDefined();
  
  const actualizado = actualizarUsuario(usuario.id, {edad: 25}); // Segunda
  expect(actualizado.edad).toBe(25);
  
  const eliminado = eliminarUsuario(usuario.id); // Tercera
  expect(eliminado).toBe(true);
});

// Bien - Una responsabilidad cada una
test('debe crear usuario correctamente', () => {
  const usuario = crearUsuario('Juan');
  expect(usuario).toBeDefined();
  expect(usuario.nombre).toBe('Juan');
});

test('debe actualizar edad de usuario existente', () => {
  const usuario = crearUsuario('Juan');
  const actualizado = actualizarUsuario(usuario.id, {edad: 25});
  expect(actualizado.edad).toBe(25);
});

test('debe eliminar usuario existente', () => {
  const usuario = crearUsuario('Juan');
  const eliminado = eliminarUsuario(usuario.id);
  expect(eliminado).toBe(true);
});
```

## **Comandos Útiles**

**¿Cuándo usar cada comando?**

* `npm test` \- Ejecuta todas las pruebas una vez  
* `npm test -- --watch` \- Modo desarrollo (re-ejecuta automáticamente)  
* `npm test -- --coverage` \- Ver qué tanto código está cubierto por pruebas  
* `npm test -- --verbose` \- Ver detalles de cada prueba individual  
* `npm test -- archivo.test.js` \- Ejecutar solo un archivo específico

## **Debugging**

**¿Cómo depurar pruebas que fallan?**

```javascript
test('debugging ejemplo', () => {
  const input = {nombre: 'Juan', edad: 25};
  const resultado = procesarUsuario(input);
  
  // Usar console.log para ver valores
  console.log('Input:', input);
  console.log('Resultado:', resultado);
  console.log('Tipo de resultado:', typeof resultado);
  
  expect(resultado).toHaveProperty('id');
});

// Para debugging más avanzado
test('debugging con breakpoint', () => {
  debugger; // Pausa aquí cuando ejecutas con --inspect-brk
  const resultado = miFuncion();
  expect(resultado).toBeDefined();
});
```

---

**Recursos adicionales:**

* [Documentación oficial de Jest](https://jestjs.io/docs/getting-started)  
* [Guía de Matchers completa](https://jestjs.io/docs/expect)

## Historial de cambios

| **Tipo de versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Crear guía de Jest. | 27/05/2025 | Daniel Queijeiro|