---
title: Manual de prueba de arquitectura
sidebar_position: 3
---

# Integración de Mercado Pago con Checkout Pro

## Objetivo

Explicar el funcionamiento de la integración de pagos utilizando **Mercado Pago Checkout Pro**.

---

#  Documentación Integración con Mercado Pago utilizando Checkout Pro

##  Objetivo
Implementar una integración con **Mercado Pago Checkout Pro** que permita a los usuarios pagar productos desde el frontend, generando una preferencia de pago desde el backend.

---


##  Estructura de Archivos 

```
backend/
├── src/
│   ├── Controllers/
│   │   └── mercadoPago.controller.js
│   ├── routes/
│   │   └── mercadoPago.routes.js
│   ├── util/
│   │   └── configPreference.js
│   └── config/
│       └── configMercadoPago.js
frontend/
└── src/
    └── components/
        └── BotonPago.jsx
```

---

##  Backend

###  1. `configMercadoPago.js`

```js
const { MercadoPagoConfig } = require('mercadopago');

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

module.exports = mercadopago;
```

 **Explicación**:
- Se inicializa el cliente SDK de Mercado Pago con el **Access Token**.
- Se exporta para ser reutilizado donde se cree la preferencia.

---

###  2. `configPreference.js`

```js
const mercadopago = require('./configMercadoPago');
const { Preference } = require('mercadopago');

const createPreference = async (products) => {
  const items = products.map(product => ({
    title: product.title,
    quantity: product.quantity,
    unit_price: product.unit_price,
    currency_id: 'MXN',
  }));

  const preference = {
    items,
    back_urls: {
      success: 'http://localhost:4000/exito',
      failure: 'http://localhost:4000/fallo',
      pending: 'http://localhost:4000/pendiente',
    },
    auto_return: 'approved',
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

###  3. `mercadoPago.controller.js`

```js
const createPreference = require('../../util/createPreference');

const createPreferenceHandler = async (req, res) => {
  try {
    const products = req.body.products;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: 'Productos inválidos' });
    }

    const preference = await createPreference(products);
    res.status(200).json({
      id: preference.id,
      init_point: preference.init_point
    });
  } catch (error) {
    console.error('Error al crear preferencia:', error);
    res.status(500).json({ error: 'Error interno al generar la preferencia' });
  }
};

module.exports = { createPreferenceHandler };
```

 **Explicación**:
- Controlador que crea la preferencia con los productos recibidos.
- Devuelve el `init_point` para usar en el frontend.

---

###  4. `mercadoPago.routes.js`

```js
const express = require('express');
const router = express.Router();
const { createPreferenceHandler } = require('../Controllers/mercadoPago.controller');

router.post('/create_preference', createPreferenceHandler);

module.exports = router;
```

 **Explicación**:
- Define la ruta POST para crear la preferencia.
- Conectada al controlador explicado arriba.

---

##  Frontend

###  5. `BotonPago.jsx`

```jsx
import { useState } from 'react';
import { Wallet } from '@mercadopago/sdk-react';
import Button from '@mui/material/Button';

function BotonPago() {
  const [preferenceId, setPreferenceId] = useState(null);

  const crearPreferencia = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/mercadoPago/create_preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY
        },
        body: JSON.stringify({
          products: [
            {
              title: 'Producto de prueba',
              quantity: 1,
              unit_price: 1000
            }
          ]
        })
      });

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
      <Button variant="contained" color="primary" onClick={crearPreferencia}>
        Pagar con Mercado Pago
      </Button>
      {preferenceId && (
        <div style={{ marginTop: '20px' }}>
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

##  Resultado

- El usuario hace clic en “Pagar con Mercado Pago”.
- Se abre el checkout.
- Luego del pago, es redirigido según el estado (`success`, `failure`, `pending`).


---


### Autores

| Nombre           | Rol   |
| ---------------- | ----- |
| Diego Alfaro     | Autor |
| Arturo Sánchez | Autor |

**Última actualización por:** Arturo Sánchez, 4 de abril del 2025

---