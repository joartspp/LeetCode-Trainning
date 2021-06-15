//Class : Easy
const countBits = function(n) {
    let output = []; // Array output
    if (0 <= n && n <= 10**5 ) { // Condition
        for (let i = 0 ; i <= n ; i++) {
            let num = parseInt(i);
            let byte = num.toString(2);
            let now = 0;
            for (let k = 0 ; k <= byte.length ; k ++) {
                now = now + (parseInt(byte.charAt(k)));
                if (!isNaN(now)){
                    output.push(now)
                }
            }
        }
        console.log(output);
    }
};

countBits(5);