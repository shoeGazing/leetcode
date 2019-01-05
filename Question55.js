/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let leftPos = nums.length-1;
    for(let i = nums.length-2; i >= 0; i--){
        if(nums[i]+i >= leftPos)
            leftPos= i;
    }
    return leftPos == 0;
};