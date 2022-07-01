// FINDING THE LENGTH OF A STRING 
// var first = 0 ;
// var name = "ada";
// first = name.length; 
// console.log(first)

//BRACKET NOTATION TO FIND THE FIRST LETTER OF A STRING 
// var first = " "
// var name = "ada"

// first = name[0];
// console.log(first)

//WORD BLANKS 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var hello = " ";
    hello += "The "+myAdjective+ myNoun + myVerb + " to the store "+ myAdverb

    return hello;
}
console.log(wordBlanks("dog","big","ran","quickly"));