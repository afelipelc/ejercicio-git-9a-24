

function Primos(number) {
    if (number <= 1) return false;//menor o igual que 1
    if (number <= 3) return true;// menor o igual a 3 s decir 2 y 3
    if (number % 2 === 0 || number % 3 === 0) return false; //numero divisible entre 2 y 3

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number% (i + 2) === 0) return false;
    }
    return true;
}

function primos(n) {
    const number = [];
    let num = 2;

    while (number.length < n) {
        if (Primos(num)) {
            number.push(num);
        }
        num++;
    }

    return number;
}

module.exports = primos;
