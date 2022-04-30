const person = {
    name: 'John', 
    age: 26
};
//for-in
for(let key in person) 
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
//for-of
for(let color of colors)
    console.log(color);