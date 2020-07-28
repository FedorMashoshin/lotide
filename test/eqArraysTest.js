const assert = require('chai').assert;
const eqArrays = require('../eqArrays')



describe("#eqArrai", () => {
  it("copmaring [1, 2, 3] and [1, 2, 3]] returns true", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("copmaring [1, 2, 3, 5] and [1, 2, 3, 7]] returns false", () => {
    assert.equal(eqArrays([1, 2, 3, 5], [1, 2, 3, 7]), false);
  });
});