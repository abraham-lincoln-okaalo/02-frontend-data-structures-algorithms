function longestIncreasingSubsequence(arr) {
  const memo = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
      }
    }
  }

  let maxLength = 0;
  for (let i = 0; i < memo.length; i++) {
    if (memo[i] > maxLength) {
      maxLength = memo[i];
    }
  }

  const subsequence = [];
  let currentLength = maxLength;
  for (let i = memo.length - 1; i >= 0; i--) {
    if (memo[i] === currentLength) {
      subsequence.unshift(arr[i]);
      currentLength--;
    }
  }
  return subsequence;
}

console.log(longestIncreasingSubsequence([3, 4, -1, 0, 6, 2, 3]));
console.log(longestIncreasingSubsequence([9, 3, 5, 6, 2, 8, 4, 7]));
