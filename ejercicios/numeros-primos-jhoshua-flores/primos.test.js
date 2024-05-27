const funcion = require("./primos")
var numero;

console.log(funcion.primos(5));
console.log(funcion.primos(15));
process.stdout.write("Ingresa hasta que numero buscar primos: ");
process.stdin.on('data',function (data) {
    
    var input = data.toString().trim();
    var numero = parseInt(input);
    console.log(funcion.primos(numero));
    process.exit()
})





