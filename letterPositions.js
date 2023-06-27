
const assertArraysEqual = require("./AssertArrayEqual");

eqArrays(assertArraysEqual([1, 2, 3], [1, 2, 5]), true);
module.exports = assertArraysEqual;
const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        const item = sentence[i];
        if (!results[item]) {
          results[item] = [i];
        } else {
          results[item].push(i);
        }
      }
    }
    return results;
  };
  console.log(letterPositions("lighthouse in the house"));
  assertArraysEqual(letterPositions("hello").e, [1]);

  module.exports = letterPositions;
