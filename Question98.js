/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, lowerBound, upperBound) {
    if(root == null) return true;
else if(root.val <= lowerBound || root.val >= upperBound) return false;
else{
    return(isValidBST(root.left,lowerBound, root.val) && isValidBST(root.right,root.val,upperBound));
}
};