function apply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

const numbers = [1, 2, 3, 4, 5];
const max = apply(Math.max, null, numbers);
console.log(max);
