
// Invocando a la función isEven y a la función add creadas en los 
// retos anteriores indicar si es par o impar la suma de los caracteres 
// de cada uno de los siguientes arrays:
// • [“Casa”, “Coche”, “Ciudad”, “Cesta”]
// • [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
// • [“Venezuela”, “Veneno”, “Voltaje”]
// Para ello tendrás que exportar dichas funciones en los ficheros 
// correspondientes. También tendrás que importar dichos ficheros en
// el fichero actual.


import { isEven } from "./condicionales"
import { add } from "./buclesFor"

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"];
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let sumaArray1: number = add(array1);
let sumaArray2: number = add(array2);
let sumaArray3: number = add(array3);

let isEvenSumaArray1: string = isEven(sumaArray1);
let isEvenSumaArray2: string = isEven(sumaArray2);
let isEvenSumaArray3: string = isEven(sumaArray3);

console.log(isEvenSumaArray1);
console.log(isEvenSumaArray2);
console.log(isEvenSumaArray3);
