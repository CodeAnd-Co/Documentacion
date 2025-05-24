---
title: Guía de jest.
sidebar_position: 0
---

# Guía de Jest

Esta guía explica el uso de Jest como herramienta para realizar pruebas unitarias y de integración en proyectos de JavaScript y Node.js.
---
## Objetivo

* Explicar de manera clara cómo utilizar Jest para realizar pruebas automáticas.
* Permitir que cualquier persona pueda aplicar Jest en sus proyectos siguiendo esta guía.

## Procedimiento

### Paso 0: Instalación de Jest (si el proyecto aún no tiene Jest instalado)

1. Ejecuta el siguiente comando para instalar Jest en tu proyecto:

   ```bash
   npm install --save-dev jest
   ```
2. Asegúrate de tener configurado el script de test en tu `package.json`:

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

### Paso 1: Documentación de la prueba
1. General el encabezado plantilla para saber más sobre la prueba.
``` js
/**
 * @file pruebas/usuarios/obtenerUsuarios.test.js
 * @description
 * Pruebas unitarias del caso de uso `obtenerUsuarios`, que se encarga de
 * obtener una lista de usuarios desde la API y mapearla a una instancia
 * de `ListaUsuarios` que contiene objetos `Usuario`.
 * 
 * Se prueban los siguientes escenarios:
 * - Caso exitoso con múltiples usuarios.
 * - Caso exitoso pero con lista vacía.
 * - Fallo controlado cuando `ok: false` en la respuesta.
 * - Error en la red u otra excepción al llamar la API.
 * 
 * @see https://codeandco-wiki.netlify.app/docs/proyectos/tractores/documentacion/requisitos/RF40
 * 
 * @module pruebas/usuarios/obtenerUsuarios.test
 * @see módulo {@link ../../backend/casosUso/usuarios/consultarUsuarios}
 * @see clase {@link ../../backend/data/usuariosModelos/usuarios~Usuario}
 * @see clase {@link ../../backend/data/usuariosModelos/usuarios~ListaUsuarios}
 */
```
2. Añade las importaciones necesarias para crear las pruebas. Por lo general son los archivos ya creados en el proyecto o librerías.
```js
/*  1. ───── Importaciones ──────────────────────────────────────────────── */
const {
  obtenerUsuarios: obtenerUsuariosAPIPrueba
} = require('../../backend/domain/usuariosAPI/usuariosAPI');

const { obtenerUsuarios } = require('../../backend/casosUso/usuarios/consultarUsuarios');

const { Usuario, ListaUsuarios } = require('../../backend/data/usuariosModelos/usuarios');

```
3. En este apartado generaremos mucks de las funcionaldiades que queremos probar. Un muck es una simulación de la funcionalidad a probar.
```js
/*  2. ───── Mock del módulo que llama al fetch ──────────────────────────── */
jest.mock('../../backend/domain/usuariosAPI/usuariosAPI', () => ({
  obtenerUsuarios: jest.fn()
}));
```

4. En este apartado vamos a empezar a desarrollar los test cases programandolos.
```js
/*  3. ───── Tests ──────────────────────────────────────────────────────── */
describe('obtenerUsuarios (use-case)', () => {
  let monitorDeError;

  // Suprime errores en consola durante las pruebas que los provocan
  beforeAll(() => {
    monitorDeError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
  });

  afterAll(() => {
    monitorDeError.mockRestore();
  });

  beforeEach(() => jest.clearAllMocks());

  /**
   * Escenario exitoso: se reciben usuarios y se devuelve una instancia
   * de ListaUsuarios con objetos Usuario correctamente construidos.
   */
  it('devuelve ListaUsuarios con objetos Usuario (camino feliz)', async () => {
    const respuestaPrueba = {
      ok: true,
      usuarios: [
        { id: 1, nombre: 'Juan', correo: 'juan@example.com' },
        { id: 2, nombre: 'Ana',  correo: 'ana@example.com' }
      ]
    };
    obtenerUsuariosAPIPrueba.mockResolvedValue(respuestaPrueba);

    const lista = await obtenerUsuarios();

    expect(lista).toBeInstanceOf(ListaUsuarios);

    const usuarios = lista.obtenerUsuarios();
    expect(usuarios.length).toBe(2);
    expect(usuarios[0]).toBeInstanceOf(Usuario);
    expect(usuarios[0]).toMatchObject({
      id: 1,
      nombre: 'Juan',
      correo: 'juan@example.com'
    });
  });

  /**
   * Escenario exitoso: respuesta ok, pero sin usuarios.
   * Se espera una ListaUsuarios vacía.
   */
  it('devuelve ListaUsuarios vacía si la API no trae usuarios', async () => {
    obtenerUsuariosAPIPrueba.mockResolvedValue({ ok: true, usuarios: [] });

    const lista = await obtenerUsuarios();

    expect(lista).toBeInstanceOf(ListaUsuarios);
    expect(lista.obtenerUsuarios().length).toBe(0);
  });

  /**
   * Error controlado: respuesta con ok: false. 
   * El caso de uso debe lanzar una excepción con mensaje descriptivo.
   */
  it('lanza error cuando la API responde ok = false', async () => {
    obtenerUsuariosAPIPrueba.mockResolvedValue({ ok: false });

    await expect(obtenerUsuarios())
      .rejects.toThrow('No se pudo obtener la lista de usuarios');
  });

  /**
   * Error técnico: la API rechaza la promesa (por ejemplo, fallo de red).
   * El caso de uso debe capturar el error y lanzar una excepción clara.
   */
  it('lanza error cuando la API rechaza la promesa', async () => {
    obtenerUsuariosAPIPrueba.mockRejectedValue(new Error('Network error'));

    await expect(obtenerUsuarios())
      .rejects.toThrow('No se pudo obtener la lista de usuarios');
  });
});

```
## ⚠️ Consideraciones adicionales
En este apartado veremos más caracteristicas sobre jest con el fin que se entiendan los casos anteriores.

