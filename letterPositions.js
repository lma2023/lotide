
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

  module.exports = letterPositions;
