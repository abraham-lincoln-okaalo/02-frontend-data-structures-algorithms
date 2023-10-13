function selectionSort(arr){
    const n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        // swap arr[i] and arr[minIndex]
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr
}

const arr = [64, 34, 25, 12, 22, 11, 90]
console.log(selectionSort(arr))