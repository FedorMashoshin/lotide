function assertArraysEqual(actual, expected) {
const fail = `${String.fromCodePoint(0x1F534)} Assertion Failed: [${actual}] !== [${expected}] ${String.fromCodePoint(0x1F534)} `;
const pass = `${String.fromCodePoint(0x1F7E2)} Assertion Passed: [${actual}] === [${expected}] ${String.fromCodePoint(0x1F7E2)} `;

    if (actual.length != expected.length) {
        return fail;
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] != expected[i]) {
            return fail;
        }
    }
    return pass;
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); 