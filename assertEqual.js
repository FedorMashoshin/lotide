const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
  }  else  {
    console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);