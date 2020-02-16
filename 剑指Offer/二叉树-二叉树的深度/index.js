function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * 层序遍历，用队列
 */
function TreeDepth(pRoot) {
  if (!pRoot) return 0

  let depth = 0
  let queue = new Queue()
  queue.enqueue(pRoot)

  while (!queue.isEmpty()) {
    let size = queue.size()
    depth++
    for (let i = 0; i < size; i++) {
      let node = queue.dequeue()
      if (node.left) queue.enqueue(node.left)
      if (node.right) queue.enqueue(node.right)
    }
  }
  return depth
}

/**
 * 递归：
 */
function TreeDepth(pRoot) {
  if (!pRoot) return 0
  let left = TreeDepth(root.left)
  let right = TreeDepth(rrot.right)

  return Math.max(left, right) + 1
}

/**
 * 递归一行写法
 */
function TreeDepth(pRoot) {
  return pRoot ? Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1 : 0
}

/**
 * Queue Implementing
 */
class Queue {
  constructor(maxSize) {
    this.maxSize = isNaN(maxSize) ? maxSize : 0
    this.container = []
  }

  size() {
    return this.container.length
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