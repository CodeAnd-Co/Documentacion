---
title: Manual de la prueba de arquitectura TracTech
---

**Versión 1.0**

**Última modificación**: 14 de abril de 2025

---

# Manual de la prueba de arquitectura

Al probar las librerías y posibles funcionalidades que tendría el proyecto “Harvester”, decidimos dividir la prueba de arquitectura en dos; una relacionada más con el framework que es Electron y otra que añade profundidad a las funcionalidades que intentaremos implementar.

### **Electron**

**Requisitos previos:** 

- Se debe tener instalado Node.js, se recomienda el uso de su versión v20.11.1. Ya que fue en la que se construyó esta parte de la prueba.

**Tecnologías que se utilizarán:**

- Node.js.  
- ElectronJS.  
- Electrón Forge.  
- ChartJS.  
- jsPDF  
- XLSX.

**Funcionalidades que se probarán en este apartado:**

- Seleccionar un archivo Excel (.xlsx).  
- Visualizar una vista previa de los datos.  
- Generar un gráfico de barras con los datos.  
- Exportar un reporte en PDF que incluya los datos y el gráfico.

**Creación del espacio de trabajo:**

1. Muévase al directorio en el que quiere crear el proyecto, crea una carpeta y abra su terminal.  
2. Desde la terminal, ejecute el siguiente comando:

```javascript
npx create-electron-app@latest "Nombre de la aplicación"
```

3. Notará que se habrá creado un archivo: package.json.  
4. Después deberá instalar las dependencias con el siguiente comando:

```javascript
npm install chart.js
npm install XLSX
npm install jspdf
```

5. Notará que se habrá creado una carpeta llamada “node\_modules” y el contenido de “package.json” habrá sido modificado.  
6. Tendremos que entrar al archivo “package.json” y cambiar lo siguiente:

```javascript
// Antes
  "main": "src/index.js",
// Después
  "main": "./src/main.js",
```

7. Ahora, entraremos a la carpeta llamada src y creamos los archivos en los que iremos trabajando. Electron tendrá tres archivos para cubrir sus procesos:  
   1. main.js (Controla el ciclo de vida de la app y crea las ventanas.)  
   2. renderer.js (Muestra la interfaz gráfica (HTML, CSS, JS))  
   3. preload.js (Conecta el proceso principal con el renderer de forma segura.)  
8. También debemos crear los archivos relacionados a las vistas de la aplicación, en este caso son:  
   1. index.html  
   2. styles.css

**Vista principal:**  
Debido a la forma en que Electron funciona debemos crear un archivo html el cual cargaremos de manera local.  
Empezamos el html con su head y agregamos políticas de seguridad de contenido que restringen las fuentes de recursos (scripts y contenido).

```html
<!DOCTYPE html>
<html lang="es">
  <head>
	<meta charset="UTF-8">
	<!-- Política de seguridad de contenido -->
	<meta
  	http-equiv="Content-Security-Policy"
  	content="default-src 'self'; script-src 'self';">
	<meta
  	http-equiv="X-Content-Security-Policy"
  	content="default-src 'self'; script-src 'self'"
	/>
<link rel='stylesheet' href='styles.css'>
	<title>Harvester - Visualizador de Datos Excel</title>
  </head>
```

Continuamos creando el html siguiendo el uso correcto de contenedores:

```html
<body>
	<!-- Contenedor principal -->
	<div class='container'>
  		<div class='header'>
    			<h1>Harvester</h1>
    			<p>Carga un archivo Excel para generar un gráfico y exportarlo a PDF</p>
  		</div>

  		<!-- Sección de acciones -->
  		<div class="actions">
    			<button id="excelBtn" aria-label="Seleccionar archivo Excel">Seleccionar archivo Excel</button>
    			<button id="pdfBtn" disabled aria-label="Guardar como PDF">Guardar como PDF</button>
  		</div>

  		<!-- Información del archivo -->
  		<div class="file-info">
    			<p id="fileName">Ningún archivo seleccionado</p>
  		</div>
```

Solo nos falta agregar el espacio donde mostraremos nuestra gráfica:

```html
 		<!-- Contenedor para el gráfico -->
  		<div class="chart-container">
    			<canvas id="myChart" width="400" height="400" aria-label="Gráfico de datos de Excel" role="img"></canvas>
  		</div>
</div>
```

Ahora cargamos los scripts para crear la gráfica y el pdf:

```html
	<!-- Scripts externos -->
	<script src="../node_modules/jspdf/dist/jspdf.umd.min.js"></script>
	<script src="../node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.min.js"></script>
	<script src="../node_modules/chart.js/dist/chart.umd.js"></script>
```

Y finalmente, el script correspondiente al renderer:

```html
	<!-- Script principal -->
	<script defer src="./renderer.js"></script>
  </body>
</html>
```

**CSS para vista:**  
Para darle una mejor presentación a la aplicación le añadiremos un archivo css.

