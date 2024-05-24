const primos = require('./primos');
const readline = require('readline');

function imprimirPrimos(cantidad) {
    const numerosPrimos = primos(cantidad);
    console.log(`Los primeros ${cantidad} números primos son: ${numerosPrimos.join(', ')}`);
}

imprimirPrimos(5);

imprimirPrimos(15);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántos números primos deseas generar? ', (respuesta) => {
    const n = parseInt(respuesta);
    if (!isNaN(n) && n > 0) {
        imprimirPrimos(n);
    } else {
        console.log('Por favor, ingresa un número válido.');
    }
    rl.close();
});