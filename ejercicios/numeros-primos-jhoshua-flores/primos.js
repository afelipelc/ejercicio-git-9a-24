const primos = (n) => {
    var c = n;
    var j = 2;
    var numerosPrimos = [];

    for (; j < c; j++) {

        if (primo(j)) {
            numerosPrimos.push(j);
        }

    }


    function primo(numero) {

        for (var i = 2; i < numero; i++) {

            if (numero % i === 0) {
                return false;
            }

        }

        return numero !== 1;
    }

    return numerosPrimos;   

}

module.exports = {
    "primos": primos
}