```css
/* Estilos generales */
body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
	margin: 0;
	padding: 0;
	background-color: #f5f5f5;
	color: #333;
  }
 
  .container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
  }
 
  .header {
	text-align: center;
	margin-bottom: 30px;
  }
 
  .header h1 {
	font-size: 28px;
	margin-bottom: 5px;
	color: #2c3e50;
  }
 
  .header p {
	color: #7f8c8d;
	margin-top: 0;
  }
 
  /* Botones y acciones */
  .actions {
	display: flex;
	justify-content: center;
	gap: 15px;
	margin-bottom: 20px;
  }
 
  button {
	padding: 10px 20px;
	background-color: #45c456;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;
	transition: background-color 0.3s;
  }
 
  button:hover {
	background-color: #3dad4c;
  }
 
  button:disabled {
	background-color: #bdc3c7;
	cursor: not-allowed;
  }
 
  /* Información del archivo */
  .file-info {
	text-align: center;
	margin-bottom: 20px;
  }
 
  /* Estilos para la tabla de datos */
  .data-preview {
	margin: 20px 0;
	overflow-x: auto;
  }
 
  .excel-data-table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 10px;
	background-color: white;
  }
 
  .excel-data-table th, .excel-data-table td {
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
  }
 
  .excel-data-table th {
	background-color: #f2f2f2;
	font-weight: bold;
  }
 
  .excel-data-table tr:nth-child(even) {
	background-color: #f9f9f9;
  }
 
  /* Contenedor del gráfico */
  .chart-container {
	width: 100%;
	height: 400px;
	margin: 20px 0;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.1);
	padding: 15px;
  }
```

**Componente main.js de Electron:**  
Ya que tenemos una vista que enseñarle al usuario vamos a cargarla en una aplicación de Electron, para esto necesitamos entrar al archivo main.js.  
Aquí lo que estamos haciendo es definir importaciones y dependencias de las cuales destacan:

- electron/main: Nos proporciona componentes fundamentales de Electron para crear ventanas y gestionar el ciclo de vida de la aplicación.  
- xlsx: la biblioteca que vamos a usar para procesar archivos de Excel.

```javascript
/**
 * Módulo principal de la aplicación Electron
 * Maneja la creación de ventanas, la comunicación con el sistema de archivos
 * y la interacción con los procesos de renderizado
 */
const { app, BrowserWindow, ipcMain, dialog } = require('electron/main');
const path = require('node:path');
const XLSX = require('xlsx');
const fs = require('fs');
```

**Creación de ventana:**

- Definimos el tamaño de la ventana  
- Configuramos la seguridad  
- Establecemos el preload para las APIs  
- Inicializamos el sistema de comunicación entre procesos (IPC)  
- Cargamos la vista en la ventana

```javascript
/**
 * Crea la ventana principal de la aplicación
 */
function crearVentanaPrincipal() {
  // Configuración de la ventana principal
  const ventanaPrincipal = new BrowserWindow({
	width: 900,
	height: 700,
	webPreferences: {
  	preload: path.join(__dirname, 'preload.js'),
  	nodeIntegration: false,
  	contextIsolation: true
	}
  });
 
  // Configurar manejadores de eventos IPC
  configurarEventosIPC(ventanaPrincipal);

  // Cargar el archivo HTML de la aplicación
  ventanaPrincipal.loadFile('./src/index.html');
}
```

