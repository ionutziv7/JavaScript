// Camel Notation: oneTwoThreeFour  to be used to factory functions
// Pascal Notation: OneTwoThreeFour  to be used to constructor functions

// Factory Function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Construcor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
const x = {};