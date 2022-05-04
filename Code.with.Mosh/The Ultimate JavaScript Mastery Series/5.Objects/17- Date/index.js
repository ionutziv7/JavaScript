const now = new Date();
const sometime = new Date('April 17 2016 20');
const somva = new Date(2016, 4, 20, 5);

sometime.setFullYear(2016);
sometime.toISOString();
somva.toISOString();
console.log(sometime);
console.log(somva);

console.log(now);