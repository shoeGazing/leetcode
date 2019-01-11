/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null;
    return helper(nums,0,nums.length-1);
  };
  
  let helper = function(nums, lower, higher){
      if(lower > higher) return null;
      let mid = Math.floor((lower+higher)/2);
      let root = new TreeNode(nums[mid]);
      root.left = helper(nums, lower, mid-1);
      root.right = helper(nums, mid+1, higher);
      return root;
  }
  
  