
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1)); 

function includes(array, searchElement) {
    for(let element of array)
        if(element === searchElement)
            return true; // we immediately return true if we find an element that is equal to searchElement 
    return false; // otherwise if we got to this point we return false
}

