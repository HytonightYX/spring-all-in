/**
 * 思路一：
 * 长短链表走一遍得出长度差 diff，
 * 然后让长链表先走 diff 步，
 * 然后长短链表同时开始走，一边比较就行。
 */
function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) return null

  let len1 = 0
  let len2 = 0

  let pMove = pHead1
  while (pMove) {
    len1++
    pMove = pMove.next
  }

  pMove = pHead2
  while (pMove) {
    len2++
    pMove = pMove.next
  }

  let longer = null
  let shorter = null

  if (len1 > len2) {
    longer = pHead1
    shorter = pHead2
  } else {
    longer = pHead2
    shorter = pHead1
  }

  let diff = Math.abs(len1 - len2)

  for (let i = 0; i < diff; i++) {
    longer = longer.next
  }

  while (longer && shorter) {
    if (longer === shorter) {
      return longer
    }
    longer = longer.next
    shorter = shorter.next
  }

  return null
}

/**
 * 思路二：
 *
 * 假定 List1长度: a+n  List2 长度:b+n, 且 a<b，
 * 那么 p1 会先到链表尾部, 这时p2 走到 a+n位置,将p1换成List2头部
 * 接着p2 再走b+n-(n+a) =b-a 步到链表尾部,这时p1也走到List2的b-a位置，还差a步就到可能的第一个公共节点。
 * 将p2 换成 List1头部，p2走a步也到可能的第一个公共节点。如果恰好p1==p2,那么p1就是第一个公共节点。  
 * 或者p1和p2一起走n步到达列表尾部，二者没有公共节点，退出循环。 同理a>=b.
 *
 * 其实就是两个链表相加a+n+b+n；在走一起a+b+n步就行
 * 
 * @complexity O(n+a+b)
 */
function FindFirstCommonNode(pHead1, pHead2) {
  let p1 = pHead1
  let p2 = pHead2

  while (p1 !== p2) {
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    if (p1 !== p2) {
      if (p1 === null) p1 = pHead2
      if (p2 === null) p2 = pHead1
    }
  }

  return p1
}