//Ejercicio1
let figura = prompt("El radio de que figura desea calcular");
let circulo = "circulo";
switch(figura){
    case "circulo":
        let radio = parseInt(prompt("Introduce el radio del circulo"))
        let resultadoCirculo = ((radio**2)*3.14)
        console.log("El area del circulo es " + resultadoCirculo)
    break;
    case "triangulo":
        let base = parseInt(prompt("Introduce la base del triangulo"))
        let altura = parseInt(prompt("Introduce la altura del triangulo"))
        resultadoTriangulo = (base * altura) / 2;
        console.log("El area del triangulo es " + resultadoTriangulo)
    break;
        case "cuadrado":
            let lado1 = parseInt(prompt("Introduce un lado del cuadrado"))
            let lado2 = parseInt(prompt("Introduce el otro lado del cuadrado"))
            resultadoCuadrado = (lado1 * lado2);
            console.log("El area del cuadrado es " + resultadoCuadrado)
    default:
        console.log("No es un figura correcta")        
}/* Alternativa al case declarando variable cuadrado triangulo y circulo
if(figura === circulo){
        let radio = parseInt(prompt("Introduce el radio del circulo"))
        let resultadoCirculo = ((radio**2)*3.14)
        console.log("El resultado del circulo es " + resultadoCirculo)
}

//Ejercicio 2
numeroMinimo = parseInt(prompt("Introduce el numero menor del margen de numeros"))
numeroMaximo = parseInt(prompt("Introduce el numero mayor del margen de numeros"))

console.log(Math.floor(Math.random() * numeroMaximo) + numeroMinimo) 
*/
//Ejercicio 3
/*
numeroPrimo = parseInt(prompt("Introduce el numero para saber si es primo"));
if( numeroPrimo == 0 || numeroPrimo == 1 || numeroPrimo == 4 || numeroPrimo %2 == 0){
    console.log(false)
}
else{
    console.log(true)
}

//Ejercicio 4
numeroFactorial = parseInt(prompt("Introduce el numero"));

for (let i = numeroFactorial - 1; i > 1; i--) {
    let resultado = numeroFactorial *= i;
    console.log(resultado)
}

//Ejercicio 5
NumeroBinario = 150;


//452

//Ejercicio 6

//numeroOrdenado = prompt("Introduce un numero")

//console.log(numeroOrdenado.length)

// Ejercicio 7

let euros = parseFloat(prompt("Introduce una cantidad de euros"));
let convertirMoneda = prompt("Introduce el tipo de moneda");

if(convertirMoneda === "libras"){
    console.log((euros * 0.86) + convertirMoneda)
}
else if(convertirMoneda === "dolares"){
    console.log((euros * 1.28611) + convertirMoneda)
}
else if(convertirMoneda === "yenes"){
    console.log((euros * 129.852) + convertirMoneda)
}
*/
//Ejercicio 8
let arrayNumeros = prompt("Inserta un numero")
let arrayVacio = []
for (let i = 1; i <= 10; i++){
    let arrayNumeros = prompt("Inserta un numero")
    arrayVacio += arrayNumeros
    let indice = arrayVacio.indexOf(arrayNumeros)
    console.log(indice)
}
console.log(arrayVacio)
console.log(arrayVacio.indexOf(arrayNumeros))