/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head == null) return null;
    let ptr = head;
    while(ptr !== null){
        let newNode = new RandomListNode(ptr.label);
        newNode.next = ptr.next;
        ptr.next = newNode;
        ptr = newNode.next;
    }
    ptr = head;
    while(ptr !== null){
        ptr.next.random = (ptr.random == null) ? null:ptr.random.next;
        ptr = ptr.next.next;
    }
    let old_list_ptr = head;
    let new_list_ptr = head.next;
    let new_head = head.next;
    while(old_list_ptr !== null){
        old_list_ptr.next = old_list_ptr.next.next;
        new_list_ptr.next = (new_list_ptr.next == null) ? null:new_list_ptr.next.next;
        old_list_ptr = old_list_ptr.next;
        new_list_ptr = new_list_ptr.next;
    }
    return new_head;
 };