
walk();

function walk() {
    console.log('walk');
}

// Function Expression

// run(); // Uncaught ReferenceError: run is not defined
const run = function() {
    console.log('run');
};

// Hoisting is the process of moving functions declaration to the top of the file
// this is done automatically by the JavaScript Engine that is executing this code 