function assertArraysEqual(actual, expected) {
    const fail = `${String.fromCodePoint(0x1F534)} Assertion Failed: [${actual}] !== [${expected}] ${String.fromCodePoint(0x1F534)} `;
    const pass = `${String.fromCodePoint(0x1F7E2)} Assertion Passed: [${actual}] === [${expected}] ${String.fromCodePoint(0x1F7E2)} `;

    if (actual.length !== expected.length) {
        return fail;
    }  for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return fail;
        }
    }
    return pass;
}

const middle = function (array) {
    let finalArr = [];
    if (array.length === 1 || array.length === 2) {
    
    } else if (array.length % 2 !== 0) {
        finalArr[0] = array[Math.floor(array.length / 2)]
        
    } else {
        finalArr[0] = array[(array.length / 2) - 1];
        finalArr[1] = array[array.length / 2];  
    }
    return finalArr;
}

console.log(assertArraysEqual(middle([18]),[]));