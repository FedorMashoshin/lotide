const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
    } else {
        console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
    }
};

const countLetters = function (string) {
    const result = {};
    string = string.replace(/\s/g, '');;
    for (letters of string) {
        if(result[letters]){
            result[letters] += 1
        } else {
            result[letters] = 1
        }
    }
    return result;
}

console.log(countLetters('lighthouse in the house'));