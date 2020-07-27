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
 module.exports = middle;