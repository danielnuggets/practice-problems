// Given a list of integers, write a function that returns the largest sum of
// non-adjacent numbers.
//
// For example, [2, 4, 6, 8] should return 12, since we pick 4 and 8.
// [5, 1, 1, 5] should return 10, since we pick 5 and 5.


// stepping through the array, if an integer is to be part of the sum, then it
// must be added to the running sum at 2 spots before or 3 spots before.
// anything more than 3 spots before would be included in these 2 sums. Using
// this property, we can track the largest running sums for the last 3 positions
// and choose the largest sum at the end.
function largestNonAdjacentSum(intsArray) {
  var sum1 = 0; // largest sum possible at last visited position
  var sum2 = 0; // largest sum possible at second to last visited position
  var sum3 = 0; // largest sum possible at third to last visited position

  var newSum;
  var largestInt = intsArray[0]; //track largest integer

  for (var i = 0; i < intsArray.length; i++) {

    if (intsArray[i] > largestInt) {
        largestInt = intsArray[i];
    }

    if (sum2 > sum3) { // choose the greater sum
      // only add the current element to the sum if it's greater than 0
      newSum = intsArray[i] > 0 ? sum2 + intsArray[i] : sum2;

    } else {
      newSum = intsArray[i] > 0 ? sum3 + intsArray[i] : sum3;
    }

    // reset sum values
    sum3 = sum2;
    sum2 = sum1;
    sum1 = newSum;
  }

  var largestSum = Math.max(sum1, sum2);

  // if the largest sum is not > 0, then return the largest integer instead.
  return largestSum > 0 ? largestSum : largestInt;
}


// tests

var list1 = [2, 4, 6, 8];
var list2 = [5, 1, 1, 5];
var list3 = [9, 0, -3, -2, 5, 24, -3, 17, 23, 1];
var list4 = [-17, -8, -23, -100, -23, -53];

if (largestNonAdjacentSum(list1) === 12) {
  console.log("pass");
} else {
  console.log("fail");
}

if (largestNonAdjacentSum(list2) === 10) {
  console.log("pass");
} else {
  console.log("fail");
}

if (largestNonAdjacentSum(list3) === 56) {
  console.log("pass");
} else {
  console.log("fail");
}

if (largestNonAdjacentSum(list4) === -8) {
  console.log("pass");
} else {
  console.log("fail");
}
