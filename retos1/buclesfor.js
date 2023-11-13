"use strict";
// ****RETOS BUCLES FOR****
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// 2. Realizar una función que imprima los números impares existentes 
// hasta el número indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: 
// function evenNumbers(num)
function evenNumbers(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
evenNumbers(15);
evenNumbers(12);
// 3. Realizar una función que como parámetro de entrada reciba 
// un array y como salida devuelva el array revertido . No se puede
// utilizar el método revert de la clase array. La cabecera de la función 
// tendrá el siguiente aspecto : function myRevert(myArr)
function myRevert(myArr) {
    var reverseArr = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        reverseArr.push(myArr[i]);
    }
    return reverseArr;
}
var numberArray = [1, 2, 3, 4, 5];
console.log(myRevert(numberArray));
var stringArray = ["Juan", "María", "Pedro"];
console.log(myRevert(stringArray));
// 4. Realizar una función que reciba como parámetro un array de 
// strings que contenga nombres de colores y te imprima en cada 
// caso si el color está en el arcoíris o no. La cabecera de la función 
// tendrá el siguiente aspecto : function isRainbow (colors)
function isRainbow(colors) {
    var rainbowColors = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        var resultColor = color;
        if (rainbowColors.includes(resultColor)) {
            console.log("El color ".concat(color, " est\u00E1 en el arcoiris"));
        }
        else {
            console.log("El color ".concat(color, " no est\u00E1 en el arcoiris"));
        }
    }
}
var chooseColors = ["verde", "marrón", "azul"];
isRainbow(chooseColors);
// 5. Realizar una función que te devuelva la suma del numero de 
// caracteres de las palabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: 
// function add(myWords)
function add(myWords) {
    var sumChar = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var word = myWords_1[_i];
        sumChar += word.length;
    }
    return sumChar;
}
exports.add = add;
var myWordsArray = ["cuéntame", "todas", "las", "letras"];
console.log(add(myWordsArray));
