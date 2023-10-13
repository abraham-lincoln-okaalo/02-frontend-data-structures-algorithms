function longestCommonSubstring(str1, str2) {
  let maxLength = 0;
  let end = 0;

  const dp = new Array(str1.length + 1)
    .fill()
    .map(() => new Array(str2.length + 1).fill(0));
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          end = i - 1;
        }
      }
    }
  }
  return str1.substring(en - maxLength + 1, end + 1);
}
