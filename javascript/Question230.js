/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let count = 0;
let res = 0;
var kthSmallest = function(root, k) {
   count = k;
   traverse(root,k);
   return res;
};

let traverse = function(root,k){
    if(root.left !== null) traverse(root.left);
    count--;
    if(count == 0) {
       res = root.val;
       return;
   }
    if(root.right !== null) traverse(root.right);
};

