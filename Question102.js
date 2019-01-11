/*
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
var levelOrder = function(root) {
    let res= [];
    let queue = [];
    if(root == null) return res;
    queue.push(root);
    while(queue.length > 0){
       let temp = [];
       let level = queue.length; 
       for(let i = 0; i < level; i++){
        if(queue[0].left !== null) queue.push(queue[0].left);
        if(queue[0].right !== null) queue.push(queue[0].right);
        temp.push(queue.shift().val);
     }
        res.push(temp);
   }
    return res;
};