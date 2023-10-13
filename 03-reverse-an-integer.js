// //for numbers upto 2 billion
// function reverseInt(n){
//     let reversed = 0;

//     while (n != 0 ){
//         reversed = reversed * 10 + n % 10
//         n = Math.floor(n / 10);
//     }
//     return reversed;
// }

//for longer integers, represent them as string and reverse the string.

function reverseInt(n) {
    let reversed  = 0;
    let sign = n >= 0 ? 1 : -1;
    let str = String(Math.abs(n));

    for (let i = str.length -1; i >= 0; i--){
        reversed = reversed * 10 + Number(str[i])
    }
    return reversed * sign
}
console.log(reverseInt(11)) //11
console.log(reverseInt(1001456)) // 01
console.log(reverseInt(-100))