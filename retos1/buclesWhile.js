// ****RETOS BUCLES WHILE****
// 2. Realizar una función que te devuelva si existe un numero par
// en el array de números que introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: 
// function hasEven myNums
function hasEven(myNums) {
    var i = 0;
    var rest = false;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            rest = true;
            i = myNums.length;
        }
        i++;
    }
    return rest;
}
var numbsArray1 = [155, 45, 1, 59];
console.log(hasEven(numbsArray1));
var numbsArray2 = [160, 45, 1, 59];
console.log(hasEven(numbsArray2));
// 3. Realizar una función que reciba un array de nombres y te 
// devuelva verdadero si y solo si todos los nombres empiezan por M
// La cabecera de la función tendrá el siguiente aspecto: 
// function startWithM(myNames)
function startWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (!myNames[i].startsWith("M")) {
            return false;
        }
        i++;
    }
    return true;
}
var namesArray1 = ["Manolo", "Fátima", "Luis"];
console.log(startWithM(namesArray1));
var namesArray2 = ["Manolo", "Marta", "Miguel"];
console.log(startWithM(namesArray2));
