"use strict";
// Invocando a la función isEven y a la función add creadas en los 
// retos anteriores indicar si es par o impar la suma de los caracteres 
// de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros 
// correspondientes. También tendrás que importar dichos ficheros en
// el fichero actual.
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
var sumaArray1 = (0, buclesFor_1.add)(array1);
var sumaArray2 = (0, buclesFor_1.add)(array2);
var sumaArray3 = (0, buclesFor_1.add)(array3);
var isEvenSumaArray1 = (0, condicionales_1.isEven)(sumaArray1);
var isEvenSumaArray2 = (0, condicionales_1.isEven)(sumaArray2);
var isEvenSumaArray3 = (0, condicionales_1.isEven)(sumaArray3);
console.log(isEvenSumaArray1);
console.log(isEvenSumaArray2);
console.log(isEvenSumaArray3);
