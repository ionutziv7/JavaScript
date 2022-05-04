// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
//let address = createAddress('a', 'b', 'c');
//console.log(address);

// Constructor Function
// to respect Pascal Notation
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
let address = new Address('a', 'b', 'c');
console.log(address);