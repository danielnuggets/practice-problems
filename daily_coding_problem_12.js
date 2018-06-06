// There exists a staircase with N steps, and you can climb up either 1 or 2
// steps at a time. Given N, write a function that returns the number of unique
// ways you can climb the staircase. The order of the steps matters.
//
// For example, if N is 4, then there are 5 unique ways:
//
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could
// climb any number from a set of positive integers X? For example, if
// X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.


function stairPaths(n) {
  let twoStepsBefore = 1;
  let oneStepBefore = 1;
  let currentPathCount = 1;

  for (let i = 2; i <= n; i++) {
    currentPathCount = twoStepsBefore + oneStepBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = currentPathCount;
  }

  return currentPathCount;
}


function stairPathsRecursive(n) {
  if (n < 2) {
    return 1;
  } else {
    return stairPathsRecursive(n - 1) + stairPathsRecursive(n - 2);
  }
}

// can climb any number of steps from set
function stairPathsAnySet(n, set) { // set is an array
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  }

  let paths = 0;
  for (let i = 0; i < set.length; i++) {
    paths += stairPathsAnySet(n - set[i], set);
  }

  return paths;
}

// tests

if (stairPathsAnySet(1, [2,3,4]) === 0) {
  console.log("pass");
} else {
  console.log("fail");
}

if (stairPathsAnySet(10, [2,3,5]) === 14) {
  console.log("pass");
} else {
  console.log("fail");
}

if (stairPathsAnySet(15, [5,10,15]) === 4) {
  console.log("pass");
} else {
  console.log("fail");
}

if (stairPathsAnySet(40, [20,50,15]) === 1) {
  console.log("pass");
} else {
  console.log("fail");
}
