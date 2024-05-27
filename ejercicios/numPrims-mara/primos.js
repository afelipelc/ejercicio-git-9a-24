

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function primos(n) {
    let primosEncontrados = [];
    let numero = 2;

    while (primosEncontrados.length < n) {
        if (esPrimo(numero)) {
            primosEncontrados.push(numero);
        }
        numero++;
    }

    return primosEncontrados;
}

module.exports = primos;