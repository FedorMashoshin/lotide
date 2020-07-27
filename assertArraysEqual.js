function assertArraysEqual(actual, expected) {
    if (actual.length !== expected.length) {
        return ` 🔴🔴 Assertion Failed: [${actual}] !== [${expected}] 🔴🔴 `;
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return ` 🔴🔴 Assertion Failed: [${actual}] !== [${expected}] 🔴🔴 `;
        }
    }
    return ` 🟢🟢 Assertion Passed: [${actual}] === [${expected}] 🟢🟢 `;
}

module.exports = assertArraysEqual;