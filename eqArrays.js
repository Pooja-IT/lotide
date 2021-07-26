const assertEqual = function(actual, expected) {
  let emoji1 = String.fromCodePoint(0x1F600);
  if (actual === expected) {
    //console.log(emoji1 + "Assertion Passed: " + actual + " === " + expected);
    console.log(`${emoji1} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    //console.log(emoji1 + "Assertion Failed: " + actual + " !== " + expected);
    console.log(`${emoji1} Assertion Failed: ${actual} !== ${expected}`);
  }
};
<<<<<<< HEAD
const eqArrays =  function(a,b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
=======
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
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

>>>>>>> backup
