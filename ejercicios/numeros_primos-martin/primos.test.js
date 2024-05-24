
const primos = require('./primos');

console.log('Generando 5 números primos:');
console.log(primos(5));

console.log('Generando 15 números primos:');
console.log(primos(15));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('¿Cuántos números primos deseas generar? ', (n) => {
    const num = parseInt(n, 10);
    if (!isNaN(num) && num > 0) {
        console.log(`Generando ${num} números primos:`);
        console.log(primos(num));
    } else {
        console.log('Por favor, ingresa un número válido.');
    }
    readline.close();
});
