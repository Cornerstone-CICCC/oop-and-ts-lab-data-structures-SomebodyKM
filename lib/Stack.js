class Stack {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty"
    }
    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"
    }
    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }

  printStack() {
    let str = ""
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " "
    }
    return str
  }
}

module.exports = Stack