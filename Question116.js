/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let level_start = root;
    while(level_start !== null){
        let curr = level_start;
        while(curr !== null){
            if(curr.left !== null) curr.left.next = curr.right;
            if(curr.right !== null && curr.next !== null) curr.right.next = curr.next.left;
            curr = curr.next;
        }
        level_start = level_start.left;
    }
 };