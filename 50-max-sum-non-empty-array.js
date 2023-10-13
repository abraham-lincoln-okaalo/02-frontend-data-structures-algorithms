function maxSubarraySumWithConstraint(arr, k) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentSum);
    maxElement = Math.max(maxElement, arr[i]);
  }

  if (k <= 0) {
    return maxSum;
  }

  if (maxSum < 0) {
    return Math.max(maxSum, maxElement);
  }

  const prefixSum = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  let result = 0;
  const set = new Set([0]);
  for (const sum of prefixSum) {
    const candidate = sum - k;
    const it = set.lowerBound(candidate);
    if (it !== null) {
      result = Math.max(result, sum - it);
    }
    set.add(sum);
  }
  return Math.max(maxSum, result);
}

Set.prototype.lowerBound = function (value) {
  let first = 0;
  let last = this.size;
  let it = null;

  while (first < last) {
    const mid = Math.floor((first + last) / 2);
    const x = Array.from(this)[mid];
    if (x < value) {
      first = mid + 1;
    } else {
      it = xlast = mid;
    }
  }
  return it;
};
