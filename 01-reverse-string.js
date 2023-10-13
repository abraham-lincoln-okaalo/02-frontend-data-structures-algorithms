// function reverseString(str) {
//     return str.split("").reverse().join("");
// }


function reverseString(str){
    var reversed = "";

    for (var i = str.length -1; i >= 0; i--){
         reversed += str[i];
    }
    return reversed
}

console.log(reverseString("Dichotomy"))
console.log(reverseString("The First JavaScript Algorithm!"))