**Sistema de comunicación entre procesos (IPC):**  
Para entender mejor qué es el IPC, recomiendo la siguiente [lectura](https://www.electronjs.org/docs/latest/tutorial/ipc).  
Aquí se establece la comunicación entre el main.js y renderer.js para los siguientes eventos:

- abrir-dialogo-archivo: (Muestra diálogo para seleccionar archivos Excel)  
- dialogo-guardar-pdf: (Gestiona la ruta para guardar un PDF)  
- escribir-archivo-pdf: (Escribe datos binarios en un archivo PDF)  
- mostrar-error: (Muestra mensajes de error al usuario)

```javascript
/**
 * Configura los manejadores de eventos para la comunicación entre procesos
 */
function configurarEventosIPC(ventana) {
  // Evento para abrir diálogo de selección de archivo Excel
  ipcMain.on('abrir-dialogo-archivo', () => {
	manejarSeleccionArchivo(ventana);
  });

  // Evento para abrir diálogo de guardado de PDF
  ipcMain.on('dialogo-guardar-pdf', async (event) => {
	manejarGuardadoPDF(event, ventana);
  });
 
  // Evento para escribir el archivo PDF en el sistema
  ipcMain.on('escribir-archivo-pdf', (event, rutaArchivo, datoBuffer) => {
	guardarArchivoPDF(rutaArchivo, datoBuffer, ventana);
  });
 
  // Evento para mostrar mensajes de error
  ipcMain.on('mostrar-error', (event, mensaje) => {
	mostrarVentanaError(mensaje, ventana);
  });
}
```

**Manejo de archivos Excel**  
Aquí gestionamos todo lo relacionado con archivos Excel:

- Mostramos el diálogo para seleccionar archivos (limitado a solo .xlsx)  
- Procesa el archivo seleccionado obteniendo nombre y ruta.  
- Convierte los datos a un formato utilizable para la aplicación.

```javascript
/**
 * Maneja el proceso de selección de archivo Excel
 */
function manejarSeleccionArchivo(ventana) {
  dialog.showOpenDialog(ventana, {
	properties: ['openFile'],
	filters: [
  	{name: 'Archivos de Excel', extensions: ['xlsx']}
	],
  }).then(resultado => {
	if (!resultado.canceled && resultado.filePaths.length > 0) {
  	const rutaArchivo = resultado.filePaths[0];
  	const nombreArchivo = path.basename(rutaArchivo);
 	 
  	try {
    	const datos = leerArchivoExcel(rutaArchivo);
   	 
    	// Validar que se obtuvieron datos correctamente
    	if (!datos || !Array.isArray(datos)) {
      	throw new Error('No se pudieron leer datos válidos del archivo');
    	}
   	 
    	ventana.webContents.send('archivo-seleccionado', {
      	nombreArchivo: nombreArchivo,
      	datos: datos,
    	});
    	console.log('Datos leídos del archivo Excel:', datos.length, 'filas');
  	} catch (error) {
    	console.error('Error procesando el archivo Excel:', error);
    	mostrarVentanaError(`Error al procesar el archivo: ${error.message}`, ventana);
  	}
	}
  }).catch(err => {
	console.error('Error al seleccionar archivo:', err);
	mostrarVentanaError(`Error al seleccionar archivo: ${err.message}`, ventana);
  });
}

/**
 * Lee un archivo Excel y lo convierte a un array bidimensional
 */
function leerArchivoExcel(rutaArchivo) {
  try {
	console.log('Leyendo archivo Excel...', rutaArchivo);
    
	// Validar que el archivo existe
	if (!fs.existsSync(rutaArchivo)) {
  	throw new Error('El archivo no existe');
	}
    
	// Leer el archivo
	const libro = XLSX.readFile(rutaArchivo);
    
	// Verificar que tenga al menos una hoja
	if (!libro.SheetNames || libro.SheetNames.length === 0) {
  	throw new Error('El archivo Excel no contiene hojas');
	}
    
	// Convertir la primera hoja a un array bidimensional
	const nombreHoja = libro.SheetNames[0];
	const hoja = libro.Sheets[nombreHoja];
	const datos = XLSX.utils.sheet_to_json(hoja, { header: 1 });
    
	// Validar que hay datos
	if (!datos || datos.length === 0) {
  	throw new Error('No se encontraron datos en el archivo Excel');
	}
    
	return datos;
  } catch (err) {
	console.error('Error al leer archivo Excel:', err);
	throw err;
  }
}
```

**Creación de PDF:**  
A través de este componente manejamos la creación y guardado de PDFs:

- Mostramos un diálogo para seleccionar ubicación de guardado  
- Guardar los datos como pdf

```javascript
/**
 * Maneja el proceso de guardado de PDF
 */
async function manejarGuardadoPDF(event, ventana) {
  try {
	const resultado = await dialog.showSaveDialog(ventana, {
  	defaultPath: 'reporte.pdf',
  	filters: [{ name: 'PDF', extensions: ['pdf'] }]
	});
    
	if (!resultado.canceled) {
  	event.reply('ruta-guardar-pdf', resultado.filePath);
	} else {
  	event.reply('ruta-guardar-pdf', null);
	}
  } catch (error) {
	console.error('Error al abrir el diálogo de guardar:', error);
	event.reply('ruta-guardar-pdf', null);
	mostrarVentanaError(`Error al abrir el diálogo para guardar: ${error.message}`, ventana);
  }
}

/**
 * Guarda el archivo PDF en el sistema
 */
function guardarArchivoPDF(rutaArchivo, datoBuffer, ventana) {
  try {
	// Convertir los datos recibidos a Buffer
	const buffer = Buffer.from(datoBuffer);
    
	// Validar la ruta del archivo
	if (!rutaArchivo || typeof rutaArchivo !== 'string') {
  	throw new Error('Ruta de archivo inválida');
	}
    
	// Escribir el archivo
	fs.writeFileSync(rutaArchivo, buffer);
    
	// Mostrar mensaje de éxito
	dialog.showMessageBox(ventana, {
  	type: 'info',
  	title: 'PDF Guardado',
  	message: 'El PDF se ha guardado correctamente',
  	buttons: ['OK']
	});
  } catch (error) {
	console.error('Error al guardar el PDF:', error);
	mostrarVentanaError(`No se pudo guardar el PDF: ${error.message}`, ventana);
  }
}
```

**Gestión de errores:**  
Proporcionamos una ventana consistente para mostrar errores al usuario.

```javascript
/**
 * Muestra una ventana de error
 */
function mostrarVentanaError(mensaje, ventana) {
  dialog.showErrorBox('Error', mensaje);
}
```

**Ciclo de vida de la aplicación:**  
En este componente manejamos la inicialización y cierre de la aplicación.

```javascript
// Iniciar la aplicación cuando Electron esté listo
app.whenReady().then(() => {
  crearVentanaPrincipal();

  // En macOS, recrear la ventana cuando se haga clic en el icono del dock
  app.on('activate', function () {
	if (BrowserWindow.getAllWindows().length === 0) {
  	crearVentanaPrincipal();
	}
  });
});

// Cerrar la aplicación cuando todas las ventanas estén cerradas (excepto en macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
	app.quit();
  }
});
```

**Componente de renderizado de Electron:**  
**Declaración de referencias al DOM y variables globales**  
Para empezar inicializamos:

- Referencias a elementos clave de la vista mediante el dOM  
- Variables globales para mantener estado de la aplicación

```javascript
/**
 * Script del proceso de renderizado
 * Maneja la interfaz de usuario y la interacción con los archivos Excel y PDF
 */

// Elementos DOM
const botonSubirExcel = document.getElementById('excelBtn');
const elementoNombreArchivo = document.getElementById('fileName');
const botonPDF = document.getElementById('pdfBtn');

// Variables globales
let grafico = null;
let datosExcel = null;
```

**Validación de dependencias**  
Esta función verifica que las bibliotecas necesarias estén disponibles antes de intentar usarlas

```javascript
/**
 * Valida que las librerías necesarias estén disponibles
 */
function validarDependencias() {
  const dependencias = [
	{ nombre: 'Chart.js', objeto: typeof Chart, mensaje: 'Chart.js no está cargado correctamente' },
	{ nombre: 'jsPDF', objeto: typeof window.jspdf !== 'undefined' || typeof window.jsPDF !== 'undefined',
  	mensaje: 'jsPDF no está cargado correctamente' }
  ];

  dependencias.forEach(dep => {
	if (!dep.objeto) {
  	console.error(dep.mensaje);
  	window.electronAPI.mostrarError(dep.mensaje);
	} else {
  	console.log(`${dep.nombre} cargado correctamente`);
	}
  });
}
```

**Visualización de datos**  
Este componente genera una vista previa de los datos del Excel:

- Limpia cualquier vista previa existente para evitar duplicados  
- Crea una tabla HTML dinámica

```javascript
/**
 * Muestra una vista previa de los datos cargados
 */
function mostrarVistaPrevia(datos) {
  if (!datos || datos.length === 0) {
	console.warn('No hay datos para mostrar');
	return;
  }

  // Eliminar vista previa anterior si existe
  const vistaExistente = document.getElementById('dataPreview');
  if (vistaExistente) {
	vistaExistente.remove();
  }

  const contenedorVista = document.createElement('div');
  contenedorVista.id = 'dataPreview';
  contenedorVista.className = 'data-preview';

  const tabla = document.createElement('table');
  tabla.className = 'excel-data-table';

  // Límites para la vista previa
  const maxFilas = Math.min(10, datos.length);
  const maxColumnas = datos[0] ? Math.min(5, datos[0].length) : 0;

  // Crear filas y celdas
  for (let i = 0; i < maxFilas; i++) {
	const fila = document.createElement('tr');
    
	for (let j = 0; j < maxColumnas; j++) {
  	const celda = i === 0 ? document.createElement('th') : document.createElement('td');
 	 
  	// Validar que el dato exista antes de asignarlo
  	if (datos[i] && datos[i][j] !== undefined) {
    	celda.textContent = datos[i][j];
  	} else {
    	celda.textContent = '';
  	}
 	 
  	fila.appendChild(celda);
	}
    
	tabla.appendChild(fila);
  }

  // Información del archivo
  const textoInfo = document.createElement('p');
  textoInfo.textContent = `Archivo completo: ${datos.length} filas, ${datos[0] ? datos[0].length : 0} columnas`;

  contenedorVista.appendChild(textoInfo);
  contenedorVista.appendChild(tabla);

  elementoNombreArchivo.parentNode.appendChild(contenedorVista);
}
```

**Visualización de gráficos**  
Este módulo crea la gráfica de los datos usando Chart.js:

- Implementamos múltiples validaciones para garantizar que:  
  - Los datos existan y tengan formato correcto  
  - El elemento canvas esté disponible  
- Extrae los datos  
- Configura un gráfico de barras

```javascript
/**
 * Crea un gráfico con los datos cargados
 */
function crearGrafico(datos) {
  console.log('Creando gráfico con los datos cargados');

  // Validaciones previas
  if (!datos || !datos.length) {
	console.error('No hay datos para crear el gráfico');
	window.electronAPI.mostrarError('El archivo no contiene datos válidos');
	return;
  }

  const canvas = document.getElementById('myChart');
  if (!canvas) {
	console.error('No se encuentra el elemento canvas con id "myChart"');
	return;
  }

  if (typeof Chart === 'undefined') {
	console.error('Chart.js no está disponible');
	return;
  }

  // Destruir gráfico existente si hay uno
  if (grafico) {
	grafico.destroy();
  }
 
  try {
	const ctx = canvas.getContext('2d');
	if (!ctx) {
  	console.error('No se puede obtener el contexto 2d del canvas');
  	return;
	}
    
	// Validar estructura de datos
	if (!datos[0] || datos[0].length < 2) {
  	console.error('Los datos no tienen el formato esperado (se requieren al menos 2 columnas)');
  	window.electronAPI.mostrarError('El formato de los datos no es compatible con el gráfico');
  	return;
	}
    
	const encabezados = datos[0];
	const datosGrafico = datos.slice(1);

	// Validar que existan datos además de los encabezados
	if (datosGrafico.length === 0) {
  	console.error('No hay datos para graficar más allá de los encabezados');
  	window.electronAPI.mostrarError('El archivo no contiene datos para graficar');
  	return;
	}

	const etiquetas = datosGrafico.map(fila => fila[1]);
	const valores = datosGrafico.map(fila => {
  	// Asegurar que los valores sean numéricos
  	const valor = parseFloat(fila[0]);
  	return isNaN(valor) ? 0 : valor;
	});
    
	grafico = new Chart(ctx, {
  	type: 'bar',
  	data: {
    	labels: etiquetas,
    	datasets: [{
      	label: encabezados[0],
      	data: valores,
      	backgroundColor: 'rgba(54, 162, 235, 0.6)',
      	borderColor: 'rgba(54, 162, 235, 1)',
      	borderWidth: 1
    	}]
  	},
  	options: {
    	responsive: true,
    	maintainAspectRatio: false,
    	scales: {
      	y: {
        	beginAtZero: true,
        	title: {
          	display: true,
          	text: encabezados[0]
        	}
      	},
      	x: {
        	title: {
          	display: true,
          	text: encabezados[1]
        	}
      	}
    	},
    	plugins: {
      	title: {
        	display: true,
        	text: `${encabezados[0]} por ${encabezados[1]}`
      	}
    	}
  	}
	});
    
	console.log('Gráfico creado correctamente');
  } catch (error) {
	console.error('Error al crear el gráfico:', error);
	window.electronAPI.mostrarError(`Error al crear el gráfico: ${error.message}`);
  }
}
```

**Generación del PDF**  
Este componente genera reportes en formato PDF usando jsPDF:

- Gestiona compatibilidad con distintas formas de importar jsPDF  
- Crea una tabla formateada con los datos del Excel mediante autoTable  
- Agrega una segunda página con el gráfico  
- Convierte el gráfico a imagen PNG para incluirlo en el PDF  
- Utiliza API de Electron para solicitar la ruta de guardado  
- Implementa FileReader para convertir el PDF a un formato compatible con el sistema de archivos

```javascript
/**
 * Genera un PDF con los datos y el gráfico
 */
function generarPDF(datos) {
  try {
	// Obtener la clase jsPDF
	const jsPDFClass = window.jspdf?.jsPDF || window.jsPDF;
	if (!jsPDFClass) {
  	console.error('jsPDF no está disponible');
  	window.electronAPI.mostrarError('jsPDF no está disponible. Verifica la instalación.');
  	return;
	}
    
	// Crear documento PDF
	const doc = new jsPDFClass({
  	orientation: 'landscape',
  	unit: 'mm',
  	format: 'a4'
	});
    
	// Añadir encabezado
	doc.setFontSize(16);
	doc.text("Reporte de Datos", 14, 15);
    
	// Añadir fecha
	const fechaActual = new Date().toLocaleDateString();
	doc.setFontSize(10);
	doc.text(`Fecha: ${fechaActual}`, 14, 22);
    
	// Validar datos para la tabla
	if (!datos || !datos.length || !datos[0]) {
  	window.electronAPI.mostrarError('No hay datos válidos para generar el PDF');
  	return;
	}

	const encabezados = datos[0];
	const datosTabla = datos.slice(1);

	// Generar tabla
	doc.autoTable({
  	head: [encabezados],
  	body: datosTabla,
  	startY: 30,
  	theme: 'grid',
  	styles: {
    	fontSize: 8,
    	cellPadding: 2,
    	overflow: 'linebreak',
  	},
  	headStyles: {
    	fillColor: [54, 162, 235],
    	textColor: 255
  	}
	});
    
	// Nueva página para el gráfico
	doc.addPage();

	doc.setFontSize(16);
	doc.text(`Gráfico: ${encabezados[0]} por ${encabezados[1]}`, 14, 15);

	// Obtener imagen del gráfico
	const canvas = document.getElementById('myChart');
	if (!canvas) {
  	console.error('No se encuentra el elemento canvas');
  	window.electronAPI.mostrarError('No se pudo encontrar el gráfico para incluirlo en el PDF');
  	return;
	}

	const imagenGrafico = canvas.toDataURL('image/png', 1.0);

	// Calcular dimensiones para mantener proporciones
	const anchoHoja = doc.internal.pageSize.getWidth();
	const altoHoja = doc.internal.pageSize.getHeight();
	const anchoGrafico = anchoHoja - 30;
	const altoGrafico = anchoGrafico * (canvas.height / canvas.width);

	// Añadir imagen del gráfico al PDF
	doc.addImage(imagenGrafico, 'PNG', 15, 25, anchoGrafico, altoGrafico);

	// Guardar el PDF
	window.electronAPI.guardarPDF((rutaArchivo) => {
  	if (rutaArchivo) {
    	const pdfBlob = doc.output('blob');
    	const lector = new FileReader();
    	lector.onload = () => {
      	window.electronAPI.escribirArchivoPDF(rutaArchivo, lector.result);
    	};
    	lector.readAsArrayBuffer(pdfBlob);
  	}
	});
    
  } catch (error) {
	console.error('Error al generar el PDF:', error);
	window.electronAPI.mostrarError(`Error al generar el PDF: ${error.message}`);
  }
}
```

**Gestión de eventos y comunicación con el proceso principal**  
Este módulo gestiona la interacción con el usuario y la comunicación con el proceso principal:

- Inicia la validación de dependencias cuando el DOM está listo  
- Configura eventos para los botones principales:  
  - botonSubirExcel: Solicita al proceso principal abrir el diálogo de selección de archivo  
  - botonPDF: Verifica que existan datos y gráfico antes de generar el PDF  
- Implementa un manejador para el evento enArchivoSeleccionado:  
  - Valida los datos recibidos  
  - Actualiza la interfaz de usuario  
  - Almacena los datos en la variable global

**Componente de precarga de Electron:**  
**Importaciones**  
Esta sección establece las bases del script de precarga:

- Importa los componentes necesarios de Electron:  
  - contextBridge: Mecanismo seguro para exponer APIs del proceso principal al proceso de renderizado  
  - ipcRenderer: Interfaz para comunicarse con el proceso principal desde el proceso de renderizado

```javascript
/**
 * Módulo de precarga: Establece el puente seguro entre el proceso principal y el renderizador
 * Expone funcionalidades específicas del sistema a través de contextBridge
 */
const { contextBridge, ipcRenderer } = require('electron/renderer');
```

**Exposición de la API**  
Este componente central expone una API estructurada y segura al proceso de renderizado:  
1\. Método para Selección de Archivos:

- abrirDialogoArchivo: Envía una señal al proceso principal para mostrar el diálogo de selección de archivos Excel  
- Implementación simple que solo requiere enviar una señal sin datos adicionales

2\. Suscripción a Eventos de Selección de Archivos

- enArchivoSeleccionado: Registra un callback para cuando se selecciona un archivo  
- Implementa un patrón observer para recibir notificaciones del proceso principal  
- El callback recibe los datos del archivo seleccionado (nombre y contenido)

3\. Gestión del Proceso de Guardado de PDF

- guardarPDF: Implementación más compleja que combina:  
- Un envío de mensaje para solicitar el diálogo de guardado  
- Un listener temporal (.once()) para recibir la respuesta  
- Un callback para procesar la ruta seleccionada

Utiliza once para asegurar que el manejador de eventos se elimine después de usarse una vez

4\. Escritura de Archivos PDF

- escribirArchivoPDF: Gestiona la conversión y envío de datos binarios  
- Convierte el ArrayBuffer de JavaScript (formato web) a Uint8Array (formato que se puede transferir por IPC)  
- Envía tanto la ruta como los datos al proceso principal

5\. Gestión de Errores

- mostrarError: Mecanismo simple para enviar mensajes de error al proceso principal  
- Permite centralizar la presentación de errores al usuario

```javascript
// Exposición de APIs seguras al proceso de renderizado
contextBridge.exposeInMainWorld('electronAPI', {
  /**
   * Abre el diálogo de selección de archivos Excel
   */
  abrirDialogoArchivo: () => ipcRenderer.send('abrir-dialogo-archivo'),
 
  /**
   * Escucha cuando un archivo ha sido seleccionado
   */
  enArchivoSeleccionado: (callback) =>
	ipcRenderer.on('archivo-seleccionado', (event, rutaArchivo) => callback(rutaArchivo)),
 
  /**
   * Inicia el proceso de guardado de PDF
   */
  guardarPDF: (callback) => {
	ipcRenderer.send('dialogo-guardar-pdf');
	ipcRenderer.once('ruta-guardar-pdf', (event, rutaArchivo) => callback(rutaArchivo));
  },
 
  /**
   * Guarda un archivo PDF en el sistema
   */
  escribirArchivoPDF: (rutaArchivo, arrayBuffer) => {
	const buffer = new Uint8Array(arrayBuffer);
	ipcRenderer.send('escribir-archivo-pdf', rutaArchivo, buffer);
  },
 
  /**
   * Muestra un mensaje de error al usuario
   */
  mostrarError: (mensaje) => ipcRenderer.send('mostrar-error', mensaje)
});
```

**Empaquetar la prueba de arquitectura en un ejecutable**  
Ya con la prueba de arquitectura finalizada solo resta poner el siguiente comando en la terminal para crear un ejecutable distribuible.

```shell
npm run make
```

Veremos como se empieza a construir el ejecutable y tras terminar veremos la ubicación de nuestra prueba de arquitectura en la terminal.

### **HyperFormula:**

**Requisitos previos:** 

- Se debe tener instalado Node.js, se recomienda el uso de su versión v20.11.1. Ya que fue en la que se construyó esta parte de la prueba.

**Tecnologías que se utilizarán:**

- Node.JS.  
- Express (Node.js).  
- HyperFormula.  
- XLSX.

**Funcionalidades que se probarán en este apartado:**

- Carga de hojas de cálculo.  
- Aplicación de fórmulas.  
- Edición de hojas de cálculo.  
- Creación de fórmulas.

**Creación del espacio de trabajo:**

1. Muévase al directorio en el que quiere crear el proyecto, crea una carpeta y abra su terminal.  
2. Desde la terminal, ejecute el siguiente comando:

```javascript
npm init
```

3. Deberá seguir los pasos que se muestran en la terminal.  
4. Al finalizar notará que se habrá creado un archivo: package.json.  
5. Después deberá instalar las dependencias con el siguiente comando:

```javascript
npm install express
npm install XLSX
npm install HyperFormula
```

6. Notará que se habrá creado una carpeta llamada “node\_modules” y el contenido de “package.json” habrá sido modificado.  
7. Uno de los pasos que resolvió en la terminal fue: entry point: (index.js), sí modificó esa sección, crea un archivo con el nombre que le colocó, de lo contrario, crea un archivo llamado “index.js”.  
8. Se le hará referencia al archivo “index.js” como “app.js”.  
9. Dentro del archivo “app.js” debemos agregar unas líneas de código:

```javascript
// Importación de las librerías
const { HyperFormula } = require('hyperformula'); 
const XLSX = require('xlsx');
const express = require('express');
const path = require('path');
```

10. Ya estaríamos listos para iniciar el desarrollo.  
    

**Creación de fórmulas:**

1. Para la creación de fórmulas, debemos agregar algunas líneas en “app.js”

```javascript
// Lógica de express para ejecutar la página web
const app = express();
const PORT = 3000;
app.use(express.static(__dirname));
app.get('/', (req, res) => {	   // aquí especificamos que archivo
					   // abrirá la raíz de la página
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```

Esto nos permitirá abrir nuestro puerto para la ejecución de la página web.

2. Debemos agregar el archivo “index.html”, así como llenarlo de contenido:

```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generador de Fórmulas</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    label, select, input { display: block; margin-top: 10px; }
    .resultado { margin-top: 20px; padding: 10px; background: #f2f2f2; border-radius: 5px; }
  </style>
</head>
<body>
  <h2>Generador de Fórmulas con HyperFormula</h2>
<!-- Dropdown de operaciones disponibles-->
  <label>Operación:
    <select id="operacion">
      <option value="SUM">Sumar</option>
      <option value="AVERAGE">Promediar</option>
      <option value="COUNT">Contar valores</option>
    </select>
  </label>
<!--Input de las celdas a considerar en la fórmula-->
  <label>Celdas (separadas por coma, ej. A1,A2,A3. O columnas enteras, ej. [@Combustible]):
    <input type="text" id="celdas" placeholder="A1,A2,A3">
  </label>
<!-- Dropdown de comparadores disponibles-->
  <label>Comparación:
    <select id="comparador">
      <option value=">">Mayor que</option>
      <option value="<">Menor que</option>
      <option value=">=">Mayor o igual que</option>
      <option value="<=">Menor o igual que</option>
      <option value="=">Igual a</option>
    </select>
  </label>
<!--Input del valor de comparación-->
  <label>Valor de comparación:
    <input type="number" id="valorComparacion" placeholder="10">
  </label>
<!--Input del texto a mostrar si se cumple la condición-->
  <label>Texto si se cumple:
    <input type="text" id="verdadero" placeholder="Aprobado">
  </label>
<!-- Input del texto a mostrar si NO se cumple la condición-->
  <label>Texto si no se cumple:
    <input type="text" id="falso" placeholder="Revisar">
  </label>

<!-- Botón para generar la fórmula -->
  <button onclick="generarFormula()">Generar fórmula</button>

  <div class="resultado" id="resultado"></div>
<!-- Script para generar la fórmula -->
  <script>
    function generarFormula() {
      const operacion = document.getElementById("operacion").value;
      const celdas = document.getElementById("celdas").value;
      const comparador = document.getElementById("comparador").value;
      const valor = document.getElementById("valorComparacion").value;
      const verdadero = document.getElementById("verdadero").value;
      const falso = document.getElementById("falso").value;
      // Concatenación de los valores para crear la fórmula
      // Se utiliza la función IF para evaluar la condición y devolver el texto correspondiente
      const formula = `=IF(${operacion}(${celdas})${comparador}${valor},"${verdadero}","${falso}")`;
      // Se muestra la fórmula generada en el div de resultado
      document.getElementById("resultado").innerText = `Fórmula generada:\n${formula}`;
    }
  </script>
</body>
</html>
```

3. Después de agregar el archivo y su contenido, podemos ejecutarlo con el siguiente comando:

En la terminal ejecutar este comando

```
node app.js
```

4. Entrar a tu navegador preferido y poner en el buscador: [http://localhost:3000/](http://localhost:3000/)  
5. Llenar los campos de la página web.  
6. Después de eso se debió haber generado la fórmula.

**Carga de hojas de cálculo:**

1. Para implementar esta funcionalidad debemos agregar algunas líneas al archivo “app.js”

```javascript
// Funcion para leer el archivo Excel
function readExcelFile(filePath) {
    try {
        // Read the workbook
        console.log('Reading Excel file...', filePath);
        const workbook = XLSX.readFile(filePath);
        
        // Converción de Excel a un arreglo
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Encabezados esperados
        const expectedHeaders = ['Vehiculo', 'Fecha', 'Hora', 'Velocidad', 'Estatus', 'Lts', 'ADC', 'Bat(V)', 'Evento', 'GPS', 'Punto de Interes', 'Comentarios'];
        
        // Checar la primera fila de datos
        const headers = data[0] || [];
        
        // Verificación de encabezados (Que cumpla con los encabezados esperados)
        if (!arraysEqual(headers, expectedHeaders)) {
            console.error('¡ALERTA! Los encabezados del archivo no coinciden con el formato esperado.');
            console.error('Encabezados esperados:', expectedHeaders.join(', '));
            console.error('Encabezados encontrados:', headers.join(', '));
            
            // Error para detener la ejecución si los encabezados no coinciden
            // throw new Error('Validación de formato no exitosa');
        }
        

        // Instanciamiento de HyperFormula.
        // Se le pasa el arreglo de datos para que los procese HyperFormula
        // Intenté usar la función buildfromSheets, pero no funcionó.
        const hfInstance = HyperFormula.buildFromArray(data, options);

        // Ejemplo para obtener el valor de una celda
        // Aquí se puede cambiar la celda a la que se quiere acceder, incluso puede ser una celda que contenga una fórmula 
        // (Regresa el resultado de la fórmula).
        const value = hfInstance.getCellValue({ row: 0, col: 1, sheet: 0 });
        console.log('Cell value:', value);
        return data;

    } catch (err) {
        console.error('Error de lectura: ', err);
    }
}

// Función para la comparación de encabezados, compara dos arreglos y regresa true si son iguales
// y false si no lo son.
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

```

2. Ahora solo habría que mandarla a llamar, pero quiero hacer una nota.   
   En este paso también se verifican las columnas esperadas del documento a comparar.   
3. Para llamarla solo debes ejecutar la siguiente línea de código:

```javascript
const data = readExcelFile('test.xlsx');
```

4. A partir de ahí ya puedes generar cosas más complejas con Hyperformula.

**Aplicación de fórmulas y edición de archivos:**

1. Para aplicar una fórmula debimos haber desarrollado una forma para leer un archivo. Aunque es posible NO utilizar un archivo, definitivamente se vuelve inútil.  
2. Lo primero que uno debe hacer es crear una instancia de Hyperformula, así dandote la libertad de utilizar todas las funciones que tiene. Para hacerlo agregaremos algunas líneas a app.js:

```javascript
const data = readExcelFile('test.xlsx');
// Código nuevo
const options = {
    licenseKey: 'gpl-v3' // Licencia gratis
}

const Prueba = HyperFormula.buildFromArray(data, options);
```

3. Es altamente recomendable crear una variable “opciones”, para reducir la basura dentro de la llamada de Hyperformula.  
4. En el bloque anterior definimos nuestra instancia de HF (HyperFormula) dentro de la variable Prueba con los datos que leemos del archivo test.xlsx y según las opciones que definimos, en este caso la licencia gratuita de la librería.  
5. Aplicar una fórmula puede ser fácil y difícil, ya que la fórmula debe estar presente en el documento, es decir, las fórmulas deben ya estar ingresadas para que regrese un valor, por ejemplo:

```javascript
const n1 = 10;
const tableData = [['10', '20', '=SUM(' +n1+',B1)', '40'], ['50', '60', '70', '80']];
// Instanciamiento de HyperFormula.
// Se le pasa el arreglo de datos para que los procese HyperFormula
const Prueba = HyperFormula.buildFromArray(tableData, options);
// Importante, debes especificar todo, incluso la hoja, si no lo haces, lanza un error. 
// Expected value of type: SimpleCellAddress for config parameter: cellAddress
console.log(Prueba.getCellValue({ row: 0, col: 2, sheet:0 })); // 20 + 10 = 30, aquí ejecuta la fórmula, no regresa el string

```

Como se puede observar, nuestro arreglo “TableData” tiene en él una fórmula básica, que al utilizar la función “getCellValue” regresa el valor.

6. Es por esto que uno requiere de la edición del propio archivo, aunque HF se encarga de las partes complicadas, ya que puedes utilizar la función “setCellContents” en la que especificas, fila, columna y hoja del archivo para ingresar cualquier carácter o cadena de ellos.

```javascript
Prueba.setCellContents({ row: 0, col: 0, sheet:0 }, [['10', '20', '=SUM(' +n1+',B1)', '40'], ['50', '60', '70', '80']]);
```

7. Finalmente, podemos guardar la hoja de cálculo con la siguiente función:

```javascript
function saveExcelFile(hfInstance, filePath) {
    try {
        const workbook = XLSX.utils.book_new(); // Crear un nuevo libro de trabajo

        // Iterar sobre todas las hojas de HyperFormula
        hfInstance.getSheetNames().forEach((sheetName, index) => {
            const sheetData = hfInstance.getSheetValues(index); // Obtener los valores de la hoja
            const worksheet = XLSX.utils.aoa_to_sheet(sheetData); // Convertir a formato de hoja de XLSX
            XLSX.utils.book_append_sheet(workbook, worksheet, sheetName); // Agregar la hoja al libro
        });

        // Escribir el libro en un archivo
        XLSX.writeFile(workbook, filePath);
        console.log(`Archivo guardado exitosamente en: ${filePath}`);
    } catch (err) {
        console.error('Error al guardar el archivo Excel:', err);
    }
}
// Guardar Excel de la instancia Prueba en el archivo resultado.xlsx
saveExcelFile(Prueba, 'resultado.xlsx');
```

| Tipo de Versión | Descripción | Fecha | Colaborador |
| ----- | ----- | ----- | ----- |
| 1.0 | Se creó la documentación | 14/04/2025 | Juan Pablo Chávez Leal Daniel Queijeiro Albo |

