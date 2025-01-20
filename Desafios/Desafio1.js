// Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludarMundo() {
    console.log("¡Hola, mundo!");
}

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function obtenerDoble(numero) {
    return numero * 2;
}

// Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorDeDosNumeros(Valor1, Valor2) {
    return Math.max(Valor1, Valor2);
}

let Valor1 = parseInt(prompt('Ingresa el primer valor: '));
let Valor2 = parseInt(prompt('Ingresa el segundo valor: '));

console.log(`El mayor es: ${mayorDeDosNumeros(Valor1, Valor2)}`);

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function calcularCuadrado(numero) {
    return numero * numero;
}