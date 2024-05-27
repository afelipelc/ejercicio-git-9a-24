function primos(n){
    const primosArray = [];

    let num = 2

    while(primosArray.length < n){
        if(esPrimo(num)){
            primosArray.push(num);
        }
        num++
    }
    return primosArray;
}

function esPrimo(num){
    if (num < 2) return false;

    for (let i = 2; i<= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    } 
    return true;
}

module.exports = { primos };