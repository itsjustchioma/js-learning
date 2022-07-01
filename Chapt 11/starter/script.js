'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b)=> 
  a -b) : movements

  movs.forEach(function(mov, i){
    const type = mov >0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov} EUR</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html)

  });
}
// displayMovements(account1.movements);

// TO DISPLAY ACCOUNT BANK SUMMARY 
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function(acc){
  const incomes = acc.movements
  .filter(mov => mov >0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  // FOR THE INTEREST 
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) =>{
      return int >= 1;
    }) //to exclude interest below 1
    .reduce((acc, mov) => acc + mov, 0);
     labelSumInterest.textContent = `${interest} EUR`;
}
// calcDisplaySummary(account1.movements);
// calcDisplaySummary(account1.movements);

const createUsernames = function(acc){
  acc.forEach(function(acc){
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

createUsernames(accounts); 

// FOR DISPLAYING 
const updateUI = function(acc){
  // DISPLAY MOVEMENTS 
  displayMovements(acc.movements);

  // DISPLAY BALANCE 
  calcDisplayBalance(acc);

  // DISPLAY SUMMARY
  calcDisplaySummary(acc)
}


// EVENT HANDLERS
let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault(); // prevents form from submitting
  

  // TO FIND THE ACCOUNT FROM THE ACCOUNTS SAVED(THE OBJECTS)
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value);

    // TO CHECK IF PINS MATCH 
    if(currentAccount?.pin === Number(inputLoginPin.value)){
      // the question mark is for optional chaining (if the currentAccount exists and ...)
      // DISPLAY UI AND MESSAGE
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // TO CLEAR INPUT FIELDS
    inputLoginUsername.value = inputLoginPin.value = ' ';
    inputLoginPin.blur();

    // UPDATE UI
     updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function(e) {
  e.preventDefault(); //in forms, its common to prevent default behaviour

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username ===inputTransferTo.value);
  // TO EMPTY OUT STRING INPUTTED
  inputTransferAmount.value = inputTransferTo.value ='';

  if (amount > 0 && 
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username) {
      // the question mark is for "does it exist"

      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // UPDATE UI
      updateUI(currentAccount);
    }
});

// TO CLOSE AN ACCT: 
btnClose.addEventListener("click", function(e){
  e.preventDefault(); 
  

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username); 
    console.log(index);

    //DELETE ACCOUNT 
    accounts.splice(index, 1);

    // HIDE UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ''; 
})

// BOTH FIND AND FINDINDEX METHODS GET ACCESS TO THE CURRENT INDEX AND CURRENT ARRAY

// LOAN
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount/10)){
    // ADD MOVEMENT 
    currentAccount.movements.push(amount);

    // UPDATE UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;

// SORT BUTTON 
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});












/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));

// console.log(arr.slice(2, 4));

// console.log(arr.slice(1, -2));

// // SPLICE == changes the arranges (deletes elements)
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE 
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT 
// const letters = arr.concat(arr2);
// console.log(letters);

// // or 
// console.log([...arr, ...arr2]);

// // JOIN 
// console.log(letters.join('-'));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
//   for (const [i, movement]of movements.entries()){
//   if(movement > 0){
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   }
//   else{
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

// // FOR EACH = the callback function calls the forEach method 
// movements.forEach(function(movement, i, array){
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //MAP
//  currencies.forEach(function(value, key, map){
//    console.log(`${key}: ${value}`);
//  })

//  // SET 
//  // underscore sign indicates an unnecessary paramter/value
//  const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
//  console.log(currenciesUnique);
//  currencies.forEach(function(value, key , map){
//       console.log(`${key}: value`);
//  })
// const dogJulia


// CODING CHALLENGE 
// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected, dogsKate); // 1., 2. 
//   const newDogList = dogsJuliaCorrected.concat(dogsKate);

//   newDogList.forEach(function(age, i){
//     if (age>3){
//       console.log(`Dog ${i}: It's a puppy`);
//     }
//     else{
//       console.log(`Dog ${i}: It's an adult`);
//     }
//   })

  
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// NEW CODING CHALLENGE 
// const ans = function(dogsJulia, dogsKate){
//   const newList = dogsJulia.concat(dogsKate);
//   newList.forEach(function(dogAge, i){
//     let humanAge1=0;
//     if(dogAge <= 2){
//       humanAge1 = 2 * dogAge; 
//       console.log(`Dog ${i}: dog age: ${dogAge}; human age: ${humanAge1}`);
//     }
//     else if (dogAge > 2 && dogAge <18){
//       humanAge1 = 16 + dogAge *4;
//       console.log(`Dog ${i}: dog age: ${dogAge}; human age: ${humanAge1}`);
//     }

  

//     const avgDogs = newList.reduce((acc, cur) =>
//       acc + cur / newList.length, 0
//     );
//     return avgDogs;
//   });

// ans([3, 5, 2, 12, 7, 4, 1, 15, 8, 3]);




// accumulator (reduce method) = SNOWBALL 
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0) ; // this last number is for what number the accumulator will start with 

// console.log(movements);
// console.log(balance);

// map method
// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov){
// //   return mov*eurToUsd;
// // });

// // arrow function version 
//  const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor =[];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) =>
//   `Movement ${i + 1}:You ${mov >0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov)}`

