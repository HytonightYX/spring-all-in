/**
 * 在一个排序的链表中，存在重复的结点，
 * 请删除该链表中重复的结点，重复的结
 * 点不保留，返回链表头指针。 例如，
 * 链表1->2->3->3->4->4->5 处理后
 * 为 1->2->5。
 */


function ListNode(x) {
  this.val = x;
  this.next = null;
}

function deleteDuplication(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead
  }

  // 先加入一个 dummy 的头节点。
  let root = new ListNode('#')
  root.next = pHead

  let pre = root
  let cur = root

  while (cur) {
    // 
    while (cur.next && cur.val && cur.val === cur.next.val)
      cur = cur.next

    cur = cur.next

    // 看新的节点是不是也需要删除
    if (cur && cur.next && cur.val === cur.next.val) {
      continue
    }

    // 更新节点
    pre.next = cur
    pre = pre.next
  }
  return root.next
} 