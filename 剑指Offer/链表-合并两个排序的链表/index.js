function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 这不就是归并排序嘛...
 */
function Merge(pHead1, pHead2) {
  if (!pHead1) return pHead2
  if (!pHead2) return pHead1

  let p = new ListNode(null)
  let root = p

  while (pHead1 && pHead2) {
    if (pHead1.val > pHead2.val) {
      p.next = pHead2
      pHead2 = pHead2.next
    } else {
      p.next = pHead1
      pHead1 = pHead1.next
    }
    p = p.next
  }

  while (pHead1) {
    p.next = pHead1
    pHead1 = pHead1.next
    p = p.next
  }

  while (pHead2) {
    p.next = pHead2
    pHead2 = pHead2.next
    p = p.next
  }

  return root.next
}