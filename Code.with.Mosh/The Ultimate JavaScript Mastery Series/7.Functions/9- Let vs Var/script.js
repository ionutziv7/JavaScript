/*
function start() {
    for (var i = 0; i< 5; i++) {
       if (true) {
           let  color = 'red';
       }
    }
    console.log(color);   
}

// var => function-scoped 
// ES6 (ES2015): let, const => block-scoped

start();
*/

var color = 'red';
// windows.color 
// red 
let age = 26;
// windows.age 
// undefined

// global function
function sayHi () {
    console.log('hi');
}
// windows.sayHi()
// hi