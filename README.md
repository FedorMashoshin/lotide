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

## Documentation

The following functions are currently implemented:

* `function1(tail)`: returning all elements, except very first one from our array.
* `function2(head)`: returning very first element from our array.
* `function3(middle)`: returning middle elements from our array (if we have even number of elements --> return 2 in a middle). Also if we have 0, 1 or 2 elements return an empty array.  