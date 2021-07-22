
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
  


const without = function(source,itemsToRemove){
  let newArr = [...source];
  for(let i = 0; i <= newArr.length;i++) {
    for (let values of itemsToRemove){
      if(source[i] === values){
        let removedItem = newArr.indexOf(values);
        newArr.splice(removedItem,1);
      }
    }
  }
  return newArr;
} ;
console.log(without([1, 2, 3], [1])) ;// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);








  

