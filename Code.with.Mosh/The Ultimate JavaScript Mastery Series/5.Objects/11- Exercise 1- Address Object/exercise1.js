let address = {
    street: 'Los Angeles',
    city: 'b',
    zipcode: 'c'
};      

function showAddress(address) {
    for(let key in address)
        console.log(key, address[key]);
}   

showAddress(address);