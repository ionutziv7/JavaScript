// Max of Two Numbers
//Write a function that takes two numbers
//and returns the maximum of the who

let max = function(a, b) {
    if(a > b)
        return a;
    else if(b > a)
        return b;
}
console.log(max(6, 7));

// 2-nd version
let number = maximum(5, 10);
console.log(number);
function maximum(a, b) {
    return (a > b) ? a : b;
}
