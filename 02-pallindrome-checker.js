// function isPalindrome(str){
//     var s = str.toLowerCase().replace(/[\W_]/g, '');

//     for (var i = 0; i < s.length / 2; i++){
//         if (s[i] !== s[s.length - i - 1]){
//             return false;
//         }
//     }
//     return true;
// }

function isPalindrome(str){
    let left = 0;
    let right = str.length - 1;

    while (left < right){
        if (str[left++] !== str[right--]){
            return false;
        }
    }
    return true
}



console.log(isPalindrome('tacocat')) //true
isPalindrome(`rotor`) //true
console.log(isPalindrome('No')) //false