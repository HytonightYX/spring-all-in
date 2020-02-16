
/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return null
  }

  let pre = null
  let cur = head

  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}



/**
 * 递归 recursively
 * @param {ListNode} head
 * @return {ListNode} 
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

var reverseList = function (head) {
  const reverse = (pre, cur) => {
    if (!cur) return pre
    console.log('cur:' + cur.val + ' pre: ' + pre)
    let next = cur.next
    cur.next = pre
    reverse(cur, next)
  }

  return reverse(null, head)
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

console.log(reverseList(
  {
    val: 1, next: {
      val: 2, next: {
        val: 3, next: {
          val: 4, next: {
            val: 5, next: null
          }
        }
      }
    }
  }
))