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
 module.exports = without;


