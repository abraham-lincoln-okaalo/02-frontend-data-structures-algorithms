function mergeArrays(a1, a2){
    let result = []
    let i = 0
    let j = 0

    while (i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            result.push(a1[i++])
        } else {
            result.push(a2[j++])
        }
    }

    while(i < a1.length){
        result.push(a1[i++]);
    }

    while(j < a2.length){
        result.push(a2[j++])
    }

    return result
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
console.log(mergeArrays([1, 3, 5, 7], [2, 4, 6]))