function fibonacci(n){
    if (n <=0 ){
        throw new Error("n must be a positive integer");
    } else if ( n === 1 ){
        return [0];
    } else if (n === 2){
        return [0, 1]
    } else {
        const fibSeq = [0, 1];
        //console.log(fibSeq.length)
        while (fibSeq.length < n) {
            const nextNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
            fibSeq.push(nextNum)
        }
        return fibSeq
    }
}

console.log(fibonacci(10))