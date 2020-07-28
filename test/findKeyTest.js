const assert = require('chai').assert;
const findKey = require('../findKey');


describe("#findKey", () => {
    it("returns noma (as stars === 2 )", () => {
        assert.strictEqual(findKey({
            "Blue Hill": {
              stars: 1
            },
            "noma": {
              stars: 2
            },
          }, x => x.stars === 2), 'noma');
    });
});

