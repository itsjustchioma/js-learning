// STORING MULTIPLE VALUES WITH ARRAYS

//PUSH() : ADDING AN ARRAY/ELEMENT TO THE LAST PART OF THE ARRAY
//POP() : REMOVING THE LAST ELEMENT OF AN ARRAY 
//SHIFT() : REMOVING THE FIRST PART OF AN ARRAY 
//UNSHIFT() : ADDING AN ARRAY/ELEMENT  TO THE BEGINNING OF AN ARRAY

//SHOPPING LIST 
var myList = [["cereal", 3], ["milk", 2], ["banana", 3],["juice",2],["eggs",12]]
console.log(myList);

//GLOBAL VARIABLE 
var myGlobal = 10; 
function fun1(){
    ooopsGlobal = 5;
}
function fun2(){
    var output = " ";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: "+ myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: "+ oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();