// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the
// number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could be decoded as
// 'aaa, 'ka', and 'ak'.


function decodingCounter(s) {
  let countTwoBefore = 1;
  let countOneBefore = 1;
  let countCurrent;

  if (s.charAt(0) === '0') {
    return 0;
  } else if (s.length < 2) {
    return 1;
  }

  for (let i = 1; i < s.length; i++) {
    let prev = s.charAt(i - 1);
    let curr = s.charAt(i);
    let next = s.charAt(i + 1);

    // check for invalid 0
    if (curr === '0' && !['1','2'].includes(prev)) {
      return 0;
    // check for ambiguous double digit number
  } else if (prev+curr > 10 && prev+curr < 27 && curr !== '0' && next !== '0') {
      countCurrent = countTwoBefore + countOneBefore;
    } else {
      countCurrent = countOneBefore;
    }

    countTwoBefore = countOneBefore;
    countOneBefore = countCurrent;
  }

  return countCurrent;
}

// tests

var msg1 = "111";
if (decodingCounter(msg1) === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg2 = "2373149201525920";
if (decodingCounter(msg2) === 16) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg3 = "12121";
if (decodingCounter(msg3) === 8) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg4 = "99999999";
if (decodingCounter(msg4) === 1) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg5 = "12";
if (decodingCounter(msg5) === 2) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg6 = "0"
if (decodingCounter(msg6) === 0) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg7 = "91362931004"
if (decodingCounter(msg7) === 0) {
  console.log("pass");
} else {
  console.log("fail");
}
