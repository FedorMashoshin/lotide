const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;