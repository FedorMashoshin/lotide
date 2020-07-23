const letterPositions = function (sentence) {
    sentence = sentence.replace(/\s/g, '');
    let result = {}
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i]; // ---> Now every 'letter' is our letter from our sentence

        if (result[letter]) { // ---> If there is letter in there ->:
            console.log('yes letter')
            result[letter].push(i) // ---> Adding index(i) to our existing array
        } else {
            console.log('no letter')
            result[letter] = [i] // If there is no letter -> creating one
        }
    }

    return result;
};

console.log(letterPositions('hello'));

// "apple"
// { a: [0], p: [1, 2], l: [3], e: [4]}
// result = {}
// loop 1: letter="a", index=0
//   result: {a: [0]}
// loop 2: letter="p", index=1
//   result: {a: [0], p: [1]}
// loop 3: letter="p", index=2
//   result: {a: [0], p: [1, 2]}
//   result: {a: [0], p: [2]} // wrong result, but good as a first step when writing the implementation
// ...
// exit when done looping over letters