
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
const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5, 6];
assertArraysEqual(map(numbers, number => number * 3), [3, 6, 9, 12, 15, 18]);

const empty = [];
assertArraysEqual(map(empty, number => number * 2), []);

