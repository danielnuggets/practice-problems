// An XOR linked list is a more memory efficient doubly linked list. Instead of
// each node holding next and prev fields, it holds a field named both, which is
// a XOR of the next node and the previous node. Implement a XOR linked list; it
// has an add(element) which adds the element to the end, and a get(index) which
// returns the node at index.
//
// If using a language that has no pointers (such as Python), assume you have
// access to get_pointer and dereference_pointer functions that converts between
// nodes and memory addresses.


class LinkedList {
  constructor(val) {
    // array's randomly assigned indices simulate node addresses in memory
    this.nodesArray = [];
    this.headIndex = Math.floor(Math.random() * 3);
    this.nodesArray[this.headIndex] = new Node(val);
    this.tailIndex = this.headIndex;
  }

  add(val) {
    var newNode = new Node(val);
    var newIndex = this.tailIndex + Math.floor(Math.random() * 3 + 1);
    this.nodesArray[newIndex] = newNode;
    this.nodesArray[this.tailIndex].xorNextPrev ^= newIndex; // update tail xor
    newNode.xorNextPrev = this.tailIndex; // set new node's xor
    this.tailIndex = newIndex; // re-assign tail
    return this; // allows chaining of add method
  }

  get(position) {
    var currentIndex = this.headIndex;
    var previousIndex = null;
    var nextIndex;

    for (var i = 0; i < position; i++) {

      // if position goes beyond the tail (the tail will not have a next index,
      // so its previous index will equal its xorNextPrev), an error is thrown.
      if (previousIndex === this.nodesArray[currentIndex].xorNextPrev) {
        throw "This position in linked list does not exist."
      }

      // current xorNextPrev value = previous index ^ next index. therefore,
      // next index = previous index ^ current xorNextPrev value.
      nextIndex = previousIndex ^ this.nodesArray[currentIndex].xorNextPrev;
      previousIndex = currentIndex; // reset previousIndex
      currentIndex = nextIndex; // reset currentIndex
    }

    return this.nodesArray[currentIndex];
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.xorNextPrev = null; // xor of next node's index and prev node's index
  }
}


// test

var list1 = new LinkedList(2);
list1.add(4).add(6).add(8);
if (list1.get(2).value === 6) {
  console.log("pass");
} else {
  console.log("fail");
}
