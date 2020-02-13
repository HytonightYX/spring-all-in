function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}


/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * (注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空)
 * 
 * 
 */
function Clone(pHead) {
  if (pHead == null) {
    return null;
  }

  // 每个节点都复制一个 node 插入
  let pMove = pHead
  while (pMove) {
    let node = new RandomListNode(pMove.label)
    node.next = pMove.next
    pMove.next = node
    pMove = node.next
  }

  // 遍历用指针归位，准备下一次遍历
  pMove = pHead

  // 给新建的 node 添加 random 指针
  while (pMove && pMove.next) {
    let next = pMove.next
    next.random = pMove.random.next
    pMove = pMove.next.next
  }

  // 链表分离，断链操作
  let pNew = pHead.next

  // 唉，工具人，多跑几趟
  pMove = pHead
  while (pMove) {
    pMove.next = pMove.next.next

  }

  return pNew
}

function Clone(pHead) {
  if (pHead == null) {
    return null;
  }

  let pMove = pHead;
  //1、复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
  while (pMove) {
    let node = new RandomListNode(pMove.label);
    let nextNode = pMove.next;
    pMove.next = node;
    node.next = nextNode;
    pMove = nextNode;
  }

  pMove = pHead;
  //2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
  while (pMove) {
    pMove.next.random = pMove.random == null ? null : pMove.random.next;
    pMove = pMove.next.next;
  }

  //3、拆分链表，将链表拆分为原链表和复制后的链表
  pMove = pHead;
  let pCloneHead = pHead.next;
  while (pMove) {
    let cloneNode = pMove.next;
    pMove.next = cloneNode.next;
    cloneNode.next = cloneNode.next == null ? null : cloneNode.next.next;
    pMove = pMove.next;
  }

  return pCloneHead;
}