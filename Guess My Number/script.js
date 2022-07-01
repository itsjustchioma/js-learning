"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector('.message').textContent = 'Correct number❤';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // to read user input
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 


////////////HANDLING CLICK EVENTS ////// 
// const x = function(){
//     console.log(23);
// }


//FUNCTION 
// document.getSelector('.again').addEventListener('click',function(){
//     score = 20;
//     secretNumber=Math.trunc(Math.random()*20)+1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent=score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').textContent = '';

//     document.querySelector('.body').style.backgroundColor="#222";
//     document.querySelector('.body').style.width = '15rem';
// });

//VARIABLES 
let secretNumber = Math.trunc(Math.random()*20)+1;

// initializing the starting score 
let score = 20;

//initializing the high score 
let highScore =0;

// document.querySelector('.number').textContent = secretNumber;

// FUNCTION 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number((document.querySelector('.guess').value));
    console.log(guess);

    //when there is no input 
    if (!guess){
        document.querySelector('.message').textContent = 'Input a value';
    }
    else{
        //when player wins or loses 
        if(secretNumber === guess){
            document.querySelector('.message').textContent = "Congratulations, you guessed it right! 😁🙌"

            document.querySelector('body').style.backgroundColor = 'green';

            document.querySelector('.number').style.width='30rem';

            if(highScore<score){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

    // when the guess is wrong 
    else if(guess !== secretNumber){
        if (score>1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Go lower' : 'Go Higher';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent ="Game Over!";
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent=0;
        }
    
    }}
});  

let again = document.querySelector('.again').addEventListener('click', function(){
    score =20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').textContent = '';
});



























































// //guess is too low
// else if (secretNumber > guess){
//     if(score>1){

//         document.querySelector('.message').textContent = 'Go higher'
//         score --;
//         document.querySelector('.score').textContent = score;
//     }
//     else{
//         document.querySelector('.message').textContent ="Game Over!";
//         document.querySelector('body').style.backgroundColor = 'red';
//     }

// }
// //guess is too high
// else if (secretNumber < guess){
//     if (score>1){

//         document.querySelector('.message').textContent = 'Go lower';
//         score --;
//         document.querySelector('.score').textContent = score;
//     }
//     else{
//         document.querySelector('.message').textContent ="Game Over!";
//         document.querySelector('body').style.backgroundColor = 'red';
//         document.querySelector('.score').textContent=0;
//     }
// }