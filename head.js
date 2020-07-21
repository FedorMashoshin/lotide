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

const head = function(arr){
   const result = arr[0];
   return result;
}

assertEqual(head([21,7,6,5,5,5,4]), 5);
assertEqual(head(['Hello', 'My', 'Name', 'Is', 'Fedor']), 'Hello');