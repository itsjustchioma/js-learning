// //////////////////// INTRODUCTION TO ARRAYS ///////////////
////// ARRAYS ARE used to create one memory location(variable) to multiple values 
// "use strict";
// const friends = ['Michael', 'Steven', 'Peter']; //literal syntax
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// console.log(friends[0]);
// console.log(friends,length);
// console.log(friends[friends.length - 1])

// friends[2] = 'Samantha'
// console.log(friends);

// // ONLY PRIMITIVE VALUES ARE IMMUTABLE 

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];


// const age1 = (calcAge(years[0]));
// const age2 = (calcAge(years[1]));
// const age3 = (calcAge(years[years.length - 1]));
// console.log(age1, age2, age3);

// const ages = [age1,age2, age3];
// console.log(ages)  




////////////////////BASIC ARRAY OPERATIONS 
const friends = ['Michael', 'Steven', 'Peter']; 

// ADD ELEMENTS 
const newLength = friends.push('Jay'); // to the last index 
console.log(friends);
console.log(newLength);

friends.unshift('John'); /// to the first index
console.log(friends);

//REMOVE ELEMENTS 
friends.pop(); // removing the last elements 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // to remove the first element 
console.log(friends);

// to find the index position 
console.log(friends.indexOf('Steven'));

// returns a boolean if an element is in an array or not 
console.log(friends.includes('Steven'));



/// ADD TO FIRST INDEX = UNSHIFT
/// ADD TO LAST INDEX = PUSH 

/// REMOVE FROM FIRST ELEMENT = SHIFT 
/// REMOVE FROM LAST ELEMENT = POP 

// FINDING INDEX POSITION = INDEXOF 

const months = ["January", "February", "March", "April", "May", "June", "June"];

document.getElementById("month").innerHTML = months;

function addButton(){
    let u = document.getElementById("type").value;
    if(u.length>0){
        months.push(u);
        document.getElementById("month").innerHTML = months;
    }
}

function removeItem(){
    months.pop();
    document.getElementById("month").innerHTML = months;
    if (months.length===0){
        alert(`This is the final element. Would you like to remove the last element?`)
        
    }
}