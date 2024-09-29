const prompt = require('prompt-sync')();
 
// Pedir al usuario que ingrese un número
let numero = prompt("Por favor, ingresa un número:");
 
// Convertir la entrada a un número
numero = Number(numero);
 
// Verificar si el número es positivo y un entero
if (numero === numero && numero >= 0 && numero % 1 === 0) {
    // Inicializar el resultado del factorial
    let factorial = 1;
 
    // Calcular el factorial usando un bucle
    for (let i = 1; i <= numero; i++) {
        factorial *= i; // Multiplicar el número actual
    }
 
    // Mostrar el resultado en la consola
    console.log(`El factorial de ${numero} es ${factorial}.`);
} else {
    // Si el número no es válido, mostrar un mensaje de error
    console.log("Por favor, ingresa un número válido.");
}