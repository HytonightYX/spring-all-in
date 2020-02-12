/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 * 
 * 解法：https://zhuanlan.zhihu.com/p/31401474
 * https://segmentfault.com/a/1190000015308120
 */


function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 首先创建两个指针1和2（在java里就是两个对象引用），
 * 同时指向这个链表的头节点。然后开始一个大循环，在循
 * 环体中，让指针1每次向下移动一个节点，让指针2每次向
 * 下移动两个节点，然后比较两个指针指向的节点是否相同。
 * 如果相同，则判断出链表有环，如果不同，则继续下一次循环。
 */
function EntryNodeOfLoop(pHead) {
  let p1 = pHead
  let p2 = pHead

  while (p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next

    if (p1 === p2) {
      break
    }
  }

  if (!(p2 && p2.next)) {
    return null
  }

  p1 = pHead
  while (p1 !== p2) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}