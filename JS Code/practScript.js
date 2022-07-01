'use strict';
// 1.

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// // 2. 
// const markBMI = (markMass/markHeight) ** 2 ;
// const johnBMI = (johnMass/johnHeight)**2;

// // 3.
// const markHigherBMI = (markBMI>johnBMI);

// // test
// console.log(markBMI, johnBMI, markHigherBMI);

// // PART 2
// // 1. 
// if (markBMI > johnBMI){
//     console.log(`Mark has a higher BMI ${markBMI} than John ${johnBMI}`);
// }
// else{
//     console.log(`John has a higher BMI ${johnBMI} than Mark ${markBMI}`);
// }




/////////////IF ELSE STATEMENT 
// const population = 2;
// let average=33;
// if (population>33){
//     console.log(`the population is above average`)
// }
// else{
//     average -= population ;
//     console.log(`the population is ${average} million below the average`)
// }




//////////////// Equality Operators: == vs. ===
// 1. 
// const numNeighbors = prompt(`How many neighbor countries does your country have? `);

// // 2. 
// if(numNeighbors ===1){
//     console.log(`Only 1 border`);
// }
// // 3. 
// else if(numNeighbors >1){
//     console.log(`More than 1 border.`);
// }
// // 4. 
// else{
//     console.log(`No borders.`)
// }







// const dolphinScore = 96+108+89;
// const koalaScore = 88+91+110;
// const dolphins = (96+108+89)/3;
// const koalas = (88+91+110)/3;


// if (dolphinScore | koalaScore >= 100){
//     if (dolphins> koalas){
//     console.log(`Dolphins have a higher average score.`);
//     }
//     else if (dolphins< koalas){
//     console.log(`Koalas have a higher average score.`);
//     }
//     else{
//     console.log(`It's a tie`);
//     }

// }
//     else{
//         console.log(`If you don't get it, forget abourrit`)
//     }


// const bill = 435;
// let tip; 

// console.log(bill >=10 && bill <=300 ? `Bill value ${bill} \nTip value: ${tip = bill*0.15}\nFinal value:${bill+tip}`: `Bill value ${bill} \nTip value: ${tip = bill*0.20}\nFinal value:${bill+tip}`);




///////// FUNCTIONS 
// function describeCountry(country, population, capitalCity){
//     // console.log(country, population, capitalCity);
//     const output = console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
//     return output;
// }

// const output1 = describeCountry(`Finland`, `6`, `Helsinki`);
// // console.log(output1);
// const output2 = describeCountry(`Nigeria`, 200, `Abuja`);
// // console.log(output2);
// const output3 =describeCountry(`South Africa`, 53, `Johannesburg`);
// // console.log(output3);



///// Function Declarations vs. Expressions
// const percentageOfWorld = function(population){
//     let percentageOfWorld1 = (population/7900)*100;
//     const populationStatistics = console.log(`China has ${population} million people, so its about ${percentageOfWorld1}% of the world population`);
//     return populationStatistics;
// }
// const log1 = percentageOfWorld(1441);
// const log2=percentageOfWorld(10);
// const log3=percentageOfWorld(8);

// console.log(log1, log2, log3);




////////////Arrow Functions 
// const percentageOfWorld3 = (population) => {
//     let percentageOfWorld1 = (population/7900)*100;
//     // const populationStatistics = console.log(`China has ${population} million people, so its about ${percentageOfWorld1}% of the world population`);
//     return percentageOfWorld1;
// }

// const log1 = percentageOfWorld3(1441);
// const log2=percentageOfWorld3(10);
// const log3=percentageOfWorld3(8);

// console.log(log1, log2, log3);







//////////////// FUNCTIONS CALLING OTHER FUNCTIONS //////////////////////////////////

// function describePopulation(country, population){
//     const country1 = percentageOfWorld3(1441);
//     const country2 = percentageOfWorld3(14);
//     const country3 = percentageOfWorld3(53);
//     console.log(`percentageWorld3 function has been executed`);

//     const statement =  console.log(`${country} has ${population} million people which is about ${country1}% of the world`);
//     return statement;
// }
// describePopulation("China", 1441);
// describePopulation("China", 1441);
// describePopulation("China", 1441);





/////////////////// FUNCTIONS ///////////////
// const calcAverage = (score1, score2, score3)=>( score1, score2, score3)/3 ;
//     console.log(3,4,5);

// const scoreDolphins = calcAverage(2,2,2);
// const scoreKoalas = calcAverage(5,5,5);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas){
//     if (avgDolphins > avgKoalas*2){
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     }
//     else if (avgKoalas > avgDolphins * 2){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     }
//     else if (avgDolphins === avgKoalas){
//         console.log("It's a tie!");
//     }
// }


// console.log(checkWinner(scoreDolphins, scoreKoalas))