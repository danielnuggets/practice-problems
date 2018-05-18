// Given the root to a binary tree, implement serialize(root), which serializes
// the tree into a string, and deserialize(s), which deserializes the string
// back into the tree.


// basic binary tree implementation
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// "1,n,3,n,n,6,7"
function serialize(root) {
  //running string of node values separated by commas
  var s = "";
  // track current level of tree and next level of tree in arrays
  var currentLevel = [root];
  var nextLevel = [];

  while (currentLevel.some(isNotNull)) {

    for (var i = 0; i < currentLevel.length; i++) { // loop thru current level

      // add current level node data to string
      if (currentLevel[i] === null) {
        s += "n" + ","; // in the string, "n" signifies null
        nextLevel.push(null, null);
        continue;
      } else {
        s += currentLevel[i].data + ",";
      }

      // add left child to nextLevel array.
      if (currentLevel[i].left) {
        nextLevel.push(currentLevel[i].left);
      } else {
        nextLevel.push(null);
      }

      // add right child to nextLevel array.
      if (currentLevel[i].right) {
        nextLevel.push(currentLevel[i].right);
      } else {
        nextLevel.push(null);
      }
    }

    // start again with the next level as the current level.
    currentLevel = nextLevel;
    nextLevel = [];
  }

  return s.slice(0, -1) // return the serialized string, removing last comma
}

// helper function for the array.some method
function isNotNull(value) {
  return value !== null;
}

function deserialize(s) {
  // input string should have values separated by commas
  var values = s.split(",");

  // convert array of strings into array of ints
  for (var i = 0; i < values.length; i++) {
    if (values[i] === "n") {
      values[i] = null;
    } else {
      values[i] = parseInt(values[i]);
    }
  }

  var root = new Node(values[0]);
  var currentLevel = [root];
  var nextLevel = [];
  var nextLevelIndex = 1;
  var leftChild;
  var rightChild;

  while (nextLevelIndex < values.length) {

    // loop through current level, assigning children nodes and keeping track
    // of the next level
    for (var i = 0; i < currentLevel.length; i++) {

      if (currentLevel[i] && values[nextLevelIndex]) {
        leftChild = new Node(values[nextLevelIndex]);
        currentLevel[i].left = leftChild;
      } else {
        leftChild = null;
      }

      if (currentLevel[i] && values[nextLevelIndex + 1]) {
        rightChild = new Node(values[nextLevelIndex + 1]);
        currentLevel[i].right = rightChild;
      } else {
        rightChild = null;
      }

      nextLevel.push(leftChild, rightChild);
      nextLevelIndex += 2; //nextLevelIndex increments by 2
    }

    // start over with next level array as the current level array.
    currentLevel = nextLevel;
    nextLevel = [];
  }

  return root;
}


// test 1
var a = "1,2,3,4,5,6,7";
var root1 = deserialize(a);

if (serialize(root1) === "1,2,3,4,5,6,7"){
  console.log("pass");
} else {
  console.log("fail");
}

// test 2
var b = "1,n,3,n,n,6,7";
var root2 = deserialize(b);

if (serialize(root2) === "1,n,3,n,n,6,7"){
  console.log("pass");
} else {
  console.log("fail");
}

// test 3
var c = "2";
var root3 = deserialize(c);

if (serialize(root3) === "2"){
  console.log("pass");
} else {
  console.log("fail");
}
