const countLetters = function (string) {
    const result = {};
    string = string.replace(/\s/g, '');
    for (letters of string) {
        if(result[letters]){
            result[letters] += 1
        } else {
            result[letters] = 1
        }
    }
    return result;
}

console.log(countLetters('lighthouse in the house'));