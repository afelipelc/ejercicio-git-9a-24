const { title } = require('process')
const { fibonacciWithFor, fibo } = require('./fibonacci')
const reader = require('readline')
const read = reader.createInterface({
    input: process.stdin,
    output: process.stdout
})
const test = (title, callback) => {
    console.log(`\n${title}`)
    callback()
}
test('Prueba función generadora de la sucesión fibonnaci', () => {
    // implmentación recursiva para encontrar un numero específico de la sucesión de fibonacci
    console.log(fibo(10))
    console.log(fibonacciWithFor(10))
    console.log(fibonacciWithFor(15))
    read.question('Ingrese un número para obtener la sucesión de fibonacci: ', (n) => {
        console.log(fibonacciWithFor(parseInt(n)))
        read.close()
    })
})