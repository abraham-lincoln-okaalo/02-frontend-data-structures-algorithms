// function removeDuplicates(arr){
//     return Array.from(new Set(arr))
// }

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }


function removeDuplicates(arr){
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}



const arrWithDuplicates = [1, 2, 2, 3, 4, 5, 5, 5, 8, 8 ]
const uniqueArr = removeDuplicates(arrWithDuplicates)

console.group(uniqueArr)