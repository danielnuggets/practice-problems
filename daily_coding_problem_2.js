// Given an array of integers, return a new array such that each element at index i
// of the new array is the product of all the numbers in the original array except
// the one at i. Solve it without using division and in O(n) time.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be
// [2, 3, 6].

function generateProducts(inputArray) {
// precedingProducts[x] will equal the product of all elements before element x in
// inputArray, and ensuingProducts[x] will equal the product of all elements
// after x in inputArray

  var precedingProducts = [1];
  var ensuingProducts = [1];

  for (var i = 0, j = inputArray.length - 1; i < inputArray.length - 1; i++, j--) {
    precedingProducts.push(inputArray[i] * precedingProducts[i]);
    ensuingProducts.unshift(inputArray[j] * ensuingProducts[0]);
  }

  var newArray = [];

// multiply elements to get the final products
  for (var i = 0; i < inputArray.length; i++) {
    newArray[i] = precedingProducts[i] * ensuingProducts[i];
  }

  console.log(newArray);
  return newArray;
}


// test 1
var result1 = generateProducts([1, 2, 3, 4, 5]);

if (JSON.stringify(result1) === "[120,60,40,30,24]") {
  console.log("pass");
} else {
  console.log("fail");
}

// test 2
var result2 = generateProducts([90, -1]);

if (JSON.stringify(result2) === "[-1,90]") {
  console.log("pass");
} else {
  console.log("fail");
}

// test 3
var result3 = generateProducts([4, 2, 6, 1, 3]);

if (JSON.stringify(result3) === "[36,72,24,144,48]") {
  console.log("pass");
} else {
  console.log("fail");
}
