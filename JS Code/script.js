// let js = "amazing";
// console.log(40+8);

// let firstName = "Chioma";
// console.log(firstName)

// let country = "Nigeria";
// let continent = "Africa";
// let population = 200000000;
// console.log(country);
// console.log(continent);
// console.log(population);

// let javascriptIsFun =true;
// console.log(javascriptIsFun);

// console.log(typeof);

//////////////////////// LET , CONST, VAR 
// LET = declare variables that can change later 
// let age = 30; 
// age = 31;

//CONST = variables cannot be changed. you cant declare empty variables
// const birthYear = 1991; 
// birthYear = 2002

// VAR = should be completely avoided. the old way of defining variables. works the same as let. 

/////////////////////////OPERATORS 

// const currentYear = 2037;
// const ageJonas = currentYear -1991; 
// const ageSarah = currentYear - 2018;
// console.log(ageJonas, ageSarah)

// console.log(ageJonas *2, ageJonas/2, 22/7);

// const firstName = "Jonas";
// const lastName = "Uche";
// const space = " ";
// console.log(firstName+space+lastName)

// let x= 10+5;
// console.log(x)

// // comparison operator 

// console.log(ageJonas<ageSarah);
// const isFullAge = ageSarah>=18;


/////////////////////// OPERATOR PRECEDENCE 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now-1991>now-2018);

// let x, y;
// x = y = 25-10-5;
// console.log(x, y);
// const averageAge = (ageJonas + ageSarah) /2;
// console.log(ageJonas, ageSarah, averageAge)



//////////// STRINGS AND TEMPLATE LITERALS 
// const firstname = "Chioma";
// const job = "Student";
// const birthYear = 2002;
// console.log("My name is "+firstname+" and I am a "+ job+" born in the year "+ birthYear);

// const jonasNow = `I'm ${firstname}, a ${job}`;
// console.log(``);



//////////////////////////// IF ELSE STATEMENTS 
// const age = 19;
// const isOldEnough = age >= 10
// let century ;
// if (isOldEnough == true){
//     console.log(`you can drive`)
// }
// else{
//     console.log(`you are too young`)
// }

// const birthYear = 1991; 
// if (birthYear <= 2000){
//      century= 20;
// }
// else{
//     century = 21;
// }
// console.log(century);








////////////////////// CONVERSION VS COERCION 
/////////////////CONVERSION ///
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number (inputYear)+ 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23));


// /////////////////////////////COERCION 
// console.log(`I am `+23+` years old`);
// console.log(`23` + `10`+ `3`);
// console.log(`23`* `2`);
// console.log(`24`/`2`);
// console.log(`23`>'18');




//////////////////// TRUTHY AND FALSY 
// FALSY VALUES = VALUES THAT ARE FALSE WHEN WE TRY TO CONVERT THEM TO A BOOLEAN. INITIALLY, THEY ARE NOT FALSE. THEY BECOME FALSE WHEN WE TRY TO CONVERT THEM. ITS IMPLICIT
// THERE RE 5 OF THEM: 
//  0, ``, undefined, null, NaN, (false)

// TRUTHY VALUES. OPPOSITE OF FALSY. strings that are not empty and {} are truthy values 
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean("Jonas"))
// console.log(Boolean({}))
// console.log(Boolean())

// const money = 0; 
// if(money){
//     console.log(`Don't spend it all`)
// }
// else{
//     console.log(`You should get a job`)
// }

// let height; 
// if (height){
//     console.log(`Yay, height is defined`);
// }
// else{
//     console.log(`Height is undefined`);
// }



////////////////// EQUALITY OPERATORS 
// const age = 18; 
// if(age === 18){
//     console.log(`You are an adult`);
// }

// // == LOSE EQUALITY SIGN(OPERATOR) , ALLOWS COERCION
// // === STRICT EQUALITY SIGN(OPERATOR) , DOES NOT ALLOW COERSION 

// const favourite = Number(prompt(`What is your favourite number?`));
// console.log(favourite);

// if (favourite ==23){
//     console.log("23 is an amazing number");
// }



/////////////////THE SWITCH STATEMENT 
// const day = 'Wedneay';
// switch(day){
//     case 'Monday':
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meet up`);
//         break;

//     case 'Tuesday':
//         console.log(`Prepare theory videos`);
//         break;

//     case 'Wednesday':
//     case 'Thursday':
//         console.log(`Write code examples`);
//         break;
    
//     case 'Friday':
//         console.log(`Record videos`);
//         break;

//     case 'Saturday':
//     case 'Sunday':
//         console.log(`Enjoy the weekend`);
//         break;

//     default:
//         console.log(`Not a valid day`);
// }










///////////////// THE CONDITIONAL (TERNARY) OPERATOR 
// const age = 23;
// age >= 18 ? console.log(`I like to drink akahol`):
// console.log(`I like to drink juice`);

// const drink=age >= 18 ? 'wine': 'water';
// console.log(drink);
// console.log(`I like to drink ${age>=18 ? 'wine': 'water'}`);

const population = 333;
console.log((population>33) ? `Portugal's population is above average`: `Portugal's population is below average`);