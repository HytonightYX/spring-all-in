/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 两个辅助指针，pre 和 next，分别暂存
 * 头指针的前一个节点和后一个节点。
 * 
 * 随后让头指针开始移动，next 来暂存下一个节点，
 * 然后 pHead 和 pre 卿卿我我，完事儿了之后 pHead
 * 向 next 要来下一个节点位置，以此往复。当 pHead 为
 * null 的时候，pre 就走到了老链表的尾部，也就是新链表
 * 的头部，返回 pre 就行了。
 * 
 * @complexity O(n) | O(1)
 */
function ReverseList(pHead) {
  if (!pHead || !pHead.next) return pHead
  let pre = null
  let next = null

  while (pHead) {
    next = pHead.next
    pHead.next = pre
    pre = pHead
    pHead = next
  }

  return pre
}