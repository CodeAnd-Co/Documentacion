---
title: Registro de decisiones arquitectónicas HyperFormula & SheetJS
---

# Registro de decisiones arquitectónicas - HyperFormula & SheetJS

---
### Seleccionar que tecnología vamos a usar para la implementación de fórmulas.
Status: Aceptado  
Encargados: Juan Pablo Chávez Leal  
Fecha: s.f.

### Contexto y problema
***Una breve explicación acerca del problema a resolver***  
Para manejar el uso de fórmulas de Excel dentro de una aplicación de escritorio, debemos seleccionar algun tecnología que permita eso, ya que las fórmulas tienen una nomenclatura muy diferente a cualquiera de JS.

### Impulsores de decisiones
***Lista de cosas que necesitas considerar para elegir una opción***  


### Opciones consideradas
***Lista de las opciones con una pequeña descripción***  

#### HyperFormula
HyperFormula es un framework que fue diseñado con el único enfoque de la ejecución nativa de fórmulas de Excel, soporta muchas funciones y características de Excel, haciendolo perfecto para el proyecto.

#### Proto-lenguaje
Proto-lenguaje se refiere a crear nuestro propio ejecutor de fórmulas, el equipo tenía pensado no utilizar directamente excel, sino crear algo que simulara el uso de excel y pudiera generar los resultados esperados.

#### SheetJS
SheetJS fue la primera opción que surgió, principalmente porque la mayoría de los integrantes ya la habrían utilizado, además de ser uno de los mayores frameworks para asimilar Excel, especialmente para la lectura y escritura en archivos de Excel.

### Resultado de la decisión
***Explicación acerca de cuál opción fue seleccionada***
Se seleccionó HyperFormula porque se adapta perfectamente a nuestra necesidad, aunque sí existen algunos puntos en donde puede flaquear.  


### Consecuencias positivas
***Lista de consecuencias positivas que introduce la opción seleccionada***  
- Permite ejecutar las fórmulas que ya tienen en nuestra aplicación.
- No tiene una interfaz visual, que parece negativo, pero no tenemos planeado implementar alguna.
- Tiene altas capacidades de calculo, logrando calcular hasta 120 funciones anidadas.
- Permite definir tus propias fórmulas.

### Consecuencias negativas
***Lista de consecuencias negativas que introduce la opción seleccionada***  
- No tiene integrado la persistencia de archivos.
- No maneja tablas, característica de Excel que el socio suele implementar.
- Curva de aprendizaje, puede llegar a ser confuso su uso.
### Links
***Lista de recursos relevantes para aprender de cada opción***  
[Sitio oficial deHyperFormula](https://hyperformula.handsontable.com/#what-hyperformula-can-be-used-for)
[Sitio oficial de SheetJS](https://sheetjs.com/)

---

## Historial de cambios

| **Tipo de Versión** | **Descripción** | **Fecha**  | **Colaborador** |
| ------------------- | --------------- | ---------- | --------------- |
| **1.0** | Se agregó otra decisión | 31/5/2025 | Juan Pablo Chávez Leal |