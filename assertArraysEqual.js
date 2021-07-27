/*const assertEqual = function(actual, expected) {
  let emoji1 = String.fromCodePoint(0x1F600);
  if (actual === expected) {
    //console.log(emoji1 + "Assertion Passed: " + actual + " === " + expected);
    console.log(`${emoji1} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    //console.log(emoji1 + "Assertion Failed: " + actual + " !== " + expected);
    console.log(`${emoji1} Assertion Failed: ${actual} !== ${expected}`);
  }
};*/
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
const assertArraysEqual = function(arr1,arr2){
  let emoji1 = String.fromCodePoint(0x1F600);
  let result = eqArrays(arr1,arr2)
  if (!result){
    console.log(`${emoji1} Assertion Failed: ${arr1} !== ${arr2}`);
  }
  else {
    console.log(`${emoji1} Assertion Passed: ${arr1} === ${arr2}`);
  }
};
  
  module.exports = assertArraysEqual, eqArrays;

