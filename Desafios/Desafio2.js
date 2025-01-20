// Crea una función que calcule el índice de masa corporal (IMC) de una persona 
// a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calculcar (peso, altura){
    imc = peso / (altura ** 2);
    console.log(imc);
}

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function cal_factorial (){
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *=i;
    }
    return factorial;
}
// Crea una función que convierta un valor en dólares, pasado como parámetro, 
// y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes 
// hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares) {
    const cotizacion = 4.80; // Valor fijo del dólar
    return dolares * cotizacion;
}
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.


function salaRectangular(altura, anchura) {
    const area = altura * anchura; // Base x Altura
    const perimetro = 2 * (altura + anchura); // 2 x (Base + Altura)
    console.log(`Área: ${area}`);
    console.log(`Perímetro: ${perimetro}`);
}

// Área y Perímetro de una Sala Circular
function salaCircular(radio) {
    const pi = 3.14; // Pi
    const area = pi * (radio * radio); // Pi x Radio^2
    const perimetro = 2 * pi * radio; // 2 x Pi x Radio
    console.log(`Área: ${area}`);
    console.log(`Perímetro: ${perimetro}`);
}

// Tabla de Multiplicar
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}