/*
    Run this file by using the command: node errors.js

    This file is expected to produce errors as an example of some javascript errors

*/

// ReferenceError: xyz is not defined
let xyz;

// TypeError: Assignment to constant variable.
let x = 1;
x = 2;
console.log(x);

// SyntaxError: Invalid or unexpected token
const y = 100;
console.log(y);