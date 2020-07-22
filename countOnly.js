const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(` ${green} Assertion Passed: [${actual}] === [${expected}] ${green}`);
    } else {
        console.log(` ${red} Assertion Failed: [${actual}] !== [${expected}] ${red}`);
    }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
    const results = {}
    for (name of allItems) {

        // Only increment our count in results if the item is found in the itemsToCount object.
        // Increment the counter for each item:
        // Set a property with that string key to:
        // The value that was already there (or zero if nothing there) with 1 added to it.

        if (itemsToCount[name]) {
            if (results[name]) {
                results[name] += 1;
            } else {
                results[name] = 1;
            }
        }
    }
    return results;
}
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);