function reduce(arr, fn, initialValue) {
  let accumulator = initialValue || arr[0];
  const startIndex = initialValue ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const sum = reduce(
  numbers,
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
