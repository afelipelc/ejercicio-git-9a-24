const readline = require('readline');
const fibonacci = require('./fibonacci');

function getNFromUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Introduce un valor: ', (n) => {
        if (isNaN(n) || n <= 0) {
            console.log('Debe ser un número positivo');
        } else {
            console.log(`Fibonacci con ${n} números es: ${fibonacci(parseInt(n))}`);
        }
        rl.close();
    });
}

console.log('Fibonacci con 15 números:');
console.log(fibonacci(15));

console.log('Fibonacci con 30 números:');
console.log(fibonacci(30));

getNFromUser();

