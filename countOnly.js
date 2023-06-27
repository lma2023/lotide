const assertEqual = function(actual, expected) {
    if (actual === expected){
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
};
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    if (itemsToCount[item]) { 
      if (result[item]) { 
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Karima"], undefined);

