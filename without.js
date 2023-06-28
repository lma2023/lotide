const assertArraysEqual = require("./assertArraysEqual");

const without = function(sourceArray, itemToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthoused"];
let output = without(words, ["lighthouse"]); // => [2, 3]
console.log(output);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;