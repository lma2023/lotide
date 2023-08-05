const flatten = function(elements) {
    
    let flatArray = [];
    for (let i = 0; i < elements.length; i++) {
      if (Array.isArray(elements[i])) {
        flatArray = flatArray.concat(flatten(elements[i]));
      } else {
        flatArray.push(elements[i]);
      }
    }
    
    return flatArray;
  };
  
  module.exports = flatten;
  