/* eslint-disable no-undef */
/*
    Run this file by using the command: node demo-week04.js
*/

// // --- Higher Order Functions  ----------------------------------------
const repeat = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        action(i, n);
    }
};
repeat([1, 2, 3], console.log);

// // --- Array forEach  -------------------------------------------------
// [{ lower: 'a' }, { lower: 'b' }, { lower: 'c' }]
// for each letter object in the array
// get the position and add that as a key/value pair
const arrForEach = (letters) => {};
console.log(arrForEach([{ lower: 'a' }, { lower: 'b' }, { lower: 'c' }]));

// // --- Array .map()  --------------------------------------------------
// [{ lower: 'a' }, { lower: 'b' }, { lower: 'c' }]
// for each letter object in the array
// get add the key uppercase and the upper cased version that as a key/value pair
const arrMap = (letters) => {};
console.log(arrMap([{ lower: 'a' }, { lower: 'b' }, { lower: 'c' }]));

// // --- Array .filter()  ------------------------------------------------
// [{ lower: 'a' }, { lower: 0 }, { lower: 'b' }, { lower: 1 }, { lower: 'c' }]
// for each object in the array
// filter out the objects that dont contain letters
const arrFilter = (mixed) => {};
console.log(
    arrFilter([
        { lower: 'a' },
        { lower: 0 },
        { lower: 'b' },
        { lower: 1 },
        { lower: 'c' }
    ])
);

// // --- Array .sort()  -------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// sort the companies in order that they were founded in descending order
const companies = [
    { name: 'Google', founded: 1998 },
    { name: 'Tesla', founded: 2003 },
    { name: 'Apple', founded: 1976 },
    { name: 'Microsoft', founded: 1975 }
];
const arrSortByString = (arr) => {};
console.log(companies.sort());
console.log(arrSortByString(companies));

// // --- Built In Prototypes  --------------------------------------------------
// console.log(Object.getOwnPropertyNames(Object.prototype));
// console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Object.getOwnPropertyNames(String.prototype));

// --- Prototypes with ES6 Classes ----------------------------------------------------------

// --- Dangers of Prototypes - DO NOT TOUCH built-in attributes/properties on the Prototype

// --- ES6 Classes   -----------------------------------------

// --- Module Pattern  -----------------------------------------
