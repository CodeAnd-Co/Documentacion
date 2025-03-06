---
title: Guía de Estándares de Codificación
sidebar_position: 1
---

# Guía de Estándares de Codificación

**Última actualización:** 5 de marzo de 2025  

## **Autores**  

| **Nombre**              | **Rol**  |
|-------------------------|----------|
| Diego  Alfaro           | Autor    |
| Daniel Contreras        | Autor    |
| Emilano Gómez           | Autor    |

---

## Objetos

Usar la sintaxis literal para la creación de objetos.

```javascript
// malo
const item = new Object();

// bueno
const item = {};
```

Usar nombres de propiedades computadas cuando se crea un objeto con nombres de propiedades dinámicas. Esto hace que podamos definir todas las propiedades del objeto en un mismo lugar.

```javascript
function getKey(k) {
  return `a key named ${k}`;
}

// malo
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// bueno
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

Si se crea una variable y se quiere agregar a un objeto, y se quiere usar el mismo nombre que la variable para el nombre de la propiedad, se debe usar la variable solamente.

```javascript
const lukeSkywalker = 'Luke Skywalker';

// malo
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// bueno
const obj = {
  lukeSkywalker,
};
```

Una vez se haga lo especificado en el punto anterior, se deben agrupar las propiedades especificadas de esa manera hasta arriba del objeto.

```javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// malo
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// bueno
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

## Funciones

Siempre poner los parámetros con valor por defecto al final.

```javascript
// malo
function handleThings(opts = {}, name) {
  // ...
}

// bueno
function handleThings(name, opts = {}) {
  // ...
}
```

No usar el constructor de funciones para crear una nueva función.

```javascript
// malo
const add = new Function('a', 'b', 'return a + b');

// bueno
const subtract = Function('a', 'b', 'return a - b');
```

Funciones con argumentos multilínea o invocaciones deberían estar indentados como cualquier lista multilínea.

```javascript
// malo
function foo(bar,
             baz,
             quux) {
  // ...
}

// bueno
function foo(
  bar,
  baz,
  quux,
) {
  // ...
}

// malo
console.log(foo,
  bar,
  baz);

// bueno
console.log(
  foo,
  bar,
  baz,
);
```

## Módulos

Siempre usar los módulos de la manera estandarizada.

```javascript
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;
```

No utilizar importaciones generales de todo el módulo.

```javascript
// malo
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// bueno
import AirbnbStyleGuide from './AirbnbStyleGuide';
```

No tener múltiples líneas que importen del mismo módulo.

```javascript
// malo
import foo from 'foo';
// … otros imports … //
import { named1, named2 } from 'foo';

// bueno
import foo, { named1, named2 } from 'foo';

// bueno
import foo, {
  named1,
  named2,
} from 'foo';
```

En módulos con una sola exportación, usar la exportación default.

```javascript
// malo
export function foo() {}

// bueno
export default function foo() {}
```

Poner todas las importaciones por encima del código que no es importación.

```javascript
// malo
import foo from 'foo';
foo.init();

import bar from 'bar';

// bueno
import foo from 'foo';
import bar from 'bar';

foo.init();
```

Importaciones multilínea deberán ser indentadas como arreglos multilínea.

```javascript
// malo
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

// bueno
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';
```

## Strings

Usar comillas simples para strings ‘ ’.

```javascript
// malo
const name = "Capt. Janeway";

// malo- Los template literals deben incluir interpolación o saltos de línea.
const name = `Capt. Janeway`;

// bueno
const name = 'Capt. Janeway';
```

Strings que pasan de los 100 caracteres no deberían escribirse en varias líneas usando concatenación de strings.

```javascript
// malo
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// malo
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// bueno
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

Al construir cadenas de texto con código, usar template strings en lugar de concatenación.

```javascript
// malo
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// malo
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// malo
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// bueno
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

Nunca usar eval() en un string, deja abiertas muchas vulnerabilidades.

## Arrays

Usa la sintaxis literal para la creación de los arrays.

```javascript
// malo
const items = new Array();

// bueno
const items = [];
```

Para añadir items a un array una el método push().

```javascript
const someStack = [];

// malo
someStack[someStack.length] = 'abracadabra';

// bueno
someStack.push('abracadabra');
```

Usa el operador de propagación (...) para copiar arrays.

```javascript
// malo
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// bueno
const itemsCopy = [...items];
```

Antes de los corchetes de cierre si el array tiene múltiples líneas, usa saltos de línea después de los corchetes de apertura.

```javascript
// malo
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// bueno
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

## Clases y constructores

Siempre usar class. Evitar manipular prototype directamente.

```javascript
// malo
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// bueno
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
```
Usar extends para herencia.

```javascript
// malo
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// bueno
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

Los métodos sí pueden regresar this para ayudar a encadenar métodos.

```javascript
// malo
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// bueno
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();
luke.jump()
  .setHeight(20);
```
Está bien crear un método toString() personalizado, solo asegurarse de que funciona correctamente y no causa efectos secundarios.

