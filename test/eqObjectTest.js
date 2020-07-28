const assert = require('chai').assert
const eqObjects = require('../eqObjects')


describe("#eqObjects", () => {
    it("Comparing {a: 1, b: 2} and {b: 2, a: 1} --> returns true", () => {
        assert.deepEqual(eqObjects(ab, ba), true);
    });

    it("Comparing {c: 1, d: ['2', 3]} and {c: 1, d: ['2', 3, 4] } --> returns false", () => {
        assert.deepEqual(eqObjects(cd, cd2), false);
    });
});



const ab = {
    a: "1",
    b: "2"
};
const ba = {
    b: "2",
    a: "1"
};

const cd = {
    c: "1",
    d: ["2", 3]
};

const cd2 = {
    c: "1",
    d: ["2", 3, 4]
};