
const numbers = [1, -1, 2, 3];

// every()
// some()

const altLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(altLeastOnePositive);