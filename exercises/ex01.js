// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  // your code here
  const tempStack = new Stack()
  let foundA = false
  let foundB = false
  let distance = 0

  while (!stack.isEmpty()) {
    const removedEl = stack.pop()
    tempStack.push(removedEl)

    if (removedEl === a || removedEl === b) {
      if (!foundA && !foundB) {
        foundA = removedEl === a
        foundB = removedEl === b
        distance = 0
      }
    } else if (foundA || foundB) {
      distance++
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }

  return distance
}

const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

const distance = calcDistance(students, "Joe", "Jim")
console.log(distance) // 3
const distance2 = calcDistance(students, "Joe", "Jill")
console.log(distance2) // 2