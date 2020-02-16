class Queue {
  constructor(maxSize) {
    this.maxSize = isNaN(maxSize) ? maxSize : 0
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

Queue.prototype.toString = function () {
  return this.container.join(' -> ')
}

export default Queue