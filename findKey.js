const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
  }  else  {
    console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
  }
};



const findKey = function(obj, callback){
    for(item in obj){
      if(callback(obj[item])){
          return item;
      }
      }
} 
  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), 'noma')