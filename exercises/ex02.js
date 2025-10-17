// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(stack, a, b) {
  // your code here
  const tempStack = new Stack()
  let foundA = false
  let foundB = false

  while (!stack.isEmpty()) {
    tempStack.push(stack.pop())
  }

  while (!tempStack.isEmpty()) {
    const removedEl = tempStack.pop()

    if (removedEl === a || removedEl === b) {
      stack.push(removedEl)

      if (!foundA && !foundB) {
        foundA = true
      } else {
        foundB
      }
    } else if (!foundA || foundB) {
      stack.push(removedEl)
    }
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry