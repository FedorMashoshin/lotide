const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Yo Yo", "Lighthouse", "Labs"])


describe("#tail", () => {
    it("returns Lighthouse and Labs for [Yo Yo, Lighthouse, Labs] ", () => {
      assert.strictEqual(result[0], "Lighthouse");
      assert.strictEqual(result[1], "Labs");
    });
  });


