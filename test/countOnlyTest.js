const assert = require('chai').assert;
const countOnly = require('../countOnly');

const nameCount = countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], {
    "Jason": true,
    "Karima": true,
    "Fang": true
});

describe("return how many different names we have in our array [Karl, Salima, Agouhanna, Fang, Kavith, Jason, Salima, Fang, Joe]", () => {
    it("[Jason] --> returns 1 ", () => {
        assert.strictEqual(nameCount["Jason"], 1);
    });

    it("[Karima] --> undefined", () => {
        assert.strictEqual(nameCount["Karima"], undefined);
    });

    it("[Fang] --> returns 2 ", () => {
        assert.strictEqual(nameCount["Fang"], 2);
    });
});