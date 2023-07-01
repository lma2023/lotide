const assertArraysEqual = require("./AssertArrayEqual");

const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
module.exports = takeUntil;