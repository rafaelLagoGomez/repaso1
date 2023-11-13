
// ****RETOS CONDICIONALES****

//  2. Realizar una función que dada una fecha de nacimiento te devuelva 
// el signo zodiacal. La fecha de nacimiento vendrá indicada por 
// dos números : dia y mes. La cabecera de la función tendrá el 
// siguiente aspecto : function zodiac (day, month)

function zodiac(day:number, month:number) {
    if (day > 31 || month > 12 || (month === 2  && day > 29) || (month === 4  && day > 30) || (month === 6  && day > 30) || (month === 9  && day > 30) || (month === 11  && day > 30)) {
        return "La fecha no es válida";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Tú signo del zodiaco es Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Tú signo del zodiaco es Tauro";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Tú signo del zodiaco es Géminis";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Tú signo del zodiaco es Cáncer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Tú signo del zodiaco es Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Tú signo del zodiaco es Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Tú signo del zodiaco es Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Tú signo del zodiaco es Escorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Tú signo del zodiaco es Sagitario";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Tú signo del zodiaco es Capricornio";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Tú signo del zodiaco es Acuario";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Tú signo del zodiaco es Piscis";
    } else {
        return "La fecha no es válida";
    }
}

console.log(zodiac(27,10));
console.log(zodiac(5,5));
console.log(zodiac(22,12));
console.log(zodiac(35,11));
console.log(zodiac(31,4));
console.log(zodiac(31,9));
console.log(zodiac(30,9));
console.log(zodiac(30,2));



// 3. Realizar un procedimiento que dado el nombre de un país te imprima 
// en que continente estás . (Max 5 países por continente)
// La cabecera del procedimiento tendrá el siguiente aspecto : 
// function continent(country)

function continent(country: string) {
    if (country === "Nigeria" || country === "Egipto" || country === "Senegal" || country === "Kenya" || country === "Mali") {
        return "Estás en Africa";
    } else if (country === "China" || country === "India" || country === "Japón" || country === "Vietnam" || country === "Taiwan") {
        return "Estás en Asia";
    } else if (country === "España" || country === "Francia" || country === "Alemania" || country === "Irlanda" || country === "Polonia") {
        return "Estás en Europa";
    } else if (country === "Argentina" || country === "Colombia" || country === "Perú" || country === "Brasil" || country === "Chile") {
        return "Estás en America del sur";
    } else if (country === "Estados Unidos" || country === "Canada" || country === "México" || country === "Jamaica" || country === "Cuba") {
        return "Estás en America del norte";
    } else {
        return "País incorrecto";
    }
}

console.log(continent("Egipto"));
console.log(continent("Japón"));
console.log(continent("Alemania"));
console.log(continent("Colombia"));
console.log(continent("México"));
console.log(continent("Marte"));



// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de 
// entrada es par.
// - “El numero es impar”, si el numero introducido como parámetro de 
// entrada es impar.
// La cabecera de la función tendrá el siguiente aspecto: 
// function isEven (number)

export function isEven(number: number) {
    if (number % 2 === 0) {
        return `El número ${number} es par`;
    } else {
        return `El número ${number} es impar`;
    } 
}

console.log(isEven(4651));
console.log(isEven(268));