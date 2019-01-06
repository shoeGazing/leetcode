/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
     backtrack(res, [], nums, 0);
     return res;
 };
 
 let backtrack = function(res,temp,nums,start){
     res.push(temp.slice());
     for(let i = start; i < nums.length; i++){
         temp.push(nums[i]);
         backtrack(res, temp, nums, i+1);
         temp.pop();
     }
 }
 