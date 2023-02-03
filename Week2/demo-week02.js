/*
    Run this file by using the command: node demo.js
*/

// // // --- Operators and Coercion -------------------------------------------------
// // Double Equals
console.log('2' == 2);
console.log(0 == false);
console.log('' == false);
console.log(0 == '');
console.log(undefined == null);

// // Triple Equals
console.log('2' === 2);
console.log(0 === false);
console.log('' === false);
console.log(0 === '');
console.log(undefined === null);

// // // --- More Type Coercion -------------------------------------------------

// // Implicit coercion
const n1 = '9';
const n2 = 10;
const sum = n1 + n2;
console.log(typeof sum);
console.log(sum);

const n3 = '9';
const n4 = 10;
const product = n3 * n4;
console.log(typeof product);
console.log(product);

// // --- Issues when not Variable Scoping properly  ----------------------------------
let number;
for (number = 1; number < 10; number++) {
    console.log('for loop', number);
}

// // the variable number already incremented to 10
// // so this while loop conditional evaluates to false
// // this an example of improper scoping and variable leaking into other code block
while (number < 10) {
    console.log('while loop', number);
    number++;
}

// // --- Function Declaration vs Function Expressions  ---

// function declaration allows to call the function before defining
// this however is not considered a best practice
// when using function function declaration always defined the function and then call it
declaration();
function declaration() {
    console.log('call this from anywhere?');
}

// // function expression is best practice because
// // you must first defined the function and then call the function
expression();
const expression = function () {
    console.log('call this from anywhere too?');
};

// // --- Mutation  -------------------------------------
const js = 'javascript';

const jsArr = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];

// // --- Function Declaration  -----------------------------

// // --- Function Expression  -----------------------------

// using default values in function arguments

// // --- Arrow Functions  ---------------------------------

// simplified arrow

// // --- Ternary + String Template Literal  -------------------------
// conditional ? true : false

// // --- Strings  ----------------------------------
const workingWithStrings = () => {
    const greeting = 'Hello World';

    // includes

    // charAt

    // TODO in LAB
    // use toUpperCase() to display the greeting with all uppercase characters
    

    // TODO in LAB
    // use toLowerCase() to display the greeting with all lowercase characters
};
workingWithStrings();

// // --- Arrays  ----------------------------------
const workingWithArrays = () => {
    const csv = 'venus,earth,mars';

    // split (string method)

    // push

    // pop

    // unshift

    // shift

    // join

    // reverse

    // TODO in LAB
    // use concat() to add 'pluto' string back to the planets array
    // use concat() to add ['pluto'] array back to the planets array

    // TODO in LAB
    // use includes() to see if the planets array includes 'earth'

    // TODO in LAB
    // use sort() to sort the planets in alpha order
};
workingWithArrays();

/*Write a function called findMin
- The findMin accepts one argument which is a JavaScript array of mixed data type.
- The findMin argument is able to find and return the minimum numeric value in the array.
- DO NOT use Math.max() or Math.min() in your solution
*/
const findMin = (arr) => {};
// console.log(findMin([0, 100, 'hi', null, -1, 5, false, 'hello']));
