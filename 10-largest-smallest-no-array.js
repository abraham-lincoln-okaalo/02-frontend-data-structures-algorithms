


function findMinMax(arr){
    if(arr.length === 0){
        return [null, null]
    }

    let minVal = maxVal = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < minVal){
            minVal = arr[i];
        } else if (arr[i] > maxVal){
            maxVal = arr[i]
        }
    }

    return [minVal, maxVal]
}

const arr = [5, 3, 8, 2, 9, 1]
const [minValue, maxValue] = findMinMax(arr)

console.log(`Minimum value: ${minValue}`)
console.log(`Maximum value: ${maxValue}`)