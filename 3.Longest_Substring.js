var lengthOfLongestSubstring = function(s) {
    let unique = [];
    let ans = 0;
    if (s === '') return 0;
    if (s.length == 1) return 1;
    for (let i = 1 ; i < s.length ; i++) {
        if (!unique.includes(s[i])) {
            unique.push(s[i]);
        }
    }
    ans = unique.length
    return ans
};

let ans = lengthOfLongestSubstring('');

console.log(ans)