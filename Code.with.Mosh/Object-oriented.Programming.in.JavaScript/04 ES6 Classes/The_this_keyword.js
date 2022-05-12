'use strict';

// Constructor function
const Circle = function() {
    this.draw = function() { console.log(this); }
};

const c = new Circle();
// Method call
c.draw();

const draw = c.draw;  // a reference to the draw method

//Function call
draw();


class Circle2 {
    draw2() {
        console.log(this);
    }
}

const c2 = new Circle2();
const draw2 = c.draw2;
draw();