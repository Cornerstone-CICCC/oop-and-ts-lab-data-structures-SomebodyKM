// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  // your code here
  let runner = list.head

  while (runner !== null) {
    if (runner.data === value) {

      if (runner === list.head) {
        list.head = runner.next

        if (list.head) {
          list.head.prev = null
        }
      } else if (runner === list.tail) {
        list.tail = runner.prev

        if (list.tail) {
          list.tail.next = null
        }
      } else {
        runner.prev.next = runner.next
        runner.next.prev = runner.prev
      }

      list.size -= 1
      runner = runner.next
    }
    runner = runner.next
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5