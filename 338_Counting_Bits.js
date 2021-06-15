//Class : Easy
const countBits = function(n) {
    let output = []; // Array output
    if (0 <= n && n <= 10**5 ) { // Condition
        for (let i = 0 ; i <= n ; i++) {
            let num = parseInt(i);
            let byte = num.toString(2);
            let now = 0;
            for (let k = 0 ; k < byte.length ; k ++) {
                now = now + (parseInt(byte.charAt(k)));
            }
            output.push(now);
        }
        return output;
    }
};

countBits(5);


/*
----Result----
Runtime: 132 ms, faster than 41.95% of JavaScript online submissions for Counting Bits.
Memory Usage: 46.2 MB, less than 35.73% of JavaScript online submissions for Counting Bits.
*/