/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pa = headA;
    let pb = headB;
    while(pa !== pb){
        pa = (pa === null)?headB:pa.next;
        pb = (pb === null)?headA:pb.next;
    }
    return pa;
};