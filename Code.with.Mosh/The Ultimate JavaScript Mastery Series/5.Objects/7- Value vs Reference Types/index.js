/*
Value Types
Number
String
Boolean
Symbol
undefined
null

Reference Types
Object
Function
Array
*/

// Primitives are copied by their value
// Objects are copied by their reference
let x = { value: 10};
let y = x;

x.value = 20;

let obj = {value: 10};
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);