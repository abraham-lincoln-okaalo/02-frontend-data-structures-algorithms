function insertionSort(arr){
    const n = arr.length;
    for (let i = 1; i < n; i++){
        const key = arr[i] //34
        let j  = i - 1 //0
        while ( j >= 0 && arr[j] > key){ //64 > 34
            arr[j + 1] = arr[j] //arr[1] = 64
            j--
        }
        arr[j + 1] = key // arr[0] = 34
     }
     return arr
}

const arr = [64, 34, 25, 12, 22, 11, 90]
console.log(insertionSort(arr))