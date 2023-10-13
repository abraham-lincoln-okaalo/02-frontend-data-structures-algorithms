function map(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squares = map(numbers, (x) => x * x);

console.log(squares);
