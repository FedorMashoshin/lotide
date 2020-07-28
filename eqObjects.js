const eqObjects = function (object1, object2) {
    // If not even objects return false!
    let keys1 = Object.keys(object1);
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    //If we have object --> compare values
    for (key of keys1) {
        //If we have arrays --> compare values
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            return eqArrays(object1[key], object2[key])
        }
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}


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


const ab = {
    a: "1",
    b: "2"
};
const ba = {
    b: "2",
    a: "1"
};
console.log(eqObjects(ab, ba)); // => true

const cd = {
    c: "1",
    d: ["2", 3]
};
const dc = {
    d: ["2", 3],
    c: "1"
};
console.log(eqObjects(cd, dc)); // => true

const cd2 = {
    c: "1",
    d: ["2", 3, 4]
};
console.log(eqObjects(cd, cd2)); // => false