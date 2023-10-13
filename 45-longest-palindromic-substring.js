function longestPalindromicSubstring(str) {
  let longest = "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  }

  for (let i = 0; i < str.length; i++) {
    const oddPalindrome = expandAroundCenter(i, i);
    const evenPalindrome = expandAroundCenter(i, i + 1);
    const longerPalindrome =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
}
