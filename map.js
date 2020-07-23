const words = ['hi', 'ola', 'privet']
const numbers = ['How', 'are', 'You', 'doing']
const logic = ['Yes','Yes', 'No']

function assertArraysEqual(actual, expected) {
    const fail = `${String.fromCodePoint(0x1F534)} Assertion Failed: [${actual}] !== [${expected}] ${String.fromCodePoint(0x1F534)} `;
    const pass = `${String.fromCodePoint(0x1F7E2)} Assertion Passed: [${actual}] === [${expected}] ${String.fromCodePoint(0x1F7E2)} `;

    if (actual.length !== expected.length) {
        return fail;
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return fail;
        }
    }
    return pass;
}

const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}
const results1 = map(words, word => word[0]); // same as function callback(word) { return word[0] }
const results2 = map(numbers, number => number.length )
const results3 = map(logic, logic => {
    if(logic === 'Yes'){
        return ' + '
    } else {
        return ' - '
    }
})

// <---------------------------------- TEST ---------------------------------- >
console.log(assertArraysEqual(results1, ['h', 'o', 'p']));
console.log(assertArraysEqual(results2, [3, 3, 3, 3]));
console.log(assertArraysEqual(results3, [' + ',' + ',' - ']));
