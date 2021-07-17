const prob = [3,2,3];

const twoSum = function(nums, target) {
    let output = [];
    let temp = 0;
    for (let i = 0 ; i <= nums.length ; i++ ) {
        let posOne = nums[i];
        for (let j = i+1 ; j <= nums.length ; j++) {
            let posTwo = nums[j];
            if ((posOne + posTwo) === target) {
                output = [i,j]
            }
        }
    }
    return (output)
};

const ans = twoSum(prob,6);
console.log(ans)

/*
-----Result-----
Runtime: 144 ms, faster than 27.01% of JavaScript online submissions for Two Sum.
Memory Usage: 39.7 MB, less than 48.23% of JavaScript online submissions for Two Sum.
*/