/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let imax = nums[0];
    let imin = nums[0];
     let res = nums[0];
     for(let i = 1; i < nums.length; i++){
         if(nums[i] < 0){
             let temp = imax;
             imax = imin;
             imin = temp;
         }
         imax = Math.max(imax*nums[i],nums[i]);
         imin = Math.min(imin*nums[i],nums[i]);
         res = Math.max(imax,res);
     }
     return res;
 };