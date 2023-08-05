
const without = function(sourceArray, itemToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

module.exports = without;