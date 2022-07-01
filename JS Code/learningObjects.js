"use strict";

// const jonas ={
//     firstName : 'Jonas',
//     lastName : 'Uche',
//     age : 2002,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// each 'line' is called a property 
// OBJECT-LITERAL SYNTAX 



/////////////////// DOT VS BRACKET NOTATION 
// const jonas ={
//      firstName : 'Jonas',
//      lastName : 'Uche',
//      age : 2002,
//      job: 'Teacher',
//      friends: ['Michael', 'Peter', 'Steven']
//  };

//  console.log(jonas);
//  console.log(jonas.lastName); // DOT NOTATION
//  console.log(jonas['lastName']); //BRACKET NOTATION 

//  const nameKey = 'Name';
//  console.log(jonas['first'+nameKey]);

//  const interestedIn = prompt('What do you want to know about Jonas? Choose between first name, last name, age, job, and friends.');
//  console.log(jonas[interestedIn]);

//  if (jonas[interestedIn]){
//      console.log(jonas[interestedIn]);
//  }
//  else{
//      console.log('Wrong request!');
//  }

//  jonas.location = 'Germany';
//  jonas['twitter'] = '@twitter'
//  console.log(jonas);


// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
  



/////OBJECT METHODS ////////////////////////////////// 
const jonas ={
      firstName : 'Jonas',
      lastName : 'Uche',
      birthYear : 1991,
      job: 'Teacher',
      friends: ['Michael', 'Peter', 'Steven'],
      hasDriversLicense: true,

    //   calcAge: function(birthYear){
    //       return 2037-birthYear;
    //    }
      // calcAge: function (){
      //     return 2037-this.birthYear;
      //  }

          calcAge: function(){
            this.age = 2037 - this.birthYear;
            return this.age;
          },

          ownsLicense: function(){
            return `${this.firstName} is a ${this.calcAge
            ()} year old teacher, and he has ${this.hasDriversLicense ? 'a': 'no'} drivers liense   `
          }
    //    A METHOD IS A FUNCTION ATTACHED TO AN OBJECT.
};

console.log(jonas.calcAge());

console.log(jonas.age);  
// console.log(jonas.age);  
// console.log(jonas.age);  

console.log(jonas.ownsLicense());

