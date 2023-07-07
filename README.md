# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lma2023/lotide`

**Require it:**

`const _ = require('@lma2023/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: akes in 2 arrays and returns true if they are equal and false otherwise.
* assertEqual: takes in 2 values and returns true if they are equal and false otherwise.
* assertObjectsEqual: takes in 2 objects and returns true if they are equal and false otherwise.
* countLetters: returns a count of each of the letters in the sentence.
* countOnly: returns a specific subset of the collection of items.
* eqArrays: takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* eqObjects: takes in 2 objects and return true if they are equal and false otherwise.
* findKey: takes in an object and callback and returns the first key that meets the criteria specified in callback.
* flatten: takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* head: returns the first element of input array.
* letterPositions: takes in a string and returns all indices of letter positions in the string.
* map: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* middle: takes in an array and returns middle most element of the array.
* tail: takes in an array and returns tail elements except the first element of the array.
* takeUntil: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* without: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

Testing:

* assertArraysEqualTest: test cases for function assertArraysEqual.
* assertEqualTest: test cases for function assertEqual.
* assertObjectsEqualTest: test cases for assertObjectsEqual.
* countLettersTest: test cases for function countLetters.
* countOnlyTest: test cases for function countOnly.
* eqArraysTest: test cases for function eqArrays.
* eqObjectsTest: test cases for function eqObjects.
* findKeyTest: test cases for function findKey.
* headTest: test cases for function head with mocha and chai.
* middleTest: test cases for function middle with mocha and chai.
* tailTest: test cases for function tail with mocha and chai.