"use strict";

// console.log(`Lifting weights repition 1`);

// for(let rep=1; rep<=10; rep++) {
//     console.log(`Lifting weights repition ${rep}`);
// }


// let jonasArray = [
//     'Jonas',
//     'Uche',
//     2037-1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const types= [];

// for(let i=0; i<jonasArray.length; i++) {
//     // reading from jonas array 
//     console.log(jonasArray[i], typeof jonasArray[i]);

// // filling types array
//     // types[i] = typeof jonasArray[i]; 
//     // OR 
//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i=0;i<years.length; i++){
//     // to put in the new array 
//     ages.push(2037 - years[i]);  
// }
// console.log(ages);

// //CONTINUE AND BREAK
// console.log('---BREAK WITH NUMBER--')
// for(let i=0; i<jonasArray.length; i++) {
//     if (typeof jonasArray[i] ==='number')break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// let jonasArray = [
//     'Jonas',
//     'Uche',
//     2037-1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven']
// ];


// // backwards basically 
// for (let i= jonasArray.length-1; i>=0 ;i--){
//     console.log(i, jonasArray[i]);
// }

// for(let exercise = 1; exercise<=3; exercise++){
//     console.log(`----STARTING EXERCISE----- ${exercise}`);

//     for(let rep=1;rep<6; rep++){
//         console.log(`Lifting weights repitions ${rep}`)
//     }
// }


////////WHILE LOOP 
// for (let rep = 1; rep<=30; rep++){
//     console.log(`Lifting weights repitions ${rep}`)
// }

let rep =1;
while (rep<=10){
    // console.log(`Lifting weights repitions ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) +1;
// console.log(dice);

while (dice!== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;

    if (dice === 6) {
        console.log(`Loop is about to end...`);
    }
}