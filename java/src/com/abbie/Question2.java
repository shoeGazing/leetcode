/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
       int carry = 0;
       ListNode prev = new ListNode(0);
        ListNode head = prev;
    while (l1 != null || l2 != null || carry != 0){
            ListNode cur = new ListNode(0);
            int sum  = ((l1 == null)?0:l1.val) + ((l2 == null)?0:l2.val) + carry;
            cur.val = sum%10;
            carry = sum/10;
            prev.next = cur;
            prev = cur;
            
            l1 = ((l1 == null)?l1:l1.next);
            l2 = ((l2 == null)?l2:l2.next);
        }
        return head.next;
    }
}