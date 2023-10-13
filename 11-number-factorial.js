function factorial(n){
    if(n < 0){
        throw new Error("factorial is not defined for negative numbers")
    } else if (n === 0){
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i
            console.log(result)
        }
        return result
    }
}

console.log(factorial(5))