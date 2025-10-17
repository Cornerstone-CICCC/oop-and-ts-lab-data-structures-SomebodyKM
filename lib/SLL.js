class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null
    this.size = 0
  }
  
  length() {
    return this.size
  }
  
  isEmpty() {
    return this.head === null
  }

  getHead() {
    return this.head
  }

  setHead(newHead) {
    this.head = newHead
  }
  
  insertAtBack(data) {
    const newTail = new Node(data)
    if (this.isEmpty()) {
      this.head = newTail
    } else {
      let runner = this.head
      while (runner.next) {
        runner = runner.next
      }
      runner.next = newTail
      this.size += 1
    }
  }

  print() {
    let runner = this.head
    const nodes = []

    while(runner !== null) {
      nodes.push(runner.data)
      runner = runner.next
    }

    return nodes.join(' -> ')
  }
}

module.exports = SLL

