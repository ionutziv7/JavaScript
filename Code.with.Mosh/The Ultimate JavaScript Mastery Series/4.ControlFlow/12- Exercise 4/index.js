// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, null, undefined, '',1,2,3];

function countThruthy(array) {
    let count = 0;
    for(let value of array)
        if(value)
            count++;
    return count;
}   
console.log(countThruthy(array));