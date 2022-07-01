// PASSENGER COUNTER APP 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
    // working with the DOM (document object model: how to use javascript to modify a website )

console.log(countEl)
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    // console.log(count)
}
// increment()
function save() {
    let mixed = count + " - "
    saveEl.innerText += mixed
    console.log(count)
}
save()

// let name = "Chioma"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)