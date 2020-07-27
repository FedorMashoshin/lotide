const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Yo Yo", "Lighthouse", "Labs"])


describe("#tail", () => {
    it("returns [ Yo Yo, Lighthouse, Labs] for [Hello ,Yo Yo, Lighthouse, Labs] ", () => {
      assert.deepEqual(result, [ "Lighthouse", "Labs"]);
    });
  });


