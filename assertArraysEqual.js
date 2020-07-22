
function assertArraysEqual(arr1, arr2) {
const fail = `${String.fromCodePoint(0x1F534)} Assertion Failed: [${arr1}] !== [${arr2}] ${String.fromCodePoint(0x1F534)} `;
const pass = `${String.fromCodePoint(0x1F7E2)} Assertion Passed: [${arr1}] === [${arr2}] ${String.fromCodePoint(0x1F7E2)} `;

    if (arr1.length != arr2.length) {
        return fail;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return fail;
        }
    }
    return pass;
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));