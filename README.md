# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fedor_mashoshin/lotide`

**Require it:**

`const _ = require('@fedor_mashoshin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.head([1, 2, 3]) // => [1]`
`const results = _.middle([1, 2, 3]) // => [2]`
`const results = _.countOnly([Bob, Alice, Bob],{ Bob : true }) // { Bob: 2 }`
`const results = _.letterPositions(hello) // => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }`
`const results = _.findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" }, "The Wire"), "drama" // => drama`
`const results = _.map(['hi','hola','privet'],  word => word[0]) // => [h, h, p]`
`const results = _.without(['Hola', 'Privet', 'Hi'],['Hi']) // => ['Hola' , 'Privet']`
`const results = _.findKey({'Blue Hill': { stars:1 }, 'Nova':{ stars:2},}, x => x.stars === 2) // => Nova`

## Documentation

The following functions are currently implemented:

* `function1(tail)`: returning all elements, except very first one from the array.
* `function2(head)`: returning very first element from the array.
* `function3(middle)`: returning middle elements from our array (if we have even number of elements --> return 2 in a middle). Also if we have 0, 1 or 2 elements return an empty array.  
* `function4(countOnly)`: returning how many names (that we set) are in the array.
* `function5(letterPositions)`: returning positions of all letters.
* `function6(findKeyByValue)`: returning the genre of th move, that we chose from the object.
* `function7(map)`: returning the array after map().
* `function8(without)`: returning the array without element that we chose.
* `function9(findKey)`: returning the key following our condition.

