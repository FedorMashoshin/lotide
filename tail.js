const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
  } else {
    console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
  }
};

const tail = function(arr) {
  delete arr[0];
  return arr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);