const assert = require('chai').assert;
const tail   = require('../tail');
describe("#Tail", () => {
  it("should return [Lighthouse, Labs] for [ Yo Yo, Lighthouse, Labs]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words),["Lighthouse", "Labs"]);
  });
});
//const tail = require('../tail');
//const assertEqual = require('../assertEqual');
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!