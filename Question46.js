/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let temp = [];
    backtrack(res, temp, nums);
    return res; 
 };
 
 let backtrack  = function(res, temp, nums){
     if(nums.length == 0) res.push(temp.slice());
     for(let i = 0; i < nums.length; i++){
         temp.push(nums[i]);
         let arr = nums.slice();
         arr.splice(i,1);
         backtrack(res, temp, arr);
         temp.pop();
     }
 }
 
 