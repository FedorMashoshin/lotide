const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
    } else {
        console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
    }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


function eqArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);