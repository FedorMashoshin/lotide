const assert = require('chai').assert ;
const map = require('../map');

const words = ['hi', 'ola', 'privet']
const numbers = ['How', 'are', 'You']


// console.log(assertArraysEqual);

describe("#map --> returns array after map()", () => {
  it("returns ['h', 'o', 'p'] for [hi , ola, privet]", () => {
    assert.deepEqual(map(words, word => word[0]), ['h', 'o', 'p']);
  });

  it("returns [3, 3, 3] for ['How', 'are', 'You']", () => {
    assert.deepEqual(map(numbers, number => number.length ), [3, 3, 3]);
  });
});