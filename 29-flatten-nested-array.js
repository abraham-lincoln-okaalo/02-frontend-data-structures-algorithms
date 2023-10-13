function flatten(arr) {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)
    }, [])
}

const nestedArray = [1, [2, [3, 4], 5], 6]
const flattenedArray = flatten(nestedArray)

console.log(flattenedArray)