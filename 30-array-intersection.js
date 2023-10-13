function intersection(arr1, arr2){
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)

    return [...set1].filter(val => set2.has(val))
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7]

const result = intersection(arr1, arr2)
console.log(result)