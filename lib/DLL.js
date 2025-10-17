class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DLL {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.head === null
  }

  length() {
    return this.size
  }

  setSize(newSize) {
    this.size = newSize
  }

  getHead() {
    return this.head
  }

  setHead(newHead) {
    this.head = newHead
  }

  getTail() {
    return this.tail
  }

  setTail(newTail) {
    this.tail = newTail
  }

  insertAtBack(data) {
    const newNode = new Node(data)
    if(this.isEmpty()) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size += 1
  }

  print() {
    let runner = this.head
    const nodes = []
    while(runner) {
      nodes.push(runner.data)
      runner = runner.next
    }
    return nodes.join(' <-> ')
  }
}

module.exports = DLL