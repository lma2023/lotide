const assertEqual = require('./AssertEqual');
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log('false');
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

eqArrays([1, 2, 3], [1, 2, 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
module.exports = eqArrays;