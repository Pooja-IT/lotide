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

const takeUntil = function(array, callback) {
  array.forEach(function(item, index) {
    if (callback(item)) {
      array = array.slice(0, index);
    } 
});
return array;
};
const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [1,2,5,7,2]));

console.log("---");

const data2 = ["I've", "been", "to", "Hollywood",",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
