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
  var startingStackLength = stack.length;
  var halfStackLength = parseInt(startingStackLength / 2);

  // pop second half of stack onto queue
  for (var i = 0; i < halfStackLength; i++) {
    queue.push(stack.pop());
  }

  // push queue back onto stack and then pop off again to reverse order
  for (var i = 0, length = queue.length; i < length; i++) {
    stack.push(queue.shift());
  }

  for (var i = 0; i < halfStackLength; i++) {
    queue.push(stack.pop());
  }

  // alternate between popping and enqueueing 1 element from the stack and
  // dequeueing and enqueueing 1 element from the queue
  var select;

  if (startingStackLength % 2 === 0) {
    select = "queue";
  } else {
    select = "stack";
  }

  for (var i = 0; i < startingStackLength; i++) {
    if (select === "stack") {
      queue.push(stack.pop());
      select = "queue";
    } else {
      queue.push(queue.shift());
      select = "stack";
    }
  }

  // push entire queue back onto stack, and then pop entire stack back onto
  // queue to reverse the order
  for (var i = 0; i < startingStackLength; i++) {
    stack.push(queue.shift());
  }

  for (var i = 0; i < startingStackLength; i++) {
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
