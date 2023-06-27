const assertEqual = function(actual, expected) {
    if (actual === expected){
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    const countLetters = function(words) {
        const results = {};
        for (const letter of words) {
          //each letter in the allItems array
          if (letter !== " ") {
            if (results[letter] === undefined) {
              results[letter] = 1;
            } else {
              results[letter] += 1;
            }
          }
        }
        console.log(results);
        return results;
      };
      
      countLetters('kedss');