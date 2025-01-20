//Ejercicio 1
// Cambiar el contenido de la etiqueta h1

// document.querySelector("h1").textContent = "Hora del Desafío";

//Ejercicio 2
// Función para mostrar mensaje en la consola
document.getElementById("Console").addEventListener("click", function() {
    console.log("El botón fue clicado");
  });

//Ejercicio 3
// Función para mostrar un prompt y alerta concatenada
document.getElementById("Prompt").addEventListener("click", function() {
    const ciudad = prompt("Igresa tu Ciudad: ");
    if(ciudad){
        alert(`Estuve en ${ciudad}, y me acorde de ti `);
    }
});

//Ejercicio 4
// Función para mostrar una alerta con el mensaje "Yo amo JS"
document.getElementById("Alert").addEventListener("click", function(){
    alert("Me gusta JS");
});

//Ejercicio 5
// Función para realizar la suma de dos números
document.getElementById("Suma").addEventListener("click", function(){
    const valor1 = parseInt(prompt("Ingresa el primer valor:"));
    const valor2 = parseInt(prompt("Ingresa el segundo valor:"));
    const suma = valor1 + valor2;
    alert(`La suma es ${suma}`);
});