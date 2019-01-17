/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let dp = [];
    dp[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        dp[i] = nums[i] + (dp[i-1] > 0 ? dp[i-1]:0);
        max = Math.max(max, dp[i]);
    }
   return max;
};