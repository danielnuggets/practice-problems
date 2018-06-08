// Given an integer k and a string s, find the length of the longest substring
// that contains at most k distinct characters.
//
// For example, given s = "abcba" and k = 2, the longest substring with k
// distinct characters is "bcb", so your function should return 3.


function longestSubstringLength(k, s) {
  if (k < 1) return 0;

  let charHash = {}; // keys are characters, values are counts in substring
  let charCount = 0; // number of unique characters in substring
  let longestLength = 0; // longest substring length
  let beginningPointer = 0; // index marking the beginning of substring
  let endPointer = 0; // index marking the end of substring

  while (endPointer < s.length) {
    // if endPointer's char is a key in obj charHash with a value > 0, then it
    // already exists in the substring. increment its value by 1.
    if (charHash[s.charAt(endPointer)]) {
      charHash[s.charAt(endPointer)] += 1;
    // otherwise, it is a new character.
    } else {
      charHash[s.charAt(endPointer)] = 1;
      charCount += 1;

      // if charCount is > k (allowed # of unique chars), move beginningPointer until there
      // is 1 less unique char in the substring. This is achieved by stepping thru the
      // substring and decrementing the respective values in charHash until a 0 value is reached.
      if (charCount > k) {
        for (let i = beginningPointer; i < endPointer; i++) {
          charHash[s.charAt(i)] -= 1;

          if (charHash[s.charAt(i)] === 0) {
            beginningPointer = i + 1;
            break;
          }
        }
        charCount -= 1;
      }
    }
    // update longestLength
    let length = endPointer - beginningPointer + 1;
    if (length > longestLength) longestLength = length;

    endPointer += 1;
  }
  return longestLength;
}


// TESTS
if (longestSubstringLength(2, "abcba") === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

if (longestSubstringLength(1, "abbba") === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

if (longestSubstringLength(3, "abcbadddeeefffeeedddgh") === 15) {
  console.log("pass");
} else {
  console.log("fail");
}

if (longestSubstringLength(0, "abcba") === 0) {
  console.log("pass");
} else {
  console.log("fail");
}

if (longestSubstringLength(5, "abci") === 4) {
  console.log("pass");
} else {
  console.log("fail");
}