### Test cases individuales.
Los tests en Jest siguen una estructura basada en `describe` e `it` (o `test`):

```javascript
describe('Nombre del módulo o función', () => {
  it('debe hacer algo específico', () => {
    // Preparación (Arrange)
    const valor = 2 + 2;
    
    // Ejecución (Act)
    const resultado = valor;

    // Verificación (Assert)
    expect(resultado).toBe(4);
  });
});
```

* `describe()`: Agrupa pruebas relacionadas.
* `it()`: Define un caso de prueba individual.
* `expect()`: Define las expectativas (matchers).

### Uso de Matchers en Jest

Jest incluye una variedad de **matchers** para validar resultados:

| Matcher                 | Descripción                                     | Ejemplo                            |
| ----------------------- | ----------------------------------------------- | ---------------------------------- |
| `toBe(valor)`           | Igualdad estricta (`===`)                       | `expect(2+2).toBe(4)`              |
| `toEqual(obj)`          | Igualdad profunda (objetos, arrays)             | `expect({a:1}).toEqual({a:1})`     |
| `toContain(element)`    | Verifica si un array o string contiene un valor | `expect([1,2,3]).toContain(2)`     |
| `toThrow()`             | Verifica si una función lanza un error          | `expect(() => fn()).toThrow()`     |
| `toBeInstanceOf(Class)` | Verifica si un objeto es instancia de una clase | `expect(obj).toBeInstanceOf(User)` |

### Uso de Mocks y Spies

Los **mocks** permiten simular funciones o módulos externos, evitando dependencias reales:

```javascript
jest.mock('./api', () => ({
  obtenerDatos: jest.fn()
}));

const { obtenerDatos } = require('./api');

test('simula una llamada a API', async () => {
  obtenerDatos.mockResolvedValue({ ok: true, data: [1,2,3] });

  const respuesta = await obtenerDatos();
  expect(respuesta.data).toEqual([1,2,3]);
});
```

Los **spies** permiten espiar funciones reales sin reemplazarlas completamente:

```javascript
const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
console.log('Hola');
expect(logSpy).toHaveBeenCalledWith('Hola');
logSpy.mockRestore();
```

### Manejo de errores en pruebas

Cuando una función debe lanzar un error, se usa `.rejects` o `.toThrow`:

```javascript
test('lanza error esperado', async () => {
  await expect(asyncFn()).rejects.toThrow('Mensaje de error');
});
```

### Limpieza y buenas prácticas

* Usa `beforeEach()` para limpiar mocks antes de cada prueba.
* Usa `afterAll()` para restaurar implementaciones originales.
* Asegura que cada prueba sea **independiente** de las demás.

Ejemplo:

```javascript
beforeEach(() => jest.clearAllMocks());
afterAll(() => consoleSpy.mockRestore());
```


* **Limitaciones:** Jest es ideal para proyectos JavaScript/TypeScript. No es nativo para otros lenguajes.
* **Advertencias:** Evitar usar dependencias externas reales en pruebas unitarias. Siempre que sea posible, usa mocks.

## 📎 Recursos relacionados

* [Documentación oficial de Jest](https://jestjs.io/docs)
* [Lista completa de Matchers](https://jestjs.io/docs/using-matchers)
* [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
* [Mock Functions](https://jestjs.io/docs/mock-functions)

## Historial de cambios

| **Tipo de versión** | **Descripción**           | **Fecha**  | **Colaborador**              |
| ------------------- | ------------------------- | ---------- | ---------------------------- |
| **1.0**             | Creación de la guía. | 24/05/2025 | Rommel Pacheco Hernández, Daniel Contreras |
