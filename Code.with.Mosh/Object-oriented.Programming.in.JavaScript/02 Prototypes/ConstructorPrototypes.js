Object.getPrototypeOf(myobj);

// myObj.__proto__ (parent of myObj)
// Constructor.prototype()

function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(1);