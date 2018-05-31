// Implement an autocomplete system. That is, given a query string s and a
// dictionary of all possible query strings, return all strings in the
// dictionary that have s as a prefix.
//
// Hint: Try preprocessing the dictionary into a more efficient data structure
// to speed up queries.


// all possible query strings are stored in a hash of character hashes, charHash
var charHash;

function preprocess(dictionary) { // dictionary is an array of queries
  charHash = {};

  // for each query, split into an array of characters
  for (var i = 0; i < dictionary.length; i++) {
    var query = dictionary[i];
    var chars = query.split("");
    var currObj = charHash;

    // for each character, create a nested hash if it doesn't already exist
    for (var j = 0; j < chars.length; j++) {
      var char = chars[j];

      if (currObj[char] === undefined) {
        currObj[char] = {end: false};
      }

      currObj = currObj[char];
    }

    // mark the end of the query string by setting end to true
    currObj.end = true;
  }

  return charHash;
}

function autocomplete(query) {
  var queryChars = query.split(""); // split input query into array of chars
  var objPointer = charHash;

  // use array of chars to traverse the charHash
  for (var i = 0; i < queryChars.length; i++) {
    var queryChar = queryChars[i];

    if (objPointer[queryChar] === undefined) {
      return [];
    } else {
      objPointer = objPointer[queryChar];
    }
  }

  var queryList = [];
  buildQueryList(objPointer, query, function(s){queryList.push(s)});
  return queryList;
}

function buildQueryList(obj, str, callback) {

  // for each obj key, expore its nested subhashes until there are no more.
  // every time the key end is true, add the string to the list.
  for (var key in obj) {

    if (obj.hasOwnProperty(key)) {

      if (key === "end" && obj[key]) {
        //callback function pushes the string into the queryList
        callback(str);

      } else if (key === "end" && !obj[key]) {
        continue;

      } else {
        buildQueryList(obj[key], str + key, callback); // recursive
      }
    }
  }
}


// test 1
var dictionary1 =
  ["what is the meaning of life",
  "where is Taco Bell",
  "why are dolphins smart",
  "how do geese fly"];
preprocess(dictionary1);
var list1 = autocomplete("wh");
if (list1[0] === "what is the meaning of life" &&
  list1[1] === "where is Taco Bell" &&
  list1[2] === "why are dolphins smart" && list1.length === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

// test 2
var dictionary2 = ["what", "whatup", "whatup dude"];
preprocess(dictionary2);
var list2 = autocomplete("what");
if (list2[0] === "what" && list2[1] === "whatup" && list2[2] === "whatup dude"
  && list2.length === 3) {
  console.log("pass");
} else {
  console.log("fail");
}

// test 3
var dictionary3 = ["oreo", "cookies"];
preprocess(dictionary3);
var list3 = autocomplete("milk");
if (list3.length === 0) {
  console.log("pass");
} else {
  console.log("fail");
}
