/*
    Run this file by using the command: node examples.js
*/

// // --- Objects  ------------------------------------------
const objectLiteral = () => {
    const transformer = {
        name: 'Optimus Prime',
        team: 'Autobots',
        colors: ['red', 'blue', 'silver']
    };

    //access a property using dot notation

    // access a property using bracket notation w/ string

    //add a key using dot notation

    // add a key using bracket notation w/ variable

    // delete a key using dot notation

    // delete a key using bracket notation w/ variable
};
objectLiteral();

// // -- Object Methods  ------------------------------------
const objectMethods = () => {
    const course = {
        department: 'Computer Science',
        number: 4220,
        startTime: '6:00pm'
    };

    // Object.assign

    // using a variable to create a key

    // Object.assign with short hand notation

    // entries

    // keys

    // values
};
objectMethods();

// // -- Object Destructuring----------------------------------
const objectDestructure = () => {
    const transformer = {
        name: 'Optimus Prime',
        team: 'Autobots',
        colors: ['red', 'blue', 'silver']
    };
};
objectDestructure();

// // -- Object Spread ----------------------------------
const objectSpread = () => {
    const dev = {
        name: 'Harley Quinn',
        title: 'Software Engineer',
        tenure: '3 years',
        manager: 'Joker'
    };
    const corp = {
        manager: 'Bruce Wayne',
        company: 'Wayne Industries',
        location: 'Gotham City'
    };
};
objectSpread();

// // Array Spread and Rest ---------------
const arrayOps = () => {
    const planents = [
        'mercury',
        'venus',
        'earth',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune'
    ];

    // copy spread

    // concat spread
    const dwarfPlanents = ['Pluto', 'Ceres', 'Eris', 'Makemake', 'Haumea'];

    // rest
};
// EXAMPLE Object PROBLEM
// Write a Function called convertToArray.
// - The function takes an object as an argument and returns a 2D array.
// - Each key, value pair in the object should be added to an array.
// - The first item is the key and the second is the value.
// - DO NOT USE Object.entries()
//
// Example:
//
// convertToArray({
//    developer: 'Respawn',
//    producer: 'EA',
//    game: 'Star Wars Jedi: Fallen Order',
//    year: 2019
// })
// [
//     [ 'developer', 'Respawn' ],
//     [ 'producer', 'EA' ],
//     [ 'game', 'Star Wars Jedi: Fallen Order' ],
//     [ 'year', 2019 ]
// ]
const convertToArray = (game) => {};
convertToArray({
    developer: 'Respawn',
    producer: 'EA',
    game: 'Star Wars Jedi: Fallen Order',
    year: 2019
});
