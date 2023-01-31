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
}*/
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




/*//Ejericio 13
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
}*/

