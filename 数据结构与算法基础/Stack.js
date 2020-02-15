class Stack {
  constructor(maxSize) {
    // 参数不合法或者不给，给默认参数
    if (isNaN(maxSize)) {
      maxSize = 10
    }

    this.maxSize = maxSize
    this.container = []
  }

  isEmpty() {
    return this.container.length === 0
  }

  isFull(number = 0) {
    return this.container.length === this.maxSize
  }

  push(ele) {
    if (this.isFull()) {
      console.log('Stack Overflow')
      return
    }
    this.container.push(ele)
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack Underflow')
      return undefined
    }
    return this.container.pop()
  }

  /**
   * returns the top most elements in the stack, but doesn’t delete it.
   */
  peek() {
    if (this.isEmpty()) {
      console.log('Stack Underflow')
      return undefined
    }
    return this.container[this.container.length - 1];
  }

  clear() {
    this.container = []
  }
}

export default Stack