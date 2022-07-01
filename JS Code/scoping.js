'use-strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        // start of function
        let output = `${firstName}, you are the ${age}, born in ${birthYear} `;
        console.log(output);

        //start of block
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;

            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scopes variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);
            
            // start of second function
            function add(a, b){
                return a + b;
            }
            console.log(add(2,3));
        }

        // logging it outside the block
        console.log(millenial);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);