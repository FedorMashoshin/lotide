const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([21,7,6,5,5,5,4]), 5);
assertEqual(head(['Hello', 'My', 'Name', 'Is', 'Fedor']), 'Hello');