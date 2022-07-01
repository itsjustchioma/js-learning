"use strict"; 
// ARRAYS ARE OBJECTS 

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////////////////////////////////// 

let arr = ['a', 'b', 'c','d', 'e'];

// SLICE 
console.log(arr.slice(2));

console.log(arr.slice(2, 4));