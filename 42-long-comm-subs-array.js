function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const memo = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - j] === str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1] + 1;
      } else {
        memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  const subsequence = [];
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      subsequence.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (memo[i - 1][j] > memo[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return subsequence;
}

console.log(longestCommonSubsequence("ABCD", "BD"));
console.log(longestCommonSubsequence("AGGTAB", "GXTXAYB"));
