function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right) {
        const pivotIndex = partition(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

function partition(arr, left, right) {
    const pivot = arr[right]
    let i = left -1
    for (let j = left; j < right; j++){
        if(arr[j] <= pivot){
            i++
            //swap arr[i] and arr[j]
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    // swap arr[i+1] and arr[right] (pivot)
    const temp = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = temp
    return i + 1
}

const arr = [63, 34, 25, 12, 22, 11, 90]
console.log(quickSort(arr))