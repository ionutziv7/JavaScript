// Hosting - raised to the top
sayHello();
// Function Declaration
function sayHello() {}

// Function Expression are not hoisted
const sayGoodbye = function() {};

// We gonna get an error because class declaration is not hoisted
const c = new Circle();

// Class Declaration
class Circle {
}

// Class Expression
const Square = class {
};