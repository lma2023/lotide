const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('should return [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it('should return [2,3] for [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it("should return ['carol'] for ['dave','carol','frank']", () => {
    assert.deepEqual(middle(['dave','carol','frank']), ['carol']);
  });

  it("should return ['is', 'a'] for ['this','is','a','test']", () => {
    assert.deepEqual(middle(['this','is','a','test']), ['is','a']);
  });

});