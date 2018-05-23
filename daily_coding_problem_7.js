// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the
// number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could be decoded as
// 'aaa, 'ka', and 'ak'.

function encodingCounter(msg) {
  if (msg.length < 2) {
    return 1;

  } else if (msg.charAt(0) > 0 && msg.charAt(0) < 3 && msg.charAt(1) < 7) {
    return encodingCounter(msg.substr(1)) + encodingCounter(msg.substr(2));

  } else {
    return encodingCounter(msg.substr(1));
  }
}


// tests

var msg1 = "111";

if (encodingCounter(msg1) === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

var msg2 = "23737490204525920";

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
