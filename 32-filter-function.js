function filter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, (x) => x % 2 === 0);
console.log(evenNumbers);
