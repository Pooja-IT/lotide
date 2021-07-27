const assert = require('chai').assert;
const middle   = require('../middle');
describe("#Middle", () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("should return [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it("should return [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it("should return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("should return [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
  it("should return [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
});
//const assertArraysEqual = require('../assertArraysEqual');
//const middle = require('../middle');

//console.log(middle([1])); // => []
//console.log(middle([1, 2])); // => []
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4, 5])); // => [3]
//console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
//assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); 
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]); 