```javascript
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}
```
Las clases tienen un constructor por default si no se especifica ninguno. Un constructor vacío o uno que delega a una clase padre es innecesario.

```javascript
// malo
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// malo
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// bueno
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

Evitar miembros de la clase duplicados.

```javascript
// malo
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// bueno
class Foo {
  bar() { return 1; }
}

// bueno
class Foo {
  bar() { return 2; }
}
```

Los métodos de clase deben usar this o definirse como métodos estáticos, a menos que una biblioteca o framework externo requiera métodos no estáticos específicos. Un método de instancia debe indicar que su comportamiento varía según las propiedades del objeto que lo recibe.

```javascript
// malo
class Foo {
  bar() {
    console.log('bar');
  }
}

// bueno - esto se usa
class Foo {
  bar() {
    console.log(this.bar);
  }
}

// bueno - el constructor está exento de esta regla
class Foo {
  constructor() {
    // ...
  }
}

// bueno - los métodos estáticos no están obligados a usar this
class Foo {
  static bar() {
    console.log('bar');
  }
}
```

## Variables

Siempre usar const o let para declarar variables.

```javascript
// malo
superPower = new SuperPower();

// bueno
const superPower = new SuperPower();
```

Usar solo un let o const por asignación de variable.

```javascript
// malo
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// malo

const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// bueno
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

Agrupar todos los let y const.

```javascript
// malo
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// malo
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// bueno
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

No usar asignación de variables en cadena.

```javascript
// malo
(function example() {
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// bueno
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());
```

Evitar el uso de incrementos como ++ o –.

```javascript
// malo
const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// bueno
const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;
```

Evitar salto de lineas despues de un = en una asignación.

```javascript
// malo
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// malo
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// malo
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// bueno
const foo = 'superLongLongLongLongLongLongLongLongString';
```

## Propiedades

Usar notación de punto al acceder a propiedades.

```javascript
const luke = {
  jedi: true,
  age: 28,
};

// malo
const isJedi = luke['jedi'];

// bueno
const isJedi = luke.jedi;
```

Usar notación de brackets [] al acceder a propiedades con variables.

```javascript
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```

Usar operador de exponenciación (**) cuando se calculan exponenciales.

```javascript
// malo
const binary = Math.pow(2, 10);

// bueno
const binary = 2 ** 10;
```

## Estructuras de control

Si tu estructura de control (if, while, etc. ) se hace muy larga y excede la longitud máxima de línea, cada condición debe ser puesta en una nueva línea. El operador lógico empieza la línea.

```javascript
// malo
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// malo
if (foo === 123 &&
  bar === 'abc') {
  thing1();
}

// malo
if (foo === 123
  && bar === 'abc') {
  thing1();
}

// malo
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}

// bueno
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

// bueno
if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}

// bueno
if (foo === 123 && bar === 'abc') {
  thing1();
}
```

No usar operadores de selección en lugar de estructuras de control.

```javascript
// malo
!isRunning && startRunning();

// bueno
if (!isRunning) {
  startRunning();
}
```

## Arrow functions

Cuando debas utilizar una función anónima (como una callback) utiliza la función de flecha.

```javascript
// malo
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// bueno
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

En caso de que la expresión se extienda a lo largo de varias líneas, en ciérrala entre paréntesis para facilitar su lectura ya que muestra claramente dónde comienza y termina la función.

```javascript
// malo
['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
);

// bueno
['get', 'post', 'put'].map((httpMethod) => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
));
```

## Commas

No usar “leading commas”.

```javascript
// malo
const story = [
    once
  , upon
  , aTime
];

// bueno
const story = [
  once,
  upon,
  aTime,
];

// malo
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , birthYear: 1815
  , superPower: 'computers'
};

// bueno
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};
```

## Iteradores

No utilice iteradores. Usa las funciones de orden superior de JavaScript en lugar de bucles como for-in o for-of. Ejemplos: map() / every() / filter() / find() / findIndex() / reduce() / some().

```javascript
const numbers = [1, 2, 3, 4, 5];

// malo
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// bueno
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// mejor
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// malo
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// bueno
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// mejor (manteniendolo funcional)
const increasedByOne = numbers.map((num) => num + 1);
```

## Blocks

Utiliza llaves con todos los bloques multilínea.

```javascript
// malo
if (test)
  return false;

// bueno
if (test) return false;

// bueno
if (test) {
  return false;
}

// malo
function foo() { return false; }

// bueno
function bar() {
  return false;
}
```

Si estás utilizando bloques multilínea con if y else, coloca else en la misma línea que la llave de cierre de su bloque if.

```javascript
// malo
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// bueno
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

## Combinaciones de nombre

Evita los nombres de una sola letra. Sé descriptivo con su nombre.

```javascript
// malo
function q() {
  // ...
}

// bueno
function query() {
  // ...
}
```

Utiliza camelCase al nombrar objetos, funciones e instancias.

```javascript
// malo
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// bueno
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

Usa PascalCase sólo al nombrar constructores o clases.

```javascript
// malo
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// bueno
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```