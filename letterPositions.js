const letterPositions = function (sentence) {
    sentence = sentence.replace(/\s/g, '');
    let result = {}
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i]; // ---> Now every 'letter' is our letter from our sentence

        if (result[letter]) { // ---> If there is letter in there ->:
            result[letter].push(i) // ---> Adding index(i) to our existing array
        } else {
            result[letter] = [i] // If there is no letter -> creating one
        }
    }

    return result;
};

module.exports = letterPositions;