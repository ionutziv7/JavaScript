// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN  - NotaNumber

// Anything that is not Falsy -> Truthy

false || true

false || 'John'

false || 1 || 2
// Short-circuiting

let defaultColor = 'blue';
let userColor = 'red';
let currentColor = defaultColor || userColor;

console.log(currentColor);