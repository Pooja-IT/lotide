const eqObjects = function(object1, object2){
  if (Object.keys(object1).length === Object.keys(object2).length){
    for(let key of Object.keys(object1) ){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
            if (!eqArrays(object1[key],object2[key])){
             return false;       
            }
        }
        
    }
    return true;
}
return false;    
};
const assertObjectsEqual = function(actual,expected){
  let emoji1 = String.fromCodePoint(0x1F600);
  const inspect = require(`util`).inspect;
  if (actual === expected) {
    console.log(`${emoji1} Assertion Passed: ${inspect(ab)} === ${inspect(ba)}`);
  } else if (actual !== expected) {
      console.log(`${emoji1} Assertion Failed: ${inspect(ab)} !== ${inspect(ba)}`);
  }
};
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba),true));