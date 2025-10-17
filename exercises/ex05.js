// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 3 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function mixQueue(queue) {
  // your code here
  const tempQueue = new Queue()
  const half = Math.floor(queue.size() / 2)

  for (let i = 0; i < half; i++) {
    tempQueue.enqueue(queue.dequeue())
  }

  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())

    if (!queue.isEmpty()) {
      queue.enqueue(queue.dequeue())
    }
  }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6