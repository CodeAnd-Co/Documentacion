---
title: Guía de jest.
sidebar_position: 0
---
---

## title: 📖 | Guía de testing con Jest

---
# 📖 Guía de testing con Jest

Esta guía explica el uso de Jest como herramienta para realizar pruebas unitarias y de integración en proyectos de JavaScript y Node.js.

## 🎯 Objetivo

* Explicar de manera clara cómo utilizar Jest para realizar pruebas automáticas.
* Permitir que cualquier persona pueda aplicar Jest en sus proyectos siguiendo esta guía.

## 📝 Procedimiento

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

### Paso 2: Estructura básica de un test en Jest

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
* `it()` o `test()`: Define un caso de prueba individual.
* `expect()`: Define las expectativas (matchers).

### Paso 3: Uso de Matchers en Jest

Jest incluye una variedad de **matchers** para validar resultados:

| Matcher                 | Descripción                                     | Ejemplo                            |
| ----------------------- | ----------------------------------------------- | ---------------------------------- |
| `toBe(valor)`           | Igualdad estricta (`===`)                       | `expect(2+2).toBe(4)`              |
| `toEqual(obj)`          | Igualdad profunda (objetos, arrays)             | `expect({a:1}).toEqual({a:1})`     |
| `toContain(element)`    | Verifica si un array o string contiene un valor | `expect([1,2,3]).toContain(2)`     |
| `toThrow()`             | Verifica si una función lanza un error          | `expect(() => fn()).toThrow()`     |
| `toBeInstanceOf(Class)` | Verifica si un objeto es instancia de una clase | `expect(obj).toBeInstanceOf(User)` |

### Paso 4: Uso de Mocks y Spies

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

### Paso 5: Manejo de errores en pruebas

Cuando una función debe lanzar un error, se usa `.rejects` o `.toThrow`:

```javascript
test('lanza error esperado', async () => {
  await expect(asyncFn()).rejects.toThrow('Mensaje de error');
});
```

### Paso 6: Limpieza y buenas prácticas

* Usa `beforeEach()` para limpiar mocks antes de cada prueba.
* Usa `afterAll()` para restaurar implementaciones originales.
* Asegura que cada prueba sea **independiente** de las demás.

Ejemplo:

```javascript
beforeEach(() => jest.clearAllMocks());
afterAll(() => consoleSpy.mockRestore());
```

## ⚠️ Consideraciones adicionales

* **Pre-requisitos:** Conocimientos básicos de JavaScript/Node.js, manejo de módulos CommonJS/ESM.
* **Limitaciones:** Jest es ideal para proyectos JavaScript/TypeScript. No es nativo para otros lenguajes.
* **Advertencias:** Evitar usar dependencias externas reales en pruebas unitarias. Siempre que sea posible, usa mocks.

## 📎 Recursos relacionados

* [Documentación oficial de Jest](https://jestjs.io/docs)
* [Lista completa de Matchers](https://jestjs.io/docs/using-matchers)
* [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
* [Mock Functions](https://jestjs.io/docs/mock-functions)

## 📚 Historial de cambios

