const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      console.log(`${key}`);
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;