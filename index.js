/*//Ejercicio 1
let numero = 2;
let numero2 = 3;

if(numero > numero2){
    console.log("numero es mayor que numero2")
}
else if(numero === numero2){
    console.log("Los numeros son iguales")
}
else{
    console.log("numero2 es mayor que numero")
};
//Ejercicio 2
let nombre = "Adrian";
console.log("Bienvenido " + nombre)
//Ejercicio 3
let nombreMio = prompt("Dime tu nombre");
console.log("Bienvenido " + nombre)
//Ejercicio 4
let radio = parseFloat(prompt("Indicame el radio del circulo"));

let area = 3.14 *(radio**2);
console.log(area)
//Ejercicio 5
let numeroParImpar = parseInt(prompt("Indicame el numero"));

if(numeroParImpar %2 === 0){
    console.log("El numero es par y divisible entre 2")
}
else{
    console.log("El numero no es divisible entre 2")
}
//Ejercicio 6
let PrecioIva = parseFloat(prompt("Indicame el precio del producto"));
const impuestoIva = 21;
let precioFinal = (PrecioIva * impuestoIva) / 100;
console.log(precioFinal)
//Ejericio 7
let numeroInicio = 0;
while(numeroInicio < 100){
    numeroInicio += 1;
    console.log(numeroInicio)
};
//Ejercicio 8
let numeroInicio1 = 0;
for(i=1; numeroInicio1 < 100;i++){
    numeroInicio1 += 1;
    console.log(i)
};
//Ejercicio 9
let numeroInicioP = 0;
for(i=1; numeroInicioP < 100;i++){
    numeroInicioP += 1;
    if(numeroInicioP %2 === 0 && numeroInicioP %3 === 0 )
    console.log(i)
};
//Ejercicio 10
let numeroVentas = parseInt(prompt("Indicame el numero de ventas"));
let numeroTotalVentas = 0;

for (let i = 1; i <= numeroVentas; i++) {
    numeroTotalVentas += parseInt(prompt("Indicame el valor de la venta"));
}
    console.log(numeroTotalVentas)
//Ejercicio 11
let diaSemana = prompt("Indicame el dia de la semana");

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Es un dia laborable")                      
        break;
    case "sabado":
    case "domingo":
        console.log("Es un dia festivo")
        break;    
    default:
        console.log("No es un dia de la semana")
        break;
}
//Ejercicio 12
let contraseña = "password";
let intentos =  prompt("Indicame la contraseña");

for (let i = 1; i <= 2; i++){
    if(intentos != contraseña){
        intentos = prompt("Indicame la contraseña");
    }
}
if(intentos === contraseña){
    console.log("Contraseña correcta");
}
else{
    console.log("Has excedido el numero de intentos incorrectos");
}

//Ejericio 13
let numero1Calculadora = parseInt(prompt("Inserta el primer numero"))
let numero2Calculadora = parseInt(prompt("Inserta el segundo numero"))
let operando = prompt("ingresa el operando")
let suma = numero1 += numero2Calculadora;

if(operando == "+"){
    console.log(suma)
}
if(operando == "*"){
    console.log(numero1Calculadora * numero2Calculadora)
}
if(operando == "-"){
    console.log(numero1Calculadora -numero2Calculadora)
}
if(operando == "/"){
    console.log(numero1Calculadora / numero2Calculadora)
}
*/
/*
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
*/