const {primos} = require('./primos');
const readline = require('readline')

console.log('5 números primos: ');
console.log(primos(5));

console.log('15 números primos:');
console.log(primos(15));


const readL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readL.question('Ingresa el valor de N: ', 
    (res)=> {
        const n = parseInt(res);
        if(!isNaN(n) && n > 0){
            console.log(`${n} numeros primos: `);
            console.log(primos(n));
        }
        else {
            console.log('Ingresa un numero valido');
        }
        readL.close()
    }
)