const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
 
// const another = {};
// for(let key in circle)
//     another[key] = circle[key];


// const another = Object.assign({}, circle);

// using spread operator(...) we can clone an object 
const another = { ...circle };

console.log(another);

