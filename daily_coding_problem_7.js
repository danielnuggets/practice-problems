// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the
// number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could be decoded as
// 'aaa, 'ka', and 'ak'.

function encodingCounter(s) {
  // check if first character is 0
  if (s.charAt(0) === '0') {
    return 0;
  }

  // check for any invalid 0's
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === '0' && !['1', '2'].includes(s.charAt(i - 1))) {
      return 0;
    }
  }

  return encodingCounterHelper(s);
}

function encodingCounterHelper(msg) {
  let firstTwo = msg.charAt(0) + msg.charAt(1);

  if (msg.length < 2) {
    return 1;

  // if first two chars are 11 - 26, divide into two paths - one
  // interpreting as 2 single digits, and the other as 1 double digit.
} else if (firstTwo > 10 && firstTwo < 27 && msg.charAt(1) != '0' && msg.charAt(2) != '0') {
    return encodingCounterHelper(msg.substr(1)) + encodingCounterHelper(msg.substr(2));

  } else {
    return encodingCounterHelper(msg.substr(1));
  }
}


// tests

var msg1 = "111";
if (encodingCounter(msg1) === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg2 = "2373149201525920";
if (encodingCounter(msg2) === 16) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg3 = "12121";

if (encodingCounter(msg3) === 8) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg4 = "99999999";

if (encodingCounter(msg4) === 1) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg5 = "12";

if (encodingCounter(msg5) === 2) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg6 = "0"

if (encodingCounter(msg6) === 0) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg7 = "91362931004"

if (encodingCounter(msg7) === 0) {
  console.log("pass");
} else {
  console.log("fail");
}
