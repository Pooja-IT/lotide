
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
const findKeyByValue = function(input,search) {
  for (let key of Object.keys(input)) {
    //console.log(Object.keys(input));
    if (input[key].includes(search)) {
      //console.log(input[key]);
      return key;
    }
  }
  return undefined;
};
// Using for loop
/*const findKeyByValue = function(input,search) {
  let arr = Object.keys(input);
  for (let key  = 0; key < arr.length; key++) {
    if (input[arr[key]] === search) {
    return arr[key];
    }
  }
};*/
const bestTVShowsByGenre = {
  sci_Fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");

