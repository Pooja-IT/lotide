const assertEqual = function(actual, expected) {
  let emoji1 = String.fromCodePoint(0x1F600);
  if (actual === expected) {
    console.log(`${emoji1} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${emoji1} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head =  function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
