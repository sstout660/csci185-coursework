

function addNumbers() {
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;

num1 = Number(num1);
num2 = Number(num2);

let output = num1 + num2;

document.querySelector('#answer').innerHTML = output;






    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
}

function subtractNumbers() {
    let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;

num1 = Number(num1);
num2 = Number(num2);

let output = num1 - num2;

document.querySelector('#answer').innerHTML = output;
}

function multiplyNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    let output = num1 * num2;
    
    document.querySelector('#answer').innerHTML = output;
}

function divideNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    let output = num1 / num2;
    
    document.querySelector('#answer').innerHTML = output;
}

function powerNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    let output = num1 ** num2;
    
    document.querySelector('#answer').innerHTML = output;
}

function remainderNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    let output = num1 % num2;
    
    document.querySelector('#answer').innerHTML = output;
}

function clearNumbers() {
    
}