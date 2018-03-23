// Given a stack of N elements, interleave the first half of the stack with the
// second half reversed using only one other queue. This should be done in-place.
//
// Recall that you can only push or pop from a stack, and enqueue or dequeue
// from a queue.
//
// For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3].
// If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].
//
// Hint: Try working backwards from the end state.

function interleave(stack) {
  var queue = [];
  var halfLength = Math.floor(stack.length / 2);

  // pop entire stack onto queue
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  // shuffle the front half of the queue to the back of the queue
  for (var i = 0; i < halfLength; i++) {
    queue.push(queue.shift());
  }

  // dequeue half of the queue and push onto stack
  while (queue.length > halfLength) {
    stack.push(queue.shift());
  }

  // alternate between popping and enqueueing 1 element from the stack and
  // dequeueing and enqueueing 1 element from the queue until stack is empty
  for (var i = 0; i < halfLength; i++) {
    queue.push(stack.pop());
    queue.push(queue.shift());
  }

  if (stack.length > 0) {
    queue.push(stack.pop());
  }

  return queue;
}

// test 1
var result1 = interleave([1,2,3,4,5]);

if (JSON.stringify(result1) === "[1,5,2,4,3]") {
  console.log("pass");
} else {
  console.log("fail");
}

// test 2
var result2 = interleave([1,2,3,4]);

if (JSON.stringify(result2) === "[1,4,2,3]") {
  console.log("pass");
} else {
  console.log("fail");
}

// test 3
var result3 = interleave([1,2]);

if (JSON.stringify(result3) === "[1,2]") {
  console.log("pass");
} else {
  console.log("fail");
}
