const fibo = (n) => n <= 1 ? n : fibo(n - 1) + fibo(n - 2);

const fibonacciWithFor = (n) => {
    if (n <= 0) return [];
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

module.exports = { fibo, fibonacciWithFor };