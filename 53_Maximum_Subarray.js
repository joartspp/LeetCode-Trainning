var maxSubArray = function(nums) {
    let result = maximum = nums[0];
    if ( 1 > nums.length && nums.length < 3*(Math.pow(10,4))) return 'no'
    if (nums.length <= 1) return nums[0];
    for (let i = 1 ; i < nums.length ; i++ ){
        if (Math.pow(-10,5) <= nums[i] && nums[i] <= Math.pow(10,5)) {
            result = Math.max(nums[i],result+nums[i]);
            maximum = Math.max(maximum,result);
        }
    }
    return maximum
};

const number = [1];

console.log(maxSubArray(number))

/*
----Result----
Runtime: 80 ms, faster than 90.04% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.6 MB, less than 10.80% of JavaScript online submissions for Maximum Subarray.
*/