//   // if (mov > 0) {
//   //   return (`Movement ${i + 1}:You deposited ${mov}`);
//   // } else {
//   //   return (`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
// // )}
// );

// console.log(movementsDescriptions);

// const deposits = movements.filter(function(mov){
//   return mov > 0;
// })
// console.log(movements);
// console.log(deposits);

// // const depositsFor = []; 
// // for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// // console.log(depositsFor);

// const withdrawals = [];
// for (const mov of movements) if (mov < 0) withdrawals.push(mov);
// console.log(withdrawals);

// accumulator (reduce method) = SNOWBALL 
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0) ; // this last number is for what number the accumulator will start with 

// console.log(movements);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov; 
// console.log(balance2);

// // MAXIMUM VALUE
// const max = movements.reduce((acc, mov) =>{
//   if(acc > mov){
//     return acc;
//   }
//   else{
//     return mov;
//   }
// }, movements[0])

// CHAINING METHOD
// const eurToUsd = 1.1;

// PIPELINE
// const totalDepositsUSD = movements
// .filter(mov => mov > 0) // for the deposit values(positive values only)
// .map((mov, i, arr) => { // for converting eur to usd
//   // console.log(arr);
//   return mov * eurToUsd;
// })
// // .map(mov => mov * eurToUsd) 
// .reduce((acc, mov) => acc + mov, 0); // to add up all deposit values 
// console.log(totalDepositsUSD);

// we can only chain a method after another if the first one returns an array 


// CODING CHALLENGE 






// FIND METHOD 
// const firstWithdrawal = movements.find(mov => mov < 0) //returns the first element of the array that satisfies the condition.
// // the filter() returns a new array while find() does not; filter returns a new array while find() returns an element
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// // to find the account name with jessica davis
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// SOME AND EVERY METHODS 
// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130)); // checks for equality

// //SOME: CONDITION
// console.log(movements.some(mov => mov === -130));

// // to know if there is any positive movement in the array 
// const anyDeposits = movements.some(mov => mov > 0); // some returns a boolean; can check for a condition
// console.log(anyDeposits);

// // EVERY 
// console.log(movements.every(mov => mov >0));
// console.log(account4.movements.every(mov => mov >0));

// // SEPARATE CALLBACK  
// const deposit = mov => mov > 0; 
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// FLAT AND FLATMAP METHODS --------------------------------
// FLAT METHOD = joins all the elements in a sub array together 
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8]];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); // using the death argument (2) to go a level deeper to flaten the array

// const accountMovements= accounts.map(acc => acc.movements); 
// console.log(accountMovements);

// // COMBINING ALL COSTS
// const allMovements = accountMovements.flat(); 
// console.log(allMovements);

// // ADDING ALL COSTS
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0); 
// console.log(overallBalance);

// FOR ADDING ALL BALANCES 
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc+mov,0);
//   console.log(overallBalance);
//   // first map, then flat; thats why we have flatMap

//   // flatMap; only goes one level deep
//   const overallBalance2 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
//   console.log(overallBalance2);


// SORT METHOD  (works for strings- converts everything to a string then converts it)
// STRINGS
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // it mutates the method
// console.log(owners);

// // NUMBERS 
// console.log(movements);
// console.log(movements.sort());

// return < 0, A before B (keep order)
// return > 0, B before A (switch order)

// FOR ASCENDING ORDER
// movements.sort((a, b) => { // a=current value, b= new value; callback fxn
//   if(a > b)
//     return 1; 
  
//   if (b > a)
//     return -1;
// });

// OR 

// movements.sort((a,b) => a-b);
// console.log(movements);

// // FOR DESCENDING ORDER
// movements.sort((a, b) => { // a=current value, b= new value; callback fxn
//   if(a < b)
//     return 1; 
  
//   if (b < a)
//     return -1;
// });

// // OR 

// movements.sort((a,b) => b-a);
// console.log(movements);
// // SORT CANNOT WORK WITH A MIXED ARRAY 

// MORE WAYS OF CREATING AND FILLING ARRAYS
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x); // you can call the fill()

// // x.fill(1);
// x.fill(1, 3, 5)
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr );

// // ARRAY.FROM()
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1); // to indicate that we are not using that parameter
// console.log(z);

// // USING ARRAY.FROM() TO GENERATE 100 RANDOM DICE ROLLS
// const dice = Array.from(
//   { length: 100 },
//   (min, max) =>(Math.floor(Math.random() * 7 +1) 
// ));
// console.log(dice);


// labelBalance.addEventListener('click', function(e){
//   // ANOTHER GOOD USE OF ARRAY.FROM() IS QUESRYSELECTALL
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
//   console.log(movementsUI.map(el => el.textContent.replace('EUR', '')));
// });
// // NODELIST CAN BE CONVERTED TO AN ARRAYLIST USING ARRAY.FROM()


// FINAL CODING CHALLENGE FOR ARRAYS 
const dogs = [
  {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
  {weight: 8, curFood: 200, owners: ['Matilda']},
  {weight: 13, curFood: 275, owners:['Sarah', 'John']},
  {weight: 32, curFood: 340, owners:['Michael']}
];

// 1. 
// add recommended food portion to the object as a new property. don't create a new array 
// recommendedFood = weight ** 0.75 * 28
// food = grams, weight= needs to be in kg 
dogs.forEach(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}`);

// 3. array with owners with dogs that eat a lot, and one with dogs who eat too little 
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4. 
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
