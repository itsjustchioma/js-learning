// TO ACTIVATE STRICT MODE; 
'use strict';
//has to be the first statement in your code

// let hasDriversLicense  = false;
// const passTest = true;

// if(passTest){
//     hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log(`I can drive`);

// const interface = "Audio";



/////// FUNCTIONS ///
// function logger(){
//     // everything within the curly braces is called the function buddy
//     console.log(`My name is Jonas`);
// }

// // invoking, calling, running the function 
// logger(); 

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Jucie with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice=fruitProcessor(3,5);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num=Number(`23`);
// console.log(num);










/////////FUNCTION DECLARATIONS VS EXPRESSIONS 
// function declaration 
// const age1 = calcAge1(1991);

// function calcAge1(birthYear){
//     const age = 2037 - birthYear;
//     return age;
// }

// // const age1=calcAge1(1991);
// // console.log(age1); //declaration 

// // function expression 
// const calcAge2 =function(birthYear){
//     return 2037 - birthYear;
// } //anonymous function = function without a name   

// const age2 = calcAge2(1991);
// console.log(age1, age2);



///////////////// ARROW FUNCTIONS ///////////////////
// function expression 
// const calcAge2 =function(birthYear){
//     return 2037 - birthYear;
// }

//arrow function 
// const calcAge3 = birthYear => 2037 - birthYear; 
// const age3=calcAge3(1991); 
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65-age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, "Chioma"));



/////////// FUNCTIONS CALLING OTHER FUNCTIONS ///////////
// function cutFruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces( oranges);
//     console.log(`Apple and oranges sliced. ${applePieces} pieces and ${orangePieces} pieces`);
    
//      const juice = console.log(`Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`);
//      return juice;
//  }
// fruitProcessor(2,3);


/// /////////REVIEWING FUNCTIONS /////////// 
// const calcAge = function(birthYear){
//     return 2037-birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName)  {
//     const age = calcAge(birthYear);
//     const retirement = 65-age;

//     if(retirement >0){
//         return retirement;
//         console.log(`${firstName} retires in ${retirement} years`)
//     }
//     else{
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`
//  }

// console.log( yearsUntilRetirement(1991, 'Jonas'));
// console.log( yearsUntilRetirement(1950, 'Mike'));