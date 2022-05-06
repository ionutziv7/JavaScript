
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul' + items.join('') + '<ul>';
// console.log(html);

const numbers = [1, -1, 2, 3];
// this is the power of chaining this methods
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }) )
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);