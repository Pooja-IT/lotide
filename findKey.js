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
const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};
const out = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(out);
console.log(assertEqual(out, "noma"));
