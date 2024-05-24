
// Importar la función primos del archivo primos.js
const  primos  = require('./primos');

// Generar y imprimir 5 números primos
const cantidadPrimos5 = 5;
console.log(`Los primeros ${cantidadPrimos5} números primos son: `, primos(cantidadPrimos5));

// Generar y imprimir 15 números primos
const cantidadPrimos15 = 15;
console.log(`Los primeros ${cantidadPrimos15} números primos son: `, primos(cantidadPrimos15));

// Pedir al usuario que ingrese el valor de N para generar N números primos
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese la cantidad de números primos que desea generar: ', (cantidadPrimos) => {
    const n = parseInt(cantidadPrimos);
    if (!isNaN(n) && n > 0) {
        console.log(`Los primeros ${n} números primos son: `, primos(n));
    } else {
        console.log('Por favor, ingrese un número válido.');
    }
    readline.close();
});