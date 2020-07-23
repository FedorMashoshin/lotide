const green = String.fromCodePoint(0x1F7E2);
const red = String.fromCodePoint(0x1F534);

const assertObjectsEqual = function (object1, object2) {
    const inspect = require('util').inspect;
    // ALERT messages (pass or fail)
    const passMsg = ` ${green} Assertion Passed: [${inspect(object1)}] !== [${inspect(object2)}] ${green}` 
    const failMsg = ` ${red} Assertion Failed: [${inspect(object1)}] !== [${inspect(object2)}] ${red}`
    // If not even objects return fail!
    let keys1 = Object.keys(object1);
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return failMsg;
    }
    for (key of keys1) {
        //Checking if we have 2 arrays
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            //Comparing length of our arrays
            if (object1[key].length != object2[key].length) {
                return failMsg;
            }
             //Comparing values of our arrays
            for (let i = 0; i < object1[key].length; i++) {
                if (object1[key][i] != object2[key][i]) {
                    return failMsg;
                }
            }
            // If our arrays are totally equal we pass 
            return passMsg;
        }
        //If we have object --> compare values
        if (object1[key] !== object2[key]) {
            return failMsg;
        }
    }
    return passMsg;
}

// <--------------------- TESTS ---------------------> \\

const ab = {
    a: "1",
    b: "2"
};
const ba = {
    b: "2",
    a: "1"
};

console.log(assertObjectsEqual(ab, ba)); 

const cd = {
    c: "1",
    d: ["2", 3]
};
const dc = {
    d: ["2", 3],
    c: "1"
};
console.log(assertObjectsEqual(cd, dc));
const cd2 = {
    c: "1",
    d: ["2", 3, 4]
};
console.log(assertObjectsEqual(cd, cd2)); 