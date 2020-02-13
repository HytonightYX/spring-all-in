/**
 * 
 * 双指针法，设定左右指针，先让右指针
 * 走 k - 1 步，然后左右指针一起走，
 * 当右指针走到链表尾，做指针就刚好位
 * 于倒数第 k 个节点了。
 * 
 * @completxy O(n) | O(n)
 */
function FindKthToTail(head, k) {
  let left = head
  let right = head

  for (let i = 0; i < k - 1; i++) {
    if (!right.next) return null
    right = right.next
  }

  while (right.next) {
    left = left.next
    right = right.next
  }

  return left
}