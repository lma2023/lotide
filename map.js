const assertArraysEqual = require("./assertArraysEqual");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const num = [1, 2, 3];

console.log(map(words, word => word[0]));
let example2 = map(num, (num) => num * 10);
assertArraysEqual(example2, [10, 20, 30, 40, 50]);

module.exports = map;