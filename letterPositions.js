const assertArraysEqual = function(arr1,arr2) {
  let emoji1 = String.fromCodePoint(0x1F600);
  let result = eqArrays(arr1,arr2);
  if (!result) {
    console.log(`${emoji1} Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`${emoji1} Assertion Passed: ${arr1} === ${arr2}`);
  }
};
const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }  else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);