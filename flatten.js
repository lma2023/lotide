const flatten = function(elements) {
    // console.log(elements);
    let flatArray = [];
    for (let i = 0; i < elements.length; i++) {
      if (Array.isArray(elements[i])) {
        flatArray = flatArray.concat(flatten(elements[i]));
      } else {
        flatArray.push(elements[i]);
      }
    }
    console.log(flatArray);
    return flatArray;
  };
  flatten([1, 2, [3, 4], 5, [6]]);
  
  module.exports = flatten;
  