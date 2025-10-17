// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue()
  const arr = []

  while (!queue.isEmpty()) {
    const removedEl = queue.dequeue()
    tempQueue.enqueue(removedEl)
    arr.push(removedEl)
  }

  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }

  const reversedArr = arr.reverse()
  return arr.join() === reversedArr.join()
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true