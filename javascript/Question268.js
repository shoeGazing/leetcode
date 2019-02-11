/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let miss = nums.length;
    for(let i = 0; i < nums.length; i++){
        miss ^= nums[i]^i;
    }
    return miss;
};