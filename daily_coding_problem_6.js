// An XOR linked list is a more memory efficient doubly linked list. Instead of
// each node holding next and prev fields, it holds a field named both, which is
// a XOR of the next node and the previous node. Implement a XOR linked list; it
// has an add(element) which adds the element to the end, and a get(index) which
// returns the node at index.
//
// If using a language that has no pointers (such as Python), assume you have
// access to get_pointer and dereference_pointer functions that converts between
// nodes and memory addresses.


// note that getPointer() and dereferencePointer() are not defined here. it is
// assumed that these functions are available since JavaScipt does not have
// pointers.
class LinkedList {
  constructor(val) {
    var headNode = new Node(val);
    this.headAddress = getPointer(headNode);
    this.tailAddress = this.headAddress;
  }

  add(val) {
    var newNode = new Node(val);
    var tail = dereferencePointer(this.tailAddress); // get tail node
    tail.xor ^= get_pointer(newNode); // amend value of tail's xor
    newNode.xor = this.tailAddress;  // assign value to new node's xor
    this.tail = getPointer(newNode); // re-assign tail
    return this;
  }

  get(index) {
    var currentAddress = this.head;
    var previousAddress = null;
    var nextAddress;

    for (var i = 0; i < index; i++) {
      // current xor value = previous address ^ next address. therefore,
      // previous address ^ current xor value = next address.
      nextAddress = previousAddress ^ dereferencePointer(currentAddress).xor;
      previousAddress = currentAddress;
      currentAddress = nextAddress;
    }

    return dereferencePointer(currentAddress);
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.xor = null; // xor of next and previous node
  }
}
