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
const middle = function(array) {
  let newArr = [];
    if (array.length <= 2 && array.length > 0){
      //   console.log("The array has only 1 or 2 elements") 
    } else if (array.length % 2 === 0){
        newArr =[array[(array.length/2)-1], array[array.length/2]];
      //   console.log("The array has an even number of elements"); 
    } else if (array.length % 2 !== 0){
        newArr = [array[Math.floor(array.length/2)]];
      //   console.log("The array has an odd number of elements")
    }
    return newArr;  
  };
 console.log(middle([1])); // => []
 console.log(middle([1, 2])); // => []
 console.log(middle([1, 2, 3])); // => [2]
 console.log(middle([1, 2, 3, 4, 5])); // => [3]
 console.log(middle([1, 2, 3, 4])); // => [2, 3]
 console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]