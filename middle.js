const middle = function(array) {
    let arrayResult = [];
    if (array.length === 0) {
      return arrayResult;
    } if (array.length <= 2 && array.length > 0) {
      return arrayResult;
    } else if (array.length % 2 === 0) {
      return arrayResult = [array[(array.length / 2) - 1], array[array.length / 2]];
    } else {
      return arrayResult = [array[(array.length - 1) / 2]];
    }
  };
 
  module.exports = middle;