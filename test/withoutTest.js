const assert = require('chai').assert;
const without = require('../without');


describe("#without --> return array without element, which we chose", () => {
    it("returns [hello, world] for [hello, world, lighthouse]", () => {
      assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
    });
  });