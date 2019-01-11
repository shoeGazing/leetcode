/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let n = preorder.length;
    if(n == 0) return null;
    let i = 0;
    let root = new TreeNode(preorder[0]);
    for(; i < n; i++){
        if(root.val == inorder[i]) break;
    }
    root.left = buildTree(preorder.slice(1,i+1), inorder.slice(0,i));
    root.right = buildTree(preorder.slice(i+1,n), inorder.slice(i+1,n));
    return root;
 };