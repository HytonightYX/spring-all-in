/**
 * 层序遍历
 */
function PrintFromTopToBottom(root) {
  let ret = []
  if (!root) return ret
  let queue = new Queue(10000)
  queue.enqueue(root)

  while (!queue.isEmpty()) {
    let node = queue.dequeue()
    ret.push(node.val)
    if (node.left) queue.enqueue(node.left)
    if (node.right) queue.enqueue(node.right)
  }
  return ret
}

class Queue {
  constructor(maxSize) {
    this.maxSize = isNaN(maxSize) ? maxSize : 10
    this.container = []
  }

  isFull() {
    return this.container.length === this.maxSize
  }

  isEmpty() {
    return this.container.length === 0
  }

  // 入队列
  enqueue(ele) {
    if (this.isFull()) {
      console.log('Queue Overflow')
      return
    }
    this.container.push(ele)
  }

  // 出队列
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue Underflow')
      return
    }
    return this.container.shift()
  }

  // 队首元素
  front() {
    if (this.isEmpty()) {
      console.log('Queue Underflow')
      return
    }

    return this.container[0]
  }

  // 队尾元素
  rear() {
    if (this.isFull()) {
      console.log('Queue Overflow')
      return
    }

    return this.container[this.container.length - 1]
  }
}

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}