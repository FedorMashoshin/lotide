function without(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1)
            }
        }
    }
    return arr1;
}
console.log(without([1, 2, 3, 4, 1, 5, 6], [1, 2, 3]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

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

    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); 
    console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));