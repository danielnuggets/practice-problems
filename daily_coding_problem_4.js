// Given an array of integers, find the first missing positive integer in linear
// time and constant space. In other words, find the lowest positive integer
// that does not exist in the array. The array can contain duplicates and
// negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0]
// should give 3.
//
// You can modify the input array in-place.


function missingPositiveInt(integers) { // parameter is an array

  // use the array's indices to track which integers exist in the array,
  // disregarding any number < 1 (not a positive int) or greater than the array
  // length (impossible to be the lowest missing int).
  for (var i = 0; i < integers.length; i++) {

    // if element is equal to its index + 1, continue.
    if (integers[i] === i + 1) {
      continue;

    // if element is not a positive int or is greater than the array's length,
    // change value to null.
    } else if (integers[i] < 1 || integers[i] > integers.length) {
      integers[i] = null;

    // otherwise, move the element to its appropriate position, using the
    // var onDeck to track what needs to be moved next. Repeat until the onDeck
    // int does not need to be moved.
    } else {
      var onDeck = integers[i];
      integers[i] = null;

      while (onDeck > 0 && onDeck <= integers.length) {

        if (integers[onDeck - 1] === onDeck) {
          break;
        }

        // swap onDeck with integers[onDeck - 1]
        var tmp = integers[onDeck - 1];
        integers[onDeck - 1] = onDeck;
        onDeck = tmp;
      }
    }
  }

  // the first null value will be the lowest missing positive int
  for (var i = 0; i < integers.length; i++) {

    if (integers[i] === null) {
      return i + 1;
    }
  }

  //if no null values are found, return the next positive int
  return integers.length + 1;
}


// tests

if (missingPositiveInt([3, 4, -1, 1]) === 2) {
  console.log("pass");
} else {
  console.log("fail");
}

if (missingPositiveInt([1, 2, 0]) === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

if (missingPositiveInt([1, 2, 3, 4]) === 5) {
  console.log("pass");
} else {
  console.log("fail");
}

if (missingPositiveInt([1,1,1,2,2,2,3,3,3]) === 4) {
  console.log("pass");
} else {
  console.log("fail");
}
