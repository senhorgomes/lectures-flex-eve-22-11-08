//Impure function
let number = 5;
function addTwoNumbers(x){
    return number += x;
}
function addTwoNumbers(x){
    console.log(x);
}

function consoleFunction(){
    console.log("Overally complicated console.log")
}

function addTwoNumbers(x, y){
    consoleFunction()
    return x + y;
}
addTwoNumbers(5)
console.log(number)