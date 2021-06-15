var climbStairs = function(n) {
    if (1 > n && n > 45) return;
    const result = {
        "0" : 1,
        "1" : 1,
    };
    
    for (let i = 2 ; i < n + 1 ; i++ ) {
        result[i] = result[i-1] + result[i-2]; 
    }
    
    return result[n]
};

console.log(climbStairs(7))


/*
n = 0 : 1
n = 1 : 1
n = 2 : 2   : 1 + 1
n = 3 : 3   : 2 + 1
n = 4 : 5   : 3 + 2
n = 5 : 8   : 5 + 3
n = 6 : 13   : 8 + 5
n = 7 : 21   : 13 + 8
n = 8 : 34   : 21 + 13
n = k : z   : z + 34
*/

/*
----Result----
Runtime: 64 ms, faster than 99.32% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 39.3 MB, less than 11.25% of JavaScript online submissions for Climbing Stairs.
*/