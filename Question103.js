/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let res = [];
    helper(root,res,0);
    return res;
};

let helper = function(root,res,level){
    if(root == null) return;
    if(res[level] == undefined) res[level] = []; 
    level%2 ? res[level].unshift(root.val):res[level].push(root.val);
    helper(root.left, res, level+1);
    helper(root.right, res, level+1);
}
