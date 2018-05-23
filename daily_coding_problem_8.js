// A unival tree (which stands for "universal value") is a tree where all nodes
// have the same value.
//
// Given the root to a binary tree, count the number of unival subtrees.


class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

var univalCount;

function univalCounter(root) {
  univalCount = 0;
  isUnival(root);
  return univalCount;
}

function isUnival(node) {
  // a node is unival if its children are equal to itself and are unival or
  // are null.
  var leftCheck = !node.left || isUnival(node.left) && node.left.value ===
  node.value;

  var rightCheck = !node.right || isUnival(node.right) && node.right.value ===
  node.value;

  if (leftCheck && rightCheck) {
    univalCount += 1;
    return true;

  } else {
    return false;
  }
}


// test 1

//        3
//     3    3
//   3  3  3  3
var root1 = new Node(3);
root1.left = new Node(3);
root1.left.left = new Node(3);
root1.left.right = new Node(3);
root1.right = new Node(3);
root1.right.left = new Node(3);
root1.right.right = new Node(3);

if (univalCounter(root1) === 7) {
  console.log("pass");
} else {
  console.log("fail");
}

// test 2

//          2
//      5      6
//   5   2    4   1
// 5 5  1 2  4 4  1 2
var root2 = new Node(2);
root2.left = new Node(5);
root2.left.left = new Node(5);
root2.left.left.left = new Node(5);
root2.left.left.right = new Node(5);
root2.left.right = new Node(2);
root2.left.right.left = new Node(1);
root2.left.right.right = new Node(2);
root2.right = new Node(6);
root2.right.left = new Node(4);
root2.right.left.left = new Node(4);
root2.right.left.right = new Node(4);
root2.right.right = new Node(1);
root2.right.right.left = new Node(1);
root2.right.right.right = new Node(2);

if (univalCounter(root2) === 10) {
  console.log("pass");
} else {
  console.log("fail");
}

// test 3

//     8
//       8
//     8   8
//           5
var root3 = new Node(8);
root3.right = new Node(8);
root3.right.left = new Node(8);
root3.right.right = new Node(8);
root3.right.right.right = new Node(5);

if (univalCounter(root3) === 2) {
  console.log("pass");
} else {
  console.log("fail");
}
