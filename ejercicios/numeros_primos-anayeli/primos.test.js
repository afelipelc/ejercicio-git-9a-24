

const primos = require('./primos');
const readline = require('readline');

console.log("Ejemplo de 5 números primos:");
console.log(primos(5).join(", "));

console.log("\nEjemplo de 15 números primos:");
console.log(primos(15).join(", "));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\nIntroduce la cantidad de números primos que quieres ver: ", 
function(n) {
    const num = parseInt(n);
    if (isNaN(num) || num <= 0) {
        console.log("Revise el dato de entrada, introduce un número válido mayor que 0.");
    } else {
        console.log(`\nMostrando ${num} números primos:`);
        console.log(primos(num).join(", "));
    }
    rl.close();
});
