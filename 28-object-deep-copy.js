function deepCopy(obj){
    if (typeof obj !== "object" || obj === null){
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {}

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key])
    })
    return copy
}

const obj = { a: 1, b : { c: 2 } }
const copy = deepCopy(obj)

console.log(copy)
console.log(copy === obj)
console.log(copy.b === obj.b)