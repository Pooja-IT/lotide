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
const tail =  function(array) {
  return array.slice(1, 3);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
