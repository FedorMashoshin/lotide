const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
  }  else  {
    console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
  }
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
const findKeyByValue = function(objGenre, movie){
for(key in objGenre){
    if(movie === objGenre[key]){
        return key 
    }
}
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



