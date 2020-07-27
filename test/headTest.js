const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
    it("returns 21 for [21,7,6,5,5,5,4]", () => {
      assert.strictEqual(head([21,7,6,5,5,5,4]), 21);
    });

    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '5'); 
      });
  });