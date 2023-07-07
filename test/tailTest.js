const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const tail = require("../tail");


describe("#tail", () => {
  it("removes first number element in [1, 2, 3], and returns [2, 3]", () => {
    console.log(tail([1, 2, 3]));
    assert.strictEqual(eqArrays(tail([1, 2, 3]), [2, 3]), true);
  });

  it("removes 1st string element in ['5', '6'] and returns ['6']", () => {
    assert.strictEqual(eqArrays(tail(["5", "6"]), ["6"]), true);
  });
});