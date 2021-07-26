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
const countLetters = function(phrase) {
  const charsObj = {};
  const letters = phrase.split('');
  for (const letter of letters) {
    if (letter !== ' ') {
      if (charsObj[letter]) {
        charsObj[letter] = charsObj[letter] + 1;
      } else {
        charsObj[letter] = 1;         
      }
    }
  }
  return charsObj;
};
console.log(countLetters("lighthouse in the house"));
console.log(countLetters('LHL'));
