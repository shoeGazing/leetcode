/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let pointer = dummy;
    let overflow = 0;
    while(l1 !== null || l2 !== null){
        v1 = l1 == null? 0:l1.val;
        v2 = l2 == null? 0:l2.val;
        value = (v1+v2+overflow)%10;
        overflow = Math.floor((v1+v2+overflow)/10);
        let node = new ListNode(value);
        pointer.next = node;
        pointer = pointer.next;
        if(l1 !== null){
            l1 = l1.next;
        }
          if(l2 !== null){
            l2 = l2.next;
        }
    }
    if(overflow !== 0) pointer.next = new ListNode(overflow);
    return dummy.next;
};