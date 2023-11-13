// ****RETOS BUCLES WHILE****

// 2. Realizar una función que te devuelva si existe un numero par
// en el array de números que introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: 
// function hasEven myNums

function hasEven(myNums: number[]) {
    let i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            console.log(true);
        }
        i++;
    }
    console.log(false);
}

const numbsArray: number[] = [155, 45, 1 ,59];
hasEven(numbsArray);

const numbsArray2: number[] = [160, 45, 1 ,59];
hasEven(numbsArray);



// 3. Realizar una función que reciba un array de nombres y te 
// devuelva verdadero si y solo si todos los nombres empiezan por M
// La cabecera de la función tendrá el siguiente aspecto: 
// function startWithM(myNames)

function startWithM(myNames: string[]) {
    let i = 0;
    while (i < myNames.length) {
        if (!myNames[i].startsWith("M")) {
            console.log(false);
        }
        i++;
    }
    console.log(true);
}

const namesArray1: string[] = ["Manolo", "Fátima", "Luis"];
startWithM(namesArray1);

const namesArray2: string[] = ["Manolo", "Marta", "Miguel"];
startWithM(namesArray1);