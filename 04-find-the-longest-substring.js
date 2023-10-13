function longestSubstringWithoutRepeating(str){
    let longest = 0;
    let start = 0;

    let map = new Map();

    for (let i = 0; i < str.length; i++){
        let char = str[i];

        if (map.has(char)){
            start = Math.max(start, map.get(char) + 1);
        }

        map.set(char, i);

        longest = Math.max(longest, i - start + 1);
        
    }
    return longest;
}

console.log(longestSubstringWithoutRepeating("abcabcdedfabcjk"))
console.log(longestSubstringWithoutRepeating("ghjghjghjghj456456456"))