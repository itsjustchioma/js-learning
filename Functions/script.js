"use strict";

// const bookings = [];

// const createBooking = function(flightNum, numPassengers=1, price=199){
//     // ES5 WAY
//     // numPassengers = numPassengers ||1;
//     // price = price || 199; 

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123'); 
// createBooking('LH123', 2, 800)

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmetdmann',
//     passport: 349568242666
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. '+ passenger.name;

//     if(passenger.passport === 349568242666){
//         alert('Check in');
//     }
//     else{
//         alert('Wrong passport');
//     }
// }
// checkIn(flight, jonas);
// console.log(flight); 
// console.log(jonas);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);



///////////// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS 
// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // HIGHER ORDER FUNCTION
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transofrmed by: ${fn.name}`);
// }
// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function(){
//     console.log('waves');
// }

// document.body.addEventListener('click', high5){

// }



/// FUNCTIONS RETURNING FUNCTIONS  //////////////////////////////////
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greetHey = greet('Hey');
// greetHey('Jonas');
// greetHey('Steven');

// greet('Hello')('Jonas')

// const great = greeting =>name1 => console.log(`${greeting} ${name1}`);
// great('Hello')('Jonas')




//// CALL AND APPLY METHODS   //////////////////////////////////
// const lufthansa ={
//     name: 'Lufthansa',
//     iataCode: 'LH',
//     bookings:[],
//     book(flight, name){
//         console.log(`${name} booked a seat on ${this.name} flight ${this.iataCode}${flight}`);
//         this.bookings.push({flight: `${this.iataCode} ${flight}`, name});
//     },
// }
// lufthansa.book(239, 'Jonas Schmetdmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//     name: 'Eurowings',
//     iataCode: 'EW',
//     bookings:[],
// };

// const book = lufthansa.book;

// CALL METHOD: SETS 'THIS' KEYWORD TO WHAT WE WANT EXPLICITLY  
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// const swiss ={
//     name: 'Swiss Air Lines',
//     iataCode:'LX',
//     bookings: []
// }

// book.call(swiss, 452, 'Mary')


// APPLY METHOD : takes array of arguments 
// const flightData = [352, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // OR 
// book.call(swiss, ...flightData);



/// BIND METHOD : DOES NOT IMMEDIATELY CALL THE FUNCTION
// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams'); 

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Smith');
// bookEW23('Martha Cooper');

//WITH EVENT LISTENERS 
// lufthansa.plane = 300;
// lufthansa.buyPlane =function(){
//     console.log(this);

//     this.plane++;
//     console.log(this.plane);
// };
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
 

// PARTIAL APPLICATION : preset parameters
// const addTax = (rate, value) => value+value *rate;
// console.log(addTax(0.1,100));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// function calling function
// const addTaxRate = function(rate){
//     return function(value){
//         return value + value*rate;
//     }
// }
// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));
// console.log(addVAT2(23));

//  VIDEO 10

// const poll = {
//     question: 'What is your favorite programming language? ', 
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0].
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         let answer = Number(prompt('What is your favorite programming language? \n0: Javascript \n1: Python \n2: Rust \n3: C++'));
//         console.log(answer);

//         // Register answer 
//         if(answer<=3 && answer !=null){
//             console.log(this.answers[answer]++);
//             // console.log(displayResults);

//             this.displayResults();
//             this.displayResults('string');
//         }
//         console.log(this.answers);
//     }, 
//     displayResults(type = 'array'){
//         if (type === 'array'){
//             console.log(this.answers);
//         }
//         else if(type === 'string'){
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


// poll.displayResults.call({answers: [5, 2,3 ]}, 'string')


// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// the data is encapsulated in the function 
// basically wrap everything in parentheses 
// normal function

// const runOnce = function(){
//     console.log(`This will never run again`);
// }
// runOnce();

// (function (){
//     console.log(`This will never run again`);
// })();

// also for arrow functions 
// (() => console.log(`This will never run again`))();




// CLOSURES 
// makes a function remember all the variables that once existed \

// NOTE: any function always has access to the variables to the variable environment of the execution context in which the function was created 

// It is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone

// it gives a function access to all the variables of its parent function, even after that parent function has been returned. the function keeps a reference to its outer scope, which preserves the scope chain throughout time

// its not a tangible thing 

// const secureBooking  = function(){
//     let passengerCount = 0;

//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers `);
//     }
// }

// const booker = secureBooking(); 
// booker();
// booker();
// booker();

// console.dir(booker);

// example 1
// let f; 

// const g = function(){
//     const a = 23;
//     f = function(){ 
//         console.log(a * 2);
//     }
// }

// const h = function(){
//     const b = 777;
//     f = function(){ 
//         console.log(b * 2);
//     }
// }

// g();
// f();
// // re assigned f function 
// h();
// f();

// console.dir(f)

// // example 2
// const boardPassengers = function(n, wait){
//     const perGroup = n /3;

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     },1000 )

//     console.log(`Will start boarding in ${wait} seconds`);
// }


// const perGroup = 1000;
// boardPassengers(180, 3);

// CODING CHALLENGE 
(function (){
    const header = document.querySelector('h1');
    header.style.color = 'green';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color ='blue';
    });
})();

