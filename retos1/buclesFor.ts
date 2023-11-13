
// ****RETOS BUCLES FOR****

// 2. Realizar una función que imprima los números impares existentes 
// hasta el número indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: 
// function evenNumbers(num)

function evenNumbers(num: number) {
    for (let i = 1; i <= num; i++) {
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

function myRevert(myArr: any[]): any[] {
    let reverseArr: any[] = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        reverseArr.push(myArr[i]) ;
    }
    return reverseArr;
}

const numberArray: number[] = [1, 2 ,3, 4, 5];
console.log(myRevert(numberArray));

const stringArray: string[] = ["Juan", "María", "Pedro"];
console.log(myRevert(stringArray));



// 4. Realizar una función que reciba como parámetro un array de 
// strings que contenga nombres de colores y te imprima en cada 
// caso si el color está en el arcoíris o no. La cabecera de la función 
// tendrá el siguiente aspecto : function isRainbow (colors)

function isRainbow(colors: string[]) {
    const rainbowColors: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];
    for (const color of colors) {
        const resultColor = color;
        if (rainbowColors.includes(resultColor)) {
            console.log (`El color ${color} está en el arcoiris`);
        } else {
            console.log (`El color ${color} no está en el arcoiris`);
        }
    }


}

const chooseColors: string[] = ["verde", "marrón", "azul"];
isRainbow(chooseColors);



// 5. Realizar una función que te devuelva la suma del numero de 
// caracteres de las palabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: 
// function add(myWords)

function add(myWords: string[]): number {
    let sumChar = 0;
    for (const word of myWords) {
        sumChar += word.length;
    }
    return sumChar;
}

const myWordsArray: string[] = ["cuéntame", "todas", "las", "letras"];
console.log(add(myWordsArray));